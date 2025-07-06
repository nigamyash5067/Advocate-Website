import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold font-heading">
          [Advocate Name/Firm Name]
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <div
          className={`md:flex ${
            isOpen ? 'block' : 'hidden'
          } absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <li>
              <Link
                to="/"
                className="text-white hover:text-yellow-400 block py-2 px-4 rounded md:py-0 md:px-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white hover:text-yellow-400 block py-2 px-4 rounded md:py-0 md:px-0"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/practice-areas"
                className="text-white hover:text-yellow-400 block py-2 px-4 rounded md:py-0 md:px-0"
              >
                Practice Areas
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-white hover:text-yellow-400 block py-2 px-4 rounded md:py-0 md:px-0"
              >
                Blog/Insights
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white hover:text-yellow-400 block py-2 px-4 rounded md:py-0 md:px-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
