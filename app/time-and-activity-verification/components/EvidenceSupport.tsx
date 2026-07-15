import React from "react";

const evidenceItems = [
  {
    title: "Audit trails",
    description:
      "Preserve creation, changes, approvals, corrections, comments, and exports where supported.",
  },
  {
    title: "Correction history",
    description:
      "Track every correction request and outcome.",
  },
  {
    title: "Evidence packages",
    description:
      "Assemble structured records for review, audits, disputes, or legal requests.",
  },
  {
    title: "Access & export controls",
    description:
      "Respect role-based permissions, redaction, retention, and legal hold.",
  },
];

export default function EvidenceSupport() {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 px-6">
      <div className="max-w-[1180px] mx-auto">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Evidence
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-white">
            Evidence that supports better workforce
            <br className="hidden md:block" />
            decisions
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-base leading-7 text-gray-500 dark:text-gray-400">
            When records are used for payroll, billing, compliance,
            or disputes, organizations need traceable evidence —
            not just dashboard summaries.
          </p>
        </div>

        {/* Evidence List */}
        <div className="mt-14 max-w-4xl space-y-8">
          {evidenceItems.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold text-gray-700 dark:text-gray-200">
                {item.title}
              </h3>

              <p className="mt-2 text-base leading-7 text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Related Link */}
        <div className="mt-12 text-center">
          <span className="text-gray-500 dark:text-gray-400">
            Related:{" "}
          </span>

          <button
            type="button"
            className="font-semibold text-teal-700 dark:text-teal-400 hover:underline transition-colors"
          >
            View Audit-Grade Evidence →
          </button>
        </div>

      </div>
    </section>
  );
}