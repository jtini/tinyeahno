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
    }
  ],
}
