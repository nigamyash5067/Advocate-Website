import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Herosection from './heroSection';
import Navbar from '../Navbar';
import Footer from '../Footer';

import Navbar2 from '../Navbar-2';


function RouterHomePage() {
  return (
    <>
      
      <Navbar />

      <Navbar2 />

      <Herosection />
      
      
     
      
     
      <Footer />
      
    </>
  );
}

export default RouterHomePage;
