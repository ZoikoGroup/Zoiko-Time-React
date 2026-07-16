"use client";

import React from "react";

const audiences = [
  {
    label: "Workers",
    title: "Workers",
    description:
      "Start work, view current Worker Status, take eligible breaks, submit Early Finish Requests, respond to Unverified Exit prompts, and review a personal timeline.",
  },
  {
    label: "Managers",
    title: "Managers",
    description:
      "Review team status, approve requests, manage exceptions, respond to break overruns, review Unverified Exit events, and apply Authorized Stand-Down.",
  },
  {
    label: "Admins",
    title: "Administrators",
    description:
      "Extend workforce governance to mobile while preserving policy controls, role-based access, session security, audit evidence, and tenant-level visibility.",
  },
  {
    label: "Enterprise",
    title: "Enterprise teams",
    description:
      "Support HR, operations, compliance, finance, IT, and leadership with mobile-ready workforce visibility that respects privacy and strengthens governance.",
  },
];

export default function WhoItsFor() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-20 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[500px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(20,184,166,0.12)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-0">
        {/* Header */}
        <div className="mx-auto max-w-[500px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Who It&apos;s For
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl dark:text-white">
            Who the app is for
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <article
              key={audience.label}
              className="min-h-64 rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0px_12px_28px_rgba(14,31,61,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0px_6px_18px_rgba(0,0,0,0.18)] dark:hover:shadow-[0px_12px_28px_rgba(0,0,0,0.28)]"
            >
              {/* Label */}
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                {audience.label}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {audience.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {audience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}