import React from "react"

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <section className="container">
        <div role="navigation">
          <ul className="nav navbar-nav">
            <li>
              <a href="#specials">Specials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/tantallonlaserclinic/"
              >
                <span className="icon monochrome facebook-icon" />
                TantallonLaserClinic
              </a>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
