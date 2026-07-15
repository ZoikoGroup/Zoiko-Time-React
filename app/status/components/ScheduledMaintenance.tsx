import React from "react";

export default function ScheduledMaintenance() {
  return (
    <section className="bg-slate-50 dark:bg-slate-950 px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Maintenance
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Scheduled Maintenance
          </h2>
        </div>

        {/* Maintenance Card */}
        <div className="mt-12 rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-lg dark:border-slate-700 dark:border-l-blue-500 dark:bg-slate-900 md:p-8">
          <h3 className="text-lg font-bold text-slate-800 dark:text-white">
            Scheduled reporting infrastructure maintenance
          </h3>

          <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Window:
              </span>{" "}
              June 22, 2026, 11:00 PM – 12:30 AM ET
            </p>

            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Expected impact:
              </span>{" "}
              Some report exports may be delayed. Core application access and
              time capture are expected to remain available.
            </p>

            <p>
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                Customer action:
              </span>{" "}
              No action required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}