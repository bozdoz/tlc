import React, { useCallback, useState } from "react"

const bannerKey = "moving2022-33"
// october 1, 2022
const bannerDate = new Date(2022, 10, 1)

const Banner = () => {
  const [bannerVisible, setBannerVisible] = useState(
    !window?.localStorage.getItem(bannerKey)
  )

  const handleClick = useCallback(() => {
    window?.localStorage.setItem(bannerKey, "1")
    setBannerVisible(false)
  }, [])

  const shouldShow = new Date() < bannerDate

  return (
    shouldShow &&
    bannerVisible && (
      <a id="banner" onClick={handleClick} href="#contact">
        <strong>We've moved!</strong> &nbsp; Find us at &nbsp;
        <strong>570 Oceanstone Drive</strong>
      </a>
    )
  )
}

export default Banner
