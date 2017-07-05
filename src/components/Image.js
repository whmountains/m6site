import React from 'react'
import styled from 'styled-components'
import autoBind from 'auto-bind'

const Container = styled.div`
  position: relative;
  background: url(${p => p.bg}) center/cover;
  overflow: hidden;
  background-color: #f6f6f6;
  ${p => `width: ` + p.width + ';'}
  ${p => `height: ` + p.height + ';'}
`

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s linear;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const AspectRatioPreserver = styled.div`
  width: 100%;
  padding-bottom: ${p => 100 / p.ratio}%;
`

export default class Image extends React.Component {
  constructor () {
    super()
    autoBind(this)

    this.state = {
      imgLoaded: false
    }
  }
  loadFullImage() {
    this.setState({
      imgLoaded: true
    })
  }
  render() {
    const image = this.props.info.responsiveSizes
    console.log('image', this.props)

    return (
      <Container
        height={this.props.height}
        width={this.props.width || this.props.imgWidth}
        className={this.props.className} >
        <AspectRatioPreserver ratio={image.aspectRatio} />
        <Img src={image.base64} />
        <Img
          srcSet={image.srcSet}
          src={image.src}
          onLoad={this.loadFullImage}
          style={{opacity: this.state.imgLoaded ? 1 : 0}} />
      </Container>
    )
  }
}

export const imageQuery = graphql`
  fragment imageInfo on ImageSharp {
    responsiveSizes(quality: 80) {
      base64
      aspectRatio
      src
      srcSet
      sizes
      originalImg
    }
  }
`
