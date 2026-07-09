import React from "react";

export default function CustomerObjection() {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          6. Customer Objection Rights and Resolution Process
        </h2>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Paragraphs */}
        <div className="mt-8 space-y-6">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Where a Customer has a legitimate privacy, security, or compliance
            concern about a new sub-processor, Customer may notify ZoikoTime in
            writing within the applicable objection window. ZoikoTime will work
            in good faith to assess the concern, consider whether the concern
            can be addressed through alternative configuration or technical
            measures, and, if the concern cannot be resolved, discuss options
            including Customer termination rights under the applicable
            agreement.
          </p>

          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Objection rights apply only where Customer has a legitimate privacy
            or security basis for the objection. A general preference against a
            vendor, commercial considerations, or non-specific concerns do not
            constitute a valid objection basis for SCC or DPA purposes.
          </p>
        </div>
      </div>
    </section>
  );
}