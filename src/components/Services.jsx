import React from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"

export default function Services() {
  const { title } = useSiteMetadata()

  return (
    <div className="page-home">
      <section>
        <header className="page-header">
          <h1 className="site-title">{title}</h1>
          <h3 className="site-description">Treated with tender loving care</h3>
        </header>
        <div className="content-home">
          <div
            className="side-img"
            style={{
              backgroundImage:
                "url(/images/sections/AdobeStock_99686454_sm.jpeg)",
            }}
          ></div>
          <div className="wrapper">
            <div className="container-fluid">
              <div className="page-content">
                <h2>Permanent Hair Removal</h2>
                <p>
                  Intense Pulsed Light (
                  <abbr title="Intense Pulsed Light">IPL</abbr>) laser hair
                  removal is a <u>painless</u> and <u>safe</u> procedure that
                  results in the removal of unwanted hair due to follicles being
                  destroyed and hair growth reduced forever.
                </p>
                <p>
                  By targeting the pigment, the hair follicles are shut down and
                  regrowth diminished in those areas. <u>Amazing results</u> in
                  reduction of in-grown hairs and redness caused by waxing and
                  shaving.
                </p>
                <h2>Photo Rejuvenation</h2>
                <p>
                  Photo Rejuvenation is a procedure where
                  <abbr title="Intense Pulsed Light">IPL</abbr> is used to
                  diminish imperfections in the skin, including treatment for
                  skin pigmentation, sun damage, thread veins, rosacea, acme and
                  scarring reduction.
                </p>
                <h2>Skin Tightening</h2>
                <p>
                  Radio Frequency Tightening in the skin involves applying radio
                  frequency waves which carry heat and energy deep into the skin
                  resulting in the improvement of lines and wrinkles and loose
                  skin due to the production of collagen and elastin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
