import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const LoginCarousel = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='text-center'>Visual Payment Statistics</h5>
          <p className='text-center'>These visuals are used to analyze and understand various aspects of payment activity, trends and payment</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Second slide"
        />
       <Carousel.Caption>
          <h5 className='text-center'>Visual Payment Statistics</h5>
          <p className='text-center'>These visuals are used to analyze and understand various aspects of payment activity, trends and payment</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="Third slide"
        />
       <Carousel.Caption>
          <h5 className='text-center'>Visual Payment Statistics</h5>
          <p className='text-center'>These visuals are used to analyze and understand various aspects of payment activity, trends and payment</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default LoginCarousel