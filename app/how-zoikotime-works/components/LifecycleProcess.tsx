import React from "react";

export default function LifecycleProcess() {
  const steps = [
    {
      number: "1",
      title: "Capture",
      description:
        "Documented time, attendance, approval, policy, jurisdiction & approved integration signals.",
    },
    {
      number: "2",
      title: "Classify",
      description:
        "Deterministic, policy-bound, jurisdiction-aware, reviewable rules.",
    },
    {
      number: "3",
      title: "Review",
      description:
        "Neutral states, worker visibility, correction, authorized human review.",
    },
    {
      number: "4",
      title: "Approve",
      description:
        "Authorized approval, correction, rejection or escalation — with reason & history.",
    },
    {
      number: "5",
      title: "Export & Defend",
      description:
        "Governed version delivered to approved workflows, with status & evidence.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            The Lifecycle
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            One map: Capture → Classify → Review
            Approve → Export &amp; Defend
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300">
            A persistent record &amp; evidence spine and a
            shared-responsibility spine run beneath every stage — sources,
            records, people, policy, evidence, outputs, and responsibility stay
            connected.
          </p>
        </div>

        {/* Steps */}
<div className="mt-12">
  <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-3">
    {steps.map((step, index) => (
      <React.Fragment key={step.number}>
        {/* Card */}
        <div className="relative flex w-full max-w-sm flex-col items-center overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-5 shadow-[0_6px_18px_rgba(14,31,61,0.05)] transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 lg:w-44 lg:min-w-[176px]">
          {/* Top Accent */}
          <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-600 to-slate-800" />

          {/* Number */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 text-base font-bold text-white shadow-lg shadow-teal-600/30">
            {step.number}
          </div>

          {/* Title */}
          <h3 className="mt-5 text-center text-sm font-semibold text-slate-900 dark:text-white">
            {step.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-center text-xs leading-5 text-slate-600 dark:text-slate-300">
            {step.description}
          </p>
        </div>

        {/* Arrow */}
        {index < steps.length - 1 && (
          <>
            {/* Mobile */}
            <div className="flex lg:hidden">
              <span className="text-2xl font-bold text-teal-600">↓</span>
            </div>

            {/* Desktop */}
            <div className="hidden lg:flex items-center px-1">
              <span className="text-2xl font-bold text-teal-600">→</span>
            </div>
          </>
        )}
      </React.Fragment>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}