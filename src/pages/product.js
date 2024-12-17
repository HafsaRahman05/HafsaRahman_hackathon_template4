import React from "react";
import Navbar from "../navbar.js";
import Featured_Product from "../Featured_Product.js";
import TrendingProducts from "../TrendingProducts.js";
import LatestProducts from "../LatestProducts.js";
import Footer from "../Footer.js";



function Product() {

  return (

    <div>
         <Navbar />
         <Featured_Product />
         <LatestProducts />
         <TrendingProducts />
         <Footer />
    </div>

        );
}

export default Product;
