"use client";

const learningPaths = [
  {
    title: "Worker Essentials",
    tutorials: "2 tutorials",
    steps: [
      "Recording your first shift",
      "Requesting a correction",
    ],
  },
  {
    title: "Manager Review Track",
    tutorials: "2 tutorials",
    steps: [
      "Reviewing an exception",
      "Reading a Rule Trace",
    ],
  },
  {
    title: "Admin Setup Track",
    tutorials: "3 tutorials",
    steps: [
      "Inviting & provisioning workers",
      "Setting up break policy",
      "Configuring grace windows",
    ],
  },
];

export default function LearningPaths() {
  return (
    <section className="w-full bg-gray-50 py-14 dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Learning Paths
          </div>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white">
            Guided sequences for a complete role
          </h2>
        </div>

        {/* Learning Path Cards */}
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 lg:grid-cols-3">
          {learningPaths.map((path) => (
            <article
              key={path.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
                  {path.title}
                </h3>

                <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold leading-4 text-teal-700 dark:bg-emerald-950/40 dark:text-teal-400">
                  {path.tutorials}
                </span>
              </div>

              {/* Steps */}
              <div className="mt-5">
                {path.steps.map((step, index) => (
                  <div
                    key={step}
                    className={`flex items-center gap-3 ${
                      index !== 0
                        ? "border-t border-gray-300 dark:border-slate-700"
                        : ""
                    }`}
                  >
                    {/* Number */}
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-50 dark:bg-slate-800">
                      <span className="text-xs font-bold leading-4 text-gray-500 dark:text-slate-400">
                        {index + 1}
                      </span>
                    </div>

                    {/* Step Name */}
                    <div className="py-2 text-xs font-semibold leading-5 text-teal-700 dark:text-teal-400">
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}