import React, { useState, useEffect } from "react";
import "./App.css";
import Lamp from "./lamp.png";
import banner1 from "./banner1.png";
import banner2 from "./banner2.png";
import banner3 from "./banner3.png";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


const slidesData = [
  {
    image: banner1,
    tagline: "Best Furniture For Your Castle...",
    headline: "New Furniture Collection Trends in 2020",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
  },
  {
    image: banner2,
    tagline: "Stylish Interiors Just for You...",
    headline: "Discover Our Latest Designs",
    description:
      "Explore a wide range of beautifully crafted furniture for your home and office.",
  },
  {
    image: banner3,
    tagline: "Elegant Furniture For Every Space",
    headline: "Discover Our Latest Designs",
    description:
      "Bring timeless elegance to your home with our exclusive furniture collection.",
  },
];
  // Function to navigate to the shop page when button is clicked
 
  const Banner = () => {
    const navigate = useNavigate(); // Initialize useNavigate for redirecting
    const [slideIndex, setSlideIndex] = useState(0);
  
    // Function to switch slides every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
      }, 5000);
  
      return () => clearInterval(interval); // Clean up interval on unmount
    }, []);
  
    // Function to handle dot click
    const handleDotClick = (index) => {
      setSlideIndex(index);
    };
  
    // Function to navigate to the shop page when button is clicked
    const handleShopClick = () => {
      navigate("/shop"); // Redirect to /shop route
    };
  
    const slide = slidesData[slideIndex];

  return (
    <div className="banner-container">
      <div className="lampimage-container absolute top-0 left-0 z-10">
        <img src={Lamp} alt="Lamp" className="lamp_img" />
      </div>

      <div className="content">
        <p className="tagline">{slide.tagline}</p>
        <h1 className="headline">{slide.headline}</h1>
        <p className="description">{slide.description}</p>
        <button
          onClick={handleShopClick} // Redirect on click
          className="bg-[#FB2E86] text-white py-3 px-6 rounded-lg text-lg cursor-pointer hover:bg-[#F94C9B] transition-colors">
          Shop Now
        </button>
      </div>

      <div className="image-container bg-gradient-to-r from-pink-100 to-purple-200 rounded-full shadow-xl">
        <img src={slide.image} alt="Furniture" className="si" />
      </div>

      {/* Slider Dots */}
      <div className="dots-container">
        {slidesData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === slideIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Banner;
