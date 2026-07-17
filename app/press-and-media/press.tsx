"use client";

import React, { useState } from "react";

/**
 * Press & Media page
 * - Next.js (app router) page component — app/press-and-media/press.tsx
 * - Tailwind CSS, dark mode via `dark:` classes (class-based dark mode)
 * - Fully responsive: stacks to 1 column on mobile, 2 on tablet, 3 on desktop
 */

const badgePill =
  "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200";

const cardBase =
  "rounded-xl border border-slate-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800";

const eyebrow =
  "text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

interface SectionHeadingProps {
  eyebrowText: string;
  title: string;
  subtitle?: string;
}

interface FilterPillsProps {
  items: string[];
  active: string;
  onChange: (item: string) => void;
}

interface Announcement {
  date: string;
  tag: string;
  tagClass: string;
  title: string;
  body: string;
}

interface PressRelease {
  date: string;
  title: string;
  body: string;
}

interface Statement {
  label: string;
  quote: string;
  body: string;
}

interface MediaKitItem {
  icon: string;
  title: string;
  body: string;
  cta: string;
}

interface AnalystItem {
  icon: string;
  title: string;
  body: string;
}

interface ArchiveItem {
  date: string;
  title: string;
  tag: string;
  tagClass: string;
}

/* ------------------------------------------------------------------ */
/* Small components                                                     */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrowText, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className={eyebrow}>{eyebrowText}</p>
      <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-7 text-slate-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function FilterPills({ items, active, onChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={
            active === item
              ? "rounded-full border border-teal-600/30 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-teal-700 dark:border-teal-500/40 dark:bg-teal-500/10 dark:text-teal-400"
              : "rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-500 hover:border-slate-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600"
          }
        >
          {item}
        </button>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Content data                                                         */
/* ------------------------------------------------------------------ */

const NAV_LINKS: string[] = [
  "Product",
  "Use Cases",
  "Trust & Governance",
  "Enterprise",
  "Pricing",
  "Resources",
];

const ANNOUNCEMENTS: Announcement[] = [
  {
    date: "2026-03-20",
    tag: "Product",
    tagClass: "bg-emerald-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
    title:
      "ZoikoTime Launches ISO/IEC 42001 AI Governance Compliance Layer Across All Enterprise Plans",
    body: "Full alignment with the international AI management standard — embedded in ZoikoTime's governance architecture and immediately available to all enterprise clients.",
  },
  {
    date: "2026-02-28",
    tag: "Corporate",
    tagClass: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400",
    title: "ZoikoTime Expands Global Operations — 40 Jurisdictions Now Supported Natively",
    body: "Native policy logic for 40+ jurisdictions operational across the ZoikoTime platform — covering major labour law frameworks in Europe, the Americas, APAC, and ANZ.",
  },
  {
    date: "2026-01-15",
    tag: "Partnership",
    tagClass: "bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400",
    title: "ZoikoTime Achieves SOC 2 Type II and ISO 27001 Certification",
    body: "ZoikoTime has completed SOC 2 Type II audit and ISO 27001 certification — providing enterprise clients and procurement teams with third-party verified security assurance.",
  },
];

const PRESS_RELEASES: PressRelease[] = [
  {
    date: "20 March 2026",
    title: "ZoikoTime Introduces Real-Time Workforce Assurance Framework for Regulated Industries",
    body: "Enterprise-grade compliance and evidence generation capabilities extended to healthcare, financial services, and public sector organisations — providing regulator-aligned workforce governance infrastructure from day one of deployment.",
  },
  {
    date: "14 February 2026",
    title: "ZoikoTime Platform Processes £2.1 Billion in Controlled Financial Exposure Across Enterprise Client Base",
    body: "Cumulative financial exposure identified and controlled through ZoikoTime's verification and anomaly detection infrastructure across all enterprise clients — representing verified, recovered value for finance teams worldwide.",
  },
  {
    date: "08 January 2026",
    title: "ZoikoTime Human-in-Command AI Architecture Achieves Full EU AI Act High-Risk System Compliance",
    body: "ZoikoTime's tiered human oversight model, explainable AI reasoning, and continuous validation infrastructure satisfy all applicable EU AI Act requirements for high-risk AI systems deployed in workforce management contexts.",
  },
  {
    date: "15 November 2025",
    title: "ZoikoTime Launches Enterprise Sovereign Tier — Dedicated Infrastructure for the Most Demanding Compliance Environments",
    body: "A dedicated single-tenant infrastructure option for enterprises with the most exacting compliance, residency, and governance requirements — including custom SLA terms and private cloud deployment options.",
  },
  {
    date: "03 October 2025",
    title: "ZoikoTime Completes Series A Funding Round — Accelerating Global Enterprise Expansion",
    body: "ZoikoTime has completed a Series A funding round to accelerate international expansion, deepen enterprise product capabilities, and expand the platform's multi-jurisdiction compliance coverage across additional global markets.",
  },
];

const STATEMENTS: Statement[] = [
  {
    label: "Workforce Philosophy",
    quote: "ZoikoTime is designed to support accountability and fairness — not surveillance.",
    body: "ZoikoTime captures verification signals — not screenshots, keystrokes, or continuous monitoring of screen content. The system verifies that the right person is working and that policy-defined conditions are met. It does not monitor what people are doing second-by-second. Sensitivity is configurable by role and risk profile.",
  },
  {
    label: "AI & Automation",
    quote: "ZoikoTime uses explainable AI systems with human-in-command decision models.",
    body: "Every AI-driven decision includes a human-readable explanation of the signals used, the policy applied, and the confidence score assigned. No automated disciplinary outcomes are produced. Humans retain decision authority at every consequential point. This is a design principle — not a product feature.",
  },
  {
    label: "Data & Privacy",
    quote: "ZoikoTime operates under privacy-first principles and policy-driven data collection.",
    body: "Data minimisation is enforced at the system architecture level — not dependent on configuration or individual discretion. Only the signals required for the stated governance purpose are collected. Purpose limitation is enforced systemically. Privacy-by-design is a foundational requirement, not an add-on.",
  },
  {
    label: "Enterprise Use",
    quote: "ZoikoTime is built for organisational governance, not individual monitoring.",
    body: "ZoikoTime's outputs are used by HR, Finance, Compliance, and executive teams to govern workforce operations — not to monitor individual workers as an end in itself. The system is governed by employer-defined policies, applied consistently across all workers, and visible to the individuals it affects through the Transparency Center.",
  },
];

const MEDIA_KIT_ITEMS: MediaKitItem[] = [
  {
    icon: "🎨",
    title: "Logos & Brand Marks",
    body: "Primary logo, monochrome versions, icon mark, and wordmark — in SVG, PNG, and EPS formats. Light and dark background variants included.",
    cta: "Download Logos (ZIP)",
  },
  {
    icon: "🖥️",
    title: "Product Visuals",
    body: "Dashboard screenshots, architecture diagrams, and UI illustrations — at editorial resolution for print and web use. Approved for editorial reproduction.",
    cta: "Download Product Visuals",
  },
  {
    icon: "👤",
    title: "Executive Profiles & Bios",
    body: "Media-ready biographical summaries and approved headshots for Lennox McLeod (Founder & Executive Chairman) and senior leadership team members.",
    cta: "Download Executive Profiles",
  },
  {
    icon: "📐",
    title: "Brand Guidelines",
    body: "Colour system, typography specifications, logo usage rules, and brand tone guidelines — structured for editorial teams and agency partners.",
    cta: "Download Brand Guidelines",
  },
  {
    icon: "📄",
    title: "Company Boilerplate",
    body: "Standard approved company descriptions in three lengths (short, standard, extended) — for press releases, editorial notes, and analyst briefings.",
    cta: "Download Boilerplate",
  },
  {
    icon: "📊",
    title: "Platform Fact Sheet",
    body: "Key statistics, platform capabilities, and enterprise metrics — structured for inclusion in editorial, analyst, and investor contexts.",
    cta: "Download Fact Sheet",
  },
];

const ANALYST_ITEMS: AnalystItem[] = [
  {
    icon: "📊",
    title: "Platform Overview Briefing",
    body: "Authoritative overview of ZoikoTime's capabilities, architecture, market positioning, and competitive differentiation — structured for analyst briefing sessions.",
  },
  {
    icon: "⚙️",
    title: "Governance & Compliance Model",
    body: "Detailed governance architecture documentation covering the five-layer control system, AI oversight model, and compliance framework alignment — for institutional due diligence.",
  },
  {
    icon: "🌍",
    title: "Enterprise Use Cases & Market Positioning",
    body: "Structured analysis of the four primary workforce markets ZoikoTime serves, with use case depth, measured client outcomes, and competitive displacement analysis.",
  },
  {
    icon: "💰",
    title: "Financial Impact & ROI Model",
    body: "ZoikoTime's financial impact model — leakage identification methodology, ROI framework, and payback period analysis across enterprise workforce contexts.",
  },
];

const ARCHIVE_ITEMS: ArchiveItem[] = [
  {
    date: "2025-09-12",
    title: "ZoikoTime Launches Contractor Revenue Assurance Module — Verified Billing Across Gig Workforces",
    tag: "Product",
    tagClass: "bg-emerald-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
  },
  {
    date: "2025-08-04",
    title: "ZoikoTime Partners With Enterprise HRIS Providers — Full API Integration Available",
    tag: "Partnership",
    tagClass: "bg-amber-100 text-amber-800 dark:bg-amber-500/10 dark:text-amber-400",
  },
  {
    date: "2025-07-18",
    title: "ZoikoTime Introduces Evidence Capture for Audit-Grade Workforce Records",
    tag: "Product",
    tagClass: "bg-emerald-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
  },
  {
    date: "2025-06-01",
    title: "ZoikoTime Platform Reaches 1,000 Enterprise Client Milestone",
    tag: "Corporate",
    tagClass: "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400",
  },
  {
    date: "2025-04-22",
    title: "ZoikoTime Announces Multi-Jurisdiction Policy Engine — 30+ Countries at Launch",
    tag: "Product",
    tagClass: "bg-emerald-50 text-teal-700 dark:bg-teal-500/10 dark:text-teal-400",
  },
];

const CONTACT_ITEMS: string[] = [
  "Interview requests — executive and leadership availability",
  "Editorial fact-checking — product, platform, and company accuracy verification",
  "Broadcast and print media — background briefings and on-record statements",
  "Analyst enquiries — market positioning and platform capability clarification",
  "Partnership and integration announcements — official joint statements",
  "Media asset requests — logos, imagery, and approved visual materials",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */

export default function PressMediaPage() {
  const [announcementFilter, setAnnouncementFilter] = useState<string>("All");
  const [releaseFilter, setReleaseFilter] = useState<string>("All");
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      {/* NAVBAR */}
      

      {/* HERO */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-teal-50 to-white px-4 py-16 dark:border-gray-800 dark:from-teal-500/5 dark:to-gray-900 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            Press &amp; Media
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-500 dark:text-gray-400">
            Official announcements, media resources, and institutional information about
            ZoikoTime — a workforce assurance and performance intelligence platform.
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-5 text-slate-400 dark:text-gray-500">
            For press inquiries, media coverage, and official company materials, this page
            provides accurate and up-to-date information.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="w-full rounded-md bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0px_3px_10px_0px_rgba(0,157,140,0.24)] hover:bg-teal-700 sm:w-auto">
              ↓ Download Media Kit
            </button>
            <button className="w-full rounded-md border border-slate-200 bg-white px-6 py-2.5 text-sm font-medium text-slate-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto">
              Contact Press Team
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {["Official Source", "Verified Information", "Media-Ready Assets", "Institutional Positioning"].map(
              (badge) => (
                <span key={badge} className={badgePill}>
                  <span className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />
                  {badge}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ABOUT ZOIKOTIME */}
      <section className="border-b border-slate-200 px-4 py-16 dark:border-gray-800 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className={eyebrow}>About ZoikoTime</p>

          <div className="mt-8">
            <span className="font-serif text-5xl leading-none text-teal-600 dark:text-teal-400">
              &ldquo;
            </span>
            <p className="-mt-6 font-serif text-xl leading-9 text-slate-900 dark:text-gray-100 sm:text-2xl">
              ZoikoTime is not a surveillance product. It is a governance-driven system
              designed to support responsible workforce management.
            </p>
          </div>

          <p className="mt-8 text-base leading-6 text-slate-500 dark:text-gray-400">
            ZoikoTime is an enterprise workforce assurance and performance intelligence
            platform designed to help organisations manage distributed work with accuracy,
            accountability, and compliance.
          </p>
          <p className="mt-4 text-base leading-6 text-slate-500 dark:text-gray-400">
            Unlike traditional time-tracking tools, ZoikoTime provides policy-driven
            validation, anomaly detection, and audit-ready evidence — enabling organisations
            to reduce operational risk, improve performance visibility, and maintain
            defensible workforce records across every jurisdiction and employment model.
          </p>

          <div className="mt-8 inline-flex items-center justify-center rounded-full border border-teal-600/20 bg-emerald-50 px-5 py-2 text-xs font-bold text-teal-600 dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-400">
            ✓ This is the official company description for press and media use
          </div>
        </div>
      </section>

      {/* LATEST ANNOUNCEMENTS */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrowText="Announcements" title="Latest Announcements" />

          <div className="mt-8">
            <FilterPills
              items={["All", "Product", "Corporate", "Partnerships", "Compliance"]}
              active={announcementFilter}
              onChange={setAnnouncementFilter}
            />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {ANNOUNCEMENTS.map((item) => (
              <div key={item.title} className={`${cardBase} flex flex-col p-6`}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-400 dark:text-gray-500">
                    {item.date}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${item.tagClass}`}
                  >
                    {item.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold leading-6 text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-xs leading-5 text-slate-500 dark:text-gray-400">
                  {item.body}
                </p>
                <a
                  href="#"
                  className="mt-5 text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  Read announcement →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS RELEASES */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrowText="Press Releases" title="Press Releases" />

          <div className="mt-8">
            <FilterPills
              items={["All", "Product", "Corporate", "Partnerships"]}
              active={releaseFilter}
              onChange={setReleaseFilter}
            />
          </div>

          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200 dark:divide-gray-800 dark:border-gray-800">
            {PRESS_RELEASES.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6"
              >
                <span className="shrink-0 font-mono text-xs font-bold text-slate-400 dark:text-gray-500 sm:w-32">
                  {item.date}
                </span>
                <div className="flex-1">
                  <h3 className="font-serif text-base font-semibold leading-6 text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-gray-400">
                    {item.body}
                  </p>
                </div>
                <a
                  href="#"
                  className="shrink-0 text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  Read Release →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA COVERAGE */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrowText="Media Coverage" title="Media Coverage" />
          <div className={`${cardBase} mx-auto mt-10 max-w-3xl px-6 py-10 text-center`}>
            <p className="text-base leading-6 text-slate-500 dark:text-gray-400">
              Media coverage will be featured here as ZoikoTime expands its public presence
              and media relationships.
            </p>
            <p className="mt-5 text-xs leading-5 text-slate-400 dark:text-gray-500">
              For editorial enquiries, interview requests, or media briefings, contact{" "}
              <br className="hidden sm:block" />
              press@zoikotime.com
            </p>
          </div>
        </div>
      </section>

      {/* OFFICIAL STATEMENTS */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrowText="Official Statements"
            title="Official Statements and Clarifications"
            subtitle="These are the official ZoikoTime positions on the topics most frequently raised by journalists, analysts, and enterprise stakeholders."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {STATEMENTS.map((s) => (
              <div
                key={s.label}
                className={`${cardBase} relative overflow-hidden border-l-[3px] !border-l-teal-600 p-6 dark:!border-l-teal-500`}
              >
                <p className={eyebrow}>{s.label}</p>
                <p className="mt-3 font-serif text-base leading-6 text-slate-900 dark:text-white">
                  &ldquo;{s.quote}&rdquo;
                </p>
                <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-gray-400">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEDIA KIT */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrowText="Media Kit"
            title="Media Kit"
            subtitle="All assets ready to use — logos, product visuals, executive bios, brand guidelines, and company boilerplate. No friction, no approval required for editorial use."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEDIA_KIT_ITEMS.map((item) => (
              <div key={item.title} className={`${cardBase} p-7`}>
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-gray-400">
                  {item.body}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-block text-xs font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                >
                  ↓ {item.cta}
                </a>
              </div>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-slate-900 px-6 py-10 text-center dark:bg-black">
            <div className="pointer-events-none absolute right-10 top-0 h-48 w-72 rounded-full bg-teal-500/10 blur-3xl" />
            <h3 className="relative text-base font-bold text-white sm:text-lg">
              Download the Complete ZoikoTime Media Kit
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-xs leading-5 text-white/60">
              All assets in a single structured bundle — logos, visuals, bios, guidelines, and
              boilerplate.
            </p>
            <button className="relative mt-6 rounded-md bg-teal-600 px-6 py-2.5 text-sm font-bold text-white shadow-[0px_4px_12px_0px_rgba(0,157,140,0.30)] hover:bg-teal-500">
              Download Complete Media Kit
            </button>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrowText="Leadership" title="Leadership for Media" />

          <div className={`${cardBase} mt-10 p-6 shadow-md sm:p-9`}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="h-20 w-20 shrink-0 rounded-2xl bg-zinc-500" />
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                  Lennox McLeod
                </h3>
                <p className="mt-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
                  Founder &amp; Executive Chairman — ZoikoTime® | Zoiko Group Inc.
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-gray-400">
              Lennox McLeod is the founder and Executive Chairman of Zoiko Group Inc. and the
              architect of ZoikoTime — a workforce assurance and performance intelligence
              platform built to address the governance, compliance, and financial risk gaps
              in enterprise workforce management. With a background spanning brand
              development, enterprise technology, and Caribbean and global market operations,
              McLeod has led the development of multiple brands across the Zoiko Group
              portfolio, with ZoikoTime representing the group&apos;s flagship enterprise SaaS
              platform. McLeod&apos;s core focus is on building governance-grade systems that
              help organisations operate with certainty — verified, defensible, and
              explainable — in an era when distributed and flexible workforce models have
              outpaced the governance infrastructure designed to manage them.
            </p>

            <div className="mt-6 rounded-r-md border-l-[3px] border-teal-600 bg-gray-50 p-5 dark:border-teal-500 dark:bg-gray-900">
              <p className="font-serif text-sm leading-6 text-slate-900 dark:text-gray-100">
                &ldquo;The gap between what organisations record and what they can actually
                prove has become a financial, legal, and compliance liability at scale.
                ZoikoTime exists to close that gap — with verified evidence, not
                assumptions.&rdquo;
              </p>
            </div>

            <div className="mt-6 flex justify-center ">
              <button className="rounded-md border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700">
                Request Interview
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOR ANALYSTS */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrowText="For Analysts"
            title="For Analysts and Institutional Stakeholders"
            subtitle="Structured resources for equity analysts, industry analysts, institutional investors, and strategic partners requiring authoritative platform and market positioning information."
          />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ANALYST_ITEMS.map((item) => (
              <div key={item.title} className={`${cardBase} p-7`}>
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-gray-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-gray-50 px-6 py-8 text-center dark:border-gray-700 dark:bg-gray-800">
            <p className="text-sm leading-6 text-slate-500 dark:text-gray-400">
              For custom briefing sessions, structured analyst calls, or institutional
              partnership enquiries, contact the press team directly.
            </p>
            <button className="mt-5 rounded-md bg-teal-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0px_3px_10px_0px_rgba(0,157,140,0.24)] hover:bg-teal-700">
              Request Analyst Briefing →
            </button>
          </div>
        </div>
      </section>

      {/* PRESS CONTACT */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrowText="Press Contact" title="Press Contact" />

          <div className={`${cardBase} mt-10 p-6 shadow-md sm:p-9`}>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  ZoikoTime Press &amp; Communications
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-gray-400">
                  For media enquiries, interview requests, editorial fact-checking, and
                  official statements — the ZoikoTime press team aims to respond to all media
                  enquiries within one business day.
                </p>

                <div className="mt-6 rounded-md border border-teal-600/20 bg-emerald-50 px-4 py-3 text-center dark:border-teal-500/20 dark:bg-teal-500/10">
                  <span className="text-sm font-bold text-teal-700 dark:text-teal-400">
                    press@zoikotime.com
                  </span>
                </div>

                <div className="mt-3 rounded-md bg-gray-50 px-4 py-3 text-center dark:bg-gray-900">
                  <span className="text-xs font-semibold text-slate-400 dark:text-gray-500">
                    ⏱ Response target: 1 business day for media enquiries
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  We handle enquiries regarding:
                </h3>
                <ul className="mt-4 space-y-3">
                  {CONTACT_ITEMS.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-5 text-slate-500 dark:text-gray-400">
                      <span className="shrink-0 font-bold text-teal-600 dark:text-teal-400">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHIVE */}
      <section className="bg-gray-50 px-4 py-16 dark:bg-gray-800/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrowText="Archive" title="Archive" />

          <div className="mt-10 divide-y divide-slate-200 dark:divide-gray-800">
            {ARCHIVE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <span className="shrink-0 font-mono text-xs text-slate-400 dark:text-gray-500 sm:w-24">
                  {item.date}
                </span>
                <span className="flex-1 text-sm font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </span>
                <span
                  className={`shrink-0 self-start rounded-full px-2.5 py-1 text-xs font-bold sm:self-auto ${item.tagClass}`}
                >
                  {item.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="relative overflow-hidden border-t-[3px] border-teal-600 bg-teal-50 px-4 py-20 text-center dark:border-teal-500 dark:bg-teal-500/10 sm:px-6 lg:px-8">
        <p className="text-[10px] font-bold uppercase tracking-wider text-teal-500 dark:text-teal-400">
          For Media, Analysts &amp; Partners
        </p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
          For Media, Analysts, and Partners
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 dark:text-gray-400">
          Everything you need to report on, brief about, or partner with ZoikoTime —
          available through one press contact and one media kit download.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button className="w-full rounded-md bg-teal-600 px-8 py-3 text-sm font-semibold text-white shadow-[0px_4px_12px_0px_rgba(0,157,140,0.35)] hover:bg-teal-700 sm:w-auto">
            Contact Press Team
          </button>
          <button className="w-full rounded-md border border-teal-600 px-8 py-3 text-sm font-medium text-teal-600 hover:bg-teal-100 dark:text-teal-400 dark:hover:bg-teal-500/10 sm:w-auto">
            Request Briefing
          </button>
        </div>
      </section>
    </div>
  );
}