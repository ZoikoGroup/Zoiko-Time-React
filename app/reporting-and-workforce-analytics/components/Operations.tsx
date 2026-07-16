import React from "react";

const analytics = [
  {
    title: "Attendance analytics",
    description:
      "Late starts, absences, missed clock-outs, schedule adherence, break patterns, and trends.",
  },
  {
    title: "Utilization analytics",
    description:
      "Billable utilization, non-billable time, department utilization, project allocation, and workload balance.",
  },
  {
    title: "Project analytics",
    description:
      "Time by project, client, task, team, worker, phase, or billing status.",
  },
  {
    title: "Location & distributed views",
    description:
      "Workforce patterns across countries, regions, departments, or remote teams where supported.",
  },
  {
    title: "Trend analysis",
    description:
      "Week-over-week, month-over-month, department-level, and project-level workforce patterns.",
  },
  {
    title: "Comparative views",
    description:
      "Compare teams, departments, projects, or periods — without public worker rankings.",
  },
];

export default function Operations() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-900">
      <div className="mx-auto max-w-[1132px] px-6 py-[74px] lg:px-0">
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Operations
          </div>

          <h2 className="mt-3 text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Attendance, utilization, and activity analytics
          </h2>

          <p className="mx-auto mt-5 max-w-[665px] text-base leading-7 text-gray-500 dark:text-gray-400">
            Understand patterns and capacity without turning analytics into
            public worker rankings.
          </p>
        </div>

        {/* Analytics List */}
        <div className="mt-[76px] space-y-1">
          {analytics.map((item, index) => (
            <div key={index}>
              <h3 className="text-sm font-bold leading-5 text-gray-700 dark:text-gray-200">
                {item.title}
              </h3>

              <p className="text-base leading-6 text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}