import React from 'react';

import NavBar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer";


import "./404.css";

// var perf = require("./template.html");

const pageNotFound = () => {
  return (
    // <iframe src={perf}></iframe>
    <div className="">
      <NavBar></NavBar>
      <div className="container">
      <h1 className="four04_h1">404</h1>
      </div>
    <Footer></Footer>
    </div>
    );
};
export default pageNotFound;