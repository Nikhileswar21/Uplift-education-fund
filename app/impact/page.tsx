"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Heart, CheckCircle, ArrowRight, Quote } from "lucide-react";
import { stats, milestones, testimonials, faqs, partners } from "@/lib/data";

export default function ImpactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-[#1C2422]">
        <Image
          src="https://images.unsplash.com/photo-1526976668912-1a811878dd37?w=1400&q=70"
          alt="Impact"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2422] to-[#1C2422]/90" />

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="w-8 h-px bg-[#C9973A]" />
                <span className="text-[#C9973A] text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Story & Impact
                </span>
              </div>
              <h1
                className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Education is the Most Powerful{" "}
                <span className="text-[#2A8B74]">Force for Change</span>
              </h1>
              <p className="text-[#8A9E99] text-lg leading-relaxed">
                Founded in 2019, Uplift Education Fund was built on a single conviction: that geography and circumstance should never determine a child&apos;s access to quality education.
              </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-6 rounded-2xl border transition-all ${
                    i === 0
                      ? "bg-[#1A6B5A] border-[#1A6B5A] col-span-2 md:col-span-1"
                      : "bg-white/5 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div
                    className={`text-3xl font-bold mb-1 ${i === 0 ? "text-white" : "text-white/90"}`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {s.value}
                  </div>
                  <div className={`font-semibold text-sm ${i === 0 ? "text-white/80" : "text-white/60"}`}>
                    {s.label}
                  </div>
                  <div className={`text-xs mt-1 ${i === 0 ? "text-white/60" : "text-[#8A9E99]"}`}>
                    {s.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Story */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80"
                  alt="Children learning"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2422]/50 to-transparent" />
              </div>
              {/* Floating stat */}
              <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-5 shadow-[0_8px_40px_rgba(26,107,90,0.15)] border border-[#DDD8CE]">
                <div
                  className="text-3xl font-bold text-[#1A6B5A] mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  92%
                </div>
                <div className="text-[#4A5C58] text-xs font-medium leading-tight">
                  Program<br />Efficiency
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#1A6B5A]" />
                <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
                  Our Mission
                </span>
              </div>
              <h2
                className="text-4xl font-bold text-[#1C2422] mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                We Build Bridges Between Children and Their Futures
              </h2>
              <div className="space-y-4 text-[#4A5C58] leading-relaxed">
                <p>
                  We believe education is not a privilege — it is a right. Every year, millions of children
                  are denied access to learning because of poverty, displacement, or lack of infrastructure.
                </p>
                <p>
                  Uplift Education Fund works with local partners, governments, and communities to remove
                  the barriers that stand between children and a quality education. We do this through
                  targeted scholarships, essential school kits, digital learning access, and parent
                  education programs.
                </p>
                <p>
                  Our model is direct, transparent, and community-driven. We don&apos;t impose solutions —
                  we fund what communities know works.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "Direct community partnerships in 23 countries",
                  "Independent annual audits published publicly",
                  "Beneficiary feedback integrated into program design",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1A6B5A] shrink-0 mt-0.5" />
                    <span className="text-[#4A5C58] text-sm">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1A6B5A]" />
              <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
                Our Journey
              </span>
              <span className="w-8 h-px bg-[#1A6B5A]" />
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-[#1C2422] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Seven Years of Growing Impact
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#DDD8CE] -translate-x-1/2 hidden md:block" />
            <div className="flex flex-col gap-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 bg-white rounded-2xl p-6 border border-[#DDD8CE] shadow-sm hover:shadow-[0_8px_32px_rgba(26,107,90,0.08)] transition-shadow ${
                      i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div
                      className="text-3xl font-bold text-[#1A6B5A] mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {m.year}
                    </div>
                    <h3
                      className="text-lg font-bold text-[#1C2422] mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {m.title}
                    </h3>
                    <p className="text-[#8A9E99] text-sm leading-relaxed">{m.description}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#1A6B5A] border-4 border-[#F5F0E8] z-10" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency / Fund usage */}
      <section className="py-24 bg-[#1C2422] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#1A6B5A]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[#C9973A]" />
                <span className="text-[#C9973A] text-xs font-semibold uppercase tracking-[0.2em]">
                  Financial Transparency
                </span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                How Your Donation Is Used
              </h2>
              <p className="text-[#8A9E99] leading-relaxed mb-8">
                We publish detailed annual reports and submit to independent audits every year.
                Our commitment to transparency is central to the trust our donors place in us.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C9973A] text-white font-semibold rounded-full hover:bg-[#E8B85C] transition-colors text-sm"
              >
                Donate with Confidence
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { label: "Direct Programs", pct: 72, color: "#1A6B5A" },
                { label: "Scholar Support", pct: 20, color: "#2A8B74" },
                { label: "Fundraising", pct: 5, color: "#C9973A" },
                { label: "Administration", pct: 3, color: "#4A5C58" },
              ].map((item) => (
                <div key={item.label} className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <div className="flex justify-between text-sm mb-3">
                    <span className="text-white font-medium">{item.label}</span>
                    <span className="font-bold" style={{ color: item.color }}>
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-[#8A9E99] text-xs text-right">
                Based on 2025 audited financials
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-14">
            <span className="w-8 h-px bg-[#1A6B5A]" />
            <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
              Voices from the Field
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-7 border border-[#DDD8CE] shadow-sm hover:shadow-[0_8px_32px_rgba(26,107,90,0.08)] transition-shadow"
              >
                <Quote className="w-7 h-7 text-[#1A6B5A]/20 mb-5" />
                <p className="text-[#4A5C58] text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#1C2422]">{t.name}</div>
                    <div className="text-xs text-[#8A9E99] mt-0.5">{t.role} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[#F5F0E8] border-y border-[#DDD8CE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-[#8A9E99] text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            Supported & Partnered With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partners.map((p) => (
              <div
                key={p}
                className="px-6 py-3 bg-white rounded-xl border border-[#DDD8CE] text-[#4A5C58] font-semibold text-sm hover:border-[#1A6B5A] hover:text-[#1A6B5A] transition-all shadow-sm"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#FAF8F4]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="w-8 h-px bg-[#1A6B5A]" />
              <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
                Common Questions
              </span>
              <span className="w-8 h-px bg-[#1A6B5A]" />
            </div>
            <h2
              className="text-4xl font-bold text-[#1C2422]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={faq.question}
                className={`bg-white rounded-2xl border overflow-hidden transition-all ${
                  openFaq === i ? "border-[#1A6B5A] shadow-[0_4px_24px_rgba(26,107,90,0.10)]" : "border-[#DDD8CE]"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className={`font-semibold text-sm ${openFaq === i ? "text-[#1A6B5A]" : "text-[#1C2422]"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180 text-[#1A6B5A]" : "text-[#8A9E99]"
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#4A5C58] text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#1A6B5A] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Heart className="w-10 h-10 text-white/40 fill-white/30 mx-auto mb-6" />
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready to Join the Mission?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you give $15 or $15,000, your donation becomes part of a story that lasts a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-white text-[#1A6B5A] font-bold rounded-full hover:bg-[#FAF8F4] transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.15)] text-sm"
            >
              Donate Now
            </Link>
            <Link
              href="/programs"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white/10 transition-all text-sm"
            >
              Explore Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
