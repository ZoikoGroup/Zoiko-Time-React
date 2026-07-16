import React from "react";

const FEATURES = [
  "AI-Guided Routing",
  "Enterprise-Grade Engagement",
  "Fast Response Times",
  "Dedicated Teams",
];

export default function Hero() {
  return (
    <section className="bg-[#FDFDFD] dark:bg-slate-950 px-6 py-16 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-bold leading-tight text-[#0F2420] dark:text-white">
          Build the System That
          <br />
          <span className="text-[#00C6A9]">
            Defines How Work Is Measured, Governed and Trusted
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg leading-8 text-[#5A6E87] dark:text-slate-300">
          Join ZoikoTime to design workforce assurance and performance
          intelligence systems used by global organisations to manage work with
          clarity, accountability, and confidence.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto rounded-lg bg-[#009D8C] px-8 py-3 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(0,157,140,0.4)] transition hover:bg-emerald-600 cursor-pointer">
            Explore Open Roles
          </button>

          <button className="w-full sm:w-auto rounded-lg border border-[#009D8C] px-8 py-3 text-sm font-semibold text-[#009D8C] dark:text-[#00C6A9] dark:border-[#00C6A9] transition hover:bg-emerald-50 dark:hover:bg-slate-800 cursor-pointer">
            Learn About ZoikoTime
          </button>
        </div>

        {/* Search Box */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col sm:flex-row items-stretch rounded-2xl border border-[#02020226] dark:border-slate-700 bg-[#89898912] dark:bg-slate-900 shadow-md shadow-emerald-900/5 overflow-hidden">
          <input
            type="text"
            placeholder="Search roles — e.g. Platform Engineer, Compliance Analyst"
            className="w-full bg-transparent px-5 py-4 text-sm sm:text-base text-slate-700 dark:text-white placeholder:text-[#41414159] dark:placeholder:text-slate-400 outline-none"
          />

          <button className="rounded-none sm:rounded-l-none bg-[#009D8C] px-8 py-4 text-sm font-semibold text-white transition hover:bg-emerald-700">
            Search
          </button>
        </div>

        {/* Feature Tags */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FEATURES.map((feature) => (
            <div
              key={feature}
              className="rounded-full border border-[#C9EAE2] dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-2 text-sm font-medium text-[#0F2420] dark:text-slate-200 shadow-sm"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}