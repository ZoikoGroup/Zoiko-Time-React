"use client";

import { FiCircle } from "react-icons/fi";

const reviewCases = [
  {
    title: "Missing clock-out",
    caseInfo: "Case #4821 · Aug 12",
    active: true,
  },
  {
    title: "Break overlap",
    caseInfo: "Case #4822 · Aug 12",
  },
  {
    title: "Overtime threshold",
    caseInfo: "Case #4823 · Aug 11",
  },
  {
    title: "Location mismatch",
    caseInfo: "Case #4824 · Aug 11",
  },
];

const recordDetails = [
  ["Source", "Web clock · device verified"],
  ["Policy", "Auto clock-out after 12h (v4)"],
  ["Submitted", "09:02 in · no out recorded"],
  ["Worker note", "“Forgot to clock out — left ~17:30”"],
  ["Evidence", "Provenance + policy + note preserved"],
];

export default function DisputeReview() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Hero */}
        <div className="w-full max-w-[820px] text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Eliminate Time Disputes
          </div>

          <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-5xl">
            Resolve time disputes with
            <br />
            <span className="text-green-400">
              clear, reviewable records
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-lg">
            Turn disputed time into transparent review cases — with source
            provenance, policy context, corrections, approvals, audit history,
            and worker participation.
          </p>

          {/* CTAs */}
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/request-a-demo">
            <button 
              type="button"
              className="rounded-[10px] bg-green-400 px-6 py-3.5 text-base font-semibold leading-4 text-white shadow-[0_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-green-500"
            >
              Get a Demo
            </button></a>

            <a href="/contact-sales">
            <button
              type="button"
              className="rounded-[10px] border border-gray-300 bg-white px-6 py-3.5 text-base font-semibold leading-4 text-slate-800 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
            >
              Talk to Sales
            </button></a>

            {/* <button
              type="button"
              className="px-2 py-2 text-sm font-semibold leading-6 text-teal-700 dark:text-teal-400"
            >
              See the review workflow →
            </button> */}
          </div>
        </div>

        {/* Review Center */}
        <div className="mt-12 w-full max-w-[1100px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(14,31,61,0.10)] dark:border-slate-700 dark:bg-slate-900">

          {/* Browser Header */}
          <div className="flex items-center gap-1.5 bg-slate-800 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />

            <div className="ml-2.5 text-xs font-medium leading-5 text-white/90">
              ZoikoTime · Time Record Review Center
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[230px_1fr]">

            {/* Review Queue */}
            <aside className="border-b border-slate-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-950 md:border-b-0 md:border-r">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                  Review queue
                </span>

                <span className="text-xs font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                  5 open
                </span>
              </div>

              {reviewCases.map((item) => (
                <div
                  key={item.caseInfo}
                  className={`border-b border-slate-200 px-4 py-3 dark:border-slate-700 ${
                    item.active
                      ? "border-l-[3px] border-l-teal-600 bg-white dark:bg-slate-900"
                      : ""
                  }`}
                >
                  <div className="text-xs font-semibold leading-5 text-slate-800 dark:text-white">
                    {item.title}
                  </div>

                  <div className="text-xs leading-4 text-gray-500 dark:text-slate-400">
                    {item.caseInfo}
                  </div>
                </div>
              ))}
            </aside>

            {/* Record Details */}
            <main className="min-w-0 p-5 sm:p-6 lg:p-7">

              {/* Record Header */}
              <div className="flex flex-col gap-3 border-b border-slate-200 pb-4 dark:border-slate-700 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-bold leading-6 text-slate-800 dark:text-white">
                    Missing clock-out
                  </h3>

                  <p className="text-xs leading-4 text-gray-500 dark:text-slate-400">
                    Case #4821 · Worker A. Okafor · Aug 12
                  </p>
                </div>

                <div className="flex w-fit items-center gap-1.5 rounded-full bg-orange-100 px-2 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-700" />

                  <span className="text-[10px] font-bold leading-4 text-yellow-700">
                    Needs review
                  </span>
                </div>
              </div>

              {/* Details */}
              <div>
                {recordDetails.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[90px_1fr] gap-4 border-b border-slate-200 py-2 dark:border-slate-700 sm:grid-cols-[110px_1fr]"
                  >
                    <span className="text-xs leading-5 text-gray-500 dark:text-slate-400">
                      {label}
                    </span>

                    <span className="text-xs font-medium leading-5 text-slate-800 dark:text-slate-200">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-2 pt-4 sm:flex-row">
                <button
                  type="button"
                  className="rounded-lg bg-green-400 px-3.5 py-2 text-xs font-semibold leading-5 text-white transition hover:bg-green-500"
                >
                  Approve correction
                </button>

                <button
                  type="button"
                  className="rounded-lg border border-gray-300 bg-white px-3.5 py-2 text-xs font-semibold leading-5 text-slate-800 transition hover:bg-gray-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                >
                  Request info
                </button>
              </div>
            </main>
          </div>
        </div>

      </div>
    </section>
  );
}