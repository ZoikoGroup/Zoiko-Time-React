"use client";

import React from "react";

const readinessItems = [
  {
    title: "Organization profile completed",
    description: "Legal name, locations, and time zones confirmed",
  },
  {
    title: "Admin roles assigned",
    description: "At least one owner and one backup admin",
  },
  {
    title: "Data source connected",
    description: "Payroll or HRIS integration verified",
  },
  {
    title: "Policy pack drafted",
    description: "Break, rest, and shift rules configured",
  },
  {
    title: "Pilot group selected",
    description: "A small team to run the first live week",
  },
  {
    title: "Privacy review scheduled",
    description: "Data scope and worker notice reviewed",
  },
];

export default function Ready() {
  return (
    <section className="w-full bg-slate-50 px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1168px]">
        {/* HEADER */}
        <div className="max-w-[680px]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Readiness
            </span>
          </div>

          <h2 className="mt-2 text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            Review your readiness before you launch.
          </h2>

          <p className="mt-4 max-w-[650px] text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            A live checklist, not a rubber stamp. Nothing here marks itself
            complete — and 100% still means a person signs off next.
          </p>
        </div>

        {/* READINESS PANEL */}
        <div className="mt-12 rounded-[20px] border border-gray-100 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900 sm:p-8 lg:mt-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
            {/* CHECKLIST */}
            <div>
              {readinessItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex min-h-[59px] items-start gap-3 py-3 ${
                    index !== readinessItems.length - 1
                      ? "border-b border-gray-100 dark:border-white/10"
                      : ""
                  }`}
                >
                  {/* CHECKBOX */}
                  <button
                    type="button"
                    aria-label={`Mark ${item.title} complete`}
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-200 bg-white transition hover:border-teal-500 dark:border-white/15 dark:bg-slate-800"
                  >
                    {/* Check mark appears when functionality is added */}
                  </button>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-sky-950 dark:text-white">
                      {item.title}
                    </div>

                    <div className="mt-1 text-xs font-normal text-slate-500 dark:text-slate-400">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SCORE CARD */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_8px_24px_rgba(15,34,71,0.06)] dark:border-white/10 dark:bg-slate-950 dark:shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
              <div className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Readiness score
              </div>

              {/* SCORE RING */}
              <div className="mx-auto mt-5 flex h-28 w-28 items-center justify-center">
                <div className="relative h-28 w-28">
                  <svg
                    viewBox="0 0 112 112"
                    className="h-full w-full -rotate-90"
                  >
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      className="text-gray-200 dark:text-slate-700"
                    />

                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray="289"
                      strokeDashoffset="289"
                      className="text-teal-600 dark:text-emerald-500"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-sky-950 dark:text-white">
                    0%
                  </div>
                </div>
              </div>

              <div className="mt-5 text-center text-sm font-bold text-sky-950 dark:text-white">
                Just getting started
              </div>

              <p className="mt-1 text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
                Check off items as your team completes them.
              </p>

              {/*<button
                type="button"
                className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-500 sm:text-base"
              >
                Review Readiness
              </button>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}