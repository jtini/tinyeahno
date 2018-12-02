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
                <h1 className="hero__headline">Designer&nbsp;& Maker</h1>
                <h2 className="hero__subheadline h1">Currently, Digital Product Designer at <span className="strikethrough">Barbershop</span> Spruce Labs in Denver,&nbsp;CO.</h2>
            </div>
        </div>
    </section>
)


export default Hero;