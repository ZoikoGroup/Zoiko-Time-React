"use client";

import React, { useState } from "react";
import { Search, Plus, Minus, HelpCircle } from "lucide-react";

interface Resource {
  title: string;
  desc: string;
  categories: string[];
  status: "Current" | "Under Review" | "Superseded";
  access: "Public" | "Public Summary" | "Controlled" | "Customer-specific";
  detailScope: string;
  detailLimit: string;
  detailNotes: string;
}

const resourcesData: Resource[] = [
  {
    title: "Security Controls Overview",
    desc: "How access, encryption, logging and change management are handled.",
    categories: ["Security"],
    status: "Current",
    access: "Public",
    detailScope: "ZoikoTime Core platform, databases, cloud host clusters, and APIs.",
    detailLimit: "Does not cover customer-managed local devices or third-party client integrations.",
    detailNotes: "Aligned with SOC 2 Type II controls. Audit reports are renewed annually in Q3."
  },
  {
    title: "Independent Security Assessment Summary",
    desc: "Public summary of an independent, point-in-time assessment.",
    categories: ["Security", "Assurance"],
    status: "Current",
    access: "Public Summary",
    detailScope: "External penetration test, security config audit, and architecture review.",
    detailLimit: "Point-in-time assessment performed in November 2025.",
    detailNotes: "Zero critical or high-severity findings remained unresolved at completion of testing."
  },
  {
    title: "Vulnerability Disclosure Policy",
    desc: "How to report a security issue and what to expect.",
    categories: ["Security"],
    status: "Current",
    access: "Public",
    detailScope: "Public-facing domain environments, API services, and mobile applications.",
    detailLimit: "Does not authorize active exploitation attempts, DDoS, or load testing.",
    detailNotes: "Safe harbor applies to security researchers submitting reports under active guidelines."
  },
  {
    title: "Privacy Notice",
    desc: "What personal data is processed, why, and the rights available.",
    categories: ["Privacy"],
    status: "Current",
    access: "Public",
    detailScope: "Workspace admin portals, worker mobile apps, and website cookies.",
    detailLimit: "Subject to region-specific disclosures (GDPR/CCPA/CPRA).",
    detailNotes: "Defines the precise boundaries between work activities and private personal data."
  },
  {
    title: "Data Processing & Sub-processors",
    desc: "Categories of processing and the sub-processors used.",
    categories: ["Privacy"],
    status: "Current",
    access: "Public",
    detailScope: "Third-party data processors engaged in core hosting, analytics, and notifications.",
    detailLimit: "Lists only sub-processors that handle personal identity parameters.",
    detailNotes: "All processors are bound by Standard Contractual Clauses (SCCs) and active DPAs."
  },
  {
    title: "Data Retention & Deletion Overview",
    desc: "Default retention periods and how deletion works.",
    categories: ["Privacy"],
    status: "Current",
    access: "Public",
    detailScope: "Time classification logs, screenshot buffers, and deleted worker profiles.",
    detailLimit: "Retention values are subject to customized schedules set by tenant admins.",
    detailNotes: "Guarantees complete hard-deletion within 30 days of the retention expiration date."
  },
  {
    title: "Anti-Surveillance Principles",
    desc: "The monitoring signals ZoikoTime never collects.",
    categories: ["Privacy"],
    status: "Current",
    access: "Public",
    detailScope: "Product design principles and default system monitoring configurations.",
    detailLimit: "Relies on tenant admins using recommended privacy-first settings.",
    detailNotes: "Explicitly states that keystroke logs and screen recordings are structurally disabled."
  },
  {
    title: "Human-in-Command Controls",
    desc: "Why consequential decisions always require a person.",
    categories: ["Human-in-Command"],
    status: "Current",
    access: "Public",
    detailScope: "Workforce analysis summaries, classification review tracks, and shift edits.",
    detailLimit: "AI recommendations are strictly advisory and require manager validation.",
    detailNotes: "Mitigates algorithmic bias risks in compliance with regional labor regulations."
  },
  {
    title: "AI Governance Summary",
    desc: "How AI is bounded — and what it never decides.",
    categories: ["AI Governance"],
    status: "Current",
    access: "Public",
    detailScope: "Large Language Models, automated task classifiers, and rule-matching routines.",
    detailLimit: "Models are trained strictly on synthetic data, never on tenant-specific user inputs.",
    detailNotes: "Fully compliant with the EU AI Act transparency and risk management mandates."
  },
  {
    title: "Model / Provider Data Handling",
    desc: "How model and provider data is handled and bounded.",
    categories: ["AI Governance"],
    status: "Under Review",
    access: "Public Summary",
    detailScope: "SaaS API endpoints used for processing prompt summaries and classifications.",
    detailLimit: "Provisional status pending complete verification of regional data boundaries.",
    detailNotes: "Contracts explicitly prohibit vendors from retaining inputs to train future models."
  },
  {
    title: "Accessibility Conformance Summary",
    desc: "Conformance work toward WCAG 2.2 AA, with known items.",
    categories: ["Accessibility"],
    status: "Current",
    access: "Public",
    detailScope: "Web admin portals, developer API docs, and worker mobile interfaces.",
    detailLimit: "Partial conformance in complex data charts; active updates are underway.",
    detailNotes: "Accessibility enhancement sweeps are targeted for late 2026 completion."
  },
  {
    title: "Service Status",
    desc: "Live component status and recent incident history.",
    categories: ["Status"],
    status: "Current",
    access: "Public",
    detailScope: "Uptime and response indicators of databases, authentication servers, and app sync.",
    detailLimit: "Calculations exclude planned and announced maintenance schedules.",
    detailNotes: "Historical availability records indicate an average uptime of 99.95%."
  },
  {
    title: "Governance & Assurance Framework",
    desc: "How governance, evidence and assurance are organized.",
    categories: ["Assurance"],
    status: "Current",
    access: "Public Summary",
    detailScope: "Corporate audit logs, executive policies, and regulatory compliance registers.",
    detailLimit: "Assurance indicators represent mappings rather than direct legal validation.",
    detailNotes: "Allows administrators to map system outcomes to global governance standards."
  },
  {
    title: "Regulator Brief",
    desc: "A due-diligence brief for regulators and reviewers.",
    categories: ["Assurance"],
    status: "Current",
    access: "Controlled",
    detailScope: "Legal compliance boundaries, exception approvals, and automated shift review audits.",
    detailLimit: "Full access requires signed NDA or formal regulatory agency request.",
    detailNotes: "Provides a thorough brief for legal advisors auditing automated labor systems."
  },
  {
    title: "Enterprise Approval Pack",
    desc: "A bundle assembled per engagement for approval.",
    categories: ["Assurance"],
    status: "Current",
    access: "Customer-specific",
    detailScope: "Enterprise deployment maps, security questionnaires, and architectural plans.",
    detailLimit: "Assembled specifically per enterprise onboarding scope.",
    detailNotes: "Includes custom configurations and designated account contact information."
  },
  {
    title: "Security Overview (2025)",
    desc: "Prior version, kept for reference only.",
    categories: ["Security"],
    status: "Superseded",
    access: "Public",
    detailScope: "Historical infrastructure definitions and previous security parameters.",
    detailLimit: "Deprecated; replaced by the 2026 security controls policy.",
    detailNotes: "Maintained publicly for compliance continuity and backward-audit logs."
  }
];

