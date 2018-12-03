// @flow
import React from 'react';
import { Link } from 'gatsby'
import './style.scss';

const Footer = () => (
    <footer className="footer">
        <p className="footer__text"><Link to="/">Jeremy Tinianow</Link></p>
        <p className="footer__text">
            <a href="mailto:jeremy@tinyeahno.com" className="footer__link">jeremy@tinyeahno.com</a>
        </p>
        <p className="footer__text full-width">©2018</p>
    </footer>
)

export default Footer;