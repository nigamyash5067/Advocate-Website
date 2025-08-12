import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Herosection from './heroSection';
import Navbar from '../Navbar';
import Footer from '../Footer';

import Navbar2 from '../Navbar-2';
import Cards from './ServicesCards';


function RouterHomePage() {
  return (
    <>
      
      <Navbar />

      <Navbar2 />

      <Herosection />
      <Cards />
      
      
     
      
     
      <Footer />
      
    </>
  );
}

export default RouterHomePage;
