"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, ChevronRight, Quote, Star, Heart } from "lucide-react";
import { programs, stats, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1C2422]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80"
            alt="Children in classroom"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C2422] via-[#1C2422]/85 to-[#1C2422]/50" />
        </div>

        {/* Right panel image */}
        <div className="absolute right-0 top-0 bottom-0 w-[38%] hidden lg:block overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80"
            alt="Students learning"
            fill
            className="object-cover opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1C2422]" />
          {/* Floating badge */}
          <div className="absolute bottom-16 left-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 max-w-[200px]">
            <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>14,900+</div>
            <div className="text-white/70 text-xs leading-relaxed">Children whose futures we&apos;ve helped shape</div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#C9973A]" />
              <span className="text-[#C9973A] text-xs font-semibold uppercase tracking-[0.2em]">
                International Education Nonprofit
              </span>
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-[68px] font-bold text-white leading-[1.06] mb-7"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Every Child Deserves{" "}
              <em className="not-italic text-[#2A8B74]">the Right</em>{" "}
              to Learn.
            </h1>

            <p className="text-[#8A9E99] text-lg leading-relaxed max-w-lg mb-10">
              We close the gap between potential and opportunity through scholarships, school kits, digital learning, and community programs that transform futures.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link
                href="/donate"
                className="flex items-center gap-2 px-7 py-4 bg-[#1A6B5A] text-white font-semibold rounded-full hover:bg-[#0F4538] transition-all duration-200 shadow-[0_4px_24px_rgba(26,107,90,0.4)] hover:shadow-[0_8px_32px_rgba(26,107,90,0.5)] hover:-translate-y-0.5 text-sm"
              >
                Donate Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/programs"
                className="flex items-center gap-2 px-7 py-4 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all text-sm"
              >
                <Play className="w-3 h-3 fill-white" />
                Explore Programs
              </Link>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { n: "14,900+", l: "Children reached" },
                { n: "23", l: "Countries active" },
                { n: "92%", l: "Goes to programs" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                    {s.n}
                  </div>
                  <div className="text-[#8A9E99] text-xs uppercase tracking-wider mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== IMPACT STATS ===================== */}
      <section className="py-20 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-8 h-px bg-[#1A6B5A]" />
            <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
              Our Impact in Numbers
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[#DDD8CE] rounded-2xl overflow-hidden border border-[#DDD8CE] shadow-sm">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FAF8F4] p-8 lg:p-10 group hover:bg-[#F5F0E8] transition-colors"
              >
                <div className="w-8 h-0.5 bg-[#1A6B5A] mb-6 group-hover:w-14 transition-all duration-300" />
                <div
                  className="text-4xl lg:text-5xl font-bold text-[#1C2422] mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </div>
                <div className="text-[#4A5C58] font-semibold text-sm mb-1">{stat.label}</div>
                <div className="text-[#8A9E99] text-xs">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROGRAMS ===================== */}
      <section className="py-24 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-[#1A6B5A]" />
                <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">What We Do</span>
              </div>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#1C2422] leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Programs Built for{" "}
                <br className="hidden md:block" />
                <span className="text-[#1A6B5A]">Lasting Change</span>
              </h2>
            </div>
            <Link
              href="/programs"
              className="flex items-center gap-2 text-[#1A6B5A] font-semibold text-sm hover:gap-3 transition-all shrink-0"
            >
              View All Programs <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 3).map((program) => {
              const pct = Math.round((program.raised / program.goal) * 100);
              return (
                <Link
                  key={program.id}
                  href={`/programs/${program.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(26,107,90,0.06)] hover:shadow-[0_12px_40px_rgba(26,107,90,0.14)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2422]/40 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-[#1A6B5A] text-xs font-semibold rounded-full uppercase tracking-wide">
                      {program.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="text-lg font-bold text-[#1C2422] mb-2 group-hover:text-[#1A6B5A] transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-[#8A9E99] text-sm leading-relaxed mb-5 flex-1">{program.tagline}</p>
                    <div className="mb-4">
                      <div className="flex justify-between text-xs text-[#4A5C58] mb-2">
                        <span className="font-semibold">${(program.raised / 1000).toFixed(0)}K raised</span>
                        <span className="text-[#8A9E99]">{pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[#F5F0E8] rounded-full overflow-hidden">
                        <div className="h-full bg-[#1A6B5A] rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs text-[#8A9E99]">
                      <span>{program.beneficiaries.toLocaleString()} beneficiaries</span>
                      <span className="flex items-center gap-1 text-[#1A6B5A] font-semibold">
                        Learn more <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Wide card */}
          <div className="mt-6">
            <Link
              href={`/programs/${programs[3].id}`}
              className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(26,107,90,0.06)] hover:shadow-[0_12px_40px_rgba(26,107,90,0.14)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="relative h-52 md:h-auto md:w-80 shrink-0 overflow-hidden">
                <Image
                  src={programs[3].image}
                  alt={programs[3].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center flex-1">
                <span className="px-3 py-1 bg-[#1A6B5A]/10 text-[#1A6B5A] text-xs font-semibold rounded-full uppercase tracking-wide w-fit mb-3">
                  {programs[3].category}
                </span>
                <h3
                  className="text-2xl font-bold text-[#1C2422] mb-2 group-hover:text-[#1A6B5A] transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {programs[3].title}
                </h3>
                <p className="text-[#8A9E99] text-sm leading-relaxed mb-6 max-w-lg">{programs[3].tagline}</p>
                <div className="flex items-center gap-6 flex-wrap">
                  <div>
                    <div className="flex gap-4 text-xs text-[#4A5C58] mb-2">
                      <span className="font-semibold">${(programs[3].raised / 1000).toFixed(0)}K raised</span>
                      <span className="text-[#8A9E99]">{Math.round((programs[3].raised / programs[3].goal) * 100)}% of goal</span>
                    </div>
                    <div className="w-48 h-1.5 bg-[#F5F0E8] rounded-full overflow-hidden">
                      <div className="h-full bg-[#1A6B5A] rounded-full" style={{ width: `${Math.round((programs[3].raised / programs[3].goal) * 100)}%` }} />
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-[#1A6B5A] font-semibold text-sm">
                    View Program <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIAL ===================== */}
      <section className="py-24 bg-[#1C2422] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A6B5A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#C9973A]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-14">
            <span className="w-8 h-px bg-[#C9973A]" />
            <span className="text-[#C9973A] text-xs font-semibold uppercase tracking-[0.2em]">Stories of Change</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`relative p-8 rounded-2xl border transition-all ${
                  i === 1
                    ? "bg-[#1A6B5A] border-[#1A6B5A] lg:scale-105"
                    : "bg-white/5 border-white/10 hover:border-white/20"
                }`}
              >
                <Quote className={`w-8 h-8 mb-6 ${i === 1 ? "text-white/40" : "text-[#2A8B74]/40"}`} />
                <p className={`text-base leading-relaxed mb-8 ${i === 1 ? "text-white" : "text-[#8A9E99]"}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm ${i === 1 ? "text-white" : "text-white/80"}`}>{t.name}</div>
                    <div className={`text-xs mt-0.5 ${i === 1 ? "text-white/70" : "text-[#8A9E99]"}`}>
                      {t.role} · {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-24 bg-[#FAF8F4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=1400&q=60"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF8F4]/92" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex -space-x-2">
              {["1531123897727-8f129e1688ce", "1508214751196-bcfd4ca60f91", "1507003211169-0a1dd7228f2d"].map((id) => (
                <div key={id} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image src={`https://images.unsplash.com/photo-${id}?w=80&q=80`} alt="" fill className="object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-[#1A6B5A] flex items-center justify-center text-white text-xs font-semibold border-2 border-white shadow-sm">
                +14k
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-[#C9973A] fill-[#C9973A]" />
            ))}
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-[#1C2422] mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Be the reason a child{" "}
            <span className="text-[#1A6B5A]">stays in school</span> this year.
          </h2>
          <p className="text-[#4A5C58] text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Your donation today creates a ripple that reaches not just one child, but entire communities — for generations to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/donate"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#1A6B5A] text-white font-semibold rounded-full hover:bg-[#0F4538] transition-all duration-200 shadow-[0_4px_24px_rgba(26,107,90,0.3)] hover:shadow-[0_8px_40px_rgba(26,107,90,0.4)] hover:-translate-y-0.5 text-sm"
            >
              <Heart className="w-4 h-4 fill-white" />
              Donate Now
            </Link>
            <Link
              href="/impact"
              className="px-8 py-4 border-2 border-[#1A6B5A] text-[#1A6B5A] font-semibold rounded-full hover:bg-[#1A6B5A] hover:text-white transition-all text-sm text-center"
            >
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
