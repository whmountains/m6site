import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../css/MasterStyles.css'
import BackgroundImage from '../images/splash-full.jpg'

const Wrapper = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('${BackgroundImage}');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  & * {
    z-index: 10;
  }
`
const BlurBg = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  background-size: 1920px;
  background-position: center;
  background-attachment: fixed;
  filter: blur(5px);
  z-index: 8;
`
const BlurTint = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 9;
`
export default class Index extends React.Component {
  render () {
    return (
      <Wrapper>
        <BlurBg />
        <BlurTint />
        <h1>Gallery</h1>
      </Wrapper>
    )
  }
}
