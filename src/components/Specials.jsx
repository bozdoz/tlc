import React from "react"

export default function Specials() {
  return (
    <>
      <div id="specials" className="jump-link"></div>
      <div className="wrapper page-specials">
        <section className="container">
          <article>
            <header className="page-header">
              <h2 className="article-title">Specials</h2>
              <h3 className="article-subtitle">Act now and save!</h3>
            </header>
            <div className="page-content">
              <div className="special-offer">
                <h2>Buy 2 Treatments, Get 2 Free!</h2>
                <p>Contact us and ask for this special. New clients only.</p>
                <p>
                  <a className="btn btn-primary btn-lg" href="#contact">
                    Click here
                  </a>
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  )
}
