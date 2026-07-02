"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  ShieldAlert,
  Bot,
  EyeOff,
  Users,
  Scale,
  Lock,
  CheckCircle2,
  ShieldCheck,
  Gauge,
  Check,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/* -------------------------------------------------------------------------- */

const NAV_LINKS = [
  "Product",
  "Use Cases",
  "Trust & Governance",
  "Enterprise",
  "Pricing",
  "Resources",
];

const TRUST_ITEMS = [
  "Reduces payroll leakage and policy drift",
  "Improves confidence in time and performance data",
  "Supports audit-ready documentation",
  "Designed with privacy and transparency controls",
];

const PROBLEMS: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: ShieldAlert,
    title: "Unverified Work Sessions",
    desc: "Impacts COO, CFO, Internal Audit with uncertainty in time data integrity",
  },
  {
    icon: Bot,
    title: "Activity Inflation & Automation Tools",
    desc: "CISO and Operations teams face data quality and security concerns",
  },
  {
    icon: EyeOff,
    title: "Outcomes Masked by Activity Noise",
    desc: "COO and delivery leaders lack clear visibility into actual work outcomes",
  },
  {
    icon: Users,
    title: "Conflict-of-Commitment Risk",
    desc: "Legal, HR, and CFO face exposure from undisclosed parallel employment",
  },
  {
    icon: Scale,
    title: "Wage-and-Hour Exposure",
    desc: "Legal, HR, and CFO teams navigate complex compliance requirements",
  },
  {
    icon: Lock,
    title: "Security and Access Policy Drift",
    desc: "CISO and Compliance teams struggle with distributed access governance",
  },
];

const FIT_FOR = [
  "Distributed workforces at scale",
  "Regulated and audit-heavy environments",
  "Enterprises requiring evidence-based performance governance",
  "Contractor-heavy or high payroll sensitivity operations",
];

type Module = {
  icon: LucideIcon;
  title: string;
  purpose: string;
  whatItDoes: string[];
  governance: string[];
  value: string[];
  outputs: string;
};

const MODULES: Module[] = [
  {
    icon: ShieldCheck,
    title: "Session & Identity Assurance",
    purpose: "Purpose: Confidence, not control.",
    whatItDoes: [
      "Session integrity signals (device trust, continuity, policy alignment)",
      "Risk-based re-verification triggers by role and risk profile",
      "Account-sharing indicators and unusual session transitions surfaced for review",
    ],
    governance: [
      "Verification frequency policies set by role, jurisdiction, and risk level",
      "Employee visibility into which signals are used (Transparency Center)",
      "Immutable admin audit logs for every verification event and access action",
    ],
    value: [
      "Higher confidence in recorded work sessions and time data",
      "Reduced proxy attendance and credential misuse risk",
      "Stronger defensibility for investigations and disputes",
    ],
    outputs:
      "Session assurance status and confidence indicators • Exportable event log and evidence pack (role-restricted)",
  },
  {
    icon: Gauge,
    title: "Performance Intelligence",
    purpose:
      "Purpose: Improve delivery outcomes and workforce effectiveness using explainable insights.",
    whatItDoes: [
      "Time-to-outcome mapping by project, workstream, role, and tool category",
      "Workload distribution signals (overload, fragmentation, bottlenecks)",
      "Focus vs. context switching analysis with trend comparisons over time",
    ],
    governance: [
      "Role-based views (Executive vs manager vs employee)",
      "Aggregation and anonymisation options where required",
      "Purpose limitation settings (productivity vs compliance vs security)",
    ],
    value: [
      "Better delivery planning and capacity management",
      "Fairer, evidence-based performance conversations",
      "Improved efficiency without culture damage",
    ],
    outputs:
      "Executive dashboards and cadence reporting exports • Team heatmaps and operational insight summaries",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Capture",
    desc: "Employee-visible time capture across devices with policy guidance and transparent prompts",
  },
  {
    n: "02",
    title: "Assure",
    desc: "Role-aware assurance signals, risk-based re-verification, and exception-based policy checks (not continuous surveillance)",
  },
  {
    n: "03",
    title: "Understand",
    desc: "Explainable insights linking time, tools, and outcomes with team-level visibility and privacy controls",
  },
  {
    n: "04",
    title: "Document",
    desc: "Audit-ready exports, evidence packs, and immutable logs of access, review, and decisions",
  },
];

