import React, { useCallback, useState } from "react"
import useSiteMetadata from "../hooks/useSiteMetadata"

const bannerKey = "mothers2026-1"
// May 30
const bannerDate = new Date(2026, 5-1, 30)

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
        <strong>Mother's Day gift cards available now!</strong>
      </a>
    )
  )
}

export default Banner
