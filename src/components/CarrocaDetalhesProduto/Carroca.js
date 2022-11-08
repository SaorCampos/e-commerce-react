import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import TenisBrancoMaior from './TenisBrancoMaior.png'
import './Carroca.css'


function Carroca() {
  return (
    <Carousel className='h-100 '>
      <Carousel.Item className="fundoazul " style={{ backgroundColor: '#E2E3FF' }}>
        <div className="slidTenis">
          <div className='slidTenis'>
            <img
              className="d-block"
              src={TenisBrancoMaior}
              alt="First slide"
            /></div>

        </div>
        <Carousel.Caption >

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='fundopastel' style={{ backgroundColor: '#FFE8BC' }}>
        <div className="slidTenis">
          <div className='slidTenis'>
            <img
              className="d-block  "
              src={TenisBrancoMaior}
              alt="Second slide"
            />
          </div>
        </div>


        <Carousel.Caption >

        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='fundosalmao' style={{ backgroundColor: '#FFC0BC' }}>
        <div className="slidTenis">
          <div className='slidTenis'>
            <img
              className="d-block  "
              src={TenisBrancoMaior}
              alt="Third slide"
            />
          </div>

        </div>


        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='fundomarrom' style={{ backgroundColor: '#DEC699' }}>
        <div className="slidTenis">
          <div className='slidTenis'>
            <img
              className="d-block  "
              src={TenisBrancoMaior}
              alt="Third slide"
            />
          </div>

        </div>

        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='fundocinza' style={{ backgroundColor: '#E8DFCF' }}>
        <div className="slidTenis">
          <div className='slidTenis'>
            <img
              className="d-block  "
              src={TenisBrancoMaior}
              alt="Third slide"
            />
          </div>

        </div>

        <Carousel.Caption >
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carroca;