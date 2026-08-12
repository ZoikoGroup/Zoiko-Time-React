"use client";

const steps = [
  {
    number: "1–2",
    title: "Pilot & policy",
    description:
      "Validate representative teams, schedules, work contexts, and policy configuration.",
  },
  {
    number: "3–4",
    title: "Communicate & train",
    description:
      "Worker communication and manager training, with exception ownership defined.",
  },
  {
    number: "5",
    title: "Integrate & review",
    description:
      "Validate integrations, run the first cycle, and review success measures.",
  },
];

export default function Adoption() {
  return (
    <section className="w-full bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Implementation & Adoption
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            A practical path to first cycle
          </h2>

          <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base sm:leading-7">
            Pilot, worker communication, manager training, integration
            validation, and success review.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                min-h-40
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-[27px]
                shadow-[0_6px_18px_rgba(14,31,61,0.05)]
                transition-colors
                dark:border-slate-700
                dark:bg-slate-900
                dark:shadow-[0_6px_18px_rgba(0,0,0,0.2)]
              "
            >
              {/* Step number */}
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="mt-2 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[320px] text-sm leading-6 text-gray-500 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}