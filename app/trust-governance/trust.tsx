"use client"
import Link from "next/link";
import React, { useState } from 'react';

// Define structures for our frameworks and compliance records
interface Framework {
  id: string;
  name: string;
  flag?: string;
}

interface ControlRow {
  article: string;
  requirement: string;
  implementation: string;
  evidence: string;
  status: 'Implemented' | 'In Progress' | 'Planned';
}

export default function TrustGovernance() {
  // Current active compliance framework tab state
  const [activeFramework, setActiveFramework] = useState<string>('gdpr');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Interactive audit workflow tab state
  const [activeAuditTab, setActiveAuditTab] = useState<number>(0);

  const frameworks: Framework[] = [
    { id: 'gdpr', name: 'GDPR', flag: '🇪🇺' },
    { id: 'soc2', name: 'SOC 2' },
    { id: 'iso27001', name: 'ISO 27001' },
    { id: 'iso42001', name: 'ISO 42001 (AI)' },
    { id: 'nist', name: 'NIST AI RMF' },
    { id: 'euai', name: 'EU AI Act' },
  ];

  // Mock matrix data scoped by selected framework id
  const matrixData: Record<string, ControlRow[]> = {
    gdpr: [
      {
        article: 'Art. 5',
        requirement: 'Data minimisation',
        implementation: 'Only necessary workforce signals collected — no surplus or speculative data capture at any layer',
        evidence: 'Data logs + schema documentation',
        status: 'Implemented',
      },
      {
        article: 'Art. 6',
        requirement: 'Lawful basis',
        implementation: 'Configurable lawful basis selection per jurisdiction — legitimate interest, contract, or consent as applicable',
        evidence: 'Policy configuration logs + basis register',
        status: 'Implemented',
      },
      {
        article: 'Art. 25',
        requirement: 'Privacy by design',
        implementation: 'Privacy controls embedded in system architecture — not bolted on after deployment. Default settings are most privacy-protective.',
        evidence: 'System architecture proof + design documentation',
        status: 'Implemented',
      },
      {
        article: 'Art. 30',
        requirement: 'Records of processing',
        implementation: 'Automated, continuously maintained records of all processing activities — no manual maintenance required',
        evidence: 'Processing registry — auto-generated, exportable',
        status: 'Implemented',
      },
      {
        article: 'Art. 32',
        requirement: 'Security of processing',
        implementation: 'Encryption at rest and in transit, RBAC, immutable audit logs, and tamper-evident evidence records',
        evidence: 'Security logs + penetration test summary',
        status: 'Implemented',
      },
      {
        article: 'Art. 33',
        requirement: 'Breach notification',
        implementation: 'Automated breach detection with configurable notification workflows — 72-hour regulatory notification timelines supported',
        evidence: 'Incident logs + notification records',
        status: 'Implemented',
      },
    ],
    soc2: [
      {
        article: 'CC 6.1',
        requirement: 'Access Control',
        implementation: 'Logical access controls managed through enterprise identity providers with multi-factor authentication enforced.',
        evidence: 'IdP integration configuration + user provisioning audits',
        status: 'Implemented',
      },
    ],
    iso27001: [
      {
        article: 'A.8.2',
        requirement: 'Information Classification',
        implementation: 'Data categorized automatically by sensitivity with localized context labels mapped directly across compliance zones.',
        evidence: 'Asset inventory logs + metadata schema mapping',
        status: 'Implemented',
      }
    ],
    iso42001: [
      {
        article: 'Clause 6',
        requirement: 'AI Impact Assessment',
        implementation: 'Continuous evaluation algorithm assessing workforce outcomes and alignment limits autonomously.',
        evidence: 'AIA system outputs + logic trace telemetry',
        status: 'Implemented',
      }
    ],
    nist: [
      {
        article: 'Govern 1.2',
        requirement: 'Risk Culture Establishment',
        implementation: 'Distributed organizational thresholds enforced dynamically across execution nodes based on liability profiles.',
        evidence: 'Policy engines configurations + authorization logs',
        status: 'Implemented',
      }
    ],
    euai: [
      {
        article: 'Art. 14',
        requirement: 'Human Oversight System',
        implementation: 'Engineered interfaces providing intuitive overrides and validation windows to human actors for all score states.',
        evidence: 'Control UI snapshot logs + human intervention trace',
        status: 'Implemented',
      }
    ]
  };

  // Safe accessor to retrieve items or fallback to sample array
  const currentRows = matrixData[activeFramework] || matrixData['gdpr'];

  // Filter rows based on search input query string
  const filteredRows = currentRows.filter(
    (row) =>
      row.requirement.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.implementation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.article.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const layers = [
    {
      icon: '⚙️',
      title: 'Policy Engine',
      description: 'All assurance and intelligence functions are governed by a configurable policy engine — jurisdiction-aware, role-specific, and auditable. No uncontrolled AI behaviour.',
    },
    {
      icon: '🧠',
      title: 'AI Intelligence Layer',
      description: 'Explainable AI that produces human-readable reasoning for every decision — no black-box outputs. Every confidence score is traceable to its input signals and the logic applied.',
    },
    {
      icon: '📂',
      title: 'Evidence Layer',
      description: 'Every workforce action generates a tamper-evident evidence record — automatically, at the point of occurrence. No retrospective reconstruction, no manual compilation.',
    },
    {
      icon: '👤',
      title: 'Human Oversight Layer',
      description: 'Human-in-command at every consequential decision point — the AI surfaces risk and intelligence, humans retain decision authority. No automated disciplinary outcomes, ever.',
    },
  ];

  const tiers = [
    {
      tier: 'Tier 1 — Automated',
      tierBg: 'bg-emerald-50 text-teal-700 dark:bg-emerald-950/40 dark:text-emerald-400',
      condition: 'High confidence (90–100) — all signals within policy threshold',
      action: 'Session accepted, payroll approved, evidence record created — no human intervention required',
      role: 'Review available on demand — human can query any record at any time',
    },
    {
      tier: 'Tier 2 — Human Review',
      tierBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950/40 dark:text-amber-400',
      condition: 'Medium confidence (70–89) — one or more signals below threshold',
      action: 'Session flagged, billing held, review workflow initiated — human review required before resolution',
      role: 'Human reviews flagged session with full evidence and AI reasoning — makes final determination',
    },
    {
      tier: 'Tier 3 — Human Decision',
      tierBg: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400',
      condition: 'Low confidence (<70) — significant verification failure detected',
      action: 'Session restricted, escalation triggered, case created — human decision required before any action',
      role: 'Human makes final decision with full forensic evidence — AI provides intelligence, not outcome',
    },
  ];
  
  const tableOfContents = [
    { id: '01', text: 'Executive Summary — System Purpose and Scope' },
    { id: '02', text: 'System Classification — AI Act Risk Category' },
    { id: '03', text: 'Governance Model — Four-Layer Architecture' },
    { id: '04', text: 'Human Oversight Model — Tiered Decision Framework' },
    { id: '05', text: 'Data Governance — Minimisation, Retention, Residency' },
    { id: '06', text: 'Risk Management — Continuous Classification Engine' },
    { id: '07', text: 'Auditability — Immutable Logs and Full Traceability' },
    { id: '08', text: 'Ethical Framework — Fairness, Transparency, Accountability', isTall: true },
    { id: '09', text: 'Compliance Alignment — GDPR, ISO, SOC 2, EU AI Act' },
    { id: '10', text: 'Limitations & Disclosures — Honest System Boundaries' }
  ];
  
  const Foundations = [
    {
      icon: '⚖️',
      title: 'Fairness',
      desc: 'Consistent policy application across all workers, roles, and jurisdictions — the same standards applied equally, with no bias in detection, scoring, or enforcement based on individual characteristics.',
    },
    {
      icon: '🔍',
      title: 'Transparency',
      desc: 'Employees can understand what is collected, how it is used, and what decisions have been made about their sessions — visible through the Transparency Center and available on request.',
    },
    {
      icon: '👤',
      title: 'Accountability',
      desc: 'Every decision is attributed — to the AI reasoning that produced it and the human who confirmed it. No unattributed outcomes, no decisions without an auditable record of how they were reached.',
    },
    {
      icon: '🌱',
      title: 'Workforce Impact Consideration',
      desc: 'Every product decision is assessed for its impact on workforce dignity and employee rights — verification that protects the organisation without diminishing the people in it is a non-negotiable design requirement.',
    },
  ];

  // Dynamic Content Matrix for Audit Simulations Scenarios
  const auditScenarios = [
    {
      title: 'Payroll Audit — Automated Evidence Generation',
      badge: 'HMRC-compatible format',
      steps: [
        { id: '01', title: 'Auditor Requests Records', desc: 'Payroll auditor submits a request for all workforce time records for Q1 2026 — covering 847 employees across 3 jurisdictions.', tags: ['Scope: Q1 2026', '847 employees', '3 jurisdictions'] },
        { id: '02', title: 'System Retrieves Session Records', desc: 'All session records for the requested period are retrieved — time logs, identity validation status, confidence scores, and anomaly flags for every session.', tags: ['Time logs', 'Identity validation', 'Location verification'] },
        { id: '03', title: 'AI Provides Anomaly Explanation', desc: 'The system surfaces 14 flagged sessions with full AI reasoning — each anomaly explained in plain language with the confidence score, signals involved, and action taken.', tags: ['14 anomalies explained', 'AI reasoning logs', 'Confidence scores'] },
        { id: '04', title: 'Evidence Bundle Generated', desc: 'A complete audit-ready evidence package is assembled — timestamped records, policy compliance logs, integrity verification, and chain of custody for all 847 employees.', tags: ['Timestamped records', 'Policy compliance logs', 'SHA-256 integrity'] },
      ]
    },
    {
      title: 'Labour Compliance Audit — Structural Safety Validation',
      badge: 'Regulatory Compliant Format',
      steps: [
        { id: '01', title: 'Compliance Request Received', desc: 'Ministry or local authority requests absolute proof of jurisdictional operational hour limitation structures.', tags: ['Labour standards', 'Hour Caps'] },
        { id: '02', title: 'Architectural Rules Extraction', desc: 'System automatically packages historical localized break configurations, overtime structures, and opt-out data fields.', tags: ['Break records', 'Overtime constraints'] },
        { id: '03', title: 'Human Intervention Audit Trail', desc: 'System compiles instances where managers or human staff authorized exceptions, appending direct rationale logs.', tags: ['Override captures', 'Manager context'] },
        { id: '04', title: 'Verified Export Delivery', desc: 'Cryptographically sealed records generated automatically matching statutory requirements for digital audit submissions.', tags: ['SHA-256 Seal', 'Auditable manifest'] },
      ]
    },
    {
      title: 'Fraud Investigation — Forensic Evidence Synthesis',
      badge: 'Forensic Grade Export',
      steps: [
        { id: '01', title: 'Anomalous Node Identification', desc: 'Internal security teams flag high variance metrics or systemic identity mismatched logins on specific vectors.', tags: ['Security vector', 'Variance triggers'] },
        { id: '02', title: 'Identity Telemetry Extraction', desc: 'Retrieval of cryptographic credentials logs, hardware token checks, and verification state maps securely.', tags: ['Token verification', 'Access logs'] },
        { id: '03', title: 'Plain-Text Logical Sequence Maps', desc: 'AI constructs chronologically mapped reasoning files breaking down complex multi-signal failures into a plain-text brief.', tags: ['Logic flow maps', 'Signal timeline'] },
        { id: '04', title: 'Legal Counsel Export Secure Package', desc: 'Compiling immutable end-to-end telemetry into read-only forensically sound containers for review actions.', tags: ['Legal-ready export', 'Tamper evidence'] },
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-200 antialiased font-sans">
      
      {/* =========================================================
          SECTION 1: HERO / TRUST & GOVERNANCE OVERVIEW
          ========================================================= */}
      <section className="relative w-full bg-gradient-to-r from-teal-50/60 to-white dark:from-slate-900 dark:to-slate-950 py-16 px-4 md:py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-teal-500 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            Trust & Governance
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Governance, Compliance & <br className="hidden sm:block" />
            <span className="text-teal-500 dark:text-teal-400">Assurance Framework</span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg font-normal max-w-4xl mx-auto leading-relaxed px-2">
            ZoikoTime is designed to withstand regulatory scrutiny, procurement due diligence, and legal challenge — with full compliance mapping, audit workflow simulations, and board-ready documentation available to every enterprise client.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 px-4 sm:px-0">

            <Link
  href="/regulator-brief"
  className="w-full sm:w-auto px-6 h-12 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-base rounded-lg shadow-md transition-colors flex items-center justify-center"
>
  ↓ Download Regulator Brief
</Link>



           <a
  href="#compliance-matrix"
  className="w-full sm:w-auto px-6 h-12 border border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-600/5 font-medium text-base rounded-lg transition-colors bg-white dark:bg-slate-900 sm:bg-transparent flex items-center justify-center"
>
  Explore Compliance Matrix
</a>


          </div>

          {/* Compliant Standard Meta Badges */}
          <div className="flex flex-wrap justify-center items-center gap-2 pt-8 max-w-3xl mx-auto px-2">
            {frameworks.map((f) => (
              <div
                key={f.id}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white dark:bg-slate-900 rounded-full border border-teal-600/20 dark:border-teal-500/10 text-xs font-semibold text-teal-600 dark:text-teal-400 shadow-sm"
              >
                <span className="h-1.5 w-1.5 bg-teal-500 rounded-full shrink-0" />
                {f.flag && <span className="mr-0.5">{f.flag}</span>}
                {f.name}
              </div>
            ))}
          </div>
        </div>

        {/* Ambient Top Glow Orbs */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-b from-teal-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* =========================================================
          SECTION 2: COMPLIANCE MAPPING MATRIX (TABLE VIEW)
          ========================================================= */}
      <section 
  id="compliance-matrix"
  className="max-w-6xl mx-auto py-16 px-4 space-y-8"
>
        
        {/* Section Heading Context */}
        <div className="text-center space-y-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            Compliance Mapping Matrix
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Line-by-Line Compliance Control Alignment
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm md:text-base font-normal max-w-2xl mx-auto">
            Searchable, filterable, and exportable — a complete mapping of ZoikoTime's implementation against every major compliance framework, with evidence generated for each control.
          </p>
        </div>

        {/* Framework Interactive Segment Tab Switches */}
        <div className="flex flex-wrap items-center justify-center gap-1 bg-slate-200/60 dark:bg-slate-900/60 p-1 rounded-xl max-w-2xl mx-auto border border-slate-200 dark:border-slate-800">
          {frameworks.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFramework(f.id)}
              className={`flex-1 min-w-[110px] sm:min-w-[100px] text-center px-2 sm:px-3 py-2 text-xs md:text-sm font-semibold rounded-lg transition-all ${
                activeFramework === f.id
                  ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              {f.flag && <span className="mr-1">{f.flag}</span>}
              {f.name}
            </button>
          ))}
        </div>

        {/* Search Bar and Export Utility Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto pt-2">
          <div className="w-full sm:w-72 relative">
            <input
              type="text"
              placeholder="Search controls..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 px-4 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 rounded-lg focus:outline-none focus:border-teal-500 placeholder-slate-400 dark:placeholder-slate-500 text-slate-900 dark:text-white shadow-sm"
            />
          </div>
          
          {/* File Format Downloader Links */}
          <div className="flex items-center gap-2 self-start sm:self-auto text-xs font-semibold text-slate-500 dark:text-slate-400">
            <button className="h-9 px-4 rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              ↓ PDF
            </button>
            <button className="h-9 px-4 rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              ↓ Excel
            </button>
            <button className="h-9 px-4 rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm">
              ↓ API
            </button>
          </div>
        </div>

        {/* --- SCROLLABLE DATA MATRIX TABLE CONTAINER --- */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left min-w-[900px]">
              
              {/* Header Columns */}
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-400 w-28">Article</th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-400 w-44">Requirement</th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-400">ZoikoTime Implementation</th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-400 w-56">Evidence Generated</th>
                  <th className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-400 w-36">Status</th>
                </tr>
              </thead>

              {/* Rows List */}
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/70">
                {filteredRows.length > 0 ? (
                  filteredRows.map((row, index) => (
                    <tr 
                      key={index} 
                      className="hover:bg-slate-50/60 dark:hover:bg-slate-800/20 transition-colors group"
                    >
                      {/* Token Reference ID */}
                      <td className="px-6 py-4 text-xs font-bold text-teal-700 dark:text-teal-400 whitespace-nowrap">
                        {row.article}
                      </td>
                      
                      {/* Name Header */}
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {row.requirement}
                      </td>
                      
                      {/* Detailed Explainer */}
                      <td className="px-6 py-4 text-sm font-normal text-slate-500 dark:text-slate-400 leading-relaxed">
                        {row.implementation}
                      </td>
                      
                      {/* Evidence Format Artifact */}
                      <td className="px-6 py-4 text-sm font-normal text-slate-500 dark:text-slate-400">
                        {row.evidence}
                      </td>
                      
                      {/* Checked Status Capsule badge */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center justify-center px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-200/30">
                          ✓ {row.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-12 text-sm text-slate-400 dark:text-slate-600">
                      No matching framework controls found matching your queries.
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>
        </div>

      </section>

      {/* =========================================================
          SECTION 3: AUDIT WORKFLOW SIMULATIONS
          ========================================================= */}
      <section
  id="audit-simulation"
  className="w-full bg-white dark:bg-slate-900 py-16 text-slate-950 dark:text-white antialiased"
>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* --- HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-3">
              Audit Workflow Simulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Experience an Audit Before It Happens
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Step-by-step interactive walkthroughs of three audit scenarios — showing exactly what ZoikoTime produces when regulators, auditors, or investigators request evidence.
            </p>
          </div>

          {/* --- TABS NAVIGATION --- */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-1 shadow-sm overflow-x-auto max-w-full">
              <button 
                onClick={() => setActiveAuditTab(0)}
                className={`whitespace-nowrap rounded-lg px-4 sm:px-5 py-2.5 text-xs font-semibold transition ${
                  activeAuditTab === 0 
                    ? 'bg-teal-600 text-white shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                💰 Payroll Audit
              </button>
              <button 
                onClick={() => setActiveAuditTab(1)}
                className={`whitespace-nowrap rounded-lg px-4 sm:px-5 py-2.5 text-xs font-semibold transition ${
                  activeAuditTab === 1 
                    ? 'bg-teal-600 text-white shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                ⚖️ Labour Compliance Audit
              </button>
              <button 
                onClick={() => setActiveAuditTab(2)}
                className={`whitespace-nowrap rounded-lg px-4 sm:px-5 py-2.5 text-xs font-semibold transition ${
                  activeAuditTab === 2 
                    ? 'bg-teal-600 text-white shadow-sm' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                🔍 Fraud Investigation
              </button>
            </div>
          </div>

          {/* --- SIMULATION CARD CONTAINER --- */}
          <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-100/70 dark:shadow-none overflow-hidden">
            
            {/* Card Header */}
            <div className="bg-slate-50 dark:bg-slate-800/60 px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                {auditScenarios[activeAuditTab].title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-bold text-teal-600 dark:text-teal-400">
                <span className="h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
                Evidence Ready
              </div>
            </div>

            {/* Workflow Steps */}
            <div className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
              {auditScenarios[activeAuditTab].steps.map((step) => (
                <div key={step.id} className="p-6 sm:p-8 flex gap-4 sm:gap-6 items-start transition hover:bg-slate-50/40 dark:hover:bg-slate-800/30">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-teal-600/20 text-teal-600 dark:text-teal-400 font-bold text-xs flex items-center justify-center">
                    {step.id}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-6">{step.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span key={tag} className="bg-emerald-50 dark:bg-emerald-950/30 border border-teal-600/20 text-teal-700 dark:text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action/Package Footer Status */}
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border-t border-teal-600/20 px-6 sm:px-8 py-4 text-xs font-semibold text-teal-800 dark:text-emerald-400 flex items-center gap-2 leading-relaxed">
              <span role="img" aria-label="folder" className="text-sm flex-shrink-0">📁</span>
              <span>
                Audit-ready evidence package generated automatically — <strong>PDF/A-3 + JSON bundle</strong>, {auditScenarios[activeAuditTab].badge}. Preparation time: <strong>&lt; 4 minutes</strong>.
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 4: GOVERNANCE MODEL
          ========================================================= */}
      <section className="w-full bg-slate-100 dark:bg-slate-950 py-24 text-slate-900 dark:text-white antialiased">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          
          {/* --- HEADER --- */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-3">
              Governance Model
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              The ZoikoTime Governance Architecture
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Four governance layers — each with a defined function, clear accountability, and structured evidence output — working together to create a complete, defensible governance model.
            </p>
          </div>

          {/* --- FOUR GOVERNANCE LAYERS CARDS --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {layers.map((layer, index) => (
              <div 
                key={index} 
                className="relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 pt-10 shadow-sm overflow-hidden flex flex-col transition hover:shadow-md"
              >
                {/* Colored Top Border Gradient */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
                
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-teal-600/20 flex items-center justify-center text-xl mb-6">
                  {layer.icon}
                </div>
                
                {/* Card Title & Content */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-7">
                  {layer.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-6 mt-auto">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>

          {/* --- CONFIDENCE LEVELS MATRIX TABLE --- */}
          <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wide text-slate-400">
                    <th className="py-4 px-6 w-[20%]">Tier</th>
                    <th className="py-4 px-6 w-[25%]">Confidence Condition</th>
                    <th className="py-4 px-6 w-[30%]">System Action</th>
                    <th className="py-4 px-6 w-[25%]">Human Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-sm text-slate-700 dark:text-slate-300">
                  {tiers.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition">
                      {/* Badge Column */}
                      <td className="py-6 px-6 align-middle">
                        <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-bold tracking-tight text-center ${row.tierBg}`}>
                          {row.tier}
                        </span>
                      </td>
                      {/* Condition Description */}
                      <td className="py-6 px-6 font-normal leading-relaxed text-slate-700 dark:text-slate-300">
                        {row.condition}
                      </td>
                      {/* System Action Description */}
                      <td className="py-6 px-6 font-normal leading-relaxed text-slate-700 dark:text-slate-300">
                        {row.action}
                      </td>
                      {/* Human Role Description */}
                      <td className="py-6 px-6 font-normal leading-relaxed text-slate-700 dark:text-slate-300">
                        {row.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 5: DATA GOVERNANCE
          ========================================================= */}
      <section className="w-full max-w-6xl mx-auto px-4 py-16 flex flex-col items-center select-none">
        {/* Upper Tag */}
        <span className="text-center text-teal-600 text-xs font-bold font-sans uppercase tracking-wider mb-3">
          Data Governance
        </span>
        
        {/* Main Heading */}
        <h2 className="text-center text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold font-sans leading-10 mb-4">
          Data Governance by Design
        </h2>
        
        {/* Subheading Description */}
        <p className="max-w-[574px] text-center text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg font-normal font-sans leading-7 mb-14">
          Data governance is not a compliance checkbox in ZoikoTime — it is a system design requirement applied at every layer of data capture, processing, and retention.
        </p>
        
        {/* Grid Layout for Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Data Minimisation */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start transition-all duration-200 hover:shadow-md">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-xl mb-[21px]">
              <span>📏</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold font-sans leading-7 mb-[14.68px]">
              Data Minimisation
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal font-sans leading-6 text-left">
              Only the data required for the stated governance purpose is collected at any layer. No speculative, surplus, or future-use data capture — minimisation is enforced at the system architecture level, not just policy documentation.
            </p>
          </div>

          {/* Card 2: Purpose Limitation */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start transition-all duration-200 hover:shadow-md">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-xl mb-[21px]">
              <span>🎯</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold font-sans leading-7 mb-[14.68px]">
              Purpose Limitation
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal font-sans leading-6 text-left">
              Data collected for workforce assurance is used exclusively for that purpose. Cross-purpose use is prevented at system level — not reliant on policy compliance by individual users or administrators.
            </p>
          </div>

          {/* Card 3: Regional Controls */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start transition-all duration-200 hover:shadow-md">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-xl mb-[21px]">
              <span>🌍</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold font-sans leading-7 mb-[14.68px]">
              Regional Controls
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal font-sans leading-6 text-left">
              Data residency, processing jurisdiction, and cross-border transfer controls are configurable per deployment — aligned to GDPR, UK GDPR, CCPA, and other applicable jurisdictional requirements automatically.
            </p>
          </div>

          {/* Card 4: Retention Policies */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start transition-all duration-200 hover:shadow-md">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-xl mb-[21px]">
              <span>📅</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold font-sans leading-7 mb-[14.68px]">
              Retention Policies
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal font-sans leading-6 text-left">
              Automated retention schedules are applied per jurisdiction and data type — records are retained for exactly as long as required by applicable law and no longer, with deletion certificates provided at end of lifecycle.
            </p>
          </div>

          {/* Card 5: Encryption & Security */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start transition-all duration-200 hover:shadow-md">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-xl mb-[21px]">
              <span>🔐</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold font-sans leading-7 mb-[14.68px]">
              Encryption & Security
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal font-sans leading-6 text-left">
              AES-256 encryption at rest and TLS 1.3 in transit — applied to all workforce data from the moment of capture. Cryptographic integrity verification is performed on every evidence record at retrieval.
            </p>
          </div>

          {/* Card 6: Auditability */}
          <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-start transition-all duration-200 hover:shadow-md">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl flex items-center justify-center text-xl mb-[21px]">
              <span>📋</span>
            </div>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold font-sans leading-7 mb-[14.68px]">
              Auditability
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal font-sans leading-6 text-left">
              Immutable logs of all data access, processing decisions, and system actions — providing complete traceability from any data point to its origin, every access event, and any decision that used it.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 6: REGULATOR-FACING DOCUMENTATION
          ========================================================= */}
      <section className="w-full bg-slate-100 dark:bg-slate-950 py-16 md:py-24 select-none">
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start font-sans">
          
          {/* Left Column: Heading and Table of Contents */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col px-2 sm:px-0">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold font-sans uppercase tracking-wider mb-3">
              Regulator-Facing Documentation
            </span>
            
            <h2 className="text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold font-sans leading-tight mb-6">
              Board & Regulator<br />Submission Ready
            </h2>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base font-normal font-sans leading-7 mb-10 max-w-[480px]">
              A complete, structured governance document designed for submission to regulators, boards, and procurement due diligence teams — available for immediate download and distribution.
            </p>
            
            {/* Table of Contents Stack */}
            <div className="flex flex-col gap-3 max-w-[492px]">
              {tableOfContents.map((item) => (
                <div 
                  key={item.id} 
                  className={`w-full bg-white dark:bg-slate-900 rounded-lg p-4 flex items-center shadow-sm border border-slate-200 dark:border-slate-800 ${
                    item.isTall ? 'min-h-[80px]' : 'min-h-[56px]'
                  }`}
                >
                  <span className="text-teal-600 dark:text-teal-400 text-xs font-bold font-mono tracking-wider w-8 shrink-0">
                    {item.id}
                  </span>
                  <span className="text-slate-900 dark:text-white text-sm font-bold font-sans leading-6 ml-3">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Image & Framework Preview Card */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-end space-y-8 lg:pr-4 w-full">
            
            {/* Image Layer Container */}
            <div className="w-full max-w-[488px] aspect-[488/492] bg-zinc-300 dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-sm relative">
              <img 
                className="w-full h-full object-cover" 
                src="/trust-goverance/african.png" 
                alt="Governance overview visual documentation preview"
              />
            </div>

            {/* Governance Card Document View */}
            <div className="w-full max-w-[492px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border-2 border-teal-600/20 overflow-hidden flex flex-col">
              
              {/* Card Header Layer */}
              <div className="bg-teal-600 p-6 border-b border-white/10 text-left">
                <h3 className="text-white text-sm font-bold font-sans leading-6 mb-2">
                  ZoikoTime — Governance, Compliance & Assurance Framework
                </h3>
                <p className="text-white/60 text-xs font-normal font-sans leading-5">
                  Board and regulator submission document — structured for formal governance review
                </p>
              </div>

              {/* Document Meta Metrics Grid */}
              <div className="grid grid-cols-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <div className="p-4 sm:p-5 border-r border-b border-slate-200 dark:border-slate-800 flex flex-col justify-center min-h-[72px]">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold font-sans uppercase tracking-wide mb-1">Document Type</span>
                  <span className="text-slate-900 dark:text-white text-xs font-semibold font-sans leading-5">Governance Framework</span>
                </div>
                <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex flex-col justify-center min-h-[72px]">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold font-sans uppercase tracking-wide mb-1">AI Classification</span>
                  <span className="text-slate-900 dark:text-white text-xs font-semibold font-sans leading-5">High-Risk (EU AI Act)</span>
                </div>
                <div className="p-4 sm:p-5 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-center min-h-[72px]">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold font-sans uppercase tracking-wide mb-1">Oversight Model</span>
                  <span className="text-slate-900 dark:text-white text-xs font-semibold font-sans leading-5">Human-in-Command</span>
                </div>
                <div className="p-4 sm:p-5 flex flex-col justify-center min-h-[72px]">
                  <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold font-sans uppercase tracking-wide mb-1">Version</span>
                  <span className="text-slate-900 dark:text-white text-xs font-semibold font-sans leading-5">2026.1 — Current</span>
                </div>
              </div>

              {/* Compliance Badges Matrix */}
              <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex flex-wrap gap-2 items-center bg-white dark:bg-slate-900 min-h-[96px]">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-400 text-[11px] font-bold font-sans rounded-full border border-indigo-200 dark:border-indigo-800/40">
                  GDPR
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-teal-700 dark:bg-emerald-950/50 dark:text-emerald-400 text-[11px] font-bold font-sans rounded-full border border-teal-600/20 dark:border-teal-800/40">
                  SOC 2 Type II
                </span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-400 text-[11px] font-bold font-sans rounded-full border border-indigo-500/20 dark:border-indigo-800/40">
                  ISO 27001
                </span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-500 dark:bg-indigo-950/50 dark:text-indigo-400 text-[11px] font-bold font-sans rounded-full border border-indigo-500/20 dark:border-indigo-800/40">
                  ISO 42001
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400 text-[11px] font-bold font-sans rounded-full border border-amber-200 dark:border-amber-800/40">
                  EU AI Act
                </span>
                <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-400 text-[11px] font-bold font-sans rounded-full border border-amber-200 dark:border-amber-800/40">
                  NIST AI RMF
                </span>
              </div>

              {/* Action Bottom Section */}
              <div className="bg-emerald-50 dark:bg-emerald-950/40 p-4 w-full flex items-center justify-center">
                <button className="w-full max-w-[452px] bg-teal-600 hover:bg-teal-700 text-white font-bold font-sans text-sm py-3 px-4 rounded-lg shadow-md text-center transition-colors duration-200 cursor-pointer">
                  ↓ Download Governance & Assurance Framework
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 7: ETHICAL FOUNDATIONS
          ========================================================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 pt-10 pb-14 flex flex-col items-center select-none">
        <span className="text-center text-teal-600 dark:text-teal-400 text-xs font-bold font-sans uppercase tracking-wider mb-3">
          Ethical Framework
        </span>
        
        <h2 className="text-center text-slate-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-bold font-sans leading-tight mb-4">
          The Four Ethical Foundations
        </h2>
        
        <p className="max-w-[584px] text-center text-slate-500 dark:text-slate-400 text-sm sm:text-base md:text-lg font-normal font-sans leading-7 mb-14">
          Ethics are not aspirational in ZoikoTime — they are operational design requirements built into the system architecture and verifiable through the evidence it produces.
        </p>

        {/* Foundations Grid Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Foundations.map((item, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center transition-all duration-200 hover:shadow-md min-h-[350px] sm:min-h-[384px]"
            >
              <div className="w-12 h-12 flex items-center justify-center text-4xl mb-4 text-slate-700 dark:text-slate-300">
                {item.icon}
              </div>
              <h3 className="text-slate-900 dark:text-white text-lg font-bold font-sans leading-7 mb-3 min-h-[40px] sm:min-h-[56px] flex items-center justify-center">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal font-sans leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SECTION 8: GET STARTED CTA BANNER
          ========================================================= */}
      <section className="w-full bg-emerald-50 dark:bg-slate-900 relative overflow-hidden py-12 px-4 border-t-2 border-teal-600/30">
        <div className="max-w-[800px] mx-auto flex flex-col items-center select-none">
          <span className="text-center text-teal-500 dark:text-teal-400 text-xs font-bold font-sans uppercase tracking-wider mb-4">
            Get Started
          </span>

          <h2 className="text-center text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-extrabold font-sans leading-tight mb-6">
            Governance That <span className="text-teal-500 dark:text-teal-400">Withstands Any Scrutiny</span>
          </h2>

          <p className="max-w-[640px] text-center text-slate-700 dark:text-slate-300 text-sm sm:text-base md:text-lg font-normal font-sans leading-7 mb-10 px-2">
            Whether facing a regulatory inspection, board review, or procurement due diligence — ZoikoTime provides the compliance evidence, audit documentation, and governance framework to respond with confidence.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">

<Link
  href="/regulator-brief"
  className="w-full sm:w-auto px-6 h-12 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-base rounded-lg shadow-md transition-colors flex items-center justify-center"
>
  ↓ Download Regulator Brief
</Link>


            <a
  href="#audit-simulation"
  className="w-full sm:w-auto px-6 h-12 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700 font-semibold text-base rounded-lg shadow-md transition-colors flex items-center justify-center"
>
  Run Audit Simulation
</a>
          </div>
        </div>
      </section>
    </div>
  );
}