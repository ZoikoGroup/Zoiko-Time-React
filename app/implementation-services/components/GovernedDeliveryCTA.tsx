import React from 'react';
import Link from 'next/link';

export default function GovernedDeliveryCTA() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto">
        <div className="w-full bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm border border-slate-200 dark:border-slate-700/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Header Content */}
            <div className="flex flex-col gap-3">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Governed delivery
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Plan a governed path from<br className="hidden sm:inline" /> readiness to handover
              </h2>
              <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Discuss your intended scope, current readiness, dependencies, and desired outcome with the ZoikoTime enterprise team. Availability and terms are confirmed before any implementation commitment.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link href="/request-enterprise-demo" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Request Enterprise Demo
              </Link>
              <Link href="/contact-sales" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
                Talk to Sales
              </Link>
            </div>

            {/* Existing Customer Link */}
            <div>
              <a
                href="/login"
                className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-sm font-bold hover:underline group"
              >
                <span>Existing customer? Sign in for implementation help</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Feature Tag Highlights */}
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              <span>Clear scope.</span>
              <span>Named ownership.</span>
              <span>Reviewable decisions.</span>
              <span>Evidence-led acceptance.</span>
              <span>Controlled launch and handover.</span>
            </div>

          </div>

          {/* Right Column: Visual / Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[461px] aspect-[461/314] rounded-2xl overflow-hidden ">
              <img
                src="/implementation/div.mock (4).png"
                alt="Governed delivery path visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}