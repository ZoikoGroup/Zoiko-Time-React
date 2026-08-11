"use client";

import React from "react";

const failureModes = [
  {
    number: "01",
    title: "Entity fragmentation",
    description:
      "Each country entity runs its own tools and spreadsheets, so no one has a governed global view.",
  },
  {
    number: "02",
    title: "Time-zone & date ambiguity",
    description:
      "“Tuesday 9:00” means different instants across regions; overnight and travel work get mis-stated.",
  },
  {
    number: "03",
    title: "Policy variation",
    description:
      "Local rules differ by entity and change over time, and ad-hoc handling isn’t defensible.",
  },
  {
    number: "04",
    title: "Late cutoffs",
    description:
      "Approvals slip past payroll cutoffs because ownership and readiness aren’t visible.",
  },
  {
    number: "05",
    title: "System fragmentation",
    description:
      "HRIS, payroll, ERP, and identity differ per country, so handoffs break and reconciliation is manual.",
  },
  {
    number: "06",
    title: "Worker experience",
    description:
      "Workers can’t see their own records, context, or correction path across languages and zones.",
  },
  {
    number: "07",
    title: "Accountability gaps",
    description:
      "No clear owner or decision record when something needs escalation.",
  },
  {
    number: "08",
    title: "Surveillance resistance",
    description:
      "Monitoring tools damage trust and works-council relationships — and still miss the point.",
  },
];

export default function GlobalCoordinationGap() {
  return (
    <section className="w-full bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 sm:text-xs dark:text-teal-400">
              The Global Coordination Gap
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl dark:text-white md:text-[42px]">
            Global scale breaks local time
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base sm:leading-7 dark:text-slate-400">
            Eight failure modes every multi-country operation runs into — and
            the reason a governed layer is needed.
          </p>
        </div>

        {/* ================= FAILURE MODES ================= */}
        <div className="mx-auto mt-10 w-full max-w-[1000px] sm:mt-12 lg:mt-14">
          {failureModes.map((item) => (
            <div
              key={item.number}
              className="flex items-start gap-3 border-t border-slate-200 py-4 sm:gap-4 sm:py-5 dark:border-slate-800"
            >
              {/* Number */}
              <div className="w-7 shrink-0 sm:w-8">
                <span className="text-lg font-extrabold leading-5 text-emerald-100 sm:text-xl dark:text-emerald-900">
                  {item.number}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold leading-6 text-slate-800 sm:text-base dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-0.5 max-w-[760px] text-xs leading-5 text-gray-500 sm:text-sm sm:leading-6 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom border */}
        <div className="mx-auto w-full max-w-[1000px] border-t border-slate-200 dark:border-slate-800" />
      </div>
    </section>
  );
}