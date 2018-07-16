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
        }
      }
    }
  `;