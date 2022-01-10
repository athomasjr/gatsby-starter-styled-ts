const siteMetadata = require('./site/metadata')

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        // siteUrl: siteUrl,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     // icon: siteMetadata.favicon,
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-root-import`,
  ],
}
