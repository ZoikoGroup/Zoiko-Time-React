import React from "react";

export default function Measurement() {
  return (
    <section className="mx-auto mt-16 max-w-[696px] px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
        5. Availability Measurement Methodology
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

      {/* Description */}
      <p className="mt-8 text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        Monthly Uptime Percentage is measured using ZoikoTime&apos;s internal
        production monitoring systems, synthetic transaction monitoring,
        service logs, and, where applicable, external monitoring of equivalent
        rigor. The Core Platform will be treated as unavailable during a
        measurement interval where ZoikoTime-controlled production systems fail
        one or more material availability tests for the affected service.
      </p>

      {/* Sub Heading */}
      <h3 className="mt-10 text-lg font-bold leading-8 text-slate-900 dark:text-white">
        5.2 Downtime Start and End
      </h3>

      {/* Bullet List */}
      <ul className="mt-6 space-y-5">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">Start of Downtime:</span> Detected by
            ZoikoTime monitoring, third-party monitoring of equivalent rigor,
            or customer-submitted evidence later validated by ZoikoTime.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">End of Downtime:</span> When monitoring
            confirms restored availability for at least three consecutive
            measurement intervals.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">Customer Evidence:</span> Customer may
            submit logs, screenshots, monitoring records, or support ticket
            data to support a claim — ZoikoTime will review in good faith.
          </p>
        </li>
      </ul>

      {/* Second Sub Heading */}
      <h3 className="mt-10 text-lg font-bold leading-8 text-slate-900 dark:text-white">
        5.3 Enterprise Verification Right
      </h3>

      {/* Paragraph */}
      <p className="mt-6 text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        For Enterprise Customers, no more than once in any twelve-month period,
        Customer may request independent verification of ZoikoTime&apos;s
        uptime measurement by a mutually agreed third-party auditor under
        appropriate confidentiality protections.
      </p>
    </section>
  );
}