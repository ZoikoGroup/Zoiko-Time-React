"use client";

import React from "react";

const integrationCards = [
  {
    title: "HRIS / HCM & Identity",
    description:
      "Sync workers, entities, and identity via API and SCIM; SSO through SAML 2.0 / OIDC.",
    icon: "identity",
  },
  {
    title: "Payroll, ERP & Finance",
    description:
      "Hand approved, reconciled records to payroll, ERP, and finance — cutoff-aware.",
    icon: "finance",
  },
  {
    title: "APIs, exports & deployment",
    description:
      "REST API, governed exports, and deployment options confirmed per account and region.",
    icon: "api",
  },
];

function IntegrationIcon({ type }: { type: string }) {
  if (type === "identity") {
    return (
      <svg
        className="h-5 w-5 text-teal-600 dark:text-teal-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="7" r="3" strokeWidth="2" />
        <path
          strokeLinecap="round"
          strokeWidth="2"
          d="M5 20c.8-3.3 3.1-5 7-5s6.2 1.7 7 5"
        />
      </svg>
    );
  }

  if (type === "finance") {
    return (
      <svg
        className="h-5 w-5 text-teal-600 dark:text-teal-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="6"
          width="16"
          height="12"
          rx="2"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="2" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg
      className="h-5 w-5 text-teal-600 dark:text-teal-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeWidth="2"
        d="M5 12h14"
      />
      <path
        strokeLinecap="round"
        strokeWidth="2"
        d="M12 5v14"
      />
    </svg>
  );
}

export default function IntegrationsDeployment() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 px-4 py-14 dark:bg-slate-900 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal-600 sm:text-xs dark:text-teal-400">
              Integrations &amp; Deployment
            </span>
          </div>

          {/* Heading */}
          <h2 className="mt-3 max-w-[820px] text-3xl font-bold leading-tight tracking-tight text-slate-800 sm:text-4xl md:text-[42px] dark:text-white">
            Ready for your global stack
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[760px] text-sm leading-7 text-gray-500 sm:text-base dark:text-slate-400">
            Governed connections and deployment control — confirmed per
            account.
          </p>
        </div>

        {/* =====================================================
            INTEGRATION CARDS
        ====================================================== */}
        <div className="mx-auto mt-10 grid w-full max-w-[1080px] grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {integrationCards.map((card) => (
            <div
              key={card.title}
              className="flex w-full flex-col items-start rounded-2xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_10px_25px_0px_rgba(14,31,61,0.08)] dark:border-slate-700 dark:bg-slate-950"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-400/10">
                <IntegrationIcon type={card.icon} />
              </div>

              {/* Title */}
              <h3 className="mt-4 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* =====================================================
            DISCLAIMER / SCOPE NOTE
        ====================================================== */}
        <div className="mx-auto mt-5 w-full max-w-[920px] rounded-xl border border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-400/20 dark:bg-emerald-400/10">
          <p className="text-center text-xs leading-5 text-slate-800 dark:text-slate-300">
            Specific systems, country coverage, languages, and residency are
            validated per account. ZoikoTime is the governed time, attendance,
            approval, and evidence layer — it does not replace payroll, HRIS,
            ERP, employer-of-record, tax, legal, or compliance systems.
          </p>
        </div>
      </div>
    </section>
  );
}