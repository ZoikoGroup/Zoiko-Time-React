"use client";

const journeySteps = [
  {
    number: "01",
    title: "Discovery",
    description: (
      <>
        Map contractor types, agencies, and
        <br className="hidden lg:block" />
        current process.
      </>
    ),
  },
  {
    number: "02",
    title: "Configure",
    description: (
      <>
        Set up engagement rules, approval
        <br className="hidden lg:block" />
        policy, and export formats.
      </>
    ),
  },
  {
    number: "03",
    title: "Pilot",
    description: (
      <>
        Run with one project or agency, tune
        <br className="hidden lg:block" />
        the review workflow.
      </>
    ),
  },
  {
    number: "04",
    title: "Launch",
    description: (
      <>
        Roll out across projects with reviewer
        <br className="hidden lg:block" />
        training complete.
      </>
    ),
  },
];

export default function ImplJourney() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-8 px-4 py-7 sm:px-6 lg:gap-10 lg:px-8">
        {/* Heading */}
        <div className="flex w-full max-w-[620px] flex-col items-start gap-3 pt-1">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Implementation Journey
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            From kickoff to first clean export.
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden w-full lg:block">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-[18px] h-px bg-slate-200 dark:bg-slate-700" />

          <div className="relative grid grid-cols-4">
            {journeySteps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-start pr-5"
              >
                {/* Number */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-green-600 bg-white dark:border-green-400 dark:bg-slate-900">
                  <span className="text-xs font-semibold leading-5 text-green-600 dark:text-green-400">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-3">
                  <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-0.5 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Timeline */}
        <div className="w-full lg:hidden">
          <div className="relative ml-4 border-l border-slate-200 dark:border-slate-700">
            {journeySteps.map((step, index) => (
              <div
                key={step.number}
                className={`relative pl-8 ${
                  index !== journeySteps.length - 1 ? "pb-8" : ""
                }`}
              >
                {/* Number */}
                <div className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-green-600 bg-white dark:border-green-400 dark:bg-slate-900">
                  <span className="text-xs font-semibold leading-5 text-green-600 dark:text-green-400">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
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