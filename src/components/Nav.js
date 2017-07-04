import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { lighten } from 'polished'

export const HEIGHT = '60px'

const BACKGROUND = `#2C5E86`
const ACCENT = `rgba(25,118,210,1)`

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;

  background: ${BACKGROUND};
  border-bottom: 5px solid ${ACCENT};
  box-sizing: border-box;
  height: ${HEIGHT};

  display: flex;
  padding: 0 15px;
`

const Logo = styled.img`

`

const Name = styled.h1`
  color: #fff;
  align-self: center;
  margin: 0;
  margin-right: auto;
  font-size: 35px;
  font-weight: 500;
`

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

const NavLink = styled(Link)`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 0 15px;
 color: white;
 font-size: 22px;
 text-decoration: none;
 cursor: pointer;

 &.active {
   background: #1976d2;
 }

 *:hover > & {
   background: transparent;

   &:hover {
     background: #1976d2;
   }
 }
`

export default ({activePath = '/'}) => {
  console.log(activePath)

  return (
    <Container>
      <Logo /> {/* TODO: fill in this image */}
      <Name>El Refugio</Name>
      <Links>
        <NavLink activeClassName='active' to='/'>Home</NavLink>
        <NavLink activeClassName='active' to='/lodge/'>Accomodations</NavLink>
        <NavLink activeClassName='active' to='/lake/'>Activities</NavLink>
        <NavLink activeClassName='active' to='/gallery/'>Gallery</NavLink>
        <NavLink activeClassName='active' to='/booking/'>Book Now</NavLink>
      </Links>
    </Container>
  )
}
