"use client";

import React from "react";

const requirements = [
  {
    title: "Local accuracy",
    description: "Preserve local timestamp, time zone & policy.",
  },
  {
    title: "Global visibility",
    description: "Governed oversight without flattening local meaning.",
  },
  {
    title: "Governed variation",
    description: "Effective-dated policy per entity, never guessed.",
  },
  {
    title: "Worker transparency",
    description: "Workers see their own records & correction path.",
  },
  {
    title: "Human authority",
    description: "People decide; the system never auto-decides.",
  },
  {
    title: "Downstream readiness",
    description: "Approved records ready for payroll, HRIS & ERP.",
  },
  {
    title: "Localization",
    description: "Language & region variants with stable URLs.",
  },
  {
    title: "Privacy-first",
    description: "No surveillance; purpose-limited data.",
  },
  {
    title: "Deployment control",
    description: "Country waves, residency & access under your control.",
  },
];

export default function GlobalRequirements() {
  return (
    <section className="w-full bg-gray-50 px-4 py-14 dark:bg-slate-900 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* ================= HEADER ================= */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 sm:text-xs dark:text-teal-400">
              What Global Organizations Require
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-[42px] dark:text-white">
            Nine non-negotiables
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base dark:text-slate-400">
            The bar a global workforce layer has to clear.
          </p>
        </div>

        {/* ================= REQUIREMENTS GRID ================= */}
        <div className="mx-auto mt-10 grid w-full max-w-[1000px] grid-cols-1 gap-x-10 gap-y-0 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:mt-14">
          {requirements.map((requirement) => (
            <div
              key={requirement.title}
              className="flex min-w-0 items-start gap-3 border-t border-slate-200 py-4 dark:border-slate-700 sm:py-5"
            >
              {/* Check icon */}
              <div className="mt-0.5 flex h-5 w-4 shrink-0 items-center justify-center">
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

              {/* Content */}
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold leading-5 text-slate-800 sm:text-base dark:text-white">
                  {requirement.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm dark:text-slate-400">
                  {requirement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}