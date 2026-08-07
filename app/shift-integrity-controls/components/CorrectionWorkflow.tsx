const steps = [
  {
    title: "Record flagged",
    body: "A neutral exception state appears with the exact issue and who owns the next action.",
  },
  {
    title: "Worker adds context",
    body: "The worker explains what happened or requests a correction, visible to the assigned reviewer.",
  },
  {
    title: "Reviewer assesses",
    body: "An authorized reviewer accepts, corrects, requests more context, or escalates — never automated.",
  },
  {
    title: "Decision recorded",
    body: "Rationale, actor, and timestamp are preserved alongside the before/after values.",
  },
  {
    title: "Worker notified",
    body: "The outcome and updated status are visible on the worker's own record immediately.",
  },
];

export default function CorrectionWorkflow() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Correction Request Workflow
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            From flagged record to resolved outcome
          </h2>
        </div>

        <ol className="mx-auto mt-10 max-w-[820px]">
          {steps.map(({ title, body }, index) => (
            <li
              key={title}
              className={`flex gap-5 py-6 ${
                index > 0
                  ? "border-t border-slate-200 dark:border-slate-700"
                  : ""
              }`}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-xs font-bold leading-5 text-teal-700 dark:bg-slate-800 dark:text-teal-400">
                {index + 1}
              </span>

              <div>
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
