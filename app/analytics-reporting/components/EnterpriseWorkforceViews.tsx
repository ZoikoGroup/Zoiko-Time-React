const viewFamilies = [
  {
    title: "Approved time records",
    description:
      "Volume, status, period readiness, corrections, exceptions, evidence.",
    limit: "Not a productivity score.",
  },
  {
    title: "Timesheet & approval operations",
    description:
      "Submission, review, and approval status, aging, correction flow, bottlenecks.",
    limit: "No automatic blame.",
  },
  {
    title: "Attendance & presence states",
    description:
      "Configured record-state patterns and unresolved cases.",
    limit: "No hidden location surveillance.",
  },
  {
    title: "Break & rest context",
    description:
      "Configured policy support, review states, exceptions.",
    limit: "Not legal compliance certification.",
  },
  {
    title: "Shift integrity",
    description:
      "Released rule outcomes, conflicts, reviews, corrections.",
    limit: "An anomaly remains a prompt.",
  },
  {
    title: "Deterministic classification",
    description:
      "Classification distribution, policy version, review and correction, explainability.",
    limit: "Not branded or described as AI.",
  },
  {
    title: "Evidence readiness",
    description:
      "Records with required evidence, gaps, pending acknowledgements, export status.",
  },
  {
    title: "Integration health impact",
    description:
      "Source freshness, reconciliation, correction propagation, reporting exclusions.",
  },
  {
    title: "Administration & access",
    description:
      "Policy, role, and report ownership plus review status — at aggregate governance level only.",
  },
];

export default function EnterpriseWorkforceViews() {
  return (
    <section className="relative bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-10 px-6">

        {/* Section Header */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center">

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
            Enterprise Workforce Record Views
          </span>

          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
            Nine View Families, Each With Its Limit
            <br className="hidden md:block" />
            Written Down
          </h2>

          <p className="max-w-[645px] text-base leading-7 text-slate-600 dark:text-slate-300">
            The limit is part of the capability. It is stated on the card,
            not buried in documentation.
          </p>

        </div>

        {/* Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                      {viewFamilies.map((view, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Title */}
              <h3 className="text-lg font-bold leading-7 text-slate-900 dark:text-white">
                {view.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-base leading-7 text-slate-600 dark:text-slate-300">
                {view.description}
              </p>

              {/* Divider */}
              {view.limit && (
                <>
                  <div className="my-5 h-px w-full bg-slate-200 dark:bg-slate-700" />

                  <p className="text-sm font-medium leading-6 text-slate-500 dark:text-slate-400">
                    {view.limit}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Capability Gate */}
        <div className="w-full rounded-xl border border-teal-200 border-l-4 border-l-teal-500 bg-slate-50 px-6 py-5 dark:border-slate-700 dark:border-l-teal-400 dark:bg-slate-900/60">
          <span className="block text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Capability Gate
          </span>

          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            A view family appears only when the underlying capability,
            metric definition, permissions, privacy controls,
            documentation, and QA are all current and approved.
          </p>
        </div>
              </div>
    </section>
  );
}