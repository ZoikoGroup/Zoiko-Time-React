"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const useCases = [
  {
    icon: "/start-free/remote.png",
    title: "Remote & distributed teams",
    description:
      "Verify work across time zones without micromanagement. Policy-based accountability for remote workers.",
    action: "Start Free",
    href: "https://getzoikotime.com/",
    color: "bg-sky-100 dark:bg-sky-900/30",
  },
  {
    icon: "/start-free/contractor.png",
    title: "Contractor management",
    description:
      "Track contractor time, approvals, evidence, and billing-ready reports in one workspace.",
    action: "Start Free",
    href: "https://getzoikotime.com/",
    color: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: "/start-free/field.png",
    title: "Field & multi-location",
    description:
      "Manage workforce activity across sites, countries, teams, and time zones with one governed system.",
    action: "Get a Demo",
    href: "/request-a-demo",
    color: "bg-amber-100 dark:bg-amber-900/30",
  },
  {
    icon: "/start-free/payroll.png",
    title: "Payroll & timesheet integrity",
    description:
      "Reduce dispute risk with structured, verified records and approval-ready payroll reports.",
    action: "Start Free",
    href: "https://getzoikotime.com/",
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: "/start-free/compliance.png",
    title: "Regulated & compliance teams",
    description:
      "Governance, audit trails, jurisdiction-aware policies, legal hold, and chain-of-custody evidence.",
    action: "Get a Demo",
    href: "/request-a-demo",
    color: "bg-cyan-100 dark:bg-cyan-900/30",
  },
];

export default function UseCase() {
  return (
    <section className="w-full rounded-3xl bg-teal-900 px-4 py-16 transition-colors duration-300 dark:bg-slate-950 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
            Use Cases
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            See it for your workforce model.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
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
              {item.href.startsWith("http") ? (
                <a
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#3FB97A] transition-colors hover:text-[#3FB97A]"
                >
                  {item.action}
                  <span>→</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[#3FB97A] transition-colors hover:text-[#3FB97A]"
                >
                  {item.action}
                  <span>→</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}