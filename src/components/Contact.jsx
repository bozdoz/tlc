import React, { useCallback, useState } from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const GATSBY_RECAPTCHA_SITE_KEY = process.env.GATSBY_RECAPTCHA_SITE_KEY
const SEND_URL = "/send"
const FIELDS = ["content", "contact_email", "contact_name"]

export default function Contact() {
  const [state, setState] = useState("")
  const [fields, setFields] = useState({})
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()

      if (disabled) {
        return
      }

      setDisabled(true)

      try {
        const token = await window.grecaptcha.execute(
          GATSBY_RECAPTCHA_SITE_KEY,
          { action: "contact" }
        )

        if (!token) {
          throw new Error("No token")
        }

        await new Promise((resolve, reject) => {
          try {
            window.grecaptcha.ready(resolve)
          } catch (error) {
            reject(error)
          }
        })

        const data = {
          token,
          text: fields.content,
        }
        const contact = fields.contact_email || ""

        if (contact.match(/[^\s]*?@\w+\.\w{2,}/)) {
          data["h:Reply-To"] = fields.contact_name
            ? fields.contact_name + " <" + contact + ">"
            : contact
        }

        const response = await fetch(SEND_URL, {
          method: "POST",
          body: JSON.stringify(data),
        }).then(result => result.json())

        if (response.error) {
          setState("error")
        } else {
          setState("done")
          setFields({})
        }
      } catch (_error) {
        setState("error")
      } finally {
        setDisabled(false)
      }
    },
    [disabled, fields]
  )

  const handleChange = useCallback(
    event => {
      const newFields = {
        ...fields,
        [event.target.name]: event.target.value,
      }

      setDirty(true)
      setFields(newFields)
      setDisabled(!FIELDS.every(field => !!newFields[field]))
    },
    [fields]
  )

  const { phone, email } = useSiteMetadata()

  return (
    <>
      {dirty && (
        <Helmet>
          <script
            async
            defer
            src={
              "https://www.google.com/recaptcha/api.js?render=" +
              GATSBY_RECAPTCHA_SITE_KEY
            }
          />
        </Helmet>
      )}
      <section
        id="contact"
        className="contact-section"
        aria-labelledby="contact-title"
      >
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow eyebrow-light">Get in touch</p>
            <h2 id="contact-title">Have a question or want to continue?</h2>
            <p>
              Pat is still available to help existing clients with the
              transition. Send a note and she will get back to you.
            </p>
          </div>

          <div className="contact-grid">
            <aside className="contact-card">
              <p className="eyebrow eyebrow-light">Reach Pat directly</p>
              <h3>Tantallon Laser Clinic</h3>
              <p className="contact-card-copy">
                For appointment questions, transfer details, or anything else
                you would like to share.
              </p>
              <div className="contact-details">
                <a className="contact-detail" href={"tel:" + phone}>
                  <span>Phone</span>
                  <strong>{phone}</strong>
                </a>
                <a
                  className="contact-detail"
                  target="_blank"
                  rel="noreferrer"
                  href={"mailto:" + email}
                >
                  <span>Email</span>
                  <strong>{email}</strong>
                </a>
              </div>
              <div className="contact-card-note">
                <span aria-hidden="true">✦</span>
                <p>
                  Thank you for your patience and understanding during this
                  transition.
                </p>
              </div>
            </aside>

            <div className="contact-form-card">
              <p className="eyebrow">Send a message</p>
              {state === "error" && (
                <div className="form-alert form-alert-error" role="alert">
                  Your email was <strong>not</strong> sent. Please try again or
                  contact Pat directly.
                </div>
              )}
              {state === "done" && (
                <div className="form-alert form-alert-success" role="status">
                  Your email was sent. Thank you!
                </div>
              )}
              <form action={SEND_URL} method="post" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="contact-name">Your name</label>
                  <input
                    type="text"
                    id="contact-name"
                    placeholder="Name"
                    name="contact_name"
                    required
                    value={fields.contact_name || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-email">Your email</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="you@example.com"
                    name="contact_email"
                    required
                    value={fields.contact_email || ""}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="contact-content">Message</label>
                  <textarea
                    id="contact-content"
                    rows="5"
                    name="content"
                    placeholder="Tell Pat how she can help..."
                    required
                    value={fields.content || ""}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="button button-light button-submit"
                  disabled={disabled}
                >
                  Send message <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
