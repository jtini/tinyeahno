// @flow
import React from 'react';
import CaseStudyLink from '../CaseStudyLink/CaseStudyLink';
import './style.scss';

type Props = {
    posts: Array<any>
}

const CaseStudyGrid = (props: Props) => (
    <section className="case-study-grid">
        {props.posts.map(edge => <CaseStudyLink key={edge.node.id} post={edge.node} />)}
    </section>
)

export default CaseStudyGrid;