import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../css/MasterStyles.css'
import Buttons from '../components/Buttons'


const Wrapper = styled.div `
  width: 100vw;
  padding: 0 71px;
  background: #333;
  display: flex;
  flex-flow: column wrap;
`
const Title = styled.h1 `
  width: 100%;
  color: white;
  text-align: center;
`
const Checking = styled.div `
  width: 30vw;
  background: #FFFFFF;
`

export default class Index extends React.Component {
  render () {
    return (
      <div id='main'>
        <Helmet>
          <title>El Refugio | Booking</title>
        </Helmet>
        <Wrapper>
          <Title>Choose Your Adventure</Title>
          <Checking></Checking>
        </Wrapper>
      </div>
    )
  }
}
