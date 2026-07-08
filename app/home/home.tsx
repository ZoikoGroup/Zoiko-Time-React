"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
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
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* -------------------------------------------------------------------------
 * Data
 * ---------------------------------------------------------------------- */
const platforms = [
    {
      name: 'Windows',
      icon: "/home/microsoft.png"
      ,
    },
    {
      name: 'Mac',
      icon: "/home/Vector (1).png"
      ,
    },
    {
      name: 'Linux',
      icon: "/home/Linux 1.png",
    },
  ];

  const days = [
    { label: 'S', fillHeight: 'h-28', topOffset: 'top-[28.46px]' },
    { label: 'M', fillHeight: 'h-20', topOffset: 'top-[48.79px]' },
    { label: 'T', fillHeight: 'h-28', topOffset: 'top-[21.69px]' },
    { label: 'W', fillHeight: 'h-10', topOffset: 'top-[94.87px]' },
    { label: 'T', fillHeight: 'h-24', topOffset: 'top-[47.44px]' },
    { label: 'F', fillHeight: 'h-24', topOffset: 'top-[32.53px]' },
    { label: 'S', fillHeight: 'h-20', topOffset: 'top-[58.28px]' },
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
    icon: "/home/solar_delivery-bold.png",
    title: "Outcomes Masked by Activity Noise",
    description:
      "COO and delivery leaders lack clear visibility into actual work outcomes",
  },
  {
    icon: "/home/streamline-ultimate_office-employee-bold.png",
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

const highlights = [
    "Distributed workforces at scale",
    "Regulated and audit-heavy environments",
    "Enterprises requiring evidence-based performance governance",
    "Contractor-heavy or high payroll sensitivity operations"
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
  {
    title: "Policy & Location Context",
    purpose:
      "Purpose: Align distributed work with policy and jurisdictional constraints using exception-based workflows.",
    whatItDoes: [
      "Location context aligned to work policy (exception-based, not continuous tracking)",
      "Suspicious network route patterns flagged for review when thresholds are met",
      "Jurisdiction-aware configuration templates to reduce compliance drift",
    ],
    value: [
      "Reduced compliance exposure and clearer exception handling",
      "Support for geo-restricted work policies where applicable",
      "Improved contractor and distributed governance",
    ],
    governance: [
      "Configurable tolerances for travel roles and hybrid schedules",
      "Works council / union modes and region-specific privacy settings",
      "Manager review queues with required justification for actions",
    ],
    outputs:
      "Policy compliance status per session • Exception queue with evidence context and resolution logging",
  },
  {
    title: "Integrity & Anomaly Detection",
    purpose:
      "Purpose: Protect data quality and reduce leakage by flagging anomalous patterns for review not automated punishment.",
    whatItDoes: [
      "Detects anomalous interaction signatures and automation-like patterns",
      "Highlights suspicious continuity (e.g., unnatural uniform activity)",
      "Flags integrity drift over time against established baselines",
    ],
    value: [
      "Reduces payroll leakage and improves trust in analytics",
      "Prevents manipulation from polluting performance insights",
      "Supports fair, defensible decision processes",
    ],
    governance: [
      "Human-in-command gate: no automated disciplinary outcomes",
      "Threshold tuning by department, role, and jurisdiction",
      "Explainability panel showing why something was flagged",
    ],
    outputs:
      "Integrity score per session and trendline per user/team • Evidence snapshot and review log",
  },
  {
    title: "Evidence Capture",
    purpose:
      "Purpose: Provide investigation support and policy verification where justified — with privacy safeguards.",
    whatItDoes: [
      "Application categorisation (work, neutral, restricted — configurable)",
      "Configurable evidence snapshots for defined roles or incident response",
      "Prohibited tool alerts aligned to security policy (CISO-governed)",
    ],
    value: [
      "Supports investigations and dispute resolution",
      "Improves client-billable defensibility where applicable",
      "Reduces security policy drift and prohibited software risk",
    ],
    governance: [
      "Blurring/redaction rules and sensitive-field masking",
      "Exclusions for personal apps and sites",
      "Employee Transparency Center",
      "RBAC + immutable access logs",
      "Retention and minimisation controls",
    ],
    outputs:
      "Evidence pack generator (HR/Legal/Audit ready) • Access log exports and retention compliance reports",
  },
  {
    title: "Audit, HR & Legal Enablement",
    purpose:
      "Purpose: Produce defensible documentation and standard report packs for audits, disputes, and HR workflows.",
    whatItDoes: [
      "Wage-and-hour reporting structures and configurable templates",
      "Investigation timelines (session events, policy exceptions, resolutions)",
      "Performance improvement documentation support",
      "Tamper-evident audit trails with signed exports",
    ],
    value: [
      "Faster investigations and defensible outcomes",
      "Reduced litigation exposure and audit friction",
      "Evidence-based HR decisions with proper governance",
    ],
    governance: [
      "Retention policies, legal hold, and access approvals",
      "Jurisdictional templates and policy mapping library",
      "Human review gates and decision justification logs",
    ],
    outputs:
      "Compliance packs and audit trail packages • Investigation timeline export bundle",
  },
];

const leftModules = MODULES.filter((_, index) => index % 2 === 0);
const rightModules = MODULES.filter((_, index) => index % 2 === 1);

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

const testimonialsData = [
  {
    id: 1,
    quote: "Zoiko Time has completely transformed the way we manage time and productivity.",
    description: "With its seamless time tracking and real-time insights, we’ve seen a significant improvement in both efficiency and project management.",
    author: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
    image: "/home/image 1.png",
  },
  {
    id: 2,
    quote: "Zo has completely transformed the way we manage time and productivity.",
    description: "With its seamless time tracking and real-time insights, we’ve seen a significant improvement in both efficiency and project management.",
    author: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
    image: "/home/image 1.png",
  },
  {
    id: 3,
    quote: "Hoory has completely transformed the way we manage time and productivity.",
    description: "With its seamless time tracking and real-time insights, we’ve seen a significant improvement in both efficiency and project management.",
    author: "Sarah Julian",
    role: "Operations Manager",
    company: "AMD World",
    image: "/home/image 1.png",
  }
];

const COMPLIANCE_BADGES = ["SOC 2 Type II", "ISO 27001", "GDPR", "CCPA/CPRA", "Enterprise SLA"];

/* -------------------------------------------------------------------------
 * Small reusable bits
 * ---------------------------------------------------------------------- */

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
      : "border-neutral-300 bg-neutral-50 text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-500";
  return (
    <div
      title={`Icon slot: ${label}`}
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-xl border-2 border-dashed text-center text-[8px] font-medium leading-tight ${toneClasses} ${className}`}
    >
      {label}
    </div>
  );
}

function MiniCalendarCard() {
  return (
    <div className="w-full rounded-2xl bg-white dark:bg-neutral-800 p-4 sm:p-5 shadow-xl shadow-black/10 dark:shadow-black/40">
      <div className="text-center">
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">Mon, Jan 6</p>
        <p className="text-3xl sm:text-4xl font-semibold text-neutral-800 dark:text-white">00:25:30</p>
      </div>
      <div className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full bg-neutral-50 dark:bg-neutral-700 px-4 py-1.5 ring-1 ring-neutral-200 dark:ring-neutral-600">
        <span className="h-2 w-2 rounded-full bg-purple-500" />
        <span className="text-xs font-semibold text-neutral-800 dark:text-white">Project - Axel</span>
      </div>
      <div className="mt-4 flex h-20 sm:h-25 items-center justify-center rounded-lg text-xs font-medium text-neutral-400">
        <img src="/home/Image.png" alt="image" />
      </div>
    </div>
  );
}

function TrackerCard() {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white dark:bg-neutral-800 shadow-xl shadow-black/10 dark:shadow-black/40">
      <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-3">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Week Total</p>
          <p className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-white">00:48:20</p>
        </div>
        <div className="flex items-center gap-2">
          <img src="/home/Bell.png" alt="icon" className="rounded-full h-4 w-4" />
          <img src="/home/Avatar.png" alt="icon" className="rounded-full h-7 w-7" />
        </div>
      </div>
      <div className="px-2 pb-3 pt-1">
        <div className="inline-flex w-full self-stretch items-center justify-between rounded-full bg-neutral-50 dark:bg-neutral-900 py-1.5 pl-4 pr-1.5 outline outline-1 outline-offset-[-1px] outline-neutral-400/20 dark:outline-neutral-600/40 overflow-hidden">
          <span className="flex-1 text-left text-sm sm:text-base font-normal leading-6 text-neutral-400">
            What will you be working on?
          </span>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <img src="/home/Tag.png" className="rounded-md h-3 w-3" />
              <div className="h-4 w-[1px] bg-neutral-400/20 dark:bg-neutral-600" />
              <img src="/home/CurrencyDollar.png" className="rounded-md h-3 w-3" />
              <div className="h-4 w-[1px] bg-neutral-400/20 dark:bg-neutral-600" />
              <span className="text-base font-semibold  leading-6 text-black dark:text-white">
                00:00:00
              </span>
            </div>
            <button className="h-9 sm:h-10 px-4 sm:px-6 py-3 bg-[#44B97A] rounded-full flex justify-center items-center gap-2 overflow-hidden shadow-[0px_0px_0px_1px_rgba(129,213,251,1.00),_inset_0px_0.5px_0.5px_0px_rgba(69,144,178,0.25),_inset_0px_-6px_12px_0px_rgba(255,255,255,0.10)] text-center text-white text-sm sm:text-base font-semibold  leading-6 [text-shadow:_1px_1px_1px_rgb(69_144_178_/_0.10)] hover:opacity-90 transition-opacity">
              Start
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
        <div className="overflow-hidden rounded-2xl ring-1 ring-neutral-200 dark:ring-neutral-700">
          <div className="flex items-center justify-between bg-neutral-50 dark:bg-neutral-900 p-3 text-sm">
            <span className="font-medium text-neutral-500 dark:text-neutral-400">Today</span>
            <span className="text-neutral-500 dark:text-neutral-400">
              Total: <span className="font-semibold text-neutral-800 dark:text-white">35:00</span>
            </span>
          </div>
          <div className="flex flex-col gap-4 p-4">
            {[
              { name: "Competitor Analysis", tag: "Project - Axel", dot: "bg-purple-500", time: "00:15:00", paid: true },
              { name: "Moodboarding", tag: "Project - Danzel", dot: "bg-orange-400", time: "00:20:00", paid: false },
            ].map((row) => (
              <div key={row.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">{row.name}</span>
                  <div className="flex items-center gap-2">
                    {row.paid && (
                      <span className="rounded-full bg-green-50 dark:bg-green-900/30 px-2 py-0.5 text-xs font-semibold text-green-800 dark:text-green-400 ring-1 ring-green-200 dark:ring-green-800">
                        Paid
                      </span>
                    )}
                    <img src="/home/CurrencyDollar.png" alt="icon" className="w-4 h-4" />
                    <span className="text-sm font-semibold text-black dark:text-white">{row.time}</span>
                    <img src="/home/Play.png" className="rounded-md" />
                    <img src="/home/DotsThreeOutline.png" className="rounded-md" />
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-neutral-50 dark:bg-neutral-900 px-3 py-1 text-xs font-semibold text-neutral-800 dark:text-white ring-1 ring-neutral-200 dark:ring-neutral-700">
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
    <div className="w-full rounded-3xl bg-white dark:bg-neutral-800 p-4 sm:p-5 shadow-xl shadow-black/10 dark:shadow-black/40">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Weekly Total</p>
          <p className="text-xl sm:text-2xl font-semibold text-neutral-800 dark:text-white">00:48:20</p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-green-50 dark:bg-green-900/30 px-3 py-2 text-sm font-semibold text-green-800 dark:text-green-400 ring-1 ring-green-200 dark:ring-green-800">
          <ArrowUpRight className="h-4 w-4" /> +2.5%
        </span>
      </div>
      <div className="flex items-end justify-between gap-1.5 sm:gap-2">
        {days.map((day, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="relative h-20 sm:h-28 w-full overflow-hidden rounded-md bg-neutral-100 dark:bg-neutral-700">
              <div
                className="absolute bottom-0 w-full rounded-md bg-green-400"
                style={{ height: `${day.h}%` }}
              />
            </div>
            <span className="text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">{day.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ModuleCard({
  mod,
  index,
  activeCard,
  setActiveCard,
}: {
  mod: (typeof MODULES)[number];
  index: number;
  activeCard: number | null;
  setActiveCard: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <div
      className={`p-5 sm:p-6 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-300 overflow-hidden ${
        activeCard === index ? "min-h-fit" : "min-h-[150px]"
      }`}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{mod.title}</h3>
          <p className="mt-2 text-sm sm:text-base font-semibold text-emerald-500 dark:text-emerald-400">
            {mod.purpose}
          </p>
        </div>
        <button
          onClick={() => setActiveCard(activeCard === index ? null : index)}
          className="h-12 w-12 sm:h-14 sm:w-14 min-h-12 min-w-12 sm:min-h-14 sm:min-w-14 flex items-center justify-center rounded-full bg-emerald-500 flex-none"
        >
          {activeCard === index ? (
            <ChevronUp className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          ) : (
            <ChevronDown className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          )}
        </button>
      </div>

      {activeCard === index && (
        <>
          <ModuleList heading="What it does:" items={mod.whatItDoes} />
          <ModuleList heading="Governance controls:" items={mod.governance} />
          <ModuleList heading="Enterprise value:" items={mod.value} />
          <div className="text-gray-900 dark:text-gray-100 mt-6 rounded-lg border-l-4 border-emerald-500 bg-gray-50 dark:bg-gray-900/50 p-5 sm:p-6">
            <p className="font-bold text-black dark:text-white">Outputs:</p>
            <p>{mod.outputs}</p>
          </div>
        </>
      )}
    </div>
  );
}

function ModuleList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="mb-6">
      <p className="mb-3 text-base font-bold text-gray-900 dark:text-white">{heading}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base text-gray-600 dark:text-gray-300">
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
  const [activeCard, setActiveCard] = useState<number | null>(0);
const [activeSlide, setActiveSlide] = useState(0);
const visibleCards = [
  testimonialsData[activeSlide],
  testimonialsData[(activeSlide + 1) % testimonialsData.length],
  testimonialsData[(activeSlide + 2) % testimonialsData.length],
];
  return (
    <main className="bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
      {/* ------------------------------ Hero ------------------------------ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-500 via-emerald-400 to-white dark:to-gray-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[1400px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 pt-14 text-center sm:pt-20">
          <h1 className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Time Intelligence for Modern Work
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-light text-white/90 sm:text-xl">
            Not tracking. Not surveillance. Intelligence — governed, ethical, and explainable.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-sm font-medium text-white/80 sm:text-base">
            ZoikoTime transforms how individuals, teams, and enterprises understand time — using
            AI-powered insight, human-in-command oversight, and enterprise-grade governance to
            improve productivity without compromising trust.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-cyan-900 shadow-lg transition hover:bg-sky-50 sm:px-8 sm:py-3.5 sm:text-base">
              Request a Demo
            </button>
            <button
              onClick={() => setShowDownload(true)}
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-3.5 sm:text-base"
            >
              Download Free
            </button>
          </div>
        </div>

        <div className="relative mx-auto mt-14 hidden aspect-[1440/430] w-full max-w-6xl sm:mt-16 lg:block">
          <div className="absolute w-[18%] -rotate-6" style={{ left: "11.8%", top: "11.5%" }}>
            <MiniCalendarCard />
            <img src="/home/SVG.png" alt="icon" className="absolute -left-3 -top-3 rotate-6 w-8 h-8" />
          </div>

          <div className="absolute z-10 w-[42%]" style={{ left: "29%", top: "2.5%" }}>
            <TrackerCard />
            <img src="/home/SVG (1).png" alt="icon" className="absolute -left-4 -top-3 -rotate-6" />
            <img src="/home/SVG (2).png" alt="icon" className="absolute -right-4 -top-3 rotate-12" />
          </div>

          <div className="absolute w-[22%] rotate-6" style={{ left: "66%", top: "12.5%" }}>
            <WeeklyChartCard />
          </div>
        </div>

        <div className="relative mx-auto mt-12 w-full max-w-sm px-6 pb-16 lg:hidden">
          <TrackerCard />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-24 bg-gradient-to-b from-transparent to-white dark:to-gray-900 lg:block" />
        <div className="h-10 lg:h-0" />
      </section>

      {/* --------------------------- Logo / stats -------------------------- */}
      <section className="border-b border-neutral-100 dark:border-neutral-800 py-14">
        <p className="text-center text-base sm:text-lg font-semibold text-neutral-500 dark:text-neutral-400">
          Driving Productivity for 1,000+ Companies
        </p>
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-8">
          {STAT_STRIP.map((item, i) => (
            <span key={item} className="flex items-center gap-3">
              <span className="text-sm sm:text-base font-semibold text-gray-600 dark:text-gray-300">{item}</span>
              {i < STAT_STRIP.length - 1 && (
                <span className="hidden text-base font-black text-emerald-500 sm:inline">|</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* ------------------------------ Problem ---------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-center text-2xl font-medium text-neutral-800 dark:text-white sm:text-3xl md:text-4xl">
          Remote Work Increased Flexibility and Operational Risk
        </h2>
        <p className="mx-auto mt-6 max-w-5xl text-center text-base text-neutral-600 dark:text-neutral-300 sm:text-lg">
          As work became distributed, many organisations lost consistent visibility into how
          time, access, and outcomes align with policy and expectations — increasing risk across
          payroll, compliance, security, and performance management.
        </p>
        <div className="mt-7 w-[552px] h-96 relative  select-none pointer-events-none mx-auto bg-transparent">
      
      {/* ==========================================
          FLOATING PERIPHERAL BADGES (BACKGROUND LAYER)
         ========================================== */}
      
      {/* Top Left: Time Tracker Badge */}
      <div className="px-3 py-2 left-[-29px] top-[-2.09px] absolute origin-top-left rotate-[-9.56deg] bg-white dark:bg-gray-800 rounded-full shadow-[0px_4px_4px_-3px_rgba(0,0,0,0.10)] border border-neutral-200/60 dark:border-gray-700 inline-flex justify-center items-center gap-2.5 overflow-hidden z-20">
        <img className="w-6 h-6  dark:bg-gray-200 rounded-sm"  src="/home/Alarm.png"/>
        <span className="text-neutral-800 dark:text-white text-base font-semibold leading-6">Time Tracker</span>
      </div>

      {/* Top Right: Reports Badge */}
      <div className="w-28 h-10 left-[448.16px] top-[88.42px] absolute origin-top-left rotate-[8.26deg] bg-white dark:bg-gray-800 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-neutral-200/60 dark:border-gray-700 flex items-center px-3 gap-2 overflow-hidden z-20">
  <img className="w-6 h-6  dark:bg-gray-200 rounded-sm"  src="/home/Files.png"/>
          <span className="text-neutral-600 dark:text-gray-300 text-base font-medium leading-6">Reports</span>
      </div>

      {/* Bottom Left: Calendar Badge */}
      <div className="w-32 h-10 left-[-35px] top-[207px] absolute bg-white dark:bg-gray-800 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-neutral-200/60 dark:border-gray-700 flex items-center px-3.5 gap-2.5 overflow-hidden z-20">
          <img className="w-6 h-6  dark:bg-gray-200 rounded-sm"  src="/home/Calendar.png"/>
        <span className="text-neutral-600 dark:text-gray-300 text-base font-medium leading-6">Calendar</span>
      </div>

      {/* Bottom Right: Collaboration Badge */}
      <div className="w-40 h-10 left-[458px] top-[278px] absolute bg-white dark:bg-gray-800 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] border border-neutral-200/60 dark:border-gray-700 flex items-center px-4 gap-2.5 overflow-hidden z-20">
          <img className="w-6 h-6  dark:bg-gray-200 rounded-sm"  src="/home/Users.png"/>
        <span className="text-neutral-600 dark:text-gray-300 text-base font-medium leading-6">Collaboration</span>
      </div>

      {/* ==========================================
          CENTRAL MAIN DATA METRICS CARD
         ========================================== */}
      <div className="w-96 h-64 left-[73px] top-[82px] absolute bg-white dark:bg-gray-800 rounded-3xl shadow-[0px_21.68px_43.37px_0px_rgba(148,148,148,0.06)] border border-neutral-400/20 dark:border-gray-700/80 z-10" />

      {/* Card Header Layer: Totals and Delta Spark */}
      <div className="w-96 h-32 left-[72.50px] top-[-4px] absolute z-20 flex justify-between items-start px-[32.53px] pt-[36px]">
        <div className="flex flex-col">
          <span className="text-neutral-600 dark:text-gray-400 text-xl font-normal leading-normal">Weekly Total</span>
          <span className="text-neutral-800 dark:text-white text-3xl font-semibold leading-tight mt-1">00:48:20</span>
        </div>
        
        {/* Trend Indicator Badge */}
        <div className="h-11 px-4 bg-green-50 dark:bg-green-950/30 rounded-full border border-green-200/20 dark:border-green-800/40 flex items-center gap-2 overflow-hidden mt-1">
            <img className="w-6 h-6 "  src="/home/TrendUp.png"/>
          <span className="text-green-800 dark:text-green-400 text-xl font-semibold leading-none">+2.5%</span>
        </div>
      </div>

      {/* Card Body Layer: Weekly Column Histogram Chart */}
      <div className="w-96 h-56 left-[72.50px] top-[125.79px] absolute z-20 flex justify-between px-[32.53px]">
        {days.map((day, idx) => (
          <div key={idx} className="w-11 flex flex-col items-center gap-1.5 justify-end pb-4">
            {/* Histogram Column Bar Container */}
            <div className="w-10 h-32 relative">
              {/* Dynamic Empty Gray Grid Slot Background */}
              <div className="w-10 h-32 absolute top-0 left-0 bg-neutral-100 dark:bg-gray-700 rounded-lg" />
              {/* Colored Analytics Metric Fill */}
              <div className={`w-10 absolute left-0 bottom-0 bg-emerald-500 rounded-b-lg ${day.fillHeight} rounded-t-sm`} />
            </div>
            {/* Weekday Label Indicator */}
            <span className="text-neutral-500 dark:text-gray-400 text-lg font-medium leading-normal w-full text-center">
              {day.label}
            </span>
          </div>
        ))}
      </div>

    </div>

        <div className="mt-7 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROBLEM_CARDS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 transition hover:shadow-lg dark:hover:shadow-black/30"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-[10px] bg-green-100 dark:bg-green-900/30">
                <img src={Icon} className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-lg border-l-4 border-sky-300 dark:border-sky-600 bg-slate-50 dark:bg-slate-800/50 p-6 sm:p-10">
          <p className="text-sm sm:text-xm font-medium text-gray-800 dark:text-gray-200">
            ZoikoTime addresses these risks without defaulting to invasive monitoring, using
            policy-driven assurance and explainable intelligence.
          </p>
        </div>
      </section>

      {/* --------------------------- Feature split -------------------------- */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden transition-colors duration-300 ">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* ==========================================
            LEFT SIDE CONTENT BLOCK
           ========================================== */}
        <div className="lg:col-span-6 flex flex-col justify-start items-start gap-8 z-10">
          <div className="space-y-4">
            <h2 className="text-neutral-800 dark:text-white text-3xl sm:text-4xl lg:text-[40px] font-medium leading-tight sm:leading-[48px] tracking-tight">
              From Time Tracking to Governed Workforce Intelligence
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
              ZoikoTime combines session assurance, performance intelligence, and audit-ready documentation into a single system of record enabling organisations to manage distributed work with confidence, fairness, and defensibility.
            </p>
          </div>

          {/* Core Benefit Checklist */}
          <ul className="flex flex-col gap-4 w-full">
            {highlights.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3.5 text-neutral-800 dark:text-gray-200">
                <div className="flex-shrink-0 size-5 rounded-[4px] bg-emerald-500 flex items-center justify-center mt-1">
                  {/* Subtle Inner Check Symbol Accent */}
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg font-medium leading-6">{text}</span>
              </li>
            ))}
          </ul>

          {/* Styled Primary Call To Action Trigger Button */}
          <button
            type="button"
            className="mt-4 px-8 py-3 bg-sky-950 hover:bg-sky-900 dark:bg-sky-900 dark:hover:bg-sky-850 text-white text-base font-semibold rounded-full shadow-[0px_0px_0px_1px_rgba(129,213,251,1.00),_inset_0px_0.5px_0.5px_0px_rgba(69,144,178,0.25),_inset_0px_-6px_12px_0px_rgba(255,255,255,0.10)] transition-all duration-200 active:scale-95"
          >
            Read More
          </button>
        </div>

        {/* ==========================================
            RIGHT SIDE PLATFORM CARD MOCKUP DISPLAY
           ========================================== */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative w-full">
          <div className="relative w-full max-w-[561px] h-[500px] bg-white dark:bg-gray-800 rounded-3xl border border-emerald-500/30 overflow-hidden flex items-center justify-center p-6 shadow-sm">
            
            {/* Custom Glowing Fluid Blurred Background Filters */}
            <div className="absolute -left-28 -top-32 w-[400px] h-[400px] bg-teal-200/40 dark:bg-teal-950/20 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -right-20 -bottom-24 w-[400px] h-[400px] bg-teal-200/40 dark:bg-teal-950/20 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Floating Internal Active Session Logger Preview Wrapper */}
            <div className="relative w-full max-w-[384px] bg-white dark:bg-gray-900 rounded-3xl shadow-[0px_28px_56px_0px_rgba(148,148,148,0.08)] dark:shadow-[0px_28px_56px_0px_rgba(0,0,0,0.4)] border border-neutral-100 dark:border-gray-800 flex flex-col items-center overflow-hidden">
              
              {/* Header Logging Timer Readout */}
              <div className="w-full px-8 pt-8 pb-3 text-center flex flex-col items-center gap-3">
                <div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-lg sm:text-xl font-normal leading-normal">Mon, Jan 6</p>
                  <p className="text-neutral-800 dark:text-white text-4xl sm:text-5xl font-semibold leading-tight mt-1 tracking-tight">00:25:30</p>
                </div>
                
                {/* Active Segment Pill Badge */}
                <div className="h-9 px-5 bg-neutral-50 dark:bg-gray-800/80 rounded-full border border-neutral-400/20 dark:border-gray-700 flex items-center gap-2.5">
                  <span className="size-3 bg-emerald-500 rounded-full" />
                  <span className="text-neutral-800 dark:text-gray-200 text-sm font-semibold leading-none">Project - Axel</span>
                </div>
              </div>

              {/* Mockup Desktop Screen Proof Placeholder Box */}
              <div className="w-full px-5 pb-5 mt-2">
                <div className="relative aspect-[397/246] w-full bg-neutral-100 dark:bg-gray-800 rounded-xl overflow-hidden border border-neutral-200/40 dark:border-gray-700/60 flex items-center justify-center group">
                  <img 
                    className="w-full h-full object-cover opacity-80 dark:opacity-60 transition-opacity duration-200 group-hover:opacity-100" 
                    src="/home/Image (3).png" 
                    alt="Active desktop monitor capture" 
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>

      {/* -------------------------- Enterprise modules ----------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-neutral-800 dark:text-white">
          Enterprise Modules
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
          Comprehensive capabilities designed for accountability, performance, and trust — in
          equal measure.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start mt-4">
          <div className="space-y-6 sm:space-y-8">
            {leftModules.map((module, index) => (
              <ModuleCard
                key={index}
                mod={module}
                index={index * 2}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>

          <div className="space-y-6 sm:space-y-8">
            {rightModules.map((module, index) => (
              <ModuleCard
                key={index}
                mod={module}
                index={index * 2 + 1}
                activeCard={activeCard}
                setActiveCard={setActiveCard}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ How it works -------------------------- */}
      <section className="bg-gradient-to-br from-slate-50 to-sky-50 dark:from-gray-800 dark:to-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-center text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Balanced Assurance Lifecycle: Capture → Assure → Understand → Document
          </p>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 sm:p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-emerald-500 text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <button className="rounded-full bg-sky-900 dark:bg-sky-700 px-8 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-sky-800 dark:hover:bg-sky-600">
              View Assurance Architecture
            </button>
          </div>
        </div>
      </section>

      {/* -------------------------------- Pricing ----------------------------- */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <h2 className="text-center text-3xl sm:text-4xl font-medium text-neutral-800 dark:text-white">
          Balanced Pricing & Packaging
        </h2>
        <p className="mt-4 text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-300">
          Clear tiers with support for enterprise customisation.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col rounded-3xl p-8 sm:p-10 ${
                tier.highlighted
                  ? "bg-emerald-500 text-white shadow-xl ring-1 ring-emerald-500"
                  : "border border-neutral-300 dark:border-neutral-700 bg-gradient-to-b from-white to-sky-50 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
              }`}
            >
              <h3 className="text-2xl sm:text-3xl font-bold">{tier.name}</h3>
              <p className={`mt-4 text-sm sm:text-base ${tier.highlighted ? "text-white/90" : "text-gray-600 dark:text-gray-300"}`}>
                {tier.description}
              </p>
              <ul className="mt-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm sm:text-base">
                    <CheckCircle2
                      className={`mt-0.5 h-5 w-5 shrink-0 ${tier.highlighted ? "text-white" : "text-emerald-500"}`}
                    />
                    <span className={tier.highlighted ? "text-white" : "text-gray-600 dark:text-gray-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-10 rounded-lg py-3 text-base font-semibold transition ${
                  tier.highlighted
                    ? "bg-white text-emerald-500 hover:bg-sky-50"
                    : "bg-sky-900 dark:bg-sky-700 text-slate-50 hover:bg-sky-800 dark:hover:bg-sky-600"
                }`}
              >
                Request Proposal
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --------------------------- Feature split 2 --------------------------- */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-20 overflow-hidden transition-colors duration-300 font-['Manrope']">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ==========================================
            LEFT SIDE VISUAL ARTBOARD MOCKUP LAYER
           ========================================== */}
        <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center lg:justify-start relative w-full">
          <div className="relative w-full max-w-[630px] h-[500px] bg-white dark:bg-gray-800 rounded-3xl border border-teal-100 dark:border-gray-700/60 overflow-hidden flex flex-col justify-center px-4 sm:px-8 shadow-sm">
            
            {/* Custom Glowing Fluid Blurred Ambient Spheres (Figma Spec) */}
            <div className="absolute left-[-291px] top-[-255px] w-[630px] h-[509px] bg-cyan-100/60 dark:bg-cyan-950/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute left-[96px] top-[255px] w-[630px] h-[504px] bg-teal-200/40 dark:bg-teal-950/20 rounded-full blur-[88px] pointer-events-none" />
            <div className="absolute left-[269px] top-[-263px] w-[534px] h-[828px] origin-top-left rotate-[36deg] bg-emerald-50/50 dark:bg-emerald-950/10 rounded-full blur-3xl pointer-events-none" />
            
            {/* Control Bar 1: Active Active Tracking State (Angled Overlay) */}
            <div className="w-full max-w-[519px] h-16 relative -rotate-2  bg-white dark:bg-gray-900 rounded-full shadow-[-19px_40px_79px_0px_rgba(148,148,148,0.12)] dark:shadow-[-19px_40px_79px_0px_rgba(0,0,0,0.4)] border border-neutral-400/20 dark:border-gray-700 flex items-center justify-between px-6 z-10">
              <span className="text-neutral-800 dark:text-white text-base sm:text-xl font-medium">Project X</span>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img className="size-6  rounded-sm" src="/home/Tag.png" />
                  <div className="w-[0.74px] h-5 bg-neutral-400/20 dark:bg-gray-700" />
                  <img className="size-6  rounded-sm" src="/home/CurrencyDollar.png" />
                  <div className="w-[0.74px] h-5 bg-neutral-400/20 dark:bg-gray-700" />
                  <span className="text-black dark:text-white font-semibold text-sm sm:text-xl">00:00:01</span>
                </div>
                <button 
                  type="button" 
                  className="h-11 px-6 sm:px-8 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-xl rounded-full shadow-[0px_0px_0px_1.33px_rgba(233,101,101,1.00)] transition-transform duration-150 active:scale-95"
                >
                  Stop
                </button>
              </div>
            </div>

            {/* Control Bar 2: Dormant State (Aligned Base Layer) */}
            <div className="w-full max-w-[519px] h-16 ml-0 lg:ml-6 bg-white dark:bg-gray-900 rounded-full shadow-[-19px_40px_79px_0px_rgba(148,148,148,0.12)] dark:shadow-[-19px_40px_79px_0px_rgba(0,0,0,0.4)] border border-neutral-400/20 dark:border-gray-700 flex items-center justify-between px-2 z-10">
              <span className="text-neutral-400 dark:text-neutral-500 text-base sm:text-xl font-normal">Project X</span>
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <img className="size-6  rounded-sm" src="/home/Tag.png" />
                  <div className="w-[0.03px] h-5 bg-neutral-400/20 dark:bg-gray-700" />
                  <img className="size-6  rounded-sm" src="/home/CurrencyDollar.png" />
                  <div className="w-[0.03px] h-5 bg-neutral-400/20 dark:bg-gray-700" />
                  <span className="text-black dark:text-white font-semibold text-sm sm:text-xl">00:00:00</span>
                </div>
                <button 
                  type="button" 
                  className="h-11 px-6 sm:px-8 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm sm:text-xl rounded-full shadow-[0px_0px_0px_1.23px_rgba(129,213,251,1.00)] transition-transform duration-150 active:scale-95"
                >
                  Start
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE FEATURE DESCRIPTION LOGIC
           ========================================== */}
        <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center items-start gap-8 z-10">
          <div className="space-y-4">
            <h2 className="text-neutral-800 dark:text-white text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight lg:leading-[57.60px] tracking-tight">
              Seamlessly Pause and Resume Your Work with an Intuitive Button.
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-normal leading-relaxed">
              Easily track your time as it happens, with automatic live screenshots for complete visibility and transparency.
            </p>
          </div>

          {/* Styled Primary CTA Read More Trigger */}
          <button
            type="button"
            className="px-8 py-3 bg-sky-950 hover:bg-sky-900 dark:bg-sky-900 dark:hover:bg-sky-850 text-white text-base font-semibold rounded-full shadow-[0px_0px_0px_1px_rgba(129,213,251,1.00),_inset_0px_0.5px_0.5px_0px_rgba(69,144,178,0.25),_inset_0px_-6px_12px_0px_rgba(255,255,255,0.10)] transition-all duration-200 active:scale-95"
          >
            Read More
          </button>
        </div>

      </div>
    </section>
      {/* -------------------------------- Testimonials -------------------------------- */}
      <section className="w-full bg-white dark:bg-gray-900 py-20 px-4 md:px-8 overflow-hidden transition-colors duration-300 ">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl">
          <h2 className="text-neutral-800 dark:text-white text-3xl md:text-5xl font-medium leading-tight mb-4">
            Trusted by Teams, Loved by Users
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-normal leading-relaxed">
            Teams trust us; users rave about us
          </p>
        </div>

        {/* Card Deck Wrapper */}
        <div className="relative w-full max-w-[650px] h-[400px] flex justify-center items-start mb-12">
          
          {/* Card 3 (Back Card - Hoory) */}
          <div className="absolute w-full max-w-[500px] bg-white dark:bg-gray-800 rounded-3xl border border-neutral-400/20 dark:border-gray-700/50 shadow-sm overflow-hidden transform rotate-[5.31deg] opacity-40 translate-y-2 pointer-events-none transition-transform duration-300">
            <div className="p-8 pb-6 flex flex-col gap-3 min-h-[180px]">
              <h3 className="text-neutral-800 dark:text-gray-100 text-xl font-semibold leading-snug">
                "{visibleCards[2].quote}”
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal leading-relaxed">
                {visibleCards[2].description}
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-gray-800/50 border-t border-neutral-400/20 dark:border-gray-700/50 p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="size-12 rounded-full object-cover" src={visibleCards[2].image} alt={visibleCards[2].author} />
                <div>
                  <h4 className="text-neutral-800 dark:text-white text-base font-semibold leading-none mb-1">{visibleCards[2].author}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-none">{visibleCards[2].role}</p>
                </div>
              </div>
              <span className="text-neutral-800 dark:text-gray-300 text-lg font-extrabold uppercase tracking-wider">{visibleCards[2].company}</span>
            </div>
          </div>

          {/* Card 2 (Middle Card - Zo) */}
          <div className="absolute w-full max-w-[500px] bg-white dark:bg-gray-800 rounded-3xl border border-neutral-400/20 dark:border-gray-700/50 shadow-md overflow-hidden transform rotate-[-7.42deg] opacity-75 translate-y-4 pointer-events-none transition-transform duration-300">
            <div className="p-8 pb-6 flex flex-col gap-3 min-h-[180px]">
              <h3 className="text-neutral-800 dark:text-gray-100 text-xl font-semibold leading-snug">
                "{visibleCards[1].quote}”
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal leading-relaxed">
                {visibleCards[1].description}
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-gray-800/50 border-t border-neutral-400/20 dark:border-gray-700/50 p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="size-12 rounded-full object-cover" src={visibleCards[1].image} alt={visibleCards[1].author} />
                <div>
                  <h4 className="text-neutral-800 dark:text-white text-base font-semibold leading-none mb-1">{visibleCards[1].author}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-none">{visibleCards[1].role}</p>
                </div>
              </div>
              <span className="text-neutral-800 dark:text-gray-300 text-lg font-extrabold uppercase tracking-wider">{visibleCards[1].company}</span>
            </div>
          </div>

          {/* Card 1 (Front Active Card - Zoiko Time) */}
          <div className="absolute w-full max-w-[500px] bg-white dark:bg-gray-800 rounded-3xl border border-neutral-400/20 dark:border-gray-700/50 shadow-xl overflow-hidden z-10 transition-all duration-300 hover:scale-[1.02]">
            <div className="p-8 pb-6 flex flex-col gap-3 min-h-[180px]">
              <h3 className="text-neutral-800 dark:text-white text-xl font-semibold leading-snug">
                "{visibleCards[0].quote}”
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 text-base font-normal leading-relaxed">
                {visibleCards[0].description}
              </p>
            </div>
            <div className="bg-neutral-50 dark:bg-gray-800/50 border-t border-neutral-400/20 dark:border-gray-700/50 p-6 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img className="size-12 rounded-full object-cover" src={visibleCards[0].image} alt={visibleCards[0].author} />
                <div>
                  <h4 className="text-neutral-800 dark:text-white text-base font-semibold leading-none mb-1">{visibleCards[0].author}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm font-normal leading-none">{visibleCards[0].role}</p>
                </div>
              </div>
              <span className="text-neutral-800 dark:text-gray-200 text-lg font-extrabold uppercase tracking-wider">{visibleCards[0].company}</span>
            </div>
          </div>

          {/* Bottom Gradient Fade Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white/60 dark:to-gray-900/60 backdrop-blur-[2px] z-20 pointer-events-none transition-all duration-300"></div>
        </div>

        {/* Carousel Indicators / Sliders */}
        <div className="flex gap-2 z-30">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "w-16 bg-neutral-800 dark:bg-white"
                  : "w-16 bg-zinc-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>

      {/* ------------------------------ CTA banner ------------------------------ */}
    
          <section className="w-full px-4 py-12 md:py-20 bg-white dark:bg-gray-900 transition-colors duration-300 ">
      <div className="max-w-[1280px] mx-auto relative bg-emerald-500 rounded-3xl overflow-hidden min-h-[500px] md:min-h-[350px] p-8 md:p-16 flex flex-col items-center justify-center text-center shadow-lg">
        
        {/* Decorative Floating Cards (Hidden on Mobile for best layout flow, visible on Desktop) */}
        {/* Left Floating Card */}
        <div className="hidden lg:block absolute left-6 top-16 w-72 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl transform rotate-[2.78deg] pointer-events-none text-left border border-neutral-400/10">
         <div className="flex justify-between items-center mb-3">
    <div>
      <p className="text-neutral-500 dark:text-gray-400 text-[9.09px] font-normal leading-4">Week Total</p>
      <p className="text-neutral-800 dark:text-white text-sm font-semibold leading-5">00:48:20</p>
    </div>
    <div className="flex items-center gap-[3.41px]">
      <div className="size-6 bg-neutral-50 dark:bg-gray-700 rounded-full flex items-center justify-center border border-neutral-400/20 dark:border-gray-600">
        <img src="/home/Bell.png" alt="bell" className="size-3.5 object-contain" />
      </div>
      <img className="size-6 rounded-full object-cover" src="/home/Avatar.png" alt="Avatar" />
    </div>
  </div>

  {/* Input Control Bar */}
  <div className="w-full bg-neutral-50 dark:bg-gray-700/50 rounded-full p-1 pl-2.5 pr-[3.41px] flex justify-between items-center text-[9.09px] mb-3 border border-neutral-400/20 dark:border-gray-600/40">
    <span className="text-neutral-400 dark:text-gray-400 truncate max-w-[110px] leading-4">
      What will you be working on?
    </span>
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <img src="/home/Tag.png" alt="tag" className="size-3 object-contain opacity-60" />
        <div className="w-[0.65px] h-2.5 bg-neutral-400/20 dark:bg-gray-600" />
        <img src="/home/CurrencyDollar.png" alt="dollar" className="size-3 object-contain opacity-60" />
        <div className="w-[0.65px] h-2.5 bg-neutral-400/20 dark:bg-gray-600" />
        <span className="text-black dark:text-white font-semibold leading-4">00:00:00</span>
      </div>
      <button 
        type="button" 
        className="h-6 px-3.5 py-1.5 bg-emerald-500 text-white font-semibold text-[9.09px] rounded-full shadow-[0px_0px_0px_0.56px_rgba(129,213,251,1)] flex items-center justify-center"
      >
        Start
      </button>
    </div>
  </div>

  {/* Activity List Log Container */}
  <div className="bg-white dark:bg-gray-800 rounded-lg border border-neutral-400/20 dark:border-gray-700 overflow-hidden text-[9.09px]">
    
    {/* Log Block Title Row */}
    <div className="bg-neutral-50 dark:bg-gray-700/40 px-2.5 py-2 flex justify-between items-center border-b border-neutral-400/20 dark:border-gray-700">
      <span className="text-neutral-500 dark:text-gray-400 font-medium leading-4">Today</span>
      <span className="text-neutral-500 dark:text-gray-400 font-medium leading-4">
        Total: <b className="text-neutral-800 dark:text-white font-semibold">35:00</b>
      </span>
    </div></div>
        </div>

        {/* Right Floating Card */}
<div className="hidden lg:block absolute right-8 top-12 w-80 bg-white dark:bg-gray-800 rounded-xl p-3.5 shadow-xl transform rotate-[-4.13deg] pointer-events-none text-left border border-neutral-400/10 overflow-hidden">
  
  {/* Header row */}
  <div className="flex justify-between items-center mb-3">
    <div>
      <p className="text-neutral-500 dark:text-gray-400 text-[9.09px] font-normal leading-4">Week Total</p>
      <p className="text-neutral-800 dark:text-white text-sm font-semibold leading-5">00:48:20</p>
    </div>
    <div className="flex items-center gap-[3.41px]">
      <div className="size-6 bg-neutral-50 dark:bg-gray-700 rounded-full flex items-center justify-center border border-neutral-400/20 dark:border-gray-600">
        <img src="/home/Bell.png" alt="bell" className="size-3.5 object-contain" />
      </div>
      <img className="size-6 rounded-full object-cover" src="/home/Avatar.png" alt="Avatar" />
    </div>
  </div>

  {/* Input Control Bar */}
  <div className="w-full bg-neutral-50 dark:bg-gray-700/50 rounded-full p-1 pl-2.5 pr-[3.41px] flex justify-between items-center text-[9.09px] mb-3 border border-neutral-400/20 dark:border-gray-600/40">
    <span className="text-neutral-400 dark:text-gray-400 truncate max-w-[110px] leading-4">
      What will you be working on?
    </span>
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5">
        <img src="/home/Tag.png" alt="tag" className="size-3 object-contain opacity-60" />
        <div className="w-[0.65px] h-2.5 bg-neutral-400/20 dark:bg-gray-600" />
        <img src="/home/CurrencyDollar.png" alt="dollar" className="size-3 object-contain opacity-60" />
        <div className="w-[0.65px] h-2.5 bg-neutral-400/20 dark:bg-gray-600" />
        <span className="text-black dark:text-white font-semibold leading-4">00:00:00</span>
      </div>
      <button 
        type="button" 
        className="h-6 px-3.5 py-1.5 bg-emerald-500 text-white font-semibold text-[9.09px] rounded-full shadow-[0px_0px_0px_0.56px_rgba(129,213,251,1)] flex items-center justify-center"
      >
        Start
      </button>
    </div>
  </div>

  {/* Activity List Log Container */}
  <div className="bg-white dark:bg-gray-800 rounded-lg border border-neutral-400/20 dark:border-gray-700 overflow-hidden text-[9.09px]">
    
    {/* Log Block Title Row */}
    <div className="bg-neutral-50 dark:bg-gray-700/40 px-2.5 py-2 flex justify-between items-center border-b border-neutral-400/20 dark:border-gray-700">
      <span className="text-neutral-500 dark:text-gray-400 font-medium leading-4">Today</span>
      <span className="text-neutral-500 dark:text-gray-400 font-medium leading-4">
        Total: <b className="text-neutral-800 dark:text-white font-semibold">35:00</b>
      </span>
    </div>

    {/* Entries Content Body */}
    <div className="p-2.5 space-y-2.5">
      {[
        { name: "Competitor Analysis", tag: "Project - Axel", dot: "bg-purple-500", time: "00:15:00", paid: true },
        { name: "Moodboarding", tag: "Project - Danzel", dot: "bg-orange-400", time: "00:20:00", paid: false },
      ].map((row, index) => (
        <div key={row.name} className={`flex flex-col gap-1 ${index !== 0 ? "pt-2.5 border-t border-neutral-100 dark:border-gray-700/40" : ""}`}>
          <div className="flex justify-between items-center">
            <span className="text-neutral-500 dark:text-gray-300 font-medium truncate max-w-[120px] leading-4">
              {row.name}
            </span>
            <div className="flex items-center gap-2">
              {row.paid && (
                <span className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 font-semibold px-1.5 py-0.5 rounded-full text-[6.82px] border border-green-200/20">
                  Paid
                </span>
              )}
              <div className="w-[0.65px] h-2.5 bg-neutral-400/20 dark:bg-gray-600" />
              <img src="/home/CurrencyDollar.png" alt="dollar" className="size-3 object-contain opacity-60" />
              <div className="w-[0.65px] h-2.5 bg-neutral-400/20 dark:bg-gray-600" />
              <span className="text-black dark:text-white font-semibold leading-4">{row.time}</span>
              <img src="/home/Play.png" alt="play" className="size-3 object-contain cursor-pointer" />
              <img src="/home/DotsThreeOutline.png" alt="options" className="size-3 object-contain cursor-pointer" />
            </div>
          </div>
          
          <div className="h-5 p-1.5 bg-neutral-50 dark:bg-gray-700/50 rounded-full border border-neutral-400/20 dark:border-gray-600 inline-flex items-center gap-1 w-max">
            <span className={`size-[4.86px] rounded-full ${row.dot}`} />
            <span className="text-neutral-800 dark:text-gray-300 text-[6.82px] font-semibold leading-3">
              {row.tag}
            </span>
          </div>
        </div>
      ))}
    </div>

  </div>


        </div>

        {/* Banner Core Content Groups */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-white text-2xl md:text-4xl lg:text-4xl font-semibold leading-tight tracking-tight">
            Take Control of <br className="hidden sm:inline" /> Your Time with Zoiko Time
          </h2>
          
          <p className="text-sky-50 text-base md:text-lg font-normal max-w-md leading-relaxed opacity-90">
            Track every minute and boost your productivity effortlessly.
          </p>

          <button 
            type="button"
            className="mt-4 bg-white hover:bg-neutral-50 dark:bg-white dark:hover:bg-neutral-100 text-neutral-800 font-semibold px-8 py-3.5 rounded-full text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            Contact Us
          </button>
        </div>

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
            className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-gray-800 p-8 sm:p-10 text-center shadow-2xl"
          >
            <button
              onClick={() => setShowDownload(false)}
              aria-label="Close"
              className="absolute right-5 top-5 text-neutral-400 transition hover:text-neutral-800 dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold text-#172C56 dark:text-white">
              Download the desktop app
            </h3>
            <div className="flex gap-6 justify-center items-center">
      {/* 2. Map through the platforms array */}
      {platforms.map((os) => (
        <a 
          key={os.name} 
          href="#" 
          className="flex flex-col items-center gap-4 group cursor-pointer"
        >
          <img className=" mt-5 flex h-14 w-14 items-center justify-center rounded-xl  group-hover:scale-105 transition-transform"
            src={os.icon}
          />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
            {os.name}
          </span>
        </a>
      ))}
    </div>
          </div>
        </div>
      )}
    </main>
  );
}