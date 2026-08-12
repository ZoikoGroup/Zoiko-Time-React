import React from 'react';

const packageInclusions = [
  "Scope and filters applied",
  "Metric definition and version",
  "Limitations and comparability state",
  "Permission basis, recipient, and purpose",
  "Delivery and withdrawal state",
];

export default function EvidenceAndBoundariesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Evidence Lineage & Governed Sharing */}
        <div className="flex flex-col gap-6">
          
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Evidence Lineage, Review History &amp; Governed Sharing
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
              An Insight Package<br className="hidden sm:inline" /> Carries Its Own Context
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans max-w-xl">
              A shared insight that arrives without its definition, filters, and limitations is a number someone will misuse. So the manifest travels with it.
            </p>
          </div>

          {/* Card: Every share or export includes */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
              Every share or export includes
            </h3>

            <ul className="flex flex-col gap-2.5">
              {packageInclusions.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
              Suppression and purpose restrictions travel with the package. Export formats and availability remain authority-gated rather than listed here.
            </p>
          </div>

          {/* Action Button & Disclaimer */}
          <div className="flex flex-col gap-3">
            <div>
              <a
                href="/evidence-ledger"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold font-sans text-sm sm:text-base rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors group"
              >
                <span>Explore Evidence Ledger</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-xs font-sans leading-relaxed">
              Evidence Ledger preserves source-linked history, versions, reviews, corrections, and sharing context. This page links to that history without immutability or legal-sufficiency claims.
            </p>
          </div>

        </div>

        {/* Right Column: Kairos & Optional Zoiko Sema Boundaries */}
        <div className="flex flex-col gap-6">
          
          {/* Header */}
          <div className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Kairos &amp; Optional Zoiko Sema Boundaries
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-snug">
              Two adjacencies, neither with authority
            </h2>
          </div>

          {/* Card: Kairos boundary */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
              Kairos boundary
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              Kairos may retrieve and explain approved definitions, sources, context, and review paths within the requester&apos;s existing permission — and must state when information is insufficient. It cannot calculate an unapproved metric, classify, rank, approve, or decide.
            </p>
            <div className="pt-1">
              <a
                href="/kairos-assistant"
                className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold font-sans text-sm transition-colors group"
              >
                <span>Kairos Assistant</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Card: Zoiko Sema is optional */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
              Zoiko Sema is optional
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
              The products are independent. Connected context is optional, explicitly mapped, purpose-limited, permissioned, and reviewable — and communication presence is never treated as proof of work.
            </p>
            <div className="pt-1">
              <a
                href="/zoiko-sema-integration"
                className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold font-sans text-sm transition-colors group"
              >
                <span>Zoiko Sema Integration</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>

          {/* Callout / Information Banner */}
          <div className="p-5 sm:p-6 bg-slate-100/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
            <div className="p-1 rounded bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed font-sans">
              Any ZoikoTime classification behind an insight remains deterministic, policy-bound, reviewable — and is never branded as AI. Presentation, scheduling, distribution, and alerting are separate destinations requiring their own approval, and are not introduced here.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}