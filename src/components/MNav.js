import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { lighten } from 'polished'
import '../css/NavAnimation.css'

export const HEIGHT = 'auto'

const BACKGROUND = `#2C5E86`
const ACCENT = `rgba(25,118,210,1)`

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;

  height: ${HEIGHT};
  background: ${BACKGROUND};
  border-bottom: 5px solid ${ACCENT};
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
`
const Relative = styled.div`
  position: relative;
  transition: 0.5s;
  height: 52px;
`
const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  background: ${BACKGROUND};
  color: #fff;
`
const Name = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 35px;
  font-weight: 500;
`

const Links = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 20px 0;
  transition: 0.5s;
  width: 100%;
  top: -76px;
  z-index: -1;
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
 background: ${BACKGROUND};

 &.active {
   background: #1976d2;
 }
`
function ShowMenu () {
  var rel = document.querySelector('.Relative').classList.contains('RelAni')
  document.querySelector('.Relative').classList.add('RelAni')
  document.querySelector('.Links').classList.add('LinkAni')
  if (rel) {
    document.querySelector('.Relative').classList.remove('RelAni')
    document.querySelector('.Links').classList.remove('LinkAni')
  }
}
export default () => {
  return (
    <Container>
      <Relative className='Relative'>
        <Top>
          <Name>El Refugio</Name>
          <i onClick={ShowMenu}>Menu</i>
        </Top>
        <Links className='Links'>
          <NavLink activeClassName='active' to='/'>Home</NavLink>
          <NavLink activeClassName='active' to='/lodge/'>Accomodations</NavLink>
          <NavLink activeClassName='active' to='/lake/'>Activities</NavLink>
          <NavLink activeClassName='active' to='/gallery/'>Gallery</NavLink>
          <NavLink activeClassName='active' to='/booking/'>Book Now</NavLink>
        </Links>
      </Relative>
    </Container>
  )
}
