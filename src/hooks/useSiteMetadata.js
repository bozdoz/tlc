import { graphql, useStaticQuery } from "gatsby"

/**
 * @returns {Record<'title' | 'description' | 'site' | 'primary_color' | 'email' | 'phone' | 'keywords' | 'streetAddress' | 'addressLocality' | 'addressRegion' | 'postalCode' | 'lat' | 'lng' | 'mapZoom', string>}
 */
const useSiteMetadata = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            site
            primary_color
            email
            phone
            keywords
            streetAddress
            addressLocality
            addressRegion
            postalCode
            lat
            lng
            mapZoom
          }
        }
      }
    `
  )
  return siteMetadata
}

export default useSiteMetadata
