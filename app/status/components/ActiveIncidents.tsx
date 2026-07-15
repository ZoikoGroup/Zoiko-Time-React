import React from "react";
import { ShieldCheck } from "lucide-react";

export default function ActiveIncidents() {
  return (
    <section className="bg-white dark:bg-slate-950 px-4 sm:px-6 py-16">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Active Incidents
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800 dark:text-white">
            Active Incidents
          </h2>
        </div>

        {/* Status Card */}
        <div className="mt-10 rounded-2xl border border-emerald-100 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/20 px-6 py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <ShieldCheck className="h-6 w-6 shrink-0 text-teal-600" />

            <p className="text-base font-medium text-slate-800 dark:text-slate-200">
              No active incidents currently reported for monitored ZoikoTime
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}