"use client";

import React from "react";

const sandboxFeatures = [
  "Mirrors production rules exactly",
  "Resets anytime, no history kept against you",
  "Zero impact on live workers or pay",
  "Never counts as audit evidence",
];

const steps = [
  {
    number: "1",
    title: "Load your draft policy pack",
    description:
      "The sandbox pulls in whatever you've configured so far — nothing needs to be finished first.",
  },
  {
    number: "2",
    title: "Simulate a shift",
    description:
      "Run a normal shift, then a messy one — a late break, a missed clock-out — and see how each resolves.",
  },
  {
    number: "3",
    title: "Check what got flagged",
    description:
      "Anything the system couldn't resolve confidently shows up in a review queue, same as production.",
  },
  {
    number: "4",
    title: "Adjust and re-run",
    description:
      "Change a threshold, reset, and try again — as many times as it takes to trust the outcome.",
  },
];

export default function Test() {
  return (
    <section className="w-full bg-slate-50 px-5 py-16 dark:bg-slate-950 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1168px]">
        {/* HEADER */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

            <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
              Safe Testing
            </span>
          </div>

          <h2 className="mt-2 max-w-[700px] text-3xl font-bold leading-9 text-sky-950 dark:text-white">
            Test before anything touches production.
          </h2>

          <p className="mt-4 max-w-[650px] text-sm font-normal leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            The sandbox mirrors your real policy rules with none of the
            real-world stakes.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* SANDBOX CARD */}
          <div className="rounded-[20px] bg-gray-900 p-7 text-white dark:bg-slate-900 sm:p-8">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-emerald-400" />

              <span className="text-xs font-bold text-emerald-400">
                Sandbox · No live data
              </span>
            </div>

            {/* TITLE */}
            <h3 className="mt-7 text-lg font-bold">
              A governed space to break things on purpose
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-4 text-sm leading-5 text-white/60">
              Run real shifts, real exceptions, and real edge cases against
              your policy pack — nothing here reaches a live worker, a
              paycheck, or an audit record.
            </p>

            {/* FEATURES */}
            <ul className="mt-7 space-y-4">
              {sandboxFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-white/80"
                >
                  <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center text-emerald-400">
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="m3 7.2 2.3 2.2L11 4"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-full bg-teal-600 px-5 text-sm font-semibold text-white transition hover:bg-teal-500"
              >
                Enter Sandbox
              </button>

              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Reset Sandbox
              </button>
            </div>
          </div>

          {/* STEPS */}
          <div>
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex gap-4 py-5 ${
                  index !== steps.length - 1
                    ? "border-b border-gray-100 dark:border-white/10"
                    : ""
                }`}
              >
                {/* NUMBER + CONNECTOR */}
                <div className="relative shrink-0">
                  <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    {step.number}
                  </div>

                  {index !== steps.length - 1 && (
                    <span className="absolute left-1/2 top-6 h-[calc(100%+1px)] w-px -translate-x-1/2 bg-gray-200 dark:bg-white/10" />
                  )}
                </div>

                {/* TEXT */}
                <div className="min-w-0 pb-1">
                  <h3 className="text-sm font-semibold text-sky-950 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-[520px] text-xs leading-5 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}