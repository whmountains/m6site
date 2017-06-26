import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'
import { lighten } from 'polished'

const BACKGROUND = `#2C5E86`
const ACCENT = `rgba(25,118,210,1)`

const Container = styled.div`
  height: 60px;
  background: ${BACKGROUND};
  border-bottom: 5px solid ${ACCENT};
  box-sizing: border-box;

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
 font-size: 20px;
 text-decoration: none;
 cursor: pointer;

 ${'' /* by default the background shows on the active element */}
 background: ${p => p.selected && lighten(0.1, BACKGROUND)};

 ${'' /* reset the background if any of the links are hovered */}
 *:hover > & {
   background: transparent;

 ${'' /* and move it under the new link */}
   &:hover {
     background: ${lighten(0.1, BACKGROUND)};
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
        <NavLink selected={activePath === '/'} href='/'>Home</NavLink>
        <NavLink selected={activePath === '/lodge'} href='/lodge'>Accomodations</NavLink>
        <NavLink selected={activePath === '/lake'} href='/lake'>Activities</NavLink>
        <NavLink selected={activePath === '/gallery'} href='/gallery'>Gallery</NavLink>
        <NavLink selected={activePath === '/booking'} href='/booking'>Book Now</NavLink>
      </Links>
    </Container>
  )
}
