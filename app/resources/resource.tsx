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
    </div>
  );
}