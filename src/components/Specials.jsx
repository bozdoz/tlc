import React from "react"

// TODO: move to config, and optionally hide Specials in nav
const specials = [
  {
    header: "Mothers Day",
    details: `Gift cards available now!`,
    button: "Contact Us",
    style: {
      backgroundImage: "url(/images/mothers-floral.png)",
      minHeight: 300,
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'center',
    }
  },
  {
    header: "IPL Photo Rejuvenation Special",
    details: `Start your summer with a fresh, even skin tone
    $75 PER SESSION`,
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
              {specials.map(({ header, details, button, style }, i) => (
                <div className="special-offer" key={i} style={style}>
                  <h2>{header}</h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: details.split("\n").join("<br />"),
                    }}
                  />
                  <p>
                    <a className="btn btn-primary btn-lg" href="#contact">
                       {button ?? "Book Today!"}
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
