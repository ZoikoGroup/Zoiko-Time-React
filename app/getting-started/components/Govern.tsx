"use client";

import React from "react";

const requiredItems = [
  "Identity verification for every role before access is granted",
  "A human sign-off before any policy pack goes live",
  "Sandbox testing before production for every new policy",
  "Transparent worker notice before monitoring begins",
];

const neverItems = [
  "Promise instant setup or one-click compliance",
  "Enable monitoring a worker hasn't been notified about",
  "Mark a readiness check complete without evidence",
  "Auto-approve a policy pack as \"compliant\"",
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
    >
      <path
        d="m3.2 8.2 3 2.8 6.6-6.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NeverIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      className="mt-0.5 h-4 w-4 shrink-0 text-red-600 dark:text-red-400"
    >
      <circle
        cx="8"
        cy="8"
        r="5.25"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="m5.7 5.7 4.6 4.6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Govern() {
  return (
    <section className="w-full bg-slate-50 px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1168px]">
        {/* HEADER */}
        <div className="max-w-[700px]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Governance
            </span>
          </div>

          <h2 className="mt-2 max-w-[680px] text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            What onboarding requires — and what it never does.
          </h2>

          <p className="mt-4 text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            The same rules that govern the product govern how we onboard you
            into it.
          </p>
        </div>

        {/* GOVERNANCE CARDS */}
        <div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-2">
          {/* WHAT WE REQUIRE */}
          <div className="rounded-[20px] border border-teal-600/20 bg-emerald-50 p-6 dark:border-emerald-400/20 dark:bg-emerald-950/30 sm:p-7">
            {/* TITLE */}
            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center text-emerald-600 dark:text-emerald-400">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-5 w-5"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="m7 10 2 2 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-base font-bold text-sky-950 dark:text-white">
                What we require
              </h3>
            </div>

            {/* LIST */}
            <ul className="mt-7 space-y-5">
              {requiredItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-5 text-sky-950 dark:text-slate-200"
                >
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WHAT WE NEVER DO */}
          <div className="rounded-[20px] border border-red-600/20 bg-rose-100 p-6 dark:border-red-400/20 dark:bg-red-950/25 sm:p-7">
            {/* TITLE */}
            <div className="flex items-center gap-3">
              <div className="flex h-5 w-5 items-center justify-center text-red-600 dark:text-red-400">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-5 w-5"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M10 6.5v4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="10"
                    cy="13.5"
                    r=".8"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <h3 className="text-base font-bold text-sky-950 dark:text-white">
                What we never do
              </h3>
            </div>

            {/* LIST */}
            <ul className="mt-7 space-y-5">
              {neverItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm leading-5 text-sky-950 dark:text-slate-200"
                >
                  <NeverIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}