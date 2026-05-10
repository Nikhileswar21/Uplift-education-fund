"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#FAF8F4]/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,107,90,0.08)]"
            : "py-5 bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#1A6B5A] flex items-center justify-center group-hover:bg-[#0F4538] transition-colors">
              <Heart className="w-4 h-4 text-white fill-white" />
            </div>
            <span
              className="text-[#1C2422] font-semibold text-[15px] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Uplift Education Fund
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide transition-colors relative animated-underline ${
                  pathname === link.href
                    ? "text-[#1A6B5A] font-medium"
                    : "text-[#4A5C58] hover:text-[#1A6B5A]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#1A6B5A] rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/donate"
              className="px-5 py-2.5 bg-[#1A6B5A] text-white text-sm font-medium rounded-full hover:bg-[#0F4538] transition-all duration-200 shadow-[0_2px_12px_rgba(26,107,90,0.25)] hover:shadow-[0_4px_20px_rgba(26,107,90,0.35)] hover:-translate-y-0.5"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#1C2422] hover:text-[#1A6B5A] transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[#1C2422]/60 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 w-72 h-full bg-[#FAF8F4] flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-[#1A6B5A]/10 text-[#1A6B5A]"
                    : "text-[#4A5C58] hover:bg-[#1A6B5A]/5 hover:text-[#1A6B5A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-[#DDD8CE]">
              <Link
                href="/donate"
                className="block w-full text-center px-5 py-3 bg-[#1A6B5A] text-white font-medium rounded-full hover:bg-[#0F4538] transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile sticky donate CTA */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 md:hidden">
        <Link
          href="/donate"
          className="flex items-center gap-2 px-6 py-3 bg-[#1A6B5A] text-white font-semibold text-sm rounded-full shadow-[0_8px_32px_rgba(26,107,90,0.4)] hover:bg-[#0F4538] transition-all active:scale-95"
        >
          <Heart className="w-4 h-4 fill-white" />
          Donate Now
        </Link>
      </div>
    </>
  );
}
