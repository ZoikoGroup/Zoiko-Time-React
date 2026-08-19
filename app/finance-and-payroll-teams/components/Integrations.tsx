// Integrations.tsx

import React from "react";
import Link from "next/link";

const integrationCards = [
  {
    title: "Direction & identity",
    description:
      "Inbound, outbound, or bidirectional labeled accurately — never 'sync' for a one-way flow. Authoritative worker identifier and effective-dated mapping defined.",
  },
  {
    title: "Validation & idempotency",
    description:
      "Required fields, types, values, counts, and mapping version validated before export; stable identifiers prevent duplicate delivery.",
  },
  {
    title: "Error handling & observability",
    description:
      "Rejected rows show reason, owner, retry state, and final resolution — records are never silently dropped; authorized users can trace exports.",
  },
  {
    title: "Security & support model",
    description:
      "Least privilege, encryption, secrets management, audit events, retention — with clear ownership of source data, mappings, credentials, and escalation.",
  },
];

export default function Integrations() {
  return (
    <section className="bg-gray-50 py-16 transition-colors duration-300 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-teal-400">
            Integrations
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white md:text-4xl">
            Fit the systems that already run payroll and
            <br className="hidden md:block" />
            finance
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-gray-500 dark:text-slate-400">
            Category-level data flows with explicit direction, ownership,
            validation, and failure handling. Vendor logos appear only for
            production-ready, documented, supported integrations.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {integrationCards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none dark:hover:border-slate-600 dark:hover:bg-slate-800"
            >
              <div className="mb-5 h-2 w-2 rounded-sm bg-teal-600 dark:bg-teal-400"></div>

              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900">
          <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-gray-400 dark:border-slate-500">
            <span className="text-xs font-bold text-gray-600 dark:text-slate-300">
              i
            </span>
          </div>

          <p className="text-base leading-7 text-gray-700 dark:text-slate-300">
            <span className="font-bold text-slate-900 dark:text-white">
              Content gate.
            </span>{" "}
            No vendor logo or <strong>"native / real-time / two-way"</strong>{" "}
            claim appears until an integration is production-ready,
            documented, supported, and approved. Until then, category cards
            route requirements to{" "}
            <Link
              href="/request-enterprise-demo"
              className="font-semibold text-teal-700 transition-colors hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
            >
              Request Enterprise Demo
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}