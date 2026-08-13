import Link from "next/link";
import React from 'react';

export default function PilotScorecard() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-6">
        
        {/* Header Section */}
        <div className="max-w-[780px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Validation Before Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            A Pilot Scorecard, Not a Testimonial Wall
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 text-base leading-relaxed">
            Named customer evidence appears on this page only when it is attributable, permissioned, measured, and current. Until then, here is exactly how we would prove the value in your operation.
          </p>
        </div>

        {/* Hero Image Container */}
        <div className="w-full pt-2">
          <img
            className="w-full h-auto max-h-[562px] object-cover rounded-2xl border border-slate-200 shadow-sm"
            src="/operational-leaders/div.tablewrap.png"
            alt="Pilot Scorecard Visual"
          />
        </div>

        {/* CTA Button
        <div className="flex justify-center pt-2">
          <Link
            href="/request-enterprise-demo"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm"
          >
            Request an operational readiness review
          </Link>
        </div> */}

      </div>
    </section>
  );
}
