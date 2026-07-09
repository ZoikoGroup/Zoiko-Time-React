import React from "react";

export default function Precedence() {
  return (
    <section className="mx-auto mt-16 max-w-[696px] px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
        26. Order of Precedence
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

      {/* Description */}
      <p className="mt-8 text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        If there is a conflict between this SLA and another ZoikoTime
        agreement, the following order applies:
      </p>

      {/* Order List */}
      <ul className="mt-8 space-y-5">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            1. Signed enterprise MSA or negotiated customer-specific addendum
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            2. Applicable Order Form and Subscription Agreement for commercial
            terms
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            3. Data Processing Addendum for personal data processing
            obligations
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            4. Security Measures Schedule for technical and organizational
            security measures
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            5. This SLA for availability, support response, incident
            communications, RTO/RPO, and service credits
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            6. Terms of Service for general platform terms
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            7. All other supporting policies and schedules for their respective
            subject matter
          </p>
        </li>
      </ul>
    </section>
  );
}