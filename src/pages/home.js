import React from "react";
import Banner from '../Banner.js';
import Featured_Product from "../Featured_Product.js";
import TrendingProducts from "../TrendingProducts.js";
import LatestProducts from "../LatestProducts.js";
import Navbar from "../navbar.js";
import LatestBlog from "../LatestBlog.js";
import Footer from "../Footer.js";
import deliveryicon from "../deliveryicon.png";
import moneyicon from "../moneyicon.png";
import badgeicon from "../badgeicon.png";
import houricon from "../24icon.png";
import chair8 from "../image (8).png";
import chairbrown from "../chairbrown.png";
import chair4 from "../chair4.png";
import chair5 from "../chair5.png";
import chair6 from "../chair6.png";
import chair7 from "../chair7.png";
import brands from "../image.png";
import background from "../background.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; 


const offers = [
  {
    icon: deliveryicon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: moneyicon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: badgeicon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
  {
    icon: houricon,
    title: '24/7 Support',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
  },
];

function Home() {
    const navigate = useNavigate(); // Initialize the navigate function

    // Handle click event
    const handleAddToCartClick = () => {
      // You can add any logic here to add the item to the cart if needed.
      // For now, it will simply navigate to the cart page.
      navigate("/cart"); // Redirect the user to the Cart page
    };
  return (

    
    <div className="Home">
 
    
 <Navbar />

      {/* newcode */}
      <Banner />
     
      <Featured_Product />
      <LatestProducts />

      {/* Discount Item */}

      <div className="w-full bg-white py-20">
      <h2 className="text-[#3F509E] text-4xl font-bold text-center mb-12">What Shopex Offer!</h2>
      <div className="w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
        {offers.map((offer, index) => (
          <div key={index} className="flex flex-col items-center justify-center text-center w-[270px] h-[320px] rounded-lg shadow-xl">
            <div className="w-16 h-16 mb-4">
              <img
                alt={offer.title}
                loading="lazy"
                width="64"
                height="64"
                decoding="async"
                src={offer.icon}
                className="object-contain"
              />
            </div>
            <h3 className="text-[#3F509E] font-bold text-lg mb-2">{offer.title}</h3>
            <p className="text-gray-600 mx-4 text-sm">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>


    <div className="bg-gray-100 py-20">
      <div className="w-[80%] lg:w-[1050px] max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center items-center">
          
          <img
            alt="Sofa"
            loading="lazy"
            width="400"
            height="400"
            decoding="async"
            className="relative z-10 object-contain"
            srcSet={chair8}
            src={chair8}
            style={{ color: 'transparent' }}
          />
        </div>
        <div className="px-4 md:px-0">
          <h2 className="text-[#3F509E] text-3xl font-bold mb-6">Unique Features Of Latest & Trending Products</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-red-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">All frames constructed with hardwood solids and laminates.</p>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-[#3F509E] flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">Reinforced with double wood dowels, glue, screw-nails, corner blocks, and machine nails.</p>
            </li>
            <li className="flex items-start">
              <div className="w-4 h-4 rounded-full bg-green-500 flex-shrink-0 mt-1 mr-4"></div>
              <p className="text-gray-600">Arms, backs, and seats are structurally reinforced.</p>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="/cart">
              <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors">
                Add To Cart
              </button>
            </a>
            <div>
              <p className="text-[#3F509E] font-semibold text-sm">B&B Italian Sofa</p>
              <p className="text-[#3F509E] font-bold text-sm">$32.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TrendingProducts />

    <div className="w-full flex justify-center items-center py-20">
      <div className="w-[80%] lg:w-[1177px] max-w-screen-xl mx-auto">
        <h2 className="text-[#3F509E] text-4xl font-bold text-center mb-8">Discount Item</h2>
        <div className="flex justify-center space-x-8 mb-12">
          <button className="relative text-lg font-medium text-gray-700 hover:text-pink-600">
            Wood Chair
            <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
            <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
          </button>
          <button className="relative text-lg font-medium text-gray-700 hover:text-pink-600">
            Plastic Chair
            <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
            <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
          </button>
          <button className="relative text-lg font-medium text-gray-700 hover:text-pink-600">
            Sofa Chair
            <span className="block h-[2px] w-0 bg-pink-600 absolute bottom-0 left-0 transition-all duration-300 hover:w-full"></span>
            <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-pink-600 rounded-full opacity-0 hover:opacity-100"></span>
          </button>
        </div>
        <div className="flex items-center justify-center flex-col-reverse md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-[#3F509E] text-3xl font-bold mb-4">20% Discount Of All Products</h3>
            <h4 className="text-pink-600 text-xl font-semibold mb-6">Eames Sofa Compact</h4>
            <p className="text-gray-600 mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-gray-600 mb-6">Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <p className="text-gray-600 mb-2">✓ Material expose like metals.</p>
            <p className="text-gray-600 mb-2">✓ Clear lines and geometric figures.</p>
            <p className="text-gray-600 mb-2">✓ Simple neutral colours.</p>
            <p className="text-gray-600 mb-2">✓ Material expose like metals.</p>
            <ul className="space-y-4"></ul>
            <a href="/shoplist">
              <button className="px-6 py-2 bg-[#FB2E86] text-white font-text rounded-md shadow-md hover:bg-pink-600">
                Shop Now
              </button>
            </a>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-pink-100 w-[400px] h-[400px] -z-10 rounded-full" style={{ margin: 'auto' }}></div>
            <img
              alt="Discount Sofa"
              loading="lazy"
              width="500"
              height="500"
              decoding="async"
              className="object-contain"
              srcSet={chairbrown}
              src={chairbrown}
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>
    </div>


    {/* Top category */}

    <div className="w-full bg-white py-20">
      <h2 className="text-center text-[#3F509E] text-3xl font-bold mb-12">Top Categories</h2>
      <div className="w-[80%] lg:w-[1177px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-8 max-w-screen-xl mx-auto">
        
        {/* Category 1 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
            <img 
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={chair4} 
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[20px] leading-6 font-bold mt-4">Mini LCW Chair</h3>
          <p className="text-[#151875] text-[20px] leading-6 font-bold">$56.00</p>
        </div>

        {/* Category 2 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
            <img 
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={chair5} 
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[20px] leading-6 font-bold mt-4">Mini LCW Chair</h3>
          <p className="text-[#151875] text-[20px] leading-6 font-bold">$56.00</p>
        </div>

        {/* Category 3 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
            <img 
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={chair6}  
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[20px] leading-6 font-bold mt-4">Mini LCW Chair</h3>
          <p className="text-[#151875] text-[20px] leading-6 font-bold">$56.00</p>
        </div>

        {/* Category 4 */}
        <div className="relative group flex flex-col items-center w-[270px] h-[345px]">
          <div className="w-[269px] h-[269px] shadow-custom flex justify-center items-center bg-[#f7f6fb] rounded-full relative overflow-hidden">
            <img 
              alt="Mini LCW Chair" 
              loading="lazy" 
              width="145" 
              height="145" 
              className="object-cover" 
              src={chair7} 
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#3F509E] transition-all duration-300"></div>
            <button className="absolute bottom-6 bg-[#08D15F] text-white px-3 py-1 text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Shop</button>
          </div>
          <h3 className="text-[#151875] text-[20px] leading-6 font-bold mt-4">Mini LCW Chair</h3>
          <p className="text-[#151875] text-[20px] leading-6 font-bold">$56.00</p>
        </div>

      </div>

      <div className="flex justify-center mt-4">
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
        <span className="w-3 h-3 bg-pink-600 rounded-full mx-1"></span>
      </div>
    </div>

    <div 
      className="w-full bg-cover bg-center py-20  bg-fixed" 
      style={{ backgroundImage: `url(${background})` }} 
    >
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#151875] mb-6">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <a href="/shoplist">
        <button
      className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors"
      onClick={handleAddToCartClick} // Attach the click handler
    >
      Add To Cart
    </button>
        </a>
      </div>
    </div>
    <LatestBlog limit={3} />

    <div className="w-full py-12">
      <div className="max-w-screen-xl mx-auto flex justify-center">
        <img
          alt="Logos"
          loading="lazy"
          width="800"
          height="100"
          decoding="async"
          data-nimg="1"
          className="object-contain"
          srcSet={brands} 
          src={brands}
          style={{ color: 'transparent' }}
        />
      </div>
    </div>

    <Footer />

    <div className="text-center h-[53px] w-full bg-[#e7e4f8] flex items-center justify-center">
    <div className="flex flex-row justify-between items-center w-[1177px]">
      <p className="text-gray-600">© Wobeky. All Rights Reserved</p>
      <div className="flex justify-between items-center w-20 h-5">
        <a href="#" className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>
        </a>
        <a href="#" className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </a>
        <a href="#" className="bg-[#151875] w-5 h-5 rounded-[50%] text-white flex items-center justify-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
        </div>

        );
}

export default Home;
