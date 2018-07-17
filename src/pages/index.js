// @flow
import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/Hero/Hero';
import CaseStudyLink from '../components/CaseStudyLink/CaseStudyLink';
import './index.scss';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  const Posts = edges
    .map(edge => <CaseStudyLink key={edge.node.id} post={edge.node} />)
  return (
    <div>
      <Hero />
      <section className="case-study-grid">
        {Posts}
      </section>
    </div>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
            brief
            featuredImage {
              childImageSharp {
                responsiveSizes(maxWidth: 600) {
                  src
                  srcSet
                  sizes
                }

                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                }
              }
            }
            featuredImageDesktop {
              childImageSharp {
                responsiveSizes(maxWidth: 600) {
                  src
                  srcSet
                  sizes
                }

                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
