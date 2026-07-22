"use client";
import DownloadPopup from "./downloadpopup";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question:
      "Is ZoikoTime suitable for consulting firms, agencies, and advisory practices?",
    answer:
      "Yes. ZoikoTime is designed for consulting firms, agencies, advisory practices, and other professional services organizations that rely on accurate billable time, utilization tracking, project delivery, and client billing.",
  },
  {
    question: "Can ZoikoTime help reduce billable time leakage?",
    answer:
      "Yes. ZoikoTime provides verified time capture, approval workflows, activity evidence, and reporting that help identify missing, late, or unsupported billable hours before invoices are generated.",
  },
  {
    question: "Can ZoikoTime support client billing reviews?",
    answer:
      "Absolutely. ZoikoTime maintains approval history, project allocation, supporting evidence, and audit-ready records to make client billing reviews more transparent and defensible.",
  },
  {
    question:
      "Does ZoikoTime work for remote teams, contractors, and offshore delivery centers?",
    answer:
      "Yes. ZoikoTime supports distributed workforces, contractors, remote employees, and offshore teams while maintaining centralized governance, approvals, and visibility.",
  },
  {
    question:
      "Is ZoikoTime only for large professional services firms?",
    answer:
      "No. ZoikoTime is suitable for organizations of all sizes—from growing consulting firms to large enterprises—with scalable workflows and reporting.",
  },
];

const features = [
  "Billable time visibility",
  "Utilization intelligence",
  "Client billing support",
  "Approval discipline",
  "Audit-ready records",
];
const stats = [
  {
    value: "15%",
    label: "Average write-off reduction",
  },
  {
    value: "4 wk",
    label: "Typical payback period",
  },
  {
    value: "96%",
    label: "Billing record support rate",
  },
  {
    value: "+12%",
    label: "Billable utilization improvement",
  },
  {
    value: "SOC 2",
    label: "Type II certified",
  },
];
const problems = [
  {
    icon: "💸",
    title: "Billable Time Leakage",
    description:
      "Work may be performed but never captured, submitted late, allocated to the wrong project, or written off because the record lacks sufficient support to survive a billing review.",
  },
  {
    icon: "👁",
    title: "Utilization Blind Spots",
    description:
      "Partners and operators may struggle to see which teams are underutilized, overloaded, misallocated, or carrying too much non-billable work until the period has already closed.",
  },
  {
    icon: "🧾",
    title: "Client Billing Pressure",
    description:
      "When clients question invoices, firms need records that connect time to project allocation, work context, approvals, and delivery evidence that can be shared and defended.",
  },
  {
    icon: "✏️",
    title: "Manual Timesheet Risk",
    description:
      "Manual entries, repeated edits, missing notes, inconsistent approvals, and unsupported claims weaken both payroll confidence and client billing defensibility.",
  },
];
const workflowSteps = [
  {
    id: 1,
    title: "Work Performed",
    description:
      "Activity captured with supporting signals and project context",
  },
  {
    id: 2,
    title: "Time Captured",
    description:
      "Verified entries with activity context, notes, and edit history",
  },
  {
    id: 3,
    title: "Project Allocated",
    description:
      "Time connected to clients, engagements, and practice groups",
  },
  {
    id: 4,
    title: "Manager Reviewed",
    description:
      "Approval workflow with exception handling and audit trail",
  },
  {
    id: 5,
    title: "Client Supported",
    description:
      "Evidence-backed records ready for billing review and dispute defence",
  },
  {
    id: 6,
    title: "Revenue Protected",
    description:
      "Payroll and billing records defensible and ready for close",
    badge: "Protected",
  },
];
const capabilities = [
  {
    icon: "✅",
    title: "Billable Time Verification",
    description:
      "Review billable hours with supporting activity signals, project allocation, approval status, edits, notes, and exception history before every billing cycle.",
  },
  {
    icon: "📈",
    title: "Utilization Intelligence",
    description:
      "Understand billable versus non-billable time, team capacity, workload imbalance, idle patterns, and role-level utilization across every project and practice group.",
  },
  {
    icon: "📁",
    title: "Project Time Visibility",
    description:
      "Connect time to clients, engagements, projects, departments, practice groups, delivery units, and cost centers with structured allocation and reporting.",
  },
  {
    icon: "🔄",
    title: "Approval Discipline",
    description:
      "Give managers and practice leaders structured workflows for reviewing submitted time, edited records, exceptions, and disputed entries with full audit history.",
  },
  {
    icon: "🧾",
    title: "Client Billing Support",
    description:
      "Generate clearer records that help support invoices, reduce billing friction, and explain how time was allocated, approved, and evidenced across every client engagement.",
  },
  {
    icon: "📋",
    title: "Audit-Ready Evidence",
    description:
      "Maintain approval trails, edit history, worker notes, manager decisions, exception records, and exportable reports for any billing review or dispute resolution requirement.",
  },
];
const workflow = [
  { icon: "🔨", title: "Work\nPerformed" },
  { icon: "⏱", title: "Time\nCaptured" },
  { icon: "📁", title: "Project\nAllocated" },
  { icon: "✅", title: "Manager\nReviewed" },
  { icon: "🧾", title: "Client\nSupported" },
  { icon: "💰", title: "Revenue\nProtected" },
];

