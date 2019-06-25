import React from 'react';
import Slider from "react-slick";

// import slide from '../../resources/images/slide_one.jpg'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500
  }

  return (


    <div
    className="carousel_wrapper"
    style={{
      height: `${window.innerHeight}px`,
      overflow: 'hidden'
    }}
    >
      {/* ES6 */}
      <Slider {...settings}>
        <div>
          <img src={'https://fechrr38hana.s3.us-east-2.amazonaws.com/electric-zoo/46602643275_2a14a12df4_b.jpg'} style={{width: '100%'}}/>
        </div>

        <div>
          <img src={'https://fechrr38hana.s3.us-east-2.amazonaws.com/electric-zoo/33641223898_0ba545930a_b.jpg'} style={{width: '100%'}}/>
        </div>

        <div>
          <img src={'https://fechrr38hana.s3.us-east-2.amazonaws.com/electric-zoo/47465361572_b92d882de3_b.jpg'} style={{width: '100%'}}/>
        </div>

        <div>
          <img src={'https://fechrr38hana.s3.us-east-2.amazonaws.com/electric-zoo/47465361902_2f48d9521d_b.jpg'} style={{width: '100%'}}/>
        </div>

        <div>
          <img src={'https://fechrr38hana.s3.us-east-2.amazonaws.com/electric-zoo/47518131951_c1092bf66f_b.jpg'} style={{width: '100%'}}/>
        </div>

      </Slider>


    </div>
  );
};

export default Carousel;