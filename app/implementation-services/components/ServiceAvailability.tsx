import React from 'react';
import Link from 'next/link';

const verifiedBoundaries: string[] = [
  'Governance model, stage gates, and decision records',
  'Readiness assessment and dependency tracking',
  'Evidence-led acceptance and operational handover',
  'Coordination with the authoritative Enterprise workstreams',
];

const notClaimedHere: string[] = [
  'Packages, tiers, hours, or durations',
  'Pricing, entitlement, or service levels',
  'Named specialists or staffing capacity',
  'Regional or language availability',
  'Guaranteed compliance or business outcomes',
];

export default function ServiceAvailability() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-9">
        
        {/* Section Header */}
        <div className="max-w-[760px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Service Availability &amp; Commercial Truth
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Confirm the right implementation path for<br className="hidden sm:inline" /> your organization
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Implementation scope and availability depend on the current offer, your readiness, dependencies, geography, capacity, entitlement, and agreed terms.
          </p>
        </div>

        {/* Main Status & Scope Card */}
        <div className="w-full p-6 sm:p-9 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/80 flex flex-col gap-6">
          
          {/* Card Header Status Bar */}
          <div className="pb-5 border-b border-slate-200 dark:border-slate-700/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex flex-col">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Current status for your intended scope
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Requires qualification
              </h3>
            </div>

            {/* Status Pill */}
            <div className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-700/60 rounded-full flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-slate-500 dark:border-slate-400 flex-shrink-0" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Verify with sales
              </span>
            </div>
          </div>

          {/* Two-Column Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-1.5">
            
            {/* Column 1: Verified Boundaries */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Verified boundaries
              </h4>
              <ul className="space-y-2">
                {verifiedBoundaries.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Not Claimed Here */}
            <div className="flex flex-col gap-3.5">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Not claimed here
              </h4>
              <ul className="space-y-2">
                {notClaimedHere.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <Link href="/request-enterprise-demo" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Request Enterprise Demo
            </Link>
            <Link href="/contact-sales" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
              Talk to Sales
            </Link>
            <Link href="/procurement-and-legal-resources" className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400">
              Procurement &amp; Legal Resources
            </Link>
          </div>

          {/* Existing Customer Link */}
          <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center gap-1">
            <span>Already a customer?</span>
            <a
              href="/login"
              className="text-emerald-600 dark:text-emerald-400 text-sm font-bold hover:underline"
            >
              Sign in
            </a>
            <span>to request a change, a wave, or implementation help through your current account and support route.</span>
          </div>

          {/* Footer Registry Disclaimer */}
          <div className="max-w-[640px] pt-4 border-t border-slate-200 dark:border-slate-700/80 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Availability labels are shown only from an approved registry. Where current availability cannot be confirmed, this panel says so and offers a sales route — never a booking or checkout action.
          </div>

        </div>

      </div>
    </section>
  );
}