const features1 = [
  {
    icon: "📊",
    title: "Billable Capture Visibility",
    description:
      "See whether time is being captured consistently across clients, projects, teams, and practice groups before the period closes.",
  },
  {
    icon: "📉",
    title: "Write-Off Reduction",
    description:
      "Improve the quality of time records before they become disputed, discounted, or removed from invoices during client billing review.",
  },
  {
    icon: "⚖️",
    title: "Utilization Discipline",
    description:
      "Understand how much work is billable, non-billable, administrative, idle, or misallocated across every team and role level.",
  },
  {
    icon: "🤝",
    title: "Client Billing Confidence",
    description:
      "Support invoice review with clearer records, approval history, project allocation, and evidence context that can be shared with clients.",
  },
];
const stakeholders = [
  {
    category: "Executive",
    title: "Managing Partners and CEOs",
    description:
      "See firm-wide utilization, revenue exposure, client delivery discipline, and operational performance across every practice group and team.",
  },
  {
    category: "Finance",
    title: "CFOs and Finance Teams",
    description:
      "Review payroll-ready records, billable time quality, write-off risk, project margin signals, and invoice support before every billing cycle.",
  },
  {
    category: "Operations",
    title: "COOs and Operations Leaders",
    description:
      "Monitor delivery capacity, workload balance, approval bottlenecks, staffing needs, and operational exceptions across the full delivery portfolio.",
  },
  {
    category: "Delivery",
    title: "Practice Leaders and Managers",
    description:
      "Review submitted time, approve exceptions, monitor project allocation, and improve team accountability at the engagement and client level.",
  },
  {
    category: "HR",
    title: "HR Leaders",
    description:
      "Support fair workforce oversight with transparent time policies, worker access controls, attendance visibility, and structured dispute resolution workflows.",
  },
  {
    category: "Legal & Compliance",
    title: "Legal and Compliance Teams",
    description:
      "Access audit trails, retention controls, legal hold workflows, evidence exports, and policy-aligned records for every governance and compliance requirement.",
  },
];
const governanceFeatures = [
  {
    icon: "📋",
    title: "Approval History",
    description:
      "Track who reviewed, approved, rejected, edited, escalated, or commented on time records — with full timestamps, IP details, and actor records.",
  },
  {
    icon: "✏️",
    title: "Edit and Exception Logs",
    description:
      "Maintain visibility into manual entries, late submissions, missing records, repeated edits, disputed time, and unusual patterns for every engagement.",
  },
  {
    icon: "🔗",
    title: "Evidence Context",
    description:
      "Connect time to activity signals, project records, worker notes, manager comments, and screenshot references where enabled for each billing period.",
  },
  {
    icon: "👥",
    title: "Role-Based Access",
    description:
      "Control what partners, managers, finance, HR, legal, workers, and administrators can view or manage across the full evidence record.",
  },
  {
    icon: "📤",
    title: "Exportable Reports",
    description:
      "Generate reports for payroll support, client billing review, audit preparation, internal governance, or dispute resolution with a single export action.",
  },
  {
    icon: "🔒",
    title: "Retention and Legal Hold",
    description:
      "Support record governance through configurable retention settings and legal hold controls that protect records through any review or dispute process.",
  },
];
export default function Professional() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section className="relative overflow-hidden bg-emerald-50 dark:bg-gray-950 py-10 lg:py-10">
      {/* Background Gradient */}
      <div className="absolute -top-24 -right-20 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex rounded-full border border-teal-500/20 bg-teal-500/10 px-5 py-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
                For Professional Services Firms
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-semibold leading-tight text-stone-950 dark:text-white sm:text-5xl lg:text-[52px] lg:leading-[60px]">
              Protect Billable
              <br />
              Revenue With Verified
              <br />
              Time Intelligence
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-base leading-8 text-neutral-700 dark:text-gray-300">
              ZoikoTime helps professional services firms verify billable
              time, improve utilization, reduce write-offs, support client
              billing, govern distributed teams with evidence-backed workforce
              records.
            </p>

            <p className="mt-6 text-base leading-7 text-neutral-700 dark:text-gray-300">
              In professional services, every hour affects revenue, margin,
              payroll, delivery performance, and client trust. ZoikoTime gives
              firms a stronger way to capture, review, approve, analyze, and
              evidence the time behind their work.
            </p>

            {/* Buttons */}
