import Image from "next/image";
import React from "react";

const useCases = [
  {
    icon: "/start-free/remote.png",
    title: "Remote & distributed teams",
    description:
      "Verify work across time zones without micromanagement. Policy-based accountability for remote workers.",
    action: "Start Free",
    color: "bg-sky-100 dark:bg-sky-900/30",
  },
  {
    icon: "/start-free/contractor.png",
    title: "Contractor management",
    description:
      "Track contractor time, approvals, evidence, and billing-ready reports in one workspace.",
    action: "Start Free",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: "/start-free/field.png",
    title: "Field & multi-location",
    description:
      "Manage workforce activity across sites, countries, teams, and time zones with one governed system.",
    action: "Get a Demo",
    color: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    icon: "/start-free/payroll.png",
    title: "Payroll & timesheet integrity",
    description:
      "Reduce dispute risk with structured, verified records and approval-ready payroll reports.",
    action: "Start Free",
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: "/start-free/compliance.png",
    title: "Regulated & compliance teams",
    description:
      "Governance, audit trails, jurisdiction-aware policies, legal hold, and chain-of-custody evidence.",
    action: "Get a Demo",
    color: "bg-cyan-100 dark:bg-cyan-900/30",
  },
];

export default function UseCase() {
  return (
    <section className="w-full bg-teal-900 dark:bg-slate-950 rounded-3xl py-16 px-4 sm:px-6 lg:px-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
            Use Cases
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            See it for your workforce model.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-7 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>

              {/* Action */}
              <button
                className={`mt-8 inline-flex items-center gap-2 font-semibold transition-colors ${
                  item.action === "Get a Demo"
                    ? "text-teal-500 hover:text-teal-400"
                    : "text-teal-700 dark:text-teal-400 hover:text-teal-500"
                }`}
              >
                {item.action}
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}