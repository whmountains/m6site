import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Container = styled.div`
  height: 60px;
  background: #2C5E86;
  border-bottom: 5px solid rgba(25,118,210,1);
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
`

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

const NavLink = styled.a`
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 0 15px;
 color: white;
`

export default () => {
  return (
    <Container>
      <Logo /> {/* TODO: fill in this image */}
      <Name>El Refugio</Name>
      <Links>
        <Link href='/home'><NavLink>Home</NavLink></Link>
        <Link href='/lodge'><NavLink>Accomodations</NavLink></Link>
        <Link href='/lake'><NavLink>Activities</NavLink></Link>
        <Link href='/gallery'><NavLink>Gallery</NavLink></Link>
        <Link href='/booking'><NavLink>Book Now</NavLink></Link>
      </Links>
    </Container>
  )
}
