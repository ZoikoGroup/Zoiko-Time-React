// app/page.tsx
'use client';
import Link from "next/link";

import React, { useState } from 'react';

// Mock Data for the Live Command Center Command View
const initialWorkers = [
  { id: 'WKR-00441', region: 'EMEA — London', category: 'Delivery Operations', tasks: 42, revenue: 786.00, status: 'Verified' },
  { id: 'WKR-04417', region: 'APAC — Manila', category: 'Data Processing', tasks: 218, revenue: 2180.00, status: 'Flagged' },
  { id: 'WKR-08832', region: 'Americas — Miami', category: 'Field Inspection', tasks: 17, revenue: 1105.00, status: 'Verified' },
  { id: 'WKR-02291', region: 'EMEA — Berlin', category: 'Content Moderation', tasks: 64, revenue: 640.00, status: 'In Review' },
  { id: 'WKR-07703', region: 'APAC — Singapore', category: 'Platform Support', tasks: 31, revenue: 930.00, status: 'Verified' },
];

export default function Contractor() {
  const [workers] = useState(initialWorkers);

  return (
    <div className="w-full bg-white text-slate-900 dark:bg-slate-900 dark:text-white font-sans selection:bg-teal-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* SECTION 1: HERO / TOP LAYER CONTAINER */}
      <section className="relative w-full bg-gradient-to-b from-teal-50 to-white dark:from-teal-950/20 dark:to-slate-900 via-white dark:via-slate-900 via-55% pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden border-t-4 border-teal-600">
        {/* Aesthetic Background Radial Flare */}
        <div className="absolute right-0 top-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Label Tag */}
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <span className="w-6 h-[1.5px] bg-teal-600"></span>
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider">Contractor & Gig Teams</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight max-w-4xl mx-auto mb-4 md:mb-6">
            Verify Work. Protect Revenue.<br className="hidden sm:inline" />Scale with Confidence.
          </h1>

          {/* Subtitle description */}
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
            ZoikoTime ensures every contractor task is authenticated, validated, and financially accountable — enabling platforms and enterprises to scale flexible workforces without losing control or margin.
          </p>

          {/* Core USP Pills */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl mx-auto mb-10 md:mb-12">
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full"></span>
              <span className="text-slate-700 dark:text-slate-300 text-xs md:text-sm font-medium">Eliminate revenue leakage</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full"></span>
              <span className="text-slate-700 dark:text-slate-300 text-xs md:text-sm font-medium">Ensure every task is billable and valid</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full"></span>
              <span className="text-slate-700 dark:text-slate-300 text-xs md:text-sm font-medium">Maintain control across thousands of workers</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4 mb-12 md:mb-20 w-full max-w-md mx-auto sm:max-w-none">

            <div className="flex flex-col gap-4 sm:flex-row">
  <Link
    href="/request-a-demo"
    className="
      w-full
      sm:w-auto
      px-8
      py-3
      bg-teal-600
      text-white
      font-semibold
      rounded-lg
      shadow-lg
      shadow-teal-600/20
      hover:bg-teal-700
      transition
      flex
      items-center
      justify-center
    "
  >
    Request Demo
  </Link>


  <Link
    href="/contractor#run-revenue-scenario"
    className="
      w-full
      sm:w-auto
      px-8
      py-3
      bg-transparent
      text-teal-600
      dark:text-teal-400
      font-semibold
      rounded-lg
      border
      border-teal-600
      dark:border-teal-500
      hover:bg-teal-50
      dark:hover:bg-teal-950/20
      transition
      flex
      items-center
      justify-center
    "
  >
    Run Revenue Scenario
  </Link>
</div>

          </div>

          {/* Platform Live Dashboard Metric Component */}
          <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6 md:p-8 text-left">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-200 dark:border-slate-700 pb-4 mb-6 gap-2">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold tracking-wide">Platform Overview — Live</h3>
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 text-xs font-semibold">
                <span className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full animate-pulse"></span>
                <span>Real-Time Monitoring Active</span>
              </div>
            </div>

            {/* Quick Summary Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 md:p-5 rounded-xl text-center">
                <div className="font-mono text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400">10,847</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs font-medium mt-2">Active Workers</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 md:p-5 rounded-xl text-center">
                <div className="font-mono text-xl md:text-2xl font-bold text-slate-900 dark:text-white">84,302</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs font-medium mt-2">Tasks Completed Today</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 md:p-5 rounded-xl text-center">
                <div className="font-mono text-xl md:text-2xl font-bold text-teal-600 dark:text-teal-400">$1.24M</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs font-medium mt-2">Revenue Generated</div>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-4 md:p-5 rounded-xl text-center">
                <div className="font-mono text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">14</div>
                <div className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs font-medium mt-2">Anomalies Detected</div>
              </div>
            </div>

            {/* Anomaly Live Notification Strip */}
            <div className="bg-orange-50 dark:bg-amber-950/20 rounded-lg border border-orange-200 dark:border-amber-900/40 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
              <div className="flex items-center gap-3 text-xs font-semibold text-amber-800 dark:text-amber-300 text-left">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full flex-shrink-0"></span>
                <span>Anomaly detected — Coordinated task inflation pattern, Worker Group #4417</span>
              </div>
              <span className="text-red-600 dark:text-red-400 text-xs font-bold self-start md:self-end md:shrink-0">
                Revenue Impact: $12,400 blocked
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: THE RISK LAYER */}
      <section
      id="revenue-assurance"
       className="w-full bg-slate-100 dark:bg-slate-950/40 py-16 md:py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">The Risk</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 max-w-4xl mx-auto">
            Scale Without Control Leads to Revenue Loss
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 md:mb-12">
            In flexible workforces, every unverified task is a financial risk — and the risks compound as your workforce scales.
          </p>

          {/* Risk Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
            {[
              { icon: '💸', title: 'Revenue Leakage', text: 'Unverified work billed at full rate erodes margin silently — each unvalidated task a small drain that compounds into significant revenue loss at scale.' },
              { icon: '🎭', title: 'Fraud & Manipulation', text: 'Coordinated task inflation, credential sharing, and system gaming exploit platform rules — resulting in payment for work that was never genuinely performed.' },
              { icon: '⚖️', title: 'Misclassification Risk', text: 'Workers treated as contractors when regulations require employee classification expose your organisation to significant legal and financial penalties across jurisdictions.' },
              { icon: '📉', title: 'Output Variability', text: 'Inconsistent delivery quality and unverified completion status make it impossible to maintain service standards or defend billing accuracy to enterprise clients.' },
            ].map((risk, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden pt-9 relative text-left p-5 md:p-6 flex flex-col h-full">
                <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500 absolute top-0 left-0" />
                <div className="w-11 h-11 bg-emerald-50 dark:bg-teal-950/40 rounded-lg flex items-center justify-center text-xl mb-4">
                  {risk.icon}
                </div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-2">{risk.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">{risk.text}</p>
              </div>
            ))}
          </div>

          {/* Dynamic Highlight Box */}
          <div className="max-w-3xl mx-auto bg-indigo-50 dark:bg-indigo-950/20 rounded-xl border border-indigo-500/20 p-4 md:p-6">
            <p className="text-slate-900 dark:text-slate-200 text-sm md:text-base lg:text-lg font-semibold leading-relaxed">
              In flexible workforces, <span className="text-teal-600 dark:text-teal-400 font-extrabold">every unverified task is a financial risk</span> — and the risks multiply with every worker you add.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE SYSTEM LAYER */}
      <section
      id = "run-revenue-scenario"
       className="w-full bg-white dark:bg-slate-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">The System</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 max-w-4xl mx-auto">
            The Gig Workforce Control & Revenue System
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-12 md:mb-16">
            Six integrated layers that verify work, protect revenue, and maintain control across any scale of contractor or gig workforce.
          </p>

          {/* Integrated 6 Layer Layout Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            
            {/* Layer 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between gap-6">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950/40 rounded-full border border-teal-600/30 flex items-center justify-center font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-4">1</div>
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wide block mb-1">Identity & Access Layer</span>
                <h4 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-4">Worker Authentication</h4>
                <ul className="space-y-3 mb-2">
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Verifies that the correct individual is performing each task</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Detects credential sharing and account substitution in real time</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Risk-based re-verification by task type, value, and worker history</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                Work is only attributed to the verified individual — no proxies, no substitution.
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between gap-6">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950/40 rounded-full border border-teal-600/30 flex items-center justify-center font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-4">2</div>
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wide block mb-1">Activity & Task Layer</span>
                <h4 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-4">Task Execution Capture</h4>
                <ul className="space-y-3 mb-2">
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Records task start, execution, and completion with precision</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Captures device, location, and contextual signals per task</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Policy-aligned session tracking across all worker types</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                Every task has a complete, verified execution record — not just a completion flag.
              </div>
            </div>

            {/* Layer 3 - Featured Revenue Framework */}
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 dark:from-slate-800 dark:to-slate-800/60 rounded-xl shadow-md border border-teal-600/30 p-5 md:p-6 text-left flex flex-col justify-between gap-6 relative">
              <div className="absolute top-0 right-6 bg-teal-600 text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-b-lg">Revenue Engine</div>
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950/40 rounded-full border border-teal-600/30 flex items-center justify-center font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-4">3</div>
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wide block mb-1">🧠 Verification Engine</span>
                <h4 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-4">Work Validation Intelligence</h4>
                <ul className="space-y-3 mb-2">
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Confirms work authenticity against expected patterns and policy</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Validates task completion quality, not just activity signals</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Assesses output legitimacy across role, workload, and context</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                Work validation — not surveillance. The distinction that matters.
              </div>
            </div>

            {/* Layer 4 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between gap-6">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950/40 rounded-full border border-teal-600/30 flex items-center justify-center font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-4">4</div>
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wide block mb-1">💰 Revenue Assurance Engine</span>
                <h4 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-3">Billing Accuracy & Protection</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Determines whether each task qualifies for payment on verified criteria</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Ensures billing accuracy by linking validation result to financial value</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Blocks unqualified work from entering the billing pipeline automatically</li>
                </ul>
                {/* Meta Pipeline status pills */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 rounded-full border border-emerald-200 dark:border-teal-900">✓ Billable</span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 rounded-full border border-indigo-200 dark:border-indigo-900">$18.50 value</span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-emerald-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 rounded-full border border-teal-600/20 dark:border-teal-500/20">Validated</span>
                  <span className="px-2.5 py-1 text-[11px] font-semibold bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-900">⚠ Flagged</span>
                </div>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                Every task carries a financial value and a clear validation result.
              </div>
            </div>

            {/* Layer 5 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between gap-6">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950/40 rounded-full border border-teal-600/30 flex items-center justify-center font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-4">5</div>
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wide block mb-1">📊 Unit Economics Engine</span>
                <h4 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-4">CFO-Grade Workforce Intelligence</h4>
                <ul className="space-y-3 mb-2">
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Tracks cost per task, revenue per worker, and margin per unit in real time</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Surfaces profitability by worker type, region, and task category</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Enables data-driven decisions on workforce mix and rate structures</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                The unit economics your CFO needs — built into every task record.
              </div>
            </div>

            {/* Layer 6 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between gap-6">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950/40 rounded-full border border-teal-600/30 flex items-center justify-center font-mono text-xs font-bold text-teal-600 dark:text-teal-400 mb-4">6</div>
                <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wide block mb-1">⚙️ Control & Enforcement Layer</span>
                <h4 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold mb-4">Financial Control System</h4>
                <ul className="space-y-3 mb-2">
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Flags invalid and anomalous work before it reaches the billing stage</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Prevents unverified tasks from being approved for payment</li>
                  <li className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-sm"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-2 flex-shrink-0" />Triggers structured review workflows for all flagged exceptions</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                This is a financial control system — not a monitoring dashboard.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: COMMAND VIEW DASHBOARD */}
      <section className="w-full bg-slate-100 dark:bg-slate-950/40 py-16 md:py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">Command View</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Operate at Platform Scale With Full Control</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-10 md:mb-12">
            A real-time command interface that gives platform operators complete visibility across workers, tasks, revenue, and risk with filtering by region, worker type, and task category.
          </p>

          {/* Table Container Card */}
          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden text-left">
            
            {/* Control Filters Row Header */}
            <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 px-4 md:px-6 py-4 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold">Platform Command Centre — Live Dashboard</h3>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                <span className="px-3 py-1 text-xs font-medium bg-emerald-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border border-teal-600 dark:border-teal-500 rounded-full cursor-pointer">All Regions</span>
                <span className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">Worker Type</span>
                <span className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">Task Category</span>
                <span className="px-3 py-1 text-xs font-medium bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-full cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">Risk Level</span>
              </div>
            </div>

            {/* Micro Counter Stats Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-slate-200 dark:divide-slate-700 border-b border-slate-200 dark:border-slate-700 text-center lg:text-left">
              <div className="p-4 md:p-6 border-slate-200 dark:border-slate-700">
                <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">10,847</div>
                <div className="flex justify-center lg:justify-between items-center mt-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Active Workers</span>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold hidden lg:inline">↑ 12% vs yesterday</span>
                </div>
              </div>
              <div className="p-4 md:p-6 border-slate-200 dark:border-slate-700">
                <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">84,302</div>
                <div className="flex justify-center lg:justify-between items-center mt-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Tasks Completed</span>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold hidden lg:inline">↑ 8.4% vs avg</span>
                </div>
              </div>
              <div className="p-4 md:p-6 border-t border-slate-200 dark:border-slate-700 lg:border-t-0">
                <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400">$1.24M</div>
                <div className="flex justify-center lg:justify-between items-center mt-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Revenue Generated</span>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold hidden lg:inline">↑ $94K vs yesterday</span>
                </div>
              </div>
              <div className="p-4 md:p-6 border-t border-slate-200 dark:border-slate-700 lg:border-t-0">
                <div className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-400">14</div>
                <div className="flex justify-center lg:justify-between items-center mt-2 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Risk Indicators</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold hidden lg:inline">⚠ Requires review</span>
                </div>
              </div>
            </div>

            {/* Scannable Responsive Table */}
            <div className="overflow-x-auto w-full">
              <table className="w-full whitespace-nowrap table-auto">
                <thead className="bg-slate-50 dark:bg-slate-900 text-slate-400 dark:text-slate-500 font-bold uppercase text-[11px] tracking-wider border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="px-6 py-3 text-left">Worker ID</th>
                    <th className="px-6 py-3 text-left">Region</th>
                    <th className="px-6 py-3 text-left">Task Category</th>
                    <th className="px-6 py-3 text-center">Tasks Today</th>
                    <th className="px-6 py-3 text-right">Revenue</th>
                    <th className="px-6 py-3 text-center">Validation Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-sm text-slate-700 dark:text-slate-300">
                  {workers.map((worker, index) => (
                    <tr key={index} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition">
                      <td className="px-6 py-4 font-mono font-medium">{worker.id}</td>
                      <td className="px-6 py-4">{worker.region}</td>
                      <td className="px-6 py-4">{worker.category}</td>
                      <td className="px-6 py-4 text-center font-medium">{worker.tasks}</td>
                      <td className={`px-6 py-4 text-right font-mono font-bold ${worker.status === 'Flagged' ? 'text-amber-600 dark:text-amber-400' : worker.status === 'In Review' ? 'text-indigo-500 dark:text-indigo-400' : 'text-teal-600 dark:text-teal-400'}`}>
                        ${worker.revenue.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                          worker.status === 'Verified' ? 'bg-emerald-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300' :
                          worker.status === 'Flagged' ? 'bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300' : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300'
                        }`}>
                          {worker.status === 'Verified' && '✓ Verified'}
                          {worker.status === 'Flagged' && '⚠ Flagged'}
                          {worker.status === 'In Review' && '● In Review'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: BILLING INTEGRITY LAYER */}
      <section className="w-full bg-white dark:bg-slate-900 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start">
          
          {/* Left Block info column */}
          <div>
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">Billing Integrity</span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">Only Verified Work Gets Paid</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              ZoikoTime enforces a strict task validation gate before any work enters the billing pipeline. Every task must pass authentication, execution verification, and output validation before payment is approved.
            </p>

            <div className="bg-emerald-50 dark:bg-slate-800 rounded-xl border border-teal-600/20 dark:border-slate-700 p-5 md:p-6 mb-8">
              <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wide block mb-4">Eliminates</span>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                  <span className="w-7 h-7 bg-teal-600/10 dark:bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🚫</span>
                  Overbilling from unverified or inflated task counts
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                  <span className="w-7 h-7 bg-teal-600/10 dark:bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🚫</span>
                  Fraudulent claims for work never genuinely performed
                </li>
                <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                  <span className="w-7 h-7 bg-teal-600/10 dark:bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 text-xs">🚫</span>
                  Revenue leakage from manual billing errors and gaps
                </li>
              </ul>
            </div>

           <Link
  href="/contractor#revenue-assurance"
  className="
    w-full
    sm:w-auto
    px-6
    py-3
    bg-teal-600
    text-white
    font-semibold
    rounded-lg
    shadow-md
    shadow-teal-600/20
    hover:bg-teal-700
    transition
    flex
    items-center
    justify-center
  "
>
  Explore Revenue Assurance
</Link>
          </div>

          {/* Right Workflow step tracking list block column */}
          <div className="space-y-6 mt-6 md:mt-0">
            
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex gap-4">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-teal-950/40 border border-teal-600/25 rounded-lg flex items-center justify-center text-sm flex-shrink-0">✅</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Task Completed</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Contractor marks task complete via verified session with device and context signals captured.</p>
              </div>
            </div>

            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex gap-4">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-teal-950/40 border border-teal-600/25 rounded-lg flex items-center justify-center text-sm flex-shrink-0">🔍</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Verified</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Identity confirmed, execution record reviewed, and output quality assessed against policy.</p>
              </div>
            </div>

            <div className="border-b border-slate-200 dark:border-slate-800 pb-4 flex gap-4">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-teal-950/40 border border-teal-600/25 rounded-lg flex items-center justify-center text-sm flex-shrink-0">⚖️</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Validated</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Task meets all billability criteria — authenticity, completion quality, and compliance requirements satisfied.</p>
              </div>
            </div>

            <div className="pb-4 flex gap-4">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-teal-950/40 border border-teal-600/25 rounded-lg flex items-center justify-center text-sm flex-shrink-0">💰</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Approved for Billing</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Task enters billing pipeline with a verified financial value, audit trail, and immutable record.</p>
              </div>
            </div>

            {/* Split Exception Divider Case */}
            <div className="relative py-4 flex items-center justify-center">
              <div className="w-full h-px bg-slate-200 dark:bg-slate-800 absolute left-0 z-0" />
              <span className="bg-white dark:bg-slate-900 px-4 text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-wider relative z-10">If task is invalid</span>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-lg flex items-center justify-center text-sm flex-shrink-0">🚩</div>
              <div>
                <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Flagged & Blocked</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Invalid task is automatically blocked from billing and routed to a structured review workflow for human investigation.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 6: JURISDICTION COMPLIANCE */}
      <section className="w-full bg-slate-100 dark:bg-slate-950/40 py-16 md:py-20 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          
          <div>
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">Compliance</span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Manage Contractor Risk Across Jurisdictions</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed mb-8">
              Worker misclassification is one of the most significant legal and financial risks for platforms operating contractor workforces. ZoikoTime provides the classification intelligence, policy enforcement, and jurisdiction-specific controls to protect your organisation.
            </p>

            <div className="space-y-4">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-5 flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-teal-950/40 rounded-md flex items-center justify-center flex-shrink-0">📋</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Classification Validation</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Continuously validates each worker's classification against work patterns, task volume, and jurisdiction-specific criteria — flagging risk before it becomes liability.</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-5 flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-teal-950/40 rounded-md flex items-center justify-center flex-shrink-0">🛡️</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Policy Enforcement</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Enforces classification policies at the point of task assignment — preventing non-compliant work arrangements from being initiated in the first place.</p>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-4 md:p-5 flex gap-4">
                <div className="w-10 h-10 bg-emerald-50 dark:bg-teal-950/40 rounded-md flex items-center justify-center flex-shrink-0">🌍</div>
                <div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-base mb-1">Jurisdiction-Specific Rules</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">Applies the correct legal framework for each jurisdiction automatically — from UK IR35 to California AB5 — without requiring manual policy management per region.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Place-held visual container column mock */}
          <div className="rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-300 dark:bg-slate-800 relative aspect-[4/5] max-w-sm mx-auto w-full mt-8 md:mt-0">
            <img className="object-cover w-full h-full" src="/contractor/business-people.png" alt="Compliance Overview Interface illustration" />
          </div>

        </div>
      </section>

      {/* SECTION 7: QUALITY ASSURANCE & FRAUD PREVENTION CO-LAYER */}
      <section className="w-full bg-white dark:bg-slate-900 py-16 md:py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 text-center mb-16 md:mb-24">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">Quality Assurance</span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Ensure Work Is Not Just Completed But Done Correctly</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 md:mb-12">
            Task completion is not the same as task quality. ZoikoTime validates both — ensuring that only genuinely productive work is attributed and paid.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between h-full relative overflow-hidden pb-8">
              <div>
                <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 dark:border-slate-700 flex items-center justify-center text-xl mb-4">🔎</div>
                <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Output Validation</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Every completed task is assessed against expected output standards — verifying that the work product meets quality requirements before it is approved for billing or performance attribution.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                True productivity, not activity metrics.
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0 absolute bottom-0 left-0" />
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between h-full relative overflow-hidden pb-8">
              <div>
                <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 dark:border-slate-700 flex items-center justify-center text-xl mb-4">⭐</div>
                <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Quality Scoring</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Each worker receives a continuous quality score based on validated output data — enabling platforms to surface top performers, manage underperformers, and maintain service standards at scale.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                Evidence-based performance visibility across your entire workforce.
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0 absolute bottom-0 left-0" />
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between h-full relative overflow-hidden pb-8">
              <div>
                <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 dark:border-slate-700 flex items-center justify-center text-xl mb-4">✅</div>
                <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Completion Verification</h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Completion status is verified through execution signals, not just self-reported flags — ensuring that the billing record reflects genuine work completion, not the absence of a dispute.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                Verified completion records that hold up to any scrutiny.
              </div>
              <div className="w-full h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0 absolute bottom-0 left-0" />
            </div>
          </div>
        </div>

        {/* Co-Section Fraud block nested component layer matching style parameters */}
        <div className="bg-slate-100 dark:bg-slate-950/40 py-16 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">Fraud Prevention</span>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Detect and Prevent Platform Abuse</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-10 md:mb-12">
              Sophisticated fraud in gig workforces goes beyond individual bad actors — coordinated manipulation requires behavioural intelligence to detect and prevent.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between h-full relative overflow-hidden pb-8">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 dark:border-slate-700 flex items-center justify-center text-xl mb-4">🕵️</div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Coordinated Fraud Detection</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Identifies rings of accounts working in coordinated patterns to inflate task counts, game reward systems, or manipulate platform metrics — at a level invisible to standard monitoring tools.</p>
                </div>
                <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                  Network-level fraud detection, not just individual anomaly flags.
                </div>
                <div className="w-full h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0 absolute bottom-0 left-0" />
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between h-full relative overflow-hidden pb-8">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 dark:border-slate-700 flex items-center justify-center text-xl mb-4">📈</div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Pattern Analysis</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Continuously analyses task velocity, location consistency, device patterns, and output quality trends across time — building a behavioural baseline that makes manipulation statistically detectable.</p>
                </div>
                <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                  Patterns that human reviewers miss — surfaced automatically.
                </div>
                <div className="w-full h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0 absolute bottom-0 left-0" />
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-5 md:p-6 text-left flex flex-col justify-between h-full relative overflow-hidden pb-8">
                <div>
                  <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl border border-teal-600/20 dark:border-slate-700 flex items-center justify-center text-xl mb-4">🧠</div>
                  <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-2">Behavioural Intelligence</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">Every worker builds a behavioural profile over time. Deviations from established patterns trigger targeted review — concentrating human oversight where the risk is highest, not everywhere.</p>
                </div>
                <div className="bg-emerald-50 dark:bg-teal-950/20 rounded-r-md border-l-2 border-teal-600 p-3 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                  Risk-focused human oversight. Not blanket surveillance.
                </div>
                <div className="w-full h-0.5 bg-gradient-to-r from-teal-600/0 via-teal-600 to-teal-600/0 absolute bottom-0 left-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INFRASTRUCTURE METRICS SCALE LAYER */}
      <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Label Tag */}
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
            Infrastructure
          </span>
          
          {/* Section Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 max-w-3xl mx-auto tracking-tight">
            Built for High-Volume Workforce Operations
          </h2>
          
          {/* Subtitle */}
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-4xl mx-auto mb-12 md:mb-16 leading-relaxed">
            ZoikoTime is architected for the operational realities of large-scale<br className="hidden md:inline" />
            contractor and gig platforms — processing millions of task events in real time, without compromise.
          </p>

          {/* Infrastructure Metrics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Concurrent Workers */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden pt-9 relative text-center p-6 md:p-8 flex flex-col h-full min-h-[250px] md:min-h-[288px]">
              <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500 absolute top-0 left-0" />
              <div className="font-mono text-teal-600 dark:text-teal-400 text-4xl md:text-5xl font-bold leading-none mb-4 mt-2">
                10k+
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-4 tracking-tight">
                Concurrent Workers
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                Verified, monitored, and controlled in real time — across any region, worker type, or task category without performance degradation.
              </p>
            </div>

            {/* Card 2: Real-Time Monitoring */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden pt-9 relative text-center p-6 md:p-8 flex flex-col h-full min-h-[250px] md:min-h-[288px]">
              <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500 absolute top-0 left-0" />
              <div className="font-mono text-teal-600 dark:text-teal-400 text-4xl md:text-5xl font-bold leading-none mb-4 mt-2">
                &lt;200ms
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-4 tracking-tight">
                Real-Time Monitoring
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                Task verification, anomaly detection, and billing validation events processed with sub-200ms latency — no lag between work and control.
              </p>
            </div>

            {/* Card 3: Platform Uptime SLA */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden pt-9 relative text-center p-6 md:p-8 flex flex-col h-full min-h-[250px] md:min-h-[288px]">
              <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500 absolute top-0 left-0" />
              <div className="font-mono text-teal-600 dark:text-teal-400 text-4xl md:text-5xl font-bold leading-none mb-4 mt-2">
                99.9%
              </div>
              <h3 className="text-slate-900 dark:text-white font-semibold text-base mb-4 tracking-tight">
                Platform Uptime SLA
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                Enterprise-grade infrastructure with dedicated deployment, custom SLAs, and jurisdiction-specific data residency controls available for regulated operations.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950/40 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Label Tag */}
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
            Human-in-Command
          </span>
          
          {/* Section Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 max-w-3xl mx-auto tracking-tight">
            Automated Control With Human Oversight
          </h2>
          
          {/* Subtitle */}
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
            ZoikoTime automates verification and control at scale — while<br className="hidden md:inline" />
            ensuring humans remain in command of every consequential decision.
          </p>

          {/* Steps Container Grid */}
          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 grid grid-cols-1 md:grid-cols-3 relative overflow-hidden">
            
            {/* STEP 1 */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col items-center text-center relative border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              {/* Emoji Icon Container */}
              <div className="w-16 h-16 bg-emerald-50 dark:bg-teal-950/40 rounded-full outline outline-2 outline-offset-[-2px] outline-teal-600/25 flex items-center justify-center text-3xl mb-6">
                🤖
              </div>
              <span className="text-teal-600 dark:text-teal-400 font-mono text-xs font-bold tracking-wide uppercase mb-3">
                Step 01
              </span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4">
                System Verifies
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                Automated verification engines process every task in real time — identity, execution, quality, and billing validity assessed without manual involvement.
              </p>
              {/* Desktop Row Arrow */}
              <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xs shadow-sm select-none">
                →
              </div>
            </div>

            {/* STEP 2 */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col items-center text-center relative border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
              {/* Emoji Icon Container */}
              <div className="w-16 h-16 bg-emerald-50 dark:bg-teal-950/40 rounded-full outline outline-2 outline-offset-[-2px] outline-teal-600/25 flex items-center justify-center text-3xl mb-6">
                ⚙️
              </div>
              <span className="text-teal-600 dark:text-teal-400 font-mono text-xs font-bold tracking-wide uppercase mb-3">
                Step 02
              </span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4">
                System Controls
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                Valid tasks flow to billing automatically. Invalid tasks are blocked and flagged. Fraud patterns trigger case creation. All without requiring human initiation.
              </p>
              {/* Desktop Row Arrow */}
              <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 items-center justify-center text-teal-600 dark:text-teal-400 font-bold text-xs shadow-sm select-none">
                →
              </div>
            </div>

            {/* STEP 3 */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col items-center text-center relative">
              {/* Emoji Icon Container */}
              <div className="w-16 h-16 bg-emerald-50 dark:bg-teal-950/40 rounded-full outline outline-2 outline-offset-[-2px] outline-teal-600/25 flex items-center justify-center text-3xl mb-6">
                👤
              </div>
              <span className="text-teal-600 dark:text-teal-400 font-mono text-xs font-bold tracking-wide uppercase mb-3">
                Step 03
              </span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg mb-4 leading-snug">
                Human Intervenes When Needed
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                Flagged cases and exception reviews are routed to the right human with full context — so every consequential decision is made by a person, not an algorithm.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 1: ENTERPRISE IMPACT */}
      <section className="w-full py-16 md:py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Label Tag */}
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
            Enterprise Impact
          </span>
          
          {/* Section Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 max-w-3xl mx-auto tracking-tight">
            What This Means for Your Organisation
          </h2>
          
          {/* Subtitle */}
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-12 md:mb-16">
            Measurable outcomes for the executives accountable for workforce operations, financial performance, and risk exposure.
          </p>

          {/* C-Suite Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            
            {/* COO Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden pt-9 relative text-center p-6 md:p-8 flex flex-col h-full min-h-[280px] md:min-h-[320px]">
              <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500 absolute top-0 left-0" />
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-3">
                COO
              </span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg md:text-xl mb-4 leading-snug">
                Scalable Workforce<br />Operations
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                Operate contractor and gig workforces at any scale with automated verification, real-time visibility, and full platform control — without proportional increases in operational overhead.
              </p>
            </div>

            {/* CFO Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden pt-9 relative text-center p-6 md:p-8 flex flex-col h-full min-h-[280px] md:min-h-[320px]">
              <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500 absolute top-0 left-0" />
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
                CFO
              </span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg md:text-xl mb-4 leading-snug">
                Revenue Protection &<br />Margin Control
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                Eliminate revenue leakage from unverified work, protect billing accuracy across all task types, and gain CFO-grade unit economics visibility across your entire contractor workforce.
              </p>
            </div>

            {/* CRO Card */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden pt-9 relative text-center p-6 md:p-8 flex flex-col h-full min-h-[280px] md:min-h-[320px]">
              <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 to-teal-500 absolute top-0 left-0" />
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
                CRO
              </span>
              <h3 className="text-slate-900 dark:text-white font-bold text-lg md:text-xl mb-4 leading-snug">
                Comprehensive Risk<br />Reduction
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-grow">
                Reduce exposure from misclassification, fraud, billing disputes, and compliance failures — with structured detection, governed case management, and defensible documentation for every incident.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: COMPETITIVE COMPARISON MATRIX */}
      <section className="w-full py-16 md:py-20 bg-slate-50 dark:bg-slate-950/40 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Label Tag */}
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
            Why ZoikoTime
          </span>
          
          {/* Section Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 max-w-4xl mx-auto tracking-tight">
            Why Tracking Tools Cannot Manage Gig Workforces
          </h2>
          
          {/* Subtitle */}
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-12 md:mb-16">
            Legacy time-tracking and monitoring tools were built for office workers. ZoikoTime was purpose-built for contractor and gig workforce economics.
          </p>

          {/* Responsive Comparison Matrix Table Wrapper */}
          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 overflow-hidden text-left">
            <div className="overflow-x-auto w-full">
              <table className="w-full table-auto border-collapse min-w-[768px]">
                
                {/* Table Header Row */}
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                    <th className="w-7/12 px-6 md:px-8 py-5 text-slate-900 dark:text-white text-sm font-bold tracking-wide">
                      Capability
                    </th>
                    <th className="w-2/12 px-6 py-5 text-center text-slate-500 dark:text-slate-400 text-sm font-bold tracking-wide">
                      Legacy Tools
                    </th>
                    <th className="w-3/12 px-6 md:px-8 py-5 bg-emerald-50/50 dark:bg-slate-900/50 text-center border-l border-slate-200 dark:border-slate-700">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                        <span className="text-teal-600 dark:text-teal-400 text-sm font-bold tracking-wide">
                          ZoikoTime®
                        </span>
                        <span className="px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-300 border border-teal-600/20 dark:border-teal-500/20 rounded-full">
                          Revenue OS
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body Content Rows */}
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700 text-sm text-slate-700 dark:text-slate-300">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition">
                    <td className="px-6 md:px-8 py-5 text-slate-700 dark:text-slate-300 font-medium">
                      Work validation with output quality and completion verification
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-xl text-slate-300 dark:text-slate-600 select-none">
                      ✗
                    </td>
                    <td className="px-6 md:px-8 py-5 text-center bg-teal-600/[0.02] dark:bg-teal-500/[0.01] font-mono text-xl text-teal-600 dark:text-teal-400 font-bold border-l border-slate-200/80 dark:border-slate-700">
                      ✓
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="bg-gray-50/60 dark:bg-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition">
                    <td className="px-6 md:px-8 py-5 text-slate-700 dark:text-slate-300 font-medium">
                      Revenue assurance with automated billing gate enforcement
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-xl text-slate-300 dark:text-slate-600 select-none">
                      ✗
                    </td>
                    <td className="px-6 md:px-8 py-5 text-center bg-teal-600/[0.02] dark:bg-teal-500/[0.01] font-mono text-xl text-teal-600 dark:text-teal-400 font-bold border-l border-slate-200/80 dark:border-slate-700">
                      ✓
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition">
                    <td className="px-6 md:px-8 py-5 text-slate-700 dark:text-slate-300 font-medium">
                      Unit economics — cost per task, revenue per worker, margin per unit
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-xl text-slate-300 dark:text-slate-600 select-none">
                      ✗
                    </td>
                    <td className="px-6 md:px-8 py-5 text-center bg-teal-600/[0.02] dark:bg-teal-500/[0.01] font-mono text-xl text-teal-600 dark:text-teal-400 font-bold border-l border-slate-200/80 dark:border-slate-700">
                      ✓
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="bg-gray-50/60 dark:bg-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition">
                    <td className="px-6 md:px-8 py-5 text-slate-700 dark:text-slate-300 font-medium">
                      Coordinated fraud detection with behavioural pattern intelligence
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-xl text-slate-300 dark:text-slate-600 select-none">
                      ✗
                    </td>
                    <td className="px-6 md:px-8 py-5 text-center bg-teal-600/[0.02] dark:bg-teal-500/[0.01] font-mono text-xl text-teal-600 dark:text-teal-400 font-bold border-l border-slate-200/80 dark:border-slate-700">
                      ✓
                    </td>
                  </tr>

                  {/* Row 5 */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition">
                    <td className="px-6 md:px-8 py-5 text-slate-700 dark:text-slate-300 font-medium">
                      Misclassification risk management across multiple jurisdictions
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-xl text-slate-300 dark:text-slate-600 select-none">
                      ✗
                    </td>
                    <td className="px-6 md:px-8 py-5 text-center bg-teal-600/[0.02] dark:bg-teal-500/[0.01] font-mono text-xl text-teal-600 dark:text-teal-400 font-bold border-l border-slate-200/80 dark:border-slate-700">
                      ✓
                    </td>
                  </tr>

                  {/* Row 6 */}
                  <tr className="bg-gray-50/60 dark:bg-slate-800/40 hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition">
                    <td className="px-6 md:px-8 py-5 text-slate-700 dark:text-slate-300 font-medium">
                      Platform command view with real-time risk and revenue monitoring
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-xl text-slate-300 dark:text-slate-600 select-none">
                      ✗
                    </td>
                    <td className="px-6 md:px-8 py-5 text-center bg-teal-600/[0.02] dark:bg-teal-500/[0.01] font-mono text-xl text-teal-600 dark:text-teal-400 font-bold border-l border-slate-200/80 dark:border-slate-700">
                      ✓
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA CONTAINER */}
      <section className="w-full py-16 md:py-20 bg-gradient-to-b from-teal-50/60 to-emerald-50/60 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
        {/* Top Accent Line */}
        <div className="w-full h-[3px] bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 absolute top-0 left-0" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          {/* Label Tag */}
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-4">
            Get Started
          </span>

          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 max-w-5xl mx-auto tracking-tight leading-tight">
            If Work Is Not Verified, It Should Not Be Paid
          </h2>

          {/* Subtitle */}
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base lg:text-lg max-w-4xl mx-auto mb-10 leading-relaxed">
            ZoikoTime gives your platform the verification infrastructure, revenue assurance
            controls, and workforce intelligence needed to scale contractor and gig operations — without losing control of your margin.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 max-w-md mx-auto sm:max-w-none">
            {/* Primary CTA: Request Demo */}

            <div className="flex flex-col gap-4 sm:flex-row">
  <Link
    href="/request-a-demo"
    className="
      w-full
      sm:w-auto
      px-8
      h-12
      bg-teal-600
      hover:bg-teal-700
      text-white
      font-semibold
      text-base
      rounded-lg
      shadow-[0px_4px_14px_0px_rgba(0,157,140,0.28)]
      transition
      flex
      items-center
      justify-center
      gap-2.5
      group
    "
  >
    <svg
      className="w-4 h-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M8 5v14l11-7z" />
    </svg>

    <span>Request Demo</span>
  </Link>


  <Link
    href="/contractor#run-revenue-scenario"
    className="
      w-full
      sm:w-auto
      px-8
      h-12
      border
      border-teal-600
      dark:border-teal-500
      text-teal-600
      dark:text-teal-400
      hover:bg-teal-50
      dark:hover:bg-slate-800
      font-semibold
      text-base
      rounded-lg
      transition
      flex
      items-center
      justify-center
    "
  >
    Run Revenue Scenario
  </Link>
</div>

          </div>
        </div>
      </section>

    </div>
  );
}