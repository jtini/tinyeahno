// @flow
import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer/Footer'

import favicon32 from '../../static/favicon-32x32.png';
import favicon16 from '../../static/favicon-16x16.png';
import maskIcon from '../../static/safari-pinned-tab.svg';
import shareImage from '../../static/shareImage.jpg';

import './style.scss'

const TemplateWrapper = ({ children }: any) => (
  <div>
    <Helmet
      title="Jeremy Tinianow"
      meta={[
        { name: 'description', content: 'Jeremy Tinianow is a Designer & Maker. Currently, Digital Product Designer at Barbershop in Denver, CO.' },
        { property: 'og:image', content: shareImage },
        { property: 'og:image:width', content: 1200 },
        { property: 'og:image:height', content: 630 },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Jeremy Tinianow' },
        { property: 'og:description', content: 'Jeremy Tinianow is a Designer & Maker. Currently, Digital Product Designer at Barbershop in Denver, CO.' },
        { property: 'og:site_name', content: 'Jeremy Tinianow' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@jtinianow' },
        { name: 'twitter:creator', content: '@jtinianow' },
        { name: 'twitter:title', content: 'Jeremy Tinianow' },
        { name: 'twitter:description', content: 'Jeremy Tinianow is a Designer & Maker. Currently, Digital Product Designer at Barbershop in Denver, CO.' }
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
