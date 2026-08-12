import React from 'react';

interface BulletItem {
  label?: string;
  text: string;
}

const anatomyItems: BulletItem[] = [
  {
    label: "Definition",
    text: "version, numerator, denominator, inclusion, exclusion, unit, owner, review date",
  },
  {
    label: "Scope",
    text: "organization, unit, record type, purpose, permission basis",
  },
  {
    label: "Time",
    text: "period, schedule basis, time zone, effective policy window",
  },
  {
    label: "Context",
    text: "policy version, jurisdiction, source set, comparison state",
  },
  {
    label: "Quality",
    text: "freshness, coverage, missing records, conflicts, threshold state",
  },
  {
    label: "Limitations",
    text: "what this insight cannot establish",
  },
  {
    label: "Review state",
    text: "informational, needs review, under review, resolved, superseded, unavailable",
  },
  {
    label: "Next action",
    text: "accountable role, reason, due date — without exposing worker names publicly",
  },
];

const governanceItems: BulletItem[] = [
  { text: "Owner and review cadence" },
  { text: "Numerator and denominator" },
  { text: "Inclusion and exclusion rules" },
  { text: "Unit, rounding, and null treatment" },
  { text: "Source requirements" },
  { text: "Tests and expected behavior" },
  { label: "Prohibited uses", text: ", stated explicitly" },
  { text: "Retirement and supersession path" },
];

export default function ReviewableInsightSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Anatomy of a Reviewable Insight */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Anatomy of a Reviewable Insight
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
              Enough Context to Stop a<br className="hidden sm:inline" /> Number Masquerading as<br className="hidden sm:inline" /> Truth
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed font-sans mt-1 max-w-xl">
              Every public and product example exposes the same field set. A value shown without them is not an insight — it is a decoration.
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {anatomyItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2" />
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                  {item.label && <strong className="text-slate-900 dark:text-slate-100 font-bold">{item.label}</strong>}
                  {item.label && " — "}
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Metric Definition Governance */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Metric Definition Governance
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-snug">
              A metric is a versioned contract
            </h3>
          </div>

          {/* Card: Definition list */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <h4 className="text-slate-900 dark:text-slate-100 font-bold text-base font-sans">
              Every definition carries
            </h4>
            <ul className="flex flex-col gap-2.5">
              {governanceItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2" />
                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {item.label && <strong className="text-slate-900 dark:text-slate-100 font-bold">{item.label}</strong>}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Callout Box */}
          <div className="p-5 sm:p-6 bg-slate-100/80 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3.5">
            <div className="p-1 rounded bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-normal leading-relaxed font-sans">
              <strong className="font-extrabold text-slate-900 dark:text-slate-50">A definition change creates a comparability break</strong>, marked on every trend that crosses it. Prior values are not silently restated under a new definition, and the break is visible rather than smoothed.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}