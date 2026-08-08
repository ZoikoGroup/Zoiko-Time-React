"use client";

const implementationSteps = [
  {
    step: "1–2",
    title: "Policy & roles",
    description:
      "Confirm dispute types, policies, reviewer roles, and separation of duties.",
  },
  {
    step: "3–4",
    title: "Connect & pilot",
    description:
      "Connect approved sources and validate with representative cases.",
  },
  {
    step: "5",
    title: "Roll out",
    description:
      "Go live by team with review analytics and continuous improvement.",
  },
];

export default function Implementation() {
  return (
    <section className="w-full bg-gray-50 px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Eyebrow */}
        <div className="flex w-full flex-col items-center">
          <span className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600">
            Implementation
          </span>
        </div>

        {/* Heading */}
        <div className="w-full max-w-[820px] pb-1">
          <h2 className="text-center text-3xl font-bold leading-tight text-slate-800 sm:text-4xl sm:leading-10 dark:text-white">
            A controlled path to fair review
          </h2>
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-[680px] pt-0.5">
          <p className="text-center text-base font-normal leading-7 text-gray-500 dark:text-gray-400">
            Readiness → policy &amp; roles → integrations → pilot → rollout.
          </p>
        </div>

        {/* Steps */}
        <div className="grid w-full grid-cols-1 gap-5 pt-5 sm:pt-8 md:grid-cols-2 lg:grid-cols-3">
          {implementationSteps.map((step) => (
            <article
              key={step.step}
              className="flex w-full flex-col items-start rounded-2xl border border-slate-200 bg-white px-6 py-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Step number */}
              <span className="text-xs font-semibold uppercase leading-4 tracking-wide text-teal-600">
                {step.step}
              </span>

              {/* Title */}
              <h3 className="mt-1 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm font-normal leading-6 text-gray-500 dark:text-gray-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}