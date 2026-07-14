import React from "react";

const components = [
  "Web App",
  "Authentication & SSO",
  "Time & Activity Capture",
  "Screenshots & Redaction",
  "Reporting & Analytics",
  "Mobile App",
  "Notifications",
  "Integrations & APIs",
  "Billing & Subscriptions",
  "Help Center & Support",
];

export default function ComponentStatus() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Components
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white md:text-4xl">
            Component Status
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            Review the current status of monitored ZoikoTime platform services.
          </p>
        </div>

        {/* Component Status Card */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
          {components.map((component, index) => (
            <div
              key={component}
              className={`flex flex-col gap-3 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                index !== components.length - 1
                  ? "border-b border-slate-200 dark:border-slate-800"
                  : ""
              }`}
            >
              {/* Component Name */}
              <h3 className="text-base font-medium text-slate-800 dark:text-white">
                {component}
              </h3>

              {/* Status */}
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-sm bg-green-500"></span>

                <span className="text-sm font-semibold text-green-700 dark:text-green-400">
                  Operational
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}