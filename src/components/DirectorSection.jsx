import React from "react";

const DirectorSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10 font-['Inter']">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row items-start gap-8">
        
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src="https://i.ibb.co/3TmkZ7r/shivam-pandey.jpg" // replace with actual URL if needed
            alt="Adv. Shivam Pandey"
            className="w-48 h-auto rounded-xl shadow"
          />
          <p className="text-center font-semibold text-sm mt-2">Adv. Shivam Pandey</p>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#2b354f] mb-4">
            <span className="border-l-4 border-blue-600 pl-2">
              DIRECTOR OF LEGALLOTS<sup>®</sup> LAW FIRM
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
            <strong>Adv. Shivam Pandey</strong> is founder of LegalLots law firm based in Kanpur Nagar
            that provides legal services in every domain of law. We have a best team of
            qualified and experienced lawyers & advocates who are committed to delivering
            the best legal services for our clients.
          </p>

          <p className="text-sm md:text-base text-gray-800 mb-4 leading-relaxed">
            At <strong>LegalLots Law Firm</strong>, we handle a variety of cases, ranging from civil and
            criminal litigation, corporate and commercial law, family and matrimonial law,
            intellectual property and cyber law, to arbitration and mediation. We have successfully
            represented individuals, businesses, and organizations in various courts and tribunals in
            Kanpur, Uttar Pradesh.
          </p>

          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            Ultimately, <strong>LegalLots.com</strong> is more than a website; it’s a testament to our
            dedication to justice and advocacy. Whether you’re seeking guidance in family law,
            navigating the complexities of business transactions, or require representation in a
            courtroom, we stand ready to be your legal partner, your advocate, and your source of
            unwavering support.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DirectorSection;
