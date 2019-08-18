// @flow
import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layouts';
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
    <Layout>
      <Hero />
      <CaseStudyGrid posts={edges} />
    </Layout>
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
                fluid(maxWidth: 600) {
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
