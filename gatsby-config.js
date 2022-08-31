module.exports = {
  siteMetadata: {
    siteTitle: `OOP`,
    defaultTitle: `Object-Oriented Programming`,
    siteTitleShort: `Object-Oriented Programming`,
    siteDescription: `Notes on the OOP lectures`,
    siteUrl: `https://oop.mkoe.io`,
    siteAuthor: `Michael König`,
    siteLanguage: `en`,
    siteImage: "",
    themeColor: `#61dafb`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        // githubUrl: `TODO:`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Object-Oriented Programming`,
        short_name: `OOP`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://oop.mkoe.io`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
