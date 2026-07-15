// components/Configuration.tsx

import React from "react";

const configurationItems = [
  {
    title: "Enable or disable by policy",
    description:
      "Administrators enable or disable screenshot capture per organization policy and plan capability.",
  },
  {
    title: "Role-based application",
    description:
      "Rules may vary by role, department, worker type, project, team, or customer configuration.",
  },
  {
    title: "Capture frequency",
    description:
      "Configure intervals or capture logic where supported, avoiding unnecessary collection.",
  },
  {
    title: "Active work sessions",
    description:
      "Screenshots relate to work-session context rather than unrelated personal activity where configuration supports it.",
  },
  {
    title: "Project or task context",
    description:
      "Screenshots may be associated with projects, tasks, clients, or work sessions where enabled.",
  },
  {
    title: "Pause or privacy controls",
    description:
      "Where supported, privacy controls allow temporary pause, private time, or non-work separation per policy.",
  },
  {
    title: "Notice & consent support",
    description:
      "Customers provide appropriate notices, acknowledgments, or policy disclosures where required.",
  },
  {
    title: "Administrative change history",
    description:
      "Changes to screenshot settings are logged so customers can review who changed what, when, and why.",
  },
];

export default function Configuration() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Configuration
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Configurable screenshot capture
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Customers control whether screenshots are enabled, who they apply
            to, and how they're captured.
          </p>
        </div>

        {/* Configuration List */}
        <div className="mx-auto mt-14 max-w-5xl space-y-8">
          {configurationItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-slate-200 pb-6 last:border-none dark:border-slate-700"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}