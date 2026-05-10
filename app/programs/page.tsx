"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Users, MapPin, ArrowUpRight } from "lucide-react";
import { programs } from "@/lib/data";

const categories = ["All", "Academics", "Essentials", "Technology", "Community"];

export default function ProgramsPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? programs : programs.filter((p) => p.category === active);

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 bg-[#1C2422] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1400&q=70"
            alt="Programs"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C2422]/80 to-[#1C2422]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#C9973A]" />
            <span className="text-[#C9973A] text-xs font-semibold uppercase tracking-[0.2em]">
              What We Do
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Programs Designed for{" "}
            <span className="text-[#2A8B74]">Real Impact</span>
          </h1>
          <p className="text-[#8A9E99] text-lg max-w-xl leading-relaxed">
            Each initiative is built from direct community insight — addressing the specific barriers that keep children out of school.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-[64px] z-30 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#DDD8CE]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-[#1A6B5A] text-white shadow-[0_2px_12px_rgba(26,107,90,0.25)]"
                    : "bg-transparent text-[#4A5C58] hover:bg-[#1A6B5A]/8 hover:text-[#1A6B5A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-16 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((program, i) => {
              const pct = Math.round((program.raised / program.goal) * 100);
              const isFeatured = i === 0 && active === "All";
              return (
                <Link
                  key={program.id}
                  href={`/programs/${program.id}`}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-[0_2px_20px_rgba(26,107,90,0.06)] hover:shadow-[0_16px_56px_rgba(26,107,90,0.14)] transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                    isFeatured ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      isFeatured ? "h-72 md:h-80" : "h-56"
                    }`}
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2422]/60 via-transparent to-transparent" />

                    {/* Overlaid info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                      <div className="flex gap-2 flex-wrap">
                        <span className="px-3 py-1 bg-white/90 text-[#1A6B5A] text-xs font-semibold rounded-full uppercase tracking-wide">
                          {program.category}
                        </span>
                        <span className="px-3 py-1 bg-[#1A6B5A] text-white text-xs font-medium rounded-full flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {program.beneficiaries.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white group-hover:bg-[#1A6B5A] group-hover:border-[#1A6B5A] transition-all">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h2
                        className={`font-bold text-[#1C2422] group-hover:text-[#1A6B5A] transition-colors ${
                          isFeatured ? "text-2xl" : "text-xl"
                        }`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {program.title}
                      </h2>
                    </div>

                    <p className="text-[#8A9E99] text-sm leading-relaxed mb-4 flex-1">
                      {program.description.slice(0, isFeatured ? 200 : 120)}…
                    </p>

                    {/* Region */}
                    <div className="flex items-center gap-1.5 text-[#8A9E99] text-xs mb-5">
                      <MapPin className="w-3.5 h-3.5" />
                      {program.region}
                    </div>

                    {/* Progress */}
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-semibold text-[#1C2422]">
                          ${program.raised.toLocaleString()} raised
                        </span>
                        <span className="text-[#8A9E99]">
                          {pct}% of ${program.goal.toLocaleString()} goal
                        </span>
                      </div>
                      <div className="h-2 bg-[#F5F0E8] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-300"
                          style={{
                            width: `${pct}%`,
                            background: "linear-gradient(90deg, #1A6B5A, #2A8B74)",
                          }}
                        />
                      </div>
                    </div>

                    {/* Highlights (featured) */}
                    {isFeatured && (
                      <ul className="mt-5 flex flex-col gap-2">
                        {program.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-2 text-[#4A5C58] text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#1A6B5A] shrink-0" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center text-[#8A9E99]">No programs found.</div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="py-16 bg-[#1A6B5A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-2xl lg:text-3xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Can&apos;t choose a program?
            </h3>
            <p className="text-white/70 text-sm">
              A general donation lets us allocate funds where the need is greatest.
            </p>
          </div>
          <Link
            href="/donate"
            className="shrink-0 flex items-center gap-2 px-7 py-3.5 bg-white text-[#1A6B5A] font-semibold rounded-full hover:bg-[#FAF8F4] transition-colors text-sm shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
          >
            Donate to Where It&apos;s Needed Most
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
