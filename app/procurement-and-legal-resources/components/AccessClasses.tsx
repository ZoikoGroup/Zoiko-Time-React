"use client";

import { FiCheck } from "react-icons/fi";

const accessClasses = [
  {
    badge: "Public",
    badgeClass:
      "bg-emerald-50 text-teal-700 dark:bg-emerald-500/10 dark:text-teal-300",
    title: "Open documentation",
    description:
      "Available to anyone without a request — no login or NDA required.",
    items: [
      "Data Processing Addendum",
      "Accessibility Conformance Statement",
      "Anti-Surveillance Principles",
    ],
    iconColor: "text-teal-700 dark:text-teal-300",
    border:
      "border-slate-200 dark:border-slate-800",
    shadow:
      "shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]",
  },
  {
    badge: "Controlled",
    badgeClass:
      "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
    title: "Reviewed on request",
    description:
      "Released after a guided request and reviewer confirmation of purpose and organization.",
    items: [
      "Security controls summary",
      "Sub-processor list",
      "System architecture overview",
    ],
    iconColor: "text-amber-700 dark:text-amber-300",
    border:
      "border-teal-600 dark:border-teal-500",
    shadow:
      "shadow-[0px_12px_30px_rgba(16,162,141,0.14)]",
  },
  {
    badge: "Customer-specific",
    badgeClass:
      "bg-indigo-50 text-blue-700 dark:bg-indigo-500/10 dark:text-indigo-300",
    title: "Gated by agreement",
    description:
      "Released only under an active NDA or customer agreement, scoped to that relationship.",
    items: [
      "Penetration test summary",
      "SOC 2 bridge letter",
      "Contract-specific addenda",
    ],
    iconColor: "text-blue-700 dark:text-blue-300",
    border:
      "border-slate-200 dark:border-slate-800",
    shadow:
      "shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)]",
  },
];

export default function AccessClasses() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Access Classes
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Access matches sensitivity — not seniority
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {accessClasses.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border bg-white p-7 ${item.border} ${item.shadow} dark:bg-slate-900`}
            >
              <span
                className={`inline-flex rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide ${item.badgeClass}`}
              >
                {item.badge}
              </span>

              <h3 className="mt-6 text-xl font-semibold text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

              <div className="mt-6 space-y-3">
                {item.items.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3"
                  >
                    <FiCheck
                      className={`mt-0.5 h-4 w-4 shrink-0 ${item.iconColor}`}
                    />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}