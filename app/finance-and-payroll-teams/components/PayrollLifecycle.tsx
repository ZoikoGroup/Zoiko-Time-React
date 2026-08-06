import React from "react";

const lifecycleSteps = [
  {
    id: 1,
    title: "Capture",
    description:
      "A worker records time and approved context through desktop, mobile, or organization workflows.",
    highlight:
      "In-progress record · schedule/project context · device type only if disclosed",
  },
  {
    id: 2,
    title: "Classify",
    description:
      "ZoikoTime applies configured, deterministic policy rules to time, attendance, breaks, allocation, and record state.",
    highlight:
      "Rule result and applicable policy version — no probability, no confidence score",
  },
  {
    id: 3,
    title: "Flag",
    description:
      "Missing or conflicting context is surfaced with a neutral status for review.",
    highlight:
      "e.g. 'Unverified Exit — Pending Review', missing project code, post-approval change",
  },
  {
    id: 4,
    title: "Review",
    description:
      "The assigned worker, manager, or payroll reviewer supplies context, corrects, or returns the record.",
    highlight:
      "Comments · reason · prior value · owner · timestamp · review state",
  },
  {
    id: 5,
    title: "Approve",
    description:
      "The authorized reviewer approves; changes after approval require visible control and reapproval.",
    highlight:
      "Approval lineage · effective policy · complete change history",
  },
  {
    id: 6,
    title: "Export",
    description:
      "Approved fields are validated and delivered to the configured payroll, ERP, billing, or data workflow.",
    highlight:
      "Mapping version · export ID · delivery status · validation result · retry evidence",
  },
];

export default function PayrollLifecycle() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            The Record Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            From work event to payroll-ready record
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 dark:text-slate-400">
            Six controlled steps so you can see exactly where policy,
            evidence, worker input, human review, approval, and export
            occur.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="mt-14 space-y-6">
          {lifecycleSteps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                {/* Number */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-800 text-lg font-bold text-white dark:bg-slate-700">
                  {step.id}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-slate-400">
                    {step.description}
                  </p>

                  <div className="mt-4 rounded-lg bg-teal-50 px-4 py-3 text-sm font-medium text-teal-700 dark:bg-teal-900/20 dark:text-teal-300">
                    {step.highlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
                {/* Deterministic Boundary */}
        <div className="mt-16 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 dark:border-emerald-900/30 dark:bg-emerald-900/10">
          <p className="text-center text-sm leading-8 text-slate-700 dark:text-slate-300 sm:text-base">
            <span className="font-bold text-slate-800 dark:text-white">
              The deterministic boundary.
            </span>{" "}
            Deterministic classification produces a rule-bound result.
            Signal-quality or anomaly models, where used, are separate and may
            only surface a record for human review — they cannot decide
            compensation, discipline a worker, or alter an approved record.
          </p>
        </div>
      </div>
    </section>
  );
}