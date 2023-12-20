import React from "react";

const FeaturePage = () => {
  return (
    <>
      <section className="relative  bg-main">
        <div className="container flex flex-col-reverse lg:flex-row items-center lg:pt-10 lg:pb-10 ">
          <div className="flex flex-1 flex-col  lg:items-start lg:ml-10  pt-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl  lg:text-left  lg:ml-8  max-md:ml-2  max-md:mb-2 text-white">
              Reliable and secure <br></br> pro account
            </h2>
            <p className=" text-lg lg:text-left mb-6  lg:ml-8 max-md:ml-2 lg:mt-5 text-white">
              Banking services to accompany you every day, accessible <br></br>{" "}
              everywhere and physical or virtual cards for your <br></br>
              professional expenses.
            </p>
            <div className="flex  flex-wrap gap-6 pb-5">
              <button
                type="button"
                className="bg-white text-main   lg:mx-8 px-12 rounded-3xl  w-[300px] h-[50px] max-md:ml-2"
              >
                Download Now
              </button>
            </div>
          </div>

          <div className=" lg:mx-52  mt-0 max-md:pt-5 text-white">
            {" "}
            <div className="flex mb-3">
              <img
                src={"./images/mypocketlogo.png"}
                alt=""
                style={{marginTop:'-10'}}
                className="w-8 h-8 flex rounded border-white border-2 mx-2"
              />{" "}
              <span>Approved by the ACPR(Banque de france)</span>
            </div>
            <div className="flex mb-3">
              <img
                src={"./images/mypocketlogo.png"}
                alt=""
                style={{marginTop:'-10'}}
                className="w-8 h-8 flex rounded border-white border-2 mx-2"
              />{" "}
              <span>Mastercard network
</span>
            </div>
            <div className="flex mb-3">
              <img
                src={"./images/mypocketlogo.png"}
                alt=""
                style={{marginTop:'-10'}}
                className="w-8 h-8 flex rounded border-white border-2 mx-2"
              />{" "}
              <span>Funds secured according to French regulations
</span>
            </div>
            <div className="flex mb-3">
              <img
                src={"./images/mypocketlogo.png"}
                alt=""
                style={{marginTop:'-10'}}
                className="w-8 h-8 flex rounded border-white border-2 mx-2"
              />{" "}
              <span>Your data is encrypted and protected
</span>
            </div>
            <div className="flex mb-3">
              <img
                src={"./images/mypocketlogo.png"}
                alt=""
                style={{marginTop:'-10'}}
                className="w-8 h-8 flex rounded border-white border-2 mx-2"
              />{" "}
              <span>Independent subsidiary of Société Générale
</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePage;
