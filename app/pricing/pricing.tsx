"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Check, Minus, Plus, ChevronDown } from "lucide-react";
import PricingPlans from "./pricingplans";

/**
 * Pricing page
 * - Next.js (app router) — app/pricing/pricing.tsx
 * - Tailwind CSS with dark mode (`dark:` variants), fully responsive
 * - Imports the pricing cards section from ./pricingplans
 */

const eyebrow =
  "text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400";

const cardBase =
  "rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-gray-700 dark:bg-gray-800";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

type CellValue = true | false | string;

interface MatrixRow {
  label: string;
  values: [CellValue, CellValue, CellValue, CellValue]; // Verified, Governed, Sovereign, Enterprise
}

interface MatrixGroup {
  title: string;
  rows: MatrixRow[];
}

interface CompetitorRow {
  label: string;
  values: [CellValue, CellValue, CellValue, CellValue]; // ZoikoTime, Time Doctor, Hubstaff, ActivTrak
}

interface FaqItem {
  question: string;
  answer: string;
}

/* ------------------------------------------------------------------ */
/* Small components                                                     */
/* ------------------------------------------------------------------ */

function SectionHeading({
  eyebrowText,
  title,
  subtitle,
}: {
  eyebrowText: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={eyebrow}>{eyebrowText}</p>
      <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">{subtitle}</p>
      )}
    </div>
  );
}

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return <Check className="mx-auto h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />;
  }
  if (value === false) {
    return <Minus className="mx-auto h-3 w-3 text-slate-300 dark:text-gray-600" />;
  }
  return (
    <span className="text-xs font-bold text-slate-500 dark:text-gray-400">{value}</span>
  );
}

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-xs font-bold text-slate-900 dark:text-gray-200">
        {label}: <span className="font-extrabold text-teal-600 dark:text-teal-400">{display}</span>
      </p>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-teal-600 dark:bg-gray-600"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */

const STATS: { value: string; label: string }[] = [
  { value: "99.97%", label: "Platform uptime" },
  { value: "SOC 2", label: "Type II certified" },
  { value: "-15%", label: "Avg payroll leakage reduction" },
  { value: "4 wk", label: "Typical payback period" },
  { value: "ISO 27001", label: "Certified" },
];

const TRIAL_BADGES: string[] = [
  "No credit card required",
  "Full feature access",
  "Cancel anytime",
  "Privacy-first by design",
];

const MATRIX_GROUPS: MatrixGroup[] = [
  {
    title: "Workforce Intelligence",
    rows: [
      { label: "Automated time tracking", values: [true, true, true, true] },
      { label: "AI confidence scoring", values: [true, true, true, true] },
      { label: "Idle detection", values: [true, true, true, true] },
      { label: "Anomaly detection", values: [false, true, true, true] },
      { label: "Focus vs fragmentation analysis", values: [false, true, true, true] },
      { label: "Shift integrity validation", values: [false, false, true, true] },
    ],
  },
  {
    title: "Evidence & Audit",
    rows: [
      { label: "Cryptographic audit trail", values: [true, true, true, true] },
      { label: "Tamper-evident session records", values: [true, true, true, true] },
      { label: "Audit-ready export bundles", values: [false, true, true, true] },
      { label: "Chain-of-custody logging", values: [false, false, true, true] },
      { label: "Legal hold and preservation", values: [false, false, true, true] },
      { label: "Data retention", values: ["1 year", "3 years", "Unlimited", "Custom"] },
    ],
  },
  {
    title: "Governance & Compliance",
    rows: [
      { label: "Policy enforcement engine", values: [false, true, true, true] },
      { label: "Custom policy builder", values: [false, false, true, true] },
      { label: "Jurisdiction-aware compliance engine", values: [false, false, true, true] },
      { label: "Compliance dashboard", values: [false, false, true, true] },
      { label: "SSO / SAML", values: [false, false, true, true] },
      { label: "Contractor classification controls", values: [false, false, true, true] },
    ],
  },
  {
    title: "Integrations & API",
    rows: [
      { label: "API access", values: ["Read only", "Read / Write", true, "✓ Full"] },
      { label: "Payroll integrations (ADP etc.)", values: [false, true, true, true] },
      { label: "HRIS integration (Workday, SAP)", values: [false, false, false, "✓ Custom"] },
      { label: "Slack / Jira / Project tools", values: [false, true, true, true] },
      { label: "ZoikoSuite integration", values: [false, true, true, true] },
    ],
  },
  {
    title: "Support & Services",
    rows: [
      {
        label: "Support channel",
        values: ["Email", "Email + Chat", "Dedicated CSM", "24/7 Priority"],
      },
      { label: "Dedicated success manager", values: [false, false, true, true] },
      { label: "Compliance advisory", values: [false, false, false, true] },
      { label: "Private cloud / on-premise", values: [false, false, false, true] },
    ],
  },
];

