"use client";

import { useState } from "react";

const tabs = [
  "Record completeness",
  "Approval turnaround",
  "Correction rate",
];

export default function MetricCatalog() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Metric Catalog &amp; Definition Cards
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Every Metric Is Explainable, or It Doesn't
            <br />
            Ship
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            Ten required fields per metric. If a field is unknown, the metric
            stays in draft — it does not appear on a dashboard with a caveat.
          </p>
        </div>

        {/* Metric Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`rounded-full border px-5 py-3 text-sm font-bold transition ${
                activeTab === index
                  ? "border-emerald-500 bg-emerald-500 text-white"
                  : "border-slate-300 bg-white text-slate-800 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Metric Card */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">

          {/* Header */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Record completeness
                <span className="ml-2 text-sm font-normal text-slate-500">
                  · MT-014
                </span>
              </h3>
            </div>

            <span className="inline-flex w-fit rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold text-emerald-700 dark:bg-slate-800 dark:text-emerald-400">
              Approved · v3 · effective 01 Jun 2026
            </span>
          </div>

          {/* Question */}
          <div className="mt-8">
            <p className="text-base leading-8 text-slate-700 dark:text-slate-300">
              <span className="font-semibold">Question answered:</span> for a
              given operating period and population, what share of required
              workforce records is present and in an accepted state?
            </p>
          </div>

          {/* Prohibited Use */}
          <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900 dark:bg-red-950/20">
            <p className="text-xs font-bold uppercase tracking-wide text-red-700 dark:text-red-400">
              Prohibited use
            </p>

            <p className="mt-2 text-sm leading-7 text-red-700 dark:text-red-300">
              This metric must not be used to assess an individual worker's
              diligence, reliability, or performance. It describes record
              conditions, not people.
            </p>
          </div>

          {/* Metric Details */}
          <div className="mt-10 space-y-8">

                        {/* Formula */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Formula
              </p>

              <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                  numerator: records in accepted state
                  <br />
                  denominator: required records in scope
                  <br />
                  units: percentage · rounding: 1 dp · null: excluded
                </p>
              </div>
            </div>

            {/* Scope & Grain */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Scope and grain
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Organization, entity, team, and period. Worker grain requires a
                documented purpose and an authorized role.
              </p>
            </div>

            {/* Sources */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Sources
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Approved time records and schedule expectation objects.
                Reconciliation status: matched.
              </p>
            </div>

            {/* Inclusion / Exclusion */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Inclusion / exclusion
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Excludes withdrawn records and populations outside the effective
                policy. Late-arriving records update the period and mark it
                revised.
              </p>
            </div>
                        {/* Time Treatment */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Time treatment
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Location time zone with DST applied. Reporting calendar: fiscal
                weekly. Period close locks the denominator.
              </p>
            </div>

            {/* Privacy Treatment */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Privacy treatment
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Aggregate by default. Minimum group of 5. Below threshold,
                values are suppressed with a stated reason.
              </p>
            </div>

            {/* Quality */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Quality
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                Freshness 6h. Completeness 96.4%. Test status: passing. Known
                limitation — excludes records pending reconciliation.
              </p>
            </div>

            {/* Version & Governance */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Version and governance
              </p>

              <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
                v3, approved by Analytics Governance Board. Change reason:
                denominator clarified. Impacted reports: 4. Not retired.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}