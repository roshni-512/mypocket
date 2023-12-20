import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex  justify-between p-6  bg-main  max-md:flex-col-reverse"
       
      >
        <div className="flex lg:flex-1 ">
        <img className="h-8 w-auto" src="\images\stars.png" alt="" />
        </div>
        <div className="flex lg:flex-1 ">
        <img className="h-8 w-auto" src="\images\stars.png" alt="" />
        </div>
        <div className=" lg:flex lg:flex-1 lg:justify-end">
        <img className="h-8 w-auto" src="\images\satisfied.png" alt="" />
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
