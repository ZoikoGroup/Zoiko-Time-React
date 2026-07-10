import React from "react";

export default function StartHere() {
  return (
    <section className="w-full bg-white py-16 transition-colors dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Start Here
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Start here by user type
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Buyers &amp; Evaluation Teams
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Procurement, executive sponsors, IT, legal, HR, finance, and
              operations leaders reviewing ZoikoTime before purchase.
            </p>

            <button className="mt-6 text-sm font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-400">
              Start here →
            </button>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Implementation Owners
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Teams preparing rollout, training, configuration, validation, and
              launch.
            </p>

            <button className="mt-6 text-sm font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-400">
              Start here →
            </button>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Administrators
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Workspace owners, platform administrators, IT administrators, and
              operations leads configuring ZoikoTime.
            </p>

            <button className="mt-6 text-sm font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-400">
              Start here →
            </button>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-800">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
              Workers
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Employees, contractors, field workers, mobile users, and
              individual users learning how ZoikoTime works.
            </p>

            <button className="mt-6 text-sm font-semibold text-teal-700 transition hover:text-teal-800 dark:text-teal-400">
              Start here →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
