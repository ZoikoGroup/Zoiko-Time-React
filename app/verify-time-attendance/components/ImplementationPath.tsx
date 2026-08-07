const phases = [
  {
    title: "Discovery",
    description:
      "Confirm outcomes, populations, systems, and privacy/legal constraints. Exit evidence: approved scope, RACI, risk log.",
  },
  {
    title: "Data & policy mapping",
    description:
      "Map identity, worker master, schedules, sources, projects, breaks, policies, and roles. Exit evidence: signed data map.",
  },
  {
    title: "Configuration & integration",
    description:
      "Configure roles, policies, notifications, and connectors. Exit evidence: configuration review and security sign-off.",
  },
  {
    title: "Pilot",
    description:
      "Representative workers, managers, and payroll/operations run real workflows. Exit evidence: pilot scorecard.",
  },
  {
    title: "Readiness & rollout",
    description:
      "Training, communications, cutover, and support. Exit evidence: go-live checklist and acceptance.",
  },
  {
    title: "Operate & improve",
    description:
      "Close-readiness review, policy versioning, exception aging, and quarterly governance.",
  },
];

export default function ImplementationPath() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[700px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Implementation, Pilot &amp; Adoption
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] dark:text-white sm:text-4xl">
            A disciplined, low-risk path to go-live
          </h2>

        </div>

        {/* Phases */}
        <div className="mx-auto mt-10 w-full max-w-[840px]">

          {phases.map((phase, index) => (
            <div
              key={phase.title}
              className="flex items-start gap-4 border-b border-[#E4E9EE] py-5 dark:border-slate-800"
            >

              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E8F6F2] text-[11px] font-bold leading-none text-[#0B8675] dark:bg-slate-900 dark:text-emerald-400">
                {index + 1}
              </span>

              <div className="min-w-0">

                <h3 className="text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                  {phase.title}
                </h3>

                <p className="mt-1 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                  {phase.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
