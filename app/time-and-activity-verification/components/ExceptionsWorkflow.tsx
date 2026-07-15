import React from "react";

const exceptionCards = [
  {
    title: "Missing time entries",
    description:
      "Surface missed clock-ins/outs, incomplete breaks, and unsubmitted time.",
  },
  {
    title: "Time edits",
    description:
      "Track corrections, change history, and review comments.",
  },
  {
    title: "Idle or inactive periods",
    description:
      "Flag idle context for review — not automatic judgment.",
  },
  {
    title: "Policy exceptions",
    description:
      "Surface schedule, break, overtime, or customer-defined exceptions.",
  },
  {
    title: "Manager review",
    description:
      "Give managers a clear queue and context to review fairly.",
  },
  {
    title: "Worker clarification",
    description:
      "Let workers explain or request corrections through a governed pathway.",
  },
  {
    title: "Approval history",
    description:
      "Preserve who approved, rejected, or escalated, and when.",
  },
  {
    title: "Escalation pathways",
    description:
      "Route unresolved items to HR, finance, legal, or administrators.",
  },
];

export default function ExceptionsWorkflow() {
  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-[1180px] mx-auto">

        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Exceptions
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Turn exceptions into reviewable workflows
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base leading-7 text-gray-500 dark:text-gray-400">
            Not every unusual record is a problem — missing clock-outs,
            idle time, or edits may have legitimate explanations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exceptionCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm p-6 min-h-[180px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-base font-bold leading-7 text-gray-500 dark:text-gray-300">
            ZoikoTime helps organizations review exceptions fairly,
            consistently, and
            <br className="hidden md:block" />
            with context.
          </p>
        </div>
      </div>
    </section>
  );
}