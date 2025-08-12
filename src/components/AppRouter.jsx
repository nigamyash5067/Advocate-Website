import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouterHomePage from "./RouterHomePage";
import About from "./About/RouterAbout";
import RouterServices from "./Services/RouterServices";
import RouterContact from "./Contact/RouterContact";
import RouterEnquiry from "./Enquiry/RouterEnquiry";


function AppRouter() {
  return <>
  

  <BrowserRouter>
      <Routes>

        <Route path="/" element={<RouterHomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<RouterServices />} />
        <Route path="/contact" element={<RouterContact />} />
        <Route path="/enquiry" element={<RouterEnquiry />} />

        
       
      </Routes>
    </BrowserRouter>
  </>
}
export default AppRouter;
    