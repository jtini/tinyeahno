// @flow
import React from 'react';
import heroGraphicBg from './Hero-Graphic-BG.png';
import heroGraphicBg2x from './Hero-Graphic-BG@2x.png';
import heroGraphicFg from './Hero-Graphic-FG.svg';
import dots from './Dots.png';
import dots2x from './Dots@2x.png';
import grit from './Grit.png';
import grit2x from './Grit@2x.png';
import './style.scss';

const Hero = () => (
    <section className="hero">
        <div className="hero__container">
            <div className="hero__text">
                <h1 className="hero__headline">Hiya! Welcome to the design portfolio of Jeremy Tinianow.</h1>
                <h2 className="hero__subheadline body-lg">I’m a designer and maker specializing in design systems for digital products and visual identities.</h2>
                <div className="hero__info">
                    <p className="hero__info-label">Currently</p>
                    <p>Designer at Spruce Labs in Denver, CO</p>
                    <p>Web Chair with AIGA CO</p>
                </div>
            </div>
        </div>
    </section>
)


export default Hero;