import React, { useCallback, useState } from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"

const bannerKey = "moving2024"
// Mar 15, 2024
const bannerDate = new Date(2024, 2, 15)

const safeLocalStorage = (() => {
  /** @type {Storage} */
  const ls =
    typeof window === "undefined"
      ? {
          getItem() {},
          setItem() {},
        }
      : localStorage

  return ls
})()

const Banner = () => {
  const { streetAddress } = useSiteMetadata()
  const [bannerVisible, setBannerVisible] = useState(
    !safeLocalStorage.getItem(bannerKey)
  )

  const handleClick = useCallback(() => {
    safeLocalStorage.setItem(bannerKey, "1")
    setBannerVisible(false)
  }, [])

  const shouldShow = new Date() < bannerDate

  return (
    shouldShow &&
    bannerVisible && (
      <a id="banner" onClick={handleClick} href="#contact">
        <strong>We've moved!</strong> &nbsp; Find us at &nbsp;
        <strong>{streetAddress}</strong>
      </a>
    )
  )
}

export default Banner
