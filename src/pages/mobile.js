import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Footer from '../components/footer'
import Buttons from '../components/Buttons'
import Image from '../components/Image'
import { HEIGHT as NAV_HEIGHT } from '../components/Nav'

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

const Layer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const PlaceTop = styled.div `
  display: flex;
  flex-wrap: wrap;
`
const PlaceBottom = styled.div `
  display: flex;
  flex-wrap: wrap;
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

const LeftImage = styled(Image)`
  transform: rotate(-3deg);
`
const RightImage = styled(Image)`
  transform: rotate(3deg);
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
  width: 100%;
  height: calc(80vh - ${NAV_HEIGHT});
  position: relative;
`
const HomeTitle = styled.h1`
  color: #FFFFFF;
  text-align: center;
  font-family: caveat_brushregular;
  font-size: 75px;
  letter-spacing: 7px;
`
const SubTitle = styled.h3`
  color: #FFFFFF;
  text-align: center;
`
const ThePlace = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  padding: 40px 0;
  overflow: hidden;
  background: linear-gradient(270deg, #A6D2EC, white);
`
const Gallery = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #F3F2F2;
`
const TheTeam = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #2C5E86;
  padding: 20px 5px;
`

const SplashText = styled.div`
  margin: auto;
  display: flex;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const SplashSep = styled.img`
  height: 70px;
  width: 100%;

  position: absolute;
  margin-top: -35px;
`
const Container = styled.div``

export default class Index extends React.Component {
  render () {
    const { splashImg, lodgeImg, lakeImg, teamImg, brushSep1 } = this.props.data
    console.log('brushsep', brushSep1)

    return (
      <Container>
        <Helmet>
          <title>El Refugio | Home</title>
        </Helmet>
        <Splash>
          <Layer>
            <Image width='100%' info={splashImg} />
          </Layer>
          <Layer>
            <SplashText>
              <HomeTitle>For families, by a family.</HomeTitle>
              <SubTitle>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Aenean commodo ligula eget dolor. Aenean massa.</SubTitle>
              <ButtonsWrapper>
                <Buttons color='blue' to='booking'>Reserve a Room</Buttons>
                <Buttons color='red' to='activities'>More Info</Buttons>
              </ButtonsWrapper>
            </SplashText>
          </Layer>
        </Splash>
        <SplashSep src={brushSep1.responsiveSizes.src} srcSet={brushSep1.responsiveSizes.srcSet} />
        <ThePlace>
          <PlaceTop>
            <LeftImage imgWidth='50%' info={lodgeImg} />
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
            <RightImage imgWidth='50%' info={lakeImg} />
          </PlaceBottom>
        </ThePlace>
        <SplashSep src={brushSep1.responsiveSizes.src} srcSet={brushSep1.responsiveSizes.srcSet} />
        <Gallery>
          <h1>Gallery</h1>
        </Gallery>
        <TheTeam>
          <TeamImage>
            <Image height='100%' info={teamImg} />
          </TeamImage>
          <TeamInfo>
            <h1>The Team</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
          </TeamInfo>
        </TheTeam>
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
    },
    brushSep1: imageSharp(id: { regex: "/stroke4/" }) {
      ...imageInfo
    }
  }
`
