import React from 'react';
import ServiceCard from './ServiceCards'; // Import the ServiceCard component

const FeatureSection = () => {
  return (
    <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-50 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/3 mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Trust your future & <span className="text-red-500">Peaceful life</span>
          </h2>
          <p className="text-gray-600 mt-6 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis blandit ultricies elit adipiscing volutpat sed. Lorem diam amet donec enim. Et viverra mauris.
          </p>
        </div>

        {/* Right Content - Service Cards (simplified carousel for now) */}
        <div className="relative w-full lg:w-2/3 flex justify-center items-center">
          {/* Left Arrow (Placeholder) */}
          <button className="absolute left-0 lg:-left-12 p-3 bg-white rounded-full shadow-lg z-10 hidden lg:block hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.38 0 2.5 1.12 2.5 2.5S13.38 10 12 10 9.5 8.88 9.5 7.5 10.62 5 12 5zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.89 6-3.89s5.97 1.9 6 3.89c-1.29 1.94-3.5 3.22-6 3.22z"/></svg>
              }
              title="Immigration"
              description="Lorem ipsum dolor sit amet consectetur. Est sapien curabitur."
              bgColor="blue"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              }
              title="Property"
              description="Lorem ipsum dolor sit amet consectetur. Est sapien curabitur."
              bgColor="orange"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              }
              title="Matrimonial"
              description="Lorem ipsum dolor sit amet consectetur. Est sapien curabitur."
              bgColor="red"
            />
            <ServiceCard
              icon={
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              }
              title="Personal"
              description="Lorem ipsum dolor sit amet consectetur. Est sapien curabitur."
              bgColor="purple"
            />
          </div>

          {/* Right Arrow (Placeholder) */}
          <button className="absolute right-0 lg:-right-12 p-3 bg-white rounded-full shadow-lg z-10 hidden lg:block hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;