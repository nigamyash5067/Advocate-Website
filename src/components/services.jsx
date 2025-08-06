import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Matrimonial Law",
      image: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
    },
    {
      title: "Property Disputes",
      image: "https://cdn-icons-png.flaticon.com/512/686/686589.png",
    },
    {
      title: "Corporate Law",
      image: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    },
    {
      title: "Criminal Defense",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Will & Probate",
      image: "https://cdn-icons-png.flaticon.com/512/1077/1077063.png",
    },
    {
      title: "Immigration",
      image: "https://cdn-icons-png.flaticon.com/512/3306/3306699.png",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-12 font-['Inter']">
      <h2 className="text-3xl font-bold text-center text-[#2b354f] mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition hover:shadow-lg"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-24 h-24 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-[#2b354f]">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
