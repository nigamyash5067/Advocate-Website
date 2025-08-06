import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="bg-[#f5a600] text-white text-sm py-2 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-2">
      
      {/* Left: Contact Info */}
      <div className="flex items-center gap-4 flex-wrap text-black font-semibold">
        <span className="flex items-center gap-1">
          <PhoneCall size={16} /> +91-xxxxxxxxxx
        </span>
        <span className="flex items-center gap-1">
          <Mail size={16} /> gmail@gmail.com
        </span>
      </div>

      {/* Right: Social Icons */}
      <div className="flex gap-3 text-black">
        <a href="#" className="hover:text-white"><FaFacebookF size={16} /></a>
        <a href="#" className="hover:text-white"><FaXTwitter size={16} /></a>
        <a href="#" className="hover:text-white"><FaLinkedinIn size={16} /></a>
        <a href="#" className="hover:text-white"><FaInstagram size={16} /></a>
        <a href="#" className="hover:text-white"><FaYoutube size={16} /></a>
      </div>
    </div>
  );
};

export default TopBar;
