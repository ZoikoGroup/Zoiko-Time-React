import React from "react";

const helpCards = [
  {
    title: "Sign In or Account Access",
    description:
      "Password resets, workspace access, login errors, SSO issues, verification emails, locked accounts, and role access.",
    link: "Get Login Help →",
    image: "/QuikHelp/access.svg",
  },
  {
    title: "Time or Timesheet Help",
    description:
      "Clock-in/out, breaks, missing entries, submission, approvals, returned timesheets, and correction requests.",
    link: "Get Time & Timesheet Help →",
    image: "/QuikHelp/time.svg",
  },
  {
    title: "Administrator Setup",
    description:
      "Workspace setup, departments, workers, permissions, policies, projects, reporting, and launch configuration.",
    link: "View Admin Guide →",
    image: "/QuikHelp/setup.svg",
  },
  {
    title: "Mobile App Help",
    description:
      "Mobile login, clock-in, notifications, field work, device issues, connectivity, and troubleshooting.",
    link: "View Mobile App Help →",
    image: "/QuikHelp/mobile.svg",
  },
  {
    title: "Billing & Subscription Help",
    description:
      "Invoices, payments, plans, trial questions, renewals, failed payments, and billing account access.",
    link: "Get Billing Help →",
    image: "/QuikHelp/billing.svg",
  },
  {
    title: "System Availability",
    description:
      "Service interruptions, degraded performance, planned maintenance, and incident updates.",
    link: "Check System Status →",
    image: "/QuikHelp/availability.svg",
  },
];

export default function QuickHelp() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            Quick Help
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Quick help paths
          </h2>

          <p className="mt-5 text-base text-gray-600 dark:text-slate-300">
            Choose the path that best matches what you need help with.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {helpCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 dark:bg-teal-500/10">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-6 w-6 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-slate-300">
                {card.description}
              </p>

              {/* Link */}
              <button className="mt-6 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
                {card.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}