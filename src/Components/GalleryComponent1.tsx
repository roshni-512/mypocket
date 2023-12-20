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
    <div className='lg:pt-10 pb-10 bg-second'>
        <div className=' flex justify-center pt-10 pb-5 font-bold text-2xl'>
            <h3>Services adapted for each company</h3>
           
        </div>
        <div className=' flex justify-center pb-5 text-lg'>
           
            <p>Even those who prefer to be called otherwise.</p>
        </div>
        
        <Slider {...settings}>
    <div className='mx-4'>
      <h3><img className='w-auto h-auto'  src="\images\gallery1.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\gallery2.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\gallery3.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\gallery4.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\gallery1.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\gallery3.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\gallery4.png" alt="" /></h3>
    </div>
    <div className='mx-4'>
      <h3><img className='w-30 h-30'  src="\images\gallery1.png" alt="" /></h3>
    </div>
  
  </Slider></div>
  )
}

export default GalleryComponent