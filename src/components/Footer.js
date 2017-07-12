import React from 'react'
import styled from 'styled-components'

import Buttons from '../components/Buttons'

import Image from './Image'

export const HEIGHT = '400px'

const Footer = styled.div `
  position: relative;
  z-index: -5;
  width: 100%;
  height: ${HEIGHT};
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #252525;
`

const Quote = styled.p `
  color: #F4F1F1;
  margin: 0;
  width: 66%;
  text-align: center;
`

const Bg = styled.img`
  min-height: 100%;
  min-width: 100%;
`

export default ({bgImg}) => {
  return (
    <Footer>
      <Quote>“Life is either a daring adventure or nothing.” - Hellen Keller</Quote>
      <Buttons size='small'>More about us</Buttons>
      <Buttons size='small'>Contact</Buttons>
    </Footer>
  )
}
