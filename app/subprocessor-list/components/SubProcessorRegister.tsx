import React from "react";

export default function SubProcessorRegister() {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          3. Authorized Sub-processor Register
        </h2>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

        {/* Description */}
        <div className="mt-8 space-y-8">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            ZoikoTime maintains an authorized sub-processor register identifying
            each sub-processor, corporate location, service function,
            categories of Customer Data processed, processing location, and
            applicable transfer safeguards. The current register is available
            through the ZoikoTime Trust Center or upon request.
          </p>

          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Sub-processors are classified as:
          </p>
        </div>

        {/* Classification List */}
        <div className="mt-6 space-y-4">
          {/* Core */}
          <div className="flex items-start gap-3">
            <span className="mt-[2px] text-base font-bold leading-7 text-teal-600">
              ›
            </span>

            <div className="flex-1 md:grid md:grid-cols-[218px_1fr]">
              <p className="text-base font-bold leading-7 text-slate-700 dark:text-slate-200">
                Core sub-processors:
              </p>

              <p className="mt-1 md:mt-0 text-base leading-7 text-slate-700 dark:text-slate-300">
                Required to operate the Service or its security baseline
              </p>
            </div>
          </div>

          {/* Conditional */}
          <div className="flex items-start gap-3">
            <span className="mt-[2px] text-base font-bold leading-7 text-teal-600">
              ›
            </span>

            <div className="flex-1 md:grid md:grid-cols-[218px_1fr]">
              <p className="text-base font-bold leading-7 text-slate-700 dark:text-slate-200">
                Conditional sub-
                <br />
                processors:
              </p>

              <p className="mt-1 md:mt-0 text-base leading-7 text-slate-700 dark:text-slate-300">
                Used only if Customer enables a specific feature,
                communication channel, payment method, integration, region, or
                support workflow
              </p>
            </div>
          </div>

          {/* Enterprise */}
          <div className="flex items-start gap-3">
            <span className="mt-[2px] text-base font-bold leading-7 text-teal-600">
              ›
            </span>

            <div className="flex-1 md:grid md:grid-cols-[218px_1fr]">
              <p className="text-base font-bold leading-7 text-slate-700 dark:text-slate-200">
                Enterprise-restricted
                <br />
                sub-processors:
              </p>

              <p className="mt-1 md:mt-0 text-base leading-7 text-slate-700 dark:text-slate-300">
                May be disabled, region-locked, or substituted under an
                enterprise agreement where commercially and technically
                feasible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}