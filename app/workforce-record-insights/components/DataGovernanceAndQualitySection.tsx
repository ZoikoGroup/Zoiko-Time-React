import React from 'react';

export default function DataGovernanceAndQualitySection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 sm:gap-16">
        
        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Cohorts, aggregation & privacy thresholds */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-slate-900 dark:text-slate-50 text-base sm:text-lg font-bold font-sans">
                  Cohorts, aggregation &amp; privacy thresholds
                </h3>
                <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-sans rounded-full border border-emerald-200/50 dark:border-emerald-800/50 shrink-0">
                  Current
                </span>
              </div>

              {/* Highlight Banner */}
              <div className="p-3 bg-slate-100/80 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <p className="text-slate-900 dark:text-slate-100 text-xs font-bold font-sans">
                  A cohort is a permission-scoped group, not a behavioral profile.
                </p>
              </div>

              {/* Content List */}
              <dl className="grid grid-cols-1 gap-4 text-xs font-sans">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Approved criteria</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Organization, unit, role family, configured region, schedule, policy, jurisdiction, record state, period — where approved
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Prohibited criteria</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Inferred personality, engagement, sentiment, loyalty, health, protected attributes, private communication content, unapproved behavior profiles
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Threshold</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Values below the configured privacy threshold are suppressed or grouped
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Small-cell protection</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Filters, tooltips, exports, counts, and drill-downs must not reveal suppressed membership
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Intersection control</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Combined filters re-evaluate permission and threshold server-side
                  </dd>
                </div>
              </dl>
            </div>

            {/* Limitations Notice */}
            <div className="-mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/20 border-t border-amber-200/60 dark:border-amber-900/40 rounded-b-2xl">
              <p className="text-amber-800 dark:text-amber-400 text-xs font-sans leading-relaxed">
                <strong className="font-bold">Limitations:</strong> This page does not claim a fixed threshold number, because the threshold is configured per organization. Empty states distinguish no matching records, insufficient permission, unavailable source, and privacy suppression — without leaking which applies in a way that identifies anyone.
              </p>
            </div>
          </div>

          {/* Card 2: Policy, jurisdiction, time & comparability */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              
              {/* Card Header */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-slate-900 dark:text-slate-50 text-base sm:text-lg font-bold font-sans">
                  Policy, jurisdiction, time &amp; comparability
                </h3>
                <span className="px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-sans rounded-full border border-emerald-200/50 dark:border-emerald-800/50 shrink-0">
                  Current
                </span>
              </div>

              {/* Highlight Banner */}
              <div className="p-3 bg-slate-100/80 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-700/60">
                <p className="text-slate-900 dark:text-slate-100 text-xs font-bold font-sans">
                  Values are not comparable until their context is compatible.
                </p>
              </div>

              {/* Content List */}
              <dl className="grid grid-cols-1 gap-4 text-xs font-sans">
                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Must align to compare</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Definition version, source coverage, policy version, jurisdiction, schedule basis, time zone, period, privacy threshold
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Comparison states</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Comparable · partially comparable · not comparable, each with the reason
                  </dd>
                </div>

                <div>
                  <dt className="text-slate-500 dark:text-slate-400 font-semibold mb-0.5">Mid-period change</dt>
                  <dd className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    A policy or definition change inside a period is surfaced, not averaged away
                  </dd>
                </div>
              </dl>
            </div>

            {/* Limitations Notice */}
            <div className="-mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-4 sm:p-5 bg-amber-50/70 dark:bg-amber-950/20 border-t border-amber-200/60 dark:border-amber-900/40 rounded-b-2xl">
              <p className="text-amber-800 dark:text-amber-400 text-xs font-sans leading-relaxed">
                <strong className="font-bold">Limitations:</strong> &quot;Comparison unavailable because policy versions differ&quot; is a legitimate and common result. The product says that rather than producing a number two teams would misread. No value proves legal, regulatory, contractual, payroll, or policy compliance.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left: Image / Mockup Column */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Data Quality, Freshness &amp; Completeness
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-slate-50">
              Uncertainty is never hidden
            </h3>
            <div className="w-full aspect-[1/1] max-h-[536px] bg-slate-200 dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md overflow-hidden mt-1">
              <img
                src="/work-force-record-insights/image (2).png"
                alt="Data quality and completeness visualization"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Mockup Data Rules */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Public Mockup Data Rules
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-slate-50">
              Why every figure here is labelled synthetic
            </h3>

            <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6 mt-1">
              <ul className="flex flex-col gap-3">
                {[
                  "Synthetic organizations, units, policies, sources, and values only",
                  "No customer names, logos, or individual-performance framing",
                  "No figure presented as a product benchmark or customer outcome",
                  "No named analytics engine, model, region, or export format",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2" />
                    <p className="text-sm text-slate-700 dark:text-slate-300 font-normal leading-relaxed font-sans">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <hr className="border-slate-100 dark:border-slate-800" />

              <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed font-sans">
                The approved source set does not verify plan entitlements, connectors, response times, retention periods, certifications, service levels, or benchmarks. Those remain absent or authority-gated rather than estimated for a marketing page.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}