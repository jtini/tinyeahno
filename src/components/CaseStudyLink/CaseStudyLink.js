// @flow
import React from "react";
import Link from "gatsby-link";
import './style.scss';

const CaseStudyLink = ({ post }) => {
    console.log(post)
    return (
        <div className="case-study-link">
            <Link to={post.frontmatter.path} className="case-study-link__image-link">
                <img
                    src={post.frontmatter.featuredImageDesktop.childImageSharp.sizes.src}
                    srcSet={post.frontmatter.featuredImageDesktop.childImageSharp.sizes.srcSet}
                    sizes={post.frontmatter.featuredImageDesktop.childImageSharp.sizes.sizes}
                    width={600}
                    alt={`${post.frontmatter.title} Featured Image`}
                    className="case-study-link__image case-study-link__image--desktop"
                />
            </Link>
            <p className="case-study-link__text-wrapper">
                <Link to={post.frontmatter.path} className="case-study-link__text">
                    {post.frontmatter.title}
                    <span className="case-study-link__brief">{` ${post.frontmatter.brief}`}</span>
                </Link>
            </p>
        </div>
    )
}

export default CaseStudyLink;