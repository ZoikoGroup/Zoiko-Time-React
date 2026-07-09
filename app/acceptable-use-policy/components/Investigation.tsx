import React from "react";

export default function Investigation() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-[696px] px-4 sm:px-0">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          17. Investigation, Enforcement, and Remediation
        </h2>

        {/* Divider */}
        <div className="mt-3 mb-8 h-[3px] w-12 rounded-full bg-teal-600"></div>

        {/* Content */}
        <div className="space-y-8">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Zoiko Tech Inc. may investigate actual or suspected violations of
            this Policy through review of account activity, audit logs,
            configuration settings, API activity, and other reasonably
            necessary information.
          </p>

          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            Where a violation is determined, Zoiko Tech Inc. may take
            appropriate action including issuing warnings, requiring
            remediation, suspending users or accounts, terminating access,
            notifying administrators, preserving evidence, or contacting law
            enforcement where legally required.
          </p>
        </div>
      </div>
    </section>
  );
}