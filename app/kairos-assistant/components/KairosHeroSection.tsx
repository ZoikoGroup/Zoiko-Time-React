import React from 'react';
import Link from 'next/link';

const featureHighlights = [
  'Permission-bound',
  'Evidence-linked',
  'Human authority remains controlling',
];

export default function KairosHeroSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          
          {/* Badge */}
          <span className="px-3.5 py-1.5 bg-slate-200 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider">
            Kairos Assistant
          </span>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]">
            Ask governed questions.<br/> Get answers you can{' '}<br/>
            <span className="text-emerald-500 dark:text-emerald-400">inspect</span>.
          </h1>

          {/* Body Description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-[640px]">
            Kairos retrieves, summarizes, and explains authorized ZoikoTime organization data with source, scope, timing, and limitation context. It does not classify time, approve records, change policy, or replace worker, reviewer, administrator, payroll, legal, or compliance judgment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <Link
              href="/start-free"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg shadow-xs transition-colors cursor-pointer text-center"
            >
              Start Free
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-base rounded-lg border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer text-center"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* Text Link */}
          <a
            href="/explore-zoikotime"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors pt-1 group"
          >
            Explore ZoikoTime
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              →
            </span>
          </a>

          {/* Features Checkmarks List */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-6 gap-y-3 pt-4 border-t border-slate-200 dark:border-slate-800 w-full">
            {featureHighlights.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                <div className="w-4 h-4 rounded-md bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-emerald-500 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{feature}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Dynamic Media Container */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="w-full max-w-[500px] lg:max-w-none aspect-3/4 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-900">
            <img
              src="/kairos/div.png"
              alt="Kairos Assistant Interface Preview"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
