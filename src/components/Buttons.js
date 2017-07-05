import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Base = styled(Link) `
  display: block;
  padding: 20px;
  width: 200px;
  text-align: center;
  text-decoration: none;
  color: #FFFFFF;
  border-radius: 3px;
  cursor: pointer;
`
const Red = Base.extend `
    background: #D97455;
`
const Blue = Base.extend `
    background: #1976D2;
`
const sizes = {
  small: {width: '150px', padding: '10px 0'},
  medium: {width: '200px'},
  large: {width: '300px'},
  span: {width: '100%'}
}
export default function Button ({children, color, onClick, to, size}) {
  switch (color) {
    default:
    case 'red':
      return <Red onClick={onClick} to={to} style={sizes[size]}>{children}</Red>
      break
    case 'blue':
      return <Blue onClick={onClick} to={to} style={sizes[size]}>{children}</Blue>
      break
  }
}
