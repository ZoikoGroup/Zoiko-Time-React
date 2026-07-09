import React from "react";

const retentionSchedule = [
  {
    title: "Active workforce records and time data:",
    description:
      "Retained for the duration of the subscription plus a configurable post-termination period (default 30 days).",
  },
  {
    title: "Audit logs and access-to-view logs:",
    description:
      "Retained for a minimum of 12 months; enterprise configurations may extend this period.",
  },
  {
    title: "Evidence records and chain-of-custody documentation:",
    description:
      "Retained based on customer legal and compliance configuration.",
  },
  {
    title: "Billing and financial records:",
    description:
      "Retained for at least 7 years or as required by applicable tax and accounting law.",
  },
  {
    title: "Security and incident logs:",
    description:
      "Retained for a minimum of 90 days; critical incidents may be retained longer for legal and regulatory purposes.",
  },
  {
    title: "Support interaction records:",
    description:
      "Retained for the duration of the engagement plus commercially reasonable periods for quality, compliance, and dispute resolution.",
  },
  {
    title: "Deleted user records:",
    description:
      "Purged from production within 30 days of deletion trigger unless subject to legal hold.",
  },
];

export default function DefaultRetentionSchedule() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">

        {/* Heading */}
        <h2 className="text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          5. Default Retention Schedule
        </h2>

        {/* Underline */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600 dark:bg-teal-500" />

        {/* Intro */}
        <p className="mt-7 text-base leading-7 text-slate-700 dark:text-slate-300">
          Unless an Order Form, Customer configuration, enterprise agreement,
          legal hold, regulatory rule, or applicable law requires otherwise,
          ZoikoTime applies the following baseline retention standards:
        </p>

        {/* Retention List */}
        <div className="mt-6 space-y-5">
          {retentionSchedule.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 text-lg font-bold text-teal-600 dark:text-teal-400">
                ›
              </span>

              <p className="text-base leading-7 text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">
                  {item.title}
                </span>{" "}
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}