import React from 'react'
import styled from 'styled-components'
import Component from './testcomponent'

const backgroundColor = '#334'
const borderBottom = 'violet'

const Title = styled.h1`
  width: 300px;
  height: 300px;
  background: ${backgroundColor};
  border-bottom: 5px solid ${borderBottom};
  box-sizing: border-box;
  padding: 0 15px;
`

export default function testHtml() {
  return(
    <div>
      <Title>This is working!</Title>
      <h2>Hopefully</h2>
      <Component></Component>
    </div>
  )
}
