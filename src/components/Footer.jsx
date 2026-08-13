import React from "react"

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="shell site-footer-inner">
        <div>
          <img
            className="footer-logo"
            src="/images/tlc-logo-new.svg"
            alt="Tantallon Laser Clinic"
          />
          <p className="footer-note">With gratitude, Pat</p>
        </div>
        <nav aria-label="Footer navigation" className="footer-nav">
          <a href="#message">The update</a>
          <a href="#continuing-care">Continuing care</a>
          <a href="#top">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  )
}
