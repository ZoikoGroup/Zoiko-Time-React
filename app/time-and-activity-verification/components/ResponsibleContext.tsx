import React from "react";

const cards = [
  {
    title: "Configurable by policy",
    description:
      "Customers control what context is captured, for whom, and under what policy.",
  },
  {
    title: "Transparent to workers",
    description:
      "Workers understand relevant tracking, context, and review processes.",
  },
  {
    title: "Governed by permissions",
    description:
      "Only authorized users see activity context, analytics, and evidence.",
  },
  {
    title: "Context-aware",
    description:
      "Context supports understanding work sessions — not automatic judgment.",
  },
  {
    title: "Review-based",
    description:
      "Signals support human review rather than automated outcomes.",
  },
  {
    title: "Redaction-supported",
    description:
      "Sensitive or irrelevant information can be reduced through redaction where supported.",
  },
];

export default function ResponsibleContext() {
  return (
    <section className="bg-white dark:bg-slate-950 py-16 px-6">
      <div className="max-w-[1180px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Responsible Context
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Activity context without surveillance
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base leading-7 text-gray-500 dark:text-gray-400">
            Activity data should support review — not create a culture of
            constant suspicion.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm p-7 min-h-[170px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 max-w-[760px] mx-auto rounded-xl border border-orange-200 dark:border-orange-700 bg-yellow-50 dark:bg-yellow-950/30 p-5 flex items-start gap-4">
          {/* Info Icon */}
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-yellow-700 dark:border-yellow-400 text-yellow-700 dark:text-yellow-300 text-xs font-bold">
            !
          </div>

          <p className="text-sm leading-6 text-yellow-800 dark:text-yellow-300">
            <span className="font-bold text-yellow-900 dark:text-yellow-100">
              ZoikoTime verifies workforce records.
            </span>{" "}
            It should not be positioned as a covert monitoring tool.
            Explore{" "}
            <span className="font-semibold text-teal-700 dark:text-teal-400 cursor-pointer hover:underline">
              Screenshots &amp; Redaction Controls
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}