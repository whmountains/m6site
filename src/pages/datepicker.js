import React from 'react'
import styled from 'styled-components'

import DatePicker from '../components/DatePicker'

const Blue = {
  background: 'blue',
  height: '90vh'
}

export default class Index extends React.Component {
  render () {
    return (
      <div style={Blue}>
        <DatePicker />
      </div>
    )
  }
}
