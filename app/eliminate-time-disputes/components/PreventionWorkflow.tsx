"use client";

const steps = [
  {
    number: "1",
    title: "Capture with provenance",
    description: (
      <>
        Record source, device, and context at
        <br className="hidden sm:block" /> capture — not after the fact.
      </>
    ),
  },
  {
    number: "2",
    title: "Classify by policy",
    description: (
      <>
        Apply the deterministic, versioned
        <br className="hidden sm:block" /> policy and show which rule fired.
      </>
    ),
  },
  {
    number: "3",
    title: "Explain in plain language",
    description: (
      <>
        Surface the policy reason a worker
        <br className="hidden sm:block" /> and reviewer can both understand.
      </>
    ),
  },
  {
    number: "4",
    title: "Confirm early",
    description: (
      <>
        Give workers a chance to confirm or
        <br className="hidden sm:block" /> note before it ever becomes a
        <br className="hidden sm:block" /> dispute.
      </>
    ),
  },
];

export default function PreventionWorkflow() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Eyebrow */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Prevention Workflow
        </div>

        {/* Heading */}
        <div className="w-full max-w-[820px] pb-0.5 text-center">
          <h2 className="text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Prevent disputes before they start
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[680px] pt-0.5 text-center">
          <p className="text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Capture with context, classify by policy, explain in plain
            language, and confirm
            <br className="hidden sm:block" /> early.
          </p>
        </div>

        {/* Workflow */}
        <div className="w-full max-w-[1000px] pt-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex min-h-[144px] flex-col items-center px-3"
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[calc(50%+22px)] right-[-50%] top-[22px] hidden h-0.5 bg-emerald-100 dark:bg-emerald-900/60 lg:block" />
                )}

                {/* Number */}
                <div className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-teal-700 shadow-[0px_8px_16px_rgba(16,162,141,0.30)]">
                  <span className="text-base font-bold leading-6 text-white">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <div className="pt-2 text-center">
                  <h3 className="text-sm font-semibold leading-6 text-slate-800 dark:text-slate-200">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="text-center">
                  <p className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}