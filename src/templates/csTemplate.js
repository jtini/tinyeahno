// @flow
import React from 'react';
import moment from 'moment';
import './style.scss';

export default function Template({
    data,
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    console.log(frontmatter)
    return (
        <div className="case-study">
            <section className="case-study__intro">
                <div className="case-study__hero-image-wrapper">
                    <img
                        src={frontmatter.featuredImage.childImageSharp.sizes.src}
                        srcSet={frontmatter.featuredImage.childImageSharp.sizes.srcSet}
                        sizes={frontmatter.featuredImage.childImageSharp.sizes.sizes}
                        width={1200}
                        alt={`${frontmatter.title} Featured Image`}
                        className="case-study__hero-image"
                    />
                </div>
                <div className="case-study__summary-wrapper">
                    <h1 className="case-study__headline">{frontmatter.title}</h1>
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
                </div>
            </section>
            <section
                className="case-study__content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
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
            title
            client
            agency
            linkText
            linkHref
            featuredImage {
              childImageSharp {
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