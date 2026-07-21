import React from "react";
import {
  Clock3,
  ListChecks,
  BadgeCheck,
  Shield,
} from "lucide-react";

export default function ValueDrivers() {
  const drivers = [
    {
      icon: <Clock3 className="h-5 w-5" />,
      title: "Time Accuracy",
      description:
        "Recover paid time that is currently unverifiable or misallocated across teams and projects.",
    },
    {
      icon: <ListChecks className="h-5 w-5" />,
      title: (
        <>
          Manual Review
          <br />
          Reduction
        </>
      ),
      description:
        "Cut admin and manager time spent checking attendance, disputes, and timesheets.",
    },
    {
      icon: <BadgeCheck className="h-5 w-5" />,
      title: "Billable Evidence",
      description:
        "Strengthen confidence in client-billable work with defensible, evidence-backed records.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Governance Confidence",
      description:
        "Directional value from audit-ready records and consistent policy — not legal savings.",
    },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 transition-colors duration-300 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Where The Value Comes From
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-[40px]">
            Four directional value drivers
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-500 dark:text-slate-400">
            ZoikoTime estimates value from recoverable time accuracy,
            reduced manual review, client-billable evidence, and
            governance confidence — never from inflated or guaranteed
            claims.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-teal-600 dark:bg-teal-950/40 dark:text-teal-400">
                {driver.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 min-h-[56px] text-xl font-semibold leading-8 text-slate-800 dark:text-white">
                {driver.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-base leading-8 text-gray-500 dark:text-slate-400">
                {driver.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}