import React from "react";

export default function ConfigurationWorkstreams() {
  const workstreams = [
    {
      title: "Workspace & organization profile",
      desc: "Organization identity, workspace ownership, administrative contacts, operating context, and billing relationship.",
    },
    {
      title: "Departments & teams",
      desc: "Departments, teams, managers, reporting lines, business units, locations, and operational groupings.",
    },
    {
      title: "Workers & roles",
      desc: "Employees, contractors, administrators, managers, HR, finance, legal, operations, and external reviewers.",
    },
    {
      title: "Permissions & access",
      desc: "Who can view, approve, edit, correct, export, review, redact, preserve, or administer workforce records.",
    },
    {
      title: "Time & activity rules",
      desc: "Working hours, activity context, idle handling, breaks, project tracking, manual edits, and review thresholds.",
    },
    {
      title: "Screenshots & redaction",
      desc: "Where enabled: frequency, visibility, storage behavior, redaction workflows, reviewer permissions, and worker transparency.",
    },
    {
      title: "Timesheets & approvals",
      desc: "Approval flows, correction requests, reminders, lock periods, escalation rules, and cutoff support.",
    },
    {
      title: "Retention, integrations & reporting",
      desc: "Retention and legal hold, SSO, payroll, HRIS, finance, billing, and API integrations; dashboards and audit-ready outputs.",
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600">
            Configuration
          </p>

          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Configuration workstreams
          </h2>

          <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
            Configure ZoikoTime across these workstreams during Phase 3.
          </p>
        </div>


        {/* Content */}
        <div className="mt-12 space-y-6">

          {workstreams.map((item, index) => (
            <div key={index}>

              <h3 className="
              text-sm
              font-bold
              text-gray-700
              dark:text-gray-200
              ">
                {item.title}
              </h3>


              <p className="
              mt-2
              text-base
              leading-6
              text-gray-700
              dark:text-gray-400
              ">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}