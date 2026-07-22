"use client";

import React from "react";

export default function WhoShouldAttend() {
  const attendees = [
    {
      role: "CIO / CTO",
      title: "Architecture fit",
      description:
        "Confirm the platform fits your enterprise stack.",
    },
    {
      role: "CISO",
      title: "Security assurance",
      description:
        "Validate access, identity, and security posture.",
    },
    {
      role: "Legal",
      title: "Compliance & risk",
      description:
        "Review residency, retention, and legal hold.",
    },
    {
      role: "HR",
      title: "Policy & fairness",
      description:
        "Confirm consistent, fair workforce rules.",
    },
    {
      role: "Finance",
      title: "Commercial path",
      description:
        "Align on value, pricing, and approval.",
    },
    {
      role: "Procurement",
      title: "Buying process",
      description:
        "Map the path to contract efficiently.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Buying Committee
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Who should attend
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {attendees.map((item) => (
            <div
              key={item.role}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                {item.role}
              </p>

              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}