import React from 'react'
import styled from 'styled-components'

import Image from '../components/Image'

const Img = styled.img`
  width: 100%;
`

export default (props) => {
  console.log('img-test props', props)

  return (
    <Image info={props.data.testImg} />
  )
  // return null
}

export const pageQuery = graphql`
  query ImgTestQuery {
    testImg: imageSharp(id: { regex: "/splash-full/" }) {
      ...imageInfo
    }
  }
`
