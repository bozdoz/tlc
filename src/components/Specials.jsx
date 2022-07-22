import React from "react"

// TODO: move to config, and optionally hide Specials in nav
const specials = [
  {
    header: "Summer Special!",
    details: "Underarms $60.00 per session",
  },
]

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
              {specials.map(({ header, details }, i) => (
                <div className="special-offer" key={i}>
                  <h2>{header}</h2>
                  <p>{details}</p>
                  <p>
                    <a className="btn btn-primary btn-lg" href="#contact">
                      Click here
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </>
  )
}
