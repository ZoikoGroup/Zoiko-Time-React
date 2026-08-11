import React from 'react';

function ArrowRightIcon() {
  return (
    <svg
      className="w-4 h-4 text-white transition-transform duration-200 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function AntiSurveillanceBanner() {
  return (
    <section className="w-full bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        
        {/* Section Pill Badge */}
        <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
          Security without hidden observation
        </span>

        {/* Highlighted Banner Statement */}
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-relaxed max-w-3xl text-slate-100">
          No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.
        </h2>

        {/* Detailed Explanation */}
        <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
          Security telemetry covers approved identity, access, change, source-health, service, and incident events. It does not cover what a person types, reads, visits, or copies. Security logs are operational records — they are not worker-behavior scoring, and no administrator setting turns them into one.
        </p>

        {/* Action Button Group */}
        <div className="flex flex-wrap justify-center items-center gap-3.5 pt-2">
          {/* Primary Action Button */}
          <a href="/privacy-controls">
          <button
            type="button"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg shadow-sm transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Privacy &amp; collection limits
          </button></a>

          {/* Secondary Action Button */}
          <a href="/human-in-command">
          <button
            type="button"
            className="group px-6 py-3.5 rounded-lg border border-white/30 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-bold text-base transition-all inline-flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <span>Human-in-Command Controls</span>
            <ArrowRightIcon />
          </button></a>
        </div>

      </div>
    </section>
  );
}