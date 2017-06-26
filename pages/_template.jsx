import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'

import Nav from '../components/Nav'

export default class Template extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Helmet title={config.siteTitle} />
        {this.props.children}
      </div>
    )
  }
}
