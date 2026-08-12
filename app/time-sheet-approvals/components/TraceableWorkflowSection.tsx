import React from 'react';
import Link from 'next/link';

const featurePills = [
  'Human authority.',
  'Worker correction.',
  'Traceable history.',
  'Governed release.',
];

export default function TraceableWorkflowSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Outer Card Wrapper */}
        <div className="p-6 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="flex flex-col gap-5">
            <header className="flex flex-col gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Traceable by design
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Bring review, correction, and approval into one traceable workflow
              </h2>
            </header>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-[600px]">
              See how ZoikoTime can help your organization prepare reviewable periods, preserve worker correction paths, route accountable human approvals, and release governed record versions to authorized downstream workflows — subject to verified configuration and availability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/start-free"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              >
                Start Free
              </Link>
              <Link
                href="/request-enterprise-demo"
                className="px-6 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-bold text-base rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-slate-300 focus:outline-none"
              >
                Request Enterprise Demo
              </Link>
            </div>

            {/* Secondary Link */}
            <div className="pt-1">
              <a
                href="https://getzoikotime.com/"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
              >
                <span>Explore ZoikoTime</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>

            {/* Feature Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              {featurePills.map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 rounded-full text-xs font-bold"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Preview Graphic */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden ">
              <img
                src="/time-sheet-approvals/div.mock (15).png"
                alt="ZoikoTime Workflow Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
