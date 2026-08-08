"use client";

const steps = [
  {
    title: "Submitted",
    description: (
      <>
        Record captured with
        <br />
        source &amp; provenance.
      </>
    ),
    role: "Worker / system",
  },
  {
    title: "Flagged",
    description: (
      <>
        Policy applied; discrepancy
        <br />
        surfaced.
      </>
    ),
    role: "Deterministic rule",
  },
  {
    title: "Participated",
    description: (
      <>
        Worker adds a note or
        <br />
        correction request.
      </>
    ),
    role: "Worker",
  },
  {
    title: "Reviewed",
    description: (
      <>
        Reviewer weighs evidence
        <br />
        &amp; policy.
      </>
    ),
    role: "Reviewer",
  },
  {
    title: "Decided",
    description: (
      <>
        Accountable decision,
        <br />
        reason recorded.
      </>
    ),
    role: "Human authority",
  },
  {
    title: "Preserved",
    description: (
      <>
        Full evidence trail
        <br />
        retained.
      </>
    ),
    role: "Evidence Ledger",
  },
];

export default function ResolutionWorkflow() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Label */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Resolution Workflow
        </div>

        {/* Heading */}
        <h2 className="w-full max-w-[820px] text-center text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
          From flag to preserved evidence
        </h2>

        {/* Description */}
        <p className="w-full max-w-[680px] text-center text-base leading-7 text-gray-500 dark:text-slate-400">
          A transparent path where a human decides and the full trail is
          preserved.
        </p>

        {/* Workflow */}
        <div className="w-full max-w-[1080px] overflow-x-auto pt-5 pb-4 sm:pt-8">
          <div className="flex min-w-[900px] items-start">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex min-w-[150px] flex-1 flex-col items-center px-2.5"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-[7px] h-0.5 w-full bg-emerald-100 dark:bg-emerald-900" />
                )}

                {/* Step indicator */}
                <div className="relative z-10 size-4 rounded-full border-[3px] border-emerald-50 bg-green-400 dark:border-emerald-950 dark:bg-teal-500" />

                {/* Title */}
                <div className="pt-2 text-center text-xs font-bold leading-5 text-slate-800 dark:text-white">
                  {step.title}
                </div>

                {/* Description */}
                <div className="mt-0.5 text-center text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  {step.description}
                </div>

                {/* Role */}
                <div className="mt-1 min-h-4 text-center text-xs font-semibold leading-4 text-teal-700 dark:text-teal-400">
                  {step.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <div className="w-full max-w-[900px] rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-900/50 dark:bg-emerald-950/30">
          <p className="text-center text-sm leading-5 text-slate-800 dark:text-slate-200">
            ZoikoTime reduces{" "}
            <span className="font-bold text-teal-700 dark:text-teal-400">
              avoidable
            </span>{" "}
            disputes and makes the rest fair and reviewable. It does not
            guarantee zero disputes, and every consequential decision stays
            with an authorized human.
          </p>
        </div>
      </div>
    </section>
  );
}