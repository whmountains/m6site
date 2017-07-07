import React from 'react'
import autoBind from 'auto-bind'
import styled from 'styled-components'
import { PhotoSwipe } from 'react-photoswipe'
import 'react-photoswipe/lib/photoswipe.css';

import Nav from '../components/MNav'

const Container = styled.div`
  padding: 100px;
`

export default class Index extends React.Component {
  constructor() {
    super()
    autoBind(this)

    this.state = {
      isOpen: false
    }
  }
  handleClose() {
    this.setState({isOpen: false})
  }
  openGallery() {
    this.setState({isOpen: true})
  }
  render () {
    console.log(this.state)
    let items = [
      {
        src: 'http://lorempixel.com/1200/900/sports/1',
        w: 1200,
        h: 900,
        title: 'Image 1'
      },
      {
        src: 'http://lorempixel.com/1200/900/sports/2',
        w: 1200,
        h: 900,
        title: 'Image 2'
      }
    ]

    let options = {
      // http://photoswipe.com/documentation/options.html
    }
    return (
      <Container>
        <button onClick={this.openGallery}>Show gallery!</button>
        <PhotoSwipe isOpen={this.state.isOpen} items={items} options={options} onClose={this.handleClose} />
      </Container>
    )
  }
}
