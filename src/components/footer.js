import React from 'react'
import styled from 'styled-components'

export const HEIGHT = '400px'

const Footer = styled.div `
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: ${HEIGHT};
  background-image: url(${p => p.bg});
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
const Bg = styled.img`
  min-height: 100%;
  min-width: 100%;
`
const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
export default (props) => {
  // const img = data.testImg.responsiveResolution
  const img = {}

  return (
    <Footer>
      <ImgWrapper>
        <Bg src={img.src} srcset={img.srcSet} />
      </ImgWrapper>
      <QuoteWrapper>
        <Quote>Maybe a quote or something</Quote>
        <Author>-Jonathan Jenson</Author>
      </QuoteWrapper>
    </Footer>
  )
}

export const pageQuery = graphql`
  fragment footer_fragment on RootQueryType {
    testImg: imageSharp(id: { regex: "/mtn-pano.jpg/" }) {
      responsiveResolution(grayscale: true, width: 614) {
        src
        srcSet
      }
    }
  }
`
