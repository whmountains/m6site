import React from 'react'
import styled from 'styled-components'

const Red = styled.a `
    display: block;
    padding: 20px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    color: #FFFFFF;
    border-radius: 3px;
    background: #D97455;
`
const Blue = Red.extend `
    background: #1976D2;
`
export default function Button ({children, color}) {
  switch (color) {
    case 'red':
      return <Red>{children}</Red>
      break
    case 'blue':
      return <Blue>{children}</Blue>
      break
    default :
      return <Red>{children}</Red>
  }
}
