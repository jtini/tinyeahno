// @flow
import React from 'react';
import moment from 'moment';
import cx from 'classnames';
import Header from '../components/Header'
import CaseStudyLink from '../components/CaseStudyLink/CaseStudyLink';
import Img from "gatsby-image";
import './style.scss';

export default function Template({
    data,
    pathContext
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    const { previous, previous02 } = pathContext;
    return (
        <div>
            <Header showMailto /><div className={cx("case-study", frontmatter.slug)}>
                <section className="case-study__intro">
                    <div className="case-study__hero-image-wrapper">
                        <Img
                            resolutions={frontmatter.featuredImage.childImageSharp.resolutions}
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
                        {frontmatter.agency &&
                            <div className="summary__item">
                                <p className="summary-item__label">Agency</p>
                                <p className="summary-item__text">{frontmatter.agency}</p>
                            </div>
                        }
                        {frontmatter.date &&
                            <div className="summary__item">
                                <p className="summary-item__label">Year</p>
                                <p className="summary-item__text">{moment(frontmatter.date).format('YYYY')}</p>
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
        </div>
    );
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            slug
            title
            client
            agency
            linkText
            linkHref
            featuredImage {
              childImageSharp {
                resolutions(width: 1200, height: 800) {
                    ...GatsbyImageSharpResolutions
                }
                responsiveSizes(maxWidth: 2400) {
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