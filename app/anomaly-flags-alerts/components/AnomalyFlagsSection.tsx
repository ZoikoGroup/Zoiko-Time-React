import React from 'react';
import Link from 'next/link';

export default function AnomalyFlagsSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200 py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left Column: Text & Content */}
        <div className="w-full lg:max-w-[592px] flex flex-col items-start gap-4 sm:gap-5">
          {/* Badge */}
          <div className="px-3.5 py-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-full inline-flex items-center">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Anomaly Flags &amp; Alerts
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight">
            <span>Find record conditions that need review - </span>
            <span className="text-emerald-500 dark:text-emerald-400 block sm:inline">
              without judging people
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
            Configure explainable flags for approved workforce-record conditions, route governed alerts to authorized reviewers, support worker correction, and preserve every resolution in a traceable history.
          </p>

          {/* Buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <Link
              href="/start-free"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white font-bold text-base rounded-lg shadow-sm transition-all text-center inline-flex items-center justify-center"
            >
              Start Free
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-center inline-flex items-center justify-center"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* Secondary Link */}
          <div className="pt-1">
            <Link
              href="/how-zoikotime-works"
              className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-sm transition-colors group"
            >
              <span>See How ZoikoTime Works</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Checkbox List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-6 pt-4 border-t border-slate-200 dark:border-slate-800 w-full">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-normal">
                Review signals, not conclusions
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-normal">
                Human decisions
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-normal">
                Visible sources
              </span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-normal">
                Worker correction rights
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            className="w-full max-w-[500px] lg:max-w-[598px] h-auto object-cover rounded-2xl"
            src="/anomaly/div.aoc.png"
            alt="ZoikoTime Anomaly Flags Interface"
          />
        </div>
      </div>
    </section>
  );
}
