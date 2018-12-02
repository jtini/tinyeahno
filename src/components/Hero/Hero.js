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
                <h2 className="hero__subheadline body-lg">I’m a designer at the crossroads between digital product and brand, design and production, and idea and reality. Currently, leading product design at <a className="text-link" href="https://sprucelabs.ai/" target="_blank" rel="noopener noreferrer">Spruce Labs</a>, formerly at <a className="text-link" href="https://barbershop.io/" target="_blank" rel="noopener noreferrer">Barbershop</a>.</h2>
            </div>
        </div>
    </section>
)


export default Hero;