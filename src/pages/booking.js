import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../css/MasterStyles.css'
import Buttons from '../components/Buttons'
import titleUnderline from '../images/brush-strokes/Asorted Strokes.png'
import userIcon from '../images/user-icon.png'
import bookingBg from '../images/bookingbg.jpg'
const Wrapper = styled.div `
  width: 100vw;
  padding: 20px 71px;
  background-image: url(${bookingBg});
  background-size: 1920px;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const TitleWrapper = styled.div `
  width: 100%;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
`
const Title = styled.h1 `
  color: white;
  font-family: caveat_brushregular;
  font-size: 70px;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 30px;
    background: url(${titleUnderline});
    background-size: 560px;
    background-repeat: no-repeat;
    background-position: -20px -55px;
  }
`
const Checking = styled.div `
  position: relative;
  width: 350px;
  height: 350px;
  background: rgba(255, 255, 255, 0.89);
  border-radius: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 10;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('${bookingBg}');
    background-size: 1920px;
    background-position: center;
    background-attachment: fixed;
    filter: blur(20px);
    z-index: 1;
  }
`
const Dates = {
  display: 'flex',
  flexWrap: 'wrap'
}
const DateTitle = styled.p `
  width: 50%;
  margin-bottom: 5px;
`
const DateInput = styled.div `
  height: 40px;
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
`
const LeftBorders = {
  marginRight: '-0.5px',
  borderTopLeftRadius: '20px',
  borderBottomLeftRadius: '20px'
}
const RightBorders = {
  marginLeft: '-0.5px',
  borderTopRightRadius: '20px',
  borderBottomRightRadius: '20px'
}
const Guests = styled.select `
  height: 40px;
  -webkit-appearance: none;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 10px;
  padding-left: 40px;
  background-image: url(${userIcon});
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 15px, 50%;
  outline: none !important;
`
const Rooms = styled.div `
  width: 750px;
  display: flex;
  flex-direction: column;
`
const Room = styled.div `
  width: 100%;
  height: 450px;
  background: #FFFFFF;
  border-radius: 5px;
  overflow: hidden;
  display: inline-flex;
  flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0 2px 4px 1px rgba(0,0,0,0.21);
  margin-bottom: 40px;
`
const Photo = styled.div `
  width: 100%;
  height: 55%;
  background-image: url('https://shawneeparklodge.com/up/photo_gallery/Dbl_Woods.jpg');
  background-size: cover;
  background-position: center;
`
const Info = styled.div `
  width: 100%;
  height: 37%;
  padding: 0 40px 40px 40px;
  display: flex;
`
const Desc = styled.div `
  width: 60%;
  font-family: Arvo;
  font-size: 16px;
`
const Name = styled.h1 `
  margin: 5px 0;
  font-family: Source sans pro;
  font-size: 30px;
`
const BuyNow = styled.div `
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
const Price = styled.div `
  margin: 2px 0;
`
const Accommodations = styled.ul `
  width: 100%;
  display: flex;
  justify-content: center;
`
const Item = styled.li `
  margin: 0 7px;
`
const CheckMark = {
  color: '#0AD58D'
}
export default class Index extends React.Component {
  render () {
    return (
      <div id='main'>
        <Helmet>
          <title>El Refugio | Booking</title>
        </Helmet>
        <Wrapper>
          <TitleWrapper>
            <Title>Choose Your Adventure</Title>
          </TitleWrapper>
          <Checking>
            <div style={Dates}>
              <DateTitle>Check in</DateTitle>
              <DateTitle>Check out</DateTitle>
              <DateInput style={LeftBorders}>mm/dd/yyyy</DateInput>
              <DateInput style={RightBorders}>mm/dd/yyyy</DateInput>
            </div>
            <Guests>
              <option>1 Guest</option>
              <option>2 Guest</option>
              <option>3 Guest</option>
              <option>4 Guest</option>
            </Guests>
            <Buttons color='blue'>Check Dates</Buttons>
          </Checking>
          <Rooms>
            <Room>
              <Photo />
              <Info>
                <Desc>
                  <Name>The Quark Room</Name>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                </Desc>
                <BuyNow>
                  <Buttons color='red'>Select</Buttons>
                  <Price>$300 per night</Price>
                </BuyNow>
              </Info>
              <Accommodations>
                <Item><i style={CheckMark} className='fa fa-check-circle' aria-hidden='true'></i> Free Internet</Item>
                <Item><i style={CheckMark} className='fa fa-check-circle' aria-hidden='true'></i> Free Internet</Item>
                <Item><i style={CheckMark} className='fa fa-check-circle' aria-hidden='true'></i> Free Internet</Item>
              </Accommodations>
            </Room>
            <Room>
              <Photo />
              <Info>
                <Desc>
                  <Name>The Quark Room</Name>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
                </Desc>
                <BuyNow>
                  <Buttons color='red'>Select</Buttons>
                  <Price>$300 per night</Price>
                </BuyNow>
              </Info>
              <Accommodations>
                <Item><i style={CheckMark} className='fa fa-check-circle' aria-hidden='true'></i> Free Internet</Item>
                <Item><i style={CheckMark} className='fa fa-check-circle' aria-hidden='true'></i> Free Internet</Item>
                <Item><i style={CheckMark} className='fa fa-check-circle' aria-hidden='true'></i> Free Internet</Item>
              </Accommodations>
            </Room>
          </Rooms>
        </Wrapper>
      </div>
    )
  }
}
