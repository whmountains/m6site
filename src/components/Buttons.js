import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Base = styled(Link) `
  display: block;
  padding: 15px 5px;
  width: 150px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
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
  small: {minWidth: '150px', padding: '10px 0'},
  medium: {minWidth: '150px'},
  large: {minWidth: '300px'},
  span: {minWidth: '100%'}
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
