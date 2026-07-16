import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function GetStarted() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-teal-50 to-emerald-50 px-5 py-16 transition-colors duration-300 dark:from-slate-950 dark:to-slate-900 sm:px-8 sm:py-20 lg:min-h-[384px] lg:px-10 lg:py-12">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
        {/* Label */}
        <div className="mb-5 text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
          Get Started
        </div>

        {/* Heading */}
        <h2 className="max-w-[700px] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-[1.05]">
          If Decisions Are Not Structured,
          <br className="hidden sm:block" /> They{" "}
          <span className="text-teal-600 dark:text-teal-400">
            Cannot Be Trusted
          </span>
        </h2>

        {/* Description */}
        <p className="mt-7 max-w-[790px] text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
          ZoikoTime gives your organisation the execution infrastructure to
          make workforce decisions that are consistent, traceable, and
          defensible — at every level, in every context.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-lg bg-teal-600 px-7 text-base font-semibold text-white shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)] transition hover:bg-teal-700 sm:w-52"
          >
            <ArrowUpRight className="h-4 w-4" />
            <span>Request Demo</span>
          </button>

          <button
            type="button"
            className="h-12 w-full rounded-lg border border-teal-600 px-7 text-base font-semibold text-teal-600 transition hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white sm:w-52"
          >
            Run Case Scenario
          </button>
        </div>
      </div>
    </section>
  );
}