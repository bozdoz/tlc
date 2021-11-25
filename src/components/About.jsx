import React from "react"

export default function About() {
  return (
    <>
      <div id="about" className="jump-link"></div>
      <div className="wrapper page-about">
        <section className="container">
          <article>
            <header className="page-header">
              <h2 className="article-title">About TLC</h2>
              <h3 className="article-subtitle">
                Treated with tender loving care
              </h3>
            </header>
            <div className="page-content">
              <p>
                At Tantallon Laser Clinic we use{" "}
                <abbr title="Intense Pulsed Light">IPL</abbr> (Intense Pulsed
                Light) Lasers from certified laser technicians in a
                professional, private, and knowledgeable clinic.
              </p>
              <p>
                We are located in Tantallon, Nova Scotia. Owned and operated by
                Pat Bergman.
              </p>
              <p>Our full list of services include:</p>
              <ul className="flex-list">
                <li>Permanent Hair Removal</li>
                <li>Skin Rejuvenation</li>
                <li>Rosacea Cleaning</li>
                <li>Acne Cleaning</li>
                <li>Pigmentation Removal</li>
                <li>Spider Vein Removal</li>
                <li>Wrinkle Reduction</li>
                <li>Skin Tightening</li>
                <li>Body Slimming</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}
