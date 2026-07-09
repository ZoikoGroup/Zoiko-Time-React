import React from "react";

export default function ControllerRoles() {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          2. Controller, Processor, and Sub-processor Roles
        </h2>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Paragraphs */}
        <div className="mt-8 space-y-6">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            For Customer Data processed under the ZoikoTime DPA, Customer is
            generally the controller or business, and Zoiko Tech Inc. is
            generally the processor or service provider. Sub-processors process
            Customer Data on behalf of Zoiko Tech Inc., under Zoiko Tech Inc.'s
            instructions, and only for the purposes described in the authorized
            sub-processor register.
          </p>

          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            ZoikoTime remains responsible for the performance of its
            sub-processors to the extent required by the applicable DPA, the
            Terms of Service, and applicable data protection law.
          </p>

          {/* Notice Card */}
          <div className="rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 px-5 py-4 dark:border-teal-500 dark:bg-emerald-950/40">
            <p className="text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
              A sub-processor may not process Customer Data for its own
              independent commercial purposes, sell Customer Data, use Customer
              Data for cross-customer profiling, or train general-purpose
              models on Customer Data without express written authorization
              from Zoiko Tech Inc. and the applicable Customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}