import React from 'react'
import styled from 'styled-components'

const backgroundColor = '#334'
const borderBottom = 'violet'

const Title = styled.div`
  height: 100px;
  width: 100px;
  background: ${backgroundColor};
  border-bottom: 5px solid ${borderBottom};
  box-sizing: border-box;
  padding: 0 15px;
  color: white;
`

export default function testHtml() {
  return(
    <div>
      <Title>This is working!</Title>
      <h2>Hopefully</h2>
    </div>
  )
}
