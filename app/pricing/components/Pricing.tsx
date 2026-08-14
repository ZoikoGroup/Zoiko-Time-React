"use client";

import Link from "next/link";
import { useState } from "react";

type BillingType = "monthly" | "annual";

const plans = [
  {
    name: "Verified",
    monthly: 8,
    annualMonthly: 6.58,
    annualYearly: 79,
    annualSavings: "Save 18% vs monthly",
    users: "Up to 25 users",
    description: (
      <>
        Cryptographically verified work
        <br />
        records for small teams,
        <br />
        contractor tracking, and
        <br />
        accountability-first
        <br />
        environments.
      </>
    ),
    includes: "Includes",
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
    featured: false,
  },

  {
    name: "Governed",
    monthly: 15,
    annualMonthly: 12.42,
    annualYearly: 149,
    annualSavings: "Save 17% vs monthly",
    users: "Up to 250 users",
    description: (
      <>
        Policy-enforced workforce
        <br />
        intelligence for growing
        <br />
        companies, client-billable work,
        <br />
        and SOX/SOC 2-oriented
        <br />
        operations.
      </>
    ),
    includes: "Everything in Verified, plus:",
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
    featured: true,
  },

  {
    name: "Sovereign",
    monthly: 25,
    annualMonthly: 20,
    annualYearly: 240,
    annualSavings: "Save 20% vs monthly",
    users: "Unlimited users",
    description: (
      <>
        Multi-jurisdiction compliance
        <br />
        infrastructure for regulated
        <br />
        industries, global operations, and
        <br />
        organizations that need
        <br />
        compliance as infrastructure.
      </>
    ),
    includes: "Everything in Governed, plus:",
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
    featured: false,
  },

  {
    name: "Enterprise",
    monthly: null,
    annualMonthly: null,
    annualYearly: null,
    annualSavings: null,
    users: "Unlimited users",
    description: (
      <>
        Dedicated infrastructure and
        <br />
        implementation for Fortune 1000,
        <br />
        complex organizations, and high-
        <br />
        liability environments requiring
        <br />
        private architecture.
      </>
    ),
    includes: "Everything in Sovereign, plus:",
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
    featured: false,
  },
];

function CheckIcon() {
  return (
    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
      <span className="relative block h-4 w-4">
        <span className="absolute left-[3px] top-[5px] h-[6px] w-[10px] rotate-[-45deg] border-b-[1.6px] border-l-[1.6px] border-[#3FB97A]" />
      </span>
    </span>
  );
}

