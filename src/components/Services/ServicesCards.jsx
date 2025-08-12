// src/components/ServicesCards.jsx
import { Link } from "react-router-dom";

export default function ServicesCards() {
  const services = [
    {
      title: "Consultation & Advisory",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
      description:
        "Get expert legal advice tailored to your unique situation. Our consultation services ensure you understand your rights and best course of action.",
      enquiryLink: "/enquiry",
      contactLink: "/contact",
    },
    {
      title: "Litigation & Disputes",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      description:
        "Strong representation in civil, criminal, and corporate disputes, ensuring your voice is heard in the courtroom and beyond.",
      enquiryLink: "/enquiry",
      contactLink: "/contact",
    },
    {
      title: "Contract Drafting & Review",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop",
      description:
        "Clear, enforceable contracts to protect your interests in every agreement, from business deals to personal arrangements.",
      enquiryLink: "/enquiry",
      contactLink: "/contact",
    },
    {
      title: "Family & Matrimonial",
      image:
        "https://images.unsplash.com/photo-1555375771-14b5b4b94e43?q=80&w=800&auto=format&fit=crop",
      description:
        "Sensitive and results-driven legal support in divorce, custody, and other family law matters, ensuring fairness and care.",
      enquiryLink: "/enquiry",
      contactLink: "/contact",
    },
    {
      title: "Property & Real Estate",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      description:
        "Due diligence, title verification, and dispute resolution services for secure property transactions and ownership.",
      enquiryLink: "/enquiry",
      contactLink: "/contact",
    },
    {
      title: "Corporate & Compliance",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=800&auto=format&fit=crop",
      description:
        "Compliance and governance solutions for businesses to operate confidently within legal frameworks.",
      enquiryLink: "/enquiry",
      contactLink: "/contact",
    },
  ];

  return (
    <section className="bg-gray-50 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl font-extrabold md:text-3xl text-gray-800">Our Core Services</h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base max-w-2xl mx-auto">
            We offer a wide range of legal services to protect your rights and secure your future.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col min-h-[220px]"> {/* ensures room for buttons */}
                <h3 className="text-lg font-semibold text-gray-800">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600">
                  {s.description}
                </p>

                {/* Buttons */}
                <div className="mt-auto pt-4 flex gap-3"> {/* pushes buttons to bottom */}
                  <Link
                    to={s.enquiryLink}
                    className="flex-1 text-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700 transition"
                  >
                    Enquiry
                  </Link>
                  <Link
                    to={s.contactLink}
                    className="flex-1 text-center rounded-lg border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
