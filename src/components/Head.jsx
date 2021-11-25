import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

export default function Head({ title: passedTitle }) {
  const siteMetadata = useSiteMetadata()
  const title = passedTitle || siteMetadata.title
  const {
    description: desc,
    keywords,
    site,
    primary_color,
    phone,
    email,
  } = siteMetadata
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"
      />

      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

      <meta name="keywords" content={keywords} />
      <meta name="description" content={desc} />

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossOrigin="anonymous"
      />

      <link rel="stylesheet" href="/css/style.css" />

      <link
        rel="icon"
        type="image/x-icon"
        sizes="16x16 24x24 32x32 64x64"
        href="favicon.ico"
      />

      <link rel="apple-touch-icon" href="images/tlc-sq.png" />
      <link rel="apple-touch-startup-image" href="images/tlc-sq.png" />
      <link
        rel="apple-touch-icon-precomposed"
        href="images/icons/apple-touch-icon-precomposed.png"
      />
      <meta name="msapplication-TileImage" content="images/tlc-sq.png" />

      <meta name="theme-color" content={primary_color} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={desc} />
      <meta itemProp="image" content={`${site}images/tlc-sq.png`} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@bozdoz" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:creator" content="@bozdoz" />
      <meta name="twitter:image" content={`${site}images/tlc-sq.png`} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site} />
      <meta property="og:image" content={`${site}images/tlc-sq.png`} />
      <meta property="og:description" content={desc} />
      <meta property="og:site_name" content={title} />
      <script type="application/ld+json">
        {`{
     	"@context": "http://schema.org",
     	"@type": "LocalBusiness",
     	"address": {
       "@type": "PostalAddress",
       "addressLocality": "Upper Tantallon",
       "addressRegion": "NS",
       "postalCode":"B3Z0H5",
       "streetAddress": "1033 Westwood Blvd."
     	},
     	"description": "${desc}",
     	"name": "${title}",
     	"telephone": "${phone}",
     	"openingHours": "Mo,Tu,We,Th,Fr 09:00-17:00",
       "url": "${site}",
       "email": "${email}",
       "logo": "${site}images/tlc-sq.png"
     	"geo": {
       "@type": "GeoCoordinates",
       "latitude": "44.7337",
       "longitude": "-63.8778"
    		},
     	"sameAs" : [ "https://www.facebook.com/tantallonlaserclinic/" ],
       "hasMap": "https://www.google.com/maps/place/Tantallon+Laser+Clinic/@44.733702,-63.8778161,17z/data=!3m1!4b1!4m5!3m4!1s0x4b598d8ef04d6ee9:0x4b9fec1cd6367046!8m2!3d44.733702!4d-63.8756221"
    }`}
      </script>
    </Helmet>
  )
}
