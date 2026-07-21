"use client"
import Link from "next/link";
import { useState } from "react";
import React from 'react';

interface FrameworkItem {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const frameworks: FrameworkItem[] = [
  {
    id: 'gdpr',
    name: 'GDPR',
    icon: '🇪🇺',
    description: 'Data processing agreements, privacy impact assessments, and jurisdiction-specific consent documentation for EU operations.',
  },
  {
    id: 'soc2',
    name: 'SOC 2',
    icon: '🔐',
    description: 'Controls documentation, evidence of assurance, and audit support materials aligned to SOC 2 Type II security and availability criteria.',
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    icon: '📋',
    description: 'Information security management documentation aligned to ISO 27001 — for organisations requiring formal ISMS evidence.',
  },
  {
    id: 'ai-gov',
    name: 'AI Governance',
    icon: '🤖',
    description: 'Explainability documentation, human-in-command design evidence, and bias assessment materials for AI-in-workforce regulatory requirements.',
  },
];

interface BriefCard {
  tag: string;
  icon: string;
  title: string;
  description: string;
  linkText: string;
}

const briefCards: BriefCard[] = [
  {
    tag: 'CFO Brief',
    icon: '📋',
    title: 'The Hidden Cost of Workforce Uncertainty',
    description: 'A financial analysis of the measurable cost of workforce data gaps — including payroll leakage benchmarks, billing inaccuracy rates, and the compounding effect of unverified contractor activity across enterprise operations.',
    linkText: 'Read Brief →',
  },
  {
    tag: 'Governance Paper',
    icon: '🤖',
    title: 'AI Governance in Workforce Systems',
    description: 'A framework for implementing explainable, human-in-command AI in workforce governance — with specific guidance on bias controls, transparency requirements, and board-level AI accountability standards.',
    linkText: 'Read Paper →',
  },
  {
    tag: 'Executive Brief',
    icon: '📊',
    title: 'Workforce Assurance: The Board Agenda for 2026',
    description: 'Why workforce verification, evidence infrastructure, and AI governance are moving from operational considerations to board-level risk agenda items — and what enterprises need to do now.',
    linkText: 'Read Brief →',
  },
];

const checklistItems = [
  'GDPR Data Processing Agreement (DPA)',
  'Privacy Impact Assessment template',
  'SOC 2 controls evidence summary',
  'AI governance and explainability documentation',
  'Vendor risk questionnaire (pre-answered)',
  'Jurisdiction-specific employment law alignment notes',
];

interface CaseStudy {
  industry: string;
  title: string;
  problem: string;
  response: string;
  outcome: string;
  outcomeLabel: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'Financial Services',
    title: 'Global bank eliminates contractor billing disputes across 5 jurisdictions',
    problem: 'Opaque tracking led to complex billing disputes with cross-border IT contractors, draining management time.',
    response: 'Deployed ZoikoTime across 1,200+ contractors—establishing a single tamper-evident record of work across all regions.',
    outcome: '$2.1M',
    outcomeLabel: 'recovered',
  },
  {
    industry: 'Professional Services',
    title: 'Consulting firm improves billable utilization accuracy from 68% to 94%',
    problem: 'Manual timesheets created revenue leakage, delayed billing cycles, and weakened client trust.',
    response: 'Automated real-time proof-of-work capture, giving clients transparent verification without invading developer privacy.',
    outcome: '+26%',
    outcomeLabel: 'billing accuracy',
  },
  {
    industry: 'Healthcare',
    title: 'Hospital network achieves first clean regulatory audit after three consecutive failures',
    problem: 'Inconsistent agency nursing records led to compliance penalties and labor distribution flags.',
    response: 'Integrated compliance auditing rules directly into time capture pipelines to automatically verify and tag credentials.',
    outcome: 'First clean',
    outcomeLabel: 'audit outcome',
  },
];

interface ToolCard {
  icon: string;
  title: string;
  description: string;
  actionText: string;
}

interface RecommendationCard {
  icon: string;
  title: string;
  description: string;
  actionText: string;
}

