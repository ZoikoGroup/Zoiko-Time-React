"use client";

import React, { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Verified",
    monthly: "$8.00",
    annual: "$79.00",
    annualMonthly: "$6.58",
    users: "Up to 25 users",
    description: "Verified work records for small teams and contractors.",
    popular: false,
    enterprise: false,
    features: [
      "Automated time tracking — desktop, web, and mobile",
      "Idle detection with configurable thresholds",
      "Mouse and keyboard activity signals",
      "AI confidence scoring — real vs performative work",
      "Session legitimacy indicators",
      "Optional screenshots with user-configurable intervals",
      "Cryptographic audit trail and tamper-evident logs",
      "Weekly summary reports and exportable timesheets",
      "Transparency Center and user-facing trust controls",
      "Blur and redaction controls",
    ],
  },
  {
    name: "Governed",
    monthly: "$15.00",
    annual: "$149.00",
    annualMonthly: "$12.42",
    users: "Up to 250 users",
    description:
      "Policy-led workforce controls for growing, accountable organizations.",
    popular: true,
    enterprise: false,
    features: [
      "Anomaly detection — ghost work, automation, drift",
      "Policy enforcement engine — hours, breaks, overtime",
      "Evidence packaging with audit-ready export bundles",
      "Focus vs fragmentation analysis",
      "Manager review workflows and exception queues",
      "Smart screenshots — activity-triggered capture",
      "Advanced RBAC — manager, admin, auditor access",
      "Read/write API access",
      "Integrations — Slack, Jira, ADP, payroll, ZoikoSuite",
    ],
  },
  {
    name: "Sovereign",
    monthly: "$25.00",
    annual: "$240.00",
    annualMonthly: "$20.00",
    users: "Unlimited users",
    description:
      "Multi-jurisdiction workforce governance for regulated and global organizations.",
    popular: false,
    enterprise: false,
    features: [
      "Jurisdiction-aware compliance engine — FLSA, GDPR, WTD",
      "Legal templates library with wage-law frameworks",
      "Compliance dashboard with real-time violation alerts",
      "Chain-of-custody logging for evidence handling",
      "Legal hold and audit preservation controls",
      "Custom policy builder — no-code rule configuration",
      "Contractor classification and sensitive-workflow controls",
      "SSO and SAML support",
      "Dedicated success manager",
      "Unlimited retention",
    ],
  },
  {
    name: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    annualMonthly: "Custom",
    users: "Unlimited users",
    description:
      "Private workforce infrastructure for complex, high-assurance organizations.",
    popular: false,
    enterprise: true,
    features: [
      "Private cloud or on-premises deployment options",
      "Custom data residency and region-specific storage",
      "Dedicated tenant architecture",
      "Custom API integrations — Workday, SAP, Oracle",
      "White-glove implementation and structured onboarding",
      "Compliance advisory and operating reviews",
      "SLA guarantees — uptime and response commitments",
      "24/7 priority support",
      "Annual security and architecture reviews",
    ],
  },
];

