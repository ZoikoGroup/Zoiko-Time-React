import React from 'react';
import Link from 'next/link';

const guarantees = [
  "No leaderboards.",
  "No productivity scores.",
  "No predictions.",
  "Human authority.",
];

export default function ExplainableByDesignSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        {/* Main Banner Container */}
        <div className="p-6 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Header Area */}
            <div className="flex flex-col gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
                Explainable by design
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
                Understand record patterns<br className="hidden sm:inline" /> without observing people
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans max-w-xl">
                See how governed, source-linked insight can show definition, scope, context, data quality, limitations, and review state - while worker rights and human judgment stay intact.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/request-enterprise-demo"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold font-sans text-sm sm:text-base rounded-xl transition-colors shadow-sm"
              >
                Get a demo
              </Link>
              <Link
                href="/contact-sales"
                className="px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold font-sans text-sm sm:text-base rounded-xl border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
              >
                Contact sales
              </Link>
            </div>

            {/* Secondary Link Row */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-sans">
              <Link
                href="/how-zoikotime-works"
                className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold transition-colors group"
              >
                <span>Explore how ZoikoTime works</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <Link
                href="/trust-center"
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold hover:underline transition-colors"
              >
                Trust Center
              </Link>
            </div>

            {/* Feature Guarantees Grid/Row */}
            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-x-6 gap-y-2">
              {guarantees.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold font-sans">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image Container */}
          <div className="lg:col-span-5 w-full h-full min-h-[260px] sm:min-h-[320px] relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
            <img
              src="/work-force-record-insights/image (1).png"
              alt="Understand record patterns without observing people graphic"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
