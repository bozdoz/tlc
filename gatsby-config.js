require("dotenv").config()

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
