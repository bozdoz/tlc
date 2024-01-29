require("dotenv").config()

/**
 * Cornerstone Natural pathic ., a Upper Tantallon B3Z 2J6
 */
module.exports = {
  siteMetadata: {
    title: "Tantallon Laser Clinic",
    site: "https://tantallonlaserclinic.ca",
    primary_color: "#a8e2e6",
    email: "tantallonlaser@gmail.com",
    phone: "1-902-579-9403",
    description:
      "Tantallon Laser Clinic provides professional, certified laser treatment in Nova Scotia",
    keywords:
      "TLC, Tantallon Laser Clinic, Laser Treatment, Certified Laser Technician, Skin Therapy, Tattoo Removal, Scar Removal, Laser Hair Removal, Beauty, Nova Scotia, Tantallon",
    addressLocality: "Upper Tantallon",
    addressRegion: "NS",
    postalCode: "B3Z 2J6",
    addressPublicName: "Cornerstone Naturopathic",
    streetAddress: "14 Old School Road",
    streetAddressLine2: "",
    lat: "44.68434613814297",
    lng: "-63.88717489452382",
    mapZoom: "17",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-71149301-1",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
}
