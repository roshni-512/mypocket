import React from "react";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex  justify-between p-6 lg:px-8 bg-main"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <img className="h-8 w-auto" src="\images\mypocketlogo.png" alt="" />
          <a href="#" className="-m-1.5 p-1.5 mt-0.5 mx-1">
            <span className="text-white">My Pocket</span>
          </a>
        </div>

        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            {" "}
            <img className="h-8 w-auto" src="\images\getintouch.png" alt="" />
          </a>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
