import React from "react";

const comparisonData = [
  "Continuous identity verification throughout each session",
  "Confidence scoring — synthesised decision-grade signal per session",
  "Continuous session validation with anomaly detection",
  "Automatic evidence generation with chain of custody per session",
  "Automated decision engine — accept, flag, or restrict based on confidence",
  "AI reasoning logs embedded in every evidence record",
];

export default function WhyTraditionalSystemsFail() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            Why ZoikoTime
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Why Traditional Systems Fail
          </h2>

          <p className="mt-6 text-slate-600 dark:text-slate-300 leading-8">
            Legacy tools were not designed to verify identity—they were designed
            to record time. The gap between the two is where financial and
            compliance risk lives.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block mt-16 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">

          <div className="grid grid-cols-[2.2fr_1fr_1fr]">

            <div className="bg-slate-100 dark:bg-slate-800 px-8 py-5 font-semibold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700">
              Capability
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 px-8 py-5 text-center font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
              Legacy Tools
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 px-8 py-5 text-center border-b border-slate-200 dark:border-slate-700">
              <div className="font-semibold text-teal-600">
                ZoikoTime®
              </div>

              <span className="inline-block mt-2 rounded-full border border-teal-200 dark:border-teal-700 px-3 py-1 text-xs font-semibold text-teal-600">
                Verification OS
              </span>
            </div>

            {comparisonData.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  className={`px-8 py-5 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 ${
                    index % 2 === 1
                      ? "bg-slate-50 dark:bg-slate-800/40"
                      : ""
                  }`}
                >
                  {item}
                </div>

                <div
                  className={`flex items-center justify-center text-2xl text-slate-300 border-b border-slate-200 dark:border-slate-700 ${
                    index % 2 === 1
                      ? "bg-slate-50 dark:bg-slate-800/40"
                      : ""
                  }`}
                >
                  ✗
                </div>

                <div
                  className={`flex items-center justify-center text-2xl text-teal-600 border-b border-slate-200 dark:border-slate-700 ${
                    index % 2 === 1
                      ? "bg-teal-50/60 dark:bg-teal-900/10"
                      : "bg-teal-50/40 dark:bg-teal-900/5"
                  }`}
                >
                  ✓
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden mt-12 space-y-4">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm"
            >
              <h3 className="font-medium text-slate-900 dark:text-white">
                {item}
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-lg bg-slate-100 dark:bg-slate-800 p-4 text-center">
                  <p className="text-xs font-semibold uppercase text-slate-500">
                    Legacy Tools
                  </p>

                  <div className="mt-2 text-2xl text-slate-400">
                    ✗
                  </div>
                </div>

                <div className="rounded-lg bg-teal-50 dark:bg-teal-900/20 p-4 text-center">
                  <p className="text-xs font-semibold uppercase text-teal-600">
                    ZoikoTime®
                  </p>

                  <div className="mt-2 text-2xl text-teal-600">
                    ✓
                  </div>

                  <span className="mt-3 inline-block rounded-full border border-teal-200 dark:border-teal-700 px-2 py-1 text-[10px] font-semibold text-teal-600">
                    Verification OS
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}