import React from "react";
import Navbar from "../navbar.js";
import LatestBlog from "../LatestBlog.js";
import Footer from "../Footer.js";



function Blog() {

  return (

    <div>
         <Navbar />
         <LatestBlog limit={6} />
         <Footer />
    </div>

        );
}

export default Blog;