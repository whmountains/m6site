import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import Footer from '../components/footer'

import Nav from '../components/Nav'

export default class Template extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Helmet title={config.siteTitle}>
          <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' />
        </Helmet>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
