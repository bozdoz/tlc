import React from "react"

export default function Continuation() {
  return (
    <section
      id="continuing-care"
      className="continuation-section"
      aria-labelledby="continuation-title"
    >
      <div className="shell">
        <div className="section-heading section-heading-centered">
          <p className="eyebrow">For existing clients</p>
          <h2 id="continuation-title">
            Keep your personal laser care moving forward.
          </h2>
          <p>
            Pat has arranged a recommended handoff with an associate who uses
            the exact same machine and will honour Tantallon Laser Clinic
            pricing.
          </p>
        </div>

        <div className="continuation-grid">
          <article className="provider-card">
            <div className="provider-card-top">
              <span className="provider-badge" aria-hidden="true">
                CL
              </span>
              <p className="eyebrow">Recommended associate</p>
            </div>
            <h3>Cresthaven Laser</h3>
            <p className="provider-name">Jennalee Lewin</p>

            <address className="provider-address">
              <span>8 Eagle Lane</span>
              <span>Bedford, Nova Scotia</span>
            </address>

            <div className="provider-links">
              <a href="tel:+19024407478">902-440-4478</a>
              <a href="mailto:info@cresthavenlaser.ca">
                info@cresthavenlaser.ca
              </a>
            </div>

            <div className="provider-actions">
              <a className="button button-primary" href="tel:+19024407478">
                Call Cresthaven
              </a>
              <a
                className="button button-outline"
                href="mailto:info@cresthavenlaser.ca"
              >
                Send an email
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  )
}
