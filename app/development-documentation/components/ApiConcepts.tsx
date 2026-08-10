"use client";

import {
  FiBookOpen,
  FiCheckCircle,
  FiShield,
  FiKey,
  FiRefreshCw,
  FiClock,
} from "react-icons/fi";

const concepts = [
  {
    title: "Evidence Ledger",
    description:
      "Append-only, preserved trails. You can read evidence, never silently rewrite it.",
    icon: FiBookOpen,
  },
  {
    title: "Deterministic classification",
    description:
      "Rules are versioned and explainable — there is no black-box score in the API.",
    icon: FiCheckCircle,
  },
  {
    title: "Human authority",
    description:
      "Consequential decisions require a human. The API surfaces context; it never auto-decides.",
    icon: FiShield,
  },
  {
    title: "Scopes & roles",
    description:
      "Keys are least-privilege and scoped; access maps to governed roles.",
    icon: FiKey,
  },
  {
    title: "Idempotency",
    description:
      "Writes accept an idempotency key so retries never double-apply.",
    icon: FiRefreshCw,
  },
  {
    title: "Versioning",
    description:
      "Pin a dated API version header; changes are additive and announced in the changelog.",
    icon: FiClock,
  },
];

export default function ApiConcepts() {
  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-slate-950 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-14">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Core Concepts
          </div>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white sm:text-4xl">
            Concepts worth knowing first
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-slate-400 sm:text-base">
            A few ideas that shape every endpoint.
          </p>
        </div>

        {/* Concept Cards */}
        <div className="mx-auto mt-10 grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {concepts.map((concept) => {
            const Icon = concept.icon;

            return (
              <article
                key={concept.title}
                className="min-h-[192px] rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950/40">
                  <Icon className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                </div>

                {/* Title */}
                <h3 className="mt-5 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                  {concept.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
                  {concept.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}