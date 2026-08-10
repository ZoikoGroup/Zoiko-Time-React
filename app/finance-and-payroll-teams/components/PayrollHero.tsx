import Link from "next/link";
import React from "react";

export default function PayrollHero() {
  const cards = [
    {
      title: "Approved",
      value: "842",
      badge: "Export-ready",
      badgeColor:
        "bg-emerald-50 text-teal-700 dark:bg-emerald-900/20 dark:text-emerald-300",
    },
    {
      title: "Pending Review",
      value: "61",
      badge: "In queue",
      badgeColor:
        "bg-orange-100 text-yellow-700 dark:bg-orange-900/20 dark:text-orange-300",
    },
    {
      title: "Needs Input",
      value: "28",
      badge: "Worker/Manager",
      badgeColor:
        "bg-orange-100 text-yellow-700 dark:bg-orange-900/20 dark:text-orange-300",
    },
    {
      title: "Post-approval Changes",
      value: "7",
      badge: "Reapproval",
      badgeColor:
        "bg-orange-100 text-yellow-700 dark:bg-orange-900/20 dark:text-orange-300",
    },
    {
      title: "Blocked",
      value: "3",
      badge: "From export",
      badgeColor:
        "bg-rose-50 text-red-700 dark:bg-red-900/20 dark:text-red-300",
    },
    {
      title: "Allocation",
      value: "96%",
      badge: "Complete",
      badgeColor:
        "bg-emerald-50 text-teal-700 dark:bg-emerald-900/20 dark:text-emerald-300",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-16 dark:from-slate-950 dark:to-slate-900 lg:py-24">
      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
          For Finance & Payroll Teams
        </p>

        {/* Heading */}
        <h1 className="mx-auto mt-4 max-w-5xl text-center text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
          Turn approved time into{" "}
          <span className="text-teal-600">
            payroll-ready records
          </span>
        </h1>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-4xl text-center text-gray-600 dark:text-slate-300 sm:text-lg">
          ZoikoTime gives finance and payroll teams deterministic,
          evidence-backed records for time, attendance, breaks, approvals, and
          project allocation—ready for reconciliation and export without worker
          surveillance.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/request-enterprise-demo"
            className="rounded-xl bg-teal-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-teal-700"
          >
            Request Enterprise Demo
          </Link>

          <Link
            href="/start-free"
            className="rounded-xl border border-gray-300 bg-white px-8 py-3 font-semibold text-slate-800 transition hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            Start Free
          </Link>
        </div>

        {/* Note */}
        <p className="mt-5 text-center text-sm text-gray-500 dark:text-slate-400">
          30-day trial • Human review • Complete change history • No screenshots
          • No keystroke capture
        </p>

        {/* Section */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Payroll Readiness
          </h2>

          <p className="mt-2 text-gray-600 dark:text-slate-400">
            Pay period · Aug 1–15 · US-Hourly
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                {card.title}
              </p>

              <h3 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white">
                {card.value}
              </h3>

              <span
                className={`mt-5 inline-block rounded-full px-3 py-1 text-xs font-semibold ${card.badgeColor}`}
              >
                {card.badge}
              </span>
            </div>
          ))}
        </div>

        {/* Export */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl bg-gray-100 p-4 dark:bg-slate-800 sm:flex-row sm:items-center">
          <span className="text-sm text-slate-700 dark:text-slate-300">
            Export · v3 mapping · run #A-2291
          </span>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-green-500"></span>
            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
              Validated
            </span>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-5 text-sm text-gray-500 dark:text-slate-400">
          Synthetic data · deterministic states · no confidence score.
        </p>
      </div>
    </section>
  );
}
