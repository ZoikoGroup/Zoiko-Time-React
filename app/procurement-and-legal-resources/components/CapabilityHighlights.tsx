"use client";

import {
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiLock,
} from "react-icons/fi";

const features = [
  {
    icon: FiBookOpen,
    title: "Resource registry",
    description:
      "A single, searchable index of current documentation across security, privacy, legal, and accessibility.",
  },
  {
    icon: FiCheckCircle,
    title: "Guided requests",
    description:
      "A structured flow routes controlled and customer-specific resources to the right reviewer.",
  },
  {
    icon: FiClock,
    title: "Version tracking",
    description:
      "Every document carries a version, effective date, and change history — nothing goes stale silently.",
  },
  {
    icon: FiLock,
    title: "Governed access",
    description:
      "Public, controlled, and customer-specific tiers — approvals stay with authorized reviewers, never automatic.",
  },
];

export default function CapabilityHighlights() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        {/* Header */}
        <div className="max-w-[820px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Capability Highlights
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Everything due diligence actually needs
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-10 grid w-full gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-500/10">
                  <Icon className="h-5 w-5 text-emerald-500" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-base font-semibold text-slate-800 dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}