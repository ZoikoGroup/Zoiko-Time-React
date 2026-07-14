import React from "react";

export default function Explainability() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16 md:py-[74px]">

        {/* Heading */}
        <div className="text-center">

          <p className="text-teal-600 text-xs font-semibold uppercase leading-5 tracking-widest">
            Explainability
          </p>

          <h2 className="mt-2 text-slate-800 dark:text-white text-3xl md:text-4xl font-bold leading-10">
            Explainability, context, and evidence
          </h2>

          <p className="mt-5 max-w-[650px] mx-auto text-gray-500 dark:text-gray-400 text-base font-normal leading-7">
            An AI alert without context creates confusion. ZoikoTime provides supporting
            <br className="hidden md:block" />
            information so users understand why review may be needed.
          </p>

        </div>


        {/* Details */}
        <div className="mt-16 max-w-[1132px] mx-auto">

          <div className="space-y-6">

            <div>
              <h3 className="text-gray-700 dark:text-gray-200 text-sm font-bold">
                Connected context
              </h3>

              <p className="mt-1 text-gray-700 dark:text-gray-400 text-base leading-6">
                Connect signals to source records, audit trails, screenshots where enabled, and policy versions.
              </p>
            </div>


            <div>
              <h3 className="text-gray-700 dark:text-gray-200 text-sm font-bold">
                Supporting evidence
              </h3>

              <p className="mt-1 text-gray-700 dark:text-gray-400 text-base leading-6">
                Surface the evidence behind a signal so review is grounded in records.
              </p>
            </div>


            <div>
              <h3 className="text-gray-700 dark:text-gray-200 text-sm font-bold">
                Clear next steps
              </h3>

              <p className="mt-1 text-gray-700 dark:text-gray-400 text-base leading-6">
                Every signal has a path to context, review, correction, escalation, or dismissal.
              </p>
            </div>


            <div>
              <h3 className="text-gray-700 dark:text-gray-200 text-sm font-bold">
                No black boxes
              </h3>

              <p className="mt-1 text-gray-700 dark:text-gray-400 text-base leading-6">
                Avoid opaque AI interfaces; signals are always traceable to their basis.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}