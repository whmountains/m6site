import React from 'react'
import Helmet from 'react-helmet'
import { config } from 'config'
import styled from 'styled-components'

import Footer from '../components/footer'
import Nav from '../components/Nav'

const Container = styled.div`
  margin-top: 60px;
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
