// @flow
import React from 'react';
import CaseStudyLink from '../CaseStudyLink/CaseStudyLink';
import DesignImage from './images/Design.png';
import './style.scss';

type Props = {
    posts: Array<any>
}

const CaseStudyGrid = (props: Props) => (
    <section className="case-studies">
        <img className="case-studies__headline" src={DesignImage} alt="Design" width={120} />
        <div className="case-study-grid">
            {props.posts.map(edge => <CaseStudyLink key={edge.node.id} post={edge.node} />)}
        </div>
    </section>
)

export default CaseStudyGrid;