const interactiveTools: ToolCard[] = [
  {
    icon: '💰',
    title: 'ROI Calculator',
    description: "Model your organisation's specific financial opportunity — leakage rate, workforce size, billing structure — and generate a CFO-ready justification with payback period.",
    actionText: 'Launch Calculator →',
  },
  {
    icon: '🔍',
    title: 'Workforce Risk Scanner',
    description: 'Answer 12 questions about your current workforce operations and receive a tailored risk assessment — identifying hidden financial, compliance, and operational exposure.',
    actionText: 'Scan My Risks →',
  },
  {
    icon: '✅',
    title: 'Compliance Readiness Tool',
    description: 'Assess your current audit and compliance readiness across the four pillars of the Workforce Assurance Framework™ — with a structured remediation roadmap based on your gaps.',
    actionText: 'Check Readiness →',
  },
  {
    icon: '📊',
    title: 'Board Presentation Generator',
    description: 'Input your organisation details and evaluation findings — receive a customised slide deck for internal approval, structured for board and executive committee presentation.',
    actionText: 'Generate Deck →',
  },
];

const recommendations: RecommendationCard[] = [
  {
    icon: '📊',
    title: 'State of Workforce Assurance 2026',
    description: 'Industry research to ground your evaluation in verified market data and governance benchmarks.',
    actionText: 'Download →',
  },
  {
    icon: '💰',
    title: 'ROI Calculator',
    description: 'Model your specific financial opportunity before your first conversation with our sales team.',
    actionText: 'Launch →',
  },
  {
    icon: '🎯',
    title: 'Enterprise Demo',
    description: "See ZoikoTime operating in a context that mirrors your organisation's workforce structure and governance needs.",
    actionText: 'Request Demo →',
  },
];

