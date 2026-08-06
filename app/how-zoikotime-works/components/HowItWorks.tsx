export default function HowItWorks() {
  const steps = [
    "Capture",
    "Classify",
    "Review",
    "Approve",
    "Export & Defend",
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-slate-950 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center">
          {/* Badge */}
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            In One Answer
          </p>

          {/* Heading */}
          <h2 className="mt-3 text-center text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            How ZoikoTime works
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-center text-base leading-8 text-slate-600 dark:text-slate-300">
            ZoikoTime begins with documented time, attendance, approval,
            policy, jurisdiction, and approved integration signals. It
            applies deterministic, reviewable rules; presents neutral
            states for worker and authorized human review; records
            approvals, corrections, and evidence; and delivers governed
            record versions to approved payroll, billing, reporting, or
            audit workflows. Human authority and shared responsibility
            remain controlling throughout.
          </p>

          {/* Steps */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {steps.map((step) => (
              <div
                key={step}
                className="rounded-[10px] border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-400"
              >
                {step}
              </div>
            ))}
          </div>

          {/* Notice */}
          <div className="mt-10 w-full max-w-4xl rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-4 dark:border-emerald-900 dark:bg-emerald-950/30">
            <p className="text-center text-sm leading-6 text-slate-700 dark:text-slate-300">
              ZoikoTime does not guarantee payroll accuracy, legal
              compliance, legal admissibility, or correct outcomes in
              every configuration or jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}