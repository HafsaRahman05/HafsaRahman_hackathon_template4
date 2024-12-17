import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';






function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

  // Toggle function to handle mobile menu visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  const [visible, setVisible] = useState(false);

  // Handle scroll event to show the button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  // Set up the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <div>
       <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#FB2E86', // Pink color
          color: 'white',
          border: 'none',
          borderRadius: '50%', // Round button
          padding: '15px',
          cursor: 'pointer',
          zIndex: 250, 
          fontSize: '20px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          display: visible ? 'block' : 'none', // Only show when scrolled
          opacity: visible ? 1 : 0, // Fade-in effect
          transition: 'opacity 0.5s ease-in', // Ease-in animation for visibility
        }}
      >
        ↑
      </button>
         <div className="2xl:w-[1920px] h-[44px] w-[100%]  bg-[#7E33E0] text-[#f1f1f1] flex justify-center items-center">
        <div className="w-full md:w-[80%] 2xl:w-[1177px] flex flex-col justify-center  lg:flex-row md:justify-between items-center ">
          <div className="w-[30%] lg:w-[380px] flex items-center justify-center lg:justify-start">
            <div className="flex items-center justify-center gap-3 mr-10 "><span className="w-4 h-4 text-[#ffffff]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg></span><h1 className="sm:w-[171px] h-[16px] font-sans font-semibold text-sm sm:text-[16px] leading-4">hafsarahman805@gmail.com</h1></div>
            <div className="flex items-center justify-center gap-3"><span className="w-4 h-4 flex items-center justify-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-[13.33px] h-[13.33px] text-[#ffffff]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path></svg></span><h1 className="w-[97px] h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">(12345)67890</h1></div></div>
          <div className="w-[30%] lg:w-[400px] flex flex-row items-center justify-center lg:justify-end gap-2 sm:gap-4">
            <div className=" flex flex-row items-center justify-center "><h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">English</h1>
              <div className=" flex justify-center items-center mx-1 w-[16px] h-[16px] "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></div></div>
            <div className=" flex flex-row items-center justify-center  "><h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">USD</h1>
              <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></div></div>
            <div className=" flex flex-row items-center justify-center "><h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">Login</h1>                         
            <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] "><a href="/account"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a></div></div>
            <div className=" flex flex-row items-center justify-center "><h1 className="h-[16px]  font-sans font-semibold text-sm sm:text-[16px] leading-4">Wishlist</h1>
              <div className=" flex justify-center items-center  mx-1 w-[16px] h-[16px] "><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"></path></svg></div></div>
            <div> <Link to="/cart">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-[24px] h-[24px]"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="21" r="1"></circle>
        <circle cx="19" cy="21" r="1"></circle>
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
      </svg>
    </Link></div></div></div></div>


      <div className="2xl:w-[1920px] w-full h-[60px] bg-[#ffffff] text-[#f1f1f1] flex justify-center items-center">
      <div className="w-full md:w-[80%] lg:w-[1177px] flex items-center justify-between h-[40px] bg-[#ffffff]">
        <div>
          <h2 className="h-[34px] font-sans font-bold leading-[34px] text-[34px] text-[#0d0e43]">
            Hekto
          </h2>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-black block md:hidden text-3xl z-50"
          onClick={toggleNavbar}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:static w-[50%] md:w-auto bg-[#eee] md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row items-center justify-center text-[#0d0e43]  font-sanf font-normal text-[16px] leading-5">
            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link className="flex items-center justify-center group" to="/">
                Home
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </Link>
            </li>

            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2 relative">
              <Link className="flex items-center justify-center group" to="/products">
                Products
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </Link>
            </li>

            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link className="flex items-center justify-center group" to="/blog">
                Blog
                <svg 
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className=" w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </Link>
            </li>

            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link className="flex items-center justify-center group" to="/shop">
                Shop
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </Link>
            </li>

            <li className="p-2 hover:underline hover:text-pink-600 underline-offset-2">
              <Link className="flex items-center justify-center group" to="/contact">
                Contact
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 ease-in-out"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex w-[317px] h-10">
          <input className="w-full border-2 border-[#e7e6ef]" type="search" placeholder="Search..." />
          <div className="w-[51px] h-10 bg-[#fb2e86] flex items-center justify-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="w-6 h-6 text-white"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>

        );
}

export default Navbar;
