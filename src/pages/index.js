import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Footer from '../components/footer'
import Buttons from '../components/Buttons'
import { HEIGHT as NAV_HEIGHT } from '../components/Nav'
// import { config } from 'config'
import '../css/MasterStyles.css'

import splashImg from '../images/splash-full.jpg'
import theLodge from '../images/the-lodge.jpg'
import theLake from '../images/the-lake.jpg'
import theTeam from '../images/team.jpg'

const ButtonsWrapper = styled.div `
  display: flex;
  justify-content: space-around;
  align-content: center;
  width: 75%;
  max-width: 550px;
`
const PlaceTop = styled.div `
  display: flex;
`
const PlaceBottom = styled.div `
  display: flex;
`
const PlaceRight = styled.div `
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 0 50px;
`
const PlaceLeft = styled.div `
  width: 50%;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 0 50px;
`
const LeftImage = styled.div `
  width: 50%;
  height: 400px;
  transform: rotate(-3deg);
  background-image: url(${theLodge});
  background-size: cover;
  background-position: bottom;
`
const RightImage = styled.div `
  width: 50%;
  height: 400px;
  transform: rotate(3deg);
  background-image: url(${theLake});
  background-size: cover;
  background-position: bottom;
  align-self: flex-end;
`
const TeamImage = styled.div `
  width: 50%;
  height: 100%;
  background-image: url(${theTeam});
  background-size: cover;
  background-position: center;
`
const TeamInfo = styled.div `
  width: 50%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  padding: 0 50px;
`
const Splash = styled.div `
  width: 100vw;
  height: calc(80vh - ${NAV_HEIGHT});
  background-image: url(${splashImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const HomeTitle = styled.h1 `
  color: #FFFFFF;
  text-align: center;
  font-family: Caveat Brush;
  font-size: 75px;
  letter-spacing: 7px;
`
const SubTitle = styled.h3 `
  color: #FFFFFF;
  text-align: center;
`
const ThePlace = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background: #fff;
  padding: 40px 0;
  overflow: hidden;
`
const Gallery = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #F3F2F2;
`
const TheTeam = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #2C5E86;
`

export default class Index extends React.Component {
  render () {
    return (
      <div id="main">
        <Helmet>
          <title>El Refugio | Home</title>
        </Helmet>
        <Splash>
          <HomeTitle>For families, by a family.</HomeTitle>
          <SubTitle>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br/>Aenean commodo ligula eget dolor. Aenean massa.</SubTitle>
          <ButtonsWrapper>
            <Buttons color='blue'>Reserve a Room</Buttons>
            <Buttons color='red'>More Info</Buttons>
          </ButtonsWrapper>
        </Splash>
        <ThePlace>
          <PlaceTop>
            <LeftImage></LeftImage>
            <PlaceRight>
              <h1>The Lodge</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
          </PlaceRight>
          </PlaceTop>
          <PlaceBottom>
            <PlaceLeft>
              <h1>The Lake</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
            </PlaceLeft>
            <RightImage></RightImage>
          </PlaceBottom>
        </ThePlace>
        <Gallery>
          <h1>Gallery</h1>
        </Gallery>
        <TheTeam>
          <TeamImage src="http://via.placeholder.com/800x1080"/>
          <TeamInfo>
            <h1>The Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
          </TeamInfo>
        </TheTeam>
      </div>
    )
  }
}
