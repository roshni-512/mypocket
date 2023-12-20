import React from 'react'

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto bg-second">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">

          <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">Product</h2>
          <nav className="list-none mb-10">
            <li>
              <a href='/' className="text-gray-600 hover:text-gray-800">Bank cards </a>
            </li>
            <li>
              <a href='/' className="text-gray-600 hover:text-gray-800">Book-keeping</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Invoicing</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Extra and insurance</a>
            </li>
            <li>
              <a href='/' className="text-gray-600 hover:text-gray-800">Professional Loan</a>
            </li>
            <li>
              <a href='/' className="text-gray-600 hover:text-gray-800">Safety</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Sponsorship</a>
            </li>
           
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">Our resources</h2>
          <nav className="list-none mb-10">
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Our prices</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Co-pilot - blog</a>
            </li>
            <li>
              <a href='/' className="text-gray-600 hover:text-gray-800">Pro bank comparison</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Contract templates</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Income simulator</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">workshops and videos</a>
            </li>
            <li>
              <a href='/' className="text-gray-600 hover:text-gray-800">The Lantern - Newsletter</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Contract templates</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3 ">CATEGORIES</h2>
          <nav className="list-none mb-10">
            <li>
              <a href='/' className="text-gray-600 hover:text-gray-800">Building a responsible bank</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Press area</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Work at Shine</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Become an ambassador</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Become a chartered accountant partner</a>
            </li>
            <li>
              <a  href='/' className="text-gray-600 hover:text-gray-800">Contact us</a>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
             
              <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
          </div>
          <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Hello, we are ABC. trying to make an effort to put the right people for you to get the best results. Just insight
           
          </p>
        </div>
      </div>
    </div>
    <div className="bg-main">
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col ">
        <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img
                src={"./images/mypocketlogo.png"}
                alt=""
                style={{marginTop:'-10'}}
                className="w-8 h-8 flex rounded border-white border-2 mx-2"
              />{" "}
          <span className="ml-3 text-xl text-white">My Pocket</span>
        </a>
        {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start overflow-hidden text-white ">
          <p className='mx-3'>Welcome</p>
         <p className='mx-3'>Terms of use</p>
        <p className='mx-3'>Data protection</p>
         <p className='mx-3'>Configure cookies</p>
         <p className='mx-3'>Legal Notice</p>
        </span> */}
     
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-end sm:justify-start  ">
          <a href='/' className="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 bg-white text-main rounded-full p-2" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href='/' className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 bg-white text-main rounded-full p-2" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a  href='/' className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8 bg-white text-main rounded-full p-2" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a  href='/' className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-8 h-8 bg-white text-main rounded-full p-2" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
  )
}

export default Footer