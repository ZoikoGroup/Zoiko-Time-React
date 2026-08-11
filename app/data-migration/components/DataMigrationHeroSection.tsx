import React from 'react';
import Link from 'next/link';

const keyPillars = [
  'Source-aware',
  'Deterministic',
  'Rehearsed',
  'Reconciled',
];

export default function DataMigrationHeroSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Badge */}
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-slate-200/70 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Data Migration
          </span>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Move workforce records without losing{' '}
            <span className="text-emerald-500 dark:text-emerald-400">
              their meaning
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed max-w-2xl">
            ZoikoTime Data Migration helps qualified organizations move approved workforce records through governed source discovery, deterministic mapping, rehearsal, validation, reconciliation, controlled cutover, and evidence-preserving handover.
          </p>

          {/* Highlight Callout Box */}
          <div className="w-full p-4 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-emerald-500 border border-slate-200 dark:border-slate-700 shadow-xs">
            <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium leading-snug">
              No silent value invention. No broadened access on failure. Human approval remains required.
            </p>
          </div>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            <Link href="/request-enterprise-demo" className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Request Enterprise Demo
            </Link>
            <Link href="/contact-sales" className="px-6 py-3.5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold text-base rounded-lg transition-colors focus:outline-none">
              Talk to Sales
            </Link>
          </div>

          {/* Text Link with Arrow */}
          <a
            href="#readiness"
            className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline group pt-1"
          >
            Review migration readiness
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              &rarr;
            </span>
          </a>

          {/* Checkmark Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 w-full">
            {keyPillars.map((pillar, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                  {pillar}
                </span>
              </div>
            ))}
          </div>

          {/* Disclaimer Fine Print */}
          <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed pt-1">
            Source, object, region, scale, timing, and service availability require assessment and approved terms.
          </p>

        </div>

        {/* Right Column: Visual Story / Image Card */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl bg-slate-200 dark:bg-slate-800">
            <img
              src="/data-migration/div.mock (9).png"
              alt="Data Migration Process Visualization"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Visual Story Card */}
          <div className="p-5 bg-white dark:bg-slate-800 rounded-xl border-l-4 border-indigo-600 dark:border-indigo-400 border border-slate-200 dark:border-slate-700 shadow-xs flex flex-col gap-1.5">
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
              The visual story
            </span>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Know the source. Define the contract. Rehearse the move. Reconcile the result. Approve the cutover. Preserve the evidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}