"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Globe2,
  BrainCircuit,
  FileCheck2,
  Lock,
  Check,
} from "lucide-react";

/**
 * Request Enterprise Demo page
 * - Next.js (app router) — app/request-a-demo/demo.tsx
 * - Tailwind CSS, dark mode via `dark:` classes (class-based dark mode)
 * - Fully responsive: grids collapse to 1 / 2 columns on smaller screens
 */

const eyebrow =
  "text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400";

const cardBase =
  "rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-gray-700 dark:bg-gray-800";

const inputBase =
  "w-full rounded-[10px] border border-gray-300 bg-white px-4 py-3 text-base text-slate-800 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-teal-600/40 dark:border-gray-600 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

interface SectionHeadingProps {
  eyebrowText: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}

interface SessionTopic {
  icon: string;
  title: string;
  body: string;
}

interface CommitteeCard {
  label: string;
  title: string;
  body: string;
}

interface UseCase {
  title: string;
  body: string;
}

interface EvidenceColumn {
  label: string;
  value: string;
}

interface RolloutStep {
  number: number;
  label: string;
}

interface TrustBadge {
  icon: React.ReactNode;
  label: string;
}

const NAV_LINKS: string[] = [
  "Product",
  "Use Cases",
  "Trust & Governance",
  "Enterprise",
  "Pricing",
  "Resources",
];

/* ------------------------------------------------------------------ */
/* Small components                                                     */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrowText, title, subtitle, light }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={eyebrow}>{eyebrowText}</p>
      <h2
        className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : "text-slate-800 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-7 ${
            light ? "text-white/80" : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

function FormField({
  label,
  placeholder,
  required,
  hint,
  type = "text",
}: {
  label: string;
  placeholder: string;
  required?: boolean;
  hint?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-1 text-sm font-semibold text-slate-800 dark:text-gray-200">
        {label}
        {required && <span className="text-teal-600 dark:text-teal-400">*</span>}
        {hint && (
          <span className="ml-1 text-xs font-normal text-gray-500 dark:text-gray-500">
            {hint}
          </span>
        )}
      </label>
      <input type={type} placeholder={placeholder} className={inputBase} />
    </div>
  );
}

