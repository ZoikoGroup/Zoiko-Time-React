"use client";

import {
  FiLock,
  FiDatabase,
  FiFileText,
  FiCheckCircle,
  FiCpu,
  FiAlertCircle,
} from "react-icons/fi";

const categories = [
  {
    icon: FiLock,
    title: "Security & Architecture",
    description:
      "System architecture overview, security controls summary, penetration test summaries.",
  },
  {
    icon: FiDatabase,
    title: "Privacy & Data Handling",
    description:
      "Data processing addendum, sub-processor list, data map, retention overview.",
  },
  {
    icon: FiFileText,
    title: "Legal & Contract",
    description:
      "Master service agreement template, order form guidance, acceptable-use policy.",
  },
  {
    icon: FiCheckCircle,
    title: "Accessibility",
    description:
      "WCAG 2.2 AA conformance statement and assistive-technology testing summary.",
  },
  {
    icon: FiCpu,
    title: "Governance & AI",
    description:
      "Human-in-command doctrine, deterministic classification overview, AI governance summary.",
  },
  {
    icon: FiAlertCircle,
    title: "Incident & Support",
    description:
      "Responsible disclosure policy, support SLAs, status-page and incident-communication overview.",
  },
];

export default function ResourceCategories() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Resource Categories
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Organized by the diligence teams that need
            <br className="hidden sm:block" />
            them
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
                  <Icon className="h-5 w-5 text-[#3FB97A]" />
                </div>

                <h3 className="mt-5 text-base font-semibold text-slate-800 dark:text-white">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {category.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}