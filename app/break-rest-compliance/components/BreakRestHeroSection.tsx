import { CircleCheck } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

interface TrustItem {
  text: string;
}

const trustItems: TrustItem[] = [
  { text: 'No GPS tracking' },
  { text: 'No screenshots & keystrokes' },
  { text: 'No productivity scoring' },
  { text: 'No automatic discipline' },
];
const statsData = [
  { label: 'Break records / wk', value: '14,208', valueColor: 'text-slate-900 dark:text-white' },
  { label: 'Policy applied cleanly', value: '99.1%', valueColor: 'text-slate-900 dark:text-white' },
  { label: 'In review', value: '37', valueColor: 'text-amber-600 dark:text-amber-400' },
  { label: 'Policy versions live', value: '6', valueColor: 'text-slate-900 dark:text-white' },
];

const reviewQueueData = [
  { name: 'M. Alvarez', detail: 'Line 4', code: 'REC-88213', progress: [true, true, 'active', false] },
  { name: 'D. Whitfield', detail: 'Store 12', code: 'REC-88201', progress: [true, true, 'active', false] },
  { name: 'R. Okafor', detail: 'Warehouse B', code: 'REC-88194', progress: [true, true, true, 'active'] },
];

const activityFeedData = [
  { time: '09:41', text: 'Rest record REC-88213 moved to Under Review' },
  { time: '09:22', text: 'Policy pack "CA — Meal Break v6" published' },
  { time: '08:57', text: 'Worker correction submitted on REC-88109' },
];

export default function BreakRestHeroSection() {
  
  return (
    <>
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Headline & Hero Content */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wide">
                Break &amp; Rest Compliance
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Break policy that explains itself.
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            ZoikoTime configures your break and rest rules once, applies them consistently across every shift, and keeps a reviewable record of what happened — with a human in the loop on every exception.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/start-free"
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base rounded-full shadow-sm transition-all focus:ring-2 focus:ring-teal-400 focus:outline-none"
            >
              Start Free
            </Link>
            <Link
              href="/request-enterprise-demo"
              className="px-6 py-3 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-semibold text-base rounded-full shadow-sm transition-all focus:ring-2 focus:ring-slate-300 focus:outline-none"
            >
              Request Enterprise Demo
            </Link>
          </div>

          {/* Bullet Highlights */}
          <div className="flex flex-row gap-2.5 pt-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2.5">
              < CircleCheck  className="w-3.5 h-3.5 text-teal-600" />
              <span>Configured, not guessed</span>
            </div>
            <div className="flex items-center gap-2.5">
              < CircleCheck  className="w-3.5 h-3.5 text-teal-600" />
              <span>Every record traceable</span>
            </div>
           
          </div>
           <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              < CircleCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Reviewed by people</span>
            </div>
        </div>

        {/* Right Column: Operations Center Interactive Mock Card */}
        <div className="lg:col-span-7 w-full bg-slate-100 dark:bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-5">
          
          {/* Operations Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Break &amp; Rest Operations Center
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 rounded-full">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full" />
              <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">Live</span>
            </div>
          </div>

          {/* 4 Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div className={`text-xl font-bold ${stat.valueColor}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Review Queue Card */}
          <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                Review Queue
              </span>
              <button
                type="button"
                className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                View all
              </button>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
              {reviewQueueData.map((row, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-blue-600 rounded-full shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200">
                        {row.name} — {row.detail}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {row.code}
                      </span>
                    </div>
                  </div>

                  {/* Step Status Indicator Bars */}
                  <div className="flex items-center gap-1">
                    {row.progress.map((status, pIdx) => (
                      <span
                        key={pIdx}
                        className={`w-4 h-1.5 rounded-sm ${
                          status === true
                            ? 'bg-teal-600 dark:bg-teal-400'
                            : status === 'active'
                            ? 'bg-slate-900 dark:bg-slate-100'
                            : 'bg-slate-100 dark:bg-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity Feed Card */}
          <div className="p-4 sm:p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
              Activity Feed
            </span>

            <div className="flex flex-col gap-2.5">
              {activityFeedData.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 shrink-0">
                    {item.time}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
    <section className="w-full bg-slate-800 text-white py-4 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
        {trustItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            {/* Teal Checkmark Icon */}
            <div className="w-4 h-4 rounded-full border border-teal-500 flex items-center justify-center shrink-0">
              <svg
                className="w-2.5 h-2.5 text-teal-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Item Text */}
            <span className="text-sm font-semibold text-white tracking-normal">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}