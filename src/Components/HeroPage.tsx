import React from "react";

const FeaturePage = () => {
  return (
    <>
      <section className="relative  bg-second">
        <div className="container flex flex-col-reverse lg:flex-row items-center  ">
          <div className="flex flex-1 flex-col  lg:items-start lg:ml-10 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl  lg:text-left  lg:ml-8  max-md:ml-2  max-md:mb-2">
              THE PRO USER
              <br></br> WHO DOES MORE
            </h2>
            <p className=" text-lg lg:text-left mb-6  lg:ml-8 max-md:ml-2 lg:mt-5">
              Your Digital Vault for a Secure and Organized Life. Say Hello to
              <br></br> Hassle-Free Management! Download Now...
            </p>
            <div className="flex  flex-wrap gap-6 pb-5">
              <button
                type="button"
                className="bg-main text-white   px-12 rounded-3xl  py-3 max-md:ml-3 mx-5"
              >
                Download Now
              </button>
              <button
                type="button"
                className="bg-main text-white    px-12 rounded-3xl  py-3 max-md:ml-3"
              >
                Download Now
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-5 md:mb-16 lg:mb-0  z-10 gap-12">
            {" "}
            <img
              className="h-[750px] w-[861px] pt-10 lg:ml-8 max-md:w-[500px] max-md:h-[500px]"
              src="\images\Cards.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePage;