const MATRIX_PLANS = [
  { label: "Verified", price: "$8/user", highlight: false },
  { label: "Governed", price: "$15/user", highlight: true },
  { label: "Sovereign", price: "$24/user", highlight: false },
  { label: "Enterprise", price: "Custom", highlight: false },
];

const COMPETITOR_ROWS: CompetitorRow[] = [
  {
    label: "AI confidence scoring for session legitimacy",
    values: [true, false, false, false],
  },
  {
    label: "Cryptographic audit trail / tamper-evident records",
    values: [true, false, false, false],
  },
  {
    label: "Policy enforcement engine with compliance mapping",
    values: [true, false, "Basic", false],
  },
  {
    label: "Jurisdiction-aware compliance (GDPR, FLSA, WTD)",
    values: [true, false, false, false],
  },
  {
    label: "Anomaly detection for ghost work and automation fraud",
    values: [true, false, false, "Partial"],
  },
  {
    label: "Chain-of-custody evidence for legal proceedings",
    values: [true, false, false, false],
  },
  {
    label: "Legal hold and audit preservation controls",
    values: [true, false, false, false],
  },
  { label: "Human-in-Command governance model", values: [true, false, false, false] },
  {
    label: "90-day free trial — no credit card",
    values: [true, "14 days", "14 days", "14 days"],
  },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need a credit card to start the trial?",
    answer:
      "No. The 90-day trial gives you full feature access with no credit card required and no obligation to upgrade at the end.",
  },
  {
    question: "What happens when the trial ends?",
    answer:
      "You'll be prompted to choose a plan that fits your team. If you don't upgrade, your account moves to a limited read-only state — your data isn't deleted.",
  },
  {
    question: "How does ZoikoTime compare with Time Doctor or Hubstaff?",
    answer:
      "ZoikoTime focuses on verified evidence and governance — cryptographic audit trails, policy enforcement, and jurisdiction-aware compliance — rather than just activity percentages and screenshots.",
  },
  {
    question: "Can ZoikoTime be used for contractor management?",
    answer:
      "Yes. Contractor oversight, classification controls, and client-billable evidence are core use cases across the Governed and Sovereign tiers.",
  },
  {
    question: "Is there a minimum commitment or contract length?",
    answer:
      "Monthly plans have no minimum term. Annual plans are billed yearly at a 20% discount. Enterprise agreements are negotiated based on scope.",
  },
  {
    question: "How is data handled and secured?",
    answer:
      "ZoikoTime is SOC 2 Type II certified and ISO 27001 certified, with encryption in transit and at rest, and configurable data residency on Sovereign and Enterprise plans.",
  },
  {
    question: "What is the switching cost from another platform?",
    answer:
      "Most teams migrate within a single sprint. Our onboarding team provides guided data import and parallel-run support during transition.",
  },
];

