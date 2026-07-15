import React from "react";
import { ArrowRight, Shield } from "lucide-react";

export default function IdentityAssuranceHero() {
  const highlights = [
    "Audit Defensibility Is Built Here",
    "Compliance Begins Here",
    "Financial Accuracy Starts Here",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-white py-16 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 md:py-24">
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Subtitle */}
        <p className="text-center text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
          Session &amp; Identity Assurance
        </p>

        {/* Heading */}
        <h1 className="mx-auto mt-5 max-w-5xl text-center text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[55px]">
          Workforce Data Is Only as Trustworthy as Its{" "}
          <span className="text-teal-600">Identity Layer</span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
          ZoikoTime continuously verifies identity, session integrity,
          <br className="hidden md:block" />
          device, and location — transforming workforce activity into
          defensible, audit-grade truth.
        </p>

        {/* Highlights */}
        <div className="mt-10 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-sm bg-teal-600" />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded-lg bg-teal-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700">
            <Shield size={18} />
            Request Demo
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-teal-600 px-7 py-3 text-base font-semibold text-teal-600 transition hover:bg-teal-50 dark:hover:bg-slate-800">
            View Architecture
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}