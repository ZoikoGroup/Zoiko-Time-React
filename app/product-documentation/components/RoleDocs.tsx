import React from "react";

export default function RoleDocs() {
  return (
    <section className="w-full bg-gray-50 py-16 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            By Role
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Role-based documentation
          </h2>

          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Guidance organized by how each role interacts with the platform.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Administrator */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              Administrator
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              Administrator
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Workspace settings, users, roles, permissions, schedules,
              policies, reporting, exports, and evidence controls.
            </p>
          </div>

          {/* Worker */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              Worker
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              Worker
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Time capture, activity visibility, timesheets, corrections,
              mobile use, and worker transparency.
            </p>
          </div>

          {/* Manager */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              Manager
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              Manager
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Team activity, timesheet approvals, exceptions, correction
              requests, and responsible analytics use.
            </p>
          </div>

          {/* HR Team */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              HR Team
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              HR Team
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Workforce policies, attendance workflows, corrections, worker
              communication, and dispute pathways.
            </p>
          </div>

          {/* Legal & Compliance */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              Legal &amp; Compliance
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              Legal &amp; Compliance
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Evidence use, access boundaries, retention, legal hold, audit
              trails, and responsible AI.
            </p>
          </div>

          {/* Finance & Payroll */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              Finance &amp; Payroll
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              Finance &amp; Payroll
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Timesheet integrity, payroll cutoff readiness, approvals, billing
              evidence, and reconciliation.
            </p>
          </div>

          {/* IT & Security */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              IT &amp; Security
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              IT &amp; Security
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Access controls, SSO, security posture, data protection,
              availability, and incident status.
            </p>
          </div>

          {/* Operations */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
              Operations
            </p>

            <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
              Operations
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Operational visibility, workforce allocation, project time,
              exception review, and productivity insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}