import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow px-6 py-3 flex items-center justify-between font-['Inter']">
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

      {/* Nav Links */}
      <ul className="hidden md:flex gap-6 text-[15px] text-[#2b354f] font-medium items-center">
        <li className="hover:text-red-600 cursor-pointer">Practice Areas</li>
        {[
          "Immigration",
          "Property",
          "Matrimonial",
          "Personal",
          "Business",
          "Will",
        ].map((item) => (
          <li key={item} className="flex items-center gap-1 hover:text-red-600 cursor-pointer">
            {item}
            <ChevronDown className="w-4 h-4" />
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <button className="bg-[#e31837] text-white text-sm font-semibold px-5 py-2 rounded-md">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
