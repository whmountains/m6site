import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
// import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet>
          <title>El Refugio | Home</title>
        </Helmet>
        <h1>For Families, by a family!</h1>
        <p>This is a test to see how fast hot reloading works</p>
        <p>Now go build something great.</p>
        <Link to={prefixLink('/page-2/')}>Go to page 2</Link>
      </div>
    )
  }
}