export default function WorkforceAssuranceHub() {
  const [region, setRegion] = useState('European Union (GDPR)');
  const [industry, setIndustry] = useState('Financial Services');

  return (
    <div className="w-full bg-slate-50 dark:bg-gray-900 text-slate-900 dark:text-white antialiased min-h-screen transition-colors duration-200">
      
      {/* ================= SECTION 1: HERO HUB ================= */}
      <section className="relative w-full bg-gradient-to-tr from-teal-50 to-white dark:from-gray-900 dark:to-slate-800 pt-16 md:pt-24 pb-16 md:pb-20 px-4 sm:px-6 flex flex-col items-center justify-center overflow-hidden border-b border-slate-100 dark:border-gray-800">
        <div className="absolute -right-16 -top-48 size-[500px] bg-gradient-to-br from-teal-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-500">
            Workforce Assurance Hub
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.2]">
            The Global Knowledge Hub for<br />
            <span className="text-teal-500">Workforce Assurance</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg font-normal text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Research, frameworks, and tools designed to help organisations move from workforce visibility to workforce certainty — at every stage of the journey.
          </p>

          <div className="pt-6 md:pt-8 max-w-2xl mx-auto space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-gray-500">
              Start your journey
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">

              <button className="px-4 py-2 bg-teal-500/10 hover:bg-teal-500/20 text-teal-600 dark:text-teal-400 text-xs sm:text-sm font-semibold rounded-full border border-teal-500/30 transition-all cursor-pointer">
                I&apos;m evaluating solutions
              </button>

              <button className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-semibold rounded-full border border-slate-200 dark:border-gray-700 shadow-sm transition-all cursor-pointer">
                I need to solve a specific problem
              </button>

              <button className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-semibold rounded-full border border-slate-200 dark:border-gray-700 shadow-sm transition-all cursor-pointer">
                I&apos;m preparing for internal approval
              </button>

              <button className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-300 text-xs sm:text-sm font-semibold rounded-full border border-slate-200 dark:border-gray-700 shadow-sm transition-all cursor-pointer">
                I want technical details
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: GUIDED PATHWAYS ================= */}
      <section className="w-full bg-slate-100 dark:bg-gray-950 py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1200px] mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">Guided Pathways</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Choose Your Path</h2>
            <p className="text-sm sm:text-base md:text-lg font-normal text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Four intelligent journeys designed for where you are — whether evaluating, solving, approving, or deploying.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[380px] sm:min-h-[450px] transition-all hover:shadow-md group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="space-y-4">
                <div className="text-3xl md:text-4xl filter drop-shadow-sm">🧠</div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">For Decision-Makers</p>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">Evaluate ZoikoTime</h3>
                </div>
                <ul className="space-y-2.5 pt-2 text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>What is Workforce Assurance?</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Why legacy tools fail at scale</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>ROI overview and financial case</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Competitive landscape analysis</span></li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-gray-800">
                <a href="#" className="inline-block text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors leading-snug">
                  See if ZoikoTime fits your organisation →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[380px] sm:min-h-[450px] transition-all hover:shadow-md group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="space-y-4">
                <div className="text-3xl md:text-4xl filter drop-shadow-sm">⚙️</div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">Use-Case Driven</p>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">Solve a Specific Problem</h3>
                </div>
                <ul className="space-y-2.5 pt-2 text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Reduce payroll leakage</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Improve compliance posture</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Verify contractors at scale</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Prepare for regulatory audit</span></li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-gray-800">
                <a href="#" className="inline-block text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors leading-snug">
                  Explore solution by problem →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[380px] sm:min-h-[450px] transition-all hover:shadow-md group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="space-y-4">
                <div className="text-3xl md:text-4xl filter drop-shadow-sm">🧾</div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">Procurement Stage</p>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">Get Internal Approval</h3>
                </div>
                <ul className="space-y-2.5 pt-2 text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>ROI model and financial justification</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Compliance and security documentation</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Board presentation materials</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Vendor risk assessment pack</span></li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-gray-800">
                <a href="#" className="inline-block text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors leading-snug">
                  Download approval pack →
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[380px] sm:min-h-[450px] transition-all hover:shadow-md group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="space-y-4">
                <div className="text-3xl md:text-4xl filter drop-shadow-sm">🧩</div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-1">CIO / CISO Audience</p>
                  <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-snug">Technical Deep Dive</h3>
                </div>
                <ul className="space-y-2.5 pt-2 text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>System architecture documentation</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>AI explainability and governance</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Data governance and privacy model</span></li>
                  <li className="flex items-start gap-2"><span className="text-teal-500 font-bold select-none">›</span><span>Integration and API reference</span></li>
                </ul>
              </div>
              <div className="pt-6 border-t border-slate-50 dark:border-gray-800">
                <a href="#" className="inline-block text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors leading-snug">
                  View architecture →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE FRAMEWORK ================= */}
      <section className="w-full bg-white dark:bg-gray-900 py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-[1040px] mx-auto space-y-12 md:space-y-16">
          <div className="text-center space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">The Framework</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Introducing the Workforce Assurance Framework™</h2>
            <p className="text-sm sm:text-base md:text-lg font-normal text-slate-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A structured model for understanding, evaluating, and implementing workforce assurance across your enterprise — built on four interdependent pillars.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-lg overflow-hidden">
            <div className="border-b border-slate-200 dark:border-gray-800 p-6 md:p-10 text-center flex flex-col items-center space-y-4 bg-slate-50/50 dark:bg-gray-900/50">
              <h3 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">The Workforce Assurance Framework™</h3>
              <p className="text-xs sm:text-sm font-normal text-slate-500 dark:text-gray-400 max-w-2xl leading-relaxed">
                A comprehensive model for governed, defensible, and intelligent workforce management applicable across all enterprise workforce types and operating environments.
              </p>
              <button className="mt-2 bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer">
                ↓ Download Framework
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:grid-cols-2 lg:divide-y-0 lg:divide-x divide-slate-200 dark:divide-gray-800 border-b border-slate-200 dark:border-gray-800">
              {/* Pillar 1 */}
              <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-slate-50/40 dark:hover:bg-gray-900/40 transition-colors">
                <div className="size-12 md:size-14 bg-emerald-50 dark:bg-gray-800 rounded-full flex items-center justify-center border border-teal-600/10 shadow-inner">
                  <span className="text-xl md:text-2xl">🔐</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white tracking-tight">Verification</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  Confirming that recorded work reflects genuine, policy-aligned activity — across sessions, identities, and task completion — with cryptographic integrity from the point of capture.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-slate-50/40 dark:hover:bg-gray-900/40 transition-colors">
                <div className="size-12 md:size-14 bg-emerald-50 dark:bg-gray-800 rounded-full flex items-center justify-center border border-teal-600/10 shadow-inner">
                  <span className="text-xl md:text-2xl">🧠</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white tracking-tight">Intelligence</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  Transforming verified data into explainable, decision-grade insights — connecting effort, tools, and outcomes in ways that support performance, capacity, and delivery decisions.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-slate-50/40 dark:hover:bg-gray-900/40 transition-colors">
                <div className="size-12 md:size-14 bg-emerald-50 dark:bg-gray-800 rounded-full flex items-center justify-center border border-teal-600/10 shadow-inner">
                  <span className="text-xl md:text-2xl">⚙️</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white tracking-tight">Governance</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  Embedding policy controls, jurisdiction logic, and human-in-command oversight into every operational layer — ensuring consistency, accountability, and defensibility at enterprise scale.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4 hover:bg-slate-50/40 dark:hover:bg-gray-900/40 transition-colors">
                <div className="size-12 md:size-14 bg-emerald-50 dark:bg-gray-800 rounded-full flex items-center justify-center border border-teal-600/10 shadow-inner">
                  <span className="text-xl md:text-2xl">📂</span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 dark:text-white tracking-tight">Evidence</h4>
                <p className="text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                  Producing structured, tamper-evident records aligned to legal, regulatory, and compliance standards — ensuring every workforce decision can be audited and defended when required.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/60 dark:bg-emerald-950/20 px-6 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs font-semibold text-teal-800 dark:text-teal-400 max-w-xl text-center md:text-left leading-relaxed">
                Used by enterprise governance, compliance, and HR teams across 40+ jurisdictions to evaluate and implement workforce assurance programmes.
              </p>
              <Link
  href="/workforce-assurance#access-full-framework-guide"
  className="bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm shrink-0 transition-all cursor-pointer w-full md:w-auto inline-flex items-center justify-center"
