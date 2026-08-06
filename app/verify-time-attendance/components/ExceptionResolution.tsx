const steps = [
  {
    title: "Notification",
    description:
      "States the exact issue, date/time, evidence considered, who can act, due date, and support route.",
  },
  {
    title: "Worker participation",
    description:
      "Worker adds context, attaches permitted evidence where supported, requests correction, and sees status and history.",
  },
  {
    title: "Reviewer authority",
    description:
      "Role-bound, least-privilege access; segregation of duties where required; no self-approval for sensitive cases.",
  },
  {
    title: "Decision",
    description:
      "Accept, correct, request more context, reassign, escalate, reject with rationale, or reopen under governed conditions.",
  },
  {
    title: "History",
    description:
      "Before/after values, rule version, actors, timestamps, comments, approvals, and export impact — all preserved.",
  },
];

export default function ExceptionResolution() {
  return (
    <section id="exception-resolution" className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Exception Resolution
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] dark:text-white sm:text-4xl">
            A controlled collaboration — not an automated punishment path
          </h2>

        </div>

        {/* Steps */}
        <div className="mx-auto mt-10 w-full max-w-[840px]">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-start gap-4 border-b border-[#E4E9EE] py-5 dark:border-slate-800"
            >

              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F6F2] text-[11px] font-bold leading-none text-[#0B8675] dark:bg-slate-900 dark:text-emerald-400">
                {index + 1}
              </span>

              <div className="min-w-0">

                <h3 className="text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-1 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
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