export default function Pricing() {
  const [billing, setBilling] = useState<BillingType>("monthly");

  return (
    <section
      id="pricing"
      className="w-full overflow-hidden bg-white py-16 text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">
          <span className="text-[11px] font-semibold uppercase leading-5 tracking-[0.22em] text-[#3FB97A] sm:text-xs">
            Plans &amp; Pricing
          </span>

          <h1 className="mt-4 text-[30px] font-extrabold leading-[1.25] tracking-[-0.02em] text-slate-800 dark:text-white sm:text-[38px] sm:leading-[1.35] lg:text-[42px]">
            Choose Your Level of Workforce
            <br className="hidden sm:block" />
            Intelligence
          </h1>

          <p className="mt-5 max-w-[610px] text-sm font-normal leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
            Four plans, transparent pricing, and a 14-day free trial on
            standard plans —
            <br className="hidden sm:block" />
            no credit card required. Monthly by default; switch to annual for
            the better-value commitment.
          </p>

          {/* BILLING TOGGLE */}
          <div className="mt-8 flex h-14 w-[240px] items-center rounded-full border border-gray-300 bg-white p-1 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none sm:mt-9">
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              aria-pressed={billing === "monthly"}
              className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                billing === "monthly"
                  ? "bg-[#3FB97A] text-white shadow-sm"
                  : "text-gray-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {billing === "monthly" && (
                <span className="text-xs font-bold">✓</span>
              )}
              Monthly
            </button>

            <button
              type="button"
              onClick={() => setBilling("annual")}
              aria-pressed={billing === "annual"}
              className={`flex h-11 flex-1 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                billing === "annual"
                  ? "bg-[#3FB97A] text-white shadow-sm"
                  : "text-gray-500 hover:text-slate-800 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
              {billing === "annual" && (
                <span className="text-xs font-bold">✓</span>
              )}
              Annual
            </button>
          </div>

          {/* SAVING BADGE */}
          <div className="mt-3 flex min-h-8 w-full max-w-[310px] items-center justify-center rounded-full border border-[#3FB97A]/20 bg-[#3FB97A]/10 px-4 dark:border-[#3FB97A]/30 dark:bg-[#3FB97A]/10">
            <span className="text-xs font-medium leading-5 text-[#3FB97A]">
              Save up to 20% with annual billing
            </span>
          </div>

          <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
            {billing === "monthly"
              ? "Showing monthly pricing, billed monthly."
              : "Showing annual pricing (per-user-per-month equivalent), billed once per year."}
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const displayPrice =
              billing === "annual"
                ? plan.annualMonthly
                : plan.monthly;

            return (
              <div
                key={plan.name}
                className={`relative flex min-h-[900px] flex-col rounded-2xl border bg-white p-6 transition-colors duration-300 dark:bg-slate-900 ${
                  plan.featured
                    ? "border-2 border-[#3FB97A] shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-[#3FB97A] dark:shadow-none"
                    : "border-gray-300 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:shadow-none"
                }`}
              >
                {/* MOST POPULAR */}
                {plan.featured && (
                  <div className="absolute left-1/2 top-0 flex h-7 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3FB97A]">
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* PLAN NAME */}
                <div className="text-xs font-extrabold uppercase leading-5 tracking-wide text-slate-800 dark:text-white">
                  {plan.name}
                </div>

                {/* PRICE */}
                <div className="mt-4 min-h-[68px]">
                  {plan.monthly !== null ? (
                    <>
                      <div className="flex items-end gap-2">
                        <span className="text-[38px] font-extrabold leading-10 tracking-tight text-slate-800 dark:text-white">
                          ${displayPrice?.toFixed(2)}
                        </span>

                        <span className="mb-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                          / user / month
                        </span>
                      </div>

                      {billing === "monthly" ? (
                        <div className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                          Billed monthly
                        </div>
                      ) : (
                        <>
                          <div className="mt-1 text-xs leading-5 text-gray-500 dark:text-gray-400">
                            Billed annually at $
                            {plan.annualYearly?.toFixed(2)}/user/year
                          </div>

                          <div className="mt-1 text-xs font-medium text-[#3FB97A]">
                            {plan.annualSavings}
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <div className="text-[36px] font-extrabold leading-10 tracking-tight text-slate-800 dark:text-white">
                        Custom
                      </div>

                      <div className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                        Contract pricing
                      </div>
                    </>
                  )}
                </div>

                {/* USERS */}
                <div className="mt-7 flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800">
                  <span className="text-xs font-bold text-slate-800 dark:text-gray-200">
                    {plan.users}
                  </span>
                </div>

                {/* DESCRIPTION */}
                <div className="mt-5 min-h-[120px] text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {plan.description}
                </div>

                {/* CTA */}
                {plan.name === "Enterprise" ? (
                  <>
                    <Link
                      href="/request-enterprise-demo"
                      className="flex h-11 w-full items-center justify-center rounded-[10px] border border-black bg-white text-sm font-bold text-slate-800 transition hover:bg-gray-50 dark:border-white dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                    >
                      Request Enterprise Quote
                    </Link>

                    <Link
                      href="/contact-sales"
                      className="mt-3 block text-center text-xs font-semibold text-[#3FB97A] transition hover:text-[#3FB97A] dark:text-[#3FB97A]"
                    >
                      Talk to Sales →
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      href="/start-free"
                      className="flex h-11 w-full items-center justify-center rounded-[10px] bg-[#3FB97A] text-sm font-bold text-white transition hover:bg-[#3FB97A]"
                    >
                      Start 14-Day Free Trial
                    </Link>

                    <div className="mt-3 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                      No credit card required
                    </div>
                  </>
                )}

                {/* DIVIDER */}
                <div className="my-7 border-t border-slate-200 dark:border-slate-700" />

                {/* INCLUDES */}
                <div className="mb-5 text-xs font-bold leading-5 text-slate-800 dark:text-white">
                  {plan.includes}
                </div>

                {/* FEATURES */}
                <div className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5"
                    >
                      <CheckIcon />

                      <span className="text-xs leading-5 text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* FOOTNOTE */}
        <div className="mx-auto mt-10 max-w-[900px] text-center text-[11px] leading-5 text-gray-500 dark:text-gray-400 sm:mt-12 sm:text-xs">
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