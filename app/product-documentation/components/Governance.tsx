import React from "react";

export default function Governance() {
  return (
    <section className="w-full bg-gray-50 py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Governance
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Governance, security &amp; evidence resources
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            For legal, compliance, HR, and operations teams reviewing how
            workforce records are retained, preserved, and governed.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Data Governance
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              Retention, preservation, review, export, and governance of
              workforce records.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
                Data Retention &amp; Legal Hold
              </span>

              <span className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
                Audit-Grade Evidence
              </span>

              <span className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
                Enterprise Governance
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Security &amp; Access
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              Security controls, access management, encryption, and enterprise
              posture.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
                Security Addendum
              </span>

              <span className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
                Enterprise Readiness
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Responsible AI
            </h3>

            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">
              How ZoikoTime supports human-in-command, explainable workforce
              insights.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
                Responsible AI
              </span>

              <span className="rounded-full border border-slate-200 bg-gray-50 px-4 py-2 text-sm font-medium text-teal-700 dark:border-slate-700 dark:bg-slate-800">
                Audit-Grade Evidence
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}