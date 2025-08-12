// src/components/ServicesHeader.jsx
import { Gavel, ShieldCheck, PhoneCall, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesHeader() {
  return (
    <header className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Hero image */}
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0f172a] to-black opacity-90" />
        {/* Subtle grid */}
        <svg
          className="absolute inset-0 opacity-10 mix-blend-overlay"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M32 0H0V32" fill="none" stroke="white" strokeOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 text-white md:pt-24 md:pb-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-300" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white">Services</span>
        </nav>

        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs tracking-wide border border-white/10">
            <ShieldCheck className="h-4 w-4 text-red-400" />
            TRUSTED LEGAL COUNSEL
          </div>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            Legal Expertise with <span className="text-red-500">Integrity</span> & Precision
          </h1>

          <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
            Our legal team provides comprehensive services that combine deep industry
            knowledge with unwavering dedication, ensuring your rights are protected
            at every step.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white shadow-lg shadow-red-900/40 hover:bg-red-700 transition"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-gray-400/40 px-5 py-3 font-semibold text-gray-200 hover:bg-white/10 transition"
            >
              Contact Our Office
            </Link>
          </div>
        </div>

        {/* Highlights row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
            <Gavel className="h-5 w-5 shrink-0 mt-0.5 text-red-400" />
            <div>
              <div className="font-semibold">Case Strategy</div>
              <div className="text-sm text-gray-300">
                Tailored legal strategies built around your goals.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
            <FileText className="h-5 w-5 shrink-0 mt-0.5 text-red-400" />
            <div>
              <div className="font-semibold">Transparent Process</div>
              <div className="text-sm text-gray-300">
                Full clarity with documentation and timelines.
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
            <PhoneCall className="h-5 w-5 shrink-0 mt-0.5 text-red-400" />
            <div>
              <div className="font-semibold">Responsive Support</div>
              <div className="text-sm text-gray-300">
                Prompt updates via phone or email—no uncertainty.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
