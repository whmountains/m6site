import React from 'react'
import {PhotoSwipeGallery} from 'react-photoswipe'

let items = [
  {
    src: 'http://lorempixel.com/1200/900/sports/1',
    thumbnail: 'http://lorempixel.com/120/90/sports/1',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/1',
    thumbnail: 'http://lorempixel.com/120/90/sports/1',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/1',
    thumbnail: 'http://lorempixel.com/120/90/sports/1',
    w: 1200,
    h: 900,
    title: 'Image 1'
  },
  {
    src: 'http://lorempixel.com/1200/900/sports/2',
    thumbnail: 'http://lorempixel.com/120/90/sports/2',
    w: 1200,
    h: 900,
    title: 'Image 2'
  }
]

let options = { // http://photoswipe.com/documentation/options.html
}

const getThumbnailContent = (item) => { // The const was added and was not in the original code from npm
  return (
    <img src={item.thumbnail} width={120} height={90} />
  )
}

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <PhotoSwipeGallery items={items} options={options} thumbnailContent={getThumbnailContent} />
      </div>
    )
  }
}
