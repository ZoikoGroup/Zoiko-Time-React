import React from "react";

const guarantees = [
  {
    icon: "🚫",
    title: "No session is accepted without identity validation",
    description:
      "Every session requires a verified identity signal before it is treated as valid — no exceptions, no defaults to assumed presence.",
  },
  {
    icon: "🎯",
    title: "Every session is assigned a confidence score",
    description:
      "A synthesised 0–100 confidence score is calculated for every session in real time — providing a single, actionable measure of session trustworthiness.",
  },
  {
    icon: "⚑",
    title: "Low-confidence activity is automatically flagged",
    description:
      "Sessions falling below policy-defined thresholds are flagged for review or escalated automatically — without requiring human initiation.",
  },
  {
    icon: "📂",
    title: "All sessions produce traceable evidence",
    description:
      "Every session — valid, flagged, or rejected — generates a tamper-evident evidence record with full context, confidence score, and AI reasoning attached.",
  },
];

export default function SystemGuarantees() {
  return (
    <section className="w-full bg-white py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            System Guarantees
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            What ZoikoTime Guarantees
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Four defensible, audit-facing commitments built into the system
            architecture — not policy statements.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Top Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              <div className="p-8">
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-lg dark:bg-teal-900/30">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-bold leading-6 text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}