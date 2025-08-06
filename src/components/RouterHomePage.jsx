import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Herosection from '../../pages/HomePage/herosection';
import Navbar from './Navbar';
import Footer from './Footer';
import FeatureSection from './FeatureSection';
import ServicesSection from './services';
import OurTeam from './OurTeam';
import ContactSection from './ContactSection';
import DirectorSection from './DirectorSection';
import Navbar2 from './Navbar-2';
import ResultsSection from './ResultsSection';
import ContactForm from './ContactPage';

function RouterHomePage() {
  return (
    <>
      
      <Navbar />

      <Navbar2 />
      <Herosection />
      <FeatureSection />
      <ServicesSection />
      <OurTeam />
      <ContactSection />
      <DirectorSection />
      <ResultsSection />
      <ContactForm />
      
     
      
     
      <Footer />
      
    </>
  );
}

export default RouterHomePage;