const TIERS = [
  {
    name: "Insights",
    highlight: false,
    desc: "Performance intelligence and reporting with minimal assurance signals",
    features: [
      "Basic time tracking",
      "Performance dashboards",
      "Standard reporting",
      "Essential integrations",
    ],
    cta: "Request Proposal",
  },
  {
    name: "Assurance",
    highlight: true,
    desc: "Integrity scoring, policy context, verification controls",
    features: [
      "Everything in Insights",
      "Session assurance",
      "Policy compliance tracking",
      "Anomaly detection",
      "Manager review workflows",
    ],
    cta: "Request Proposal",
  },
  {
    name: "Regulated Enterprise",
    highlight: false,
    desc: "Advanced governance, audit packs, retention controls, deployment support",
    features: [
      "Everything in Assurance",
      "Evidence capture (optional)",
      "Audit trail packages",
      "Jurisdiction templates",
      "Dedicated deployment support",
      "Custom SLAs",
    ],
    cta: "Request Proposal",
  },
];

const TESTIMONIALS = [
  {
    quote: "ZoikoTime has completely transformed the way we manage time and productivity.",
    body: "With its seamless time tracking and real-time insights, we've seen a significant improvement in both efficiency and project management.",
    name: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
  },
  {
    quote: "Hoory has completely transformed the way we manage time and productivity.",
    body: "With its seamless time tracking and real-time insights, we've seen a significant improvement in both efficiency and project management.",
    name: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
  },
  {
    quote: "Zo has completely transformed the way we manage time and productivity.",
    body: "With its seamless time tracking and real-time insights, we've seen a significant improvement in both efficiency and project management.",
    name: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
  },
];

const FOOTER_COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Platform",
    links: [
      "Workforce Intelligence",
      "Time & Activity Verification",
      "Session & Identity Assurance",
      "Evidence Capture",
      "Screenshots & Redaction Controls",
      "Policy & Location Context",
      "Integrity & Anomaly Detection",
      "Reporting & Workforce Analytics",
      "Audit & HR Enablement",
      "ZoikoTime Mobile App",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Distributed Workforces",
      "Client-Billable Teams",
      "Contractor & Gig Teams",
      "Regulated Industries",
      "Professional Services Firms",
      "Finance & Compliance Teams",
      "HR, Legal & Operations Teams",
      "Payroll & Timesheet Integrity",
      "Enterprise Workforce Governance",
      "Workforce Assurance Programs",
    ],
  },
  {
    title: "Trust & Governance",
    links: [
      "Security Overview",
      "Privacy Controls",
      "Transparency Center",
      "Worker Transparency Notice",
      "AI & Automated Insights Policy",
      "Data Retention & Legal Hold",
      "Service Level Agreement",
      "Audit-Grade Evidence",
      "Incident & Availability Status",
      "Responsible AI",
    ],
  },
  {
    title: "Resources",
    links: [
      "Case Studies",
      "Implementation Guide",
      "Product Documentation",
      "Admin Guide",
      "Worker Guide",
      "Help Center",
      "FAQs",
      "Blog & Insights",
      "Request a Demo",
      "Contact Sales",
    ],
  },
  {
    title: "Company",
    links: [
      "About ZoikoTime",
      "About Zoiko Tech Inc.",
      "Leadership & Governance",
      "Enterprise Readiness",
      "Partners",
      "Careers",
      "Press & Media",
      "Contact",
    ],
  },
  {
    title: "Legal",
    links: [
      "Terms of Service",
      "Subscription Terms",
      "Data Processing Addendum",
      "Privacy Notice",
      "Cookie Notice",
      "Acceptable Use Policy",
      "Subprocessor List",
      "Security Addendum",
      "Service Level Agreement",
      "Data Retention, Deletion & Legal Hold Policy",
    ],
  },
];

const BADGES = ["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA/CPRA", "Enterprise SLA"];

const BOTTOM_LINKS = [
  "Privacy Notice",
  "Terms of Service",
  "Data Processing Addendum",
  "Cookie Notice",
  "Service Level Agreement",
  "Subprocessors",
  "Accessibility",
];

