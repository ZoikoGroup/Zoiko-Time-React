import React from "react";

export default function BlogHero() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 font-sans">
      <div className="space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-650 dark:text-teal-400 text-[#10A28D]">
          Blog &amp; Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-850 dark:text-white tracking-tight leading-[1.15]">
          Ideas on running work with clear,<br />governed records.
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Educational writing on time, attendance, governance, privacy, and
          distributed work. For current product behavior, trust evidence, and pricing, we
          point you to the authoritative ZoikoTime pages.
        </p>
      </div>
    </div>
  );
}
