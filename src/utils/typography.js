import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

// NOTE: This file is referenced from html.js so it won't hot-reload.
// You have to restart the gatsby server to see your changes.

export const fontStack = ['Source Sans Pro', 'Avenir Next', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif']

const options = {
  baseFontSize: '18px',
  headerFontFamily: fontStack,
  bodyFontFamily: fontStack,
  baseLineHeight: 1.45,
  scaleRatio: 2.25,
  plugins: [new CodePlugin()],
  overrideStyles: ({ rhythm, scale }, options) => ({
    [MOBILE_MEDIA_QUERY]: {
      // Make baseFontSize on mobile 16px.
      html: {
        fontSize: `${16 / 16 * 100}%`,
      },
    },
  }),
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
