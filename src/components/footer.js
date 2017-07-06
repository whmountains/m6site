import React from 'react'
import styled from 'styled-components'

import Image from './Image'
import Layer from './Layer'

export const HEIGHT = '400px'

const Footer = styled.div`
  padding-bottom: ${HEIGHT}
`

const FixedFooter = styled.div `
  position: fixed;
  bottom: 0;
  z-index: -5;
  width: 100%;
  height: ${HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
`
const QuoteWrapper = styled.div `
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`
const Quote = styled.h1 `
`
const Author = styled.p `
align-self: flex-end;
`
const Bg = styled.img`
  min-height: 100%;
  min-width: 100%;
`

export default ({bgImg}) => {
  return (
    <Footer>
      <FixedFooter>
        <Layer>
          <Image info={bgImg} width='100%' />
        </Layer>
        <Layer>
          <QuoteWrapper>
            <Quote>Maybe a quote or something</Quote>
            <Author>-Jonathan Jenson</Author>
          </QuoteWrapper>
        </Layer>
      </FixedFooter>
    </Footer>
  )
}
