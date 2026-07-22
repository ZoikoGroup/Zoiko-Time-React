"use client"
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Link from "next/link";

interface ModuleLayer {
  id: number;
  title: string;
  icon: string;
}

interface StepItem {
  step: string;
  title: string;
  icon: string;
  status: string;
}

export default function Product() {
  const [activeLayer, setActiveLayer] = useState<number>(1);

  const modules: ModuleLayer[] = [
    { id: 1, title: 'Session & Identity Assurance', icon: '👤' },
    { id: 2, title: 'Performance Intelligence', icon: '📊' },
    { id: 3, title: 'Policy & Location Context', icon: '📍' },
    { id: 4, title: 'Integrity & Anomaly Detection', icon: '🔍' },
    { id: 5, title: 'Evidence Capture', icon: '📂' },
    { id: 6, title: 'Audit & HR Enablement', icon: '⚖️' },
  ];

  const steps: StepItem[] = [
    { step: 'Step 01', title: 'Session Starts', icon: '🚀', status: 'Initiated' },
    { step: 'Step 02', title: 'Identity Validated', icon: '👤', status: '97%' },
    { step: 'Step 03', title: 'Location Verified', icon: '📍', status: '91%' },
    { step: 'Step 04', title: 'Activity Analysed', icon: '🧠', status: '88%' },
    { step: 'Step 05', title: 'Policy Applied', icon: '⚙️', status: 'Enforced' },
    { step: 'Step 06', title: 'Evidence Generated', icon: '📂', status: 'Sealed' },
    { step: 'Step 07', title: 'Score Assigned', icon: '🎯', status: '92% ✓' },
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 antialiased selection:bg-teal-500/30 transition-colors duration-200">
      
      {/* --- SECTION 1: HERO CONTAINER --- */}
      <section className="relative min-h-[568px] w-full overflow-hidden bg-gradient-to-tr from-emerald-50/40 via-slate-50 via-40% to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 pt-16 pb-20">
        {/* Top Decorative Gradient Border */}
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
        
        {/* Background Radial Glow */}
        <div className="absolute -top-10 -left-40 size-[500px] rounded-full bg-radial from-teal-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative z-10">
          {/* Platform Tag */}
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-4 block">
            ZoikoTime® Platform
          </span>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight max-w-3xl leading-[1.2] mb-4">
            A System of Record for <span className="text-teal-600 dark:text-teal-400">Workforce Truth</span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-500 dark:text-slate-400 text-lg font-normal max-w-3xl leading-relaxed mb-8">
            Real-time workforce assurance, performance intelligence, and audit-ready evidence — across every employee, contractor, and jurisdiction.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 w-full sm:w-auto">
            
            <Link
            href="request-enterprise-demo"
             className="w-full sm:w-72 h-12 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-lg shadow-[0px_4px_18px_0px_rgba(0,157,140,0.32)] transition-colors flex items-center justify-center gap-2">
              <Play className="w-3 h-3 fill-current" />
              Request Enterprise Demo
            </Link>
            
            
            <button className="w-full sm:w-80 h-12 bg-white hover:bg-slate-50 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-slate-700 font-semibold rounded-lg border border-slate-300 shadow-sm transition-colors">
              See How It Works in 90 Seconds
            </button>
          </div>

          {/* Compliance & Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {[
              "SOC 2 Type II",
              "ISO 27001",
              "GDPR / Multi-Jurisdiction",
              "Human-in-Command AI"
            ].map((badge, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-2 px-4 py-1.5 bg-white/90 dark:bg-slate-800/90 rounded-full border border-slate-200/80 dark:border-slate-700 shadow-sm"
              >
                <span className="size-1.5 rounded-full bg-teal-600 dark:bg-teal-400 block shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 text-xs font-semibold">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: COMPARISON TABLE CONTAINER --- */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-10 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Section Headers */}
          <div className="text-center mb-12">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              Beyond Time Tracking
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Beyond Time Tracking. Beyond Monitoring.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              ZoikoTime does not improve legacy workforce tools — it replaces the category with workforce assurance infrastructure that those tools were never designed to provide.
            </p>
          </div>

          {/* Table Card Wrapper */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
            {/* Table Top Bar */}
            <div className="bg-slate-50/70 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex justify-between items-center flex-wrap gap-2">
              <h3 className="text-slate-900 dark:text-white text-base font-bold">
                What ZoikoTime Replaces — A Category Comparison
              </h3>
              <span className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-3 py-1 rounded-full">
                Category Shift
              </span>
            </div>

            {/* Main Desktop Responsive Grid/Table Layout */}
            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Table Header Row */}
                <div className="grid grid-cols-12 bg-slate-50 dark:bg-slate-800/30 border-b border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wide">
                  <div className="col-span-3 px-6 py-3.5 text-slate-700 dark:text-slate-300 border-r border-slate-200/60 dark:border-slate-700">Area</div>
                  <div className="col-span-4 px-6 py-3.5 text-slate-500 dark:text-slate-400 border-r border-slate-200/60 dark:border-slate-700">Legacy Tools</div>
                  <div className="col-span-5 px-6 py-3.5 text-teal-600 dark:text-teal-400 bg-emerald-50/50 dark:bg-emerald-950/10">ZoikoTime®</div>
                </div>

                {/* Table Content Rows */}
                <div className="divide-y divide-slate-200 dark:divide-slate-700">
                  {[
                    {
                      area: "Time recording",
                      legacy: "Timesheets — self-reported, unverified, editable",
                      zoiko: "Continuous verification — session-validated, policy-aligned, evidenced"
                    },
                    {
                      area: "Employee monitoring",
                      legacy: "Screenshots — invasive, uncontextualised, inadmissible",
                      zoiko: "Contextual intelligence — signals-based, explainable, human-overseen"
                    },
                    {
                      area: "Audit preparation",
                      legacy: "Manual audits — retrospective, expensive, incomplete",
                      zoiko: "Automated evidence — continuous, tamper-evident, regulator-ready"
                    },
                    {
                      area: "Compliance posture",
                      legacy: "Reactive compliance — gaps discovered after the fact",
                      zoiko: "Continuous assurance — controls enforced and validated in real time"
                    },
                    {
                      area: "Risk response",
                      legacy: "Observation and reporting — no automated control",
                      zoiko: "Active risk management — confidence-based decisions, human oversight"
                    }
                  ].map((row, index) => (
                    <div key={index} className="grid grid-cols-12 text-sm">
                      {/* Area Column */}
                      <div className="col-span-3 px-6 py-5 font-bold text-slate-900 dark:text-white flex items-center border-r border-slate-200/60 dark:border-slate-700">
                        {row.area}
                      </div>
                      
                      {/* Legacy Column */}
                      <div className="col-span-4 px-6 py-5 text-slate-400 dark:text-slate-400 font-normal leading-relaxed flex items-center border-r border-slate-200/60 dark:border-slate-700">
                        {row.legacy}
                      </div>
                      
                      {/* ZoikoTime Advantage Column */}
                      <div className="col-span-5 px-6 py-5 bg-teal-600/[0.02] dark:bg-teal-400/[0.01] text-teal-600 dark:text-teal-400 font-semibold leading-relaxed flex items-center">
                        {row.zoiko}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: CORE INTELLIGENCE LAYERS --- */}
      <section className="w-full bg-slate-50 dark:bg-slate-950 py-20 text-slate-900 dark:text-slate-100 antialiased selection:bg-teal-500/30">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              Core Intelligence Layers
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              The Core Intelligence Layers
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Six interlocking modules — each solving a distinct problem, all working together as a single, continuous assurance system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Interactive Module Selector Blocks */}
            <div className="col-span-1 lg:col-span-5 space-y-4 w-full">
              {modules.map((module) => {
                const isActive = activeLayer === module.id;
                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveLayer(module.id)}
                    className={`w-full flex items-center p-5 rounded-xl transition-all duration-200 text-left cursor-pointer border ${
                      isActive
                        ? 'bg-white dark:bg-slate-800 border-teal-600/30 dark:border-teal-500/50 shadow-[0px_8px_32px_0px_rgba(0,157,140,0.12)]'
                        : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm'
                    }`}
                  >
                    <div className="size-10 bg-emerald-50 dark:bg-emerald-950/50 rounded-lg flex items-center justify-center shrink-0 mr-4">
                      <span className="text-slate-700 dark:text-slate-300 text-lg leading-none" role="img" aria-label={module.title}>
                        {module.icon}
                      </span>
                    </div>
                    <span className="text-slate-900 dark:text-white text-base font-bold tracking-tight">
                      {module.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Dynamic Dashboard View Mockup */}
            <div className="col-span-1 lg:col-span-7 flex justify-center w-full mt-2 lg:mt-0">
              <img className='w-140 h-140'
              src="/product/image 2 (1).png"
              alt="image"
              />
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: SEVEN STEPS TIMELINE COMPONENT --- */}
      <section className="w-full bg-slate-100 dark:bg-slate-900/50 py-10 text-slate-900 dark:text-slate-100 antialiased selection:bg-teal-500/30">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              See the System Think
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Seven Steps from Session to Certainty
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Every session passes through the same seven-step pipeline — each with a defined input, AI reasoning process, output, and confidence signal. Explainability is not an afterthought — it is the system.
            </p>
          </div>

          {/* Timeline Scroll Container */}
          <div className="relative w-full overflow-x-auto pb-4 scrollbar-thin">
            <div className="min-w-[1024px] relative px-4 py-8">
              {/* Connecting Horizontal Gradient Line */}
              <div className="absolute top-[64px] left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-teal-600 to-teal-500 z-0 opacity-60" />

              <div className="grid grid-cols-7 relative z-10 gap-2">
                {steps.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="size-16 bg-white dark:bg-slate-800 rounded-full shadow-md border border-slate-200 dark:border-slate-700 flex items-center justify-center mb-4 transform transition-transform hover:scale-105">
                      <span className="text-2xl leading-none">{item.icon}</span>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-1.5">{item.step}</span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1 max-w-[120px] leading-tight">{item.title}</h4>
                    <span className="text-xs font-bold text-teal-600 dark:text-teal-400">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl p-6 border border-teal-600/10 text-center">
            <p className="text-teal-700 dark:text-teal-300 text-sm md:text-base font-semibold leading-relaxed">
              Each step produces a decision-grade output — input signal, AI reasoning, policy applied, and confidence percentage. Palantir-level system explainability, built for every session, every time.
            </p>
          </div>

        </div>
      </section>

      {/* --- SECTION 5: HUMAN-IN-COMMAND PANEL --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
              Human-in-Command AI
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              AI That Explains — And Defers When It Should
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
              ZoikoTime AI surfaces risk and intelligence — but humans retain decision authority at every consequential point. No automated disciplinary outcomes. No unexplained decisions. Every action is explainable, auditable, and overridable by a human in the loop.
            </p>
            
            <div className="flex flex-wrap gap-2.5 pt-2">
              {['EU AI Act aligned', 'ISO/IEC 42001', 'NIST AI RMF', 'Explainability by design'].map((badge, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-xs font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 w-full">
            <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-700 px-5 py-4 flex justify-between items-center flex-wrap gap-2">
                <span className="text-slate-900 dark:text-white text-xs font-bold">AI Decision Panel — Live Review</span>
                <span className="text-slate-500 dark:text-slate-400 text-xs">Tier 2: Human Review Required</span>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border-b border-amber-200 dark:border-amber-900/30 px-5 py-3.5 flex items-center gap-2.5">
                <div className="size-2 bg-amber-500 rounded-sm shrink-0" />
                <p className="text-amber-800 dark:text-amber-400 text-xs font-bold leading-tight">
                  Anomaly detected — location inconsistency + idle session pattern
                </p>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                <div className="grid grid-cols-12 p-5 gap-4">
                  <div className="col-span-12 sm:col-span-3 text-slate-400 font-bold uppercase tracking-wider">Why Flagged</div>
                  <div className="col-span-12 sm:col-span-9 text-slate-700 dark:text-slate-300 leading-relaxed">
                    Location signal does not match claimed jurisdiction. VPN routing pattern detected. Concurrent idle session behaviour inconsistent.
                  </div>
                </div>
                <div className="grid grid-cols-12 p-5 gap-4">
                  <div className="col-span-12 sm:col-span-3 text-slate-400 font-bold uppercase tracking-wider">Confidence</div>
                  <div className="col-span-12 sm:col-span-9 text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
                    74 / 100 — <span className="text-slate-500 dark:text-slate-400 font-normal">Below policy threshold (80). Two verification layers below expected range.</span>
                  </div>
                </div>
                <div className="grid grid-cols-12 p-5 gap-4">
                  <div className="col-span-12 sm:col-span-3 text-slate-400 font-bold uppercase tracking-wider">Policy Applied</div>
                  <div className="col-span-12 sm:col-span-9 text-slate-700 dark:text-slate-300 leading-relaxed">
                    Enterprise Remote Session Policy v3.2 — UK jurisdiction — Contractor profile
                  </div>
                </div>
                <div className="grid grid-cols-12 p-5 gap-4">
                  <div className="col-span-12 sm:col-span-3 text-slate-400 font-bold uppercase tracking-wider">AI Recommendation</div>
                  <div className="col-span-12 sm:col-span-9 text-teal-600 dark:text-teal-400 font-semibold leading-relaxed">
                    Billing hold pending human review — session evidence record created and sealed.
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50/70 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 p-4 flex flex-wrap gap-3">
                <button className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-lg transition-colors shadow-sm">✓ Accept</button>
                <button className="px-5 py-2 bg-white dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-500 dark:text-slate-200 font-bold text-xs rounded-lg border border-slate-300 dark:border-slate-600 transition-colors shadow-sm">⟳ Override</button>
                <button className="px-5 py-2 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 font-bold text-xs rounded-lg border border-red-500/10 transition-colors shadow-sm sm:ml-auto">↑ Escalate</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 6: ENTERPRISE OUTCOMES (FOUR EXECUTIVE PERSPECTIVES) --- */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              Enterprise Outcomes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              What This Means for Your Organisation
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Four executive perspectives — each with a distinct challenge that ZoikoTime solves with measured, verifiable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: 'CFO',
                title: 'Financial Defensibility',
                bullets: [
                  'Eliminate unverified payroll spend across all workforce types',
                  'Reduce audit preparation cost from weeks to minutes',
                  'Every invoice and payroll period backed by evidence'
                ]
              },
              {
                role: 'CHRO',
                title: 'Workforce Fairness & Trust',
                bullets: [
                  'Transparent, consistent policy application across all workers',
                  'Evidence-backed dispute resolution — faster, fairer outcomes',
                  'Workers understand what is collected and why'
                ]
              },
              {
                role: 'COO',
                title: 'Operational Clarity',
                bullets: [
                  'Real-time visibility across all workforce types and locations',
                  'Verified output data enables accurate capacity decisions',
                  'Performance intelligence replaces estimation and guesswork'
                ]
              },
              {
                role: 'CIO',
                title: 'Secure, Scalable Infrastructure',
                bullets: [
                  'API-first architecture integrates into your existing stack',
                  'Data governance built-in — not configured post-deployment',
                  'Enterprise-grade security with zero-trust architecture'
                ]
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden relative flex flex-col p-6 pt-8 transition-transform hover:-translate-y-1 duration-200"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-teal-500" />
                <span className="text-teal-600 dark:text-teal-400 text-xs font-extrabold uppercase tracking-widest mb-3 block">{card.role}</span>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight leading-snug mb-6">{card.title}</h3>
                <ul className="space-y-4 mt-auto">
                  {card.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      <span className="size-1.5 bg-teal-600 dark:text-teal-400 rounded-sm shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 7: SYSTEM ARCHITECTURE LAYERS --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
            System Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Built for Scale. Designed for Assurance.
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            A purpose-built enterprise architecture — five layers from experience to integration, with deployment options that fit your existing infrastructure model.
          </p>
        </div>

        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-slate-900 dark:text-white text-base font-bold">ZoikoTime Platform Architecture</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1 bg-emerald-50 dark:bg-emerald-950/30 text-teal-600 dark:text-teal-400 rounded-full border border-teal-600/25 text-xs font-semibold">Cloud</span>
              <span className="px-3.5 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600 text-xs font-semibold">Hybrid</span>
              <span className="px-3.5 py-1 bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-600 text-xs font-semibold">Private Cloud</span>
            </div>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {/* Experience Row */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-100/70 dark:bg-slate-800/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 p-5 flex items-center gap-3 shrink-0">
                <span className="text-lg">🖥️</span>
                <span className="text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">Experience Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-3 items-center">
                {['Manager Dashboard', 'Employee Portal', 'Executive Command View', 'Transparency Center', 'Mobile App'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Intelligence Row */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-100/70 dark:bg-slate-800/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 p-5 flex items-center gap-3 shrink-0">
                <span className="text-lg">🧠</span>
                <span className="text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">Intelligence Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-3 items-center">
                {['Behavioural Baseline Engine', 'Adversarial Detection AI', 'Performance Intelligence', 'Confidence Scoring Engine'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-emerald-50/60 dark:bg-emerald-950/20 text-teal-700 dark:text-teal-400 rounded-full border border-teal-600/20 text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Governance Row */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-100/70 dark:bg-slate-800/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 p-5 flex items-center gap-3 shrink-0">
                <span className="text-lg">⚙️</span>
                <span className="text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">Governance Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-3 items-center">
                {['Policy Engine', 'Jurisdiction Rules', 'Human-in-Command Controls', 'Role-Based Access'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-indigo-50/60 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 rounded-full border border-indigo-500/20 text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Evidence Row */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-100/70 dark:bg-slate-800/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 p-5 flex items-center gap-3 shrink-0">
                <span className="text-lg">🔏</span>
                <span className="text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">Evidence Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-3 items-center">
                {['Evidence Construction Engine', 'Chain of Custody', 'SHA-256 Integrity Hashing', 'Audit Export'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-emerald-50/60 dark:bg-emerald-950/20 text-teal-700 dark:text-teal-400 rounded-full border border-teal-600/20 text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Integration Row */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-100/70 dark:bg-slate-800/40 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 p-5 flex items-center gap-3 shrink-0">
                <span className="text-lg">🔗</span>
                <span className="text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">Integration Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-3 items-center">
                {['REST API', 'Webhook Events', 'HRIS Connectors', 'Payroll Systems', 'Identity Providers (SSO)', 'GRC Platforms'].map((item, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: TRUST INFRASTRUCTURE --- */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              Trust Infrastructure
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Designed to Withstand Scrutiny
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Security, privacy, and compliance are not separate features — they are requirements built into the system architecture from the first line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔑',
                title: 'Encryption',
                description: 'AES-256 at rest and TLS 1.3 in transit — applied to all workforce data from the moment of capture. Cryptographic integrity verification on every evidence record at retrieval.'
              },
              {
                icon: '👥',
                title: 'Role-Based Access Control',
                description: 'Least-privilege access enforcement — every user, role, and system component operates with the minimum access required. No cross-scope data visibility by design.'
              },
              {
                icon: '🏗️',
                title: 'Zero-Trust Architecture',
                description: 'No implicit trust across any system boundary — every access event is authenticated, authorised, and logged. Device, user, and session verification at every layer.'
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md border border-slate-200 dark:border-slate-700 p-8 flex flex-col transition-transform hover:-translate-y-1 duration-200"
              >
                <div className="size-11 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl flex items-center justify-center text-xl mb-6 shadow-sm">
                  {card.icon}
                </div>
                <h3 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight mb-3">{card.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 9: ECOSYSTEM READINESS --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-16">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
            Ecosystem Readiness
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Fits Into Your Existing Infrastructure
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            ZoikoTime integrates into your existing enterprise stack — no system replacement required. API-first architecture connects to payroll, HRIS, ERP, identity, and compliance platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: '💰', title: 'Payroll', desc: 'ADP, Sage, SAP Payroll, Workday' },
            { icon: '👥', title: 'HRIS', desc: 'Workday, BambooHR, Personio, Rippling' },
            { icon: '🏢', title: 'ERP', desc: 'SAP, Oracle, Microsoft Dynamics' },
            { icon: '🔑', title: 'Identity', desc: 'Okta, Azure AD, Google Workspace' },
            { icon: '📋', title: 'Compliance', desc: 'ServiceNow GRC, Vanta, Drata' }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md border border-slate-200 dark:border-slate-700 flex flex-col items-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-3xl mb-4 h-12 flex items-center justify-center">{item.icon}</div>
              <h3 className="text-slate-900 dark:text-white text-sm font-bold tracking-tight mb-2">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed max-w-[150px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 10: REAL-WORLD COMPLEXITY --- */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-10 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
              Real-World Complexity
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Designed for Real-World Workforce Complexity
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Four workforce contexts, each with unique verification, compliance, and evidence requirements — ZoikoTime is built for all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🌍',
                title: 'Distributed Workforces',
                desc: 'Real-time session validation, policy-aligned assurance, and centralised command visibility across every region, time zone, and remote work arrangement.'
              },
              {
                icon: '🔄',
                title: 'Contractor & Gig Teams',
                desc: 'Task validation gates, revenue assurance, and billing integrity — every contractor session verified and every invoice backed by evidence before payment approval.'
              },
              {
                icon: '⚖️',
                title: 'Regulated Industries',
                desc: 'Continuous compliance, audit-ready evidence, and jurisdiction-specific policy enforcement — for healthcare, financial services, and other highly regulated operational environments.'
              },
              {
                icon: '💼',
                title: 'Client-Billable Teams',
                desc: 'Verified time linked to client billing records — eliminating billing disputes and utilisation inaccuracies with session-level evidence that supports every invoice issued.'
              }
            ].map((card, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden relative flex flex-col p-6 pt-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
                <div className="text-4xl mb-6">{card.icon}</div>
                <h3 className="text-slate-900 dark:text-white text-base font-bold tracking-tight mb-4 leading-snug">{card.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-8">{card.desc}</p>
                <div className="mt-auto pt-4">
                  <span className="text-teal-600 dark:text-teal-400 hover:text-teal-700 text-xs font-bold flex items-center gap-1 cursor-pointer group-hover:translate-x-0.5 transition-transform duration-150">
                    Explore use case <span className="text-sm">→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- SECTION 11: MEASURED IMPACT (PROVEN PERFORMANCE GRID) --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-16">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
            Measured Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Proven Performance Across the Platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Enterprise Clients */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden relative flex flex-col p-8 pt-10 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            <div className="text-teal-600 dark:text-teal-400 text-5xl font-extrabold font-['JetBrains_Mono',monospace] tracking-tight mb-4">
              1,000+
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold tracking-tight mb-3">
              Enterprise Clients
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              Deployed across regulated industries, professional services, and global distributed workforce operations worldwide.
            </p>
          </div>

          {/* Card 2: Payroll Leakage */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden relative flex flex-col p-8 pt-10 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            <div className="text-teal-600 dark:text-teal-400 text-5xl font-extrabold font-['JetBrains_Mono',monospace] tracking-tight mb-4">
              $2.1B
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold tracking-tight mb-3">
              Payroll Leakage Identified
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              Cumulative financial exposure identified and controlled across the ZoikoTime client base — verified, recovered value.
            </p>
          </div>

          {/* Card 3: Jurisdictions */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden relative flex flex-col p-8 pt-10 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            <div className="text-teal-600 dark:text-teal-400 text-5xl font-extrabold font-['JetBrains_Mono',monospace] tracking-tight mb-4">
              40+
            </div>
            <h3 className="text-slate-900 dark:text-white text-base font-bold tracking-tight mb-3">
              Jurisdictions Supported
            </h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
              Native multi-jurisdiction policy logic covering major labour law frameworks globally — built in, not configured.
            </p>
          </div>
        </div>
      </section>

      {/* --- SECTION 12: TRUST STATEMENT / DISCLAIMER --- */}
      <section className="bg-slate-100 dark:bg-slate-900/40 border-t border-b border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="text-slate-500 dark:text-slate-400 text-sm font-normal italic leading-relaxed max-w-3xl mx-auto">
            "ZoikoTime is designed to provide audit-ready workforce assurance. It does not replace human judgment 
            and is governed by configurable oversight policies. Human-in-Command is a foundational design 
            principle — not a product feature."
          </blockquote>
        </div>
      </section>

      {/* --- SECTION 13: FINAL CALL TO ACTION (CTA) LAYER --- */}
      <section className="w-full bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden py-10 border-b border-slate-200 dark:border-slate-800">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block">
            Get Started
          </span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Move From <span className="text-teal-600 dark:text-teal-400">Visibility</span> to Certainty
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
            ZoikoTime gives your organisation the continuous verification, AI-driven intelligence, and audit-ready evidence needed to govern a modern workforce — with the defensibility that enterprise operations demand.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
            href ="request-a-demo"
             className="w-full sm:w-auto px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-base rounded-lg shadow-[0px_4px_18px_0px_rgba(0,157,140,0.32)] transition-colors flex items-center justify-center gap-2">
              <Play className="w-3 h-3 fill-current" />
              <span>Request Demo</span>
            </Link>
            
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-teal-600 dark:text-teal-400 font-semibold text-base rounded-lg shadow-sm border border-teal-600 dark:border-teal-500/50 transition-colors">
              Talk to a Solutions Architect
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}