import React, { useCallback, useState } from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const GATSBY_RECAPTCHA_SITE_KEY = process.env.GATSBY_RECAPTCHA_SITE_KEY
const GATSBY_GOOGLE_MAPS_KEY = process.env.GATSBY_GOOGLE_MAPS_KEY

const SEND_URL = "/send"

/** @typedef {'content' | 'contact_email' | 'contact_name' } Fields */
/** @type {Fields[]} */
const FIELDS = ["content", "contact_email", "contact_name"]

/**
 * @template T
 * @typedef {function(): [T, (a: T) => void]} UseState<T>
 */

export default function Contact() {
  /** @typedef {'done' | 'error' | ''} States */
  /** @type {ReturnType<UseState<States>>} */
  const [state, setState] = useState("")
  /** @type {ReturnType<UseState<Partial<Record<Fields, string>>>>} */
  const [fields, setFields] = useState({})
  /** used to conditionally load the google recaptcha script */
  const [dirty, setDirty] = useState(false)
  const [disabled, setDisabled] = useState(true)

  const handleSubmit = useCallback(
    async e => {
      if (disabled) {
        return
      }

      e.preventDefault()

      setDisabled(true)

      try {
        /** @type {string} */
        const token = await window.grecaptcha.execute(
          GATSBY_RECAPTCHA_SITE_KEY,
          {
            action: "contact",
          }
        )

        if (!token) {
          throw new Error("No token")
        }

        await new Promise((resolve, reject) => {
          try {
            window.grecaptcha.ready(resolve)
          } catch (e) {
            reject(e)
          }
        })

        const data = {
          token,
          text: fields.content,
        }

        /** @type {string} */
        const contact = fields.contact_email || ""

        // rough email regex
        if (contact.match(/[^\s]*?@\w+\.\w{2,}/)) {
          if (fields.contact_name) {
            data["h:Reply-To"] = `${fields.contact_name} <${contact}>`
          } else {
            data["h:Reply-To"] = contact
          }
        }

        const response = await fetch(SEND_URL, {
          method: "POST",
          body: JSON.stringify(data),
        }).then(resp => resp.json())

        if (response.error) {
          setState("error")
        } else {
          setState("done")
          setFields({})
        }
      } catch (_e) {
        setState("error")
      } finally {
        setDisabled(false)
      }
    },
    [fields]
  )

  const handleChange = useCallback(
    e => {
      const newFields = {
        ...fields,
        [e.target.name]: e.target.value,
      }

      setDirty(true)
      setFields(newFields)
      setDisabled(!FIELDS.every(field => !!newFields[field]))
    },
    [fields]
  )

  const {
    phone,
    email,
    addressLocality,
    addressRegion,
    postalCode,
    streetAddress,
  } = useSiteMetadata()

  const address =
    `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`.replace(
      /\s/g,
      "+"
    )

  return (
    <>
      {dirty && (
        <Helmet>
          <script
            async
            defer
            src={`https://www.google.com/recaptcha/api.js?render=${GATSBY_RECAPTCHA_SITE_KEY}`}
          />
        </Helmet>
      )}
      <div id="contact" className="jump-link"></div>
      <div className="wrapper page-contact">
        <section className="container">
          <article>
            <header className="page-header">
              <h2 className="article-title">Contact Us</h2>
              <h3 className="article-subtitle">
                Get a free consultation today
              </h3>
            </header>
            <div className="page-content">
              <iframe
                title="Google Map"
                width="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src={`https://www.google.com/maps/embed/v1/place?key=${GATSBY_GOOGLE_MAPS_KEY}&q=${address}`}
                allowFullScreen
              ></iframe>
              <p>
                <b>Pat Bergman</b> <br />{" "}
                <i>Owner/Certified Laser Technician</i>
                <br /> {streetAddress} <br /> {addressLocality}, {addressRegion}{" "}
                <br /> {postalCode}
              </p>
              <p>
                <a href={`tel:${phone}`}>
                  <span className="glyphicon glyphicon-earphone"></span>
                  {phone}
                </a>
              </p>
              <p>
                <a target="_blank" rel="noreferrer" href={`mailto:${email}`}>
                  <span className="glyphicon glyphicon-envelope"></span>
                  {email}
                </a>
              </p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/tantallonlaserclinic/"
                >
                  <span className="icon facebook-icon"></span>
                  TantallonLaserClinic
                </a>
              </p>
              <div id="contact-form">
                <article>
                  <header className="page-header">
                    <h3>Send Us an Email</h3>
                  </header>
                  {state === "error" && (
                    <div className="alert alert-danger" role="alert">
                      Your email was <b>not</b> sent!
                    </div>
                  )}

                  {state === "done" && (
                    <div className="alert alert-success" role="alert">
                      Your email was sent! Thanks!
                    </div>
                  )}

                  <form
                    action="/send"
                    method="post"
                    className="form-horizontal"
                    onSubmit={handleSubmit}
                    disabled={disabled}
                  >
                    <div className="form-group">
                      <label
                        htmlFor="contact-name"
                        className="col-sm-2 control-label"
                      >
                        Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="contact-name"
                          placeholder="Your Name"
                          name="contact_name"
                          required=""
                          value={fields.contact_name || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="contact-email"
                        className="col-sm-2 control-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          id="contact-email"
                          placeholder="Your Email"
                          name="contact_email"
                          required=""
                          value={fields.contact_email || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label
                        htmlFor="contact-content"
                        className="col-sm-2 control-label"
                      >
                        Message
                      </label>
                      <div className="col-sm-10">
                        <textarea
                          id="contact-content"
                          className="form-control"
                          rows="3"
                          name="content"
                          required=""
                          value={fields.content || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <button
                          type="submit"
                          name="submit"
                          className="btn btn-primary btn-lg"
                          disabled={disabled}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </article>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}
