// src/pages/AboutPage.jsx
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, Gavel, FileText, PhoneCall } from "lucide-react";

const ACCENT = "#E8663D";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* HERO — use the same working teal gradient as Contact page */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1555375771-14b5b4b94e43?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900/95" />
        </div>

        <div className="mx-auto max-w-7xl px-6 pt-16 pb-14 text-white">
          <nav className="mb-4 text-sm text-white/80" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
            <ShieldCheck className="h-4 w-4" />
            TRUSTED LEGAL COUNSEL
          </div>

          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            About Our Chambers with <span style={{ color: ACCENT }}>Integrity</span> & Precision
          </h1>

          <p className="mt-3 max-w-3xl text-white/90">
            We combine deep legal expertise with clear communication and unwavering dedication.
            Practical advice, strong advocacy, and outcomes that protect your interests.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow hover:brightness-95"
              style={{ backgroundColor: ACCENT }}
            >
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              Contact Our Office
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
              <Gavel className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} />
              <div>
                <div className="text-sm font-semibold">Case Strategy</div>
                <div className="text-xs text-white/75">Tailored legal strategies built around your goals.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
              <FileText className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} />
              <div>
                <div className="text-sm font-semibold">Transparent Process</div>
                <div className="text-xs text-white/75">Full clarity with documentation and timelines.</div>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">
              <PhoneCall className="mt-0.5 h-5 w-5" style={{ color: ACCENT }} />
              <div>
                <div className="text-sm font-semibold">Responsive Support</div>
                <div className="text-xs text-white/75">Prompt updates via phone or email—no uncertainty.</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-6 w-full bg-gradient-to-b from-teal-900 to-transparent" />
      </header>

      {/* BODY */}
      <main className="bg-gray-50">
        <section className="mx-auto max-w-7xl px-6 py-10">
          <h2 className="text-center text-xl font-bold text-gray-900">Who We Are</h2>
          <p className="mx-auto mt-2 max-w-3xl text-center text-gray-700">
            We’re a client-first practice with a strong record across civil, criminal, corporate, family, and property matters.
            Expect clear advice, realistic timelines, and dedicated representation.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">Clarity</div>
              <p className="mt-1 text-sm text-gray-600">Options in plain language with practical next steps.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">Preparation</div>
              <p className="mt-1 text-sm text-gray-600">Thorough groundwork and documentation at every stage.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold">Results</div>
              <p className="mt-1 text-sm text-gray-600">Strategy aligned to your goals—protecting your rights.</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-800 p-6 text-white md:p-8">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h3 className="text-lg font-bold">Ready to talk?</h3>
                <p className="text-white/90">Get a clear plan in your first consultation.</p>
              </div>
              <div className="flex gap-3">
                <Link
                  to="/enquiry"
                  className="rounded-xl px-5 py-2.5 font-semibold text-white"
                  style={{ backgroundColor: ACCENT }}
                >
                  Book Consultation
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-white/60 px-5 py-2.5 font-semibold text-white hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
