import React from "react";

const decisionData = [
  {
    score: "90 – 100",
    scoreColor: "text-teal-600",
    meaning:
      "All signals aligned — identity confirmed, session intact, device trusted, location consistent.",
    action: "✓ Accept as Valid",
    badge: "bg-emerald-50 text-teal-700",
  },
  {
    score: "70 – 89",
    scoreColor: "text-amber-600",
    meaning:
      "One or more signals below threshold — anomaly present but within review range, human judgement required.",
    action: "⚑ Flag for Review",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    score: "Below 70",
    scoreColor: "text-red-500",
    meaning:
      "Significant verification failure — multiple signals compromised, manipulation risk assessed as high.",
    action: "🚫 Escalate / Restrict",
    badge: "bg-red-50 text-red-800",
  },
];

export default function Decision() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            Decision Engine
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            From Signals to Decisions
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            ZoikoTime does not just observe — it decides. Every confidence
            score maps to an automated decision outcome that protects payroll,
            compliance, and audit integrity.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-14 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 lg:block">
          <div className="grid grid-cols-[160px_1fr_240px] bg-slate-100 dark:bg-slate-900">
            <div className="border-b border-slate-200 px-7 py-6 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-slate-700">
              Score Range
            </div>

            <div className="border-b border-slate-200 px-7 py-6 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-slate-700">
              Meaning
            </div>

            <div className="border-b border-slate-200 px-7 py-6 text-xs font-bold uppercase tracking-wider text-slate-500 dark:border-slate-700">
              System Action
            </div>
          </div>

          {decisionData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[160px_1fr_240px] border-b border-slate-200 last:border-0 dark:border-slate-700"
            >
              <div
                className={`px-7 py-8 text-lg font-bold ${item.scoreColor}`}
              >
                {item.score}
              </div>

              <div className="px-7 py-8 text-slate-700 dark:text-slate-300">
                {item.meaning}
              </div>

              <div className="flex items-center px-7 py-8">
                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${item.badge}`}
                >
                  {item.action}
                </span>
              </div>
            </div>
          ))}

          <div className="border-t border-teal-600/20 bg-emerald-50 px-7 py-5 dark:bg-teal-900/20">
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
              Decision thresholds are configurable by role, jurisdiction, and
              risk profile — the system adapts to your organisational policy,
              not the reverse.
            </p>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="mt-12 space-y-6 lg:hidden">
          {decisionData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
            >
              <div className={`text-xl font-bold ${item.scoreColor}`}>
                {item.score}
              </div>

              <p className="mt-4 text-slate-600 dark:text-slate-300">
                {item.meaning}
              </p>

              <span
                className={`mt-5 inline-block rounded-full px-4 py-2 text-sm font-semibold ${item.badge}`}
              >
                {item.action}
              </span>
            </div>
          ))}

          <div className="rounded-xl border border-teal-600/20 bg-emerald-50 p-5 dark:bg-teal-900/20">
            <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
              Decision thresholds are configurable by role, jurisdiction, and
              risk profile — the system adapts to your organisational policy,
              not the reverse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}