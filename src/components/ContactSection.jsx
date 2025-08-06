import React from "react";
import { Phone, MapPin, Home } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 font-['Inter']">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-[#2b354f]">
            Call Now for a Consultation
          </h2>

          <p className="flex items-center gap-2 text-lg text-[#2b354f] mb-4">
            <Phone className="text-[#f5a600]" size={18} />
            +91-9044918563, +91-9451217878
          </p>

          <p className="flex items-start gap-2 mb-2">
            <Home className="text-[#f5a600]" size={18} />
            <span>
              <span className="font-semibold text-red-600">Residents Office:</span>{" "}
              LIG 321, Gangapur Colony, Yashoda Nagar, Kanpur, 208011
            </span>
          </p>

          <p className="flex items-start gap-2 mb-6">
            <MapPin className="text-[#f5a600]" size={18} />
            <span>
              <span className="font-semibold text-red-600">Office Address:</span>{" "}
              Near New Lawyers Chamber, Collectorate Compound, Kanpur, 208001
            </span>
          </p>

          <button className="bg-black text-white px-6 py-2 rounded-md font-semibold shadow hover:bg-gray-800 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <img
            src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
            alt="Consultation"
            className="rounded-md shadow-md max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
