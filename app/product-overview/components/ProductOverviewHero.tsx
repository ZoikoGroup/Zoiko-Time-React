import React from 'react';
import Link from 'next/link';
import SectionEyebrow from './SectionEyebrow';

export default function ProductOverviewHero() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 pt-8 pb-12 sm:pt-10 sm:pb-16 px-4 sm:px-8 lg:px-16 transition-colors duration-200">
      <div className="max-w-[1220px] mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-14">

        {/* Left Content Area */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          <SectionEyebrow>Product Overview</SectionEyebrow>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight lg:leading-[3.4rem]">
            Workforce records built for truth, review, and accountability.
          </h1>

          <p className="text-base text-gray-500 dark:text-slate-400 leading-7 max-w-lg">
            ZoikoTime creates deterministic, evidence-backed workforce records from approved time,
            attendance, policy and review context — for payroll, billing, reporting and audit
            workflows, without invasive monitoring.
          </p>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap gap-3.5">
            <Link
              href="/start-free"
              className="px-6 pt-3 pb-3.5 bg-green-400 hover:bg-green-500 rounded-full text-white text-base font-semibold leading-6 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Start Free
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="px-6 pt-3 pb-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-900 dark:text-slate-100 text-base font-semibold leading-6 text-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Request Enterprise Demo
            </Link>
          </div>
        </div>

        {/* Right Record Card */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-[0px_20px_44px_-26px_rgba(10,22,40,0.24)] overflow-hidden">
            <img
              className="w-full h-auto object-cover"
              src="/product-overview/hero-record.png"
              alt="A workforce team at the start of a shift"
            />

            {/* Record Header — overlays the image top, per the Figma frame */}
            <div className="absolute inset-x-0 top-0 px-6 py-5 bg-slate-900 flex items-center justify-between gap-3">
              <span className="text-xs text-white/60 leading-5">RECORD · TR-40921</span>
              <span className="px-3 py-1 rounded-full bg-emerald-300/20 text-xs font-bold text-emerald-300 leading-5">
                Approved
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
