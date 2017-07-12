import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Buttons from '../components/Buttons'
import Image from '../components/Image'
import Stroke from '../components/Stroke'
import Footer from '../components/Footer'
import { HEIGHT as NAV_HEIGHT } from '../components/Nav'

import '../css/MasterStyles.css'

import splashImg from '../images/splash-full.jpg'
import theLodge from '../images/the-lodge.jpg'
import theLake from '../images/the-lake.jpg'
import theTeam from '../images/team.jpg'

import Toppo from '../images/Toppo.svg'
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
// Splash screen section
const Splash = styled.div `
  position: relative;
  height: calc(100vh - ${NAV_HEIGHT});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const SplashImgWrapper = styled.div `
  width: 100%;
  height: calc(100vh - ${NAV_HEIGHT});
  overflow: hidden;
  position: absolute;
  z-index: -1;
`
const SplashText = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFFFFF;
`
const SplashTitle = styled.h1 `
  font-family: caveat_brushregular;
  font-size: 75px;
`
const SplashSubTitle = styled.p `
  font-size: 30px;
`
const SplashButtons = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  & * {
    margin: 0 10px;
  }
`

// Take back your vacation
const Vacation = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #FFFFFF;
  background: #3383D3;
  padding: 50px 0;
  position: relative;
`
const VacationBackground = styled.div `
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('${Toppo}');
`
const VacationTitle = styled.h1 ``
const VacationDesc = styled.p `
  width: 600px;
`

// The Lodge
const Rotation = '1deg'
const Overlap = '-60px'

const Lodge = styled.div `
  overflow: hidden;
  padding: 50px 0;
`
const LodgeV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const LodgeI = styled.div `
  width: 60%;
`
const LodgeDesc = styled.div `
  width: 50%;
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
`
const LodgeTop = LodgeV.extend ` margin-bottom: ${Overlap}; `
const LodgeBottom = LodgeV.extend ` margin-top: ${Overlap}; `
const LodgeFirstPhoto = LodgeI.extend ` transform: rotate(calc(-1 * ${Rotation})); z-index: 1;`
const LodgeSecondPhoto = LodgeI.extend ` transform: rotate(${Rotation}); `

// Activities
const Activities = styled.div `
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Team
const Team = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: #CB755B;
  padding: 20px 150px 20px 0;
  color: #44596B;
`
const TeamImage = styled.div `
  width: 50%;
`
const TeamDesc = styled.div `
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 40px;
`

// Gallery
const Gallery = styled.div `
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Instagram = styled.div `
  padding: 20px;
  background: linear-gradient(270deg, #BC0095 0%, #E00024 45.86%, #FD6A00 100%);
`
const InstagramTag = styled.p `
  color: white;
  margin: 0;
  font-size: 30px;
`

// Call
const Call = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 50px;
`
const CallTitle = styled.h1 `
  color: #D87E63;
  font-weight: normal;
`
const CallDesc = styled.p `
  color: #424242;
  max-width: 730px;
  line-height: 35px;
`
// HTML
export default class Index extends React.Component {
  render () {
    const { splashImg, lodgeImg, lakeImg, teamImg, footerImg } = this.props.data

    return (
      <Container>
        <Helmet>
          <title>El Refugio | Home</title>
        </Helmet>
        {/* Splash Screen */}
        <Splash>
          <SplashImgWrapper>
            <Image width='100%' info={splashImg} />
          </SplashImgWrapper>
          <SplashText>
            <SplashTitle>El Refugio Lodge</SplashTitle>
            <SplashSubTitle>For familes, by a family.</SplashSubTitle>
          </SplashText>
          <SplashButtons>
            <Buttons color='blue'>Reserve a room</Buttons>
            <Buttons color='red'>More info</Buttons>
          </SplashButtons>
        </Splash>
        {/* Take back your vacation */}
        <Vacation>
          <VacationBackground />
          <VacationTitle>Take back your vacation</VacationTitle>
          <VacationDesc>
            Nestled in the Andes mountains of southern Chile, El Refugio Lodge is a place away from the hustle and haste of daily life. There is no rat-race here. It’s the starting point for adventure--or a little peace and quiet.
          </VacationDesc>
        </Vacation>
        {/* Lodge */}
        <Lodge>
          <LodgeTop>
            <LodgeFirstPhoto>
              <Image width='100%' info={lodgeImg} />
            </LodgeFirstPhoto>
            <LodgeDesc>
              <h1>The Lodge</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              <Buttons color='red'>More about the lodge</Buttons>
            </LodgeDesc>
          </LodgeTop>
          <LodgeBottom>
            <LodgeDesc>
              <h1>Make yourself at home</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              <Buttons color='blue'>Reserve a room</Buttons>
            </LodgeDesc>
            <LodgeSecondPhoto>
              <Image width='100%' info={lakeImg} />
            </LodgeSecondPhoto>
          </LodgeBottom>
        </Lodge>
        <Activities>
          <h1>Activities</h1>
        </Activities>
        <Team>
          <TeamImage>
            <Image width='100%' info={teamImg} />
          </TeamImage>
          <TeamDesc>
            <h1>The Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
          </TeamDesc>
        </Team>
        <Gallery>
          <h1>Gallery</h1>
        </Gallery>
        <Instagram>
          <InstagramTag>#ElRefugioLodge</InstagramTag>
        </Instagram>
        <Call>
          <CallTitle>Hope To See You Soon!</CallTitle>
          <CallDesc> Whether you want to spend a few days on the top of our mountains, ride a horse, raft on the famous Futaleufu river, or simply relax or kayak on the lake, El Refugio Lodge is the place to start.</CallDesc>
          <Buttons color='blue'>Reserve a room</Buttons>
        </Call>
        <Footer />
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    splashImg: imageSharp(id: { regex: "/splash-full/" }) {
      ...imageInfo
    }
    lodgeImg: imageSharp(id: { regex: "/the-lodge/" }) {
      ...imageInfo
    }
    lakeImg: imageSharp(id: { regex: "/the-lake/" }) {
      ...imageInfo
    }
    teamImg: imageSharp(id: { regex: "/team/" }) {
      ...imageInfo
    }
    brushSep1: imageSharp(id: { regex: "/stroke4/" }) {
      ...imageInfo
    }
    footerImg: imageSharp(id: { regex: "/mtn-pano/" }) {
      ...imageInfo
    }
  }
`
