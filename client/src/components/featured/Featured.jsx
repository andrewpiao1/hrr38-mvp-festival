import React from 'react';
import Carousel from './Carousel.jsx'
import Countdown from './Countdown.jsx'

const Featured = () => {
  return (
    <div style={{
      position: 'relative',
    }}>

      <Carousel />

      <div className="artist_name">
        <div className="wrapper">
          Electric Zoo
        </div>
      </div>

      <Countdown />

    </div>
  );
};

export default Featured;