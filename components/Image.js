import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Img = styled.img`
  width: 100%;
`

export default class Image extends React.Component {
  constructor () {
    super()
    this.state = {
      imgLoaded: false
    }
  }
  render() {
    const { image } = this.props

    return (
      <Container>
        <Img src={image.placeholder} style={{opacity: this.state.imgLoaded ? 0 : 1}} />
        <Img srcSet={image.srcSet} src={image.src} onLoad={() => this.setState({imgLoaded: true})} />
      </Container>
    )
  }
}
