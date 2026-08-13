import React, { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div id="top" />
      <a href="#main" className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      <header id="header" className="site-header">
        <div className="shell site-header-inner">
          <a
            className="brand"
            href="#top"
            aria-label="Tantallon Laser Clinic home"
          >
            <img
              src="/images/tlc-logo-new.svg"
              alt="Tantallon Laser Clinic"
              className="brand-logo"
            />
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            onClick={() => setOpen(open => !open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span />
            <span />
            <span />
          </button>
          <nav
            id="main-navigation"
            className={"site-nav" + (open ? " is-open" : "")}
            aria-label="Main navigation"
          >
            <a href="#message" onClick={() => setOpen(false)}>
              The update
            </a>
            <a href="#continuing-care" onClick={() => setOpen(false)}>
              Continuing care
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
