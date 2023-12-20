import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturePage = () => {
     
  return (
    <>
      <section className="relative  bg-second pb-10">
        <div className="container flex flex-col-reverse lg:flex-row items-center  " >
          
        
          <div className="flex flex-1 flex-col  lg:items-start lg:ml-10 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl  lg:text-left  lg:ml-8  max-md:ml-2  max-md:mb-2">
            The cards in hand <br></br> To go further
            </h2>
            <p className=" text-lg lg:text-left mb-6  lg:ml-8 max-md:ml-2 lg:mt-5">
            Banking services to accompany you every day, accessible <br></br> everywhere and physical or virtual cards for your <br></br>professional expenses.
            </p>
            <div className="flex  flex-wrap gap-6 pb-5">
           
              <button type="button" className="bg-main text-white   lg:mx-8 px-12 rounded-3xl  w-[300px] h-[50px] max-md:ml-2">
              Download Now
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-5 md:mb-16 lg:mb-0  z-10 gap-12"> <img className="h-[750px] w-[861px] pt-10 lg:ml-8 max-md:w-[500px] max-md:h-[450px]" src="\images\blockimage.png" alt="" /></div>
        </div>
      </section>
    </>
  );
};

export default FeaturePage;
