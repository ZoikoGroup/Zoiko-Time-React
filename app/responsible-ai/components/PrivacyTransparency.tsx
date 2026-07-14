import React from "react";

export default function PrivacyTransparency() {
  return (
    <section className="w-full bg-white dark:bg-slate-950 py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-6">

        {/* Header */}
        <div className="text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Privacy
          </p>

          <h2 className="mx-auto mt-3 max-w-[600px] text-3xl md:text-4xl font-bold leading-tight text-slate-800 dark:text-white">
            Privacy, permissions, and worker transparency
          </h2>

          <p className="mx-auto mt-5 max-w-[670px] text-base leading-7 text-gray-500 dark:text-gray-400">
            AI in workforce systems must be governed because it can affect trust,
            fairness, and decision quality.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]">

            <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Configurable visibility
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Configure what is visible, to whom, and under what policy.
            </p>

          </div>

                    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]">

            <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Redaction & retention
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Apply redaction and retention controls to sensitive information.
            </p>

          </div>


          <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]">

            <h3 className="text-base font-semibold leading-7 text-slate-800 dark:text-white">
              Worker-facing transparency
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
              Provide worker explanations according to policy and applicable law.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}