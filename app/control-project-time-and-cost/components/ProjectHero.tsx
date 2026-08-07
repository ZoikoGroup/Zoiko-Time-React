"use client";

import Link from "next/link";

const badges = [
  "Approved time",
  "Versioned rates",
  "Budget & forecast",
  "Controlled adjustments",
  "Reconciled outputs",
];

const metrics = [
  {
    title: "Current Budget",
    value: "$2.40M",
    note: "v3 • approved",
    noteClass: "text-slate-500 dark:text-slate-400",
  },
  {
    title: "Approved Actual",
    value: "$1.61M",
    note: "67% consumed",
    noteClass: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Forecast @ Completion",
    value: "$2.58M",
    note: "+7.5% vs budget",
    noteClass: "text-amber-600 dark:text-amber-400",
  },
  {
    title: "Exceptions",
    value: "6",
    note: "2 provisional",
    noteClass: "text-red-600 dark:text-red-400",
  },
];

const months = [
  {
    month: "Apr",
    budget: "h-16",
    actual: "h-16",
  },
  {
    month: "May",
    budget: "h-16",
    actual: "h-16",
  },
  {
    month: "Jun",
    budget: "h-20",
    actual: "h-20",
  },
  {
    month: "Jul",
    budget: "h-20",
    actual: "h-20",
  },
  {
    month: "Aug",
    budget: "h-20",
    actual: "h-16",
    forecast: "h-20",
  },
  {
    month: "Sep",
    budget: "h-20",
    forecast: "h-24",
  },
  {
    month: "Oct",
    budget: "h-20",
    forecast: "h-24",
  },
];

const issues = [
  {
    title: "Unapproved time · 2 records",
    status: "Provisional",
    color:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300",
  },
  {
    title: "FX rate unavailable · EUR → USD",
    status: "Blocks calc",
    color:
      "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  },
  {
    title: "Budget version mismatch · Phase 2",
    status: "Needs review",
    color:
      "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  },
  {
    title: "Owner · Project Finance Reviewer",
    status: "Assigned",
    color:
      "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300",
  },
];

export default function ProjectHero() {
  return (
    <section className="overflow-hidden bg-slate-950 text-white dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 py-16 lg:flex-row lg:items-center lg:px-8 xl:px-10">
        {/* Left */}
        <div className="w-full lg:max-w-xl lg:-mt-18">
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Control project time{" "}
            <span className="text-emerald-400">
              before cost drifts </span>{" "}out of view
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Connect approved time, cost rules, budgets, forecasts,
            corrections, and downstream systems in one governed
            project-control workflow.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-400">
            Transparent project control — not employee surveillance or
            automatic financial judgment.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/get-a-demo"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-500 px-8 text-sm font-semibold text-white transition hover:bg-emerald-600"
            >
              Get a Demo
            </Link>

            <Link
              href="/talk-to-sales"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-600 px-8 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Talk to Sales
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-slate-200 backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="w-full">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-slate-500" />
              <span className="h-3 w-3 rounded-full bg-slate-500" />
              <span className="h-3 w-3 rounded-full bg-slate-500" />

              <p className="ml-3 text-xs font-medium text-slate-300">
                Project Time & Cost Control Center • Portfolio
              </p>
            </div>

            <div className="space-y-6 p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <h3 className="text-sm font-semibold text-white">
                  Budget vs. Approved Actual vs. Forecast
                </h3>

                <span className="inline-flex items-center rounded-full bg-amber-500/20 px-3 py-1 text-[10px] font-bold text-amber-300">
                  ● Forecast &gt; Budget
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                      {item.title}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold text-white">
                      {item.value}
                    </h3>

                    <p className={`mt-2 text-xs font-semibold ${item.noteClass}`}>
                      {item.note}
                    </p>
                  </div>
                ))}
              </div>
                             {/* Budget Chart */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="flex h-64 items-end justify-between gap-3 overflow-x-auto">
                  {months.map((item) => (
                    <div
                      key={item.month}
                      className="flex min-w-[58px] flex-col items-center"
                    >
                      <div className="flex h-52 items-end gap-2">
                        {/* Budget */}
                        <div
                          className={`w-3 rounded-t-md bg-white/30 ${item.budget}`}
                        />

                        {/* Actual */}
                        {item.actual && (
                          <div
                            className={`w-3 rounded-t-md bg-emerald-500 ${item.actual}`}
                          />
                        )}

                        {/* Forecast */}
                        {item.forecast && (
                          <div
                            className={`w-3 rounded-t-md border border-amber-300 bg-amber-300/70 ${item.forecast}`}
                          />
                        )}
                      </div>

                      <span className="mt-3 text-[11px] text-slate-400">
                        {item.month}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-6 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-white/30" />
                    <span className="text-slate-400">
                      Budget
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-emerald-500" />
                    <span className="text-slate-400">
                      Approved Actual
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-sm bg-amber-300" />
                    <span className="text-slate-400">
                      Forecast
                    </span>
                  </div>
                </div>
              </div>

              {/* Issues */}
              <div className="rounded-2xl border border-white/10 bg-white/5">
                {issues.map((issue, index) => (
                  <div
                    key={issue.title}
                    className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                      index !== issues.length - 1
                        ? "border-b border-white/10"
                        : ""
                    }`}
                  >
                    <p className="text-sm text-slate-200">
                      {issue.title}
                    </p>

                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold ${issue.color}`}
                    >
                      {issue.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <p className="text-xs leading-6 text-slate-400">
                Project, phase &amp; cost-object views • No worker
                productivity ranking. Synthetic data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}