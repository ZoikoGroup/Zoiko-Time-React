import React from "react";
import Link from "next/link";

const topMetrics = [
  {
    title: (
      <>
        Verified
        <br />
        hours
      </>
    ),
    value: "18,240",
    status: "▲ 2.1%",
    subtext: "wk/wk",
    color: "text-green-700 dark:text-green-400",
  },
  {
    title: (
      <>
        Attendance
        <br />
        exceptions
      </>
    ),
    value: "37",
    status: "12 need",
    subtext: "review",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    title: (
      <>
        Billing-
        <br />
        ready
        <br />
        time
      </>
    ),
    value: "91%",
    status: "▲",
    subtext: "approved",
    color: "text-green-700 dark:text-green-400",
  },
  {
    title: (
      <>
        Approval
        <br />
        backlog
      </>
    ),
    value: "24",
    status: "aging >",
    subtext: "48h: 5",
    color: "text-yellow-600 dark:text-yellow-400",
  },
];

const bottomMetrics = [
  {
    title: "Utilization",
    value: "78%",
    status: "billable",
    color: "text-green-700 dark:text-green-400",
  },
  {
    title: (
      <>
        Payroll
        <br />
        review
      </>
    ),
    value: "Ready",
    status: "3 holds",
    color: "text-green-700 dark:text-green-400",
  },
  {
    title: (
      <>
        Evidence
        <br />
        packages
      </>
    ),
    value: "12",
    status: "prepared",
    color: "text-gray-700 dark:text-gray-300",
  },
  {
    title: (
      <>
        Records
        <br />
        to
        <br />
        review
      </>
    ),
    value: "9",
    status: "prioritized",
    color: "text-yellow-600 dark:text-yellow-400",
  },
];

export default function AnalyticsHero() {
  return (
    <section className="relative min-h-[670px] w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-96 w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.10)_0%,rgba(13,148,136,0)_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.12)_0%,rgba(20,184,166,0)_70%)]" />

      <div className="relative mx-auto flex max-w-[1132px] flex-col gap-12 px-6 py-16 lg:flex-row lg:items-start lg:gap-12 lg:px-0">
        {/* Left Content */}
        <div className="w-full lg:w-[610px]">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Reporting &amp; Workforce Analytics
          </div>

          <h1 className="max-w-[560px] text-4xl font-bold leading-[1.12] text-slate-800 dark:text-white sm:text-5xl">
            Turn verified workforce
            <br className="hidden sm:block" />
            records into{" "}
            <span className="text-teal-600 dark:text-teal-400">
              decision-
              <br className="hidden sm:block" />
              ready intelligence
            </span>
          </h1>

          <p className="mt-6 max-w-[560px] text-base leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime turns verified time, attendance, activity context,
            approvals, exceptions, and audit trails into reporting for payroll,
            billing, operations, compliance, and executive governance.
          </p>

          {/* Notice */}
          <div className="mt-8 max-w-[560px] rounded-r-[10px] border-l-[3px] border-emerald-100 bg-gray-50 px-5 py-3 dark:border-emerald-900 dark:bg-slate-800/70">
            <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
              Reporting is only as good as the records behind it. ZoikoTime
              builds analytics on verified, approved, explainable records — not
              raw clock data.
            </p>
          </div>

          {/* Buttons */}
<div className="mt-8 flex flex-col gap-4 sm:flex-row">

  {/* Get a Demo */}
  <Link
    href="/request-a-demo"
    className="
      h-11
      rounded-[10px]
      bg-teal-600
      px-7
      text-base
      font-semibold
      text-white
      shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)]
      transition
      hover:bg-teal-700
      inline-flex
      items-center
      justify-center
    "
  >
    Get a Demo
  </Link>


  {/* Start Free Trial */}
  <Link
    href="/start-free"
    className="
      h-11
      rounded-[10px]
      border
      border-gray-300
      bg-white
      px-7
      text-base
      font-semibold
      text-slate-800
      transition
      hover:bg-gray-50
      dark:border-slate-700
      dark:bg-slate-900
      dark:text-white
      dark:hover:bg-slate-800
      inline-flex
      items-center
      justify-center
    "
  >
    Start Free
  </Link>

</div>

          <p className="mt-6 text-xs leading-5 text-gray-500 dark:text-gray-400">
            Built for governance, not surveillance — no employee rankings or
            automated performance judgment.
          </p>
        </div>

        {/* Dashboard */}
        <div className="w-full lg:w-[470px]">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:p-6">
            <h2 className="text-lg font-bold leading-7 text-slate-800 dark:text-white">
              Workforce intelligence dashboard
            </h2>

            <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Decision-ready, drawn from verified records
            </p>

            {/* Top Metrics */}
            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {topMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="min-h-[160px] rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950"
                >
                  <div className="min-h-[32px] text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-gray-400">
                    {metric.title}
                  </div>

                  <div className="mt-5 text-xl font-bold leading-9 text-slate-800 dark:text-white">
                    {metric.value}
                  </div>

                  <div
                    className={`mt-3 text-xs font-semibold leading-4 ${metric.color}`}
                  >
                    {metric.status}
                    <br />
                    {metric.subtext}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Metrics */}
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {bottomMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="min-h-[144px] rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-950"
                >
                  <div className="min-h-[32px] text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-gray-400">
                    {metric.title}
                  </div>

                  <div className="mt-5 text-xl font-bold leading-9 text-slate-800 dark:text-white">
                    {metric.value}
                  </div>

                  <div
                    className={`mt-3 text-xs font-semibold leading-4 ${metric.color}`}
                  >
                    {metric.status}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <p className="mt-7 text-xs leading-5 text-gray-500 dark:text-gray-400">
              Summary cards with drill-down to source records · permissioned ·
              <br className="hidden sm:block" />
              no individual worker rankings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}