import React from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.js';
import Products from './pages/product.js';
import Blog from './pages/blog.js';
import Shop from './pages/shop.js';
import Contact from './pages/contact.js';
import Cart from "./pages/cart.js"; 




function App() {

  return (

    
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>

        );
}

export default App;
