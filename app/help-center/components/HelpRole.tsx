import React from "react";

const roles = [
  {
    title: "Workers",
    description:
      "Reviewing time records, submitting timesheets, requesting corrections, using the mobile app, and understanding visibility settings.",
    tags: [
      "Worker Guide",
      "Time & Activity Verification",
      "Screenshots & Redaction",
      "Mobile App",
    ],
  },
  {
    title: "Administrators",
    description:
      "Setup, departments, workers, permissions, policies, reports, evidence controls, billing settings, and support routing.",
    tags: [
      "Admin Guide",
      "Product Documentation",
      "Implementation Guide",
      "Reporting & Analytics",
    ],
  },
  {
    title: "Finance & Billing Users",
    description:
      "Subscriptions, invoices, payments, billing records, plan changes, payroll preparation, and timesheet integrity.",
    tags: [
      "Subscription Terms",
      "Payroll & Timesheet Integrity",
      "Contact Support",
    ],
  },
  {
    title: "IT & Security Teams",
    description:
      "Access controls, SSO, integrations, security controls, system status, incident communication, and documentation.",
    tags: [
      "Security Addendum",
      "Incident & Availability Status",
      "Product Documentation",
    ],
  },
];

export default function HelpRole() {
  return (
    <section className="bg-white py-16 dark:bg-slate-900 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            By Role
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Browse help by role
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 dark:text-slate-300">
            ZoikoTime guidance is organized by the way different users interact
            with the platform.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {roles.map((role) => (
            <div
              key={role.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                {role.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-slate-300">
                {role.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-xs font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800 dark:text-teal-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}