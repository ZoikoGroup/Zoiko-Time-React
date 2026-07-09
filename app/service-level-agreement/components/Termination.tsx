import React from "react";

export default function Termination() {
  return (
    <section className="mx-auto mt-16 max-w-[696px] px-4 sm:px-6 lg:px-0">
      {/* Section Title */}
      <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
        16. Chronic Service Failure and Termination Right
      </h2>

      {/* Underline */}
      <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

      {/* Content */}
      <div className="mt-8 space-y-7">
        <p className="font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
          Customer may terminate the affected production subscription without
          early termination penalty if ZoikoTime fails to meet the applicable
          Monthly Uptime Commitment for the same Affected Production Service in
          three consecutive calendar months, or in any four calendar months
          within a rolling six-month period.
        </p>

        <p className="font-['Plus_Jakarta_Sans'] text-base font-normal leading-7 text-slate-700 dark:text-slate-300">
          Upon valid termination under this Section, ZoikoTime will refund
          prepaid unused subscription fees for the terminated Affected
          Production Service on a pro-rata basis, subject to set-off for
          undisputed unpaid fees and any contrary negotiated terms in the
          applicable Order Form.
        </p>
      </div>
    </section>
  );
}