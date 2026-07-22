"use client"
import React, { useState } from 'react';
import Link from "next/link";
import { Play } from 'lucide-react';
type UseCaseKey = 'remote' | 'contractors' | 'regulated' | 'billable';
type IndustryKey = 'healthcare' | 'finance' | 'telecom' | 'logistics';
interface ScenarioStep {
  icon: string;
  title: string;
  description: string;
  badgeText: string;
  badgeType: 'emerald' | 'amber' | 'red';
}
interface TimelineStep {
  timeline: string;
  title: string;
  points: string[];
}
interface FAQItem {
  question: string;
}
export default function WorkforceUseCases() {
    const faqItems: FAQItem[] = [
    { question: 'Does ZoikoTime monitor employees invasively?' },
    { question: 'What data is actually collected?' },
    { question: 'How is privacy protected?' },
    { question: 'Can policies be customised for our organisation?' },
  ];
  const [selectedUseCase, setSelectedUseCase] = useState<UseCaseKey>('remote',);

  const useCases = [
    { id: 'remote' as UseCaseKey, label: 'Remote teams', icon: '🌍', section: 'Section A: Distributed Workforces', description: 'Distributed across locations?' },
    { id: 'contractors' as UseCaseKey, label: 'Contractors', icon: '🔄', section: 'Section B: Contractor & Gig Teams', description: 'Flexible, gig, or contractor-based?' },
    { id: 'regulated' as UseCaseKey, label: 'A regulated industry', icon: '⚖️', section: 'Section C: Regulated Industries', description: 'Operating in a regulated sector?' },
    { id: 'billable' as UseCaseKey, label: 'Client-billable teams', icon: '💼', section: 'Section D: Client-Billable Teams', description: 'Billing clients for time or output?' },
  ];
const layers = [
    {
      id: 'LAYER 01',
      title: 'The Problem',
      points: [
        'No visibility across locations and time zones',
        'Inconsistent time recording and policy adherence',
        'Low accountability without verified session data'
      ]
    },
    {
      id: 'LAYER 02',
      title: 'System Response',
      points: [
        'Real-time session tracking across all regions',
        'Location validation with policy-aligned assurance',
        'Identity verification per worker, per session'
      ]
    },
    {
      id: 'LAYER 03',
      title: 'AI Reasoning',
      points: [
        'Location mismatch detection against expected region',
        'Behavioural deviation from individual baseline',
        'Device inconsistency flagging mid-session'
      ]
    },
    {
      id: 'LAYER 04',
      title: 'Evidence Generated',
      points: [
        'Timestamped session logs with location proof',
        'Identity verification records per session',
        'Anomaly explanations with confidence scores'
      ]
    },
    {
      id: 'LAYER 05',
      title: 'Measurable Outcome',
      points: [
        '+100% real-time visibility across all locations',
        '-35% time discrepancies within 90 days',
        'Payroll disputes eliminated through verified evidence'
      ]
    }
  ];
  const [employees, setEmployees] = useState<number>(500);
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [leakage, setLeakage] = useState<number>(3);

  // Industry Tab State
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>('healthcare');

  // Simple reactive calculations for ROI section
  const monthlyLeakage = Math.round((employees * hourlyRate * (leakage / 100) * 160)); 
  const annualRecoverable = monthlyLeakage * 12;

  const industries = [
    { id: 'healthcare' as IndustryKey, icon: '🏥', label: 'Healthcare' },
    { id: 'finance' as IndustryKey, icon: '🏦', label: 'Financial Services' },
    { id: 'telecom' as IndustryKey, icon: '📡', label: 'Telecom / BPO' },
    { id: 'logistics' as IndustryKey, icon: '🚛', label: 'Logistics' },
  ];
  const steps: ScenarioStep[] = [
    {
      icon: '👤',
      title: 'System Validates Identity',
      description: 'Contractor USR-04417 authenticated — biometric and device signals confirmed. Identity matches registered profile. Session opened with confidence tracking initiated.',
      badgeText: 'ID: 97',
      badgeType: 'emerald',
    },
    {
      icon: '⚠️',
      title: 'Idle Time Anomaly Detected',
      description: 'Activity signals drop below expected threshold at 14:20 — session continues but no productive activity detected for 47 minutes. Behavioural deviation from individual baseline.',
      badgeText: 'Sess: 71',
      badgeType: 'amber',
    },
    {
      icon: '🚩',
      title: 'Inconsistency Flagged by AI Engine',
      description: 'Adversarial detection engine classifies pattern as potential idle masking — activity suppression followed by artificial burst. Confidence score drops to 68. Billing gate triggered.',
      badgeText: 'Risk: 68',
      badgeType: 'red',
    },
    {
      icon: '📂',
      title: 'Evidence Record Created',
      description: 'Structured evidence object created — raw session data, idle pattern analysis, AI classification, confidence score timeline, and policy reference all embedded. Chain of custody initiated.',
      badgeText: 'Evidence ✓',
      badgeType: 'emerald',
    },
    {
      icon: '⚖️',
      title: 'Confidence Score Assigned — Billing Held',
      description: 'Final composite confidence: 71. Below policy threshold (80). 8 hours of logged time blocked from billing pipeline pending human review. Contractor notified. HR manager alerted.',
      badgeText: '71 — Held',
      badgeType: 'amber',
    },
    {
      icon: '✅',
      title: 'Human Review — Decision Made',
      description: 'HR manager reviews evidence record with full AI reasoning. 5.2 hours of verified activity confirmed — 2.8 hours of unverified idle time excluded from billing. Resolution: partial payment approved.',
      badgeText: 'Resolved ✓',
      badgeType: 'emerald',
    },
  ];

  const badgeStyles = {
    emerald: 'bg-emerald-50 dark:bg-emerald-950/40 text-teal-600 dark:text-teal-400',
    amber: 'bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
    red: 'bg-red-100 dark:bg-red-950/40 text-red-500 dark:text-red-400',
  };
  const roadmapSteps: TimelineStep[] = [
    {
      timeline: 'WEEK 1 — FOUNDATION',
      title: 'Data Connection & Initial Visibility',
      points: [
        'Integration with HRIS, payroll, and identity systems completed',
        'Initial workforce visibility activated — real-time session data flowing',
        'Jurisdiction rules configured for all operating regions',
        'First session confidence scores generated and visible to admin team'
      ]
    },
    {
      timeline: 'WEEKS 2–4 — ACTIVATION',
      title: 'Policy Configuration & Workforce Tracking',
      points: [
        'Full policy configuration across all workforce types, roles, and regions',
        'Anomaly detection baselines established from live data',
        'HR, Finance, and Compliance teams trained and onboarded',
        'First anomaly reports and financial exposure summaries available'
      ]
    },
    {
      timeline: 'MONTH 2+ — OPTIMISATION',
      title: 'Insights, Optimisation & Full Audit Readiness',
      points: [
        'Performance intelligence models optimised from live verified data',
        'Full audit readiness achieved — evidence records active across all operations',
        'Executive reporting configured — ROI realisation visible to CFO',
        'Continuous improvement programme initiated with dedicated account team'
      ]
    }
  ];
  return (
    <div className="w-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased transition-colors duration-200">
      
      {/* --- SECTION 1: HERO / SELECTOR PANEL --- */}
      <section className="relative w-full bg-gradient-to-b from-teal-50/50 to-white dark:from-slate-900 dark:to-slate-950 pt-16 pb-20 px-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.05)] border-b border-slate-200/60 dark:border-slate-800/80 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Tag */}
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
            Use Cases
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-2xl mx-auto leading-[1.15] mb-6">
            Where Does Workforce Uncertainty Exist in <span className="text-teal-600 dark:text-teal-400">Your Organisation?</span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal max-w-3xl mx-auto leading-relaxed mb-10">
            ZoikoTime adapts to your operational reality — not the other way around. Select your context to see exactly how ZoikoTime addresses your specific workforce challenges.
          </p>

          {/* Context Filter Section */}
          <div className="space-y-4">
            <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider block">
              I manage or operate
            </span>
            
            {/* Interactive Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {useCases.map((uc) => {
                const isActive = selectedUseCase === uc.id;
                return (
                  <button
                    key={uc.id}
                    onClick={() => setSelectedUseCase(uc.id)}
                    className={`px-5 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-sm flex items-center gap-2 border ${
                      isActive
                        ? 'bg-teal-600 text-white border-teal-600 shadow-[0px_4px_14px_0px_rgba(0,157,140,0.25)]'
                        : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700'
                    }`}
                  >
                    <span>{uc.icon}</span>
                    <span>{uc.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notice bottom */}
          <p className="text-slate-400 dark:text-slate-500 text-xs mt-8">
            Page content adapts to your selection — scroll to see your relevant use case, metrics, and system response.
          </p>
        </div>
      </section>

      {/* --- SECTION 2: DECISION TREE GRID --- */}
      <section className="bg-slate-100 dark:bg-slate-900/40 py-20 px-4 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-12">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              Find Your Use Case in 10 Seconds
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              A Decision Tree for Your Workforce Reality
            </h2>
          </div>

          {/* Main Decision Matrix Card Container */}
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl p-8 lg:p-12">
            <h3 className="text-slate-900 dark:text-white text-lg font-bold text-center mb-10">
              Is your workforce primarily...
            </h3>

            {/* Desktop Flex Grid with Arrows / Mobile Layout Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
              {useCases.map((uc, index) => {
                const isSelected = selectedUseCase === uc.id;
                return (
                  <div key={uc.id} className="relative flex flex-col items-center text-center group">
                    
                    {/* Circle Icon Badge */}
                    <div className={`size-14 rounded-full flex items-center justify-center text-2xl transition-all mb-4 border-2 border-teal-600 dark:border-teal-400
                    }`}>
                      {uc.icon}
                    </div>

                    {/* Short Description */}
                    <h4 className="text-slate-900 dark:text-white text-sm font-bold max-w-[170px] leading-snug mb-4 h-12 flex items-center justify-center">
                      {uc.description}
                    </h4>

                    {/* Router Destination Link */}
                    <span className={`text-xs font-semibold mt-auto flex items-center gap-1 transition-colorstext-teal-600 dark:text-teal-400 
                    }`}>
                      ➔ {uc.section}
                    </span>

                    {/* Desktop horizontal flow arrows connecting cards */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-4 -right-2 text-teal-600 dark:text-teal-400 font-bold text-lg select-none pointer-events-none">
                        ➔
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
      <section className="w-full max-w-[1040px] mx-auto px-4 py-8 antialiased bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
              <header className="relative w-full bg-teal-600 dark:bg-teal-700 rounded-2xl p-6 md:p-10 text-white overflow-hidden shadow-md mb-8">
        {/* Glow ambient background element */}
        <div className="absolute right-0 top-0 w-72 h-72 rounded-full bg-gradient-to-br from-teal-400/20 to-transparent pointer-events-none filter blur-xl" />
        
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 relative z-10">
          <span className="text-4xl md:text-5xl select-none" role="img" aria-label="world map">🌍</span>
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Section A — Distributed Workforces
            </h2>
            <p className="text-white/80 dark:text-white/90 text-sm md:text-base font-normal max-w-[865px] leading-relaxed">
              No visibility across locations, time inconsistencies, and low accountability — ZoikoTime provides centralised command with verified, policy-aligned governance across every team, region, and time zone.
            </p>
          </div>
        </div>
      </header>

      {/* --- LAYER ARCHITECTURE GRID --- */}
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {layers.map((layer) => (
          <section 
            key={layer.id} 
            className="relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between overflow-hidden group"
          >
            {/* Top Indicator Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            
            <div>
              {/* Layer Number Badge */}
              <div className="text-[10px] font-bold font-['JetBrains_Mono',monospace] text-teal-600 dark:text-teal-400 tracking-wider mb-2">
                {layer.id}
              </div>
              
              {/* Layer Heading */}
              <h3 className="text-slate-900 dark:text-white text-base font-bold mb-4 leading-snug">
                {layer.title}
              </h3>
              
              {/* Key Bulleted Items */}
              <ul className="space-y-4">
                {layer.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs font-normal text-slate-500 dark:text-slate-400 leading-relaxed">
                    <span className="text-teal-600 dark:text-teal-400 font-bold select-none mt-0.5">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>

      {/* --- MEASURED OUTCOMES FOOTER SUMMARY --- */}
      <footer className="w-full bg-emerald-50/70 dark:bg-emerald-950/20 border border-teal-600/20 dark:border-teal-500/30 rounded-xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 text-sm font-bold">
          <span role="img" aria-label="chart">📊</span>
          <span>Measured Outcomes — Distributed Workforce Deployments</span>
        </div>
        
        {/* Statistics Grid */}
        <div className="flex flex-wrap items-center gap-8 lg:gap-12">
          {/* Stat 1 */}
          <div className="flex flex-col min-w-[80px]">
            <span className="text-teal-600 dark:text-teal-400 text-xl font-extrabold font-['JetBrains_Mono',monospace] leading-tight">
              +100%
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
              Visibility
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col min-w-[80px]">
            <span className="text-teal-600 dark:text-teal-400 text-xl font-extrabold font-['JetBrains_Mono',monospace] leading-tight">
              -35%
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
              Discrepancies
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col min-w-[100px]">
            <span className="text-teal-600 dark:text-teal-400 text-xl font-extrabold font-['JetBrains_Mono',monospace] leading-tight">
              98.4%
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-xs font-normal mt-1">
              Compliance Rate
            </span>  
          </div>
        </div>
      </footer>

    </section>
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-11 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Informational Content */}
        <div className="space-y-6">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            ROI Engine
          </span>
          <h2 className="text-3xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Quantify the Impact on Your<br/>Business
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base font-normal max-w-md leading-relaxed">
            Every workforce is different. ZoikoTime's ROI calculator models your specific financial opportunity — converting interest into the financial justification your CFO needs to approve deployment.
          </p>

          {/* Callout Card */}
          <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-teal-600/20 dark:border-teal-500/30 rounded-xl p-6 max-w-xl">
            <span className="text-teal-700 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-2">
              Example insight
            </span>
            <p className="text-slate-700 dark:text-slate-300 text-sm font-normal leading-relaxed">
              A 500-person distributed workforce operating at 3% time leakage recovers an estimated <span className="text-teal-600 dark:text-teal-400 font-bold">£345K annually</span> — with a payback period under 2 months at standard enterprise pricing.
            </p>
          </div>
        </div>

        {/* Right Active Calculator Widget */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden max-w-lg w-full justify-self-center lg:justify-self-end">
          <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-slate-900 dark:text-white text-sm font-bold">
              Workforce ROI Calculator
            </h3>
          </div>

          <div className="p-6 space-y-6">
            {/* Control 1: Employees */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                <label htmlFor="employees-range">Number of employees</label>
                <span className="text-teal-600 dark:text-teal-400 font-mono font-bold">{employees}</span>
              </div>
              <input 
                id="employees-range"
                type="range" 
                min="10" 
                max="5000" 
                value={employees} 
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-600" 
              />
            </div>

            {/* Control 2: Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                <label htmlFor="rate-range">Avg hourly cost (£)</label>
                <span className="text-teal-600 dark:text-teal-400 font-mono font-bold">£{hourlyRate}</span>
              </div>
              <input 
                id="rate-range"
                type="range" 
                min="15" 
                max="150" 
                value={hourlyRate} 
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-600" 
              />
            </div>

            {/* Control 3: Leakage */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                <label htmlFor="leakage-range">Time leakage estimate (%)</label>
                <span className="text-teal-600 dark:text-teal-400 font-mono font-bold">{leakage}%</span>
              </div>
              <input 
                id="leakage-range"
                type="range" 
                min="1" 
                max="15" 
                value={leakage} 
                onChange={(e) => setLeakage(Number(e.target.value))}
                className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-600" 
              />
            </div>
          </div>

          {/* Results Block */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/10 border-t border-teal-600/10 dark:border-teal-500/20 p-6 grid grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-teal-600/5 text-center">
              <div className="text-teal-600 dark:text-teal-400 text-xl font-extrabold font-mono">
                £{(monthlyLeakage / 1000).toFixed(0)}K
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold mt-1">
                Monthly leakage identified
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-teal-600/5 text-center">
              <div className="text-teal-600 dark:text-teal-400 text-xl font-extrabold font-mono">
                £{(annualRecoverable >= 1000000) ? `${(annualRecoverable / 1000000).toFixed(1)}M` : `${(annualRecoverable / 1000).toFixed(0)}K`}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold mt-1">
                Annual recoverable value
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-teal-600/5 text-center">
              <div className="text-teal-600 dark:text-teal-400 text-xl font-extrabold font-mono">
                252%
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold mt-1">
                Estimated 1st-year ROI
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-teal-600/5 text-center">
              <div className="text-teal-600 dark:text-teal-400 text-xl font-extrabold font-mono">
                &lt; 2mo
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-[11px] font-semibold mt-1">
                Payback period
              </div>
            </div>
          </div>

          {/* Action CTA inside Calculator */}
          <div className="p-6 bg-white dark:bg-slate-900">
            <button className="w-full py-3 bg-teal-600 hover:bg-teal-700 transition text-white font-semibold rounded-lg text-sm shadow-md shadow-teal-600/20">
              Generate Full ROI Report →
            </button>
          </div>
        </div>
      </section>

     
      <section className="w-full bg-white dark:bg-slate-900 py-10 px-4 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          {/* Section Heading headers */}
          <div className="text-center space-y-3 mb-12">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
              Industry
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tailored for Your Industry
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
              The same core capabilities, configured for the specific compliance requirements, workforce structures, and business metrics of your industry.
            </p>
          </div>

          {/* Tab Selection Filter Control bar */}
          <div className="flex flex-wrap justify-center border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden max-w-2xl mx-auto mb-16 p-1 bg-slate-50 dark:bg-slate-800">
            {industries.map((ind) => {
              const isTabActive = activeIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`flex-1 min-w-[140px] text-center px-4 py-2.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                    isTabActive 
                      ? 'bg-teal-600 text-white shadow-sm' 
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                  }`}
                >
                  {ind.icon} {ind.label}
                </button>
              );
            })}
          </div>

          {/* Content Split Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Industry Profile Copy Left */}
            <div className="space-y-6">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold">
                Healthcare & Life Sciences
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                Shift compliance, staff-to-patient ratios, and regulatory documentation are critical in healthcare. ZoikoTime provides the verified shift records, jurisdiction-specific compliance controls, and audit-ready documentation that healthcare operations require.
              </p>

              {/* Badges/Tags Grid */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['Shift compliance tracking', 'Audit-ready documentation', 'CQC & regulatory alignment', 'Agency staff verification'].map((badge, idx) => (
                  <span 
                    key={idx} 
                    className="bg-emerald-50 dark:bg-emerald-950/30 border border-teal-600/10 dark:border-teal-500/20 text-teal-800 dark:text-teal-300 text-xs font-bold px-4 py-2 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro Feature List Cards Right */}
            <div className="space-y-4 w-full">
              
              {/* Card 1 */}
              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                <div className="w-10 h-10 shrink-0 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center text-lg shadow-sm">
                  📋
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-1">
                    Shift Compliance Verification
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                    Every shift is verified against staffing policy, rest period requirements, and patient-ratio guidelines — with tamper-evident records for CQC inspection.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                <div className="w-10 h-10 shrink-0 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center text-lg shadow-sm">
                  🏛️
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-1">
                    Regulatory Audit Readiness
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                    Audit-ready documentation generated continuously — zero preparation time when a regulatory inspection is announced. First clean audit achieved by every healthcare client.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                <div className="w-10 h-10 shrink-0 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center text-lg shadow-sm">
                  👥
                </div>
                <div>
                  <h4 className="text-slate-900 dark:text-white text-sm font-bold mb-1">
                    Agency & Locum Verification
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed">
                    Agency staff and locum workers are subject to the same verification standards as permanent staff — no verification gaps from flexible workforce arrangements.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="w-full bg-slate-100 dark:bg-slate-950 transition-colors duration-200 antialiased  py-10 px-4 md:py-10">
      <div className="max-w-[1040px] mx-auto space-y-10">
        
        {/* --- HEADER --- */}
        <header className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            See It In Action
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Watch a Real Scenario Unfold
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            A contractor logs 8 hours. ZoikoTime processes every signal in real time — identity, execution, quality, and billing validity — producing a decision and evidence record in seconds.
          </p>
        </header>

        {/* --- LIVE SYSTEM CONSOLE OVERLAY --- */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col">
          
          {/* Top Bar Status */}
          <div className="bg-slate-50 dark:bg-slate-800/60 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <h3 className="text-slate-900 dark:text-white text-xs font-bold">
              Scenario: Contractor logs 8 hours — Live System Processing
            </h3>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-teal-600 dark:bg-teal-400 rounded-full animate-pulse" />
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wide">
                Processing Active
              </span>
            </div>
          </div>

          {/* Timeline Items Wrapper */}
          <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 flex flex-col sm:flex-row items-start gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors duration-150"
              >
                {/* Icon Wrapper box */}
                <div className={`h-9 w-9 shrink-0 flex items-center justify-center rounded-lg text-base select-none ${
                  step.badgeType === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-950/30' : 
                  step.badgeType === 'amber' ? 'bg-amber-100 dark:bg-amber-950/30' : 'bg-red-100 dark:bg-red-950/30'
                }`}>
                  {step.icon}
                </div>

                {/* Main Step Detail Block */}
                <div className="flex-1 space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="text-slate-900 dark:text-white text-sm font-bold">
                      {step.title}
                    </h4>
                    
                    {/* Unique Identifier Badge */}
                    <span className={`text-xs font-bold font-mono px-3 py-0.5 rounded-full ${badgeStyles[step.badgeType]}`}>
                      {step.badgeText}
                    </span>
                  </div>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-relaxed max-w-4xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consolidated Intelligence Strip */}
          <footer className="bg-emerald-50/60 dark:bg-emerald-950/20 border-t border-teal-600/10 dark:border-teal-500/20 px-6 py-4 flex items-center">
            <p className="text-teal-800 dark:text-teal-300 text-xs font-semibold leading-relaxed">
              📊 <span className="font-bold">System intelligence:</span> 2.8 verified idle hours excluded — £49.00 prevented from incorrect billing. Evidence record sealed and available for audit.
            </p>
          </footer>

        </div>

      </div>
    </section>
<section className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-10 px-4 md:py-11 transition-colors duration-200 antialiased font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* --- HEADER --- */}
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            What to Expect
          </span>
          <h2 className="text-3xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-3xl mx-auto">
            What to Expect When You Deploy ZoikoTime
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            A structured, predictable deployment model — from initial data connection through to full audit readiness — without disrupting your existing systems or operations.
          </p>
        </div>

        {/* --- TIMELINE MILESTONE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch pt-4">
          {roadmapSteps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              
              {/* Timeline Duration Badge */}
              <div className="text-teal-600 dark:text-teal-400 text-xs font-bold font-['JetBrains_Mono',monospace] tracking-wider mb-3">
                {step.timeline}
              </div>
              
              {/* Title Header */}
              <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-6 leading-snug">
                {step.title}
              </h3>
              
              {/* Points List */}
              <ul className="space-y-4 flex-1">
                {step.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-normal">
                    <span className="h-1.5 w-1.5 bg-teal-600 dark:bg-teal-400 rounded-full shrink-0 mt-[7px]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="max-w-6xl mx-auto py-10 px-4 md:py-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            Frequently Asked
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Pre-Demo Questions
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            The questions we hear most often — answered plainly, before your first conversation with our team.
          </p>
        </div>

        {/* 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between gap-4 group cursor-pointer hover:border-teal-500/30 transition-all duration-150"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-sm md:text-base font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {item.question}
              </h3>
              <span className="text-teal-600 dark:text-teal-400 text-xl font-bold select-none shrink-0 px-1">
                +
              </span>
            </div>
          ))}
        </div>
      </section>

     
      <section className="relative w-full bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-950 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 px-4 md:py-10 overflow-hidden">
        
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            Get Started
          </span>

          <h2 className="text-4xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none max-w-2xl mx-auto">
            See Exactly How ZoikoTime <br />
            <span className="text-teal-600 dark:text-teal-400">Fits Your Organisation</span>
          </h2>

          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Request a tailored demo shaped around your specific workforce model, industry requirements, and governance challenges — not a generic product walkthrough.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 pt-4 max-w-2xl mx-auto">
            
             <Link
    href="/request-tailored-demo"
    className="w-full sm:w-auto px-6 h-12 bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-semibold text-base rounded-lg shadow-[0px_4px_14px_0px_rgba(0,157,140,0.25)] flex items-center justify-center gap-2.5 transition-all"
  >
    <Play className="w-4 h-4" />
    <span>Request Tailored Demo</span>
  </Link>

            {/* Action 2: Secondary Calculate Outlines */}
            <Link
  href="/calculate-your-roi"
  className="
    flex
    h-12
    w-52
    items-center
    justify-center
    rounded-lg
    border
    border-teal-600
    text-center
    text-base
    font-semibold
    text-teal-600
    transition
    hover:bg-teal-600
    hover:text-white
  "
>
  Calculate Your ROI
</Link>

            
            {/*
<button className="w-full sm:w-auto sm:col-span-2 px-8 h-12 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 font-medium text-base rounded-lg transition-colors">
  Speak to Solutions Architect
</button>
*/}

          </div>

        </div>
      </section>
    </div>
  );
}