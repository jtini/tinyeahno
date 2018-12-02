// @flow
import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

const Header = (props: Object) => {
  const { showMailto } = props;
  return (
    <header className="header">
      <Link className="header__title" to="/">Jeremy Tinianow</Link>
      {
        showMailto && <a href="mailto:jeremy@tinyeahno.com" className="header__link">jeremy@tinyeahno.com</a>
      }
    </header>
  )
}

export default Header
