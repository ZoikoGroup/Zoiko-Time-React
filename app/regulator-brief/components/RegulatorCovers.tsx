"use client";

import React from "react";
import {
  Shield,
  Lock,
  Briefcase,
  List,
  Clock3,
  User,
} from "lucide-react";

const covers = [
  {
    title: "Governance posture",
    description:
      "How ZoikoTime governs workforce records and accountability.",
    icon: Shield,
  },
  {
    title: "Privacy boundaries",
    description:
      "What is recorded and the lines ZoikoTime will not cross.",
    icon: Lock,
  },
  {
    title: "Audit evidence model",
    description:
      "How time, attendance, and exceptions become defensible evidence.",
    icon: Briefcase,
  },
  {
    title: "Policy controls",
    description:
      "Consistent policy application across teams and jurisdictions.",
    icon: List,
  },
  {
    title: "Enterprise assurance",
    description:
      "The assurance framework that supports procurement and board review.",
    icon: Clock3,
  },
  {
    title: "Human accountability",
    description:
      "Decisions remain explainable and under human command.",
    icon: User,
  },
];

export default function RegulatorCovers() {
  return (
    <section className="bg-gray-50 py-16 transition-colors dark:bg-slate-950 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Inside The Brief
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            What the regulator brief covers
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {covers.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-[0_6px_18px_rgba(14,31,61,0.06)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_14px_30px_rgba(14,31,61,0.12)]
                dark:border-slate-700
                dark:bg-slate-900
                dark:hover:border-teal-600/40
                dark:hover:shadow-none
              "
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
                <item.icon
                  size={20}
                  strokeWidth={2}
                  className="text-teal-600"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}