const NAV_LINKS: string[] = [
  "Product",
  "Use Cases",
  "Trust & Governance",
  "Enterprise",
  "Pricing",
  "Resources",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function PricingPage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ROI calculator state
  const [employees, setEmployees] = useState<number>(100);
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [weeklyHours, setWeeklyHours] = useState<number>(40);
  const [leakageRate, setLeakageRate] = useState<number>(8);

  const roi = useMemo(() => {
    const annualPayroll = employees * hourlyRate * weeklyHours * 52;
    const annualLeakage = annualPayroll * (leakageRate / 100);
    const estimatedRecovery = annualLeakage * 0.15;
    const zoikoAnnualCost = employees * 17 * 12; // Governed tier
    const roiPercent =
      zoikoAnnualCost > 0 ? ((estimatedRecovery - zoikoAnnualCost) / zoikoAnnualCost) * 100 : 0;
    const paybackMonths =
      estimatedRecovery > 0 ? zoikoAnnualCost / (estimatedRecovery / 12) : 0;

    const fmt = (n: number) =>
      n >= 1000
        ? `$${(n / 1000).toFixed(n >= 100000 ? 0 : 1)}K`
        : `$${Math.round(n)}`;

    return {
      annualLeakage: fmt(annualLeakage),
      estimatedRecovery: fmt(estimatedRecovery),
      zoikoAnnualCost: fmt(zoikoAnnualCost),
      roiPercent: `${Math.max(0, Math.round(roiPercent))}%`,
      paybackMonths: `${Math.max(0.1, paybackMonths).toFixed(1)} mo`,
    };
  }, [employees, hourlyRate, weeklyHours, leakageRate]);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
    

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-teal-600/20 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute right-[-100px] top-[-80px] h-[500px] w-[500px] rounded-full bg-teal-500/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-6xl">
            Workforce Truth <span className="text-teal-500 dark:text-teal-400">Infrastructure</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500 dark:text-gray-400">
            Cryptographically verified work records. Policy-governed accountability.
            Audit-defensible evidence — for teams that cannot afford uncertainty.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
            href="start-free"
             className="w-full rounded-md bg-teal-600 px-8 py-3 text-base font-bold text-white shadow-[0px_4px_18px_0px_rgba(0,157,140,0.40)] hover:bg-teal-700 sm:w-auto">
              Start 90 Day Trial — Free
            </Link>
            <Link
            href="request-a-demo"
            className="w-full rounded-md border border-teal-600 px-8 py-3 text-base font-medium text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-500/10 sm:w-auto">
              Watch 2 Minute Demo
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {TRIAL_BADGES.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 rounded-full border border-teal-600 bg-white/5 px-4 py-1.5 text-xs font-semibold text-neutral-700 dark:text-gray-300"
              >
                <span className="text-teal-500 dark:text-teal-400">✓</span>
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-start justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {STATS.map((stat, i) => (
              <React.Fragment key={stat.label}>
                <div className="text-center">
                  <p className="text-xl font-extrabold text-teal-500 dark:text-teal-400">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[9rem] text-xs font-semibold text-neutral-500/60 dark:text-gray-500">
                    {stat.label}
                  </p>
                </div>
                {i < STATS.length - 1 && (
                  <div className="hidden h-9 w-px self-center bg-teal-600 sm:block" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PLANS (imported) */}
      <PricingPlans />

      {/* ROI CALCULATOR */}
      <section className="bg-slate-100 px-4 py-16 dark:bg-gray-800/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrowText=""
            title="Quantify Your Payroll Leakage Exposure"
            subtitle="Input your workforce parameters to see the measurable financial case for ZoikoTime — based on verified client outcome data."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Inputs */}
            <div className={`${cardBase} bg-slate-50 p-8 dark:bg-gray-800`}>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Your Workforce Profile
              </h3>

              <div className="mt-8 space-y-8">
                <Slider
                  label="Number of Employees"
                  value={employees}
                  display={String(employees)}
                  min={5}
                  max={1000}
                  step={5}
                  onChange={setEmployees}
                />
                <Slider
                  label="Average Hourly Rate"
                  value={hourlyRate}
                  display={`$${hourlyRate}`}
                  min={12}
                  max={100}
                  step={1}
                  onChange={setHourlyRate}
                />
                <Slider
                  label="Average Weekly Hours"
                  value={weeklyHours}
                  display={`${weeklyHours}h`}
                  min={10}
                  max={60}
                  step={1}
                  onChange={setWeeklyHours}
                />
                <Slider
                  label="Estimated Leakage Rate"
                  value={leakageRate}
                  display={`${leakageRate}%`}
                  min={2}
                  max={20}
                  step={1}
                  onChange={setLeakageRate}
                />
              </div>

              <p className="mt-8 text-xs leading-5 text-slate-400 dark:text-gray-500">
                Industry benchmark leakage rate: 8–12% of gross payroll. Adjust to match your
                internal estimate.
              </p>
            </div>

            {/* Results */}
            <div className="rounded-2xl bg-slate-900 p-8 dark:bg-black">
              <h3 className="text-xl font-bold text-white">Your Financial Case</h3>
              <p className="mx-auto mt-3 max-w-sm text-center text-xs leading-5 text-white/50">
                Based on verified ZoikoTime client outcome data. Conservative estimates applied.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-2xl font-extrabold text-teal-500">{roi.annualLeakage}</p>
                  <p className="mt-2 text-xs leading-5 text-white/60">
                    Annual payroll leakage exposure
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-2xl font-extrabold text-teal-500">
                    {roi.estimatedRecovery}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/60">
                    Estimated annual recovery (15%)
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-2xl font-extrabold text-teal-500">
                    {roi.zoikoAnnualCost}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/60">
                    ZoikoTime annual cost (Governed)
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-2xl font-extrabold text-teal-500">{roi.roiPercent}</p>
                  <p className="mt-2 text-xs leading-5 text-white/60">
                    Estimated first-year ROI
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-white/5 p-4">
                <p className="text-2xl font-extrabold text-teal-500">{roi.paybackMonths}</p>
                <p className="mt-2 text-xs leading-5 text-white/60">Estimated payback period</p>
              </div>

              <div className="mt-8 flex justify-center">
  <Link
    href="/see-your-custom-quote"
    className="flex h-12 items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-bold text-white shadow-[0px_4px_14px_0px_rgba(0,157,140,0.30)] transition hover:bg-teal-700"
  >
    See Your Custom Quote →
  </Link>
</div>

              <p className="mx-auto mt-4 max-w-sm text-center text-xs leading-5 text-white/30">
                Estimates based on average leakage recovery rates across ZoikoTime enterprise
                deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL CAPABILITY MATRIX */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrowText="" title="Full Capability Matrix" />

          <div className={`${cardBase} mt-12 overflow-x-auto`}>
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-gray-700">
                  <th className="w-1/3 px-5 py-4 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-gray-500">
                    Feature
                  </th>
                  {MATRIX_PLANS.map((p) => (
                    <th
                      key={p.label}
                      className={`px-3 py-4 text-center ${
                        p.highlight ? "bg-emerald-50 dark:bg-teal-500/10" : ""
                      }`}
                    >
                      <p
                        className={`text-sm font-extrabold uppercase ${
                          p.highlight
                            ? "text-teal-600 dark:text-teal-400"
                            : p.label === "Enterprise"
                            ? "text-indigo-500 dark:text-indigo-400"
                            : "text-slate-700 dark:text-gray-300"
                        }`}
                      >
                        {p.label}
                      </p>
                      <p
                        className={`mt-1 font-mono text-xs font-bold uppercase tracking-wide ${
                          p.highlight
                            ? "text-teal-600 dark:text-teal-400"
                            : "text-slate-500 dark:text-gray-500"
                        }`}
                      >
                        {p.price}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX_GROUPS.map((group) => (
                  <React.Fragment key={group.title}>
                    <tr className="bg-slate-100 dark:bg-gray-700/60">
                      <td
                        colSpan={5}
                        className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-white"
                      >
                        {group.title}
                      </td>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label} className="border-b border-slate-200 dark:border-gray-700">
                        <td className="px-5 py-3 text-sm font-semibold text-slate-700 dark:text-gray-300">
                          {row.label}
                        </td>
                        {row.values.map((value, i) => (
                          <td
                            key={i}
                            className={`px-3 py-3 text-center ${
                              i === 1 ? "bg-teal-600/5" : ""
                            }`}
                          >
                            <Cell value={value} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ZOIKOTIME VS ALTERNATIVES */}
      <section className="bg-slate-100 px-4 py-16 dark:bg-gray-800/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrowText=""
            title="ZoikoTime vs Activity-Tracking Alternatives"
            subtitle="ZoikoTime is the platform buyers choose when they need evidence, not just dashboards — confidence, not just activity percentages — and defensible workforce truth, not just monitoring."
          />

          <div className={`${cardBase} mt-12 overflow-x-auto`}>
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 dark:border-gray-700">
                  <th className="px-5 py-3 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-gray-500">
                    Capability
                  </th>
                  <th className="bg-emerald-50 px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-teal-700 dark:bg-teal-500/10 dark:text-teal-400">
                    ZoikoTime
                  </th>
                  <th className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-gray-500">
                    Time Doctor
                  </th>
                  <th className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-gray-500">
                    Hubstaff
                  </th>
                  <th className="px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-gray-500">
                    ActivTrak
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-slate-200 dark:border-gray-700">
                    <td className="px-5 py-3 text-sm font-bold text-slate-900 dark:text-gray-200">
                      {row.label}
                    </td>
                    {row.values.map((value, i) => (
                      <td
                        key={i}
                        className={`px-3 py-3 text-center ${i === 0 ? "bg-teal-600/5" : ""}`}
                      >
                        <Cell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ENTERPRISE CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-slate-900 px-8 py-12 dark:bg-black sm:px-14">
          <div className="pointer-events-none absolute right-[-80px] top-[-40px] h-72 w-96 rounded-full bg-teal-500/10 blur-3xl" />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-3xl font-extrabold leading-tight text-white">
                Fortune 1000 or Complex Deployment?
              </h3>
              <p className="mt-4 text-base leading-6 text-white/60">
                ZoikoTime Enterprise is designed for organisations requiring dedicated
                infrastructure, custom data residency, compliance advisory, and
                institutional-grade service commitments. Commercial conversation required —
                not a self-serve checkout.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="mt-8 flex justify-center">
  <Link
    href="/request-enterprise-demo"
    className="flex h-12 w-full max-w-md items-center justify-center rounded-md bg-teal-600 px-8 text-sm font-bold text-white shadow-[0px_4px_14px_0px_rgba(0,157,140,0.30)] transition hover:bg-teal-700"
  >
    Request Enterprise Quote
  </Link>
</div>
              <Link
    href="/schedule-compliance-architecture"
    className="flex h-12 w-full max-w-md items-center justify-center rounded-md border border-teal-600 bg-white px-8 text-center text-sm font-bold text-teal-600 transition hover:bg-gray-50"
  >
    Schedule Compliance Architecture Review
  </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING FAQ */}
      <section className="bg-slate-100 px-4 py-16 dark:bg-gray-800/60 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Pricing FAQ
          </h2>

          <div className={`${cardBase} mt-10 divide-y divide-slate-200 dark:divide-gray-700`}>
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.question}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-teal-600 transition-transform dark:text-teal-400 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-6 text-slate-500 dark:text-gray-400">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 px-4 py-20 text-center dark:from-teal-500/10 dark:to-emerald-500/5 sm:px-6 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

        <h2 className="text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl">
          90 Days. Full Access.{" "}
          <span className="text-teal-600 dark:text-teal-400">No Credit Card.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 dark:text-gray-400">
          Start the trial that takes 90 seconds to activate and 90 days to evaluate — with full
          feature access, zero risk, and no obligation to upgrade.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
          href ="start-free"
           className="w-full rounded-md bg-teal-600 px-8 py-3 text-base font-bold text-white shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)] hover:bg-teal-700 sm:w-auto">
            Start Free Trial
          </Link>
          <Link
          href = "request-enterprise-demo"
           className="w-full rounded-md border border-slate-200 bg-white px-8 py-3 text-base font-medium text-slate-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto">
            Request Enterprise Quote
          </Link>
        </div>
      </section>
    </div>
  );
}