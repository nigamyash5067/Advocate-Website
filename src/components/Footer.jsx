// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
} from "lucide-react";

/** Customize these */
const ACCENT = "#E8663D";
const FIRM = {
  name: "Legalots Law Firm",
  tagline: "Your trusted legal advocate in Kanpur Nagar.",
  address:
    "12th Floor, Business Tower, Main Street, Kanpur, Uttar Pradesh 208001",
  phones: ["+91 9044 918 563", "+91 9451 217 878"],
  emails: ["info@legalots.com", "legalots@gmail.com"],
  logo: "https://dummyimage.com/300x120/111827/fff&text=LEGALOTS", // replace with your logo URL
  mapEmbed:
    "https://www.google.com/maps?q=26.4499,80.3319&z=14&output=embed", // replace with your embed
  socials: {
    facebook: "#",
    instagram: "#",
    twitter: "#",
    linkedin: "#",
    youtube: "#",
  },
};

const servicesArea = [
  "Civil Cases",
  "Contract disputes",
  "Consumer Protection Cases",
  "Property registration & ownership",
  "Criminal Cases",
  "Anticipatory/Regular Bail",
  "Cybercrime Matters",
  "Family & Matrimonial",
  "Visa & Immigration",
  "Intellectual Property Rights",
  "Income Tax disputes",
  "GST Matters",
];

const otherServices = [
  "Banking & Finance",
  "Loan defaults & recovery",
  "Real Estate & Tenancy",
  "Mediation & Conciliation",
  "Commercial Arbitration",
  "Juvenile & Employment",
  "Environmental & Public Matters",
  "Labour & Industrial",
  "Constitutional Matters",
  "Public Interest Litigation",
];

export default function Footer() {
  return (
    <footer className="mt-12 bg-[#0f172a] text-gray-200">
      {/* Top stripe (thin) */}
      <div
        className="h-[3px] w-full"
        style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }}
      />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Firm / Logo / Intro */}
          <div>
            {FIRM.logo ? (
              <img
                src={FIRM.logo}
                alt={`${FIRM.name} logo`}
                className="mb-4 max-h-20 w-auto"
              />
            ) : (
              <h3 className="mb-2 text-xl font-bold">{FIRM.name}</h3>
            )}
            <p className="text-sm leading-relaxed text-gray-300">
              Welcome to <span className="font-semibold">{FIRM.name}</span>.
              {` ${FIRM.tagline}`} We specialize in providing expert legal
              services that empower our clients to navigate the complexities of
              the legal system with confidence.
            </p>
          </div>

          {/* Services Area */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Our Services Area</h4>
            <ul className="grid grid-cols-1 gap-2 text-sm text-gray-300">
              {servicesArea.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Fields */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Other fields of Service</h4>
            <ul className="grid grid-cols-1 gap-2 text-sm text-gray-300">
              {otherServices.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className="mt-2 inline-block h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow / Contact / Map */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Follow Us On</h4>
            <div className="mb-5 flex items-center gap-3">
              <a href={FIRM.socials.facebook} aria-label="Facebook" className="hover:opacity-80">
                <Facebook size={18} />
              </a>
              <a href={FIRM.socials.instagram} aria-label="Instagram" className="hover:opacity-80">
                <Instagram size={18} />
              </a>
              <a href={FIRM.socials.twitter} aria-label="Twitter" className="hover:opacity-80">
                <Twitter size={18} />
              </a>
              <a href={FIRM.socials.linkedin} aria-label="LinkedIn" className="hover:opacity-80">
                <Linkedin size={18} />
              </a>
              <a href={FIRM.socials.youtube} aria-label="YouTube" className="hover:opacity-80">
                <Youtube size={18} />
              </a>
            </div>

            <div className="space-y-2 text-sm">
              {FIRM.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-white">
                  <Phone size={16} style={{ color: ACCENT }} />
                  {p}
                </a>
              ))}
              {FIRM.emails.map((e) => (
                <a key={e} href={`mailto:${e}`} className="flex items-center gap-2 hover:text-white">
                  <Mail size={16} style={{ color: ACCENT }} />
                  {e}
                </a>
              ))}
              <div className="flex items-start gap-2">
                <MapPin size={16} style={{ color: ACCENT }} />
                <span>{FIRM.address}</span>
              </div>
            </div>

            {/* Small map */}
            <div className="mt-4 overflow-hidden rounded-md border border-white/10">
              <iframe
                title="Office Location"
                src={FIRM.mapEmbed}
                width="100%"
                height="160"
                loading="lazy"
                className="block"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Legal links + © */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 md:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <Link to="/disclaimer" className="hover:text-white">
              Disclaimer
            </Link>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
          <p className="text-xs">
            &copy; {new Date().getFullYear()} {FIRM.name}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
