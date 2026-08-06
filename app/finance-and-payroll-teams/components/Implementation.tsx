// components/Implementation.tsx

import React from "react";

const implementationSteps = [
  {
    step: "1",
    title: "Discover & map",
    description:
      "Confirm workforce groups, pay groups, periods, cut-offs, policies, roles, systems, consultation requirements, export fields, and success measures.",
    evidence:
      "Exit evidence: approved scope · data map · calendar · risk & dependency log",
  },
  {
    step: "2",
    title: "Configure & integrate",
    description:
      "Configure policy profiles, permissions, review routes, required fields, mappings, validations, notifications, and support ownership.",
    evidence:
      "Exit evidence: configuration review · test identities · mapping version · security approval",
  },
  {
    step: "3",
    title: "Pilot & parallel validate",
    description:
      "Run a representative pay group through capture, review, export, and reconciliation alongside the current process.",
    evidence:
      "Exit evidence: pilot scorecard · defect log · user acceptance · reconciliation sign-off · go-live decision",
  },
  {
    step: "4",
    title: "Roll out & operate",
    description:
      "Sequence groups, train reviewers and workers, communicate review rights, monitor exports, review close metrics, and govern policy changes.",
    evidence:
      "Exit evidence: operational runbook · support model · close review · customer-success plan",
  },
];

export default function Implementation() {
  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Implementation
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-5xl">
            A controlled payroll transformation — not a software toggle
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Calendar mapping, data, policies, worker communication, parallel
            validation, cut-over, and ongoing ownership.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 space-y-6">
          {implementationSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                {/* Step Number */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-800 text-base font-bold text-white dark:bg-teal-500 dark:text-slate-900">
                  {item.step}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-slate-400">
                    {item.description}
                  </p>

                  <p className="mt-4 text-sm font-medium text-teal-700 dark:text-teal-400">
                    {item.evidence}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}