function StepIndicator() {
  const steps = [
    { n: 1, label: "Contact", active: true },
    { n: 2, label: "Organization", active: false },
    { n: 3, label: "Needs", active: false },
  ];

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {steps.map((step, i) => (
        <React.Fragment key={step.n}>
          <div className="flex items-center gap-2">
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-2xl border-2 text-xs font-semibold ${
                step.active
                  ? "border-teal-600 bg-teal-600 text-white"
                  : "border-gray-300 bg-white text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
              }`}
            >
              {step.n}
            </div>
            <span
              className={`hidden text-sm sm:inline ${
                step.active
                  ? "font-semibold text-slate-800 dark:text-white"
                  : "font-medium text-gray-500 dark:text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className="h-0.5 w-6 shrink-0 bg-gray-300 dark:bg-gray-600 sm:w-11" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content data                                                         */
/* ------------------------------------------------------------------ */

const TRUST_BADGES: TrustBadge[] = [
  { icon: <FileCheck2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />, label: "Audit-Ready Evidence" },
  { icon: <Globe2 className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />, label: "Multi-Jurisdiction Governance" },
  { icon: <Lock className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />, label: "Role-Based Access Control" },
  { icon: <BrainCircuit className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />, label: "Human-in-Command AI" },
  { icon: <ShieldCheck className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400" />, label: "Security-First Architecture" },
];

const SESSION_TOPICS: SessionTopic[] = [
  {
    icon: "/request-enterprise-demo/SVG.png",
    title: "Workforce Activity & Time Evidence",
    body: "See how activity, time, and approvals become a governed, verifiable record of what actually happened.",
  },
  {
    icon: "/request-enterprise-demo/SVG 1.png",
    title: "Compliance & Audit Readiness",
    body: "Explore audit-ready trails, retention controls, and evidence designed to withstand scrutiny.",
  },
  {
    icon: "/request-enterprise-demo/SVG 3.png",
    title: "Multi-Jurisdiction Operations",
    body: "Understand how cross-border policy, data residency, and local rules are governed from one platform.",
  },
  {
    icon: "/request-enterprise-demo/SVG 4.png",
    title: "AI-Assisted Workforce Intelligence",
    body: "See human-in-command AI that explains decisions, flags exceptions, and keeps people accountable.",
  },
];

const COMMITTEE_CARDS: CommitteeCard[] = [
  {
    label: "Operations",
    title: "Operational clarity at scale",
    body: "Real-time visibility into activity, time, and exceptions across every team and location.",
  },
  {
    label: "HR / People",
    title: "Fair, consistent workforce rules",
    body: "Transparent policies, approvals, and evidence that protect both the organization and its people.",
  },
  {
    label: "Finance / Payroll",
    title: "Defensible payroll inputs",
    body: "Accurate, validated time and billing evidence that reduces leakage and reconciliation effort.",
  },
  {
    label: "Legal / Compliance",
    title: "Audit-ready accountability",
    body: "Governed records, legal hold, retention, and trails built to support due diligence and regulators.",
  },
  {
    label: "IT / Security",
    title: "Secure, role-based access",
    body: "RBAC, security-first architecture, and clean integration with your existing enterprise stack.",
  },
  {
    label: "BPO / Service Delivery",
    title: "Client-billable assurance",
    body: "Evidence-backed billing and delivery confidence for outsourced and client-facing operations.",
  },
];

const USE_CASES: UseCase[] = [
  { title: "Remote workforce governance", body: "visibility and assurance without surveillance." },
  { title: "Hybrid visibility", body: "consistent rules across office, home, and field." },
  { title: "Client-billable evidence", body: "defensible records for billing and delivery." },
  { title: "Multi-country compliance", body: "jurisdiction-aware policy and residency." },
  { title: "Contractor oversight", body: "governed access and accountable activity." },
  { title: "Payroll validation", body: "accurate inputs that reduce disputes and leakage." },
  { title: "BPO assurance", body: "service-level evidence across delivery teams." },
  {
    title: "Regulated workforce audit readiness",
    body: "evidence built for scrutiny.",
  },
];

const EVIDENCE_COLUMNS: EvidenceColumn[] = [
  { label: "What", value: "what happened" },
  { label: "When", value: "when it happened" },
  { label: "Who", value: "who approved it" },
  { label: "Policy", value: "which policy applied" },
  { label: "Evidence", value: "what evidence supports it" },
];

const ROLLOUT_STEPS: RolloutStep[] = [
  { number: 1, label: "Workspace setup" },
  { number: 2, label: "Teams" },
  { number: 3, label: "Worker import" },
  { number: 4, label: "Roles" },
  { number: 5, label: "Policy configuration" },
  { number: 6, label: "Breaks & overtime" },
  { number: 7, label: "Approvals" },
  { number: 8, label: "Evidence retention" },
  { number: 9, label: "Access control" },
  { number: 10, label: "Integrations" },
  { number: 11, label: "Dashboards" },
  { number: 12, label: "Pilot & rollout" },
];

const FOOTER_COLUMNS: { heading: string; links: string[] }[] = [
  {
    heading: "Platform",
    links: ["Workforce Intelligence", "Compliance Posture", "Evidence Capture", "Integrations"],
  },
  {
    heading: "Solutions",
    links: ["Distributed Workforce", "Contractors", "Regulated Industries", "BPO & Delivery"],
  },
  {
    heading: "Trust & Governance",
    links: ["Security Overview", "Privacy", "Governance Framework", "Regulator Brief"],
  },
  {
    heading: "Company",
    links: ["About ZoikoTime", "Resources", "Careers", "Contact Sales"],
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function RequestEnterpriseDemoPage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 dark:bg-gray-900 dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-16 dark:from-gray-900 dark:to-gray-900 sm:px-6 sm:py-24 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-[-160px] h-96 w-[760px] -translate-x-1/2 rounded-full bg-teal-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className={eyebrow}>Enterprise Demo</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800 dark:text-white sm:text-5xl">
            See how ZoikoTime delivers{" "}
            <span className="text-teal-600 dark:text-teal-400">workforce truth</span> at
            enterprise scale
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            Book a guided demo with the ZoikoTime enterprise team and explore how your
            organization can manage workforce activity, time, compliance, audit evidence,
            approvals, and cross-jurisdiction operations from one governed platform.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="w-full rounded-[10px] bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] hover:bg-teal-700 sm:w-auto">
              Request Enterprise Demo
            </button>
            <button className="w-full rounded-[10px] border border-gray-300 bg-white px-8 py-3 text-base font-semibold text-slate-800 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:w-auto">
              Explore Enterprise Platform
            </button>
          </div>

          <p className="mt-6 text-sm">
            <span className="font-semibold text-slate-800 dark:text-white">
              Typical response within one business day.
            </span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              Tailored to your workforce model.
            </span>
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-4 py-2 text-xs font-medium text-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              >
                {badge.icon}
                {badge.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO REQUEST FORM */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl ${cardBase} p-6 sm:p-10`}>
          <h2 className="text-center text-2xl font-bold text-slate-800 dark:text-white">
            Request your enterprise demo
          </h2>
          <p className="mx-auto mt-3 max-w-md text-center text-base leading-6 text-gray-500 dark:text-gray-400">
            Tell us about your organization so we can tailor the demo to your workforce
            model, compliance needs, and operational priorities.
          </p>

          <div className="mt-8">
            <StepIndicator />
          </div>

          <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FormField label="Work Email Address" placeholder="you@company.com" required type="email" />
              <FormField label="Full Name" placeholder="Jordan Avery" required />
              <FormField label="Job Title" placeholder="VP of Operations" required />
              <FormField
                label="Phone Number"
                placeholder="+1 555 000 0000"
                hint="(recommended)"
                type="tel"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[10px] bg-teal-600 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] hover:bg-teal-700"
            >
              Continue
            </button>
          </form>
        </div>
      </section>

      {/* IN YOUR SESSION */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrowText="In Your Session"
            title="What your enterprise demo will cover"
            subtitle="A guided, tailored walkthrough mapped to your workforce model — so every stakeholder leaves with clarity, not a generic product tour."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SESSION_TOPICS.map((topic) => (
              <div key={topic.title} className={`${cardBase} p-7`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-teal-500/10">
                 <img className="h-5 w-5" src={topic.icon} />
                </div>
                <h3 className="mt-6 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                  {topic.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUYING COMMITTEE */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrowText="Buying Committee"
            title="Built for enterprise workforce leaders"
            subtitle="Every stakeholder sees the part that matters to them — and how the platform serves the whole organization."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMITTEE_CARDS.map((card) => (
              <div key={card.label} className={`${cardBase} p-7`}>
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  {card.label}
                </p>
                <h3 className="mt-3 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrowText="Real-World Complexity"
            title="Enterprise use cases ZoikoTime supports"
            subtitle="If your workforce is distributed, regulated, or client-facing, the demo will show exactly how it maps to you."
          />

          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-400" />
                <p className="text-base leading-6">
                  <span className="font-semibold text-slate-800 dark:text-white">{uc.title}</span>{" "}
                  <span className="text-gray-700 dark:text-gray-400">— {uc.body}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFORCE TRUTH INFRASTRUCTURE */}
      <section className="border-y border-emerald-100 bg-emerald-50 px-4 py-16 dark:border-teal-500/20 dark:bg-teal-500/5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrowText="More Than Time Tracking"
            title="Workforce truth infrastructure"
            subtitle="ZoikoTime is a governed system of record. It captures not just hours, but the full evidentiary context behind every workforce decision."
          />

          <div className={`mt-10 grid grid-cols-2 divide-x divide-emerald-100 overflow-hidden rounded-2xl border border-emerald-100 bg-white dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 sm:grid-cols-5`}>
            {EVIDENCE_COLUMNS.map((col) => (
              <div key={col.label} className="px-4 py-6 text-center">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-600 dark:text-teal-400">
                  {col.label}
                </p>
                <p className="mt-3 text-sm font-medium leading-5 text-slate-800 dark:text-gray-200">
                  {col.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION READINESS */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrowText="Implementation Readiness"
            title="Designed for serious rollouts"
            subtitle="Your demo also begins rollout discovery — the practical path from evaluation to a governed, production deployment."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {ROLLOUT_STEPS.map((step) => (
              <div
                key={step.number}
                className={`${cardBase} flex items-center gap-2.5 rounded-full px-4 py-2.5`}
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xs font-bold text-teal-700 dark:bg-teal-500/10 dark:text-teal-400">
                  {step.number}
                </div>
                <span className="whitespace-nowrap text-sm font-medium text-slate-800 dark:text-gray-200">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* READY WHEN YOU ARE - DARK CTA */}
      <section className="bg-gradient-to-br from-slate-800 to-blue-950 px-4 py-20 text-center dark:from-black dark:to-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-500">
            Ready When You Are
          </p>
          <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Bring workforce truth to your enterprise
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-6 text-white/80">
            Tell us about your workforce, compliance, reporting, and rollout requirements —
            and we&apos;ll tailor a demo to exactly what your committee needs to see.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="w-full rounded-[10px] bg-teal-600 px-8 py-3 text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] hover:bg-teal-700 sm:w-auto">
              Request Enterprise Demo
            </button>
            <button className="w-full rounded-[10px] border border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white hover:bg-white/20 sm:w-auto">
              Explore Enterprise Platform
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
}