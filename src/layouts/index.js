// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer/Footer'
import './style.scss'

const TemplateWrapper = ({ children }: any) => (
  <div>
    <Helmet
      title="Jeremy Tinianow"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

export default TemplateWrapper
