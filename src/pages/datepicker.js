import React from 'react'
import styled from 'styled-components'

import Calendar from '../components/DatePicker'

console.log('datepicker', Calendar)

const Blue = {
  background: 'blue',
  height: '90vh'
}

export default class Index extends React.Component {
  render () {
    return (
      <div style={Blue}>
        <Calendar />
        test
      </div>
    )
  }
}
