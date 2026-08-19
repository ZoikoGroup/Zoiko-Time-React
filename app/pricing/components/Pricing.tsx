'use client'
import React, { useState } from 'react';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-slate-900 dark:text-white px-4 py-12 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
        
        {/* Billing Toggle Bar */}
        <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-start gap-4">
          <div className="relative w-80 h-14 bg-white dark:bg-gray-800 rounded-full p-1.5 shadow-md border border-gray-300 dark:border-gray-700 flex items-center justify-between">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`flex-1 h-11 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-1.5 ${
                billingCycle === 'monthly'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              {billingCycle === 'monthly' && <span>✓</span>}
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex-1 h-11 rounded-full text-sm font-semibold transition-all flex items-center justify-center gap-1 ${
                billingCycle === 'annual'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Annual
              <span className="text-teal-600 dark:text-teal-400 font-bold text-xs">· Save 20%</span>
            </button>
          </div>
          <span className="text-gray-500 dark:text-gray-400 text-xs font-normal">
            Showing {billingCycle} pricing. Billed {billingCycle === 'monthly' ? 'monthly' : 'annually'}.
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-4">
          
          {/* Card 1: Verified */}
          <div className="relative flex flex-col justify-between bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-gray-700">
            <div>
              <div className="text-center text-blue-600 dark:text-blue-400 text-sm font-extrabold uppercase tracking-wide">
                Verified
              </div>
              <div className="mt-4 text-center text-slate-800 dark:text-white text-4xl font-extrabold">
                {billingCycle === 'monthly' ? '$8.00' : '$6.40'}
              </div>
              <div className="mt-2 text-center text-gray-500 dark:text-gray-400 text-xs">
                / active worker / month
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 text-xs mt-1">
                Billed {billingCycle}
              </div>

              <div className="mt-6 p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-center text-blue-600 dark:text-blue-300 text-xs font-bold leading-4">
                Best for 1–25 workers or a single site
              </div>

              <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-xs leading-5">
                Verified work records for entry-level workforce assurance.
              </p>

              <ul className="mt-6 space-y-3 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Basic policy configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Human review exception workflow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Standard evidence export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Bi-weekly individual inactivity alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  <span>Weekly summaries and exportable snapshots</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3">
               <a href=" https://getzoikotime.com/">
              <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg transition-colors">
                Start 14-Day Free Trial
              </button></a>
               <a href=" https://getzoikotime.com/">
              <button className="w-full py-2.5 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-bold text-sm rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
                Subscribe now
              </button></a>
              
              <p className="text-center text-gray-500 dark:text-gray-400 text-xs">
                No credit card required for the trial
              </p>
            </div>
          </div>

          {/* Card 2: Governed (RECOMMENDED) */}
          <div className="relative flex flex-col justify-between bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border-2 border-teal-600 dark:border-teal-500">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-teal-600 text-white text-[10px] font-extrabold uppercase tracking-wide rounded-full">
              RECOMMENDED
            </div>

            <div>
              <div className="text-center text-teal-600 dark:text-teal-400 text-sm font-extrabold uppercase tracking-wide mt-1">
                Governed
              </div>
              <div className="mt-4 text-center text-slate-800 dark:text-white text-4xl font-extrabold">
                {billingCycle === 'monthly' ? '$15.00' : '$12.00'}
              </div>
              <div className="mt-2 text-center text-gray-500 dark:text-gray-400 text-xs">
                / active worker / month
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 text-xs mt-1">
                Billed {billingCycle}
              </div>

              <div className="mt-6 p-2.5 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg text-center text-teal-600 dark:text-teal-300 text-xs font-bold leading-4">
                Best for 26–250 workers
              </div>

              <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-xs leading-5">
                Policy-based workforce assurance for teams accountable to payroll, finance and legal.
              </p>

              <div className="mt-6 text-teal-600 dark:text-teal-400 text-xs font-bold mb-3">
                Everything in Verified, plus
              </div>

              <ul className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Multiple default and custom evidence policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Policy controls (hours, breaks &amp; locations) with alerts &amp; audit trail</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Designated approver &amp; exception workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Evidence highlights with sensitivity masks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Advanced access controls, API, webhooks &amp; SSO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Centralised evidence (7-year retention)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>SOC 2 evidence &amp; data residency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>5+ pre-built dashboard clarity metrics</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href=" https://getzoikotime.com/">
              <button className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-lg transition-colors">
                Start 14-Day Free Trial
              </button></a>
               <a href=" https://getzoikotime.com/">
              <button className="w-full py-2.5 bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 font-bold text-sm rounded-lg border border-teal-600 dark:border-teal-400 hover:bg-teal-50 dark:hover:bg-gray-700 transition-colors">
                Subscribe now
              </button></a>
              <p className="text-center text-gray-500 dark:text-gray-400 text-xs">
                No credit card required for the trial
              </p>
            </div>
          </div>

          {/* Card 3: Sovereign */}
          <div className="relative flex flex-col justify-between bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border border-slate-200 dark:border-gray-700">
            <div>
              <div className="text-center text-indigo-500 dark:text-indigo-400 text-sm font-extrabold uppercase tracking-wide">
                Sovereign
              </div>
              <div className="mt-4 text-center text-slate-800 dark:text-white text-4xl font-extrabold">
                {billingCycle === 'monthly' ? '$25.00' : '$20.00'}
              </div>
              <div className="mt-2 text-center text-gray-500 dark:text-gray-400 text-xs">
                / active worker / month
              </div>
              <div className="text-center text-gray-500 dark:text-gray-400 text-xs mt-1">
                Billed {billingCycle}
              </div>

              <div className="mt-6 p-2.5 bg-violet-100 dark:bg-violet-950/40 rounded-lg text-center text-indigo-500 dark:text-indigo-300 text-xs font-bold leading-4">
                For regulated, unionised and multi-country workforces
              </div>

              <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-xs leading-5">
                Jurisdiction-aware workforce governance with advanced controls and audit trails.
              </p>

              <div className="mt-6 text-indigo-500 dark:text-indigo-400 text-xs font-bold mb-3">
                Everything in Governed, plus
              </div>

              <ul className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>Multi-country &amp; jurisdiction policy matrices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>Data sovereignty controls with data-region residency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>Immutable audit trail with chain of custody</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>Compliance dashboards with real-time violation alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>Policy overrides &amp; legal hold with approvals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>E-discovery export</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>Redaction &amp; privilege safeguards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>Multi-entity &amp; group workforce benchmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold">✓</span>
                  <span>24/7 priority support</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href="/request-enterprise-demo">
              <button className="w-full py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-sm rounded-lg transition-colors">
                Request Enterprise Demo
              </button></a>
              <p className="text-center text-gray-500 dark:text-gray-400 text-xs">
                Guided Assurance Pilot available
              </p>
            </div>
          </div>

          {/* Card 4: Enterprise */}
          <div className="relative flex flex-col justify-between bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md border-2 border-slate-800 dark:border-gray-600">
            <div>
              <div className="text-center text-slate-800 dark:text-gray-200 text-sm font-extrabold uppercase tracking-wide">
                Enterprise
              </div>
              <div className="mt-4 text-center text-slate-800 dark:text-white text-3xl font-extrabold">
                Custom
              </div>
              <div className="mt-2 text-center text-gray-500 dark:text-gray-400 text-xs">
                Contract pricing
              </div>

              <div className="mt-10 p-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg text-center text-slate-800 dark:text-gray-200 text-xs font-bold leading-4">
                For complex and strategic deployments
              </div>

              <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-xs leading-5">
                Private architecture, integrations and configurable accountability at scale across jurisdictions.
              </p>

              <div className="mt-6 text-slate-800 dark:text-gray-200 text-xs font-bold mb-3">
                Everything in Sovereign, plus
              </div>

              <ul className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-slate-800 dark:text-gray-200 font-bold">✓</span>
                  <span>Dedicated tenant architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-800 dark:text-gray-200 font-bold">✓</span>
                  <span>Priority data residency options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-800 dark:text-gray-200 font-bold">✓</span>
                  <span>Custom integrations (including Workday, SAP, Oracle)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-800 dark:text-gray-200 font-bold">✓</span>
                  <span>Dedicated customer success manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-800 dark:text-gray-200 font-bold">✓</span>
                  <span>Security &amp; compliance reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-800 dark:text-gray-200 font-bold">✓</span>
                  <span>Negotiated SLAs &amp; audit options</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-800 dark:text-gray-200 font-bold">✓</span>
                  <span>Commercial terms structured for your enterprise</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a href="/request-enterprise-demo">
              <button className="w-full py-2.5 bg-slate-800 hover:bg-slate-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold text-sm rounded-lg transition-colors">
                Request Enterprise Demo
              </button></a>
              <a href="/contact-sales">
              <button className="w-full text-center text-teal-700 dark:text-teal-400 font-bold text-xs hover:underline">
                Talk to Sales →
              </button></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}