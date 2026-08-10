import React from 'react';
import Link from 'next/link';

const featureChecklist = [
  'No screenshots',
  'No keystroke content',
  'No URL history',
  'No clipboard collection',
];

export default function TimesheetsAndApprovalsHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Heading, Actions & Checklist */}
        <div className="flex flex-col gap-6">
          
          {/* Category Pill */}
          <div>
            <span className="inline-block px-3.5 py-1.5 bg-slate-200/80 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider rounded-full">
              Timesheets &amp; Approvals
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Review, correct, and approve time records with a{' '}
            <span className="text-emerald-500 dark:text-emerald-400">clear history</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
            Give workers and authorized reviewers a transparent path from period review and correction through submission, approval, resolution, and governed release — with human authority and evidence preserved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href="/start-free"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              Start Free
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-300 dark:border-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* Secondary Link */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group transition-colors"
            >
              <span>Explore ZoikoTime</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* Privacy Checklist Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 pt-2">
            {featureChecklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <svg
                  className="w-4 h-4 text-emerald-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Image Preview & Definition Callout */}
        <div className="flex flex-col gap-6">
          <img
            className="w-full h-auto max-h-[620px] object-cover rounded-2xl "
            src="/time-sheet-approvals/div.splitproof.png"
            alt="Timesheets and approvals preview"
          />

          {/* Approved Definition Box */}
          <div className="p-5 bg-white dark:bg-slate-900 rounded-xl border-l-4 border-l-emerald-500 border-t border-r border-b border-slate-200 dark:border-slate-800 flex flex-col gap-1.5 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              What “approved” will mean
            </span>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              That an authorized reviewer accepted a defined record version for a configured workflow. Not proof of universal correctness, and not a guarantee of payroll, legal, tax, or compliance outcomes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}