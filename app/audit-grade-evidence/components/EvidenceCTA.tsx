import React from "react";
import { ArrowRight } from "lucide-react";

const EvidenceCTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-950">
      {/* Top Gradient Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content */}
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight text-slate-900 dark:text-white">
              Create Workforce Records That Can Be
              <br className="hidden lg:block" />
              Reviewed and Defended
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600 dark:text-slate-400">
              ZoikoTime helps organizations preserve workforce evidence with
              the context, approvals, corrections, and policy references that
              support review, billing, payroll, compliance, and legal
              workflows.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:w-[290px]">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-teal-600/20 transition hover:bg-teal-700">
              Contact Sales
              <ArrowRight className="h-5 w-5" />
            </button>

            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-8 py-4 text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400">
              Explore Data Retention &amp; Legal Hold
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceCTA;