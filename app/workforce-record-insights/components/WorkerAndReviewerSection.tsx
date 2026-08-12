import React from 'react';

const workerCanSee = [
  "The applicable own-record insight and its plain-language explanation",
  "Which metric definition and version applied",
  "Supporting records, where permission allows",
  "Data-quality and limitation context",
  "Current review state",
];

const workerCanDo = [
  "Request a correction with a reason",
  "Track the request status",
  "Escalate where a correction is declined",
  "Ask for an explanation of the definition",
  "Reach privacy or support",
];

const reviewerCanDo = [
  "Inspect definition, scope, context, and quality before acting",
  "Annotate with an attributable note linked to the insight version",
  "Request a correction on an underlying record",
  "Assign a follow-up with a role and due date",
  'Record "no action" as a legitimate outcome',
];

const reviewStates = [
  { label: "Informational", style: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/60" },
  { label: "Needs review", style: "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border-amber-200/60 dark:border-amber-800/60" },
  { label: "Under review", style: "bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border-sky-200/60 dark:border-sky-800/60" },
  { label: "Resolved", style: "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200/60 dark:border-emerald-800/60" },
  { label: "Superseded", style: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700" },
  { label: "Unavailable", style: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700" },
];

export default function WorkerAndReviewerSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        
        {/* Left Column: Worker Visibility & Own-Record Insight */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Worker Visibility &amp; Own-Record Insight
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
              A Core Capability, Not a Legal<br className="hidden sm:inline" /> Footnote
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans max-w-xl">
              Where an insight applies to a worker&apos;s own records, that worker can understand it, inspect what supports it, and challenge it.
            </p>
          </div>

          {/* Side-by-Side Cards on Desktop, Stacking on Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* What a worker can see */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
              <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
                What a worker can see
              </h3>
              <ul className="flex flex-col gap-2.5">
                {workerCanSee.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What a worker can do */}
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
              <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
                What a worker can do
              </h3>
              <ul className="flex flex-col gap-2.5">
                {workerCanDo.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* No Secret Labels Alert Box */}
          <div className="p-4 sm:p-5 bg-rose-50/60 dark:bg-rose-950/20 rounded-xl border border-rose-200/80 dark:border-rose-900/40 flex flex-col gap-1">
            <span className="text-rose-700 dark:text-rose-400 text-xs font-bold font-sans uppercase tracking-wider">
              No secret labels
            </span>
            <p className="text-rose-900 dark:text-rose-200/90 text-xs sm:text-sm font-sans leading-relaxed">
              Workers are never silently assigned to a cohort used as a judgment, and there is no manager-only score or hidden label about any individual. If cohort context informs an own-record view, the worker can see that it did.
            </p>
          </div>
        </div>

        {/* Right Column: Authorized Manager & Reviewer Experience */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
              Authorized Manager &amp; Reviewer Experience
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-snug">
              Accountable annotation, no rankings
            </h2>
          </div>

          {/* Card: What a reviewer can do */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3.5">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
              What a reviewer can do
            </h3>
            <ul className="flex flex-col gap-2.5">
              {reviewerCanDo.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-sans leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card: Review states */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
              Review states
            </h3>

            {/* Badges Flow Layout */}
            <div className="flex flex-wrap gap-2">
              {reviewStates.map((state, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-bold font-sans border ${state.style}`}
                >
                  {state.label}
                </span>
              ))}
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed pt-1">
              An annotation is a note on an insight version — never a hidden label on a person. Leadership views aggregate where individual detail is unnecessary.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}