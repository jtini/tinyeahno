module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {

      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `work sans\:400,500` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/casestudies`,
        name: "markdown-pages",
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `data`,
    //     path: `${__dirname}/src/data/`,
    //   },
    // },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              quality: 100,
              maxWidth: 1400,
              linkImagesToOriginal: false,
              sizeByPixelDensity: true,
              showCaptions: true
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
