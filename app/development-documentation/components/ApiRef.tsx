"use client";

import {
  FiActivity,
  FiBookOpen,
  FiClock,
  FiDatabase,
  FiFileText,
  FiShield,
} from "react-icons/fi";

const apiResources = [
  {
    title: "Records API",
    description: (
      <>
        Read time records, states, sources, and
        <br className="hidden sm:block" /> provenance.
      </>
    ),
    label: "Records →",
    icon: FiClock,
  },
  {
    title: "Authentication",
    description: (
      <>
        Scoped API keys, OAuth, and least-privilege
        <br className="hidden sm:block" /> access.
      </>
    ),
    label: "Auth →",
    icon: FiShield,
  },
  {
    title: "Policies",
    description: (
      <>
        Fetch versioned, deterministic policy
        <br className="hidden sm:block" /> definitions.
      </>
    ),
    label: "Policies →",
    icon: FiFileText,
  },
  {
    title: "Evidence Ledger",
    description: (
      <>
        Retrieve preserved, append-only evidence
        <br className="hidden sm:block" /> trails.
      </>
    ),
    label: "Evidence →",
    icon: FiDatabase,
  },
  {
    title: "Webhooks & Events",
    description: (
      <>
        Subscribe to record, review, and evidence
        <br className="hidden sm:block" /> events.
      </>
    ),
    label: "Events →",
    icon: FiActivity,
  },
  {
    title: "Reports",
    description: <>Query aggregate, governed reporting data.</>,
    label: "Reports →",
    icon: FiBookOpen,
  },
];

export default function ApiRef() {
  return (
    <section className="w-full bg-gray-50 py-14 dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            API Reference
          </div>

          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Explore the API
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            Six core resources — records, auth, policies, evidence, events,
            and reports.
          </p>
        </div>

        {/* API Cards */}
        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apiResources.map((resource) => {
            const Icon = resource.icon;

            return (
              <div
                key={resource.title}
                className="group min-h-[208px] rounded-2xl border border-slate-200 bg-white p-[23px] shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(14,31,61,0.08)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-600"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-white dark:border-teal-900/60 dark:from-teal-950/60 dark:to-slate-900">
                  <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {resource.title}
                </h3>

                {/* Description */}
                <div className="mt-1.5 min-h-[40px] text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {resource.description}
                </div>

                {/* Label */}
                <div className="mt-4 text-xs font-semibold leading-5 text-teal-700 dark:text-teal-400">
                  {resource.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}