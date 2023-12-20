import React from "react";

const FeaturePage = () => {
  return (
    <>
      <section className="relative  bg-second pb-10">
        <div className="container flex flex-col lg:flex-row items-center  ">
          <div className="flex flex-1 flex-col  lg:items-start lg:ml-10 ">
            <h2 className="text-3xl md:text-4xl lg:text-5xl  lg:text-left  lg:ml-8  max-md:ml-2  max-md:mb-2 lg:pt-10 lg:pb-10">
              Get in touch
            </h2>
            <p className=" text-lg lg:text-left mb-6  lg:ml-8 max-md:ml-2 lg:mt-5">
              We appreciate each customer and we are proud that 60% of <br></br>{" "}
              clients come back to work with us again.
            </p>
            <div className="flex  flex-wrap gap-6 pb-5 lg:mx-10">
              <p className="text-main font-bold">+1 999 999 9999</p>
            </div>
            <p className="text-main lg:mx-10 font-bold">info@roini.com</p>
          </div>
          <div className="flex justify-center flex-1 mb-5 md:mb-16 lg:mb-0  z-10 gap-12 ">
          <div className=" border-gray-900/10 pb-12">
         


          <div className=" mt-20 grid grid-cols-1 gap-x-3 gap-y-1 lg:grid-cols-6 max-md:grid-cols-12 ">
          <div className="col-span-full ">
          
              <div className="mt-2">
                <input
                placeholder="Your name"
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
             
              <div className="mt-2">
                <input
                placeholder="Your email"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              
              <div className="mt-2">
                <input
                placeholder="Your phone #"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block   w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
             
             <div className="mt-2">
               <input
               placeholder="Your email"
                 type="text"
                 name="first-name"
                 id="first-name"
                 autoComplete="given-name"
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>

           <div className="sm:col-span-3">
             
             <div className="mt-2">
               <input
               placeholder="Your phone #"
                 type="text"
                 name="last-name"
                 id="last-name"
                 autoComplete="family-name"
                 className="block   w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>
           <div className="col-span-full">
          
          <div className="mt-2">
            <input
            placeholder="Your name"
              type="text"
              name="street-address"
              id="street-address"
              autoComplete="street-address"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="col-span-full">
          
          <div className="mt-2">
            <button className="bg-main block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">Send</button>
          </div>
        </div>

            

        
           

         

            
          </div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturePage;
