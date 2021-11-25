import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <>
      <div id="top" />
      <a href="#main" className="sr-only sr-only-focusable">
        Skip to main content
      </a>
      <header id="header" className="header">
        <div id="header-bg-gradient" />
        <div id="header-image" />
        <div id="header-fg-gradient" />
        <nav id="main-navigation" className="navbar navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#top">
                <span className="logo">{title}</span>
              </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#specials">Specials</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="header-content">
          <div className="container" />
        </div>
      </header>
    </>
  )
}
