import React from "react";

const problems = [
  {
    icon: "📊",
    title: "No System of Record",
    description:
      "Multiple conflicting datasets across HR systems, time tools, and productivity platforms create inconsistency that cannot withstand legal challenge—no single source of verifiable truth exists.",
  },
  {
    icon: "🔓",
    title: "Weak Integrity",
    description:
      "Logs that can be edited, overwritten, or accessed without audit trails have zero evidentiary value. Without tamper-evidence and integrity verification, data is not proof—it is opinion.",
  },
  {
    icon: "⚖️",
    title: "No Legal Admissibility",
    description:
      "Without traceable origin, context preservation, and chain of custody, workforce records cannot be used in legal proceedings, regulatory inspections, or formal dispute resolution processes.",
  },
];

export default function ProblemCards() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-teal-600"></div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
              The Problem
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Why Workforce Data Fails Under Legal and Audit Scrutiny
          </h2>

          <p className="mt-6 text-base md:text-lg leading-8 text-slate-600 dark:text-slate-300">
            Most organisations have data—but data is not evidence. When
            challenged, the absence of proof-grade records becomes an
            existential risk.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {problems.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm"
            >
              {/* Top Gradient */}
              <div className="h-1 w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              <div className="p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20 p-8">
          <p className="text-center text-lg font-semibold leading-8 text-slate-900 dark:text-white">
            Data without proof is not evidence. And{" "}
            <span className="font-bold">
              without evidence, decisions cannot be defended
            </span>{" "}
            — in court, in audit, or in any formal challenge.
          </p>
        </div>

      </div>
    </section>
  );
}