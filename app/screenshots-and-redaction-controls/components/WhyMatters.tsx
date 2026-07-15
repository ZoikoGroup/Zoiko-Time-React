// components/WhyMatters.tsx

import React from "react";

const points = [
  {
    title: "Screenshots can support evidence",
    description:
      "Visual context can help clarify whether a work session aligns with project activity, client work, or expected tasks.",
  },
  {
    title: "Screenshots can create privacy risk",
    description:
      "Screens may contain personal messages, health information, passwords, financial details, or client data.",
  },
  {
    title: "Screenshots need policy controls",
    description:
      "Customers define when screenshots are enabled, who they apply to, how often they're captured, and how they're used.",
  },
  {
    title: "Screenshots need access limits",
    description:
      "Not every manager or administrator should automatically see sensitive visual records.",
  },
  {
    title: "Screenshots need retention rules",
    description:
      "Screenshots should not be stored indefinitely without a valid business, legal, or contractual reason.",
  },
  {
    title: "Screenshots need worker transparency",
    description:
      "Workers should understand whether screenshots are enabled, what may be captured, and how records are reviewed.",
  },
];

export default function WhyMatters() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Why It Matters
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">
            Screenshots need governance
          </h2>

          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
            Screenshots can add valuable context—and create real privacy risk.
            They need policy, access limits, retention rules, and transparency.
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-5xl space-y-8">
          {points.map((item, index) => (
            <div key={index}>
              <h3 className="text-base font-bold text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}