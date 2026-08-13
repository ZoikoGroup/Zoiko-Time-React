"use client";

import React, { useState } from "react";
import Link from "next/link";

const enterpriseFaqs = [
  {
    question: "What is enterprise workforce governance in ZoikoTime?",
    answer:
      "Enterprise workforce governance means managing workforce records through defined permissions, policies, approvals, review workflows, audit trails, retention controls, and human oversight. ZoikoTime connects workforce events and records into a governed layer that can support payroll, billing, operations, finance, HR, legal, and compliance workflows.",
  },
  {
    question: "Is ZoikoTime just an employee monitoring tool?",
    answer:
      "No. ZoikoTime is designed as a workforce record and governance platform rather than an invasive employee surveillance system. Depending on configuration, it can capture time, attendance, activity context, screenshots, approvals, corrections, and exceptions while providing permissions, transparency, review workflows, and governance controls.",
  },
  {
    question: "Does ZoikoTime automatically discipline workers?",
    answer:
      "No. ZoikoTime does not automatically determine disciplinary outcomes. Its workflows and AI-assisted signals are intended to support authorized human review. Organizations remain responsible for employment decisions, policies, legal requirements, and appropriate management action.",
  },
  {
    question: "Can ZoikoTime support legal hold?",
    answer:
      "Yes. ZoikoTime can support legal hold workflows by helping preserve relevant workforce records when disputes, investigations, audits, or litigation require extended retention. Exact retention and legal hold behavior depends on the organization's configuration, plan, and applicable requirements.",
  },
  {
    question: "Does ZoikoTime guarantee compliance?",
    answer:
      "No software can guarantee compliance across every jurisdiction or employment situation. ZoikoTime provides controls and workflows that can support governance, transparency, retention, access management, and evidence handling. Organizations remain responsible for configuring the platform appropriately and meeting their applicable legal and regulatory obligations.",
  },
  {
    question: "Is enterprise deployment self-service?",
    answer:
      "Enterprise deployment can involve discovery, governance design, configuration, access control, pilot validation, integrations, reporting, rollout, and ongoing governance. The appropriate deployment approach depends on the organization's structure, workforce, requirements, integrations, and governance needs.",
  },
];

