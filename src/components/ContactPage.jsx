// src/pages/ContactPage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

/* --- Minimal SEO helper (no extra packages) --- */
function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;

    const set = (sel, key, val) => {
      let el = document.querySelector(`meta[${sel}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(sel, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    set("name", "description", description);
    set("property", "og:title", title);
    set("property", "og:description", description);
    set("property", "og:type", "website");
  }, [title, description]);

  return null;
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      // TODO: replace with your API call
      await new Promise((r) => setTimeout(r, 900));
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact Us | Lawyers — Legal Services"
        description="Consult a lawyer now. Contact our legal team for enquiries, appointments, or case updates. We usually respond within one business day."
      />

      {/* HERO (teal gradient like your home) */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1555375771-14b5b4b94e43?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-900/95" />
        </div>

        <div className="mx-auto max-w-6xl px-6 py-14 text-white">
          <nav className="mb-3 text-sm text-white/80" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
              <ShieldCheck className="h-4 w-4" />
              We respect your privacy
            </div>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl leading-tight">
              Contact Our Legal Team
            </h1>
            <p className="mt-2 text-white/90">
              Consult a lawyer now. +121 lawyers are online.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+919999999999"
                className="inline-flex items-center justify-center rounded-xl bg-[#E8663D] px-5 py-3 font-semibold text-white shadow hover:brightness-95"
              >
                Talk to lawyer <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                to="/enquiry"
                className="inline-flex items-center justify-center rounded-xl border border-white/60 px-5 py-3 font-semibold text-white hover:bg-white/10"
              >
                Enquiry Form
              </Link>
            </div>
          </div>
        </div>

        {/* curve footer to echo your homepage hero */}
        <svg
          className="block w-full text-gray-50"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,80 C320,0 1120,0 1440,80 L1440,80 L0,80 Z"
          />
        </svg>
      </header>

      {/* CONTENT */}
      <main className="relative -mt-10 z-10">
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* LEFT: FORM */}
            <section className="lg:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white shadow-md">
                <div className="border-b border-gray-100 px-6 py-4">
                  <h2 className="text-lg font-semibold">Send us a message</h2>
                  <p className="text-sm text-gray-600">
                    We usually respond within one business day.
                  </p>
                </div>

                <form onSubmit={onSubmit} className="p-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      required
                      placeholder="Your full name"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={onChange}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={onChange}
                      placeholder="How can we help?"
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium">
                      Service
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={onChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="consultation">Consultation & Advisory</option>
                      <option value="litigation">Litigation & Disputes</option>
                      <option value="contracts">Contract Drafting & Review</option>
                      <option value="family">Family & Matrimonial</option>
                      <option value="property">Property & Real Estate</option>
                      <option value="corporate">Corporate & Compliance</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={onChange}
                      required
                      placeholder="Briefly describe your matter..."
                      className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm focus:border-teal-600 focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      type="submit"
                      disabled={sending}
                      className="inline-flex items-center justify-center rounded-lg bg-[#E8663D] px-5 py-2.5 text-sm font-semibold text-white shadow hover:brightness-95 disabled:opacity-60"
                    >
                      {sending ? "Sending..." : "Send Message"}{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    {sent && (
                      <span className="text-sm text-green-700">
                        Thanks! Your message has been sent.
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </section>

            {/* RIGHT: DETAILS + MAP (map BELOW the card) */}
            <aside className="space-y-6 lg:sticky lg:top-24">
              {/* Contact details card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-md">
                <h3 className="text-base font-semibold">Contact Details</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <a
                    href="tel:+919999999999"
                    className="flex items-start gap-3 hover:text-teal-700"
                  >
                    <PhoneCall className="mt-0.5 h-4 w-4 text-[#E8663D]" />
                    <span>+91 99999 99999</span>
                  </a>
                  <a
                    href="mailto:office@example.com"
                    className="flex items-start gap-3 hover:text-teal-700"
                  >
                    <Mail className="mt-0.5 h-4 w-4 text-[#E8663D]" />
                    <span>office@example.com</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-[#E8663D]" />
                    <span>
                      12th Floor, Business Tower, Main Street, Your City 000000
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-[#E8663D]" />
                    <span>Mon–Sat: 10:00 AM – 7:00 PM • Sun: Closed</span>
                  </div>

                  <div className="mt-3 flex gap-3">
                    <a
                      href="tel:+919999999999"
                      className="flex-1 text-center rounded-lg bg-[#E8663D] px-4 py-2 text-sm font-semibold text-white hover:brightness-95"
                    >
                      Call Now
                    </a>
                    <Link
                      to="/enquiry"
                      className="flex-1 text-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-100"
                    >
                      Enquiry Form
                    </Link>
                  </div>
                </div>
              </div>

              {/* Map card BELOW the contact details card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-1 shadow-md">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                  {/* Replace src with your actual Google Maps embed URL */}
                  <iframe
                    title="Office Location"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                    src="YOUR_GOOGLE_MAPS_EMBED_URL"
                    allowFullScreen
                  />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
