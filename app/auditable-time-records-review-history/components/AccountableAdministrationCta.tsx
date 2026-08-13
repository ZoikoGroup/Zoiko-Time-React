import React from 'react';
import Link from 'next/link';

export default function AccountableAdministrationCta() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">

          {/* Copy */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Accountable administration
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              A history that still explains itself years later
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg">
              See how corrections, decisions, notices, releases, late events, and reopenings stay
              attributable — with the four separations intact and no silent overwrite.
            </p>

            <Link
              href="/request-enterprise-demo"
              className="mt-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg text-base shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 inline-flex items-center justify-center"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* Illustration */}
          <div className="w-full flex justify-center lg:justify-end">
            <img
              className="w-full max-w-lg h-auto rounded-2xl object-cover"
              src="/auditable-time-records-review-history/accountable-administration.png"
              alt="A review-history archive linking events, versions, and evidence over time"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
