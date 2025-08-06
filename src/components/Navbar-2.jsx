import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home" },
    { name: "About us", hasDropdown: true },
    { name: "Our Services", hasDropdown: true },
    { name: "Contact us", hasDropdown: true },
  ];

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

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-[15px] text-[#2b354f] font-medium">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-1 hover:text-red-600 cursor-pointer"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </li>
          ))}
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

      {/* Animated Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[300px] mt-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-[16px] text-[#2b354f] font-medium">
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-1 hover:text-red-600 cursor-pointer"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  