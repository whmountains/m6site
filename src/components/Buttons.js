import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Red = styled(Link) `
    display: block;
    padding: 20px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    border-radius: 3px;
    cursor: pointer;
    background: #D97455;
`
const Blue = Red.extend `
    background: #1976D2;
`
export default function Button ({children, color, onClick, to}) {
  switch (color) {
    default:
    case 'red':
      return <Red onClick={onClick} to={to}>{children}</Red>
      break
    case 'blue':
      return <Blue onClick={onClick} to={to}>{children}</Blue>
      break
  }
}
