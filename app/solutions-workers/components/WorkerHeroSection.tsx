import React from 'react';
import Link from "next/link";
import Image from 'next/image';

export default function WorkerHeroSection() {
  const features = [
    'Your record is visible',
    'Corrections are reviewable',
    'Human review stays in control',
    'No invasive monitoring',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200 py-12 md:py-20 lg:py-24">
      {/* Background Radial Glow */}
      <div 
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[760px] h-96 bg-teal-500/10 dark:bg-teal-500/15 blur-3xl rounded-full" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Category Tag */}
            <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest mb-3">
              For Workers
            </span>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-4">
              Track your time.<br />
              Understand your{' '}
              <span className="text-teal-600 dark:text-teal-400">record</span>. Stay in control.
            </h1>

            {/* Description Subtitle */}
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
              ZoikoTime gives workers a clear way to record time, review classifications, add context, request corrections, and see approval status — without screenshots, keystroke capture, URL history, application names, or clipboard data.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <Link
                href="/request-a-demo"
                className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold rounded-lg shadow-lg shadow-teal-600/25 transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 text-center"
              >
                Request a Demo
              </Link>
              <Link
                href="/how-zoikotime-works"
                className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-base font-semibold rounded-lg border border-gray-300 dark:border-slate-700 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-teal-500 text-center"
              >
                See How It Works
              </Link>
            </div>

            {/* Feature Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full max-w-lg">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-teal-100 dark:bg-teal-950 flex items-center justify-center">
                    <svg 
                      className="w-2.5 h-2.5 text-teal-600 dark:text-teal-400" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-xs text-gray-600 dark:text-gray-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image Card & Overlay */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[592px] rounded-3xl shadow-2xl shadow-slate-900/10 overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
              {/* Background Image Container */}
              <div className="relative w-full aspect-[592/493]">
                <Image
                  src="/solution-workers/A worker and colleague.png"
                  alt="Worker Dashboard Preview"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
              </div>

              {/* Floating Status Widget */}
              <div className="absolute left-4 bottom-4 sm:left-6 sm:bottom-6 w-[280px] sm:w-[300px] bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
                {/* Status Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/50 rounded-full mb-3">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                    Recording · Shift active
                  </span>
                </div>

                {/* Subheader */}
                <div className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-1">
                  Today
                </div>

                {/* Main Details */}
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">
                  6h 12m · Project: Client Onboarding
                </div>

                {/* Divider Line & Footer */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400">Status</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Needs input</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
