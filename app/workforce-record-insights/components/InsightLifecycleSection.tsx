import React from 'react';

interface LifecycleStage {
  step: string;
  title: string;
  description: string;
  meta: string;
  isHighlighted?: boolean;
}

const lifecycleData: LifecycleStage[] = [
  {
    step: "01",
    title: "Define",
    description:
      "Approved metric definition, purpose, owner, source requirements, inclusion and exclusion, units, privacy threshold, review cadence.",
    meta: "Definition version · owner · review date",
  },
  {
    step: "02",
    title: "Aggregate",
    description:
      "Collect only permissioned record facts matching definition and scope; apply minimization and privacy thresholds.",
    meta: "Record set · coverage · threshold result",
  },
  {
    step: "03",
    title: "Contextualize",
    description:
      "Attach policy, jurisdiction, schedule, time zone, organizational scope, definition version, comparison compatibility.",
    meta: "Context bundle · comparability state",
  },
  {
    step: "04",
    title: "Explain",
    description:
      "Present value, calculation, lineage, trend, completeness, freshness, conflicts, and limitations in plain language.",
    meta: "Calculation trace · accessible summary",
  },
  {
    step: "05",
    title: "Review",
    description:
      "An authorized person inspects context, annotates, requests correction, assigns follow-up, or records no action.",
    meta: "Human only · reviewer role · reason · audit",
    isHighlighted: true,
  },
  {
    step: "06",
    title: "Preserve / share",
    description:
      "Preserve insight version, definition version, filters, limitations, annotations, and governed sharing manifest.",
    meta: "Evidence references · manifest",
  },
];

export default function InsightLifecycleSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Header Section */}
        <div className="max-w-3xl flex flex-col items-center text-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-bold uppercase tracking-wider font-sans">
            Complete Insight Lifecycle
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
            Define → Aggregate → Contextualize → <br className="hidden sm:inline" />
            Explain → Review → Preserve
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans">
            Six stages, each with visible proof. There is no seventh stage.
          </p>
        </div>

        {/* Lifecycle Table / Card List */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
          {lifecycleData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center transition-colors ${
                item.isHighlighted
                  ? 'bg-emerald-50/50 dark:bg-emerald-950/20'
                  : 'hover:bg-slate-50/80 dark:hover:bg-slate-800/40'
              }`}
            >
              {/* Step Number */}
              <div className="w-full md:w-16 py-3 px-4 md:py-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 flex items-center justify-start md:justify-center">
                <span
                  className={`text-xs font-extrabold font-sans ${
                    item.isHighlighted
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-400 dark:text-slate-500'
                  }`}
                >
                  {item.step}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 p-4 sm:p-5 flex flex-col gap-1">
                <h3 className="text-sm sm:text-base font-bold font-sans text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-normal leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Meta details */}
              <div className="w-full md:w-56 p-4 sm:p-5 border-t md:border-t-0 md:border-l border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 md:bg-transparent">
                <span
                  className={`text-xs font-sans leading-relaxed ${
                    item.isHighlighted
                      ? 'text-emerald-700 dark:text-emerald-400 font-bold'
                      : 'text-slate-500 dark:text-slate-400 font-normal'
                  }`}
                >
                  {item.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout Box */}
        <div className="w-full max-w-4xl p-4 sm:p-5 rounded-xl bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 flex flex-col gap-1.5">
          <span className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wider font-sans">
            No hidden stage
          </span>
          <p className="text-rose-800 dark:text-rose-300/90 text-xs sm:text-sm font-normal leading-relaxed font-sans">
            There is no hidden &quot;score the worker,&quot; &quot;predict behavior,&quot; or &quot;decide outcome&quot; stage in this lifecycle. Any consequential use requires separate authorized human review under approved policy and purpose.
          </p>
        </div>

      </div>
    </section>
  );
}