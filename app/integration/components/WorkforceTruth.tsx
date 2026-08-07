import React from "react";

const cards = [
  {
    title: "Validate",
    description:
      "Source availability, mapping, context category, permissions, policy, jurisdiction, effective date, duplicate or conflict, review requirement, destination eligibility.",
  },
  {
    title: "Classify where applicable",
    description:
      "Deterministic classification uses documented policy and jurisdiction rules and stays reviewable. Communication context alone never forces a classification.",
  },
  {
    title: "Review and approve",
    description:
      "Worker and authorized reviewer visibility, correction, and approval apply according to the affected ZoikoTime workflow and policy.",
  },
  {
    title: "Evidence and output",
    description:
      "The Evidence Ledger preserves relevant source, mapping, review, changes, decisions, approvals, exceptions, and downstream package status.",
  },
  {
    title: "Shared responsibility",
    description:
      "Sema source quality, organization configuration, mapping, policy, human review, ZoikoTime controls, downstream systems, and professional obligations remain distinct responsibilities.",
  },
  {
    title: "Boundary",
    description:
      "The bridge supports context and coordination. It does not guarantee accurate payroll, legal compliance, complete communication interpretation, or the absence of disputes.",
    highlight: true,
  },
];

export default function WorkforceTruth() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Workforce Truth &amp; Approved Context Signals
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            What Happens on the ZoikoTime Side
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
            Approved context arrives or is referenced with its source,
            mapping, purpose, category, policy, version, review status,
            and authorization metadata — then goes through the same
            controls as any other input.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                      {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {cards[0].title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {cards[0].description}
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {cards[1].title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {cards[1].description}
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {cards[2].title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {cards[2].description}
            </p>
          </div>
                    {/* Card 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {cards[3].title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {cards[3].description}
            </p>
          </div>

          {/* Card 5 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {cards[4].title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {cards[4].description}
            </p>
          </div>

          {/* Card 6 */}
          <div
            className={`rounded-2xl border p-6 shadow-sm transition hover:shadow-md ${
              cards[5].highlight
                ? "border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800"
                : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
            }`}
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {cards[5].title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {cards[5].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}