import React from "react";

export default function Notification() {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          5. Notification of New or Replacement Sub-processors
        </h2>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

        {/* Content */}
        <div className="mt-8 space-y-8">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            ZoikoTime will provide advance notice of new or replacement
            sub-processors through the ZoikoTime Trust Center,
            customer-facing legal documentation, or direct customer
            notification where required under the applicable DPA. The notice
            period is at least 10 business days for standard customers and at
            least 30 days for enterprise customers with contractual notice
            requirements, unless security, legal, or operational urgency
            requires a shorter period.
          </p>

          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Notice will identify the new sub-processor&apos;s name, service
            function, data categories, processing location, and applicable
            transfer safeguards.
          </p>
        </div>
      </div>
    </section>
  );
}