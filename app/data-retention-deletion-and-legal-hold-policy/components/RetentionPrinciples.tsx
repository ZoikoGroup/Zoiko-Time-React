import React from "react";

const principles = [
  {
    title: "Purpose limitation:",
    description:
      "Data is not retained beyond what is necessary for its documented purpose.",
  },
  {
    title: "Data minimization:",
    description:
      "Retention is proportionate to the operational, legal, compliance, evidentiary, billing and security purposes for which data is processed.",
  },
  {
    title: "Legal defensibility:",
    description:
      "Critical audit, evidentiary, and governance records are retained to support legal defensibility and accountability.",
  },
  {
    title: "Audit integrity:",
    description:
      "Retention policies must not undermine the integrity of audit trails or chain-of-custody evidence.",
  },
  {
    title: "Customer configurability:",
    description:
      "Where technically and commercially feasible, customers may configure retention periods appropriate to their legal, operational, and employment obligations.",
  },
  {
    title: "Controlled deletion:",
    description:
      "Deletion must be controlled, logged, and reasonably irreversible once completed, except where residual copies remain temporarily in encrypted backups.",
  },
];

export default function RetentionPrinciples() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-[696px] px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-8 text-slate-900 dark:text-white">
          4. Retention Principles
        </h2>

        {/* Underline */}
        <div className="mt-3 h-[3px] w-12 rounded-full bg-teal-600 dark:bg-teal-500" />

        {/* Intro */}
        <p className="mt-7 font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
          ZoikoTime applies retention controls according to the following
          principles:
        </p>

        {/* Principles */}
        <div className="mt-6 space-y-5">
          {principles.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-1 text-lg font-bold text-teal-600 dark:text-teal-400">
                ›
              </span>

              <p className="font-['Plus_Jakarta_Sans'] text-base leading-7 text-slate-700 dark:text-slate-300">
                <span className="font-bold text-slate-900 dark:text-white">
                  {item.title}
                </span>{" "}
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-8 rounded-r-lg border-l-[3px] border-teal-600 bg-emerald-50 p-5 dark:border-teal-500 dark:bg-teal-900/20">
          <p className="font-['Plus_Jakarta_Sans'] text-sm font-semibold leading-6 text-teal-700 dark:text-teal-300">
            Legal hold overrides ordinary deletion until the hold is released by
            an authorized legal, compliance, or customer governance function.
          </p>
        </div>
      </div>
    </section>
  );
}