const outcomes = [
  {
    title: "Timesheet completion",
    description:
      "Percentage of required records completed by the policy deadline.",
  },
  {
    title: "Approval cycle time",
    description:
      "Time from record submission or exception to approved status.",
  },
  {
    title: "Open exception volume",
    description:
      "Records pending worker, manager, or HR action by age and reason.",
  },
  {
    title: "Payroll correction rate",
    description:
      "Approved records changed after payroll preparation or export.",
  },
  {
    title: "Dispute resolution time",
    description:
      "Time from worker question or correction request to resolved record.",
  },
  {
    title: "Break-policy exceptions",
    description: "Configured break or rest exceptions requiring review.",
  },
  {
    title: "Worker review participation",
    description:
      "Records viewed, acknowledged, commented on, or corrected through the configured process.",
  },
];

export default function MeasurableOutcomes() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-20 pt-10 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              Define Success
            </p>
          </div>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Measurable HR Outcomes
          </h2>

        </div>

        {/* Outcome Cards */}
        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {outcomes.map((outcome) => (
            <div
              key={outcome.title}
              className="flex flex-col gap-6 rounded-2xl border border-green-100 bg-[#F0FBF6] px-5 py-8 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                {outcome.title}
              </h3>

              <p className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {outcome.description}
              </p>

            </div>
          ))}

        </div>

        {/* Footer Note */}
        <p className="mx-auto mt-7 max-w-[640px] text-center text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
          We use &quot;measure,&quot; &quot;monitor,&quot; and &quot;reduce
          avoidable rework&quot; rather than guaranteed savings or compliance.
          Any quantified outcome requires a named methodology and approved
          evidence.
        </p>

      </div>
    </section>
  );
}
