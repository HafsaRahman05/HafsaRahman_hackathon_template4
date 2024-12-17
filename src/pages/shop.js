import React from "react";
import Navbar from "../navbar.js";
import banner1 from "../banner1.png";
import banner2 from "../banner2.png";
import banner3 from "../banner3.png";
import chair4 from "../chair4.png";
import chair5 from "../chair5.png";
import chair6 from "../chair6.png";
import background from "../background.png";
import Footer from "../Footer.js";
import brands from "../image.png";
import { useNavigate } from "react-router-dom"; 

// Sample product data
const products = [
  {
    id: 1,
    name: 'Comfy Handy Craft',
    price: 4200,
    description: "Perfect for relaxing with its ergonomic design and padded cushions.",
    imageUrl: banner1,
  },
  {
    id: 2,
    name: 'Modern Wooden Chair',
    price: 7500,
    description: "A sleek and breathable office chair with adjustable features.",
    imageUrl: banner2,
  },
  {
    id: 3,
    name: 'Contemporary Reclining Chair',
    price: 5550,
    description: "Unwind in style with a comfortable, adjustable reclining chair.",
    imageUrl: banner3,
  },
  {
    id: 4,
    name: 'Comfy Handy Craft',
    price: 12050,
    description: "Add charm to your space with this cozy, wooden-legged accent chair.",
    imageUrl: chair4,
  },
  {
    id: 5,
    name: 'Modern Wooden Chair',
    price: 25000,
    description: "Game in comfort with adjustable features and extra lumbar support.",
    imageUrl: chair5,
  },
  {
    id: 6,
    name: 'Elegant Dining Chair Set',
    price: 1200,
    description: "A stylish and durable set of chairs to elevate your dining experience.",
    imageUrl: chair6,
  },
];


const Shop = () => {
  const navigate = useNavigate(); // Initialize the navigate function

    // Handle click event
    const handleAddToCartClick = () => {
      // You can add any logic here to add the item to the cart if needed.
      // For now, it will simply navigate to the cart page.
      navigate("/cart"); // Redirect the user to the Cart page
    };
  return (
    
    <div className="bg-[#F4F7FE]">
      <Navbar />

      {/* Banner Section */}
      <header className="relative w-full h-[350px] bg-cover bg-center" style={{ backgroundImage: `url(${background})`}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Shop</h1>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="w-full bg-white p-4 shadow-md">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <select className="p-2 border border-gray-300 rounded-md">
            <option>Sort by Price</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
          <input type="text" placeholder="Search Products" className="p-2 border border-gray-300 rounded-md" />
          <button className="bg-[#7e33e0] text-white p-2 rounded-md">Apply Filters</button>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="w-full h-[250px] relative">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-xl text-[#151875]">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-semibold text-[#151875]">{product.price}</span>
                  <button
      className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition-colors"
      onClick={handleAddToCartClick} // Attach the click handler
    >
      Add To Cart
    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </section>
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
    </div>
  );
};

export default Shop;
