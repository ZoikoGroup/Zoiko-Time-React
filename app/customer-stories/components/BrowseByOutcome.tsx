"use client";

import {
  FiCheckCircle,
  FiZap,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const outcomes = [
  {
    title: "Compliance Readiness",
    description: "Getting policy and evidence audit-ready.",
    icon: FiCheckCircle,
    color: "text-teal-600",
  },
  {
    title: "Faster Rollouts",
    description: "Time from kickoff to full deployment.",
    icon: FiZap,
    color: "text-blue-600",
  },
  {
    title: "Audit Confidence",
    description: "Reviewer-ready exports and evidence trails.",
    icon: FiShield,
    color: "text-amber-600",
  },
  {
    title: "Workforce Trust",
    description: "How transparency changed worker adoption.",
    icon: FiUsers,
    color: "text-slate-900 dark:text-slate-200",
  },
];

export default function BrowseByOutcome() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Browse by Outcome
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Find stories by the result you
            <br className="hidden sm:block" />
            need.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {outcomes.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}