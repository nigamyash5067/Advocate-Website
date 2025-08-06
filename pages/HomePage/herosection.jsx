import React from "react";

const HeroSection = () => {
  return (
    <div
      className="relative h-[650px] md:h-[750px] bg-cover bg-center"
      style={{ backgroundImage: "url('/Frame-46.png')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0"></div>

      {/* Content Container */}
      <div className="relative z-5 flex flex-col md:flex-row items-center justify-between h-full px-8 md:px-16 lg:px-24">
        {/* Left Content */}
        <div className="text-white text-center md:text-left md:w-1/2 mt-20 md:mt-0">
          <p className="text-xl md:text-2xl mb-2">Lorem ipsum dolor sit</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Lorem ipsum dolor{" "}
            <span className="text-red-500">sit amet consectetur.</span>
          </h1>
          <p className="text-lg md:text-xl mb-8">Consult a Lawyer now.</p>

          <div className="flex items-center justify-center md:justify-start mb-8">
            {/* Avatar Group */}
            {/* <div className="flex -space-x-3 overflow-hidden">
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40/FF0000/FFFFFF?text=A1" alt="Avatar 1"/>
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40/0000FF/FFFFFF?text=A2" alt="Avatar 2"/>
              <img className="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://via.placeholder.com/40/00FF00/FFFFFF?text=A3" alt="Avatar 3"/>
            </div> */}
            <span className="ml-4 text-white text-lg">
              +121 Lawyers are online
            </span>
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Talk to lawyer
          </button>
        </div>

        {/* Right Content - Lawyer Image and Contact Cards */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 order-first md:order-last">
          {/* Lawyer Image (positioned absolutely to overlap) */}
          <div className="w-64 h-64 md:w-0 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full overflow-hidden bg-gray-300 shadow-2xl">
            {/* Replace with your lawyer image */}
            <img
              src="/nn.jpg"
              alt="Lawyer"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Contact Cards (positioned relatively to the right content div or absolutely within HeroSection) */}
          <div className="absolute right-101 top-[-3rem] flex flex-col gap-4">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-xl flex items-center space-x-4 w-[280px]">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 14h16V6H4v12zm12-7h2v2h-2zm-6 0h2v2h-2zm-6 0h2v2H4zm0-4h2v2H4zm6 0h2v2h-2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Lorem ipsum</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-xl flex items-center space-x-4 w-[280px]">
              <div className="bg-green-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 12H5c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zM7 10h10v2H7z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Lorem ipsum</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bg-white rounded-lg p-4 md:p-6 shadow-xl flex items-center space-x-4 w-[280px]">
              <div className="bg-red-100 p-3 rounded-full">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Lorem ipsum</p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG for the curved bottom (you might need to adjust viewBox and path) */}
      {/* You can generate SVGs from tools like getwaves.io or similar */}
    </div>
  );
};

export default HeroSection;
