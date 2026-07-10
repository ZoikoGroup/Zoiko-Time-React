import React from "react";

export default function BlogCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-950 transition-colors">
      {/* Top Gradient Line */}
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-20 lg:flex-row lg:items-center">
        {/* Left Content */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl dark:text-white">
            Ready to Build Clearer Workforce Records?
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-500 dark:text-slate-400">
            Explore ZoikoTime's workforce assurance platform, review product
            resources, or speak with our team about your workforce model and
            governance goals.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row lg:flex-col">
          <button className="rounded-lg bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition-all duration-300 hover:bg-teal-700 hover:shadow-xl">
            Contact Sales
          </button>

          <button className="rounded-lg border border-slate-300 bg-white px-8 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-400">
            View Product Documentation
          </button>
        </div>
      </div>
    </section>
  );
}