>
  Access Full Framework Guide →
</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: RESOURCE LIBRARY ================= */}
      <section className="w-full max-w-[1440px] mx-auto py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="text-center space-y-3 mb-10 md:mb-12">
          <p className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">Resource Library</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Explore Resources</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Filter by role, stage, industry, or content type — find the resources most relevant to where you are in your workforce assurance journey.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 md:mb-16">
          <span className="text-slate-400 dark:text-gray-500 text-xs font-bold uppercase tracking-wide mr-1 sm:mr-2">Role:</span>
          <button className="px-3.5 py-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-600 dark:text-teal-400 text-xs font-semibold rounded-full border border-teal-600/20 shadow-xs cursor-pointer">
            All
          </button>
          <button className="px-3.5 py-1.5 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700 transition-all cursor-pointer">
            CFO
          </button>
          <button className="px-3.5 py-1.5 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700 transition-all cursor-pointer">
            CIO / CISO
          </button>
          <button className="px-3.5 py-1.5 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700 transition-all cursor-pointer">
            CHRO
          </button>
          <button className="px-3.5 py-1.5 bg-white dark:bg-gray-800 hover:bg-slate-50 dark:hover:bg-gray-700 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700 transition-all cursor-pointer">
            Procurement
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1120px] mx-auto">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                  Annual Report
                </span>
                <span className="text-slate-400 dark:text-gray-500 text-xs font-semibold">CFO · CHRO · Board</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                State of Workforce Assurance 2026
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                Industry-wide research across 500+ enterprises covering verification gaps, financial leakage rates, and the governance frameworks driving the most defensible workforce operations.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                  CFO Brief
                </span>
                <span className="text-slate-400 dark:text-gray-500 text-xs font-semibold">CFO · Finance</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                The Hidden Cost of Workforce Uncertainty
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                A board-ready analysis of the measurable financial impact of workforce data gaps — payroll leakage, billing inaccuracy, and the compounding cost of unverified contractor work.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[280px] md:min-h-[320px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                  Governance Paper
                </span>
                <span className="text-slate-400 dark:text-gray-500 text-xs font-semibold">CIO · CISO · GRC</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                AI Governance in Workforce Systems
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                A technical and policy framework for implementing explainable AI in workforce governance contexts — covering human-in-command design, bias controls, and audit transparency requirements.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[300px] md:min-h-[384px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 text-teal-700 dark:text-teal-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                  Implementation Guide
                </span>
                <span className="text-slate-400 dark:text-gray-500 text-xs font-semibold">CHRO · Operations</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                Workforce Assurance for Distributed Teams
              </h3>      
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                A practical deployment guide for implementing ZoikoTime across distributed and hybrid workforce environments — including policy configuration, jurisdiction setup, and HR integration.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[300px] md:min-h-[384px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="px-2.5 py-0.5 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-500 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                  Interactive Tool
                </span>
                <span className="text-slate-400 dark:text-gray-500 text-xs font-semibold">CFO · Finance</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                Enterprise ROI Calculator
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                Model your organisation&apos;s specific financial opportunity — leakage rate, payroll size, billing structure — and generate a CFO-ready ROI report with payback period and first-year impact.
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col justify-between min-h-[300px] md:min-h-[384px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/50 text-amber-800 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wide rounded-full">
                  Procurement Brief
                </span>
                <span className="text-slate-400 dark:text-gray-500 text-xs font-semibold">Procurement · Legal</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                ZoikoTime Procurement Guide
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                Everything required for enterprise procurement due diligence — security documentation, compliance matrix, DPA, architecture summary, and vendor risk questionnaire pre-answered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEASURED IMPACT BY INDUSTRY ================= */}
      <section className="bg-slate-50 dark:bg-gray-950 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Measured Impact By Industry and Use Case
            </h2>
            <p className="mt-3 md:mt-4 text-sm sm:text-base text-slate-600 dark:text-gray-400">
              Real enterprise deployments yields verified outcomes — each showing the problem, the system response, the evidence generated, and the financial result.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, idx) => (
              <div 
                key={idx} 
                className="flex flex-col justify-between bg-white dark:bg-gray-900 rounded-xl border border-slate-200 dark:border-gray-800 p-6 md:p-8 shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div>
                  <span className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50 px-2.5 py-1 rounded-md mb-4 md:mb-6">
                    {study.industry}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug mb-6 md:mb-8">
                    {study.title}
                  </h3>

                  <div className="space-y-5 border-t border-slate-100 dark:border-gray-800 pt-5 md:pt-6">
                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-1">
                        Problem
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-gray-500 mb-1">
                        Response
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                        {study.response}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-slate-100 dark:border-gray-800">
                  <div className="mb-5 md:mb-6">
                    <div className="text-2xl md:text-3xl font-extrabold text-teal-600 dark:text-teal-400 tracking-tight">
                      {study.outcome}
                    </div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-gray-400 uppercase tracking-wide">
                      {study.outcomeLabel}
                    </div>
                  </div>

                  <button 
                    type="button" 
                    onClick={() => alert(`Preparing briefing pack for ${study.industry}...`)}
                    className="inline-flex items-center justify-center w-full rounded-lg bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-gray-300 shadow-sm transition-colors hover:bg-slate-50 dark:hover:bg-gray-700 hover:text-slate-900 dark:hover:text-white focus:outline-none"
                  >
                    <svg className="mr-2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    Send This to Your CFO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: IMPLEMENTATION DEPLOYMENT ================= */}
      <section
      id="access-full-framework-guide"
       className="w-full max-w-[1440px] mx-auto py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 border-t border-slate-200 dark:border-gray-800">
        <div className="text-center space-y-3 mb-12 md:mb-16">
          <p className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">Implementation</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">From First Step to Full Deployment</h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Each guide includes time to deploy, required stakeholders, risk level, and expected ROI timeline — making this a project planning tool, not just documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-[1040px] mx-auto">
          {/* Guide 1 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row gap-5 items-start">
            <div className="size-11 md:size-12 shrink-0 bg-emerald-50 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-teal-600/20 text-xl md:text-2xl">
              🚀
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                Rapid Deployment — Pilot Programme Guide
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                Deploy ZoikoTime across a targeted workforce segment in 2 weeks — with full visibility, policy controls, and evidence capture active from day one.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-teal-600/20">⏱ 2 weeks</span>
                <span className="px-2.5 py-0.5 bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700">2 stakeholders</span>
                <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold rounded-full border border-amber-200 dark:border-amber-900">Low risk</span>
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-emerald-200 dark:border-emerald-900">ROI: Month 1</span>
              </div>
            </div>
          </div>

          {/* Guide 2 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row gap-5 items-start">
            <div className="size-11 md:size-12 shrink-0 bg-emerald-50 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-teal-600/20 text-xl md:text-2xl">
              🏢
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                Enterprise Full Deployment — Multi-Jurisdiction Guide
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                Full enterprise deployment across multiple jurisdictions with custom policy configuration, HR integration, and phased go-live approach for large workforce operations.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-teal-600/20">⏱ 6–8 weeks</span>
                <span className="px-2.5 py-0.5 bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700">5–8 stakeholders</span>
                <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold rounded-full border border-amber-200 dark:border-amber-900">Medium risk</span>
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-emerald-200 dark:border-emerald-900">ROI: Month 2–3</span>
              </div>
            </div>
          </div>

          {/* Guide 3 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row gap-5 items-start">
            <div className="size-11 md:size-12 shrink-0 bg-emerald-50 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-teal-600/20 text-xl md:text-2xl">
              🏗️
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                Contractor Workforce Deployment — Revenue Assurance Guide
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                Deploy verification and billing controls across contractor and gig workforces — with task validation, fraud detection, and unit economics reporting activated in parallel.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-teal-600/20">⏱ 3–4 weeks</span>
                <span className="px-2.5 py-0.5 bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700">3–4 stakeholders</span>
                <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold rounded-full border border-amber-200 dark:border-amber-900">Low risk</span>
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-emerald-200 dark:border-emerald-900">ROI: Week 3</span>
              </div>
            </div>
          </div>

          {/* Guide 4 */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 md:p-8 shadow-xs border border-slate-200 dark:border-gray-800 flex flex-col sm:flex-row gap-5 items-start">
            <div className="size-11 md:size-12 shrink-0 bg-emerald-50 dark:bg-gray-800 rounded-xl flex items-center justify-center border border-teal-600/20 text-xl md:text-2xl">
              🔍
            </div>
            <div className="space-y-4 w-full">
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">
                Audit Readiness Programme — Compliance Deployment Guide
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm font-normal leading-relaxed">
                Priority deployment of evidence capture, chain of custody, and audit export capabilities — for organisations preparing for regulatory inspection or legal challenge in the near term.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-teal-600/20">⏱ 1–2 weeks</span>
                <span className="px-2.5 py-0.5 bg-white dark:bg-gray-800 text-slate-500 dark:text-gray-400 text-xs font-semibold rounded-full border border-slate-200 dark:border-gray-700">3 stakeholders</span>
                <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-400 text-xs font-semibold rounded-full border border-amber-200 dark:border-amber-900">Low risk</span>
                <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-teal-700 dark:text-teal-400 text-xs font-semibold rounded-full border border-emerald-200 dark:border-emerald-900">Immediate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOVE FROM RESEARCH TO DECISION BANNER ================= */}
      <section className="bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative bg-emerald-50/60 dark:bg-emerald-950/10 rounded-2xl p-6 sm:p-8 md:p-12 border border-emerald-100/50 dark:border-emerald-900/40 overflow-hidden shadow-sm">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-radial from-teal-500/10 to-transparent pointer-events-none rounded-full" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white font-sans">
              Move From Research to Decision
            </h2>
            <p className="mt-4 text-xs sm:text-base text-slate-500 dark:text-gray-400 leading-relaxed">
              Ready to evaluate ZoikoTime for your organisation? Request a tailored demo, generate your ROI report, or download your approval pack — now.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">

  {/* Request Tailored Demo */}
  <Link
    href="/request-tailored-demo"
    className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-teal-600 font-semibold text-xs sm:text-sm text-white shadow-[0px_4px_12px_0px_rgba(0,157,140,0.35)] hover:bg-teal-700 transition-all w-full sm:w-auto"
  >
    <svg
      className="w-4 h-4 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="2.5"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 21l-.813-5.096L3 15l5.187-.813L9 9l.813 5.187L15 15l-5.187.813zM18 10.5l-.5 3-.5-3-3-.5 3-.5.5-3 .5 3 3 .5-3 .5z"
      />
    </svg>

    Request Tailored Demo
  </Link>


  {/* Calculate ROI */}
  <Link
    href="/calculate-your-roi"
    className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-transparent border border-teal-600 font-medium text-xs sm:text-sm text-teal-600 dark:text-teal-400 transition-colors hover:bg-teal-50/50 w-full sm:w-auto"
  >
    Generate ROI Report
  </Link>

</div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE DOCUMENTATION GRID ================= */}
      <section className="bg-slate-100 dark:bg-gray-950 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            <div>
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-2 sm:mb-3">
                Compliance Documentation
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                Regulator-Ready<br />Documentation
              </h2>
              <p className="mt-3 md:mt-4 text-xs sm:text-base font-normal text-slate-500 dark:text-gray-400 leading-relaxed max-w-xl">
                ZoikoTime provides structured compliance documentation grouped by framework — with a compliance pack builder that generates a custom bundle based on your region and industry.
              </p>
            </div>

            <div className="space-y-4">
              {frameworks.map((fw) => (
                <div 
                  key={fw.id} 
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 md:p-5 border border-slate-200/80 dark:border-gray-800 shadow-xs flex items-start gap-4 transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 bg-emerald-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-lg md:text-xl">
                    {fw.icon}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-6">{fw.name}</h3>
                    <p className="mt-0.5 md:mt-1 text-xs font-normal text-slate-500 dark:text-gray-400 leading-relaxed">{fw.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-md overflow-hidden">
              <div className="bg-slate-50 dark:bg-gray-800/40 border-b border-slate-200 dark:border-gray-800 p-5 md:p-6">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-6">Build Your Compliance Pack</h3>
                <p className="mt-1 text-xs font-normal text-slate-500 dark:text-gray-400 leading-relaxed">
                  Select your region and industry — we&apos;ll generate a custom compliance bundle for your organisation.
                </p>
              </div>

              <div className="p-5 md:p-6 border-b border-slate-200 dark:border-gray-800 space-y-4 md:space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wide mb-2">
                    Region / Jurisdiction
                  </label>
                  <div className="relative">
                    <select 
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-700 rounded-lg pl-3 pr-10 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    >
                      <option>European Union (GDPR)</option>
                      <option>United Kingdom (UK GDPR)</option>
                      <option>North America (SOC 2 / CCPA)</option>
                      <option>Asia Pacific</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wide mb-2">
                    Industry
                  </label>
                  <div className="relative">
                    <select 
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-700 rounded-lg pl-3 pr-10 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-gray-300 appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    >
                      <option>Financial Services</option>
                      <option>Healthcare & Life Sciences</option>
                      <option>Professional Services & Consulting</option>
                      <option>Technology & SaaS</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 md:p-6 border-b border-slate-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <h4 className="text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wide mb-4">Your pack will include</h4>
                <ul className="space-y-3">
                  {checklistItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-emerald-50 dark:bg-emerald-950/40 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-[10px] font-bold">
                        ✓
                      </div>
                      <span className="text-xs text-slate-700 dark:text-gray-300 font-normal leading-5">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 md:p-6 bg-white dark:bg-gray-900 flex flex-col items-center">
                <button
                  type="button"
                  className="w-full bg-teal-600 text-white rounded-lg py-2.5 md:py-3 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-teal-700 active:scale-[0.99] transition-all"
                >
                  <span>🔧</span> Generate My Compliance Pack
                </button>
                <p className="mt-3 text-[11px] sm:text-xs font-normal text-slate-400 dark:text-gray-500 text-center leading-5">
                  Pack generated as PDF bundle within 2 business hours
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-sm p-1 relative h-48 sm:h-64 group">
              <img 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.01]" 
                src="/home/Frame 11.png" 
                alt="Compliance Pipeline Interface Preview"
              /> 
            </div>
          </div>
        </div>
      </section>

      {/* ================= THOUGHT LEADERSHIP SECTION ================= */}
      <section className="bg-white dark:bg-gray-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-2 sm:mb-3">
              Thought Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Defining the Future of Workforce Assurance
            </h2>
            <p className="mt-3 md:mt-4 text-sm sm:text-base text-slate-500 dark:text-gray-400 leading-relaxed">
              Board-level publications from ZoikoTime — setting the standard for how enterprise workforce governance is understood, evaluated, and implemented.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {briefCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-gray-900 rounded-xl p-5 md:p-6 border border-slate-200/80 dark:border-gray-800 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md"
              >
                <div>
                  <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wide block mb-3">
                    {card.icon} {card.tag}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-snug mb-3">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>
                
                <div className="mt-5 md:mt-6">
                  <a href="#" className="inline-flex text-teal-600 dark:text-teal-400 text-xs font-bold transition-colors hover:text-teal-700">
                    {card.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-white dark:bg-gray-950 rounded-2xl border border-slate-200 dark:border-gray-800 shadow-md overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-600 to-teal-500" />
            
            <div className="p-6 sm:p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
              <div className="inline-flex items-center bg-emerald-50 dark:bg-emerald-950/40 rounded-full border border-teal-600/20 px-3 py-1 mb-5">
                <span className="text-teal-600 dark:text-teal-400 text-[11px] sm:text-xs font-bold uppercase tracking-wide">
                  📊 Featured Report
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                State of Workforce Assurance 2026
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm md:text-base font-normal leading-relaxed mb-8">
                Comprehensive research across 500+ enterprise organisations — covering verification gaps, financial leakage benchmarks, governance maturity models, and the emerging role of AI in workforce assurance. The definitive industry reference for 2026.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-3xl border-t border-slate-200 dark:border-gray-800 pt-6 sm:pt-8 mb-8">
                <div className="py-2 sm:py-0">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-teal-600 dark:text-teal-400 leading-none">500+</div>
                  <div className="text-xs font-normal text-slate-500 dark:text-gray-400 mt-1.5 sm:text-xs leading-relaxed">Enterprises surveyed</div>
                </div>
                <div className="border-t sm:border-t-0 sm:border-x border-slate-200 dark:border-gray-800 py-3 sm:py-0">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-teal-600 dark:text-teal-400 leading-none">40+</div>
                  <div className="text-xs font-normal text-slate-500 dark:text-gray-400 mt-1.5 sm:text-xs leading-relaxed">Jurisdictions covered</div>
                </div>
                <div className="border-t sm:border-t-0 border-slate-200 dark:border-gray-800 py-2 sm:py-0">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-teal-600 dark:text-teal-400 leading-none">68pp</div>
                  <div className="text-xs font-normal text-slate-500 dark:text-gray-400 mt-1.5 sm:text-xs leading-relaxed">Full research report</div>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center bg-teal-600 text-white rounded-lg px-6 py-3 text-xs sm:text-sm font-semibold shadow-sm hover:bg-teal-700 active:scale-[0.99] w-full sm:w-auto"
              >
                Download State of Workforce Assurance 2026
              </button>
              
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE TOOLS ================= */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              Interactive Tools
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Interactive Decision Tools
            </h2>
            <p className="mt-3 md:mt-4 text-xs sm:text-base text-slate-500 dark:text-gray-400 leading-relaxed">
              Four tools designed to accelerate your decision — from financial justification through to board-ready presentation materials.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interactiveTools.map((tool, index) => (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-5 md:p-6 border border-slate-200/80 dark:border-gray-800 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:border-slate-300 dark:hover:border-gray-700"
              >
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
                
                <div className="pt-2 text-center">
                  <div className="text-3xl md:text-4xl mb-4 md:mb-5 flex justify-center selection:bg-transparent">
                    {tool.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-900 dark:text-white leading-snug tracking-tight min-h-[40px] md:min-h-[44px] flex items-center justify-center">
                    {tool.title}
                  </h3>
                  <p className="mt-3 md:mt-4 text-xs font-normal text-slate-500 dark:text-gray-400 leading-relaxed max-w-[210px] mx-auto">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-6 md:mt-8 pt-1">
                  <button
                    type="button"
                    className="w-full bg-emerald-50 dark:bg-gray-800 border border-teal-600/20 text-teal-600 dark:text-teal-400 rounded-lg py-2.5 text-xs font-semibold tracking-wide transition-all group-hover:bg-teal-600 group-hover:text-white dark:group-hover:bg-teal-600"
                  >
                    {tool.actionText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RECOMMENDATIONS MATRIX ================= */}
      <section className="bg-white dark:bg-gray-900 border-y border-slate-200/60 dark:border-gray-800 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              Recommended for You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-950 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-gray-800 shadow-xs flex items-start gap-4 transition-all duration-200 hover:shadow-sm"
              >
                <div className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 bg-emerald-50 dark:bg-gray-800 rounded-lg flex items-center justify-center text-base md:text-lg select-none">
                  {rec.icon}
                </div>
                
                <div className="flex-1 flex flex-col justify-between h-full min-h-[100px] md:min-h-[120px]">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {rec.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-normal text-slate-500 dark:text-gray-400 leading-relaxed">
                      {rec.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <a href="#" className="inline-flex items-center text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors">
                      {rec.actionText}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DECISION MOMENT CALL TO ACTION ================= */}
      <section className="relative bg-emerald-50 dark:bg-gray-950 overflow-hidden py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3 md:mb-4">
            Decision Moment
          </span>
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Everything You Need to Make the <br className="hidden sm:inline" />
            <span className="text-teal-600 dark:text-teal-400">Right Decision — Now Available</span>
          </h2>
          
          <p className="mt-4 md:mt-6 text-xs sm:text-base font-normal text-slate-600/90 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Whether you need financial justification, technical documentation, compliance evidence, or a board-ready presentation — ZoikoTime&apos;s resource hub has everything required to move from research to decision with confidence.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-sm sm:max-w-none mx-auto w-full">
            <Link
  href="/request-a-demo"
  className="w-full sm:w-auto inline-flex items-center justify-center bg-teal-600 text-white rounded-lg px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-semibold shadow-md hover:bg-teal-700 transition-all active:scale-[0.99]"
>
  <svg
    className="w-4 h-4 mr-2 text-white/90"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 002-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
  Request Demo
</Link>

<Link
  href="/contact-sales"
  className="w-full sm:w-auto inline-flex items-center justify-center border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-500 rounded-lg px-6 sm:px-8 py-3.5 text-xs sm:text-sm font-medium hover:bg-teal-50/50 transition-all active:scale-[0.99]"
>
  Speak to Expert
</Link>
          </div>
        </div>

        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-teal-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl pointer-events-none" />
      </section>
    </div>
  );
}