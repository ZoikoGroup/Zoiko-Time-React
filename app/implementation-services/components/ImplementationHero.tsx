import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function ImplementationHero() {
  const highlights = [
    'Stage-gated',
    'Jointly owned',
    'Evidence-led',
    'Acceptance-based',
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-24 px-6 lg:px-20 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4">
          
          {/* Badge */}
          <div className="px-3.5 py-1.5 bg-slate-200/70 dark:bg-slate-800 rounded-full inline-flex items-center">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Implementation Services
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Move from <br/>approved scope<br/> to{' '}
            <span className="text-emerald-500 dark:text-emerald-400">
              governed <br/>launch
            </span>
          </h1>

          {/* Body Paragraph */}
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            ZoikoTime implementation services help qualified enterprise customers coordinate policy, identity, integrations, workforce communication, validation, launch readiness, and operational handover through an accountable delivery model — subject to current service availability and agreed terms.
          </p>

          {/* Notice Box */}
          <div className="w-full max-w-[644px] p-4 bg-white dark:bg-slate-800 rounded-xl border-l-[3px] border-l-emerald-500 border-t border-r border-b border-slate-200 dark:border-slate-700 shadow-xs">
            <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
              Service scope, roles, dependencies, acceptance criteria, support obligations, commercial entitlement, and current terms are confirmed before work begins.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
            <Link
              href="/request-enterprise-demo"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm"
            >
              Request Enterprise Demo
            </Link>
            <Link
              href="/contact-sales"
              className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-bold text-base rounded-lg transition-colors shadow-xs"
            >
              Talk to Sales
            </Link>
          </div>

          {/* Secondary Text Link */}
          <div className="pt-1">
            <a
              href="#readiness"
              className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold text-sm transition-colors group"
            >
              <span>Review implementation readiness</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Key Checklist Features Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200 dark:border-slate-800 w-full">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-normal">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column - Image & Disclaimer */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <img
            className="w-full h-auto max-h-[467px] object-cover rounded-[20px] "
            src="/implementation/div.mock (3).png"
            alt="Implementation Governance Preview"
          />

          {/* What This Page Is Not Banner */}
          <div className="p-5 bg-slate-100/80 dark:bg-slate-800/80 rounded-xl border-l-[3px] border-l-slate-400 border border-slate-200 dark:border-slate-700 flex flex-col gap-1.5">
            <span className="text-slate-900 dark:text-white text-xs font-bold uppercase tracking-wider">
              What this page is not
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              No packages, tiers, hours, durations, prices, named specialists, staffing promises, region maps, logo walls, or percentage success claims. Those either resolve to an approved service record or they do not appear.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}