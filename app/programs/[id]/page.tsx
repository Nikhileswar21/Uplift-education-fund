"use client";

import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Users,
  MapPin,
  CheckCircle,
  Heart,
  ChevronRight,
  Calendar,
  Globe,
} from "lucide-react";
import { programs } from "@/lib/data";

export default function ProgramDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const program = programs.find((p) => p.id === id);
  if (!program) notFound();

  const pct = Math.round((program.raised / program.goal) * 100);
  const related = programs.filter((p) => p.id !== id).slice(0, 2);

  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-20 min-h-[65vh] flex items-end overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2422] via-[#1C2422]/50 to-[#1C2422]/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-14 w-full">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Programs
          </Link>

          <span className="block px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold rounded-full uppercase tracking-wide w-fit mb-4">
            {program.category}
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {program.title}
          </h1>
          <p className="text-white/70 text-lg max-w-xl">{program.tagline}</p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Meta */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[#DDD8CE] rounded-full text-sm text-[#4A5C58] shadow-sm">
                  <Users className="w-4 h-4 text-[#1A6B5A]" />
                  {program.beneficiaries.toLocaleString()} beneficiaries
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[#DDD8CE] rounded-full text-sm text-[#4A5C58] shadow-sm">
                  <MapPin className="w-4 h-4 text-[#1A6B5A]" />
                  {program.region}
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-[#DDD8CE] rounded-full text-sm text-[#4A5C58] shadow-sm">
                  <Globe className="w-4 h-4 text-[#1A6B5A]" />
                  Active program
                </div>
              </div>

              {/* Description */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-8 h-px bg-[#1A6B5A]" />
                  <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
                    About This Program
                  </span>
                </div>
                <p
                  className="text-[#4A5C58] text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {program.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-8 border border-[#DDD8CE] shadow-sm">
                <h3
                  className="text-xl font-bold text-[#1C2422] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Program Highlights
                </h3>
                <ul className="flex flex-col gap-4">
                  {program.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1A6B5A] shrink-0 mt-0.5" />
                      <span className="text-[#4A5C58]">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact breakdown */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#1A6B5A]" />
                  <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
                    What Your Donation Does
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.impact.map((item) => (
                    <div
                      key={item.amount}
                      className="group relative bg-white border border-[#DDD8CE] rounded-2xl p-6 hover:border-[#1A6B5A] hover:shadow-[0_8px_32px_rgba(26,107,90,0.10)] transition-all cursor-pointer"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#1A6B5A]/10 flex items-center justify-center mb-4 group-hover:bg-[#1A6B5A] transition-colors">
                        <Heart className="w-4 h-4 text-[#1A6B5A] group-hover:text-white transition-colors" />
                      </div>
                      <div
                        className="text-2xl font-bold text-[#1C2422] mb-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        ${item.amount}
                      </div>
                      <p className="text-[#8A9E99] text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-[#1A6B5A]" />
                  <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
                    Recent Updates
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-[#DDD8CE]" />
                  <div className="flex flex-col gap-6">
                    {[
                      {
                        date: "March 2026",
                        update: `New cohort of ${Math.floor(program.beneficiaries / 10)} participants enrolled in ${program.region}.`,
                      },
                      {
                        date: "January 2026",
                        update: `Expanded to 3 new communities, increasing reach by 28%.`,
                      },
                      {
                        date: "October 2025",
                        update: `Mid-year review: 96% of participants meeting learning milestones.`,
                      },
                    ].map((u) => (
                      <div key={u.date} className="relative pl-10">
                        <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-[#1A6B5A] -translate-x-1/2" />
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar className="w-3.5 h-3.5 text-[#8A9E99]" />
                          <span className="text-[#8A9E99] text-xs font-medium">{u.date}</span>
                        </div>
                        <p className="text-[#4A5C58] text-sm">{u.update}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-6">
                {/* Donation card */}
                <div className="bg-white rounded-2xl border border-[#DDD8CE] shadow-[0_4px_24px_rgba(26,107,90,0.08)] overflow-hidden">
                  <div className="p-7">
                    <h3
                      className="text-lg font-bold text-[#1C2422] mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Support This Program
                    </h3>
                    <p className="text-[#8A9E99] text-sm mb-6">
                      Your donation makes an immediate difference.
                    </p>

                    {/* Progress */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2.5">
                        <span className="font-bold text-[#1C2422] text-xl" style={{ fontFamily: "var(--font-display)" }}>
                          ${program.raised.toLocaleString()}
                        </span>
                        <span className="text-[#8A9E99] self-end text-xs">
                          of ${program.goal.toLocaleString()} goal
                        </span>
                      </div>
                      <div className="h-2.5 bg-[#F5F0E8] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: "linear-gradient(90deg, #0F4538, #2A8B74)",
                          }}
                        />
                      </div>
                      <div className="flex justify-between mt-2 text-xs text-[#8A9E99]">
                        <span className="font-semibold text-[#1A6B5A]">{pct}% funded</span>
                        <span>{program.beneficiaries.toLocaleString()} helped</span>
                      </div>
                    </div>

                    <Link
                      href={`/donate?program=${program.id}`}
                      className="block w-full text-center py-3.5 bg-[#1A6B5A] text-white font-semibold rounded-xl hover:bg-[#0F4538] transition-colors shadow-[0_4px_16px_rgba(26,107,90,0.25)] text-sm"
                    >
                      Donate to This Program
                    </Link>

                    <Link
                      href="/donate"
                      className="block w-full text-center py-3 text-[#4A5C58] text-sm hover:text-[#1A6B5A] transition-colors mt-2"
                    >
                      Or donate to all programs →
                    </Link>
                  </div>

                  <div className="bg-[#F5F0E8] px-7 py-4 flex items-center gap-2 text-xs text-[#8A9E99]">
                    <CheckCircle className="w-4 h-4 text-[#1A6B5A]" />
                    100% secured · Tax-deductible receipt
                  </div>
                </div>

                {/* Share */}
                <div className="bg-white rounded-2xl border border-[#DDD8CE] p-6">
                  <p className="text-sm font-semibold text-[#1C2422] mb-3">
                    Spread the word
                  </p>
                  <p className="text-[#8A9E99] text-xs leading-relaxed mb-4">
                    Sharing this program helps us reach more donors and create more impact.
                  </p>
                  <button className="w-full py-2.5 border border-[#DDD8CE] text-[#4A5C58] rounded-xl text-sm hover:border-[#1A6B5A] hover:text-[#1A6B5A] transition-colors">
                    Share this program
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related programs */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#1A6B5A]" />
              <h2
                className="text-2xl font-bold text-[#1C2422]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Other Programs
              </h2>
            </div>
            <Link
              href="/programs"
              className="flex items-center gap-1 text-[#1A6B5A] text-sm font-semibold hover:gap-2 transition-all"
            >
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((p) => {
              const rPct = Math.round((p.raised / p.goal) * 100);
              return (
                <Link
                  key={p.id}
                  href={`/programs/${p.id}`}
                  className="group flex gap-5 bg-white rounded-2xl p-5 border border-[#DDD8CE] hover:border-[#1A6B5A] hover:shadow-[0_8px_32px_rgba(26,107,90,0.10)] transition-all"
                >
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-wide mb-1">
                      {p.category}
                    </span>
                    <h3
                      className="font-bold text-[#1C2422] text-base mb-2 group-hover:text-[#1A6B5A] transition-colors truncate"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {p.title}
                    </h3>
                    <div className="h-1.5 bg-[#F5F0E8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1A6B5A] rounded-full"
                        style={{ width: `${rPct}%` }}
                      />
                    </div>
                    <span className="text-[#8A9E99] text-xs mt-1">{rPct}% funded</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
