"use client";

import {
  FiCalendar,
  FiGlobe,
  FiRepeat,
  FiCheckCircle,
   FiClock,
  FiLock,
} from "react-icons/fi";

const features = [
  {
    icon: FiCalendar,
    title: "Local workdays",
    description:
      "Define working windows, breaks, local time, recurrence, and approved exceptions by role or team.",
  },
  {
    icon: FiGlobe,
    title: "Timezone-aware coverage",
    description:
      "Plan overlap and service windows using local time without creating always-on expectations.",
  },
  {
    icon: FiRepeat,
    title: "Structured handoffs",
    description:
      "Transfer work with owner, receiver, status, needed-by time, context, evidence, and acknowledgment.",
  },
  {
    icon: FiCheckCircle,
    title: "Approved time records",
    description:
      "Preserve source, corrections, approvals, and downstream status across local dates and offline periods.",
  },
  {
    icon:  FiClock,
    title: "Visible work day boundaries",
    description:
      "Show core overlap, quiet hours, unavailable time, escalation, and exception rules.",
  },
  {
    icon: FiLock,
    title: "Privacy-respecting evidence",
    description:
      "Use the minimum data needed for coordination and prohibit productivity surveillance.",
  },
];

export default function RemoteFeatures() {
  return (
    <section className="bg-emerald-50 py-16 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
                  <Icon className="h-5 w-5 text-emerald-700 dark:text-emerald-400" />
                </div>

                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}