/* -------------------------------------------------------------------------- */
/*  Small shared bits                                                        */
/* -------------------------------------------------------------------------- */

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base text-gray-600">
          <span className="mt-1 text-emerald-500">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function TimeHome() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = TESTIMONIALS[activeTestimonial];

  return (
    <main className="font-body">
      

      {/* ---------------------------------------------------------------- */}
      {/* Hero                                                             */}
      {/* ---------------------------------------------------------------- */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -left-72 top-10 h-72 w-[1600px] rounded-full bg-sky-600/40 blur-[150px]" />
        <div className="pointer-events-none absolute -left-72 top-72 h-72 w-[1600px] rounded-full bg-green-400/30 blur-[200px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 rounded-full bg-white blur-[150px]" />

        <div className="relative mx-auto max-w-5xl px-6 pb-28 pt-20 text-center lg:pt-28">
          <h1 className="font-display text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-5xl">
            Time Intelligence for Modern Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light text-white/95 sm:text-2xl">
            Not tracking. Not surveillance. Intelligence — governed, ethical, and explainable.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-7 text-white/90">
            ZoikoTime transforms how individuals, teams, and enterprises understand time — using
            AI-powered insight, human-in-command oversight, and enterprise-grade governance to
            improve productivity without compromising trust.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-gradient-to-b from-sky-300 via-sky-300 to-blue-300 px-8 py-4 text-base font-semibold text-cyan-900 shadow-[0px_0px_0px_1px_rgba(129,213,251,1)]"
            >
              Request a Demo
            </a>
            <a
              href="#"
              className="rounded-full border border-white px-8 py-4 text-base font-semibold text-white shadow-[0px_0px_0px_1px_rgba(129,213,251,1)]"
            >
              Download Free
            </a>
          </div>
        </div>

        <div className="relative -mt-8 h-[560px] w-full bg-gradient-to-b from-sky-700 via-sky-600 to-emerald-500 sm:h-[620px]">
          <div className="absolute left-[6%] top-[18%] hidden w-64 -rotate-[4deg] rounded-2xl bg-white/70 p-5 shadow-xl backdrop-blur md:block">
            <p className="text-center text-sm text-neutral-600">Mon, Jan 6</p>
            <p className="text-center text-3xl font-semibold text-neutral-800">00:25:30</p>
            <div className="mx-auto mt-3 flex w-fit items-center gap-2 rounded-full bg-neutral-50 px-3 py-1.5 outline outline-1 outline-neutral-400/20">
              <span className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-xs font-semibold text-neutral-800">Project - Axel</span>
            </div>
            <Image
              src="/images/Frame 17.png"
              alt="Task screenshot preview"
              width={247}
              height={164}
              className="mt-4 w-full rounded-md"
            />
          </div>

          <div className="absolute right-[4%] top-[24%] hidden w-80 rotate-[4deg] rounded-2xl bg-white/60 p-6 shadow-xl backdrop-blur md:block">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-neutral-600">Weekly Total</p>
                <p className="text-3xl font-semibold text-neutral-800">00:48:20</p>
              </div>
              <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-2 text-green-800 outline outline-1 outline-green-200/20">
                <span className="text-sm font-semibold">+2.5%</span>
              </div>
            </div>
            <div className="mt-4 flex items-end justify-between gap-1.5">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="relative h-28 w-6 overflow-hidden rounded-md bg-neutral-100">
                    <div
                      className="absolute bottom-0 w-full rounded-md bg-green-400"
                      style={{ height: `${[95, 65, 82, 30, 68, 78, 55][i]}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-neutral-500">{d}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-1/2 top-[30%] w-[92%] max-w-xl -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-2xl sm:top-[26%]">
            <div className="flex items-center justify-between px-6 pb-3 pt-6">
              <div>
                <p className="text-neutral-600">Week Total</p>
                <p className="text-2xl font-semibold text-neutral-800">00:48:20</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-neutral-50 outline outline-1 outline-neutral-400/20">
                  🔔
                </div>
                <Image
                  src="/images/Frame 17.png"
                  alt="User avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="px-6 pb-3 pt-1.5">
              <div className="flex items-center justify-between rounded-full bg-neutral-50 py-1.5 pl-4 pr-1.5 outline outline-1 outline-neutral-400/20">
                <span className="flex-1 text-sm text-neutral-400">What will you be working on?</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-black">00:00:00</span>
                  <button className="rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-white shadow-[0px_0px_0px_1px_rgba(129,213,251,1)]">
                    Start
                  </button>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-3">
              <div className="overflow-hidden rounded-2xl outline outline-1 outline-neutral-400/20">
                <div className="flex items-center justify-between bg-neutral-50 p-4 text-sm">
                  <span className="font-medium text-neutral-500">Today</span>
                  <span className="text-neutral-500">
                    Total: <span className="font-semibold text-neutral-800">35:00</span>
                  </span>
                </div>

                {[
                  { name: "Competitor Analysis", time: "00:15:00", project: "Project - Axel", dot: "bg-purple-500", paid: true },
                  { name: "Moodboarding", time: "00:20:00", project: "Project - Danzel", dot: "bg-orange-400", paid: false },
                ].map((task, i) => (
                  <div key={task.name} className={`flex flex-col gap-2 p-4 ${i > 0 ? "border-t border-neutral-400/20" : ""}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-neutral-500">{task.name}</span>
                      <div className="flex items-center gap-3">
                        {task.paid && (
                          <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-800 outline outline-1 outline-green-200/20">
                            Paid
                          </span>
                        )}
                        <span className="text-sm font-semibold text-black">{task.time}</span>
                      </div>
                    </div>
                    <span className="flex w-fit items-center gap-2 rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-800 outline outline-1 outline-neutral-400/20">
                      <span className={`h-2 w-2 rounded-full ${task.dot}`} />
                      {task.project}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Trust bar                                                        */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-lg font-semibold text-neutral-500">
            Driving Productivity for 1,000+ Companies
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
            {TRUST_ITEMS.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="text-base font-semibold text-gray-600">{item}</span>
                {i < TRUST_ITEMS.length - 1 && <span className="text-emerald-500">|</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Problem grid                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl font-medium text-neutral-800 sm:text-4xl">
            Remote Work Increased Flexibility and Operational Risk
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-neutral-600">
            As work became distributed, many organisations lost consistent visibility into how
            time, access, and outcomes align with policy and expectations — increasing risk
            across payroll, compliance, security, and performance management.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROBLEMS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-8 transition hover:shadow-md">
                <div className="grid h-16 w-16 place-items-center rounded-[10px] bg-green-100">
                  <Icon className="h-8 w-8 text-emerald-500" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-base text-gray-600">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border-l-4 border-sky-300 bg-slate-50 p-6">
            <p className="text-lg font-medium text-gray-800">
              ZoikoTime addresses these risks without defaulting to invasive monitoring, using
              policy-driven assurance and explainable intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Solution intro                                                   */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-medium leading-tight text-neutral-800">
              From Time Tracking to Governed Workforce Intelligence
            </h2>
            <p className="mt-6 text-lg leading-7 text-neutral-600">
              ZoikoTime combines session assurance, performance intelligence, and audit-ready
              documentation into a single system of record enabling organisations to manage
              distributed work with confidence, fairness, and defensibility.
            </p>

            <ul className="mt-10 space-y-5">
              {FIT_FOR.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />
                  <span className="text-lg font-medium text-gray-900">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="mt-10 inline-block rounded-full bg-sky-900 px-8 py-3 text-base font-semibold text-white shadow-[0px_0px_0px_1px_rgba(129,213,251,1)]"
            >
              Read More
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-emerald-500 bg-white p-8">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-teal-100 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-teal-100 blur-3xl" />
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-3xl bg-white shadow-xl">
              <div className="flex flex-col items-center gap-3 px-8 pb-2 pt-8">
                <p className="text-2xl text-neutral-600">Mon, Jan 6</p>
                <p className="text-5xl font-semibold text-neutral-800">00:25:30</p>
                <div className="flex items-center gap-3 rounded-full bg-neutral-50 px-5 py-3 outline outline-2 outline-neutral-400/20">
                  <span className="h-3.5 w-3.5 rounded-full bg-emerald-500" />
                  <span className="text-lg font-semibold text-neutral-800">Project - Axel</span>
                </div>
              </div>
              <div className="p-5">
                <Image
                  src="/images/Frame 17.png"
                  alt="Session screenshot"
                  width={397}
                  height={246}
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Enterprise modules                                               */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-4xl font-bold text-neutral-800">
            Enterprise Modules
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
            Comprehensive capabilities designed for accountability, performance, and trust — in
            equal measure.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {MODULES.map(({ icon: Icon, title, purpose, whatItDoes, governance, value, outputs }) => (
              <div key={title} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 sm:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h3>
                    <p className="mt-2 text-base font-semibold text-emerald-500">{purpose}</p>
                  </div>
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[30px] bg-emerald-500 outline outline-1 outline-neutral-300">
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                <div className="mt-8 space-y-8">
                  <div>
                    <h4 className="text-base font-bold text-gray-900">What it does:</h4>
                    <div className="mt-3">
                      <BulletList items={whatItDoes} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Governance controls:</h4>
                    <div className="mt-3">
                      <BulletList items={governance} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900">Enterprise value:</h4>
                    <div className="mt-3">
                      <BulletList items={value} />
                    </div>
                  </div>
                </div>

                <div className="mt-8 rounded-lg border-l-[3px] border-emerald-500 bg-gray-50 p-6">
                  <h4 className="text-base font-bold text-gray-900">Outputs:</h4>
                  <p className="mt-3 text-base text-gray-700">{outputs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* How it works                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-gradient-to-b from-slate-50 to-sky-50 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Balanced Assurance Lifecycle: Capture → Assure → Understand → Document
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-xl border-2 border-gray-200 bg-white p-8 text-left">
                <div className="grid h-14 w-14 place-items-center rounded-3xl bg-emerald-500 text-xl font-bold text-white">
                  {step.n}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-4 text-base leading-6 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="mt-14 inline-block rounded-full bg-sky-900 px-8 py-3 text-base font-semibold text-white shadow-[0px_0px_0px_1px_rgba(129,213,251,1)]"
          >
            View Assurance Architecture
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Feature spotlight                                                */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-10">
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-100 to-white blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-teal-200 blur-3xl" />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between rounded-full bg-white p-3 pl-6 shadow-lg outline outline-1 outline-neutral-400/20">
                <span className="text-lg font-medium text-neutral-800">Project X</span>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-black">00:00:01</span>
                  <button className="rounded-full bg-red-600 px-6 py-3 text-lg font-semibold text-white shadow-[0px_0px_0px_1px_rgba(233,101,101,1)]">
                    Stop
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-full bg-white p-3 pl-6 shadow-lg outline outline-1 outline-neutral-400/20">
                <span className="text-lg text-neutral-400">Project X</span>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-black">00:00:00</span>
                  <button className="rounded-full bg-emerald-500 px-6 py-3 text-lg font-semibold text-white shadow-[0px_0px_0px_1px_rgba(129,213,251,1)]">
                    Start
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-medium leading-tight text-neutral-800 sm:text-5xl">
              Seamlessly Pause and Resume Your Work with an Intuitive Button.
            </h2>
            <p className="mt-6 text-lg leading-7 text-neutral-600">
              Easily track your time as it happens, with automatic live screenshots for complete
              visibility and transparency.
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded-full bg-sky-900 px-8 py-3 text-base font-semibold text-white shadow-[0px_0px_0px_1px_rgba(129,213,251,1)]"
            >
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Pricing                                                          */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium text-neutral-800 sm:text-5xl">
            Balanced Pricing & Packaging
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Clear tiers with support for enterprise customisation.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={
                  tier.highlight
                    ? "flex flex-col rounded-3xl bg-emerald-500 p-8 text-left text-white shadow-[0px_0px_0px_1px_rgba(129,213,251,1)] outline outline-1 outline-neutral-400/20"
                    : "flex flex-col rounded-3xl border border-neutral-300 bg-gradient-to-b from-white to-sky-50 p-8 text-left"
                }
              >
                <h3 className={`text-3xl font-bold ${tier.highlight ? "text-white" : "text-gray-900"}`}>
                  {tier.name}
                </h3>
                <p className={`mt-3 text-base ${tier.highlight ? "text-white/90" : "text-gray-600"}`}>
                  {tier.desc}
                </p>

                <ul className="mt-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check className={`mt-0.5 h-5 w-5 shrink-0 ${tier.highlight ? "text-white" : "text-emerald-500"}`} />
                      <span className={`text-base ${tier.highlight ? "text-white" : "text-gray-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={
                    tier.highlight
                      ? "mt-10 block rounded-lg bg-white py-3 text-center text-base font-semibold text-emerald-500 shadow-sm"
                      : "mt-10 block rounded-lg border border-gray-300 bg-sky-900 py-3 text-center text-base font-semibold text-slate-50"
                  }
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Testimonials                                                     */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl font-medium text-neutral-800 sm:text-5xl">
            Trusted by Teams, Loved by Users
          </h2>
          <p className="mt-4 text-lg text-neutral-600">Teams trust us; users rave about us</p>

          <div className="mt-14 overflow-hidden rounded-3xl border border-neutral-400/20 bg-white text-left shadow-lg">
            <div className="space-y-3 p-10">
              <p className="text-2xl font-semibold text-neutral-800">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-lg leading-7 text-neutral-600">{t.body}</p>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-400/20 bg-neutral-50 p-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/images/Frame 17.png"
                  alt={t.name}
                  width={52}
                  height={52}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-neutral-800">{t.name}</p>
                  <p className="text-sm text-neutral-600">{t.role}</p>
                </div>
              </div>
              <p className="text-xl font-extrabold uppercase text-neutral-800">{t.company}</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setActiveTestimonial(i)}
                className={`h-1.5 w-16 rounded-full transition ${i === activeTestimonial ? "bg-neutral-800" : "bg-zinc-100"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* CTA banner                                                       */}
      {/* ---------------------------------------------------------------- */}
      <section className="bg-white px-6 pb-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-emerald-500 px-6 py-20 text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Take Control of
            <br />
            Your Time with Zoiko Time
          </h2>
          <p className="mt-4 text-lg text-sky-50">
            Track every minute and boost your productivity effortlessly.
          </p>
          <a href="#" className="mt-8 inline-block rounded-full bg-white px-9 py-3 text-base font-semibold text-neutral-800">
            Contact Us
          </a>
        </div>
      </section>

      {/* ---------------------------------------------------------------- */}
      {/* Footer                                                           */}
      {/* ---------------------------------------------------------------- */}
      <footer className="relative overflow-hidden bg-slate-950 pt-16 text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0" />

        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 border-y border-zinc-300/40 py-4">
            {BADGES.map((b, i) => (
              <span
                key={b}
                className={`rounded-[5px] px-3 py-1 text-[10px] font-bold uppercase tracking-wide outline outline-1 ${
                  i === 0 ? "bg-white/5 text-teal-500 outline-teal-500/20" : "bg-white/5 text-white/60 outline-white/10"
                }`}
              >
                {b}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-3 lg:grid-cols-6">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="border-b border-white/5 pb-3 text-sm font-extrabold uppercase tracking-wider">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs font-medium leading-5 text-white/40 hover:text-white/70">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 border-t border-white/10 py-6 text-xs text-white/60">
            {BOTTOM_LINKS.map((link, i) => (
              <span key={link} className="flex items-center gap-2">
                <a href="#" className="hover:text-white">
                  {link}
                </a>
                {i < BOTTOM_LINKS.length - 1 && <span className="h-1 w-1 rounded-xs bg-white/10" />}
              </span>
            ))}
          </div>

          <div className="mx-auto max-w-5xl pb-16 pt-4 text-center text-xs leading-5 text-white/50">
            <p>
              <span className="font-semibold text-white">United States</span> 1401 21st Street,
              Suite R Sacramento, CA 95811, USA &nbsp;|&nbsp;{" "}
              <span className="font-semibold text-white">Europe</span> 67-69 Great Portland
              Street, 5th Floor London W1W 5PF, United Kingdom
            </p>
            <p className="mt-4">
              <span className="font-semibold text-white">ZoikoTime</span> — Workforce Assurance
              &amp; Performance Intelligence. Operated by{" "}
              <span className="font-semibold text-white">Zoiko Tech Inc.</span>, a subsidiary of{" "}
              <span className="font-semibold text-white">Zoiko Group Inc.</span> © 2026 Zoiko
              Group Inc. All rights reserved. ZoikoTime provides workforce intelligence,
              verification, governance, reporting, and performance-insight tools. Customers are
              responsible for configuring and using ZoikoTime in accordance with applicable
              employment, privacy, workplace monitoring, data protection, consultation, and
              worker-notification laws. ZoikoTime is not a substitute for legal, HR, or compliance
              advice. Terms · Privacy · Cookies
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}