// ProjectLaborAllocation.tsx

import React from "react";

const cards = [
  {
    title: "Project & task attribution",
    description: "Connect approved time to the delivered work.",
  },
  {
    title: "Billable / non-billable",
    description: "Apply configured rules and preserve review.",
  },
  {
    title: "Cost-center allocation",
    description:
      "Support finance reporting where the fields are available.",
  },
  {
    title: "Contractor & customer context",
    description:
      "Support services, agency, and contractor-heavy operations.",
  },
];

export default function ProjectLaborAllocation() {
  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Project &amp; Labor Allocation
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-4xl">
            Know where approved time belongs
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Capture and review the project, task, customer, billable status,
            engagement, or cost-code context your operating model requires —
            then include approved fields in downstream exports.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              <h3 className="text-lg font-semibold leading-7 text-slate-800 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mx-auto mt-14 max-w-5xl rounded-xl border border-emerald-200 bg-emerald-50 px-8 py-6 text-center transition-colors duration-300 dark:border-emerald-900 dark:bg-emerald-950/30">
          <p className="text-sm leading-6">
            <span className="font-bold text-teal-700 dark:text-teal-400">
              Allocation completeness
            </span>
            <span className="text-slate-800 dark:text-emerald-100">
              {" "}
              — the percentage of approved records containing the configured
              required fields.
              <br />
              ZoikoTime supplies controlled inputs; it does not replace the ERP,
              general ledger, PSA, or project-accounting system.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}