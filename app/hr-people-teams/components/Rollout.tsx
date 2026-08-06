import Image from "next/image";

const phases = [
  {
    title: "Discover",
    description:
      "Confirm workforce groups, policies, jurisdictions, roles, systems, employee-relations requirements, and success measures.",
  },
  {
    title: "Configure",
    description:
      "Set policy profiles, classifications, schedules, review routes, permissions, and evidence requirements.",
  },
  {
    title: "Integrate",
    description:
      "Connect approved HR, payroll, identity, calendar, and communication systems; validate data ownership and failure handling.",
  },
  {
    title: "Pilot & Communicate",
    description:
      "Run a representative pilot, train managers and reviewers, and provide worker-facing explanations.",
  },
  {
    title: "Roll Out & Improve",
    description:
      "Release by agreed cohorts, monitor adoption and exception patterns, and manage controlled policy changes.",
  },
];

export default function Rollout() {
  return (
    <section className="w-full overflow-hidden bg-[#F0FBF6] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <div className="flex flex-col">

            <div className="flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
                aria-hidden="true"
              />
              <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
                Rollout
              </p>
            </div>

            <h2 className="mt-4 text-3xl font-bold leading-[1.35] text-slate-900 dark:text-white sm:text-4xl">
              Implementation, Adoption &amp; Retention
            </h2>

            {/* Phases */}
            <ol className="mt-6 flex flex-col gap-4">

              {phases.map((phase, index) => (
                <li key={phase.title} className="flex items-start gap-4">

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold leading-5 text-white">
                    {index + 1}
                  </span>

                  <div className="flex flex-col gap-3">

                    <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
                      {phase.title}
                    </h3>

                    <p className="text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                      {phase.description}
                    </p>

                  </div>

                </li>
              ))}

            </ol>

          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/hr-people-teams/rollout.png"
              alt="Team walking through a rollout plan at a workstation"
              width={580}
              height={420}
              className="h-auto w-full rounded-[20px] object-cover shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
