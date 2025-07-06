import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold font-heading mb-2">[Advocate Name/Firm Name]</h3>
          <p className="text-sm">
            [Your Address], Kanpur, Uttar Pradesh, India
          </p>
          <p className="text-sm">
            Email: [Your Email] | Phone: [Your Phone Number]
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
          <Link to="/disclaimer" className="hover:text-yellow-400 text-sm">Disclaimer</Link>
          <Link to="/privacy-policy" className="hover:text-yellow-400 text-sm">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-yellow-400 text-sm">Terms of Service</Link>
        </div>
      </div>
      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} [Advocate Name/Firm Name]. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
