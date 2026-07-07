import React from "react";

export default function WorkerTransparencySection() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 9 */}
      <section className="mb-10 sm:mb-12 md:mb-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight mb-3">
          9. Worker Transparency, Monitoring Configuration, and Legal
          Compliance
        </h2>

        <div className="w-12 h-1 bg-teal-600 rounded-full mb-5"></div>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7 mb-4">
          Before enabling monitoring-related features including activity
          tracking, screenshots, idle detection, AI-assisted insights, or
          location-related signals, Customer must provide affected workers with
          clear, lawful, and adequate notices describing the nature, purpose,
          scope, retention, and access rights relating to the processing.
        </p>

        <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 leading-7">
          Customer must configure ZoikoTime so that data collection is necessary
          and proportionate to the disclosed legitimate purpose. Customers must
          complete all required works council approvals, union consultations,
          collective bargaining processes, or regulator consultations before
          deploying relevant features.
        </p>
      </section>
    </div>
  );
}
