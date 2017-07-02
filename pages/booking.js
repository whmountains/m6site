import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../css/MasterStyles.css'
import Buttons from '../components/Buttons'


const Wrapper = styled.div `
  width: 100vw;
  padding: 20px 71px;
  background-image: url('https://i1.wp.com/techbeasts.com/wp-content/uploads/2016/12/mountain-3d-wallpaper-8.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const Title = styled.h1 `
  width: 100%;
  color: white;
  text-align: center;
`
const Checking = styled.div `
  width: 30vw;
  height: 300px;
  background: #FFFFFF;
  border-radius: 10px;
`
const Rooms = styled.div `
  width: 53vw;
  display: flex;
  flex-direction: column;
`
const Room = styled.div `
  height: 450px;
  background: #FFFFFF;
  border-radius: 5px;
  overflow: hidden;
  display: inline-flex;
  flex-wrap: wrap;
  background: #EBEAE8;
  box-shadow: 0 2px 4px 1px rgba(0,0,0,0.21);
  margin-bottom: 40px;
`
const Photo = styled.div `
  width: 100%;
  height: 60%;
  background-image: url('https://shawneeparklodge.com/up/photo_gallery/Dbl_Woods.jpg');
  background-size: cover;
  background-position: center;
`
const Desc = styled.div `
  width: 60%;
  height: 40%;
`
export default class Index extends React.Component {
  render () {
    return (
      <div id='main'>
        <Helmet>
          <title>El Refugio | Booking</title>
        </Helmet>
        <Wrapper>
          <Title>Choose Your Adventure</Title>
          <Checking>Check in</Checking>
          <Rooms>
            <Room>
              <Photo/>
              <Desc>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
              </Desc>
            </Room>
            <Room>
              <Photo/>
              <Desc>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Sum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec.
              </Desc>
            </Room>
          </Rooms>
        </Wrapper>
      </div>
    )
  }
}
