import React from "react";
import { ArrowRight } from "lucide-react";

export default function RetentionCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
      {/* Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:py-20">
        {/* Left Content */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Govern Workforce Records Across
            <br className="hidden sm:block" />
            Their Full Lifecycle
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 dark:text-slate-300">
            ZoikoTime helps enterprise organizations configure retention
            policies, apply legal holds, control access, export evidence
            packages, and manage record expiry with appropriate safeguards and
            audit trails.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-0 lg:flex-col">
          <button className="inline-flex h-12 min-w-[260px] items-center justify-center rounded-lg bg-teal-600 px-8 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition-all duration-300 hover:bg-teal-700">
            Contact Sales
          </button>

          <button className="inline-flex h-12 min-w-[260px] items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
            View Security Addendum
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}