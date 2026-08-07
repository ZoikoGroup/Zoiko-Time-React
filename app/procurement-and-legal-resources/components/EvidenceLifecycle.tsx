"use client";

import {
  FiSearch,
  FiMenu,
  FiCheckCircle,
  FiLock,
  FiClock,
  FiArrowRight,
} from "react-icons/fi";

const steps = [
  {
    icon: FiSearch,
    title: "Discover",
    description:
      "Browse the resource registry by category and access class",
    role: "Buyer",
  },
  {
    icon: FiMenu,
    title: "Request",
    description:
      "Submit a guided request with organization and purpose",
    role: "Buyer",
  },
  {
    icon: FiCheckCircle,
    title: "Review",
    description:
      "Authorized reviewer confirms eligibility and access class",
    role: "ZoikoTime",
  },
  {
    icon: FiLock,
    title: "Release",
    description:
      "Approved evidence delivered with version and expiry noted",
    role: "ZoikoTime",
  },
  {
    icon: FiClock,
    title: "Track",
    description:
      "Updates and re-reviews surface automatically to requestors",
    role: "Buyer + ZoikoTime",
  },
];

export default function EvidenceLifecycle() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1180px]">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Procurement Evidence Lifecycle
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-800 dark:text-white lg:text-4xl">
            From request to reviewed access
          </h2>
        </div>

        {/* Desktop */}
        <div className="mt-12 hidden items-center justify-between xl:flex">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="flex items-center">
                <div className="w-48 rounded-xl border border-slate-200 bg-white p-4 text-center shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F6F2] dark:bg-emerald-500/10">
                    <Icon className="h-5 w-5 text-[#3FB97A]" />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-slate-800 dark:text-white">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {step.description}
                  </p>

                  <p className="mt-4 text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {step.role}
                  </p>
                </div>

                {index !== steps.length - 1 && (
                  <FiArrowRight className="mx-4 h-5 w-5 text-teal-500" />
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet & Mobile */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:hidden">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F6F2] dark:bg-emerald-500/10">
                  <Icon className="h-5 w-5 text-[#3FB97A]" />
                </div>

                <h3 className="mt-4 text-sm font-semibold text-slate-800 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {step.description}
                </p>

                <p className="mt-4 text-xs font-semibold text-teal-700 dark:text-teal-400">
                  {step.role}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}