import React from 'react'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'

export default styled.button`
  ${'' /* Clear default styles */}
  border: none;

  text-align: center;
  text-decoration: none;
  font-size: 15px;
  color: #FFFFFF;
  border-radius: 3px;
  cursor: pointer;

  ${'' /* default color: blue */}
  background: #1976D2;
  box-shadow: 1px 2px 3px 0 rgba(48,132,214,0.43);

  ${'' /* accent color: orange */}
  ${p => p.accent && css`
    background: #D97455;
    box-shadow: 1px 2px 3px 0 rgba(221,130,102,0.43);
  `}

  padding: 0.8em 1.1em;
  font-size: 1em;

  ${p => p.size === 'small' && `padding: 0.4em 1em`}
`
