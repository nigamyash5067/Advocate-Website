import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow px-6 py-3 font-['Inter'] transition-all duration-300">
      <div className="flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3062/3062634.png"
            alt="Logo"
            className="w-8 h-8"
          />
          <div className="leading-tight">
            <span className="text-lg font-bold text-red-700">Lawyers</span>
            <div className="text-xs text-gray-500">Legal Services</div>
          </div>
        </div>

        {/* Desktop Nav (no map) */}
        <ul className="hidden md:flex items-center gap-6 text-[15px] text-[#2b354f] font-medium">
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/services">OUR SERVICES</Link>
           
          </li>
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/contact">CONTACT US</Link>
          </li>
          {/* <li className="flex  items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/enquiry">ENQUIRY</Link>
          </li> */}
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#2b354f] focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu (no map) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-[16px] text-[#2b354f] font-medium">
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          </li>
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/services" onClick={() => setIsOpen(false)}>OUR SERVICES</Link>
            <ChevronDown className="w-4 h-4" />
          </li>
          <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>
            <ChevronDown className="w-4 h-4" />
          </li>
           {/* <li className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            <Link to="/enquiry" onClick={() => setIsOpen(false)}>ENQUIRY</Link>
            <ChevronDown className="w-4 h-4" />
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
