import React from "react"

export default function ClosureNotice() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="shell hero-inner">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">A personal note from Pat</p>
            <h1 id="hero-title">Tantallon Laser Clinic is closing.</h1>
            <p className="hero-lede">
              After 16 wonderful years, I want to share my heartfelt thanks and
              a next step for clients who would like to continue their care.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#message">
                Read Pat&apos;s note <span aria-hidden="true">↓</span>
              </a>
              <a className="button button-quiet" href="#continuing-care">
                See continuing-care details
              </a>
            </div>
          </div>
          <aside
            className="hero-card"
            aria-label="Tantallon Laser Clinic history"
          >
            <span className="hero-card-mark" aria-hidden="true">
              tlc
            </span>
            <p className="hero-card-label">2009 — 2026</p>
            <h2>16 years of care, connection, and trust.</h2>
            <p>
              Thank you to every client who made Tantallon Laser Clinic part of
              their story.
            </p>
            <p className="signature">— Pat</p>
          </aside>
        </div>
      </section>

      <div className="notice-bar">
        <div className="shell notice-bar-inner">
          <span className="notice-dot" aria-hidden="true" />
          <p>
            Existing client?{" "}
            <a href="#continuing-care">Learn about the recommended next step</a>
            .
          </p>
        </div>
      </div>

      <section
        id="message"
        className="message-section"
        aria-labelledby="message-title"
      >
        <div className="shell message-layout">
          <div className="message-intro">
            <p className="eyebrow">A message from Pat</p>
            <h2 id="message-title">Thank you for being part of the journey.</h2>
            <p className="message-intro-lede">
              Please take a moment to read Pat&apos;s full note about the
              closure and the option available to existing clients.
            </p>
            <div className="message-rule" aria-hidden="true" />
            <p className="message-aside">
              <strong>16 years</strong>
              <span>of wonderful clientele</span>
            </p>
          </div>

          <article className="letter-card">
            <p>
              After much lamenting and consideration, I want to inform you all
              that my main circuit board has failed on my laser machine and
              stopped working as of last week. I have had a technician confirm
              it is finished.
            </p>
            <p>
              The investment to replace the laser at this time just doesn&apos;t
              make financial sense, so I&apos;ve decided to close down Tantallon
              Laser Clinic at this time.
            </p>
            <p>
              It has been an amazing 16 years with the most wonderful clientele
              who have been so very supportive and kind. Many of you I consider
              friends. I will certainly miss our interaction and the patient
              relationship that was built over the years, and I just want to
              thank you all for your support. Hopefully our paths will cross
              again and again.
            </p>
            <p>
              I have arranged with an associate who has the exact same machine
              as myself to take on my caseload. If you wish to continue your
              schedule of appointments with her, please let me know, as she
              would need to know the setting intensities for your follow-up
              appointments.
            </p>
            <p>
              She will honour my pricing, and I would personally recommend her.
              She is opening up some extra days next week for my existing
              clients needing appointments. If you would like this option,
              please be sure to notify me so I am able to pass on the correct
              information and pricing. I feel with this option you can complete
              the personal laser care you have started with me.
            </p>
            <p>
              Looking forward to hearing from you to complete this process, and
              thank you for your understanding of my situation.
            </p>
            <p className="letter-signoff">
              Blessings to you all,
              <strong>Pat</strong>
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