export default function PricingPlans() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section className="w-full bg-white px-4 py-12 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* =========================
            BILLING TOGGLE
        ========================== */}
        <div className="mb-8 flex w-full flex-col items-start justify-start gap-4 sm:mb-10 sm:flex-row sm:items-center">
          <div className="flex h-14 w-full max-w-[320px] items-center rounded-[30px] bg-white p-[5px] shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] outline outline-1 outline-gray-300 transition-colors dark:bg-slate-900 dark:outline-slate-700">

            {/* Monthly */}
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`flex h-11 w-1/2 items-center justify-center rounded-3xl text-sm font-semibold transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900"
                  : "text-gray-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              {billing === "monthly" && (
                <span className="mr-2 text-sm">✓</span>
              )}
              Monthly
            </button>

            {/* Annual */}
            <button
              type="button"
              onClick={() => setBilling("annual")}
              className={`flex h-11 w-1/2 items-center justify-center rounded-3xl text-sm font-semibold transition-all duration-200 ${
                billing === "annual"
                  ? "bg-slate-800 text-white dark:bg-white dark:text-slate-900"
                  : "text-gray-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              }`}
            >
              Annual

              <span
                className={`ml-2 text-xs font-bold ${
                  billing === "annual"
                    ? "text-teal-300 dark:text-teal-600"
                    : "text-teal-700 dark:text-teal-400"
                }`}
              >
                · Save 20%
              </span>
            </button>
          </div>

          {/* Pricing Status */}
          <div className="text-left text-xs leading-5 text-gray-500 dark:text-slate-400">
            {billing === "monthly"
              ? "Showing monthly pricing. Billed monthly."
              : "Showing annual pricing. Billed once per year."}
          </div>
        </div>

        {/* =========================
            PRICING CARDS
        ========================== */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex min-h-[820px] w-full flex-col rounded-2xl bg-white p-5 transition-colors duration-300 sm:p-6 dark:bg-slate-900 ${
                plan.popular
                  ? "outline outline-2 outline-teal-600 shadow-[0px_10px_30px_rgba(14,31,61,0.10)] dark:shadow-[0px_10px_30px_rgba(0,0,0,0.35)]"
                  : "outline outline-1 outline-gray-300 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:outline-slate-700 dark:shadow-[0px_6px_18px_rgba(0,0,0,0.25)]"
              }`}
            >

              {/* =========================
                  MOST POPULAR
              ========================== */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[20px] bg-teal-600 px-4 py-1">
                  <span className="text-[10px] font-extrabold tracking-wide text-white sm:text-xs">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* =========================
                  PLAN NAME
              ========================== */}
              <div className="text-xs font-extrabold uppercase tracking-wide text-slate-800 dark:text-white">
                {plan.name}
              </div>

              {/* =========================
                  PRICE
              ========================== */}
              <div className="mt-4 min-h-[80px]">

                {/* Enterprise */}
                {plan.enterprise ? (
                  <>
                    <div className="text-3xl font-extrabold leading-[48px] text-slate-800 dark:text-white sm:text-4xl">
                      Custom
                    </div>

                    <div className="mt-1 text-xs leading-5 text-gray-500 dark:text-slate-400">
                      Contract pricing
                    </div>
                  </>
                ) : billing === "monthly" ? (
                  <>
                    {/* Monthly Price */}
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-extrabold leading-10 text-slate-800 dark:text-white sm:text-4xl">
                        {plan.monthly}
                      </span>

                      <span className="mb-1 text-[11px] font-medium text-gray-500 dark:text-slate-400">
                        / user / month
                      </span>
                    </div>

                    <div className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                      Billed monthly
                    </div>
                  </>
                ) : (
                  <>
                    {/* Annual Monthly Equivalent */}
                    <div className="flex items-end gap-2">
                      <span className="text-3xl font-extrabold leading-10 text-slate-800 dark:text-white sm:text-4xl">
                        {plan.annualMonthly}
                      </span>

                      <span className="mb-1 text-[11px] font-medium text-gray-500 dark:text-slate-400">
                        / user / month
                      </span>
                    </div>

                    {/* Annual Amount */}
                    <div className="mt-2 text-xs font-semibold leading-5 text-gray-500 dark:text-slate-400">
                      Billed annually — {plan.annual} / user / year
                    </div>
                  </>
                )}
              </div>

              {/* =========================
                  USER LIMIT
              ========================== */}
              <div className="mt-6 flex h-9 w-full items-center justify-center rounded-lg bg-gray-50 px-3 outline outline-1 outline-slate-200 dark:bg-slate-800 dark:outline-slate-700">
                <span className="text-center text-xs font-bold text-slate-800 dark:text-slate-200">
                  {plan.users}
                </span>
              </div>

              {/* =========================
                  DESCRIPTION
              ========================== */}
              <p className="mt-5 min-h-[64px] text-xs leading-5 text-gray-500 dark:text-slate-400">
                {plan.description}
              </p>

              {/* =========================
                  MAIN CTA
              ========================== */}
              {plan.enterprise ? (
                <Link
                  href="/request-enterprise-demo"
                  className="mt-4 flex h-11 w-full items-center justify-center rounded-[10px] bg-slate-800 text-xs font-bold leading-6 text-white transition-all duration-200 hover:opacity-90 dark:bg-white dark:text-slate-900 sm:text-sm"
                >
                  Request Enterprise Quote
                </Link>
              ) : (
                <a
                  href="https://getzoikotime.com/"
                  className="mt-4 flex h-11 w-full items-center justify-center rounded-[10px] bg-teal-600 text-xs font-bold leading-6 text-white transition-all duration-200 hover:bg-teal-700 sm:text-sm"
                >
                  Start 14-Day Free Trial
                </a>
              )}

              {/* =========================
                  CTA SUBTEXT
              ========================== */}
              {!plan.enterprise && (
                <>
                  <div className="mt-3 text-center text-xs leading-5 text-slate-400 dark:text-slate-500">
                    No credit card required
                  </div>

                  {/* Subscribe now */}
                  <a
                    href="https://getzoikotime.com/"
                    className="mt-1 block w-full text-center text-[15px] font-semibold leading-5 text-teal-700 transition-colors hover:text-teal-800 dark:text-teal-400 dark:hover:text-teal-300"
                  >
                    Subscribe now →
                  </a>
                </>
              )}

              {/* =========================
                  ENTERPRISE SALES LINK
              ========================== */}
              {plan.enterprise && (
                <Link
                  href="/contact-sales"
                  className="mt-4 block text-center text-[15px] font-medium leading-5 text-teal-700 hover:underline dark:text-teal-400"
                >
                  Talk to Sales →
                </Link>
              )}

              {/* =========================
                  DIVIDER
              ========================== */}
              <div className="my-6 border-t border-slate-200 dark:border-slate-700" />

              {/* =========================
                  FEATURES TITLE
              ========================== */}
              <div className="mb-5 text-xs font-bold text-slate-800 dark:text-white">
                {plan.name === "Verified"
                  ? "Includes"
                  : `Everything in ${
                      plan.name === "Governed"
                        ? "Verified"
                        : plan.name === "Sovereign"
                        ? "Governed"
                        : "Sovereign"
                    }, plus:`}
              </div>

              {/* =========================
                  FEATURES
              ========================== */}
              <div className="space-y-4">
                {plan.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-[2px] flex size-4 shrink-0 items-center justify-center text-sm font-bold text-teal-700 dark:text-teal-400">
                      ✓
                    </span>

                    <span className="text-xs leading-5 text-gray-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            FOOTNOTE
        ========================== */}
        <div className="mt-8 px-2 text-center text-[10px] leading-5 text-gray-500 dark:text-slate-500 sm:mt-10">
          All prices are per user / month in USD. Annual plans are billed once
          per year at the annual amount shown; the annual headline rate is a
          monthly equivalent, not a monthly charge. Seat caps: Verified up to
          25, Governed up to 250, Sovereign and Enterprise unlimited users.
          “Unlimited” refers only to the dimension stated. Compliance
          capabilities (FLSA, GDPR, WTD, SOX/SOC 2) reflect approved product
          wording.
        </div>

      </div>
    </section>
  );
}