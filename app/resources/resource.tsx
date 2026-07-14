"use client"
import React from 'react';
import { useState } from 'react';
interface StageCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string;
  isActive: boolean;
}
interface ResourceCard {
  id: number;
  pillText: string;
  pillStyles: string;
  title: string;
  description: string;
}
interface ResourceItem {
  id: number;
  category: string;
  categoryStyles: string;
  roles: string[];
  title: string;
  description: string;
  businessValue: string;
  meta: string;
  actionText: string;
  isGated?: boolean;
}
export default function Resource() {
    const [bookmarkedItems, setBookmarkedItems] = useState<Record<number, boolean>>({});

  const toggleBookmark = (id: number) => {
    setBookmarkedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resources: ResourceItem[] = [
    {
      id: 1,
      category: 'Compliance Pack',
      categoryStyles: 'bg-emerald-50 dark:bg-emerald-950/40 outline-teal-600/20 text-teal-700 dark:text-teal-400',
      roles: ['Legal', 'Compliance', 'Procurement'],
      title: 'GDPR & Privacy Compliance Pack — Enterprise Edition',
      description: 'Structured GDPR alignment evidence, DPA templates, data subject rights procedures, and privacy-by-design documentation — formatted for regulator, legal, and procurement review teams.',
      businessValue: 'Eliminate the legal review preparation cycle — every document structured for immediate distribution to your legal team.',
      meta: '28 pages · PDF · GDPR aligned',
      actionText: 'Access Pack →'
    },
    {
      id: 2,
      category: 'CFO Asset',
      categoryStyles: 'bg-amber-100 dark:bg-amber-950/40 outline-amber-200 dark:outline-amber-800 text-amber-800 dark:text-amber-400',
      roles: ['CFO', 'Finance'],
      title: 'Payroll Leakage & Recovery Model — CFO Financial Framework',
      description: 'A structured financial methodology for quantifying workforce leakage, modelling the recovery opportunity, and projecting ROI against your specific payroll profile with your actual numbers.',
      businessValue: 'Give your CFO a defensible, model-based ROI projection — a calculation, not an estimate, with your numbers embedded.',
      meta: 'Excel model · Instant output',
      actionText: 'Access →',
      isGated: true
    },
    {
      id: 3,
      category: 'HR Guide',
      categoryStyles: 'bg-slate-100 dark:bg-slate-800 outline-slate-200 dark:outline-slate-700 text-slate-900 dark:text-slate-300',
      roles: ['CHRO', 'HR Leaders'],
      title: "Workforce Visibility Without Surveillance — HR Leader's Guide",
      description: 'How ZoikoTime provides the workforce intelligence HR teams need — without crossing the line into surveillance. Covers governance model, fairness principles, and employee communication framework.',
      businessValue: 'Give HR the narrative and evidence to champion deployment internally and respond to employee concerns.',
      meta: '16 pages · 8 min read',
      actionText: 'Download →'
    },
    {
      id: 4,
      category: 'Technical Guide',
      categoryStyles: 'bg-indigo-50 dark:bg-indigo-950/30 outline-indigo-500/20 text-indigo-500 dark:text-indigo-400',
      roles: ['CTO', 'Architecture'],
      title: 'ZoikoTime Technical Architecture & Security Posture Overview',
      description: 'Platform architecture documentation — system layers, integration topology, data flow diagrams, security controls, and deployment model options structured for CTO and enterprise architecture review.',
      businessValue: 'Answers all architecture-stage questions before a technical review call is needed — accelerating security and integration sign-off.',
      meta: 'Technical · 34 pages',
      actionText: 'Access Docs →'
    },
    {
      id: 5,
      category: 'Audit Resource',
      categoryStyles: 'bg-emerald-50 dark:bg-emerald-950/40 outline-teal-600/20 text-teal-700 dark:text-teal-400',
      roles: ['Compliance', 'Audit'],
      title: 'Regulatory Inspection Readiness Pack — Healthcare, Financial Services & Public Sector',
      description: 'Industry-specific inspection preparation materials — covering regulator documentation requirements, evidence export procedures, and inspection simulation guidance for the three most audited sectors.',
      businessValue: 'Reduce audit preparation from weeks to under 4 minutes — documentation your regulator expects, automatically structured.',
      meta: '3-sector pack · PDF',
      actionText: 'Access →',
      isGated: true
    },
    {
      id: 6,
      category: 'Research Report',
      categoryStyles: 'bg-green-50 dark:bg-green-950/30 outline-green-200 dark:outline-green-800 text-green-800 dark:text-green-400',
      roles: ['C-Suite', 'Strategy'],
      title: 'The State of Workforce Assurance 2026 — Enterprise Intelligence Report',
      description: 'Category-defining research covering the workforce assurance landscape — leakage prevalence, governance gaps, regulatory trajectory, and enterprise adoption patterns across eight industries.',
      businessValue: 'Establishes the category problem and positions your organisation relative to industry benchmarks for internal justification.',
      meta: 'Annual report · 52 pages',
      actionText: 'Download →'
    }
  ];
    const secondaryResources: ResourceCard[] = [
    {
      id: 1,
      pillText: 'Compliance Pack',
      pillStyles: 'bg-emerald-50 dark:bg-emerald-950/30 outline-teal-600/20 text-teal-700 dark:text-teal-400',
      title: 'Enterprise Compliance & Governance Framework Pack',
      description: 'GDPR, ISO 27001, SOC 2, and EU AI Act alignment — structured for compliance, legal, and procurement review.'
    },
    {
      id: 2,
      pillText: 'Executive Briefing',
      pillStyles: 'bg-slate-100 dark:bg-slate-800 outline-slate-200 dark:outline-slate-700 text-slate-900 dark:text-slate-300',
      title: 'Workforce Assurance Strategy Briefing — Board & C-Suite',
      description: 'Board-ready strategic briefing — why workforce assurance is a governance, financial, and regulatory imperative.'
    },
    {
      id: 3,
      pillText: 'Implementation Blueprint',
      pillStyles: 'bg-indigo-50 dark:bg-indigo-950/30 outline-indigo-500/20 text-indigo-500 dark:text-indigo-400',
      title: 'ZoikoTime Enterprise Implementation Blueprint',
      description: 'Deployment framework covering integration architecture, rollout phasing, and time-to-value optimisation.'
    },
    {
      id: 4,
      pillText: 'CFO Asset',
      pillStyles: 'bg-amber-100 dark:bg-amber-950/30 outline-amber-200 dark:outline-amber-800 text-amber-800 dark:text-amber-400',
      title: 'Internal Business Case Kit — Stakeholder Approval Pack',
      description: 'Complete internal sell-in kit — ROI model, presentation, and briefs for CFO, HR, Legal, and IT stakeholders.'
    }
  ];
  const pathwayStages: StageCard[] = [
    {
      id: 1,
      icon: '🔍',
      title: 'Evaluate ZoikoTime',
      description: 'Understand the platform, assess fit, and build technical and operational confidence before committing.',
      tags: 'Whitepapers · Comparisons · Architecture',
      isActive: true
    },
    {
      id: 2,
      icon: '💼',
      title: 'Build a Business Case',
      description: 'Assemble the financial, operational, and compliance evidence to secure internal approval and advance procurement.',
      tags: 'ROI Models · CFO Briefs · Case Studies',
      isActive: false
    },
    {
      id: 3,
      icon: '🚀',
      title: 'Prepare for Deployment',
      description: 'Access implementation frameworks, integration guides, rollout playbooks, and change management resources.',
      tags: 'Implementation · Integration · Change Mgmt',
      isActive: false
    },
    {
      id: 4,
      icon: '📊',
      title: 'Explore Industry Insights',
      description: 'Category-defining research, market intelligence, and strategic analysis on workforce assurance trends.',
      tags: 'Research · Thought Leadership · Reports',
      isActive: false
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
      
      {/* SECTION 1: INSIGHT HERO SEARCH OVERVIEW */}
      <section className="relative w-full min-h-[573px] bg-slate-50 dark:bg-slate-950/40 py-20 flex flex-col items-center justify-center overflow-hidden border-b border-slate-200 dark:border-slate-800">
        {/* Top Radial Soft Light Decor Accent */}
        <div className="absolute size-[500px] left-[70%] -top-20 bg-radial from-teal-500/5 dark:from-teal-400/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-9 text-center flex flex-col items-center relative z-10">
          {/* Main Hero Header */}
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[56px] max-w-[1000px] mb-4">
            Insight That Moves You From <span className="text-teal-500 dark:text-teal-400">Evaluation to Execution</span>
          </h1>
          
          {/* Subtitle Description */}
          <p className="text-slate-500 dark:text-slate-400 text-lg font-normal leading-7 max-w-2xl mb-10 ">
            Access structured intelligence, real-world outcomes, and decision-ready materials designed to help you evaluate, justify, and deploy ZoikoTime.
          </p>

          {/* Unified Resource Search Bar */}
          <div className="w-full max-w-[820px] h-14 bg-white dark:bg-slate-900 rounded-2xl border border-stone-300 dark:border-slate-700 shadow-sm flex items-center justify-between p-1.5 mb-6">
            <input 
              type="text" 
              placeholder="What are you trying to achieve?" 
              className="w-full bg-transparent px-4 py-2 text-slate-800 dark:text-slate-100 placeholder-neutral-400 dark:placeholder-slate-500 text-base font-normal    focus:outline-none"
            />
            <button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white text-xs font-bold    px-6 h-full rounded-xl flex items-center justify-center shrink-0 transition-colors duration-150">
              Find Resources →
            </button>
          </div>

          {/* Context Quick-Filter Suggestion Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-[900px]">
            <button className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold    shadow-xs hover:bg-white dark:hover:bg-slate-800 transition-all duration-150">
              Build a business case
            </button>
            <button className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold    shadow-xs hover:bg-white dark:hover:bg-slate-800 transition-all duration-150">
              Understand compliance risks
            </button>
            <button className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold    shadow-xs hover:bg-white dark:hover:bg-slate-800 transition-all duration-150">
              Deployment resources
            </button>
            <button className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-zinc-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold    shadow-xs hover:bg-white dark:hover:bg-slate-800 transition-all duration-150">
              Show me ROI evidence
            </button>
          </div>

          {/* Primary & Secondary Call to Actions Segment */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-bold text-sm px-8 py-3 rounded-md shadow-[0px_4px_14px_0px_rgba(0,157,140,0.35)] transition-all duration-150   ">
              Start Guided Experience
            </button>
            <button className="border border-teal-600 text-teal-600 dark:border-teal-400 dark:text-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/20 font-medium text-sm px-8 py-3 rounded-md transition-all duration-150   ">
              Browse All Resources
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: SYSTEM DECISION TIMELINE / PATHWAYS */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 lg:px-[100px]">
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block   ">
            Your Path Through This System
          </span>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white   ">
            Where are you in your decision?
          </h2>
        </div>

        {/* 4-Stage Interactive Roadmap Layout Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center items-stretch max-w-[1040px] mx-auto">
          {pathwayStages.map((stage) => (
            <div 
              key={stage.id}
              className={`relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden min-h-[288px] border-2 transition-all duration-200 ${
                stage.isActive 
                  ? 'bg-emerald-50 dark:bg-emerald-950/20 border-teal-600' 
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              {/* Top Gradient Stripe Rule Accent on Active Card */}
              {stage.isActive && (
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              )}
              
              <div>
                {/* Visual Section Icon */}
                <div className="text-3xl mb-4 leading-none select-none">
                  {stage.icon}
                </div>
                
                {/* Card Title */}
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-6    mb-2">
                  {stage.title}
                </h3>
                
                {/* Card Text Content */}
                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5    mb-6">
                  {stage.description}
                </p>
              </div>

              {/* Lower Categorization Tag Sub-Pill Block */}
              <div className={`w-full py-2.5 px-3 rounded-full text-center border flex items-center justify-center min-h-[40px] ${
                stage.isActive 
                  ? 'bg-teal-600/10 border-teal-600/20 text-teal-700 dark:text-teal-300' 
                  : 'bg-slate-100 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500'
              }`}>
                <span className="text-[10px] font-bold tracking-normal    leading-4">
                  {stage.tags}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
<section className="w-full bg-white dark:bg-slate-900 py-24 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block   ">
            Decision Acceleration
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-10   ">
            High-Impact Resources Move Faster
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[530px]   ">
            The five materials most likely to move your evaluation to a decision.<br />
            Designed for enterprise buyers who need to act, not browse.
          </p>
        </div>

        {/* Flagship Hero Resource Block */}
        <div className="relative w-full bg-slate-900 dark:bg-slate-950 rounded-2xl p-8 md:p-10 mb-6 overflow-hidden text-center flex flex-col items-center justify-center min-h-[176px]">
          <span className="text-[10px] font-bold tracking-wide uppercase text-teal-500 dark:text-teal-400 mb-2   ">
            Flagship Resource · CFO Asset · 2026 Edition
          </span>
          <h3 className="text-white text-xl md:text-2xl font-extrabold leading-8 max-w-[660px] mb-4 ">
            Enterprise Workforce Assurance ROI Report — 2026
          </h3>
          <p className="text-white/60 dark:text-slate-400 text-sm font-normal leading-6 max-w-[702px]   ">
            Quantifies the financial, operational, and compliance impact of ZoikoTime across four enterprise workforce contexts — verified client data, CFO-ready financial modelling, and industry benchmarks.
          </p>
        </div>

        {/* Supporting Grid Assets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryResources.map((resource) => (
            <div 
              key={resource.id} 
              className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 flex flex-col justify-start min-h-[224px] shadow-sm border border-slate-200 dark:border-slate-800/80 overflow-hidden group hover:shadow-md transition-shadow duration-200"
            >
              {/* Dynamic Gradient Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
              
              {/* Context Action Pill Tag */}
              <div className={`inline-flex self-start items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border    mb-4 ${resource.pillStyles}`}>
                {resource.pillText}
              </div>

              {/* Resource Title */}
              <h4 className="text-slate-900 dark:text-white text-base font-bold leading-6    mb-3">
                {resource.title}
              </h4>

              {/* Resource Narrative Details */}
              <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5   ">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="w-full bg-slate-100 dark:bg-slate-950/20 py-14 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block  ">
            Enterprise Knowledge System
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-10  ">
            The Complete ZoikoTime Resource Library
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-[680px]  ">
            Five intelligence asset classes filter by role, buying stage, or content type. Every resource includes a business value statement, not just a description.
          </p>
        </div>

        {/* Resource Asset Library Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-10 mb-16 justify-center">
          {resources.map((item) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-slate-200 dark:border-slate-800/80 overflow-hidden relative min-h-[384px]"
            >
              <div>
                {/* Header Row: Category Badge & Bookmark Control */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide border   ${item.categoryStyles}`}>
                    {item.category}
                  </div>
                  <button 
                    onClick={() => toggleBookmark(item.id)}
                    className={`size-7 rounded-2xl border flex items-center justify-center transition-colors duration-150 ${
                      bookmarkedItems[item.id] 
                        ? 'bg-teal-50 border-teal-300 dark:bg-teal-950 dark:border-teal-800' 
                        : 'bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700'
                    }`}
                    title="Bookmark resource"
                  >
                    <span className={`text-xs ${bookmarkedItems[item.id] ? 'opacity-100' : 'opacity-70'}`}>🔖</span>
                  </button>
                </div>

                {/* Sub-roles Tags Array */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.roles.map((role, idx) => (
                    <span 
                      key={idx}
                      className="inline-block bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/20 text-indigo-500 dark:text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded-full  "
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Resource Title */}
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-5   mb-3">
                  {item.title}
                </h3>

                {/* Asset Operational Content Description */}
                <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5   mb-4">
                  {item.description}
                </p>

                {/* Highlight Highlighted Business Value Box */}
                <div className="bg-slate-100 dark:bg-slate-800/50 rounded-md p-3 mb-6">
                  <p className="text-slate-700 dark:text-slate-300 text-xs leading-4  ">
                    <span className="text-slate-900 dark:text-white font-extrabold block mb-0.5">Business value:</span>
                    <span className="font-semibold">{item.businessValue}</span>
                  </p>
                </div>
              </div>

              {/* Lower Meta Metrics & Gated Flag Anchor Block */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs  ">
                <span className="text-slate-400 dark:text-slate-500 font-normal leading-5">
                  {item.meta}
                </span>
                
                <div className="flex items-center gap-3">
                  {item.isGated && (
                    <span className="bg-amber-100 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full leading-4">
                      Gated
                    </span>
                  )}
                  <button className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-bold transition-colors duration-150">
                    {item.actionText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Interaction Component Action */}
        <div className="flex justify-center">
          <button className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-sm font-medium   px-8 py-3.5 rounded-md border border-slate-200 dark:border-slate-800 shadow-xs transition-all duration-150">
            Load More Resources
          </button>
        </div>

      </div>
    </section>

    {/* ================= Executive Briefing Center ================= */}

<section className="w-full bg-white dark:bg-slate-900 py-24 font-sans antialiased text-slate-900 dark:text-white transition-colors duration-300">
  {(() => {
    const executiveBriefings = [
      {
        audience: "CHRO / CPO / Board",
        title: "Workforce Assurance Strategy Briefing",
        description:
          "Why workforce assurance has become a strategic governance requirement — not a software decision.",
        points: [
          "Category definition and strategic context",
          "Risk of governance gaps at enterprise scale",
          "Governance-first operating model",
          "Board-level questions and responses",
        ],
      },
      {
        audience: "General Counsel / CRCO",
        title: "Risk & Compliance Overview Briefing",
        description:
          "Governance architecture, regulatory alignment, audit-ready infrastructure, and legal risk allocation.",
        points: [
          "GDPR, ISO 27001, SOC 2, EU AI Act alignment",
          "Human-in-Command model and AI governance",
          "Evidence generation and audit trail design",
          "Legal risk allocation framework",
        ],
      },
      {
        audience: "CFO / Finance Leaders",
        title: "Financial Justification Briefing",
        description:
          "The CFO-grade financial case — payroll leakage quantification, ROI methodology, and payback evidence.",
        points: [
          "Workforce leakage quantification methodology",
          "ROI modelling and verified benchmarks",
          "Payback period by workforce type",
          "Financial risk of inaction model",
        ],
      },
      {
        audience: "CIO / CTO / Enterprise Architecture",
        title: "Deployment Readiness Briefing",
        description:
          "Technical architecture, integration model, deployment phasing, and operational readiness for enterprise.",
        points: [
          "Platform architecture and security posture",
          "HRIS / payroll / identity integration",
          "3-phase deployment timeline",
          "Time-to-value model and adoption playbook",
        ],
      },
    ];

    return (
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
            Executive Briefing Center
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Board-Level Intelligence Library
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-base leading-7 max-w-3xl mx-auto">
            Four strategic briefings — each designed for a specific C-Suite
            audience, structured for executive stakeholders, and available as a
            downloadable PDF briefing pack.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* ================= CARD 1 ================= */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-teal-600 px-5 py-6">
              <p className="text-[10px] uppercase tracking-wide font-bold text-white/80 mb-3">
                {executiveBriefings[0].audience}
              </p>

              <h3 className="text-white text-lg font-bold leading-6">
                {executiveBriefings[0].title}
              </h3>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {executiveBriefings[0].description}
              </p>

              <ul className="space-y-4 mb-8">
                {executiveBriefings[0].points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="text-teal-600 font-bold mt-0.5">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md py-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                Download Briefing
              </button>
            </div>
          </div>

                    {/* ================= CARD 2 ================= */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-teal-600 px-5 py-6">
              <p className="text-[10px] uppercase tracking-wide font-bold text-white/80 mb-3">
                {executiveBriefings[1].audience}
              </p>

              <h3 className="text-white text-lg font-bold leading-6">
                {executiveBriefings[1].title}
              </h3>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {executiveBriefings[1].description}
              </p>

              <ul className="space-y-4 mb-8">
                {executiveBriefings[1].points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="text-teal-600 font-bold mt-0.5">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md py-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                Download Briefing
              </button>
            </div>
          </div>

                    {/* ================= CARD 3 ================= */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-teal-600 px-5 py-6">
              <p className="text-[10px] uppercase tracking-wide font-bold text-white/80 mb-3">
                {executiveBriefings[2].audience}
              </p>

              <h3 className="text-white text-lg font-bold leading-6">
                {executiveBriefings[2].title}
              </h3>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {executiveBriefings[2].description}
              </p>

              <ul className="space-y-4 mb-8">
                {executiveBriefings[2].points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="text-teal-600 font-bold mt-0.5">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md py-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                Download Briefing
              </button>
            </div>
          </div>

                    {/* ================= CARD 4 ================= */}

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
            <div className="bg-teal-600 px-5 py-6">
              <p className="text-[10px] uppercase tracking-wide font-bold text-white/80 mb-3">
                {executiveBriefings[3].audience}
              </p>

              <h3 className="text-white text-lg font-bold leading-6">
                {executiveBriefings[3].title}
              </h3>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {executiveBriefings[3].description}
              </p>

              <ul className="space-y-4 mb-8">
                {executiveBriefings[3].points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300"
                  >
                    <span className="text-teal-600 font-bold mt-0.5">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-auto w-full bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-md py-3 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition">
                Download Briefing
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  })()}
</section>

{/* ================= Decision Support Kit ================= */}

<section className="w-full bg-slate-100 dark:bg-slate-900/40 py-20">
  {(() => {
    const toolkitItems = [
      {
        icon: "📊",
        title: "Business Case Template",
        description:
          "Pre-structured with financial modelling, risk analysis, and implementation timeline — fill in your numbers and submit.",
      },
      {
        icon: "🧮",
        title: "ROI Calculator & Model",
        description:
          "Interactive Excel model — input workforce size, hourly cost, leakage estimate to generate a CFO-ready projection.",
      },
      {
        icon: "📋",
        title: "Executive Presentation",
        description:
          "16-slide PowerPoint designed for C-Suite and board — business case, governance, ROI, and deployment plan.",
      },
      {
        icon: "👥",
        title: "Stakeholder Alignment Brief",
        description:
          "Separate one-pagers for CFO, CHRO, General Counsel, and CIO — each addressing their specific questions.",
      },
      {
        icon: "📦",
        title: "Procurement Summary Pack",
        description:
          "Pricing justification, compliance overview, security summary, and DPA — bundled for immediate submission.",
      },
    ];

    return (
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
            Decision Support Kit
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Everything Required to Secure Internal Approval
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-base leading-7 max-w-3xl mx-auto">
            A complete internal sell-in toolkit — designed for champions who
            need to bring Finance, HR, Legal, and IT stakeholders to the same
            decision, without requiring a sales call for every step.
          </p>
        </div>

        {/* Toolkit Card */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">

          {/* Top Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-center py-8 px-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              Internal Approval Toolkit
            </h3>

            <p className="text-white/70 text-sm max-w-3xl mx-auto">
              Turn insight into a signed contract. Five purpose-built assets —
              one for each stakeholder between you and deployment.
            </p>
          </div>

          {/* Grid Starts */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5">

            {/* ---------- Item 1 ---------- */}

            <div className="border-r border-t border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-5">
                {toolkitItems[0].icon}
              </div>

              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">
                {toolkitItems[0].title}
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-8">
                {toolkitItems[0].description}
              </p>

              <button className="mt-auto text-teal-600 font-bold hover:underline">
                Download
              </button>
            </div>

                        {/* ---------- Item 2 ---------- */}

            <div className="border-r border-t border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-5">
                {toolkitItems[1].icon}
              </div>

              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">
                {toolkitItems[1].title}
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-8">
                {toolkitItems[1].description}
              </p>

              <button className="mt-auto text-teal-600 font-bold hover:underline">
                Download
              </button>
            </div>

            {/* ---------- Item 3 ---------- */}

            <div className="border-r border-t border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-5">
                {toolkitItems[2].icon}
              </div>

              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">
                {toolkitItems[2].title}
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-8">
                {toolkitItems[2].description}
              </p>

              <button className="mt-auto text-teal-600 font-bold hover:underline">
                Download
              </button>
            </div>

                        {/* ---------- Item 4 ---------- */}

            <div className="border-r border-t border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-5">
                {toolkitItems[3].icon}
              </div>

              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">
                {toolkitItems[3].title}
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-8">
                {toolkitItems[3].description}
              </p>

              <button className="mt-auto text-teal-600 font-bold hover:underline">
                Download
              </button>
            </div>

            {/* ---------- Item 5 ---------- */}

            <div className="border-t border-slate-200 dark:border-slate-700 p-6 flex flex-col items-center text-center">
              <div className="text-3xl mb-5">
                {toolkitItems[4].icon}
              </div>

              <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-4">
                {toolkitItems[4].title}
              </h4>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-5 mb-8">
                {toolkitItems[4].description}
              </p>

              <button className="mt-auto text-teal-600 font-bold hover:underline">
                Download
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  })()}
</section>

{/* ================= Compliance & Audit Hub ================= */}

<section className="w-full bg-white dark:bg-slate-900 py-20">
  {(() => {
    const complianceResources = [
      {
        icon: "⚖️",
        title: "GDPR & Privacy Mapping Pack",
        description:
          "Article-level GDPR alignment evidence, controller/processor documentation, data subject rights procedures, and privacy-by-design architecture proof.",
      },
      {
        icon: "📋",
        title: "Compliance Framework Alignment Matrix",
        description:
          "SOC 2, ISO 27001, GDPR, CCPA, NIST AI RMF, and EU AI Act — each framework mapped to governance response and evidence mechanism.",
      },
      {
        icon: "🔍",
        title: "Audit Readiness Checklist & Simulation Guide",
        description:
          "Pre-audit preparation checklist, evidence export procedures, and inspection simulation guidance for CQC, FCA, ISO, and SOC 2 scenarios.",
      },
      {
        icon: "📄",
        title: "Policy Templates & Governance Summaries",
        description:
          "Employer-facing workforce monitoring policy templates, notification letters, and governance summaries — ready for legal review and worker communication.",
      },
      {
        icon: "🛡️",
        title: "Security Documentation Bundle",
        description:
          "Penetration test summary, security architecture overview, shared responsibility model, and incident response framework for CISO review.",
      },
      {
        icon: "🔒",
        title: "Data Processing Agreement — Pre-Signed",
        description:
          "GDPR Article 28 compliant DPA — pre-signed, ready for counter-signature — with sub-processor list, SCCs, and jurisdiction addenda.",
      },
    ];

    return (
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
            Compliance & Audit Hub
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Governance, Privacy & Regulatory Resources
          </h2>

          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-3xl mx-auto">
            Materials for legal, compliance, privacy, and procurement stakeholders —
            everything that typically adds weeks to enterprise procurement cycles,
            available immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1 */}

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-2xl">
              {complianceResources[0].icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {complianceResources[0].title}
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {complianceResources[0].description}
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-2xl">
              {complianceResources[1].icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {complianceResources[1].title}
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {complianceResources[1].description}
              </p>
            </div>
          </div>

                    {/* Card 3 */}

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-2xl">
              {complianceResources[2].icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {complianceResources[2].title}
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {complianceResources[2].description}
              </p>
            </div>
          </div>

          {/* Card 4 */}

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-2xl">
              {complianceResources[3].icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {complianceResources[3].title}
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {complianceResources[3].description}
              </p>
            </div>
          </div>

                    {/* Card 5 */}

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-2xl">
              {complianceResources[4].icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {complianceResources[4].title}
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {complianceResources[4].description}
              </p>
            </div>
          </div>

          {/* Card 6 */}

          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm p-8 flex gap-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900 flex items-center justify-center text-2xl">
              {complianceResources[5].icon}
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {complianceResources[5].title}
              </h3>

              <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
                {complianceResources[5].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  })()}
</section>

{/* ================= Implementation & Technical Hub ================= */}

<section className="w-full bg-slate-100 dark:bg-slate-900 py-20">
  {(() => {
    const technicalResources = [
      {
        icon: "🏗️",
        title: "Platform Architecture Overview",
        description:
          "Five-layer system architecture documentation — verification engine, policy layer, AI reasoning, evidence generation, and reporting infrastructure.",
        button: "Download Architecture PDF →",
      },
      {
        icon: "🔐",
        title: "Security Architecture & Controls",
        description:
          "Encryption model, RBAC design, access logging architecture, and security boundary documentation for CISO and enterprise security review.",
        button: "Download Security Docs →",
      },
      {
        icon: "📊",
        title: "Data Flow Diagrams & Processing Maps",
        description:
          "Complete data flow diagrams — collection sources, processing pipeline, storage architecture, and output paths for GDPR Article 30 and technical review.",
        button: "Download Data Maps →",
      },
    ];

    return (
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
            Implementation & Technical Hub
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Deployment Intelligence for Technical Evaluators
          </h2>

          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-3xl mx-auto">
            The documentation that answers the questions that stall enterprise deals —
            architecture, integration, rollout, and adoption — before a sales call is required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* Card 1 */}

          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-8">
            <div className="text-3xl mb-6">
              {technicalResources[0].icon}
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {technicalResources[0].title}
            </h3>

            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 mb-8">
              {technicalResources[0].description}
            </p>

            <button className="text-teal-600 font-bold hover:underline">
              {technicalResources[0].button}
            </button>
          </div>

                    {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-8">
            <div className="text-3xl mb-6">
              {technicalResources[1].icon}
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {technicalResources[1].title}
            </h3>

            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 mb-8">
              {technicalResources[1].description}
            </p>

            <button className="text-teal-600 font-bold hover:underline">
              {technicalResources[1].button}
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-8">
            <div className="text-3xl mb-6">
              {technicalResources[2].icon}
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
              {technicalResources[2].title}
            </h3>

            <p className="text-sm leading-6 text-slate-500 dark:text-slate-400 mb-8">
              {technicalResources[2].description}
            </p>

            <button className="text-teal-600 font-bold hover:underline">
              {technicalResources[2].button}
            </button>
          </div>

        </div>
      </div>
    );
  })()}
</section>

{/* ================= Buyer Journey Engine ================= */}

<section className="w-full bg-white dark:bg-slate-900 py-20">
  {(() => {
    const buyerJourney = [
      {
        stage: "STAGE 01 — AWARENESS",
        color: "bg-slate-400",
        title: "Problem Framing",
        description:
          "Understand why workforce assurance is a governance and financial priority — before evaluating any solution.",
        resources: [
          "State of Workforce Assurance 2026 Report",
          "The Workforce Governance Gap — Executive Overview",
          "Payroll Leakage: A Hidden Financial Risk",
          "Why Traditional Time-Tracking Fails at Scale",
        ],
      },
      {
        stage: "STAGE 02 — EVALUATION",
        color: "bg-indigo-500",
        title: "Platform Assessment",
        description:
          "Build confidence in ZoikoTime's approach, architecture, and differentiation from alternatives.",
        resources: [
          "ZoikoTime Platform Architecture Overview",
          "Vendor Comparison Matrix",
          "Governance & Compliance Framework Explainer",
          "Security & Trust Documentation Bundle",
        ],
      },
      {
        stage: "STAGE 03 — DECISION",
        color: "bg-teal-600",
        title: "Business Case & Approval",
        description:
          "Assemble the evidence and materials needed to secure internal approval and advance procurement.",
        resources: [
          "Enterprise ROI Report 2026",
          "Internal Approval Toolkit (CFO, HR, Legal, IT)",
          "Industry Case Studies — Verified Outcomes",
          "Executive Briefing Packs — All Four Audiences",
        ],
      },
      {
        stage: "STAGE 04 — DEPLOYMENT",
        color: "bg-emerald-500",
        title: "Implementation Planning",
        description:
          "Transition from approved procurement to successful deployment with structured resources.",
        resources: [
          "3-Phase Deployment Framework",
          "HRIS / Payroll Integration Guides",
          "Employee Communication Pack",
          "Time-to-Value Optimisation Playbook",
        ],
      },
    ];

    return (
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-4">
            Buyer Journey Engine
          </p>

          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Resources for Every Stage of the Decision
          </h2>

          <p className="text-base text-slate-500 dark:text-slate-400 leading-7 max-w-2xl mx-auto">
            Each stage of the buying journey has a different information need.
            <br />
            ZoikoTime's resource library maps precisely to where you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {/* Stage 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="h-1 bg-slate-400" />

            <div className="p-6">
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
                {buyerJourney[0].stage}
              </p>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {buyerJourney[0].title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {buyerJourney[0].description}
              </p>

              <ul className="space-y-3">
                {buyerJourney[0].resources.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
                  >
                    <span className="text-teal-600 font-bold">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

                    {/* Stage 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="h-1 bg-indigo-500" />

            <div className="p-6">
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
                {buyerJourney[1].stage}
              </p>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {buyerJourney[1].title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {buyerJourney[1].description}
              </p>

              <ul className="space-y-3">
                {buyerJourney[1].resources.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
                  >
                    <span className="text-teal-600 font-bold">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

                    {/* Stage 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="h-1 bg-teal-600" />

            <div className="p-6">
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
                {buyerJourney[2].stage}
              </p>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {buyerJourney[2].title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {buyerJourney[2].description}
              </p>

              <ul className="space-y-3">
                {buyerJourney[2].resources.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
                  >
                    <span className="text-teal-600 font-bold">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

                    {/* Stage 4 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
            <div className="h-1 bg-emerald-500" />

            <div className="p-6">
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-4">
                {buyerJourney[3].stage}
              </p>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                {buyerJourney[3].title}
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-6 mb-6">
                {buyerJourney[3].description}
              </p>

              <ul className="space-y-3">
                {buyerJourney[3].resources.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400"
                  >
                    <span className="text-teal-600 font-bold">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    );
  })()}
</section>

{/* ================= Role-Based Intelligence ================= */}
<section className="w-full bg-slate-100 dark:bg-slate-900 py-12 lg:py-16 transition-colors duration-300">
  <div className="max-w-[1440px] mx-auto px-5 lg:px-[200px]">

    {/* Heading */}
    <div className="text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
        Role-Based Intelligence
      </p>

      <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
        See Only What Matters to You
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-base leading-7 text-slate-500 dark:text-slate-300">
        Each stakeholder has different questions and concerns. Select your role
        <br className="hidden lg:block" />
        — resources are curated specifically for your context and decision
        criteria.
      </p>
    </div>

    {/* Main Layout */}
    <div className="mt-12 flex flex-col lg:flex-row gap-8">

      {/* Left Card */}
      <div className="w-full lg:w-[320px] flex-shrink-0 rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-[0px_4px_16px_rgba(13,21,38,0.08)]">

        {/* Header */}
        <div className="bg-slate-900 px-5 pt-5 pb-4">
          <h3 className="text-lg font-bold text-white">
            CFO / Finance Leader
          </h3>

          <p className="mt-3 text-xs leading-5 text-white/90">
            ROI · Payroll control · Cost reduction ·
            <br />
            Margin impact
          </p>
        </div>

        {/* Questions */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-700">

          <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400 dark:text-slate-500">
            Your Primary Questions
          </p>

          <ul className="mt-5 space-y-6 text-xs leading-5 text-slate-700 dark:text-slate-300">

            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">›</span>
              <span>
                What is the measurable financial impact and ROI timeline?
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">›</span>
              <span>
                How quickly does ZoikoTime pay for itself?
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">›</span>
              <span>
                What is the cost of not acting — ongoing leakage, audit risk,
                fraud exposure?
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold">›</span>
              <span>
                How is pricing structured and how does it scale?
              </span>
            </li>

          </ul>
        </div>

        {/* Button */}
        <div className="px-5 py-4">
          <button className="mx-auto block w-full lg:w-[240px] rounded-md bg-teal-600 hover:bg-teal-700 transition-colors py-3 text-xs font-bold text-white">
            Download CFO Pack →
          </button>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Card 1 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0px_1px_4px_rgba(13,21,38,0.06)] overflow-hidden">
          <div className="p-5">
            <div className="inline-flex items-center rounded-full border border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-900/30 px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300">
                CFO Asset
              </span>
            </div>

            <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
              Enterprise ROI Report — 2026 Edition
            </h3>

            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-300">
              Verified financial impact across four workforce contexts
              with full methodology and industry benchmarks.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700 px-5 py-4">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              49 pages
            </span>

            <button className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
              Download →
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0px_1px_4px_rgba(13,21,38,0.06)] overflow-hidden">
          <div className="p-5">
            <div className="inline-flex items-center rounded-full border border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-900/30 px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300">
                CFO Asset
              </span>
            </div>

            <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
              Payroll Leakage Quantification Framework
            </h3>

            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-300">
              Step-by-step methodology for calculating your
              organisation&apos;s specific payroll leakage exposure.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700 px-5 py-4">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              Excel model
            </span>

            <button className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
              Download →
            </button>
          </div>
        </div>

                {/* Card 3 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0px_1px_4px_rgba(13,21,38,0.06)] overflow-hidden">
          <div className="p-5">
            <div className="inline-flex items-center rounded-full border border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-900/30 px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300">
                CFO Asset
              </span>
            </div>

            <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
              Financial Justification Executive Briefing
            </h3>

            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-300">
              Board-ready financial case — leakage, recovery,
              ROI timeline, and risk of inaction model.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700 px-5 py-4">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              12 pages
            </span>

            <button className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
              Download →
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-[0px_1px_4px_rgba(13,21,38,0.06)] overflow-hidden">
          <div className="p-5">
            <div className="inline-flex items-center rounded-full border border-amber-200 dark:border-amber-700 bg-amber-100 dark:bg-amber-900/30 px-3 py-1">
              <span className="text-[10px] font-bold uppercase tracking-wide text-amber-800 dark:text-amber-300">
                CFO Asset
              </span>
            </div>

            <h3 className="mt-5 text-base font-bold text-slate-900 dark:text-white">
              ZoikoTime Pricing &amp; ROI Pack
            </h3>

            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-300">
              Transparent pricing structure, ROI model, and
              complete procurement documentation bundle.
            </p>
          </div>

          <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-700 px-5 py-4">
            <span className="text-xs text-slate-400 dark:text-slate-500">
              Procurement pack
            </span>

            <button className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline">
              Download →
            </button>
          </div>
        </div>

              </div>
      {/* End Right Side Cards */}

    </div>
  </div>
</section>

{/* ================= End Role-Based Intelligence ================= */}


{/* ================= Stay Ahead of Workforce Intelligence ================= */}
<section className="w-full bg-slate-100 dark:bg-slate-900 py-12 lg:py-16 transition-colors duration-300">
  <div className="max-w-[1040px] mx-auto px-5">

    <div className="relative overflow-hidden rounded-2xl bg-slate-900 px-8 py-10 lg:px-12 lg:py-16">

      {/* Background Glow */}
      <div className="absolute -top-10 right-0 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl"></div>

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Content */}
        <div className="max-w-md">

          <h2 className="text-3xl font-extrabold leading-tight text-white">
            Stay Ahead of Workforce
            <br />
            Intelligence
          </h2>

          <p className="mt-6 text-sm leading-6 text-white/70">
            Strategic insights, enterprise guidance, and category updates
            relevant to workforce assurance, compliance, and performance
            intelligence — relevant to your role, not a generic newsletter.
          </p>

        </div>

        {/* Right Form */}
        <div className="w-full max-w-md space-y-4">

          <input
            type="email"
            placeholder="Your work email address"
            className="w-full rounded-md border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
          />

          <input
            type="text"
            placeholder="Your role (optional)"
            className="w-full rounded-md border border-white/20 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-400"
          />

                    <button className="w-full rounded-md bg-teal-600 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-700">
            Subscribe to Workforce Intelligence →
          </button>

          <p className="text-center text-xs text-white/70">
            No marketing. Strategic content only. Unsubscribe anytime.
          </p>

        </div>
      </div>

          </div>
  </div>
</section>

{/* ================= End Stay Ahead of Workforce Intelligence ================= */}

{/* ================= From Intelligence to Action ================= */}
<section className="w-full bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 py-14 lg:py-20 transition-colors duration-300">
  <div className="max-w-[1440px] mx-auto px-5">

    <div className="text-center">

      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
        From Intelligence to Action
      </p>

      <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold leading-tight">
        <span className="text-slate-900 dark:text-white">
          Turn This Insight Into an
          <br />
        </span>

        <span className="text-teal-600">
          Implementation Plan
        </span>
      </h2>

      <p className="mt-8 max-w-4xl mx-auto text-base leading-7 text-slate-500 dark:text-slate-300">
        ZoikoTime is designed to feel inevitable, credible, and deployable —
        before a sales call is ever booked. When you're ready to move from
        resources to action, we're ready to move with you.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

                <button className="w-full sm:w-auto rounded-md bg-teal-600 px-8 py-3 text-sm font-bold text-white shadow-[0px_4px_14px_rgba(0,157,140,0.28)] transition-colors hover:bg-teal-700">
          Request Demo
        </button>

        <button className="w-full sm:w-auto rounded-md border border-teal-600 bg-transparent px-8 py-3 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-600 hover:text-white dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-white">
          Talk to Sales
        </button>

      </div>
    </div>

      </div>
</section>

{/* ================= End From Intelligence to Action ================= */}
 
   </div>
 );
}