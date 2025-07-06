import React from 'react';

const ServiceCard = ({ icon, title, description, bgColor }) => {
  const iconBgClass = {
    blue: 'bg-blue-100 text-blue-600',
    orange: 'bg-orange-100 text-orange-600',
    red: 'bg-red-100 text-red-600',
    purple: 'bg-purple-100 text-purple-600',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition duration-300">
      <div className={`p-4 rounded-full ${iconBgClass[bgColor] || 'bg-gray-100 text-gray-600'}`}>
        {/* Placeholder for SVG Icon (replace with actual SVG or icon component) */}
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;