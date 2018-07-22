// @flow
import React from 'react';
import Link from 'gatsby-link'
import './style.scss';

const Footer = () => (
    <footer className="footer">
        <p className="footer__text"><Link to="/">Jeremy Tinianow</Link></p>
        <p className="footer__text">
            <a href="mailto:jermtee@gmail.com" className="footer__link">jermtee@gmail.com</a>
        </p>
        <p className="footer__text full-width">©2018</p>
    </footer>
)

export default Footer;