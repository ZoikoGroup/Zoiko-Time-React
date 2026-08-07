"use client";

import {
  FiCheckCircle,
  FiUserPlus,
  FiShield,
  FiSettings,
} from "react-icons/fi";

const outcomes = [
  {
    title: "Compliance Readiness",
    description:
      "Get your policy and evidence trail audit-ready.",
    icon: FiCheckCircle,
    color: "text-teal-600",
  },
  {
    title: "Faster Onboarding",
    description:
      "Get new admins and reviewers productive quickly.",
    icon: FiUserPlus,
    color: "text-blue-600",
  },
  {
    title: "Audit Confidence",
    description:
      "See how to prepare exports reviewers can trust.",
    icon: FiShield,
    color: "text-amber-600",
  },
  {
    title: "Product Mastery",
    description:
      "Deep dives on dashboards, workflows, and configuration.",
    icon: FiSettings,
    color: "text-slate-900 dark:text-slate-200",
  },
];

export default function BrowseByOutcome() {
  return (
    <section className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Browse by Outcome
            </span>
          </div>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Find sessions by what you're
            <br className="hidden sm:block" />
            trying to solve.
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

                {/* Content */}
                <h3 className="mt-6 text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

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