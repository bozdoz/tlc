import { graphql, useStaticQuery } from "gatsby"

/**
 * @returns {Record<'title' | 'description' | 'site' | 'primary_color' | 'email' | 'phone' | 'keywords', string>}
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
          }
        }
      }
    `
  )
  return siteMetadata
}

export default useSiteMetadata
