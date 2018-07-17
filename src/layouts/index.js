// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
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
  </div>
)

export default TemplateWrapper
