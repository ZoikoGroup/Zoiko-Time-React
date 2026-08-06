const approvedLabels = [
  "Needs review",
  "Unexpected pattern",
  "Data conflict",
  "Quality issue",
];

const prohibitedLabels = [
  "Fraud, misconduct, or abuse",
  "Low performer or top performer",
  "Suspicious worker",
  "Any accusatory label without an independent authorized finding",
];

const boundaryCards = [
  {
    title: "Reason code",
    description:
      "Explains the rule, comparison basis, source, metric version, and affected scope.",
    highlight: false,
  },
  {
    title: "Evidence",
    description:
      "Relevant records and provenance, visible only to authorized roles.",
    highlight: false,
  },
  {
    title: "Available actions",
    description:
      "Review, request context, correct, reconcile, dismiss with a reason, escalate, document the outcome.",
    highlight: false,
  },
  {
    title: "Worker rights",
    description:
      "Where relevant, visibility, correction, response, and escalation paths are preserved.",
    highlight: false,
  },
  {
    title: "Notification",
    description:
      "A purpose-limited recipient list. No public leaderboard and no shame-oriented alert.",
    highlight: false,
  },
  {
    title: "Telemetry",
    description:
      "Workflow events are counted. Anomaly values, names, and case text never enter telemetry.",
    highlight: true,
  },
];

export default function AnomalyReviewBoundaries() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-8 px-7">
        {/* Header */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
            Anomaly Review &amp; Alert Boundaries
          </span>

          <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
            An Anomaly Is a Review Signal, Not a
            <br className="hidden md:block" />
            Finding
          </h2>

          <p className="max-w-[645px] text-base leading-7 text-slate-600 dark:text-slate-300">
            The interface must not imply guilt, intent, poor performance,
            payroll error, legal breach, or a disciplinary outcome. The
            vocabulary is deliberately narrow.
          </p>
        </div>

        {/* Approved vs Never Used */}
        <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Approved Labels */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/20">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-600 font-bold text-emerald-600">
                ✓
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Approved labels
              </h3>
            </div>

            <div className="space-y-4">
              {approvedLabels.map((label) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 font-bold text-emerald-600">✓</span>

                  <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Never Used */}
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/40 dark:bg-red-950/20">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-red-600 font-bold text-red-600">
                ✕
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Never Used
              </h3>
            </div>

            <div className="space-y-4">
              {prohibitedLabels.map((label) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 font-bold text-red-600">✕</span>

                  <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                      {boundaryCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-6 transition-all duration-300 ${
                card.highlight
                  ? "border-emerald-200 bg-emerald-50 dark:border-emerald-900/40 dark:bg-emerald-950/20"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              }`}
            >
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>

              </div>
    </section>
  );
}