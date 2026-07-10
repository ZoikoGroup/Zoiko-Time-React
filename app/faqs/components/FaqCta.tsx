import React from "react";

export default function FaqCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-950">
      {/* Top Gradient Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 lg:flex-row lg:px-8">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white lg:text-4xl">
            Still Have Questions?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400">
            Explore the Help Center, review Product Documentation, or contact
            ZoikoTime for commercial, enterprise, or procurement inquiries.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-col gap-4 sm:w-auto">
          <button className="rounded-lg bg-teal-600 px-10 py-3 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700">
            Visit Help Center
          </button>

          <button className="rounded-lg border border-slate-200 bg-white px-10 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}