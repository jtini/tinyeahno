// @flow
import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/Header';
import Hero from '../components/Hero/Hero';
import CaseStudyGrid from '../components/CaseStudyGrid/CaseStudyGrid';
import './index.scss';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges }
  }
}) => {
  return (
    <div>
      <Header />
      <Hero />
      <CaseStudyGrid posts={edges} />
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
          }
        }
      }
    }
  }
`;
