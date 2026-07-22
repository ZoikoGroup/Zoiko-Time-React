"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

/**
 * PricingPlans
 * - Standalone section component: app/pricing/pricingplans.tsx
 * - Renders the 4-tier "Choose Your Level of Workforce Intelligence" pricing cards
 * - Import into pricing.tsx as: import PricingPlans from "./pricingplans";
 * - Tailwind CSS with dark mode (`dark:` variants), fully responsive
 *   (1 col mobile -> 2 col tablet -> 4 col desktop)
 */

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

interface Plan {
  id: string;
  eyebrow: string;
  eyebrowClass: string;
  monthlyPrice: number | "Custom";
  userLimit: string;
  description: string;
  ctaLabel: string;
  ctaStyle: "outline" | "solid" | "dark";
  highlighted?: boolean;
  badge?: string;
  inheritedFrom?: string;
  features: string[];
}

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const PLANS: Plan[] = [
  {
    id: "verified",
    eyebrow: "Verified",
    eyebrowClass: "text-slate-500 dark:text-gray-400",
    monthlyPrice: 9,
    userLimit: "Up to 25 users",
    description:
      "Cryptographically verified work records for small teams, contractor tracking, and accountability-first environments.",
    ctaLabel: "Start Free Trial",
    ctaStyle: "outline",
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
    id: "governed",
    eyebrow: "Governed",
    eyebrowClass: "text-teal-600 dark:text-teal-400",
    monthlyPrice: 17,
    userLimit: "Up to 250 users",
    description:
      "Policy-enforced workforce intelligence for growing companies, client-billable work, and SOX/SOC 2-oriented operations.",
    ctaLabel: "Start Free Trial",
    ctaStyle: "solid",
    highlighted: true,
    badge: "Most Popular",
    inheritedFrom: "Everything in Verified",
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
    id: "sovereign",
    eyebrow: "Sovereign",
    eyebrowClass: "text-slate-500 dark:text-gray-400",
    monthlyPrice: 29,
    userLimit: "Unlimited users",
    description:
      "Multi-jurisdiction compliance infrastructure for regulated industries, global operations, and organisations that need compliance as infrastructure.",
    ctaLabel: "Start Free Trial",
    ctaStyle: "outline",
    inheritedFrom: "Everything in Governed",
    features: [
      "Jurisdiction-aware compliance engine — FLSA, GDPR, WTD",
      "Legal templates library with wage law frameworks",
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
    id: "enterprise",
    eyebrow: "Enterprise",
    eyebrowClass: "text-indigo-500 dark:text-indigo-400",
    monthlyPrice: "Custom",
    userLimit: "Unlimited users",
    description:
      "Dedicated infrastructure and implementation for Fortune 1000, complex organisations and high-liability environments requiring private architecture.",
    ctaLabel: "Request Enterprise Quote",
    ctaStyle: "dark",
    inheritedFrom: "Everything in Sovereign",
    features: [
      "Private cloud or on-premise deployment options",
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

const cardBase =
  "relative flex flex-col rounded-2xl bg-white dark:bg-gray-800 shadow-[0px_4px_16px_0px_rgba(13,21,38,0.08)]";

function ctaClasses(style: Plan["ctaStyle"]) {
  switch (style) {
    case "solid":
      return "bg-teal-600 text-white shadow-[0px_4px_12px_0px_rgba(0,157,140,0.25)] hover:bg-teal-700";
    case "dark":
      return "bg-slate-900 text-white hover:bg-slate-800 dark:bg-black dark:hover:bg-gray-900";
    case "outline":
    default:
      return "border border-slate-300 text-slate-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700";
  }
}

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export default function PricingPlans() {
  const [annual, setAnnual] = useState<boolean>(false);

  const priceFor = (monthly: number | "Custom") => {
    if (monthly === "Custom") return "Custom";
    return annual ? Math.round(monthly * 0.8) : monthly;
  };

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          Choose Your Level of Workforce Intelligence
        </h2>

        {/* Billing toggle */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <span
            className={`text-sm font-semibold ${
              !annual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-400"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative h-6 w-11 shrink-0 rounded-full bg-teal-600 transition-colors"
            aria-label="Toggle annual billing"
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                annual ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span
            className={`text-sm font-semibold ${
              annual ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-gray-400"
            }`}
          >
            Annual
          </span>
          <span className="rounded-full border border-emerald-200 bg-emerald-100 px-2.5 py-1 text-xs font-bold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400">
            Save 20%
          </span>
        </div>

        {/* Plan cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => {
            const price = priceFor(plan.monthlyPrice);
            return (
              <div
                key={plan.id}
                className={`${cardBase} ${
                  plan.highlighted
                    ? "border-2 border-teal-600 shadow-[0px_8px_32px_0px_rgba(0,157,140,0.12)]"
                    : "border-2 border-slate-200 dark:border-gray-700"
                }`}
              >
                {plan.badge && (
                  <div className="rounded-t-xl bg-teal-600 py-2 text-center text-xs font-extrabold uppercase tracking-wide text-white">
                    {plan.badge}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <p
                    className={`text-xs font-extrabold uppercase tracking-wide ${plan.eyebrowClass}`}
                  >
                    {plan.eyebrow}
                  </p>

                  <div className="mt-4 flex items-end gap-2">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
                      {price === "Custom" ? "Custom" : `$${price}`}
                    </span>
                    {price !== "Custom" && (
                      <span className="mb-1 text-xs font-medium text-slate-500 dark:text-gray-400">
                        / user / month
                      </span>
                    )}
                  </div>

                  <span className="mt-4 inline-block w-fit rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 text-xs font-bold text-slate-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                    {plan.userLimit}
                  </span>

                  <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-gray-400">
                    {plan.description}
                  </p>

                  <button
                    className={`mt-6 w-full rounded-md py-3 text-sm font-bold ${ctaClasses(
                      plan.ctaStyle
                    )}`}
                  >
                    {plan.ctaLabel}
                  </button>

                  <p className="mt-8 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-gray-500">
                    What&apos;s included
                  </p>

                  {plan.inheritedFrom && (
                    <p className="mt-3 text-xs font-bold text-teal-600 dark:text-teal-400">
                      {plan.inheritedFrom}{" "}
                      <span className="text-[10px] font-bold text-slate-400 dark:text-gray-500">
                        → then
                      </span>
                    </p>
                  )}

                  <ul className="mt-3 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-400" />
                        <span className="text-xs leading-5 text-slate-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}