export default function Enterprise() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen w-full bg-white antialiased text-slate-900 dark:bg-slate-950 dark:text-white">

      {/* ================= HERO SECTION ================= */}

      <section className="relative w-full overflow-hidden bg-teal-600 px-4 pb-24 pt-20 text-white dark:bg-teal-700 md:pb-40 md:pt-28">

        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600" />

        <div className="pointer-events-none absolute right-[-80px] top-[-80px] size-[480px] bg-radial from-teal-400/20 to-transparent opacity-60" />

        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-12">

          {/* LEFT CONTENT */}

          <div className="space-y-6 lg:col-span-7">

            <div className="inline-flex rounded-full border border-teal-400/20 bg-teal-500/10 px-4 py-1">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                Enterprise Workforce Governance
              </span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Govern Workforce
              <br className="hidden md:block" />
              Records With Enterprise-
              <br className="hidden md:block" />
              Grade Control
            </h1>

            <p className="max-w-[520px] text-sm leading-relaxed text-white/75 md:text-lg">
              ZoikoTime helps organizations capture, review, approve, retain,
              and govern workforce records across teams, departments,
              contractors, and jurisdictions with role-based permissions,
              audit trails, policy controls, and human oversight.
            </p>

            <p className="max-w-[480px] text-sm leading-relaxed text-white/50 md:text-base">
              Enterprise workforce data affects payroll, billing, compliance,
              operations, finance, legal exposure, and management decisions.
              ZoikoTime gives leaders a structured way to govern the records
              behind those decisions.
            </p>

            {/* Buttons */}

            <div className="flex flex-col gap-4 pt-4 sm:flex-row">

              <Link
                href="/contact-sales"
                className="rounded-lg bg-white px-8 py-3.5 text-center font-semibold text-teal-600 shadow-[0px_4px_20px_0px_rgba(0,157,140,0.40)] transition hover:bg-teal-50"
              >
                Contact Sales
              </Link>

              <Link
                href="/request-a-demo"
                className="rounded-lg border border-white/70 px-8 py-3.5 text-center font-medium text-white transition hover:bg-white/10"
              >
                Get a Demo
              </Link>

            </div>

          </div>

          {/* RIGHT STAT CARD */}

          <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl backdrop-blur-sm dark:bg-black/20 md:p-6 lg:col-span-5">

            <div className="grid grid-cols-2 gap-4">

              {[
                {
                  title: "PAYROLL READY",
                  value: "94%",
                  color: "text-teal-300",
                },
                {
                  title: "EXCEPTIONS",
                  value: "23",
                  color: "text-amber-400",
                },
                {
                  title: "APPROVALS",
                  value: "1,847",
                  color: "text-white",
                },
                {
                  title: "LEGAL HOLDS",
                  value: "2",
                  color: "text-violet-300",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-white/10 bg-white/5 p-4"
                >
                  <span className="mb-1 block text-[9px] font-bold uppercase tracking-wide text-white/40">
                    {item.title}
                  </span>

                  <span className={`text-xl font-bold ${item.color}`}>
                    {item.value}
                  </span>
                </div>
              ))}

            </div>

            {/* Compliance Bar */}

            <div className="space-y-2 rounded-lg border border-teal-400/20 bg-teal-500/10 p-4">

              <span className="block text-xs font-bold text-teal-200">
                Policy Compliance
              </span>

              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[87%] rounded-full bg-teal-300" />
              </div>

              <span className="block text-[10px] text-white/50">
                87% records policy-compliant
              </span>

            </div>

            <p className="text-center text-xs text-white/40">
              Built for governed workforce records, not invasive monitoring.
            </p>

          </div>

        </div>

        {/* Feature Pills */}

        <div className="mx-auto mt-16 max-w-[1052px] md:mt-20">

          <div className="flex flex-wrap justify-center gap-4 rounded-xl border border-white/20 bg-white/5 p-4 md:justify-around">

            {[
              "Governed records",
              "Role-based permissions",
              "Policy controls",
              "Audit trails",
              "Legal hold support",
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                <span className="size-1.5 rounded-full bg-teal-300" />

                <span className="text-xs font-semibold text-white/70">
                  {text}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= INFRASTRUCTURE RISK ================= */}

      <section className="bg-slate-100 px-4 py-16 dark:bg-slate-900 md:px-6 md:py-24">

        <div className="mx-auto max-w-[1100px] space-y-16">

          <div className="mx-auto max-w-[900px] space-y-4 text-center">

            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              Workforce Records Have Become Enterprise Risk Infrastructure
            </h2>

            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-300 md:text-base">
              Modern organizations rely on workforce records for payroll,
              billing, compliance, dispute resolution, and executive
              reporting. Fragmented or ungoverned records create exposure
              across every function.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                icon: "🗂",
                title: "Fragmented Records",
                text: "Time, attendance, activity, approvals, and exceptions may live in different systems, creating inconsistency, gaps, and governance risk.",
              },
              {
                icon: "📉",
                title: "Weak Evidence Quality",
                text: "Records without timestamps, policy context, correction history, or approval trails are difficult to defend in payroll, billing, or legal review.",
              },
              {
                icon: "📋",
                title: "Manual Governance Burden",
                text: "Spreadsheets, email approvals, and manual exception handling create inconsistency, delays, and audit gaps.",
              },
              {
                icon: "💸",
                title: "Payroll and Billing Exposure",
                text: "Unsupported time records affect payroll accuracy, client invoice defensibility, project margins, and financial reporting.",
              },
              {
                icon: "⚠",
                title: "Policy Drift",
                text: "Without structured policy enforcement, workforce oversight becomes inconsistent across teams and locations.",
              },
              {
                icon: "⚖",
                title: "Legal and Audit Pressure",
                text: "Organizations without structured records face evidence and defensibility gaps during audits or disputes.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800 md:p-6"
              >

                <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-400" />

                <span className="mb-3 block text-2xl">
                  {card.icon}
                </span>

                <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-300">
                  {card.text}
                </p>

              </div>
            ))}

          </div>

          <p className="text-center text-sm font-semibold text-slate-700 dark:text-slate-200">
            Enterprise governance begins with workforce records that can be
            trusted, explained, reviewed, and retained.
          </p>

        </div>

      </section>

      {/* ================= GOVERNANCE ARCHITECTURE ================= */}

      <section className="bg-teal-600 px-4 py-16 text-white dark:bg-teal-700 md:px-6 md:py-24">

        <div className="mx-auto max-w-[1052px] space-y-12">

          <div className="space-y-4 text-center">

            <h2 className="text-2xl font-semibold md:text-4xl">
              A Governance Layer for Workforce Operations
            </h2>

            <p className="mx-auto max-w-[850px] text-sm leading-relaxed text-white/70 md:text-base">
              ZoikoTime provides a workforce governance architecture that
              connects time capture, activity verification, attendance,
              approvals, exceptions, reporting, retention, and evidence into
              one governed platform.
            </p>

          </div>

          <div className="space-y-4">

            {[
              {
                num: "1",
                color: "bg-indigo-500",
                title: "Workforce Events",
                desc: "Clock-ins, clock-outs, breaks, activity, project context, screenshots where enabled, corrections, approvals, and exceptions.",
              },
              {
                num: "2",
                color: "bg-teal-800",
                title: "Policy and Permission Layer",
                desc: "Roles, access rights, approval rules, screenshot controls, retention settings, escalation paths, and jurisdiction-aware configuration.",
              },
              {
                num: "3",
                color: "bg-teal-400",
                title: "Review and Decision Layer",
                desc: "Manager approvals, HR review, finance validation, legal escalation, administrator oversight, and exception resolution.",
              },
              {
                num: "4",
                color: "bg-amber-500",
                title: "Evidence and Audit Layer",
                desc: "Immutable logs, record history, evidence packages, exports, legal hold, and audit trails.",
              },
              {
                num: "5",
                color: "bg-emerald-400",
                title: "Executive Intelligence Layer",
                desc: "Dashboards, workforce analytics, payroll readiness, billing support, risk indicators, and governance reporting.",
              },
            ].map((layer) => (
              <div
                key={layer.num}
                className="flex items-start gap-4 rounded-xl border border-white/20 bg-white/10 p-4 md:items-center md:p-5"
              >

                <div
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${layer.color}`}
                >
                  {layer.num}
                </div>

                <div>

                  <h4 className="text-sm font-semibold">
                    {layer.title}
                  </h4>

                  <p className="text-xs leading-relaxed text-white/70">
                    {layer.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= HIGH-STAKES OPERATIONS ================= */}

      <section className="bg-slate-100 px-4 py-16 dark:bg-slate-900 md:px-6 md:py-24">

        <div className="mx-auto max-w-[1100px] space-y-14">

          <div className="space-y-3 text-center">

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Governance for High-Stakes Workforce Operations
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-300 md:text-base">
              ZoikoTime supports organizations where workforce records
              influence money, risk, performance, client trust, and compliance
              workflows.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "💰",
                title: "Payroll Cutoff Readiness",
                desc: "Ensure time records, approvals, and exceptions are reviewed before payroll processing deadlines.",
              },
              {
                icon: "🧾",
                title: "Client Billing Support",
                desc: "Support billing workflows with approved time, project allocation, and evidence packages.",
              },
              {
                icon: "🤝",
                title: "Contractor Oversight",
                desc: "Govern contractor records, approvals, and project allocation with enterprise controls.",
              },
              {
                icon: "🌐",
                title: "Distributed Workforce Control",
                desc: "Maintain consistent governance across remote, hybrid, field, and multi-location teams.",
              },
              {
                icon: "📅",
                title: "Attendance Exception Review",
                desc: "Identify and resolve attendance gaps, missed entries, and unusual patterns.",
              },
              {
                icon: "📋",
                title: "Audit Preparation",
                desc: "Maintain structured records, approval history, policy context, and exportable evidence.",
              },
              {
                icon: "⚖",
                title: "Legal Hold Support",
                desc: "Preserve relevant workforce records during investigations, audits, or disputes.",
              },
              {
                icon: "📊",
                title: "Policy Exception Governance",
                desc: "Document policy exceptions, override decisions, escalation history, and resolutions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800"
              >

                <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-400" />

                <span className="mb-3 block text-2xl">
                  {item.icon}
                </span>

                <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-300">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= SECURITY ================= */}

      <section className="bg-teal-500 px-4 py-16 text-white dark:bg-teal-700 md:px-6 md:py-24">

        <div className="mx-auto max-w-[1100px] space-y-14">

          <h2 className="text-center text-2xl font-semibold md:text-4xl">
            Designed for Security, Retention, and Defensible Records
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: "👤",
                title: "Role-Based Access Control",
                desc: "Define access by role, responsibility, team, department, and administrative authority.",
              },
              {
                icon: "📁",
                title: "Data Retention Controls",
                desc: "Support configurable retention settings and deletion safeguards.",
              },
              {
                icon: "⚖",
                title: "Legal Hold Workflows",
                desc: "Preserve records when legal, audit, or investigation obligations require retention.",
              },
              {
                icon: "🔗",
                title: "Chain-of-Custody Support",
                desc: "Maintain traceable records for events, corrections, approvals, and exports.",
              },
              {
                icon: "📸",
                title: "Screenshot and Redaction",
                desc: "Govern screenshot access, permissions, and redaction controls.",
              },
              {
                icon: "📋",
                title: "Audit-Grade Evidence",
                desc: "Create evidence packages with timestamps, policy context, and review history.",
              },
              {
                icon: "🔒",
                title: "Secure Administration",
                desc: "Permission-separated admin access with security review support.",
              },
              {
                icon: "🤖",
                title: "Responsible AI Controls",
                desc: "AI insights supporting human review without automatic workforce decisions.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="space-y-3 rounded-2xl border border-white/20 bg-white/10 p-6"
              >

                <span className="block text-2xl">
                  {item.icon}
                </span>

                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-xs leading-relaxed text-white/70">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= IMPLEMENTATION ================= */}

      <section className="bg-white px-4 py-16 dark:bg-slate-950 md:px-6 md:py-24">

        <div className="mx-auto max-w-[1052px] space-y-12">

          <div className="space-y-3 text-center">

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Built for Governed Enterprise Rollout
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-300 md:text-base">
              ZoikoTime supports phased deployment aligned to structure,
              policy, roles, communication, and adoption.
            </p>

          </div>

          <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 dark:divide-slate-700 dark:border-slate-700">

            {[
              ["Phase 1", "Discovery and Governance Design"],
              ["Phase 2", "Configuration and Access Control"],
              ["Phase 3", "Pilot and Validation"],
              ["Phase 4", "Integrations and Reporting"],
              ["Phase 5", "Enterprise Rollout"],
              ["Phase 6", "Continuous Governance"],
            ].map((phase, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 bg-white p-5 dark:bg-slate-900 sm:flex-row"
              >

                <span className="text-xs font-bold text-teal-600">
                  {phase[0]}
                </span>

                <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {phase[1]}
                </h4>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= FAQ ================= */}

      <section className="bg-slate-100 px-4 py-16 dark:bg-slate-900 md:px-6 md:py-24">

        <div className="mx-auto max-w-[760px]">

          <h2 className="mb-10 text-center text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">
            Enterprise Governance FAQs
          </h2>

          <div className="overflow-hidden rounded-2xl bg-white divide-y divide-slate-200 dark:bg-slate-800 dark:divide-slate-700">

            {enterpriseFaqs.map((faq, index) => {

              const isOpen = openFaq === index;

              return (
                <div key={faq.question}>

                  {/* QUESTION */}

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 p-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-700"
                  >

                    <span className="text-sm font-semibold text-slate-900 dark:text-white md:text-base">
                      {faq.question}
                    </span>

                    <span className="flex size-6 shrink-0 items-center justify-center text-xl font-medium leading-none text-teal-500">
                      {isOpen ? "−" : "+"}
                    </span>

                  </button>

                  {/* ANSWER */}

                  {isOpen && (
                    <div className="border-t border-slate-200 px-5 pb-5 pt-4 dark:border-slate-700">

                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* ================= CTA FOOTER ================= */}

      <section className="relative bg-gradient-to-r from-teal-50 to-emerald-50 px-4 py-16 dark:from-slate-900 dark:to-slate-800 md:px-6 md:py-20">

        <div className="mx-auto flex max-w-[1100px] flex-col justify-between gap-8 lg:flex-row">

          <div className="space-y-4">

            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white md:text-4xl">
              Bring Governance to the Workforce Records Your Enterprise Relies On
            </h2>

            <p className="text-slate-500 dark:text-slate-300">
              See how ZoikoTime helps organizations govern workforce records,
              approvals, exceptions, payroll readiness, and audit evidence.
            </p>

          </div>

          <div className="flex flex-col gap-4">

            <Link
              href="/contact-sales"
              className="rounded-lg bg-teal-600 px-8 py-3.5 text-center text-white transition hover:bg-teal-700"
            >
              Contact Sales
            </Link>

            <Link
              href="/request-a-demo"
              className="rounded-lg border border-slate-200 bg-white px-8 py-3.5 text-center text-slate-900 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600"
            >
              Get a Demo
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}