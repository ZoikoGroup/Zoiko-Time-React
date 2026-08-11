"use client";

import React from "react";

const flowSteps = [
  {
    label: "Local timestamp",
    value: "2026-08-11 23:32",
    highlighted: false,
  },
  {
    label: "IANA time zone",
    value: "Asia/Singapore (SGT)",
    highlighted: false,
  },
  {
    label: "Canonical instant",
    value: "2026-08-11T15:32:00Z",
    highlighted: true,
  },
  {
    label: "Reporting derivative",
    value: "11:32 ET · labeled derived",
    highlighted: false,
  },
];

const points = [
  "Source local timestamp & zone preserved",
  "Canonical instant for global comparison",
  "Reporting time labeled as derived, never overwriting source",
];

export default function TimeZoneDateIntegrity() {
  return (
    <section className="w-full overflow-hidden bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 sm:text-xs dark:text-teal-400">
              Time-Zone &amp; Date Integrity
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-[42px] dark:text-white">
            Never guess an instant
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base dark:text-slate-400">
            Preserve the local truth, derive the reporting view — and label it
            clearly.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}
        <div className="mx-auto mt-10 grid w-full max-w-[1040px] grid-cols-1 items-center gap-10 sm:mt-12 lg:grid-cols-2 lg:gap-12">
          
          {/* =================================================
              LEFT — TIME FLOW
          ================================================== */}
          <div className="w-full">
            <div className="flex flex-col">
              {flowSteps.map((step, index) => (
                <React.Fragment key={step.label}>
                  {/* Card */}
                  <div
                    className={`w-full rounded-xl border px-4 py-3.5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition ${
                      step.highlighted
                        ? "border-emerald-100 bg-emerald-50 dark:border-emerald-400/20 dark:bg-emerald-400/10"
                        : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
                    }`}
                  >
                    <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                      {step.label}
                    </p>

                    <p
                      className={`mt-0.5 text-xs font-bold leading-5 ${
                        step.highlighted
                          ? "text-teal-700 dark:text-teal-300"
                          : "text-slate-800 dark:text-slate-200"
                      }`}
                    >
                      {step.value}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < flowSteps.length - 1 && (
                    <div className="flex h-10 items-center justify-center">
                      <span className="text-lg font-normal text-teal-600 dark:text-teal-400">
                        ↓
                      </span>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* =================================================
              RIGHT — EXPLANATION
          ================================================== */}
          <div className="flex w-full flex-col gap-3">
            <h3 className="text-xl font-bold leading-8 text-slate-800 sm:text-2xl dark:text-white">
              Local truth in, labeled derivative out
            </h3>

            <p className="text-sm leading-6 text-gray-500 dark:text-slate-400">
              ZoikoTime stores the local timestamp with its IANA time zone,
              resolves a single canonical instant, and derives reporting time
              as a clearly-labeled value — handling DST, overnight work, and
              travel without ambiguity.
            </p>

            {/* Points */}
            <div className="mt-1 flex flex-col gap-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5"
                >
                  {/* Check icon */}
                  <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                    <svg
                      className="h-4 w-4 text-teal-600 dark:text-teal-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12.5l4 4L19 7.5"
                      />
                    </svg>
                  </div>

                  <p className="text-sm leading-5 text-gray-700 dark:text-slate-300">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            POLICY CALLOUT
        ====================================================== */}
        <div className="mx-auto mt-8 w-full max-w-[920px] rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-400/20 dark:bg-emerald-400/10 sm:mt-10">
          <p className="text-center text-xs leading-5">
            <span className="font-bold text-teal-700 dark:text-teal-300">
              Global policy resolution.
            </span>{" "}
            <span className="font-normal text-slate-800 dark:text-slate-300">
              Local policies are effective-dated with clear precedence. When
              context conflicts, ZoikoTime does not guess — it routes to an
              authorized human, and changes are controlled and versioned.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}