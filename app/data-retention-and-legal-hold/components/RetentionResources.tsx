import React from "react";
import Link from "next/link";

const resources = [
  {
    icon: "📋",
    title: "Audit-Grade Evidence",
    description:
      "Understand how ZoikoTime supports evidence integrity, audit trails, and evidence packages.",
    action: "Explore Audit-Grade Evidence",
    href: "/audit-grade-evidence",
  },
  {
    icon: "🔒",
    title: "Security Addendum",
    description:
      "Review access controls, encryption, infrastructure safeguards, and administrative security.",
    action: "View Security Addendum",
    href: "/security-addendum",
  },
  {
    icon: "🏢",
    title: "Enterprise Governance",
    description:
      "See how ZoikoTime supports policy governance, approvals, and role-based access.",
    action: "Explore Enterprise Governance",
    href: "/enterprise",
  },
];

export default function RetentionResources() {
  return (
    <section className="bg-slate-100 px-5 py-16 dark:bg-slate-900 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Resource Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Icon */}
              <div className="text-3xl">
                {resource.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-300">
                {resource.description}
              </p>

              {/* Link */}
              <Link
                href={resource.href}
                className="mt-8 inline-flex items-center text-sm font-bold text-teal-600 transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
              >
                {resource.action}

                <span className="ml-2">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-lg border border-slate-200 bg-gray-50 p-6 dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm leading-7 text-slate-500 dark:text-slate-300">
            ZoikoTime provides retention, legal hold, export, audit, and
            deletion-related functionality to support customer workflows.
            ZoikoTime does not provide legal advice, does not determine legal
            retention requirements, and does not guarantee compliance with any
            specific legal, regulatory, or judicial requirement. Customers
            remain responsible for configuring retention, preservation, access,
            export, and deletion policies appropriate to their organization and
            obligations.
          </p>
        </div>

      </div>
    </section>
  );
}