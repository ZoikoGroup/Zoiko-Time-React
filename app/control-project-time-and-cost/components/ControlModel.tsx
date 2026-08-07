"use client";

const steps = [
  {
    title: "Capture approved time",
    description:
      "Reuse fair, approved time records with source, provenance, and worker-visible history.",
  },
  {
    title: "Apply cost & rate rules",
    description:
      "Transform effort with versioned, effective-dated internal cost rates, currency, and rounding—disclosed, not hidden.",
  },
  {
    title: "Allocate to projects",
    description:
      "Assign time to project, phase, task, or cost code with versioned, append-only allocations.",
  },
  {
    title: "Compare to budget",
    description:
      "Measure approved actuals against baseline budget and approved changes by dimension and period.",
  },
  {
    title: "Forecast & explain variance",
    description:
      "Project outcome vs. budget and attribute variance to scope, mix, timing, rate, or data quality.",
  },
  {
    title: "Route exceptions",
    description:
      "Send unapproved time, missing rates, or budget mismatches to the authorized owner—never auto-judged.",
  },
  {
    title: "Close & improve",
    description:
      "Lock periods, preserve evidence, handle late entries, and analyze recurring causes.",
  },
];

export default function ControlModel() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            The Control Model
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Seven governed steps from time to
            <br className="hidden sm:block" />
            reconciliation
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Capture → cost rules → allocate → budget → forecast → route
            exceptions → close & improve.
          </p>
        </div>

        {/* Timeline */}
        <div className="mx-auto mt-14 max-w-5xl">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Timeline */}
              <div className="relative flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-emerald-400 text-base font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                {index !== steps.length - 1 && (
                  <div className="mt-2 h-full w-0.5 bg-emerald-200 dark:bg-emerald-900" />
                )}
              </div>

              {/* Card */}
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}