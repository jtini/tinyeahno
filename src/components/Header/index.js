// @flow
import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

const Header = () => (
  <header className="header">
    <Link to="/">Jeremy Tinianow</Link>
    <a href="mailto:jermtee@gmail.com" className="header__link">jermtee@gmail.com</a>
  </header>
)

export default Header
