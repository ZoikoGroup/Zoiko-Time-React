// components/SupportCards.tsx

import React from "react";

const supportItems = [
  {
    title: "Work-session context",
    description:
      "Help reviewers understand what a worker was doing during a recorded work session.",
  },
  {
    title: "Billing confidence",
    description:
      "Support professional services, client-facing work, and contractor billing where project activity needs backing.",
  },
  {
    title: "Exception review",
    description:
      "Provide context for idle periods, disputed time, unusual activity patterns, or incomplete records.",
  },
  {
    title: "Evidence packaging",
    description:
      "Support evidence records where screenshots are relevant to a review, dispute, audit, or client inquiry.",
  },
  {
    title: "Project accountability",
    description:
      "Help connect recorded time with project-related work, tools, documents, systems, or tasks.",
  },
  {
    title: "Review workflows",
    description:
      "Allow authorized users to review screenshot context inside structured approval or exception workflows.",
  },
];

export default function SupportCards() {
  return (
    <section className="bg-white py-16 md:py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            What They Support
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            What screenshot controls help support
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Used responsibly, screenshots add context to review, billing,
            exceptions, and evidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}