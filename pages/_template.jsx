import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import styled from 'styled-components'

import Footer, { HEIGHT as FOOT_HEIGHT } from '../components/footer'
import Nav, { HEIGHT as NAV_HEIGHT } from '../components/Nav'

const Container = styled.div`
  margin-top: ${NAV_HEIGHT};
  margin-bottom: ${FOOT_HEIGHT};
  min-height: calc(100vh - 57px);

  box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, 0.59);
`

export default class Template extends React.Component {
  render () {
    return (
      <Container>
        <Nav />
        <Helmet title={config.siteTitle}>
          <link href="https://fonts.googleapis.com/css?family=Arvo|Caveat+Brush|Source+Sans+Pro" rel="stylesheet" />
          <script src='https://use.fontawesome.com/c0b81a52b9.js' />
        </Helmet>
        {this.props.children}
        <Footer />
      </Container>
    )
  }
}
