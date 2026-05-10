"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Lock,
  CheckCircle,
  Heart,
  RefreshCw,
  ChevronDown,
} from "lucide-react";
import { programs } from "@/lib/data";

const presets = [25, 50, 100, 250, 500, 1000];

const impactMap: Record<number, string> = {
  25: "Provides school supplies for one child",
  50: "Funds a digital learning session for 10 kids",
  100: "Covers one month of tutoring for a scholar",
  250: "Supplies an entire classroom with essentials",
  500: "Funds half a semester for a scholarship student",
  1000: "Supports a community education workshop series",
};

function DonateForm() {
  const searchParams = useSearchParams();
  const programParam = searchParams.get("program");

  const [mode, setMode] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState(100);
  const [custom, setCustom] = useState("");
  const [selectedProgram, setSelectedProgram] = useState(programParam || "");
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    card: "",
    expiry: "",
    cvc: "",
  });

  const effectiveAmount = custom ? parseFloat(custom) || 0 : amount;
  const impactLabel =
    impactMap[amount] ||
    (effectiveAmount > 0
      ? `Contributes meaningfully to education programs worldwide`
      : "Choose an amount to see your impact");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      {/* Left: donation form */}
      <div className="lg:col-span-3">
        <div className="bg-white rounded-3xl shadow-[0_4px_40px_rgba(26,107,90,0.08)] overflow-hidden border border-[#DDD8CE]">
          {/* Step indicator */}
          <div className="flex border-b border-[#DDD8CE]">
            {[
              { n: 1, label: "Your Gift" },
              { n: 2, label: "Your Details" },
              { n: 3, label: "Confirm" },
            ].map((s) => (
              <button
                key={s.n}
                onClick={() => step > s.n && setStep(s.n)}
                className={`flex-1 py-4 flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
                  step === s.n
                    ? "text-[#1A6B5A] bg-[#1A6B5A]/4 border-b-2 border-[#1A6B5A]"
                    : step > s.n
                    ? "text-[#1A6B5A] cursor-pointer"
                    : "text-[#8A9E99] cursor-default"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    step > s.n
                      ? "bg-[#1A6B5A] text-white"
                      : step === s.n
                      ? "bg-[#1A6B5A]/15 text-[#1A6B5A]"
                      : "bg-[#F5F0E8] text-[#8A9E99]"
                  }`}
                >
                  {step > s.n ? <CheckCircle className="w-3.5 h-3.5" /> : s.n}
                </span>
                <span className="hidden sm:block">{s.label}</span>
              </button>
            ))}
          </div>

          <div className="p-7 md:p-9">
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-7">
                {/* Toggle */}
                <div className="flex bg-[#F5F0E8] rounded-xl p-1 gap-1">
                  {(["once", "monthly"] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold text-sm transition-all ${
                        mode === m
                          ? "bg-white text-[#1A6B5A] shadow-sm"
                          : "text-[#8A9E99] hover:text-[#4A5C58]"
                      }`}
                    >
                      {m === "monthly" && <RefreshCw className="w-3.5 h-3.5" />}
                      {m === "once" ? "Give Once" : "Give Monthly"}
                    </button>
                  ))}
                </div>

                {mode === "monthly" && (
                  <div className="flex items-start gap-3 p-4 bg-[#1A6B5A]/8 rounded-xl border border-[#1A6B5A]/20">
                    <Heart className="w-4 h-4 text-[#1A6B5A] mt-0.5 fill-[#1A6B5A] shrink-0" />
                    <p className="text-[#2C4A3E] text-sm leading-relaxed">
                      <strong>Monthly givers create the most lasting change.</strong> Your recurring gift
                      lets us plan long-term programs with confidence.
                    </p>
                  </div>
                )}

                {/* Preset amounts */}
                <div>
                  <label className="block text-sm font-semibold text-[#1C2422] mb-3">
                    Select an amount
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {presets.map((p) => (
                      <button
                        key={p}
                        onClick={() => { setAmount(p); setCustom(""); }}
                        className={`relative py-4 rounded-xl border-2 font-bold text-base transition-all ${
                          amount === p && !custom
                            ? "border-[#1A6B5A] bg-[#1A6B5A] text-white shadow-[0_4px_16px_rgba(26,107,90,0.25)]"
                            : "border-[#DDD8CE] text-[#1C2422] hover:border-[#1A6B5A] hover:text-[#1A6B5A]"
                        }`}
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        ${p}
                        {mode === "monthly" && (
                          <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#C9973A] text-white text-[10px] font-bold rounded-full whitespace-nowrap">
                            /mo
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom amount */}
                <div>
                  <label className="block text-sm font-semibold text-[#1C2422] mb-2">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#4A5C58] font-semibold text-lg">
                      $
                    </span>
                    <input
                      type="number"
                      min="1"
                      placeholder="Enter amount"
                      value={custom}
                      onChange={(e) => { setCustom(e.target.value); if (e.target.value) setAmount(0); }}
                      className="w-full pl-9 pr-4 py-4 border-2 border-[#DDD8CE] rounded-xl text-[#1C2422] font-semibold text-lg focus:border-[#1A6B5A] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Impact label */}
                {(effectiveAmount > 0) && (
                  <div className="flex items-start gap-3 p-4 bg-[#F5F0E8] rounded-xl">
                    <CheckCircle className="w-5 h-5 text-[#1A6B5A] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#1C2422] font-semibold text-sm">
                        ${effectiveAmount}{mode === "monthly" ? "/month" : ""} will…
                      </p>
                      <p className="text-[#4A5C58] text-sm mt-0.5">{impactLabel}</p>
                    </div>
                  </div>
                )}

                {/* Program selector */}
                <div>
                  <label className="block text-sm font-semibold text-[#1C2422] mb-2">
                    Designate to a program{" "}
                    <span className="text-[#8A9E99] font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <select
                      value={selectedProgram}
                      onChange={(e) => setSelectedProgram(e.target.value)}
                      className="w-full appearance-none px-4 py-3.5 border-2 border-[#DDD8CE] rounded-xl text-[#4A5C58] focus:border-[#1A6B5A] focus:outline-none transition-colors text-sm bg-white"
                    >
                      <option value="">Where it&apos;s needed most</option>
                      {programs.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9E99] pointer-events-none" />
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={effectiveAmount <= 0}
                  className="w-full py-4 bg-[#1A6B5A] text-white font-semibold rounded-xl hover:bg-[#0F4538] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_4px_20px_rgba(26,107,90,0.3)] hover:shadow-[0_8px_32px_rgba(26,107,90,0.4)] hover:-translate-y-0.5 text-sm"
                >
                  Continue → ${effectiveAmount > 0 ? effectiveAmount : "—"}{mode === "monthly" ? "/month" : ""}
                </button>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-5">
                <h3
                  className="text-xl font-bold text-[#1C2422]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Your Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["firstName", "lastName"].map((field) => (
                    <div key={field}>
                      <label className="block text-xs font-semibold text-[#4A5C58] mb-1.5 uppercase tracking-wide">
                        {field === "firstName" ? "First Name" : "Last Name"}
                      </label>
                      <input
                        type="text"
                        value={form[field as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#DDD8CE] rounded-xl text-[#1C2422] focus:border-[#1A6B5A] focus:outline-none transition-colors text-sm"
                        placeholder={field === "firstName" ? "Jane" : "Smith"}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#4A5C58] mb-1.5 uppercase tracking-wide">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-[#DDD8CE] rounded-xl text-[#1C2422] focus:border-[#1A6B5A] focus:outline-none transition-colors text-sm"
                    placeholder="jane@example.com"
                  />
                  <p className="text-[#8A9E99] text-xs mt-1.5">We&apos;ll send your tax receipt here.</p>
                </div>

                {/* Card */}
                <div className="p-5 border-2 border-[#DDD8CE] rounded-xl space-y-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#4A5C58] uppercase tracking-wide">
                      Payment
                    </span>
                    <div className="flex gap-2">
                      {["Visa", "MC", "Amex"].map((c) => (
                        <span
                          key={c}
                          className="px-2 py-0.5 bg-[#F5F0E8] text-[#8A9E99] text-[10px] font-bold rounded"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#4A5C58] mb-1.5 uppercase tracking-wide">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        maxLength={19}
                        placeholder="1234 5678 9012 3456"
                        value={form.card}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "").slice(0, 16);
                          setForm({ ...form, card: v.replace(/(.{4})/g, "$1 ").trim() });
                        }}
                        className="w-full pl-4 pr-10 py-3 border-2 border-[#DDD8CE] rounded-xl text-[#1C2422] focus:border-[#1A6B5A] focus:outline-none transition-colors text-sm font-mono"
                      />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A9E99]" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4A5C58] mb-1.5 uppercase tracking-wide">
                        Expiry
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        value={form.expiry}
                        onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#DDD8CE] rounded-xl text-[#1C2422] focus:border-[#1A6B5A] focus:outline-none transition-colors text-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#4A5C58] mb-1.5 uppercase tracking-wide">
                        CVC
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        maxLength={4}
                        value={form.cvc}
                        onChange={(e) => setForm({ ...form, cvc: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-[#DDD8CE] rounded-xl text-[#1C2422] focus:border-[#1A6B5A] focus:outline-none transition-colors text-sm font-mono"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3.5 border-2 border-[#DDD8CE] text-[#4A5C58] font-semibold rounded-xl hover:border-[#1A6B5A] hover:text-[#1A6B5A] transition-colors text-sm"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="flex-[2] py-3.5 bg-[#1A6B5A] text-white font-semibold rounded-xl hover:bg-[#0F4538] transition-all shadow-[0_4px_16px_rgba(26,107,90,0.25)] text-sm"
                  >
                    Review Donation →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <h3
                  className="text-xl font-bold text-[#1C2422]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Confirm Your Donation
                </h3>

                <div className="bg-[#F5F0E8] rounded-2xl p-6 space-y-4">
                  {[
                    { label: "Amount", value: `$${effectiveAmount}${mode === "monthly" ? "/month" : ""}` },
                    { label: "Frequency", value: mode === "monthly" ? "Monthly recurring" : "One-time" },
                    {
                      label: "Program",
                      value: selectedProgram
                        ? programs.find((p) => p.id === selectedProgram)?.title || "—"
                        : "Where it's needed most",
                    },
                    { label: "Donor", value: form.firstName ? `${form.firstName} ${form.lastName}` : "—" },
                    { label: "Email", value: form.email || "—" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between text-sm">
                      <span className="text-[#8A9E99]">{row.label}</span>
                      <span className="font-semibold text-[#1C2422]">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#1A6B5A]/8 border border-[#1A6B5A]/20 rounded-xl">
                  <Shield className="w-5 h-5 text-[#1A6B5A] shrink-0 mt-0.5" />
                  <p className="text-[#2C4A3E] text-sm">
                    Your donation is processed securely. You&apos;ll receive an official tax-deductible receipt within minutes.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3.5 border-2 border-[#DDD8CE] text-[#4A5C58] font-semibold rounded-xl hover:border-[#1A6B5A] hover:text-[#1A6B5A] transition-colors text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => alert("Thank you! Your donation has been processed. (Demo)")}
                    className="flex-[2] py-3.5 bg-[#1A6B5A] text-white font-bold rounded-xl hover:bg-[#0F4538] transition-all shadow-[0_4px_20px_rgba(26,107,90,0.35)] hover:shadow-[0_8px_32px_rgba(26,107,90,0.45)] flex items-center justify-center gap-2 text-sm"
                  >
                    <Heart className="w-4 h-4 fill-white" />
                    Complete Donation — ${effectiveAmount}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Trust badges */}
          <div className="border-t border-[#DDD8CE] px-7 py-4 flex flex-wrap gap-4 justify-center">
            {[
              { icon: Lock, text: "SSL encrypted" },
              { icon: Shield, text: "100% secure" },
              { icon: CheckCircle, text: "Tax receipt" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-[#8A9E99]">
                <Icon className="w-3.5 h-3.5 text-[#1A6B5A]" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: trust sidebar */}
      <div className="lg:col-span-2 flex flex-col gap-6">
        {/* Impact preview */}
        <div className="bg-white rounded-2xl border border-[#DDD8CE] p-7 shadow-sm">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-[#1A6B5A]" />
            <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">Your Impact</span>
          </div>
          <div className="space-y-4">
            {[
              { stat: "92%", desc: "of every dollar reaches children directly" },
              { stat: "14,900+", desc: "children already helped by donors like you" },
              { stat: "4.9★", desc: "rating from 2,300+ donors on Charity Navigator" },
            ].map(({ stat, desc }) => (
              <div key={stat} className="flex items-center gap-4">
                <div
                  className="text-2xl font-bold text-[#1A6B5A] w-20 shrink-0"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat}
                </div>
                <p className="text-[#4A5C58] text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative bg-[#1A6B5A] rounded-2xl p-7 overflow-hidden">
          <div className="absolute top-4 right-4 text-white/10 text-7xl font-serif leading-none">&ldquo;</div>
          <p className="text-white/90 text-sm leading-relaxed mb-5 relative z-10">
            &ldquo;The scholarship didn&apos;t just pay my fees — it told me my future mattered. I&apos;m
            graduating in June and dedicating it to every donor who believed in me.&rdquo;
          </p>
          <div className="flex items-center gap-3 relative z-10">
            <div className="relative w-9 h-9 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=80&q=80"
                alt="Amara"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Amara Diallo</div>
              <div className="text-white/60 text-xs">Scholar, Dakar, Senegal</div>
            </div>
          </div>
        </div>

        {/* Tax info */}
        <div className="bg-[#F5F0E8] rounded-2xl p-6 border border-[#DDD8CE]">
          <p className="text-[#4A5C58] text-sm font-semibold mb-2">Tax Deductibility</p>
          <p className="text-[#8A9E99] text-xs leading-relaxed">
            Uplift Education Fund is a 501(c)(3) nonprofit. All donations are tax-deductible to
            the extent permitted by US law. EIN: 47-1234567.
          </p>
        </div>

        <p className="text-center text-[#8A9E99] text-xs leading-relaxed">
          Questions?{" "}
          <a href="mailto:donate@uplifteducationfund.org" className="text-[#1A6B5A] underline">
            Contact our team
          </a>{" "}
          · We respond within 24 hours.
        </p>
      </div>
    </div>
  );
}

export default function DonatePage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-28 pb-14 bg-[#FAF8F4] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1400&q=60"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#FAF8F4]/95" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[#1A6B5A]" />
            <span className="text-[#1A6B5A] text-xs font-semibold uppercase tracking-[0.2em]">
              Make a Difference Today
            </span>
          </div>
          <h1
            className="text-5xl lg:text-6xl font-bold text-[#1C2422] mb-4 leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Give the Gift of{" "}
            <span className="text-[#1A6B5A]">Education</span>
          </h1>
          <p className="text-[#4A5C58] text-lg max-w-xl leading-relaxed">
            Fast. Secure. Impactful. Every dollar you give is tracked, reported, and celebrated.
          </p>
        </div>
      </section>

      {/* Donate section */}
      <section className="py-12 pb-24 bg-[#FAF8F4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Suspense fallback={<div className="text-center py-20 text-[#8A9E99]">Loading…</div>}>
            <DonateForm />
          </Suspense>
        </div>
      </section>
    </>
  );
}
