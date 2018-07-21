// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer/Footer'

import favicon32 from '../../static/favicon-32x32.png';
import favicon16 from '../../static/favicon-16x16.png';
import maskIcon from '../../static/safari-pinned-tab.svg';

import './style.scss'

const TemplateWrapper = ({ children }: any) => (
  <div>
    <Helmet
      title="Jeremy Tinianow"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon32 },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: favicon16 },
        { rel: 'mask-icon', href: maskIcon, color: '#5bbad5' }
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

export default TemplateWrapper
