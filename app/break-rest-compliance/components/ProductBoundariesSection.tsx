import React from 'react';

const boundaries = [
  'No legal advice or determination of what the law requires',
  'No guaranteed compliance outcome',
  'No employee surveillance or activity monitoring',
  'No GPS tracking during breaks',
  'No screenshots or keystroke capture',
  'No productivity scoring',
  'No automatic disciplinary decisions',
  'No approval without a named human reviewer',
];

const handoffs = [
  'Payroll systems',
  'Your legal counsel',
  'HRIS / case management',
  'Procurement & Legal Resources',
];

export default function ProductBoundariesSection() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1116px] mx-auto bg-slate-800 rounded-[20px] p-6 sm:p-10 lg:p-12 border border-slate-700/50 shadow-xl flex flex-col gap-8">
        
        {/* Header */}
        <header className="flex flex-col gap-3 max-w-[620px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-500 rounded-sm" />
            <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              Product Boundaries &amp; Handoffs
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
            What ZoikoTime does not do.
          </h2>
          <p className="text-sm sm:text-base text-indigo-200/80 leading-relaxed">
            Being clear about the edges of this product is part of how we earn trust with HR, legal, and the workers whose records live here.
          </p>
        </header>

        {/* Boundaries 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
          {boundaries.map((item, idx) => (
            <div
              key={idx}
              className="px-4 py-3.5 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-3 transition-colors hover:bg-white/[0.08]"
            >
              {/* Emerald Icon Badge */}
              <div className="w-4 h-4 rounded-full border border-emerald-300/80 flex items-center justify-center shrink-0">
                <svg
                  className="w-2.5 h-2.5 text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-normal text-slate-200">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Integration Handoff Pills */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-3">
          {handoffs.map((handoff, idx) => (
            <div
              key={idx}
              className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs text-slate-200 font-normal flex items-center gap-1.5 transition-colors hover:bg-white/10"
            >
              <span className="text-slate-400">→</span>
              <span>{handoff}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}