<div className="mt-10 flex flex-col gap-4 sm:flex-row">

  <Link
    href="/request-a-demo"
    className="
      rounded-lg
      bg-teal-600
      px-8
      py-3
      font-semibold
      text-white
      shadow-lg
      shadow-teal-600/30
      transition
      hover:bg-teal-700
      flex
      items-center
      justify-center
    "
  >
    Request a Demo
  </Link>


  <Link
    href="/start-free"
    className="
      rounded-lg
      border
      border-teal-600
      px-8
      py-3
      font-semibold
      text-teal-600
      transition
      hover:bg-teal-600
      hover:text-white
      dark:text-teal-400
      dark:border-teal-400
      flex
      items-center
      justify-center
    "
  >
    Start Free Trial
  </Link>


            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/professional/image 12.png"
                alt="ZoikoTime Dashboard"
                width={935}
                height={623}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 border-t border-teal-600/40 bg-white/50 dark:bg-gray-900/30">
          <div className="grid grid-cols-1 gap-5 py-6 sm:grid-cols-2 lg:grid-cols-5">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 lg:justify-start"
              >
                <span className="h-2 w-2 rounded-full bg-teal-500"></span>

                <span className="text-sm font-semibold text-teal-600 dark:text-teal-400">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
     <section className="border-y border-white/5 bg-slate-900 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 divide-y divide-white/5 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center px-4 py-4 text-center"
            >
              <h3 className="font-mono text-3xl font-bold text-teal-500 lg:text-3xl">
                {stat.value}
              </h3>

              <p className="mt-3 text-xs font-semibold text-white/40 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-slate-100 py-10 lg:py-10 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            The Problem
          </span>

          <h2 className="mt-4  text-3xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            When Time Records Are Weak, Revenue Becomes Exposed
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            Professional services firms rely on time data to manage billing,
            utilization, project profitability, payroll, staffing, and client
            accountability. When that data is late, incomplete, unsupported, or
            inconsistently approved, the firm loses control over revenue
            quality.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {problems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-200 border-l-4 border-l-teal-600 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl">{item.icon}</span>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
              The ZoikoTime Answer
            </span>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-4xl lg:leading-[48px]">
              Turn Time Records Into
              <br />
              Revenue-Ready Intelligence
            </h2>

            <p className="mt-8 text-base leading-8 text-slate-500 dark:text-gray-300">
              ZoikoTime connects time capture, activity signals, project
              allocation, approvals, exception review, reporting, and evidence
              history in one governed platform. It helps firms understand
              whether time is billable, approved, supported, disputed,
              misallocated, or ready for payroll and client billing.
            </p>

            <div className="mt-10 rounded-r-lg border-l-4 border-teal-600 bg-emerald-50 p-5 dark:bg-emerald-950/30">
              <p className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
                ZoikoTime helps firms treat time as a commercial asset — not
                just an administrative entry.
              </p>
            </div>
          </div>

          {/* Workflow Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_4px_20px_rgba(13,21,38,0.08)] dark:border-gray-800 dark:bg-gray-900">
            {workflowSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center justify-between gap-4 p-5 ${
                  index !== workflowSteps.length - 1
                    ? "border-b border-slate-200 dark:border-gray-800"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Number */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-teal-600/30 bg-emerald-50 text-xs font-bold text-teal-600 dark:bg-emerald-900/30">
                    {step.id}
                  </div>

                  {/* Text */}
                  <div>
                    <h3
                      className={`text-sm font-semibold ${
                        step.id === 6
                          ? "text-teal-600 dark:text-teal-400"
                          : "text-slate-900 dark:text-white"
                      }`}
                    >
                      {step.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right Side */}
                {step.badge ? (
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-600 dark:bg-emerald-900/30 dark:text-teal-400">
                    {step.badge}
                  </span>
                ) : (
                  <span className="text-lg text-teal-500">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
     <section className="bg-slate-100 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Core Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-4xl">
            Built for Billable Work, Project Delivery,
            <br className="hidden lg:block" />
            and Client Accountability
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Top Gradient Line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-600 to-teal-400" />

              {/* Icon */}
              <div className="mb-6 text-3xl">{item.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Link
  href="/request-a-demo"
  className="
    rounded-lg
    bg-teal-600
    px-10
    py-3
    font-semibold
    text-white
    shadow-lg
    shadow-teal-600/30
    transition
    duration-300
    hover:bg-teal-700
    hover:shadow-xl
    inline-flex
    items-center
    justify-center
  "
>
  Request a Demo
</Link>
        </div>
      </div>
    </section>
    <section className="bg-slate-900 py-16 lg:py-24 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-500">
            Revenue and Margin
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-white lg:text-4xl">
            Protect Margin Before Time Becomes a Write-Off
          </h2>

          <p className="mt-6 text-base leading-8 text-white/60">
            Professional services firms often lose margin through small gaps
            repeated across projects and teams: missed time, poor
            categorization, delayed submissions, unsupported client billing,
            inconsistent approvals, excessive non-billable work, and weak
            project visibility.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {workflow.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center lg:justify-between"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-2xl">{item.icon}</span>

                  <p className="mt-3 whitespace-pre-line text-xs font-semibold text-white/70">
                    {item.title}
                  </p>
                </div>

                {index !== workflow.length - 1 && (
                  <span className="hidden text-xl text-teal-500/50 lg:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {features1.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:bg-white/10"
            >
              <div className="flex gap-4">
                <div className="text-2xl">{feature.icon}</div>

                <div>
                  <h3 className="text-base font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Alert */}
        <div className="mt-12 rounded-xl border border-red-500/20 bg-red-500/10 p-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl">⚠️</span>

            <div>
              <h4 className="text-sm font-semibold text-red-400">
                Write-Off Risk Alert
              </h4>

              <p className="mt-3 text-base leading-7 text-white/70">
                23 time entries across 4 projects lack sufficient supporting
                evidence for the current billing review. Total at risk:
                <span className="font-semibold text-white"> $18,240</span>.
                Manager action required before Friday close.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Stakeholder Views
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-4xl">
            Designed for the People Who Own Time,
            <br className="hidden lg:block" />
            Revenue, and Delivery
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-500 dark:text-gray-300">
            ZoikoTime gives each stakeholder a relevant view of the same
            workforce truth — from firm-wide utilization to project delivery,
            payroll readiness, approval discipline, and client-facing evidence.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stakeholders.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
            >
              {/* Category */}
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-teal-600 dark:text-teal-400">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="bg-slate-100 py-16 lg:py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Evidence and Governance
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-4xl">
            Stronger Workforce Records for Stronger Client Confidence
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-500 dark:text-gray-300">
            When a client questions an invoice, a partner reviews project
            profitability, or finance prepares payroll, the firm needs more
            than submitted hours. It needs records that are complete,
            explainable, governed, and ready for review.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {governanceFeatures.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Icon */}
              <div className="text-3xl">{item.icon}</div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
  href="/request-a-demo"
  className="
    rounded-lg
    bg-teal-600
    px-8
    py-3
    font-semibold
    text-white
    shadow-lg
    shadow-teal-600/30
    transition
    hover:bg-teal-700
    inline-flex
    items-center
    justify-center
  "
>
  Request a Demo
</Link>
          <button
  type="button"
  onClick={() => setIsPopupOpen(true)}
  className="
    rounded-lg
    border
    border-slate-300
    bg-white
    px-8
    py-3
    font-medium
    text-slate-700
    transition-all
    duration-300
    hover:border-teal-600
    hover:text-teal-600
    dark:border-gray-700
    dark:bg-gray-800
    dark:text-white
    dark:hover:border-teal-500
    dark:hover:text-teal-400
  "
>
  Download Free
</button>
              
        </div>
      </div>
    </section>
    <section className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
            Common Questions
          </span>

          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white lg:text-4xl">
            Professional Services FAQ
          </h2>
        </div>

        {/* FAQ */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${
                index !== faqs.length - 1
                  ? "border-b border-slate-200 dark:border-gray-700"
                  : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-slate-50 dark:hover:bg-gray-900"
              >
                <span className="pr-6 text-base font-semibold text-slate-900 dark:text-white">
                  {faq.question}
                </span>

                {openIndex === index ? (
                  <Minus className="h-5 w-5 flex-shrink-0 text-teal-600" />
                ) : (
                  <Plus className="h-5 w-5 flex-shrink-0 text-teal-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-7 text-slate-500 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 to-emerald-50 py-16 lg:py-20 dark:from-gray-900 dark:to-gray-950">
      {/* Top Gradient Border */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      {/* Background Blur */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-semibold leading-tight text-slate-900 dark:text-white lg:text-4xl">
          Make Every Billable Hour More Verifiable
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-500 dark:text-gray-300">
          ZoikoTime helps professional services firms protect billable revenue,
          improve utilization, reduce write-offs, support client billing, and
          govern workforce records with verified time intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
    href="/request-a-demo"
    className="
      rounded-lg
      bg-teal-600
      px-8
      py-3
      font-semibold
      text-white
      shadow-lg
      shadow-teal-600/30
      transition-all
      duration-300
      hover:bg-teal-700
      hover:shadow-xl
      inline-flex
      items-center
      justify-center
    "
  >
    Request a Demo
  </Link>


  <Link
    href="/start-free"
    className="
      rounded-lg
      border
      border-slate-300
      bg-white
      px-8
      py-3
      font-medium
      text-slate-700
      transition-all
      duration-300
      hover:border-teal-600
      hover:text-teal-600
      dark:border-gray-700
      dark:bg-gray-800
      dark:text-white
      dark:hover:border-teal-500
      dark:hover:text-teal-400
      inline-flex
      items-center
      justify-center
    "
  >
    Start Free Trial
  </Link>

        </div>
      </div>
    </section>

     <DownloadPopup
      isOpen={isPopupOpen}
      onClose={() => setIsPopupOpen(false)}
    />

    </>
  );
}