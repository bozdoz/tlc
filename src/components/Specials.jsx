import React from "react"

// TODO: move to config, and optionally hide Specials in nav
const specials = [
  {
    header: "IPL Photo Rejuvenation",
    details: `Rejuvenate your skin after the summer sun! Hydrate, repair, and restore your glow with nourishing care that helps your skin bounce back from UV exposure and is a perfect solution for rosacea. Because healthy, radiant skin is always in season.
    $80 PER SESSION
    IPL the perfect solution for rosacea`,
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
                  <p
                    dangerouslySetInnerHTML={{
                      __html: details.split("\n").join("<br />"),
                    }}
                  />
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
