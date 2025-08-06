import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-[#f4f5f7] py-16 px-4 font-['Inter']">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 md:p-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b354f] mb-2">
            Speak With a Legal Expert
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            We understand that legal issues can be overwhelming. Fill out the form below
            and our trusted professionals will reach out to you for a confidential consultation.
          </p>
        </div>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91-XXXXXXXXXX"
              className="w-full border border-gray-300 rounded-md px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              How can we assist you?
            </label>
            <textarea
              rows="5"
              placeholder="Briefly describe your legal concern..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none transition focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition shadow-md hover:shadow-lg"
            >
              Request Consultation
            </button>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Your information will not be shared.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
