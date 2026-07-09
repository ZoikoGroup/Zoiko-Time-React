import React from "react";

export default function PurposeLegalStatus() {
  return (
    <section className="py-12 md:py-14">
      <div className="mx-auto max-w-[696px] px-5 sm:px-6 lg:px-0">
        {/* Section Title */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          1. Purpose and Legal Status
        </h2>

        {/* Divider */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600" />

        {/* Content */}
        <div className="mt-8 space-y-8">
          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            This Sub-processor Policy and Register governs how Zoiko Tech Inc.,
            acting through the ZoikoTime platform, appoints, manages, reviews,
            replaces, and removes third-party processors that may process
            Customer Data in connection with the ZoikoTime platform.
          </p>

          <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
            This Policy is incorporated by reference into the ZoikoTime Terms
            of Service, the ZoikoTime Data Processing Addendum, applicable order
            forms, and any enterprise agreement that expressly references it.
            It is designed for customers, procurement teams, privacy teams,
            security teams, legal reviewers, auditors, and enterprise
            governance stakeholders who require a clear, defensible, and
            operational sub-processor register.
          </p>
        </div>
      </div>
    </section>
  );
}