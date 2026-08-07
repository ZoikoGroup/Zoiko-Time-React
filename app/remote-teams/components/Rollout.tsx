"use client";

const stages = [
  {
    number: "1",
    title: "Readiness",
    description: "Confirm team model & timezones",
  },
  {
    number: "2",
    title: "Policy review",
    description: "Windows, overlap, quiet hours",
  },
  {
    number: "3",
    title: "Source authority",
    description: "System-of-record mapping",
  },
  {
    number: "4",
    title: "Operating design",
    description: "Coverage & handoff templates",
  },
  {
    number: "5",
    title: "Pilot",
    description: "Representative scenarios",
  },
  {
    number: "6",
    title: "Worker onboarding",
    description: "Local time & first submission",
  },
  {
    number: "7",
    title: "Manager training",
    description: "Fair review, no productivity use",
  },
  {
    number: "8",
    title: "Controlled rollout",
    description: "By team, region, or pay period",
  },
  {
    number: "9",
    title: "Continuous review",
    description: "Coverage, boundaries, feedback",
  },
];

export default function Rollout() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1300px] flex-col items-center gap-12">
        {/* Header */}
        <div className="max-w-[700px] text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:text-emerald-400">
              Rollout
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white lg:text-5xl">
            Implementation and Remote Adoption
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            Nine stages — no universal timeline promised. Duration depends
            on timezones, policies, handoffs, sources, and rollout scope.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid w-full grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
          {stages.map((stage) => (
            <div
              key={stage.number}
              className="flex flex-col items-center px-2 text-center"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-2xl bg-slate-900 text-xs font-bold text-white dark:bg-white dark:text-slate-900">
                {stage.number}
              </div>

              <h3 className="mt-6 text-xs font-bold leading-5 text-slate-900 dark:text-white">
                {stage.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}