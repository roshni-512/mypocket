import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const GalleryComponent = () => {
    const settings = {
     
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
      };
  return (
    <div className='lg:pt-10 pb-10 bg-second'><Slider {...settings}>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card1.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card2.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card3.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card1.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card2.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\card3.png" alt="" /></h3>
    </div>
  </Slider></div>
  )
}

export default GalleryComponent