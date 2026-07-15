import React from "react";

const teams = [
  {
    category: "Finance & Payroll",
    title: "Finance & payroll",
    description:
      "Complete, approved, explainable records before processing and billing.",
  },
  {
    category: "Operations",
    title: "Operations",
    description:
      "Approval discipline, exception resolution, and workforce visibility.",
  },
  {
    category: "HR",
    title: "HR teams",
    description:
      "Fair attendance review, corrections, and worker transparency.",
  },
  {
    category: "Legal & Compliance",
    title: "Legal",
    description:
      "Traceable evidence, retention, legal hold, and access logs.",
  },
  {
    category: "Professional Services",
    title: "Services leaders",
    description:
      "Billable verification, project allocation, and dispute-ready evidence.",
  },
  {
    category: "Managers",
    title: "Managers",
    description:
      "Context to review and approve records fairly and on time.",
  },
];

export default function BuiltForTeams() {
  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-16 px-6">
      <div className="max-w-[1180px] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            By Team
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-white">
            Built for the teams that depend on workforce
            <br className="hidden md:block" />
            truth
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                {team.category}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-800 dark:text-white">
                {team.title}
              </h3>

              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {team.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}