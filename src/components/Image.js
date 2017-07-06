import React from 'react'
import styled from 'styled-components'
import autoBind from 'auto-bind'

const Container = styled.div`
  position: relative;
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
  ${p => p.blur && 'filter(blur(7px));'}
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
    const imageOpacity = ((!this.state.imgLoaded) && this.props.blurIn) ? 0 : 1

    return (
      <Container
        height={this.props.height}
        width={this.props.width || this.props.imgWidth}
        className={this.props.className} >
        <AspectRatioPreserver ratio={image.aspectRatio} />
        <Img blur src={image.base64} />
        <Img
          srcSet={image.srcSet}
          src={image.src}
          onLoad={this.loadFullImage}
          style={{opacity: imageOpacity}} />
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
