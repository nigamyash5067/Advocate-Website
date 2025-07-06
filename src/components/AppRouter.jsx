import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RouterHomePage from "./RouterHomePage";
import Navbar from "./Navbar";


function AppRouter() {
  return <>
  

  <BrowserRouter>
      <Routes>

        <Route path="/" element={<RouterHomePage />} />
       
      </Routes>
    </BrowserRouter>
  </>
}
export default AppRouter;
    