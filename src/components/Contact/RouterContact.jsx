import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';
import Navbar2 from '../Navbar-2';
import Contact from '../ContactPage';

function RouterHomePage() {
  return (
    <>
      
      <Navbar />

      <Navbar2 />
      <Contact />

      
      
     
      
     
      <Footer />
      
    </>
  );
}

export default RouterHomePage;
