import React from 'react'
import styled from 'styled-components'

const Footer = styled.div `
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 235px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/7/7a/Tatra_Mountains_banner.jpg");
  background-size: cover;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const QuoteWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`
const Quote = styled.h1 `
`
const Author = styled.p `
align-self: flex-end;
`
export default function footer () {
  return(
    <Footer>
      <QuoteWrapper>
        <Quote>Maybe a quote or something</Quote>
        <Author>-Jonathan Jenson</Author>
      </QuoteWrapper>
    </Footer>
  )
}
