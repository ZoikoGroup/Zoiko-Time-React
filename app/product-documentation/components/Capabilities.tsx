import React from "react";

export default function Capabilities() {
  return (
    <section className="w-full bg-white py-16 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Capabilities
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Product capability documentation
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Deep-dive guidance for each ZoikoTime capability.
          </p>
        </div>

        {/* Capability List */}
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Workforce Intelligence
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Workforce patterns, operational visibility, productivity context,
              manager insights, and responsible interpretation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Time &amp; Activity Verification
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Verified time records, activity context, idle handling,
              corrections, visibility, and record integrity.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Screenshots &amp; Redaction Controls
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Screenshot settings, redaction workflows, access boundaries,
              review controls, storage behavior, and transparency.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Reporting &amp; Workforce Analytics
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Dashboards, filters, exports, team views, executive summaries, and
              analytics interpretation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Payroll &amp; Timesheet Integrity
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Timesheets, approvals, payroll-ready exports, billing evidence,
              correction workflows, and reconciliation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              ZoikoTime Mobile App
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Mobile clock-in, field workforce use, mobile visibility, worker
              experience, and support.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Enterprise Workforce Governance
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Policies, permissions, access controls, role-based governance,
              approval boundaries, and oversight.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Audit-Grade Evidence
            </h3>
            <p className="mt-1 text-base text-slate-600 dark:text-slate-400">
              Audit trails, correction history, evidence packages, export
              controls, review logs, and defensible records.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}