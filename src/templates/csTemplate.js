// @flow
import React from 'react';
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
                <img
                    src={frontmatter.featuredImage.childImageSharp.sizes.src}
                    srcSet={frontmatter.featuredImage.childImageSharp.sizes.srcSet}
                    sizes={frontmatter.featuredImage.childImageSharp.sizes.sizes}
                    width={1200}
                    alt={`${frontmatter.title} Featured Image`}
                    className="case-study-link__image case-study-link__image--desktop"
                />
                <h1 className="case-study__headline">{frontmatter.title}</h1>
                <div className="case-study__summary">
                    {frontmatter.client &&
                        <div className="summary__item">
                            <p className="summary-item__label">Client</p>
                            <p className="summary-item__text">{frontmatter.client}</p>
                        </div>
                    }
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