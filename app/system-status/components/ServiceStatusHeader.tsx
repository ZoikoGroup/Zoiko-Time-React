import React from 'react';

export default function ServiceStatusHeader() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        
        {/* Main Section Title */}
        <header className="max-w-[740px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
            Current service status, <br className="hidden sm:inline" />
            without guesswork.
          </h1>
        </header>

        {/* Degraded Performance Status Card */}
        <div className="w-full p-6 sm:p-8 bg-amber-50/50 dark:bg-slate-900/80 rounded-2xl border border-amber-300 dark:border-amber-500/30 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-xs">
          
          {/* Status Alert Content */}
          <div className="flex flex-col sm:flex-row items-start gap-4 max-w-3xl">
            {/* Warning Icon Badge */}
            <div className="w-11 h-11 bg-amber-100 dark:bg-amber-950/60 rounded-xl flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-amber-600 dark:text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>

            {/* Alert Description & Metadata */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  Degraded Performance
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                  One active incident is affecting Reporting &amp; Exports in the EU region. All other
                  verified components are Operational. One component cannot currently be verified
                  and is shown as Unknown — it is not assumed healthy.
                </p>
              </div>

              {/* Status Metadata Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-1.5 gap-x-6 text-sm text-slate-600 dark:text-slate-400 pt-2 border-t border-amber-200/60 dark:border-slate-800">
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    Last successful verification:
                  </span>{' '}
                  <span className="whitespace-nowrap">07 Aug 2026, 09:42 UTC</span>
                </div>
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Freshness:</span>{' '}
                  Current (within policy)
                </div>
                <div>
                  <span className="font-bold text-slate-800 dark:text-slate-200">Active incidents:</span>{' '}
                  2
                </div>
                <div className="sm:col-span-2 lg:col-span-3">
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    Highest public impact:
                  </span>{' '}
                  Partial Outage
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Container */}
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
            <a
              href="#active-incident"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-xl shadow-xs transition-all active:scale-95 text-center flex-1 sm:flex-initial"
            >
              Open active incident
            </a>
            <a
              href="#subscribe"
              className="px-5 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all active:scale-95 text-center flex-1 sm:flex-initial"
            >
              Subscribe to Updates
            </a>
          </div>

        </div>

        {/* Disclaimer / Explanation Text */}
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Overall status is derived from the current public component set under approved impact policy — it is not an unweighted average, and Unknown health on a critical component prevents an Operational overall state. No uptime percentage appears on this page.
        </p>

      </div>
    </section>
  );
}