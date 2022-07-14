/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require("dotenv").config({
  path: ".env",
})

module.exports = {
  /* Your site config here */
  siteMetadata: { //Podaci za prikaz korisnicima na ekranu
    title: 'Ericsson Nikola Tesla Summer Camp',
    description: 'Blog vezan uz e-Environment Multisite architecture'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ericsson Nikola Tesla`,
        icon: `src/images/Ericsson-nikola-tesla.png`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-apostrophe",
      options: {
        apiKey: process.env.APOS_KEY,
        baseUrl: "http://localhost:3000",
        pieceTypes: ["program", "staff-member"],
      },
    },
  ],
};
