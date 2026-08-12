import React from 'react';
import Link from 'next/link';

export default function GovernanceBanner() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-10 lg:py-20 bg-slate-100 dark:bg-slate-950 flex flex-col justify-start items-center transition-colors duration-200">
      <div className="w-full max-w-7xl p-6 sm:p-8 lg:p-12 bg-white dark:bg-slate-900 rounded-3xl shadow-md border border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Left Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
          {/* Tagline */}
          <div className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase leading-5 tracking-wider font-sans">
            Neutral by design
          </div>

          {/* Heading */}
          <h2 className="text-slate-900 dark:text-slate-50 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-sans">
            Route attention to records <br className="hidden sm:inline" />
            that need review - and <br className="hidden sm:inline" />
            nowhere else
          </h2>

          {/* Description */}
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans max-w-xl">
            See how explainable definitions, governed routing, worker correction rights, and reasoned resolution can make exception handling defensible rather than accusatory.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 w-full sm:w-auto flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-3.5">
            <Link
              href="/start-free"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-bold rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 inline-flex items-center justify-center"
            >
              Start Free
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-base font-bold rounded-lg transition-colors inline-flex items-center justify-center"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* Feature List */}
          <div className="pt-2 flex flex-wrap justify-start items-center gap-x-5 gap-y-2 text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span>No fraud labels.</span>
            <span>No risk scores.</span>
            <span>No auto-action.</span>
            <span>Worker correction rights.</span>
          </div>
        </div>

        {/* Right Image Container */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <img
            className="w-full max-w-[500px] h-auto object-cover rounded-2xl"
            src="/anomaly/div.mock.png"
            alt="Dashboard preview"
          />
        </div>
      </div>
    </div>
  );
}
