import React from "react";

export default function ServiceCredits() {
  return (
    <section className="mx-auto mt-16 max-w-[696px] px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
        14. Service Credits
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

      {/* Description */}
      <p className="mt-8 font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        If ZoikoTime fails to meet the applicable Monthly Uptime Commitment,
        Customer may be eligible for Service Credits as set out below. Service
        Credits are Customer&apos;s sole and exclusive monetary remedy for
        availability failures, except for refunds triggered by termination under
        Section 16, rights expressly stated in a signed Order Form, or
        non-excludable rights under applicable law.
      </p>

      {/* Credit Levels */}
      <ul className="mt-8 space-y-5">
        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Uptime <strong>99.0%–99.49%</strong>: 10% credit of monthly fees for
            affected service.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Uptime <strong>95.0%–98.99%</strong>: 25% credit of monthly fees for
            affected service.
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="mt-0.5 text-lg font-bold leading-7 text-teal-600">
            ›
          </span>
          <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
            Uptime <strong>below 95.0%</strong>: 50% credit of monthly fees for
            affected service.
          </p>
        </li>
      </ul>

      {/* Closing Paragraph */}
      <p className="mt-8 font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
        Multiple qualifying Downtime events in the same calendar month are
        aggregated. Total Service Credits for a calendar month will not exceed
        50% of the monthly subscription fees for the Affected Production
        Service unless an Order Form provides a higher remedy.
      </p>
    </section>
  );
}