const categoryPills = [
  "All",
  "Security",
  "Privacy",
  "Human-in-Command",
  "AI Governance",
  "Accessibility",
  "Status",
  "Assurance"
];

export default function TrustCenterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndices, setExpandedIndices] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (idx: number) => {
    setExpandedIndices((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Filtering Logic
  const filteredResources = resourcesData.filter((resource) => {
    const matchesCategory =
      activeCategory === "All" || resource.categories.includes(activeCategory);
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 dark:bg-gray-900 dark:text-white font-sans transition-colors duration-150 py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10A28D] dark:text-teal-400">
            Trust Center
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-850 dark:text-white tracking-tight">
            The current source of truth.
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Security, privacy, human-authority, AI, accessibility and assurance
            information — read it right here, with clear status, scope, and
            limitations. No email, no forms, no lead capture.
          </p>
        </div>

        {/* Search & Categories Box */}
        <div className="space-y-6 mb-12">
          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-450">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search Trust resources…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3.5 bg-white border border-gray-250 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] outline-none focus:border-teal-500 transition-all dark:bg-slate-900 dark:border-slate-800 text-sm font-medium"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
            {categoryPills.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full border transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-slate-800 text-white border-slate-800 dark:bg-teal-600 dark:border-teal-600"
                      : "bg-white text-slate-700 border-gray-250 hover:bg-slate-100 hover:text-slate-900 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-800 dark:hover:bg-slate-850"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resources Statistics and List Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-slate-800 pb-3 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-450 dark:text-slate-500">
            Resource Directory
          </span>
          <span className="text-xs font-medium text-slate-455 dark:text-slate-500">
            {filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}
          </span>
        </div>

        {/* Resources Dynamic Accordion List */}
        <div className="space-y-4">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, idx) => {
              const isExpanded = !!expandedIndices[idx];

              // Determine status badge classes
              let statusBadgeStyle = "";
              if (resource.status === "Current") {
                statusBadgeStyle = "bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400";
              } else if (resource.status === "Under Review") {
                statusBadgeStyle = "bg-orange-50 text-yellow-750 dark:bg-orange-950/20 dark:text-yellow-400";
              } else if (resource.status === "Superseded") {
                statusBadgeStyle = "bg-zinc-100 text-gray-500 dark:bg-slate-800 dark:text-slate-400";
              }

              // Determine access badge classes
              let accessBadgeStyle = "";
              if (resource.access === "Public") {
                accessBadgeStyle = "bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400";
              } else if (resource.access === "Public Summary") {
                accessBadgeStyle = "bg-indigo-50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400";
              } else if (resource.access === "Controlled") {
                accessBadgeStyle = "bg-orange-50 text-yellow-750 dark:bg-orange-950/20 dark:text-yellow-400";
              } else if (resource.access === "Customer-specific") {
                accessBadgeStyle = "bg-violet-55 text-indigo-700 dark:bg-violet-950/20 dark:text-indigo-400";
              }

              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.02)] transition-all dark:bg-slate-900 dark:border-slate-800 overflow-hidden"
                >
                  {/* Clickable Header Bar */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="p-5 md:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-slate-850 dark:text-white font-sans leading-tight">
                        {resource.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal max-w-2xl">
                        {resource.desc}
                      </p>

                      {/* Badges row */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold ${statusBadgeStyle}`}>
                          <span className={`h-1 w-1 rounded-full shrink-0 ${
                            resource.status === "Current" ? "bg-teal-650" : resource.status === "Under Review" ? "bg-orange-500" : "bg-gray-400"
                          }`} />
                          {resource.status}
                        </span>
                        <span className={`inline-flex items-center rounded px-2 py-0.5 text-[10px] font-bold ${accessBadgeStyle}`}>
                          {resource.access}
                        </span>
                      </div>
                    </div>

                    {/* Toggle Button */}
                    <button className="h-7 w-7 rounded-full flex items-center justify-center border border-gray-200 text-teal-600 hover:bg-slate-50 transition-colors shrink-0 dark:border-slate-800 dark:hover:bg-slate-850">
                      {isExpanded ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Detail Accordion Content */}
                  {isExpanded && (
                    <div className="border-t border-gray-100 bg-slate-50/50 p-6 space-y-4 dark:border-slate-855 dark:bg-slate-950/20 text-xs">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <span className="font-bold text-slate-400 uppercase tracking-wider block">Scope</span>
                          <p className="text-slate-700 dark:text-slate-300">{resource.detailScope}</p>
                        </div>
                        <div className="space-y-1">
                          <span className="font-bold text-slate-400 uppercase tracking-wider block">Limitations</span>
                          <p className="text-slate-700 dark:text-slate-300">{resource.detailLimit}</p>
                        </div>
                      </div>
                      <div className="space-y-1 pt-2 border-t border-gray-100 dark:border-slate-850">
                        <span className="font-bold text-slate-400 uppercase tracking-wider block">Important Notes</span>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{resource.detailNotes}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white border border-gray-200 rounded-2xl dark:bg-slate-900 dark:border-slate-800 space-y-2">
              <HelpCircle className="h-10 w-10 text-slate-300 mx-auto" />
              <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300">No resources found</h3>
              <p className="text-xs text-slate-400">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </div>

        {/* Informational Explanation Box */}
        <div className="mt-8 bg-emerald-50 rounded-xl p-5 border border-emerald-100 dark:bg-emerald-950/10 dark:border-emerald-900/30 text-center leading-relaxed">
          <p className="text-xs text-slate-700 dark:text-slate-300">
            <span className="text-teal-700 dark:text-teal-400 font-bold">Public evidence is open</span>
            {" — no work email, company details, or demo request. Controlled and customer-specific items show their access requirement in place. "}
            <span className="text-teal-705 dark:text-teal-400 font-bold">Under Review</span>
            {" is provisional; "}
            <span className="text-teal-705 dark:text-teal-400 font-bold">Superseded</span>
            {" points to the current version above; withdrawn or expired evidence isn’t shown as current. Trust browsing is informational — never a sales step, and never a trust score."}
          </p>
        </div>
      </div>
    </div>
  );
}
