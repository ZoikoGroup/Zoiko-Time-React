import React from "react";

const rights = [
  {
    article: "Article 15",
    title: "Right of Access",
    description:
      "Structured data access export — all personal data processed for a specific data subject, formatted for immediate provision to the data subject in a readable format.",
  },
  {
    article: "Article 16",
    title: "Right to Rectification",
    description:
      "Correction workflow for inaccurate personal data — controlled update process with audit trail confirming the rectification and the original data state prior to amendment.",
  },
  {
    article: "Article 17",
    title: "Right to Erasure",
    description:
      "Targeted deletion capability — specific data subject records erasable on instruction, with deletion confirmation record and exemption management for data subject to legal hold obligations.",
  },
  {
    article: "Article 18",
    title: "Right to Restriction",
    description:
      "Restriction flag applied to specified records — data retained but processing halted pending the resolution of a contest or objection, with restriction event logged to the audit trail.",
  },
  {
    article: "Article 20",
    title: "Right to Portability",
    description:
      "Structured data export in machine-readable format (JSON, CSV) — covering all data provided by or about the data subject, formatted for transmission to an alternative controller.",
  },
  {
    article: "Article 21",
    title: "Right to Object",
    description:
      "Objection workflow with assessment documentation — controller-side review process with outcome documentation, and restriction of processing pending review where required.",
  },
];

export default function DataSubjectRights() {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Enabling You to Fulfil Rights Requests Efficiently
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 dark:text-slate-400">
            ZoikoTime provides the tools to respond to all GDPR Chapter III
            data subject rights requests — with structured workflows,
            automated data extraction, and documented response audit trails.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {rights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-7 min-h-[220px]"
            >

              <div className="text-teal-600 text-xs font-bold uppercase tracking-wide mb-5">
                {item.article}
              </div>


              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-5">
                {item.title}
              </h3>


              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}