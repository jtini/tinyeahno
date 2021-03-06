// @flow
import React from 'react';
import { graphql } from 'gatsby';
import cx from 'classnames';
import Layout from '../components/layouts'
import Header from '../components/Header';
import CaseStudyLink from '../components/CaseStudyLink/CaseStudyLink';
import Img from "gatsby-image";
import './style.scss';

export default function Template({
    data,
    pageContext
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { previous, previous02 } = pageContext;
    return (
        <Layout>
            <Header showMailto /><div className={cx("case-study", frontmatter.slug)}>
                <section className="case-study__intro">
                    <div className="case-study__hero-image-wrapper">
                        <Img fixed={frontmatter.featuredImage.childImageSharp.fixed}
                            className="case-study__hero-image"
                            style={{ position: 'absolute', width: '100%', height: '100%' }}
                        />
                    </div>
                    <div className="case-study__summary-wrapper">
                        <h1 className="case-study__headline">{frontmatter.title}</h1>
                    </div>
                    <div className="case-study__summary">
                        {frontmatter.client &&
                            <div className="summary__item">
                                <p className="summary-item__label">Client</p>
                                <p className="summary-item__text">{frontmatter.client}</p>
                            </div>
                        }
                        {frontmatter.linkText && frontmatter.linkHref &&
                            <div className="summary__item">
                                <p className="summary-item__label">Visit</p>
                                <p className="summary-item__text">
                                    <a href={frontmatter.linkHref} target="_blank" rel="noopener noreferrer" className="case-study__text-link">{frontmatter.linkText}</a>
                                </p>
                            </div>
                        }
                    </div>
                </section>
                <section
                    className="case-study__content"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
                <section className="case-study__more-work">
                    <h3 className="case-study__more-work-headline">More Work</h3>
                    <div className="case-study__more-work-container">
                        <CaseStudyLink post={previous} />
                        <CaseStudyLink post={previous02} />
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
            date(formatString: "YYYY")
            path
            slug
            title
            client
            agency
            linkText
            linkHref
            featuredImage {
              childImageSharp {
                fixed(width: 1200, height: 800) {
                    ...GatsbyImageSharpFixed
                }
                fluid(maxWidth: 2400) {
                  src
                  srcSet
                  sizes
                }

                  sizes(maxWidth: 2400) {
                    ...GatsbyImageSharpSizes
                }
              }
            }
        }
      }
    }
  `;