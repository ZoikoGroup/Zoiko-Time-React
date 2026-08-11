import Link from "next/link";
import React from "react";

const features = [
  {
    title: "Pay-period population",
    description:
      "Workers and required records in scope by organization, pay group, and period.",
  },
  {
    title: "Exception queue",
    description:
      "Record, issue, owner, age, status, and next permitted action. No accusatory status labels.",
  },
  {
    title: "Allocation completeness",
    description:
      "Required project, task, customer, or cost-code coverage where configured.",
  },
  {
    title: "Reconciliation report",
    description:
      "Authorized comparison of approved totals, export totals, and rejected or excluded records.",
  },
  {
    title: "Readiness summary",
    description:
      "Approved, pending review, needs input, blocked, and export-ready — each with an explicit definition.",
  },
  {
    title: "Post-approval change control",
    description:
      "Visible count and drill-down for records changed after approval, with reason and reapproval status.",
  },
  {
    title: "Export validation",
    description:
      "Mapping version, validation checks, export ID, delivery status, and error/retry history.",
  },
  {
    title: "Access & audit",
    description:
      "Role-based access and event history for review, approval, correction, export, and administrative action.",
  },
];

function Card({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_rgba(14,31,61,0.05)] transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-2 w-2 rounded-sm bg-teal-600"></span>

        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
          {title}
        </h3>
      </div>

      <p className="text-sm leading-7 text-gray-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default function PayrollControlCenter() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Product Proof
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-800 dark:text-white sm:text-4xl">
            Finance &amp; payroll control center
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 dark:text-slate-400">
            A production-faithful view of the records, exceptions, and period
            controls finance and payroll teams actually use. Synthetic data;
            every state defined; no color-only status.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-6">
            {features.slice(0, 4).map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {features.slice(4, 8).map((item) => (
              <Card
                key={item.title}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <Link
            href="/request-enterprise-demo"
            className="rounded-xl bg-teal-600 px-8 py-4 text-base font-semibold text-white shadow-[0px_6px_16px_rgba(16,162,141,0.28)] transition hover:bg-teal-700"
          >
            Request Enterprise Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
