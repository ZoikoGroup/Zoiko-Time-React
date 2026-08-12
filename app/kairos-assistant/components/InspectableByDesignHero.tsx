import React from 'react';
import Link from 'next/link';

const governanceBadges = [
  'No screenshots.',
  'No keystroke content.',
  'No URL history.',
  'No clipboard collection.',
];

export default function InspectableByDesignHero() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 font-sans transition-colors">
      <div className="max-w-[1280px] mx-auto p-6 sm:p-10 lg:p-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="flex flex-col gap-5 sm:gap-6">
            
            {/* Eyebrow & Headline */}
            <div className="flex flex-col gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Inspectable by design
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Make governed workforce records easier to understand
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              See how Kairos can help authorized people retrieve and explain ZoikoTime records with visible scope, source, timing, completeness, and limitations — while correction, review, approval, policy, payroll, legal, and compliance authority remain with the appropriate people and systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/start-free"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Start Free
              </Link>
              <Link
                href="/request-enterprise-demo"
                className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 active:bg-slate-200 dark:active:bg-slate-600 text-slate-900 dark:text-white font-bold text-base rounded-xl border border-slate-300 dark:border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Request Enterprise Demo
              </Link>
            </div>

            {/* Secondary Route Link */}
            <div className="pt-1">
              <a
                href="/explore-zoikotime"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 group transition-colors"
              >
                <span>Explore ZoikoTime</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Privacy Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {governanceBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold rounded-full border border-emerald-200 dark:border-emerald-800/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
              Capabilities, sources, plans, regions, languages, and implementation vary and must be confirmed through current product or enterprise information.
            </p>

          </div>

          {/* Right Column: Hero Visual / Preview Image */}
          <div className="w-full flex justify-center items-center">
            <img
              className="w-full h-auto max-h-[420px] object-cover rounded-2xl "
              src="/kairos/div.mock (13).png"
              alt="Kairos workforce records preview dashboard"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
