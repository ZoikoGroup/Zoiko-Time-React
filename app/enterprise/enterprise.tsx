"use client"
import { useState } from 'react';
import React from 'react';
import { Play } from 'lucide-react';
export default function Enterprise() {
    const [workforceSize, setWorkforceSize] = useState<number>(2000);
  const [hourlyCost, setHourlyCost] = useState<number>(45);
  const [leakagePercent, setLeakagePercent] = useState<number>(3);

  // Derived ROI calculations based on user metrics
  const monthlyLeakage = Math.round((workforceSize * hourlyCost * 160 * (leakagePercent / 100)) / 10) * 10; 
  const annualRecoverable = monthlyLeakage * 12;
  const firstYearRoi = 21600; // Static/formulaic reference from design
  const paybackPeriod = 0.1;
  return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 to-white dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        
        {/* Category Tag */}
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-6">
          Enterprise
        </span>
        
        {/* Main Headings */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl">
          Workforce Uncertainty Is a Risk. <br className="hidden sm:inline" />
          <span className="text-teal-600 dark:text-teal-400">ZoikoTime Eliminates It.</span>
        </h1>
        
        {/* Description Copy */}
        <p className="mt-6 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-3xl leading-relaxed">
          For enterprises operating across jurisdictions, teams and employment models — ZoikoTime delivers real-time verification, AI-driven intelligence, and audit-ready certainty at scale.
        </p>
        
        {/* Context Caption */}
        <p className="mt-4 text-xs sm:text-sm text-slate-400 dark:text-slate-500 max-w-2xl leading-normal">
          Organisations that cannot verify workforce activity in real time operate with hidden financial, operational, and compliance risk.
        </p>
        
        {/* Action Controls */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Call to Action */}
          <button className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3.5 bg-teal-600 text-white font-semibold rounded-lg shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)] hover:bg-teal-700 dark:hover:bg-teal-500 active:scale-[0.98] transition-all duration-200 text-base">
            <Play></Play>
           Request Enterprise Demo
          </button>
          
          {/* Secondary Call to Action */}
          <button className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 border border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400 font-semibold rounded-lg hover:bg-teal-50/50 dark:hover:bg-teal-950/30 active:scale-[0.98] transition-all duration-200 text-base">
            Calculate ROI
          </button>
        </div>

        {/* Dynamic Trust Badges / Framework Elements */}
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center gap-3 max-w-4xl">
          {[
            'Human-in-Command AI',
            'Audit-Ready Evidence',
            'Global Enterprises Ready',
            'Multi-Jurisdiction Compliance',
          ].map((badgeText) => (
            <div 
              key={badgeText} 
              className="inline-flex items-center px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-slate-700/60 transition-colors duration-300"
            >
              <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm mr-2.5 flex-shrink-0" />
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 whitespace-nowrap tracking-wide">
                {badgeText}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
    <section className="bg-slate-100 dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-3">
            The Challenge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            The Hidden Risks in Enterprise Workforce Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            At enterprise scale, workforce risk is structural — embedded in every unverified session, every compliance gap, and every blind spot in your operational visibility.
          </p>

          {/* Cards Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Leakage */}
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden text-left flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 flex items-center justify-center text-xl mb-6">
                💸
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Financial Leakage</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Unverified time, inaccurate billing, and payroll discrepancies accumulate silently across distributed teams — each period compounding a financial exposure that only surfaces during reconciliation or audit, often months later.
              </p>
            </div>

            {/* Compliance Exposure */}
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden text-left flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 flex items-center justify-center text-xl mb-6">
                ⚖️
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Compliance Exposure</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Labour law violations, incomplete records, and audit failures create material legal and regulatory exposure — particularly in multi-jurisdiction operations where different rules apply simultaneously and inconsistently.
              </p>
            </div>

            {/* Operational Blind Spots */}
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden text-left flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 flex items-center justify-center text-xl mb-6">
                🔮
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Operational Blind Spots</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                No real-time visibility into distributed work, fragmented systems with conflicting data, and delayed insights leave leadership making capacity, performance, and resourcing decisions without accurate, verified intelligence.
              </p>
            </div>
          </div>

          {/* Warning Message Box */}
          <div className="mt-12 max-w-3xl mx-auto bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-500/20 rounded-xl p-6 sm:p-8">
            <p className="text-slate-900 dark:text-slate-200 text-base sm:text-lg font-semibold leading-relaxed">
              These risks <span className="text-teal-600 dark:text-teal-400 font-extrabold">compound at scale</span> — often unnoticed until they become financial or regulatory events that demand immediate, expensive, and disruptive remediation.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: FROM VISIBILITY TO CERTAINTY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-3">
              The Shift
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              From Visibility to Certainty
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              ZoikoTime does not improve existing time-tracking infrastructure — it replaces the category entirely with workforce assurance infrastructure.
            </p>
          </div>

          {/* Table Container */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-slate-950">
            <div className="p-6 sm:p-8 border-b border-slate-200 dark:border-slate-800 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Legacy Systems vs. ZoikoTime — A Category Comparison
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                This is not a feature improvement. It is a fundamental shift in how enterprise workforce operations are governed.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[650px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900 text-xs font-bold uppercase tracking-wider border-b border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500">
                    <th className="p-4 pl-6 sm:pl-8">Capability Area</th>
                    <th className="p-4">Legacy Systems</th>
                    <th className="p-4 bg-emerald-50/50 dark:bg-teal-950/20 text-teal-600 dark:text-teal-400">ZoikoTime®</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  <tr>
                    <td className="p-4 pl-6 sm:pl-8 font-medium text-slate-900 dark:text-slate-200">Work recording</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">Time tracking — self-reported, unverified</td>
                    <td className="p-4 bg-teal-600/[0.03] dark:bg-teal-400/[0.02] font-semibold text-teal-600 dark:text-teal-400">Continuous session verification — policy-aligned, evidenced</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-900/30">
                    <td className="p-4 pl-6 sm:pl-8 font-medium text-slate-900 dark:text-slate-200">Data interpretation</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">Monitoring dashboards — activity counts</td>
                    <td className="p-4 bg-teal-600/[0.03] dark:bg-teal-400/[0.02] font-semibold text-teal-600 dark:text-teal-400">Contextual intelligence — outcomes, constraints, patterns</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 sm:pl-8 font-medium text-slate-900 dark:text-slate-200">Audit output</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">Exportable reports — manual, unverified</td>
                    <td className="p-4 bg-teal-600/[0.03] dark:bg-teal-400/[0.02] font-semibold text-teal-600 dark:text-teal-400">Evidence infrastructure — tamper-evident, chain-of-custody</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-900/30">
                    <td className="p-4 pl-6 sm:pl-8 font-medium text-slate-900 dark:text-slate-200">Compliance posture</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">Reactive audits — post-event review</td>
                    <td className="p-4 bg-teal-600/[0.03] dark:bg-teal-400/[0.02] font-semibold text-teal-600 dark:text-teal-400">Continuous assurance — real-time enforcement and detection</td>
                  </tr>
                  <tr>
                    <td className="p-4 pl-6 sm:pl-8 font-medium text-slate-900 dark:text-slate-200">Risk response</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">Alerts — observation without control</td>
                    <td className="p-4 bg-teal-600/[0.03] dark:bg-teal-400/[0.02] font-semibold text-teal-600 dark:text-teal-400">Active control — automated response proportionate to risk</td>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-900/30">
                    <td className="p-4 pl-6 sm:pl-8 font-medium text-slate-900 dark:text-slate-200">Evidence standard</td>
                    <td className="p-4 text-slate-500 dark:text-slate-400">Logs — editable, unverified, inadmissible</td>
                    <td className="p-4 bg-teal-600/[0.03] dark:bg-teal-400/[0.02] font-semibold text-teal-600 dark:text-teal-400">Forensic records — cryptographically sealed, court-defensible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPETITIVE POSITION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-3">
              Competitive Position
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Enterprises Move Beyond Legacy Platforms
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              ZoikoTime is not a replacement for Workday, Deel, or Rippling — it is an upgrade to workforce assurance infrastructure that those platforms were never designed to provide.
            </p>
          </div>

          {/* Matrix Table */}
          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl shadow-lg overflow-hidden bg-white dark:bg-slate-900">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-950 text-sm font-bold border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white">
                    <th className="p-5 pl-6 sm:pl-8 w-[50%]">Capability</th>
                    <th className="p-5 text-slate-500 dark:text-slate-400 text-center w-[25%]">Workday / Deel / Rippling</th>
                    <th className="p-5 bg-emerald-50/50 dark:bg-teal-950/20 text-center w-[25%]">
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="text-teal-600 dark:text-teal-400">ZoikoTime®</span>
                        <span className="inline-block px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full text-[10px] font-bold tracking-wide uppercase">
                          Assurance OS
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-slate-200 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <td className="p-5 pl-6 sm:pl-8 font-medium">Real-time workforce verification with policy-aligned session assurance</td>
                    <td className="p-5 text-center text-xl text-slate-300 dark:text-slate-700 font-light">✗</td>
                    <td className="p-5 text-center text-xl text-teal-600 dark:text-teal-400 bg-teal-600/[0.03] dark:bg-teal-400/[0.01] font-bold">✓</td>
                  </tr>
                  <tr className="bg-gray-50/50 dark:bg-slate-950/30">
                    <td className="p-5 pl-6 sm:pl-8 font-medium">Explainable AI with human-in-command oversight and audit trail</td>
                    <td className="p-5 text-center text-xl text-slate-300 dark:text-slate-700 font-light">✗</td>
                    <td className="p-5 text-center text-xl text-teal-600 dark:text-teal-400 bg-teal-600/[0.03] dark:bg-teal-400/[0.01] font-bold">✓</td>
                  </tr>
                  <tr>
                    <td className="p-5 pl-6 sm:pl-8 font-medium">Continuous audit readiness — tamper-evident evidence, not reports</td>
                    <td className="p-5 text-center text-xl text-slate-300 dark:text-slate-700 font-light">✗</td>
                    <td className="p-5 text-center text-xl text-teal-600 dark:text-teal-400 bg-teal-600/[0.03] dark:bg-teal-400/[0.01] font-bold">✓</td>
                  </tr>
                  <tr className="bg-gray-50/50 dark:bg-slate-950/30">
                    <td className="p-5 pl-6 sm:pl-8 font-medium">Evidence-based payroll — verified time linked to financial records</td>
                    <td className="p-5 text-center text-xl text-slate-300 dark:text-slate-700 font-light">✗</td>
                    <td className="p-5 text-center text-xl text-teal-600 dark:text-teal-400 bg-teal-600/[0.03] dark:bg-teal-400/[0.01] font-bold">✓</td>
                  </tr>
                  <tr>
                    <td className="p-5 pl-6 sm:pl-8 font-medium">Multi-jurisdiction policy logic (native, not configured per region)</td>
                    <td className="p-5 text-center">
                      <span className="inline-inline-flex items-center px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-400 rounded-full text-xs font-semibold">
                        ⚠ Partial
                      </span>
                    </td>
                    <td className="p-5 text-center text-xl text-teal-600 dark:text-teal-400 bg-teal-600/[0.03] dark:bg-teal-400/[0.01] font-bold">✓</td>
                  </tr>
                  <tr className="bg-gray-50/50 dark:bg-slate-950/30">
                    <td className="p-5 pl-6 sm:pl-8 font-medium">Adversarial fraud detection with automated financial control response</td>
                    <td className="p-5 text-center text-xl text-slate-300 dark:text-slate-700 font-light">✗</td>
                    <td className="p-5 text-center text-xl text-teal-600 dark:text-teal-400 bg-teal-600/[0.03] dark:bg-teal-400/[0.01] font-bold">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer Infrastructure Callout */}
          <div className="mt-10 max-w-4xl mx-auto bg-emerald-50/60 dark:bg-teal-950/20 border border-teal-600/20 rounded-xl p-6 text-center">
            <p className="text-teal-800 dark:text-teal-300 text-sm font-semibold leading-relaxed">
              ZoikoTime does not replace your HR or payroll systems — it provides the assurance infrastructure layer that makes them defensible, accurate, and audit-ready.
            </p>
          </div>
        </div>
      </section>
      
<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto border-b border-slate-100 dark:border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Block Content */}
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
              ROI Engine
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Quantify the Financial<br className="hidden sm:inline" /> Impact on Your Organisation
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              Every enterprise has a different payroll structure, workforce mix, and leakage profile. ZoikoTime's ROI model calculates your specific financial opportunity — providing the CFO-ready numbers needed to accelerate approval.
            </p>

            {/* Example Insight Alert Callout Box */}
            <div className="bg-emerald-50 dark:bg-teal-950/30 rounded-xl border border-teal-600/20 p-6 sm:p-8 mt-8">
              <span className="text-xs font-bold uppercase tracking-wide text-teal-700 dark:text-teal-400 block mb-2">
                Example Insight
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                An enterprise with 2,000 employees operating at a 3% leakage rate recovers an estimated <span className="text-teal-600 dark:text-teal-400 font-bold">£1.4M annually</span> through verified workforce activity — with a payback period of under 4 months at standard deployment cost.
              </p>
            </div>
          </div>

          {/* Right Block Calculator App */}
          <div className="bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-900 px-6 py-4 border-b border-slate-200 dark:border-slate-800 text-center">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Enterprise ROI Calculator
              </h3>
            </div>
            
            {/* Range Controls */}
            <div className="p-6 space-y-6">
              {/* Slider 1: Workforce Size */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>Workforce size</span>
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">
                    {workforceSize.toLocaleString()}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="100" 
                  max="10000" 
                  step="100" 
                  value={workforceSize} 
                  onChange={(e) => setWorkforceSize(Number(e.target.value))}
                  className="w-full accent-teal-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg cursor-pointer" 
                />
              </div>

              {/* Slider 2: Average Hourly Cost */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>Avg hourly cost (£)</span>
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">
                    £{hourlyCost}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="15" 
                  max="150" 
                  step="5" 
                  value={hourlyCost} 
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full accent-teal-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg cursor-pointer" 
                />
              </div>

              {/* Slider 3: Estimated Leakage */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <span>Estimated leakage %</span>
                  <span className="font-mono font-bold text-teal-600 dark:text-teal-400 text-sm">
                    {leakagePercent}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="0.5" 
                  value={leakagePercent} 
                  onChange={(e) => setLeakagePercent(Number(e.target.value))}
                  className="w-full accent-teal-600 bg-slate-200 dark:bg-slate-800 h-1.5 rounded-lg cursor-pointer" 
                />
              </div>
            </div>

            {/* Matrix Output Grid */}
            <div className="grid grid-cols-2 gap-px bg-slate-200 dark:bg-slate-800 border-t border-teal-600/20">
              <div className="bg-emerald-50/50 dark:bg-slate-900/60 p-6 text-center">
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                  ${(monthlyLeakage / 1000).toFixed(0)}K
                </div>
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  Monthly leakage identified
                </div>
              </div>

              <div className="bg-emerald-50/50 dark:bg-slate-900/60 p-6 text-center">
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                  ${(annualRecoverable / 1000000).toFixed(1)}M
                </div>
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  Annual recoverable value
                </div>
              </div>

              <div className="bg-emerald-50/50 dark:bg-slate-900/60 p-6 text-center">
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                  {firstYearRoi}%
                </div>
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  Estimated first-year ROI
                </div>
              </div>

              <div className="bg-emerald-50/50 dark:bg-slate-900/60 p-6 text-center">
                <div className="font-mono text-xl sm:text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                  {paybackPeriod}mo
                </div>
                <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mt-2">
                  Estimated payback period
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="p-6 bg-white dark:bg-slate-950 border-t border-teal-600/20">
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm flex items-center justify-center gap-2">
                Generate Full ROI Report →
              </button>
            </div>
          </div>

        </div>
      </section>

      
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-3">
            System Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Designed for Enterprise Infrastructure
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A purpose-built enterprise stack — from the experience layer down to the integration and data layer — with deployment options that fit your existing infrastructure model.
          </p>
        </div>

        {/* Matrix Stack Box */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          <div className="bg-slate-100 dark:bg-slate-950 px-6 py-5 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              ZoikoTime Enterprise Architecture — Full Stack
            </h3>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {/* Experience Layer */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-50 dark:bg-slate-950 p-5 flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 shrink-0">
                <span className="text-lg">🖥️</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Experience Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-2.5 items-center">
                {['Manager Dashboard', 'Employee Portal', 'Executive Command View', 'Transparency Center', 'Mobile App'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Intelligence Layer */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-50 dark:bg-slate-950 p-5 flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 shrink-0">
                <span className="text-lg">🧠</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Intelligence Layer (AI)</span>
              </div>
              <div className="p-5 flex flex-wrap gap-2.5 items-center">
                {['Behavioural Baseline Engine', 'Adversarial Detection', 'Performance Intelligence', 'Risk Scoring Engine'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-emerald-50 dark:bg-teal-950/40 border border-teal-600/20 text-teal-700 dark:text-teal-400 rounded-full text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Governance Layer */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-50 dark:bg-slate-950 p-5 flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 shrink-0">
                <span className="text-lg">⚙️</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Governance Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-2.5 items-center">
                {['Policy Engine', 'Jurisdiction Rules', 'Human-in-Command Controls', 'Role-Based Access'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-full text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Evidence Layer */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-50 dark:bg-slate-950 p-5 flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 shrink-0">
                <span className="text-lg">🔏</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Evidence Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-2.5 items-center">
                {['Evidence Construction Engine', 'Chain of Custody', 'Integrity Hashing (SHA-256)', 'Audit Export'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-emerald-50 dark:bg-teal-950/40 border border-teal-600/20 text-teal-700 dark:text-teal-400 rounded-full text-xs font-semibold shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Integration Layer */}
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="md:w-52 bg-slate-50 dark:bg-slate-950 p-5 flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 shrink-0">
                <span className="text-lg">🔗</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">Integration Layer</span>
              </div>
              <div className="p-5 flex flex-wrap gap-2.5 items-center">
                {['REST API', 'Webhook Events', 'HRIS Connectors', 'Payroll Systems', 'Identity Providers (SSO)', 'GRC Platforms'].map((item) => (
                  <span key={item} className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Callout Ribbon */}
          <div className="bg-emerald-50/60 dark:bg-teal-950/20 border-t border-teal-600/10 py-4 px-6 text-center">
            <p className="text-teal-700 dark:text-teal-400 text-xs font-semibold tracking-wide">
              Enterprise-grade security boundaries • Encryption at rest and in transit • Data residency controls by jurisdiction
            </p>
          </div>
        </div>
      </section>

    
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block mb-3">
            Implementation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Enterprise Deployment Without Disruption
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ZoikoTime integrates into your existing stack — no system replacement required. A structured deployment model takes you from initial integration to full audit readiness in weeks, not quarters.
          </p>
        </div>

        {/* 3-Column Phase Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Phase 1 */}
          <div className="relative bg-white dark:bg-slate-950 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            <span className="text-[11px] font-bold font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 block">
              PHASE 01 — WEEKS 1–2
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              Foundation & Integration
            </h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 flex-1">
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Data integration with HRIS, payroll, and identity systems</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Initial workforce visibility and session capture activated</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Policy framework configuration begins with your governance team</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Jurisdiction rules validated for all operating regions</span>
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div className="relative bg-white dark:bg-slate-950 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            <span className="text-[11px] font-bold font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 block">
              PHASE 02 — WEEKS 3–6
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              Policy & Activation
            </h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 flex-1">
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Full policy configuration across all workforce types and roles</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Assurance signals activated with human-in-command review workflows</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Anomaly detection baselines established from initial data</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>HR and Compliance teams trained and onboarded</span>
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div className="relative bg-white dark:bg-slate-950 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
            <span className="text-[11px] font-bold font-mono text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-2 block">
              PHASE 03 — MONTH 2+
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
              Optimisation & Full Readiness
            </h3>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 flex-1">
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Performance intelligence models optimised from live data</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Full audit readiness achieved — evidence records active across all operations</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Executive reporting and command view configured for leadership</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="size-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 shrink-0" />
                <span>Continuous improvement programme initiated with dedicated account team</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Bottom Banner Callout */}
        <div className="mt-12 bg-emerald-50 dark:bg-teal-950/20 border border-teal-600/20 rounded-xl p-6 text-center max-w-4xl mx-auto">
          <p className="text-teal-700 dark:text-teal-300 text-sm sm:text-base font-semibold leading-relaxed">
            No system replacement required — ZoikoTime integrates into your existing stack and adds the assurance layer your current infrastructure cannot provide.
          </p>
        </div>
      </section>
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
            Procurement
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white max-w-4xl mx-auto">
            Everything Your Organisation Needs to Approve ZoikoTime
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Enterprise procurement requires documentation. We have built it — security, compliance, architecture, and risk — structured for the most rigorous due diligence processes.
          </p>
        </div>

        {/* Documentation Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Card 1: Security Pack */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="size-10 bg-emerald-50 dark:bg-teal-950/40 rounded-lg flex items-center justify-center text-lg">
                🔐
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Security Documentation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Full security architecture overview, penetration test summary, and access control documentation for CISO review.
              </p>
            </div>
            <button className="text-left text-xs font-bold text-teal-600 dark:text-teal-400 mt-6 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              ↓ Download Security Pack
            </button>
          </div>

          {/* Card 2: Compliance Matrix */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="size-10 bg-emerald-50 dark:bg-teal-950/40 rounded-lg flex items-center justify-center text-lg">
                📋
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Compliance Matrix
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                ISO 27001, SOC 2, GDPR, and jurisdictional compliance alignment — structured for procurement and legal review.
              </p>
            </div>
            <button className="text-left text-xs font-bold text-teal-600 dark:text-teal-400 mt-6 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              ↓ Download Compliance Matrix
            </button>
          </div>

          {/* Card 3: DPA */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="size-10 bg-emerald-50 dark:bg-teal-950/40 rounded-lg flex items-center justify-center text-lg">
                📄
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Data Processing Agreement
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Pre-drafted DPA aligned to GDPR Article 28 and applicable jurisdictional data processing requirements.
              </p>
            </div>
            <button className="text-left text-xs font-bold text-teal-600 dark:text-teal-400 mt-6 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              ↓ Download DPA
            </button>
          </div>

          {/* Card 4: Architecture Docs */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="size-10 bg-emerald-50 dark:bg-teal-950/40 rounded-lg flex items-center justify-center text-lg">
                🏗️
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Architecture Documentation
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Full technical architecture documentation, data flow diagrams, and security boundary definitions for CIO / CTO review.
              </p>
            </div>
            <button className="text-left text-xs font-bold text-teal-600 dark:text-teal-400 mt-6 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              ↓ Download Architecture Docs
            </button>
          </div>

          {/* Card 5: Risk Summary */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="size-10 bg-emerald-50 dark:bg-teal-950/40 rounded-lg flex items-center justify-center text-lg">
                ⚠️
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Risk Assessment Summary
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Third-party risk assessment summary, vendor risk questionnaire responses, and business continuity documentation.
              </p>
            </div>
            <button className="text-left text-xs font-bold text-teal-600 dark:text-teal-400 mt-6 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              ↓ Download Risk Summary
            </button>
          </div>

          {/* Card 6: ROI Report */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div className="space-y-4">
              <div className="size-10 bg-emerald-50 dark:bg-teal-950/40 rounded-lg flex items-center justify-center text-lg">
                📊
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                ROI Business Case
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Board-ready financial justification — leakage modelling, ROI timeline, and payback period analysis pre-built for your CFO.
              </p>
            </div>
            <button className="text-left text-xs font-bold text-teal-600 dark:text-teal-400 mt-6 hover:text-teal-700 dark:hover:text-teal-300 transition-colors">
              ↓ Generate ROI Report
            </button>
          </div>

        </div>

        {/* Unified Bundle Callout Box */}
        <div className="max-w-4xl mx-auto bg-emerald-50 dark:bg-teal-950/20 rounded-2xl p-8 border border-teal-600/10 text-center relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-1/4 size-72 bg-gradient-to-b from-teal-500/10 to-transparent blur-3xl rounded-full -translate-y-1/2 pointer-events-none" />
          <h3 className="text-lg font-bold text-teal-600 dark:text-teal-400 mb-2">
            Download the Complete Enterprise Approval Pack
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-6 leading-relaxed">
            All procurement documentation in a single structured bundle — ready for distribution to your legal, security, finance, and technical review teams.
          </p>
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg text-sm shadow-md hover:shadow-lg transition-all">
            ↓ Download Enterprise Approval Pack
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: ENTERPRISE PARTNERSHIP */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200/60 dark:border-slate-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
              Enterprise Partnership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Enterprise Partnership — Not Just Software
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Enterprise deployment is a sustained partnership — not a software licence. ZoikoTime provides dedicated resources at every stage, from deployment through to ongoing optimisation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Column 1 */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center">
              <span className="text-3xl mb-4 block">👥</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Dedicated Account Team
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                A named enterprise account manager and customer success lead — responsible for your deployment outcomes, not your ticket queue.
              </p>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center">
              <span className="text-3xl mb-4 block">⚙️</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Implementation Specialists
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Technical implementation experts who have deployed ZoikoTime across complex, multi-jurisdiction enterprise environments — reducing deployment risk.
              </p>
            </div>

            {/* Column 3 */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center">
              <span className="text-3xl mb-4 block">📈</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Continuous Optimisation
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Ongoing analysis of your ZoikoTime deployment — identifying opportunities to improve detection accuracy, policy alignment, and ROI realisation over time.
              </p>
            </div>

            {/* Column 4 */}
            <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center">
              <span className="text-3xl mb-4 block">📊</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Executive Reporting
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Regular executive reporting delivered to your C-suite — workforce assurance performance, financial impact quantification, and compliance status across all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: THE COST OF INACTION */}
      {/* ========================================================================= */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
              The Cost of Inaction
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Inaction Is Not a Neutral Position
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Every period without workforce assurance infrastructure is a period in which financial, compliance, and operational risks accumulate — measurably, and at scale.
            </p>
          </div>

          {/* Danger Matrix Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
            
            {/* Financial Risk */}
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-red-500/10 dark:border-red-500/20 shadow-sm flex flex-col overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 to-orange-500" />
              <div className="size-11 bg-red-50 dark:bg-red-950/30 rounded-lg flex items-center justify-center text-xl mb-5">
                💸
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Financial</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Unrecoverable payroll leakage continues every period. Fraudulent billing accumulates without detection. Every month without verification is a month of compounding financial loss that cannot be recovered retroactively.
              </p>
            </div>

            {/* Compliance Risk */}
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-red-500/10 dark:border-red-500/20 shadow-sm flex flex-col overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 to-orange-500" />
              <div className="size-11 bg-red-50 dark:bg-red-950/30 rounded-lg flex items-center justify-center text-xl mb-5">
                ⚖️
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Compliance</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Regulatory exposure grows with every unverified session, every undocumented exception, and every jurisdiction where policy drift goes undetected — until a regulator or legal challenge forces the issue at the worst possible time.
              </p>
            </div>

            {/* Operational Risk */}
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-red-500/10 dark:border-red-500/20 shadow-sm flex flex-col overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 to-orange-500" />
              <div className="size-11 bg-red-50 dark:bg-red-950/30 rounded-lg flex items-center justify-center text-xl mb-5">
                📉
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Operational</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Fragmented, unverified workforce data leads to resourcing decisions made on flawed intelligence — capacity misallocation, performance management without evidence, and delivery planning without accuracy.
              </p>
            </div>

          </div>

          {/* Centralized Statement Block */}
          <div className="max-w-2xl mx-auto bg-red-50 dark:bg-red-950/20 border border-red-500/20 rounded-xl p-6 text-center">
            <p className="text-slate-900 dark:text-slate-200 text-base font-semibold leading-relaxed">
              Inaction is not neutral — it carries <span className="text-red-500 font-extrabold">measurable, quantifiable cost</span> that grows every period the problem remains unaddressed.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: PROVEN AT SCALE */}
      {/* ========================================================================= */}
      <section className="py-24 bg-white dark:bg-slate-900 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
              Proven at Scale
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Enterprise-Scale Performance — Verified
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              ZoikoTime is deployed across enterprise operations globally — with measurable, verified outcomes across every industry and workforce model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Metric 1 */}
            <div className="relative bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="font-mono text-4xl sm:text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-3">
                1,000+
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">
                Enterprise Clients
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Deployed across regulated industries, professional services, and global distributed workforce operations — each with unique governance requirements met.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="relative bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="font-mono text-4xl sm:text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-3">
                £2.1B
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">
                Payroll Leakage Identified
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Cumulative financial exposure identified and controlled across the ZoikoTime client base — representing verified, recovered value for enterprise finance teams.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="relative bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col overflow-hidden text-center">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="font-mono text-4xl sm:text-5xl font-extrabold text-teal-600 dark:text-teal-400 mb-3">
                40+
              </div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-4">
                Jurisdictions Supported
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Native multi-jurisdiction policy logic — not configured per region, but built into the system architecture — covering major labour law frameworks globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: FINAL CTA */}
      {/* ========================================================================= */}
      <section className="relative bg-emerald-50 dark:bg-teal-950/20 py-24 border-t border-gradient-to-r from-teal-600 via-teal-500 to-teal-600 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
        
        <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-500 dark:text-teal-400 block">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Bring <span className="text-teal-500 dark:text-teal-400">Certainty</span> to Workforce Operations at Enterprise Scale
          </h2>
          <p className="text-slate-900/60 dark:text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            ZoikoTime gives your enterprise the verification infrastructure, AI-driven intelligence, and audit-ready evidence needed to govern a global workforce — with the confidence, control, and defensibility that enterprise operations demand.
          </p>

          {/* Action Trigger Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="w-full sm:w-auto bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm flex items-center justify-center gap-2">
              <Play></Play>
              Request Enterprise Demo
            </button>
            <button className="w-full sm:w-auto border border-teal-600 hover:bg-teal-600/10 text-teal-600 dark:text-teal-400 font-medium py-3.5 px-8 rounded-lg transition-all text-sm">
              Speak to Enterprise Architect
            </button>
          </div>
        </div>
      </section>
      </>
  );
}