module.exports = {
  pathPrefix: "/computer-science-resources",
  siteMetadata: {
    siteTitle: `SUNY Korea Computing Society`,
    defaultTitle: `SUNY Korea Computing Society`,
    siteTitleShort: `SKCS`,
    siteDescription: `Resources for Computer Science students at SUNY Korea`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `@janarosmonaliev`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#752CFF`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        githubUrl: `https://github.com/computing-society/computer-science-resources`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SUNY Korea Computing Society`,
        short_name: `SKCS`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: ``,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: `https://rocketdocs.netlify.com`,
    //   },
    // },
    `gatsby-plugin-offline`,
  ],
};
