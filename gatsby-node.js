const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const csPageTemplate = path.resolve(`src/templates/csTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      // Create blog posts pages.
      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach(({ node }, index) => {
        const previous = index === posts.length - 1 ? posts[0].node : posts[index + 1].node;
        // const previous02 = index === posts.length - 2 ? posts[0].node : posts[index + 2].node;
        const previous02 = index === posts.length - 2 ?
          posts[0].node :
          index + 2 > posts.length ?
            posts[1].node : posts[index + 2].node;
        const next = index === 0 ? null : posts[index - 1].node;

        createPage({
          path: node.frontmatter.path,
          component: csPageTemplate,
          context: {
            next,
            previous,
            previous02
          },
        });
      });
    });
};