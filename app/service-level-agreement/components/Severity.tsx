import React from "react";

export default function Severity() {
  return (
    <section className="mx-auto mt-16 max-w-[696px] px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
        9. Incident Severity Levels
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

      {/* Description */}
      <p className="mt-8 text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        ZoikoTime classifies incidents by severity based on objective impact,
        scope, regulatory sensitivity, data integrity risk, security
        implications, availability impact, and Customer&apos;s purchased
        support tier.
      </p>

      {/* Severity Levels */}
      <ul className="mt-8 space-y-5">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">
              Severity 1 — Critical:
            </span>{" "}
            Complete production service unavailability or security breach with
            confirmed data impact. 24/7 response, initial acknowledgement
            within 30 minutes.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">
              Severity 2 — High:
            </span>{" "}
            Major service degradation, data capture failure affecting
            production payroll or compliance use. Business-hours response,
            initial acknowledgement within 2 hours.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">
              Severity 3 — Medium:
            </span>{" "}
            Non-critical feature impairment, integration issue, or non-urgent
            compliance concern. Response within 8 business hours.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            <span className="font-bold">
              Severity 4 — Low:
            </span>{" "}
            General questions, minor functionality issues, informational
            requests. Response within 1–3 business days.
          </p>
        </li>
      </ul>
    </section>
  );
}