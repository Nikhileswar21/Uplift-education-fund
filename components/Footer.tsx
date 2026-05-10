import Link from "next/link";
import { Heart, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  Programs: [
    { label: "Scholarship Fund", href: "/programs" },
    { label: "School Kits", href: "/programs" },
    { label: "Digital Learning", href: "/programs" },
    { label: "Community Education", href: "/programs" },
  ],
  Organization: [
    { label: "About Us", href: "/impact" },
    { label: "Our Impact", href: "/impact" },
    { label: "Annual Reports", href: "/impact" },
    { label: "Partners", href: "/impact" },
  ],
  Support: [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/impact" },
    { label: "Corporate Giving", href: "/donate" },
    { label: "FAQ", href: "/impact" },
  ],
};

const socials = [
  { label: "X", href: "#" },
  { label: "IG", href: "#" },
  { label: "LI", href: "#" },
  { label: "FB", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C2422] text-white">
      {/* Top CTA band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#8A9E99] text-sm uppercase tracking-widest font-medium mb-1">
              Join our mission
            </p>
            <h3
              className="text-2xl lg:text-3xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every child deserves the chance to learn.
            </h3>
          </div>
          <Link
            href="/donate"
            className="shrink-0 px-7 py-3.5 bg-[#C9973A] text-white font-semibold rounded-full hover:bg-[#E8B85C] transition-colors shadow-[0_4px_20px_rgba(201,151,58,0.3)]"
          >
            Make a Difference
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <div className="w-8 h-8 rounded-full bg-[#1A6B5A] flex items-center justify-center">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
              <span
                className="text-white font-semibold text-[15px]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Uplift Education Fund
              </span>
            </Link>
            <p className="text-[#8A9E99] text-sm leading-relaxed mb-6 max-w-xs">
              A registered international nonprofit dedicated to transforming the lives of underserved children through education, one family at a time.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@uplifteducationfund.org"
                className="flex items-center gap-2.5 text-[#8A9E99] hover:text-[#2A8B74] text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@uplifteducationfund.org
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2.5 text-[#8A9E99] hover:text-[#2A8B74] text-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 800 555 1234
              </a>
              <span className="flex items-center gap-2.5 text-[#8A9E99] text-sm">
                <MapPin className="w-4 h-4 shrink-0" />
                New York, NY · Geneva, Switzerland
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[#8A9E99] hover:text-[#2A8B74] text-sm transition-colors animated-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8A9E99] text-xs">
            © 2026 Uplift Education Fund. All rights reserved. 501(c)(3) registered nonprofit.
          </p>
          <div className="flex items-center gap-1">
            {socials.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#8A9E99] hover:text-white hover:bg-white/10 transition-colors text-xs font-bold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
