"use client";

import { useState } from "react";
import {
  ShieldCheck,
  ActivitySquare,
  Eye,
  Users,
  Scale,
  Lock,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Pause,
  Star,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * Data
 * ---------------------------------------------------------------------- */

const NAV_LINKS = [
  "Product",
  "Use Cases",
  "Trust & Governance",
  "Enterprise",
  "Pricing",
  "Resources",
];

const STAT_STRIP = [
  "Reduces payroll leakage and policy drift",
  "Improves confidence in time and performance data",
  "Supports audit-ready documentation",
  "Designed with privacy and transparency controls",
];

const PROBLEM_CARDS = [
  {
    icon: "/home/icon-park-solid_audit.png",
    title: "Unverified Work Sessions",
    description:
      "Impacts COO, CFO, Internal Audit with uncertainty in time data integrity",
  },
  {
    icon: "/home/material-symbols_arrow-selector-tool-rounded.png",
    title: "Activity Inflation & Automation Tools",
    description:
      "CISO and Operations teams face data quality and security concerns",
  },
  {
    icon:"/home/solar_delivery-bold.png",
    title: "Outcomes Masked by Activity Noise",
    description:
      "COO and delivery leaders lack clear visibility into actual work outcomes",
  },
  {
    icon:"/home/streamline-ultimate_office-employee-bold.png",
    title: "Conflict-of-Commitment Risk",
    description:
      "Legal, HR, and CFO face exposure from undisclosed parallel employment",
  },
  {
    icon: "/home/mingcute_document-fill.png",
    title: "Wage-and-Hour Exposure",
    description:
      "Legal, HR, and CFO teams navigate complex compliance requirements",
  },
  {
    icon: "/home/line-md_security-filled.png",
    title: "Security and Access Policy Drift",
    description:
      "CISO and Compliance teams struggle with distributed access governance",
  },
];

const USE_CASES = [
  "Distributed workforces at scale",
  "Regulated and audit-heavy environments",
  "Enterprises requiring evidence-based performance governance",
  "Contractor-heavy or high payroll sensitivity operations",
];

const MODULES = [
  {
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
      "Session assurance status and confidence indicators · Exportable event log and evidence pack (role-restricted)",
  },
  {
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
      "Executive dashboards and cadence reporting exports · Team heatmaps and operational insight summaries",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Capture",
    description:
      "Employee-visible time capture across devices with policy guidance and transparent prompts",
  },
  {
    number: "02",
    title: "Assure",
    description:
      "Role-aware assurance signals, risk-based re-verification, and exception-based policy checks (not continuous surveillance)",
  },
  {
    number: "03",
    title: "Understand",
    description:
      "Explainable insights linking time, tools, and outcomes with team-level visibility and privacy controls",
  },
  {
    number: "04",
    title: "Document",
    description:
      "Audit-ready exports, evidence packs, and immutable logs of access, review, and decisions",
  },
];

const PRICING_TIERS = [
  {
    name: "Insights",
    description:
      "Performance intelligence and reporting with minimal assurance signals",
    features: [
      "Basic time tracking",
      "Performance dashboards",
      "Standard reporting",
      "Essential integrations",
    ],
    highlighted: false,
  },
  {
    name: "Assurance",
    description: "Integrity scoring, policy context, verification controls",
    features: [
      "Everything in Insights",
      "Session assurance",
      "Policy compliance tracking",
      "Anomaly detection",
      "Manager review workflows",
    ],
    highlighted: true,
  },
  {
    name: "Regulated Enterprise",
    description:
      "Advanced governance, audit packs, retention controls, deployment support",
    features: [
      "Everything in Assurance",
      "Evidence capture (optional)",
      "Audit trail packages",
      "Jurisdiction templates",
      "Dedicated deployment support",
      "Custom SLAs",
    ],
    highlighted: false,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Zoiko Time has completely transformed the way we manage time and productivity.",
    body: "With its seamless time tracking and real-time insights, we've seen a significant improvement in both efficiency and project management.",
    name: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
  },
  {
    quote:
      "Hoory has completely transformed the way we manage time and productivity.",
    body: "With its seamless time tracking and real-time insights, we've seen a significant improvement in both efficiency and project management.",
    name: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
  },
  {
    quote:
      "Zo has completely transformed the way we manage time and productivity.",
    body: "With its seamless time tracking and real-time insights, we've seen a significant improvement in both efficiency and project management.",
    name: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
  },
];

const FOOTER_COLUMNS = [
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

const COMPLIANCE_BADGES = ["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA/CPRA", "Enterprise SLA"];

/* -------------------------------------------------------------------------
 * Small reusable bits
 * ---------------------------------------------------------------------- */

/**
 * IconSlot — a labeled placeholder for a Figma-exported SVG icon.
 * Drop your real <svg>/<Image> in place of the children comment once
 * the assets are attached; the dashed box just marks where it goes.
 */
function IconSlot({
  label,
  size = 40,
  className = "",
  tone = "light",
}: {
  label: string;
  size?: number;
  className?: string;
  tone?: "light" | "dark";
}) {
  const toneClasses =
    tone === "light"
      ? "border-white/60 bg-white/10 text-white/70"
      : "border-neutral-300 bg-neutral-50 text-neutral-400";
  return (
    <div
      title={`Icon slot: ${label}`}
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-xl border-2 border-dashed text-center text-[8px] font-medium leading-tight ${toneClasses} ${className}`}
    >
      {/* TODO: replace with the real SVG for "{label}" */}
      {label}
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <IconSlot label="logo" size={36} tone={light ? "light" : "dark"} className="rounded-lg" />
      <span
        className={`text-lg font-bold tracking-tight ${
          light ? "text-white" : "text-sky-900"
        }`}
      >
        Zoiko<span className="text-emerald-500">Time</span>
      </span>
    </div>
  );
}

function MiniCalendarCard() {
  return (
    <div className="w-full rounded-2xl bg-white p-5 shadow-xl shadow-black/10">
      <div className="text-center">
        <p className="text-base text-neutral-600">Mon, Jan 6</p>
        <p className="text-4xl font-semibold text-neutral-800">00:25:30</p>
      </div>
      <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full bg-neutral-50 px-4 py-1.5 ring-1 ring-neutral-200">
        <span className="h-2 w-2 rounded-full bg-purple-500" />
        <span className="text-xs font-semibold text-neutral-800">Project - Axel</span>
      </div>
      <div className="mt-4 flex h-25 items-center justify-center rounded-lg text-xs font-medium text-neutral-400">
        <img src="/home/Image.png" alt="image"
        
        />
        </div>
    </div>
  );
}

function TrackerCard() {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white shadow-xl shadow-black/10">
      <div className="flex items-center justify-between px-6 pt-6 pb-3">
        <div>
          <p className="text-sm text-neutral-500">Week Total</p>
          <p className="text-2xl font-semibold text-neutral-800">00:48:20</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/home/Bell.png"  alt="icon"  className="rounded-full h-4 w-4 " />
          <img src="/home/Avatar.png" alt="icon"  className="rounded-full h-7 w-7" />
        </div>
      </div>
      <div className="px-2 pb-3 pt-1">
  <div className="inline-flex w-full self-stretch items-center justify-between rounded-full bg-neutral-50 py-1.5 pl-4 pr-1.5 outline outline-1 outline-offset-[-1px] outline-neutral-400/20 overflow-hidden">
    {/* Input Placeholder */}
    <span className="flex-1 text-left text-base font-normal  leading-6 text-neutral-400">
      What will you be working on?
    </span>
    
    {/* Action Elements Wrapper */}
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {/* Tag Icon */}
        <img src="/home/Tag.png" className="rounded-md h-3 w-3" />
        
        {/* Divider */}
        <div className="h-4 w-[1px] bg-neutral-400/20" />
        
        {/* Rate/Currency Icon */}
        <img src="/home/CurrencyDollar.png" className="rounded-md h-3 w-3" />
        
        {/* Divider */}
        <div className="h-4 w-[1px] bg-neutral-400/20" />
        
        {/* Timer Display */}
        <span className="text-base font-semibold font-['Manrope'] leading-6 text-black">
          00:00:00
        </span>
      </div>

      {/* Styled Start Button */}
      <button className="h-10 px-6 py-3 bg-[#44B97A] rounded-full flex justify-center items-center gap-2 overflow-hidden shadow-[0px_0px_0px_1px_rgba(129,213,251,1.00),_inset_0px_0.5px_0.5px_0px_rgba(69,144,178,0.25),_inset_0px_-6px_12px_0px_rgba(255,255,255,0.10)] text-center text-white text-base font-semibold font-['Manrope'] leading-6 [text-shadow:_1px_1px_1px_rgb(69_144_178_/_0.10)] hover:opacity-90 transition-opacity">
        Start
      </button>
    </div>
  </div>
</div>
      <div className="px-6 pb-6">
        <div className="overflow-hidden rounded-2xl ring-1 ring-neutral-200">
          <div className="flex items-center justify-between bg-neutral-50 p-3 text-sm">
            <span className="font-medium text-neutral-500">Today</span>
            <span className="text-neutral-500">
              Total: <span className="font-semibold text-neutral-800">35:00</span>
            </span>
          </div>
          <div className="flex flex-col gap-4 p-4">
            {[
              { name: "Competitor Analysis", tag: "Project - Axel", dot: "bg-purple-500", time: "00:15:00", paid: true },
              { name: "Moodboarding", tag: "Project - Danzel", dot: "bg-orange-400", time: "00:20:00", paid: false },
            ].map((row) => (
              <div key={row.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-600">{row.name}</span>
                  <div className="flex items-center gap-2">
                    {row.paid && (
                      <span className="rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-800 ring-1 ring-green-200">
                        Paid
                      </span>
                    )}
                    <img src="/home/CurrencyDollar.png" alt="icon" className="w-4 h-4 "/>
                    <span className="text-sm font-semibold text-black">{row.time}</span>
                    <img src="/home/Play.png"  className="rounded-md" />
                    <img src="/home/DotsThreeOutline.png"  className="rounded-md " />
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-neutral-50 px-3 py-1 text-xs font-semibold text-neutral-800 ring-1 ring-neutral-200">
                  <span className={`h-2 w-2 rounded-full ${row.dot}`} />
                  {row.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WeeklyChartCard() {
  const days = [
    { d: "S", h: 70 },
    { d: "M", h: 50 },
    { d: "T", h: 75 },
    { d: "W", h: 25 },
    { d: "T", h: 55 },
    { d: "F", h: 65 },
    { d: "S", h: 45 },
  ];
  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-xl shadow-black/10">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-500">Weekly Total</p>
          <p className="text-2xl font-semibold text-neutral-800">00:48:20</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-2 text-sm font-semibold text-green-800 ring-1 ring-green-200">
          <ArrowUpRight className="h-4 w-4" /> +2.5%
        </span>
      </div>
      <div className="flex items-end justify-between gap-2">
        {days.map((day, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="relative h-28 w-full overflow-hidden rounded-md bg-neutral-100">
              <div
                className="absolute bottom-0 w-full rounded-md bg-green-400"
                style={{ height: `${day.h}%` }}
              />
            </div>
            <span className="text-sm font-medium text-neutral-500">{day.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModuleCard({ mod }: { mod: (typeof MODULES)[number] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">{mod.title}</h3>
          <p className="mt-2 text-base font-semibold text-emerald-500">{mod.purpose}</p>
        </div>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500 ring-1 ring-neutral-300">
          <ShieldCheck className="h-7 w-7 text-white" />
        </div>
      </div>

      <ModuleList heading="What it does:" items={mod.whatItDoes} />
      <ModuleList heading="Governance controls:" items={mod.governance} />
      <ModuleList heading="Enterprise value:" items={mod.value} />

      <div className="mt-6 rounded-lg border-l-4 border-emerald-500 bg-gray-50 p-6">
        <p className="text-base font-bold text-gray-900">Outputs:</p>
        <p className="mt-2 text-base text-gray-700">{mod.outputs}</p>
      </div>
    </div>
  );
}

function ModuleList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-base font-bold text-gray-900">{heading}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base text-gray-600">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------
 * Page
 * ---------------------------------------------------------------------- */

export default function Hero() {
  const [showDownload, setShowDownload] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <main className="bg-white">
    

      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-500 via-emerald-400 to-white">
        {/* Soft highlight + curved horizon line, matching the Figma gradient */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[1400px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          
        </div>

        {/* Headline */}
        <div className="relative mx-auto max-w-4xl px-6 pt-14 text-center sm:pt-20">
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Time Intelligence for Modern Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light text-white/90">
            Not tracking. Not surveillance. Intelligence — governed, ethical, and explainable.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium text-white/80">
            ZoikoTime transforms how individuals, teams, and enterprises understand time — using
            AI-powered insight, human-in-command oversight, and enterprise-grade governance to
            improve productivity without compromising trust.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-cyan-900 shadow-lg transition hover:bg-sky-50">
              Request a Demo
            </button>
            <button
              onClick={() => setShowDownload(true)}
              className="rounded-full border border-white px-8 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              Download Free
            </button>
          </div>
        </div>

        {/* Floating card cluster — positioned to match the Figma hero 1:1 (as a
            percentage of a 1440×430 board), left/center/right cards overlapping
            the same way, with the four accent-icon gaps perched on their corners
            for the SVGs you'll drop in. */}
        <div className="relative mx-auto mt-14 hidden aspect-[1440/430] w-full max-w-6xl sm:mt-16 lg:block">
          {/* left calendar card */}
          <div
            className="absolute w-[18%] -rotate-6"
            style={{ left: "11.8%", top: "11.5%" }}
          >
            <MiniCalendarCard />
            <img
              src="/home/SVG.png"
             alt="icon"
              className="absolute -left-3 -top-3 rotate-6  w-8 h-8"
            />
          </div>

          {/* center tracker card */}
          <div className="absolute z-10 w-[42%]" style={{ left: "29%", top: "2.5%" }}>
            <TrackerCard />
            <img
              src="/home/SVG (1).png"
             alt="icon"
              className="absolute -left-4 -top-3 -rotate-6"
            />
            <img
              src="/home/SVG (2).png"
             alt="icon"
              className="absolute -right-4 -top-3 rotate-12"
            />
          </div>

          {/* right weekly chart card */}
          <div
            className="absolute w-[22%] rotate-6"
            style={{ left: "66%", top: "12.5%" }}
          >
            <WeeklyChartCard />
            
          </div>
        </div>

        {/* Simplified single-card view on small screens */}
        <div className="relative mx-auto mt-12 w-full max-w-sm px-6 pb-16 lg:hidden">
          <TrackerCard />
        </div>

        {/* Fade into the white section below, as in the Figma comp */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-b from-transparent to-white lg:block" />
        <div className="h-10 lg:h-0" />
      </section>

      {/* --------------------------- Logo / stats -------------------------- */}
      <section className="border-b border-neutral-100 py-14">
        <p className="text-center text-lg font-semibold text-neutral-500">
          Driving Productivity for 1,000+ Companies
        </p>
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-8">
          {STAT_STRIP.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-base font-semibold text-gray-600">{item}</span>
              {i < STAT_STRIP.length - 1 && (
                <span className="text-base font-black text-emerald-500">|</span>
              )}
            </span>
          ))}
        </div>
      </section>


      {/* ------------------------------ Problem ---------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        
        <h2 className="text-center text-3xl font-medium text-neutral-800 sm:text-4xl">
    Remote Work Increased Flexibility and Operational Risk
  </h2>
  <p className="mx-auto mt-6 max-w-5xl text-center text-lg text-neutral-600">
    As work became distributed, many organisations lost consistent visibility into how
    time, access, and outcomes align with policy and expectations — increasing risk across
    payroll, compliance, security, and performance management.
  </p>
  <div className="flex justify-center  mt-10">
    <img
      className="w-108 h-108"   // increased size from w-32 h-32
      src="/home/Content.png"
      alt="image"
    />
  </div>

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEM_CARDS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 bg-white p-8 transition hover:shadow-lg"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[10px] bg-green-100">
                <img
                    src={Icon}
                className="h-8 w-8 " />
              </div>
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-3 text-base text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-l-4 border-sky-300 bg-slate-50 p-10">
          <p className="text-xm font-medium text-gray-800">
            ZoikoTime addresses these risks without defaulting to invasive monitoring, using
            policy-driven assurance and explainable intelligence.
          </p>
        </div>
      </section>

      {/* --------------------------- Feature split -------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-medium text-neutral-800 sm:text-4xl">
              From Time Tracking to Governed Workforce Intelligence
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              ZoikoTime combines session assurance, performance intelligence, and audit-ready
              documentation into a single system of record — enabling organisations to manage
              distributed work with confidence, fairness, and defensibility.
            </p>
            <ul className="mt-8 space-y-5">
              {USE_CASES.map((useCase) => (
                <li key={useCase} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-emerald-500" />
                  <span className="text-lg font-medium text-gray-900">{useCase}</span>
                </li>
              ))}
            </ul>
            <button className="mt-10 rounded-full bg-sky-900 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800">
              Read More
            </button>
          </div>

          <div className="relative flex justify-center rounded-3xl border border-emerald-500 bg-gradient-to-br from-teal-50 to-white p-10">
            < MiniCalendarCard/>
          </div>
        </div>
      </section>

      {/* -------------------------- Enterprise modules ----------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-4xl font-bold text-neutral-800">Enterprise Modules</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
          Comprehensive capabilities designed for accountability, performance, and trust — in
          equal measure.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {MODULES.map((mod) => (
            <ModuleCard key={mod.title} mod={mod} />
          ))}
        </div>
      </section>

      {/* ------------------------------ How it works -------------------------- */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-4xl font-bold text-slate-900">How It Works</h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            Balanced Assurance Lifecycle: Capture → Assure → Understand → Document
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border-2 border-gray-200 bg-white p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl font-bold text-gray-900">{step.title}</h3>
                <p className="mt-4 text-base text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button className="rounded-full bg-sky-900 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800">
              View Assurance Architecture
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------- Pricing ----------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-4xl font-medium text-neutral-800">
          Balanced Pricing & Packaging
        </h2>
        <p className="mt-4 text-center text-lg text-neutral-600">
          Clear tiers with support for enterprise customisation.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl p-10 ${
                tier.highlighted
                  ? "bg-emerald-500 text-white shadow-xl ring-1 ring-emerald-500"
                  : "border border-neutral-300 bg-gradient-to-b from-white to-sky-50 text-gray-900"
              }`}
            >
              <h3 className="text-3xl font-bold">{tier.name}</h3>
              <p
                className={`mt-4 text-base ${
                  tier.highlighted ? "text-white/90" : "text-gray-600"
                }`}
              >
                {tier.description}
              </p>
              <ul className="mt-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        tier.highlighted ? "text-white" : "text-emerald-500"
                      }`}
                    />
                    <span className={tier.highlighted ? "text-white" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-10 rounded-lg py-3 text-base font-semibold transition ${
                  tier.highlighted
                    ? "bg-white text-emerald-500 hover:bg-sky-50"
                    : "bg-sky-900 text-slate-50 hover:bg-sky-800"
                }`}
              >
                Request Proposal
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- Feature split 2 --------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 flex justify-center rounded-3xl border border-teal-100 bg-gradient-to-br from-cyan-50 to-teal-50 p-10 lg:order-1">
            <div className="flex w-full max-w-md flex-col gap-4">
              <div className="flex items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg ring-1 ring-neutral-200">
                <span className="text-lg font-medium text-neutral-400">Project X</span>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-black">00:00:00</span>
                  <span className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-sm">
                    <Play className="h-4 w-4" /> Start
                  </span>
                </div>
              </div>
              <div className="flex -rotate-1 items-center justify-between rounded-full bg-white px-6 py-4 shadow-lg ring-1 ring-neutral-200">
                <span className="text-lg font-medium text-neutral-800">Project X</span>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-semibold text-black">00:00:01</span>
                  <span className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-base font-semibold text-white shadow-sm">
                    <Pause className="h-4 w-4" /> Stop
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-medium leading-tight text-neutral-800">
              Seamlessly Pause and Resume Your Work with an Intuitive Button.
            </h2>
            <p className="mt-6 text-lg text-neutral-600">
              Easily track your time as it happens, with automatic live screenshots for complete
              visibility and transparency.
            </p>
            <button className="mt-10 rounded-full bg-sky-900 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------- Testimonials -------------------------------- */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl font-medium text-neutral-800">Trusted by Teams, Loved by Users</h2>
        <p className="mt-4 text-lg text-neutral-600">Teams trust us; users rave about us</p>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-neutral-200 bg-white shadow-xl shadow-black/5">
          <div className="p-10 text-left">
            <div className="mb-4 flex gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-2xl font-semibold text-neutral-800">
              &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
            </p>
            <p className="mt-4 text-lg text-neutral-600">
              {TESTIMONIALS[activeTestimonial].body}
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-neutral-100 bg-neutral-50 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-900 text-sm font-semibold text-white">
                {TESTIMONIALS[activeTestimonial].name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="text-base font-semibold text-neutral-800">
                  {TESTIMONIALS[activeTestimonial].name}
                </p>
                <p className="text-sm text-neutral-600">
                  {TESTIMONIALS[activeTestimonial].role}
                </p>
              </div>
            </div>
            <span className="text-xl font-extrabold uppercase text-neutral-800">
              {TESTIMONIALS[activeTestimonial].company}
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveTestimonial(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === activeTestimonial ? "w-16 bg-neutral-800" : "w-16 bg-zinc-200"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ------------------------------ CTA banner ------------------------------ */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-500 px-8 py-20 text-center">
          <h2 className="text-4xl font-semibold text-white">
            Take Control of Your Time with Zoiko Time
          </h2>
          <p className="mt-4 text-lg text-sky-50">
            Track every minute and boost your productivity effortlessly.
          </p>
          <button className="mt-8 rounded-full bg-white px-8 py-3 text-base font-semibold text-neutral-800 shadow-sm transition hover:bg-sky-50">
            Contact Us
          </button>
        </div>
      </section>

      

      {/* --------------------------- Download modal --------------------------- */}
      {showDownload && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6"
          onClick={() => setShowDownload(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-2xl"
          >
            <button
              onClick={() => setShowDownload(false)}
              aria-label="Close"
              className="absolute right-5 top-5 text-neutral-400 transition hover:text-neutral-800"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-2xl font-bold text-blue-900">Download the desktop app</h3>
            <div className="mt-8 flex items-center justify-center gap-10">
              {["Windows", "Mac", "Linux"].map((os) => (
                <div key={os} className="flex flex-col items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-50">
                    <span className="text-xs font-semibold text-neutral-500">{os[0]}</span>
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{os}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}