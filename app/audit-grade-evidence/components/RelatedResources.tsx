import React from "react";
import Link from "next/link";

const resources = [
  {
    icon: "📁",
    title: "Data Retention & Legal Hold",
    description:
      "Understand how ZoikoTime supports retention policies, legal hold preservation, expiry rules, and deletion controls for workforce records.",
    link: "Explore Data Retention & Legal Hold →",
    href: "/data-retention-and-legal-hold",
  },
  {
    icon: "🔒",
    title: "Security Addendum",
    description:
      "Review security safeguards, access controls, authentication practices, encryption, and administrative protections.",
    link: "View Security Addendum →",
    href: "/security-addendum",
  },
  {
    icon: "🆘",
    title: "Help Center",
    description:
      "Access support resources, product guidance, and administrative assistance.",
    link: "Visit Help Center →",
    href: "/help-center",
  },
];

const RelatedResources = () => {
  return (
    <section className="bg-slate-100 px-6 py-16 dark:bg-slate-950 md:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <h2 className="text-center text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Related Resources
        </h2>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Icon */}
              <div className="mb-6 text-3xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>

              {/* Link */}
              <Link
                href={item.href}
                className="mt-8 inline-flex text-sm font-bold text-teal-600 transition-colors hover:text-teal-700 hover:underline dark:text-teal-400 dark:hover:text-teal-300"
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>

        {/* Notice */}
        <div className="mt-14 rounded-lg border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            ZoikoTime provides workforce evidence, audit trail, review,
            export, retention, and governance-related functionality to
            support customer workflows. ZoikoTime does not provide legal
            advice, does not determine legal admissibility of records, does
            not guarantee that records will satisfy every legal,
            regulatory, or judicial requirement, and does not replace
            employer, HR, legal, payroll, compliance, or tax obligations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default RelatedResources;