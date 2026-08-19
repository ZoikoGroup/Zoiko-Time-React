"use client";

import React, { useState } from "react";
import Link from "next/link";

const plans = [
  {
    name: "Verified",
    monthly: "$8.00",
    annual: "$6.58",
    annualYearly: "$79.00",
    annualSavings: "Save 18% vs monthly",
    description:
      "Small teams needing verified time records and basic accountability.",
    features: [
      "Core time records",
      "Basic AI confidence scoring",
      "Optional screenshots",
      "90-day retention",
      "Basic reporting",
    ],
    disabled: ["Policy engine", "Evidence packages"],
  },

  {
    name: "Governed",
    monthly: "$15.00",
    annual: "$12.42",
    annualYearly: "$149.00",
    annualSavings: "Save 17% vs monthly",
    popular: true,
    description:
      "Growing teams needing policy governance, stronger evidence, and admin controls.",
    features: [
      "Everything in Verified",
      "Full policy engine",
      "Anomaly detection",
      "Configurable screenshots + redaction",
      "Evidence packages",
      "Advanced reports",
      "2-year retention",
    ],
  },

  {
    name: "Sovereign",
    monthly: "$25.00",
    annual: "$20.00",
    annualYearly: "$240.00",
    annualSavings: "Save 20% vs monthly",
    description:
      "High-accountability, multi-jurisdiction, legal, compliance, or audit-sensitive teams.",
    features: [
      "Everything in Governed",
      "Jurisdiction-aware policies",
      "Legal hold + chain of custody",
      "SSO / SAML + advanced RBAC",
      "Full API & webhooks",
      "Security/compliance support path",
    ],
  },

  {
    name: "Enterprise",
    monthly: "Custom",
    annual: "Custom",
    annualYearly: null,
    annualSavings: null,
    enterprise: true,
    description:
      "Large, regulated, complex, or procurement-led deployments requiring custom contracts.",
    features: [
      "Everything in Sovereign",
      "Custom MSA / DPA",
      "Data residency options",
      "Private cloud / on-prem",
      "Dedicated implementation",
      "Custom SLA & support model",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");

  return (
    <section
      className="
        w-full
        bg-white
        py-20
        transition-colors
        dark:bg-slate-950
      "
    >
      {/* HEADER */}
      <div className="mx-auto max-w-5xl px-5 text-center">
        <p
          className="
            text-xs
            font-bold
            uppercase
            tracking-widest
            text-[#3FB97A]
          "
        >
          Pricing
        </p>

        <h1
          className="
            mt-5
            text-3xl
            font-black
            text-gray-900
            dark:text-white
            sm:text-4xl
            lg:text-5xl
          "
        >
          Start free. Upgrade when ready.
        </h1>

        <p
          className="
            mt-5
            text-sm
            text-gray-500
            dark:text-gray-400
            sm:text-base
          "
        >
          All plans start with a 30-day free trial. Your trial workspace
          becomes your paid workspace — no restart, no data loss.
        </p>

        {/* BILLING TOGGLE */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <span
            className={`text-sm transition ${
              billing === "monthly"
                ? "font-bold text-[#3FB97A]"
                : "text-gray-500"
            }`}
          >
            Monthly
          </span>

          <button
            type="button"
            onClick={() =>
              setBilling(billing === "monthly" ? "annual" : "monthly")
            }
            aria-label="Toggle billing period"
            aria-pressed={billing === "annual"}
            className="
              relative
              h-6
              w-10
              rounded-full
              bg-[#3FB97A]
            "
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white transition-all duration-300 ${
                billing === "annual" ? "left-5" : "left-1"
              }`}
            />
          </button>

          <span
            className={`text-sm transition ${
              billing === "annual"
                ? "font-bold text-[#3FB97A]"
                : "text-gray-500"
            }`}
          >
            Annual
          </span>

          <span
            className="
              rounded-full
              bg-[#3FB97A]/10
              px-3
              py-1
              text-xs
              font-bold
              text-[#3FB97A]
              dark:bg-[#3FB97A]/20
            "
          >
            Save up to 20%
          </span>
        </div>

        {/* BILLING DESCRIPTION */}
        <p className="mt-3 text-xs text-gray-400 dark:text-gray-500">
          {billing === "annual"
            ? "Annual pricing is billed once per year at the annual amount shown."
            : "Monthly pricing is billed monthly."}
        </p>
      </div>

      {/* PRICING CARDS */}
      <div
        className="
          mx-auto
          mt-16
          grid
          max-w-6xl
          grid-cols-1
          gap-6
          px-5
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {plans.map((plan) => {
          const price = plan[billing];

          return (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 transition-all ${
                plan.popular
                  ? `
                    border
                    border-[#3FB97A]
                    bg-white
                    shadow-[0_0_0_4px_rgba(63,185,122,0.06)]
                    dark:bg-slate-900
                  `
                  : `
                    border
                    border-zinc-200
                    bg-slate-100
                    dark:border-slate-700
                    dark:bg-slate-900
                  `
              }`}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <div
                  className="
                    absolute
                    left-1/2
                    -top-1
                    -translate-x-1/2
                    rounded-b-lg
                    bg-[#3FB97A]
                    px-4
                    py-1
                    text-[10px]
                    font-bold
                    text-white
                  "
                >
                  Most popular
                </div>
              )}

              {/* PLAN NAME */}
              <p
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-wide
                  text-gray-400
                "
              >
                {plan.name}
              </p>

              {/* PRICE */}
              <div className="mt-4 flex items-end gap-2">
                <h2
                  className="
                    text-4xl
                    font-black
                    text-gray-900
                    dark:text-white
                  "
                >
                  {price}
                </h2>

                {!plan.enterprise && (
                  <span
                    className="
                      mb-1
                      text-sm
                      text-gray-500
                      dark:text-gray-400
                    "
                  >
                    / user / month
                  </span>
                )}
              </div>

              {/* BILLING TEXT */}
              <p className="mt-2 text-xs text-gray-400">
                {plan.enterprise ? (
                  "Talk to sales · pilot-led"
                ) : billing === "annual" ? (
                  <>Billed annually at {plan.annualYearly}/user/year</>
                ) : (
                  "Billed monthly"
                )}
              </p>

              {/* ANNUAL SAVINGS */}
              {!plan.enterprise && billing === "annual" && (
                <p className="mt-1 text-xs font-semibold text-[#3FB97A]">
                  {plan.annualSavings}
                </p>
              )}

              {/* DESCRIPTION */}
              <div
                className="
                  mt-6
                  border-b
                  border-zinc-200
                  pb-6
                  dark:border-slate-700
                "
              >
                <p
                  className="
                    text-xs
                    leading-5
                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {plan.description}
                </p>
              </div>

              {/* FEATURES */}
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex
                      items-start
                      gap-3
                      text-xs
                      text-gray-700
                      dark:text-gray-300
                    "
                  >
                    <span className="text-[#3FB97A]">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}

                {plan.disabled?.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex
                      items-start
                      gap-3
                      text-xs
                      text-gray-400
                      dark:text-gray-600
                    "
                  >
                    <span>✕</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              {plan.enterprise ? (
                <Link
                  href="/request-a-demo"
                  className="
                    mt-8
                    flex
                    h-10
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[#3FB97A]
                    bg-white
                    text-xs
                    font-black
                    text-[#3FB97A]
                    transition-all
                    hover:bg-[#3FB97A]/10
                    dark:bg-slate-900
                    dark:text-[#3FB97A]
                    dark:hover:bg-slate-800
                  "
                >
                  Get a Demo
                </Link>
              ) : (
                <Link
                  href=" https://getzoikotime.com/"
                  className={`
                    mt-8
                    flex
                    h-10
                    w-full
                    items-center
                    justify-center
                    rounded-lg
                    text-xs
                    font-black
                    transition-all
                    ${
                      plan.popular
                        ? `
                          bg-[#3FB97A]
                          text-white
                          shadow-[0px_2px_8px_rgba(63,185,122,0.20)]
                          hover:bg-[#3FB97A]
                        `
                        : `
                          border
                          border-[#3FB97A]
                          bg-white
                          text-[#3FB97A]
                          hover:bg-[#3FB97A]/10
                          dark:bg-slate-800
                          dark:text-[#3FB97A]
                          dark:hover:bg-slate-700
                        `
                    }
                  `}
                >
                  Start Free
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}