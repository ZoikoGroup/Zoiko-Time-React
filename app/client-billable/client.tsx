"use client";
import Link from "next/link";

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ShieldAlert, Sparkles, TrendingUp, CheckCircle, Database, Layers, ArrowRight } from 'lucide-react';

export default function ClientBillableFullPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Section 2: Failure Points
  const failurePoints = [
    {
      emoji: "👻",
      title: "Revenue Not Recognised",
      description: "Work is performed but not captured in billable records — due to under-reporting, session gaps, unverified time, or informal work that never enters the billing system at all.",
      example: "Example: 8.5 hours worked, 6.2 hours billed — 27% leakage per consultant per week"
    },
    {
      emoji: "📉",
      title: "Systematic Underpricing",
      description: "Incorrect rates are applied to billable work — wrong seniority tier, expired rate card, scope creep absorb, or discretionary discounts applied without authority visibility or pattern tracking.",
      example: "Example: Senior rate work billed at junior rate across 30% of engagements — annual margin erosion: £180K"
    },
    {
      emoji: "✂️",
      title: "Write-Offs & Revenue Loss",
      description: "Revenue invoiced but subsequently written off — due to billing disputes, client challenges, or the absence of evidence to defend legitimate charges in dispute resolution proceedings.",
      example: "Example: £2.4M in annual billing disputes resolved in client's favour due to absence of verified session evidence"
    }
  ];

  // Section 3: System Matrix
  const comparisons = [
    { area: "Primary Function", legacy: "Time tracking and logging", zoiko: "Revenue intelligence and assurance" },
    { area: "Billing Approach", legacy: "Reactive invoicing — log then bill", zoiko: "Controlled revenue lifecycle from session to collection" },
    { area: "Revenue Recognition", legacy: "❌ Not addressed", zoiko: "ASC 606 / IFRS 15 aligned recognition engine" },
    { area: "Pricing Integrity", legacy: "❌ Not enforced", zoiko: "Rate validation against contract terms at session level" },
    { area: "Billing Dispute Defence", legacy: "Self-reported time — no evidence", zoiko: "Tamper-evident session evidence backing every invoice" },
    { area: "Client Profitability", legacy: "❌ Not tracked", zoiko: "Revenue, margin, and utilisation per engagement and client" },
    { area: "Write-Off Analysis", legacy: "Retrospective — after revenue is lost", zoiko: "Proactive identification of write-off risk before invoicing" }
  ];

  // Section 4: 8-Layer Engine
  const engineLayers = [
    { num: "01", name: "Activity Capture Layer", text: "Every billable session verified against session continuity, identity, device, and location signals — creating a tamper-evident foundation for every revenue record that follows.", tags: ["Session verification", "Identity confirmation", "Continuous monitoring"] },
    { num: "02", name: "Verification Engine", text: "Confidence scores assigned to every session — flagging low-confidence billing events before they enter the payroll or invoice cycle, preventing disputed revenue before it is created.", tags: ["Confidence scoring", "Anomaly detection", "Pre-billing validation"] },
    { num: "03", name: "Billability Engine", text: "Validated sessions mapped to client engagement, project scope, and billing category — ensuring every work unit is correctly categorised before rate application.", tags: ["Engagement mapping", "Scope alignment", "Billing categorisation"] },
    { num: "04", name: "Revenue Recognition Engine", text: "Revenue recognition aligned to ASC 606 and IFRS 15 — ensuring performance obligations are identified, progress measured, and revenue recognised at the point the obligation is satisfied.", tags: ["ASC 606", "IFRS 15", "Performance obligations", "Recognition triggers"], alert: true },
    { num: "05", name: "Pricing & Rate Integrity Engine", text: "Every billable session validated against the applicable contract rate — detecting seniority mismatches, unauthorised discounts, expired rate cards, and scope creep absorption before invoicing.", tags: ["Rate validation", "Discount governance", "Scope alignment"] },
    { num: "06", name: "Realisation & Utilisation Engine", text: "Billable utilisation, realisation rate, and write-off tracking per consultant, team, and engagement — surfacing underperforming revenue streams before they become profit problems.", tags: ["Utilisation tracking", "Realisation rate", "Write-off identification"] },
    { num: "07", name: "Client Profitability Engine", text: "Revenue, margin, and efficiency tracked per client and engagement — enabling profitability analysis at account level and informing commercial decisions about scope, pricing, and resourcing.", tags: ["Revenue per client", "Margin per engagement", "Profitability analysis"] },
    { num: "08", name: "Evidence Layer", text: "Tamper-evident evidence records attached to every billable session — structured for immediate access in dispute resolution, client audit, or revenue governance review.", tags: ["Chain of custody", "Dispute defence", "Audit-ready export"] }
  ];

  // Section 5: Controlled Flow Steps
  const flowSteps = [
    { icon: "⚙️", label: "Work Performed", desc: "Session verified · Identity confirmed" },
    { icon: "✅", label: "Verified Billable", desc: "Confidence scored · Anomalies flagged" },
    { icon: "💲", label: "Rate Applied", desc: "Contract rate validated · Scope confirmed" },
    { icon: "📊", label: "Revenue Recognised", desc: "ASC 606 / IFRS 15 obligation confirmed" },
    { icon: "📄", label: "Invoice Issued", desc: "Evidence-backed · Dispute-resistant" },
    { icon: "💰", label: "Payment Tracked", desc: "Collection confirmed · Realisation measured" }
  ];

  // Section 7: Legacy Rows
  const legacyComparisonRows = [
    { title: "Revenue recognition alignment (ASC 606 / IFRS 15)", legacy: "✗", zoiko: "✓" },
    { title: "Real-time pricing and rate integrity validation", legacy: "✗", zoiko: "✓" },
    { title: "Client profitability tracking per engagement", legacy: "✗", zoiko: "✓" },
    { title: "Verified session evidence backing every invoice", legacy: "✗", zoiko: "✓" },
    { title: "Pre-billing write-off risk identification", legacy: "✗", zoiko: "✓" },
    { title: "Billing dispute defence with tamper-evident records", legacy: "Manual / Limited", zoiko: "✓", specialLegacyColor: true },
    { title: "Anomaly detection — artificial session inflation", legacy: "✗", zoiko: "✓" },
    { title: "Realisation rate and utilisation intelligence", legacy: "Basic reporting only", zoiko: "✓ Full intelligence", specialLegacyColor: true }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-gray-900 dark:text-white antialiased selection:bg-[#007D6F] selection:text-white transition-colors duration-200">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Turn Billable Work Into <br />
            <span className="text-[#007D6F] dark:text-[#009D8C]">Recognised, Defensible Revenue</span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-slate-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ZoikoTime ensures every unit of work is verified, priced correctly, aligned with revenue recognition rules, and supported by evidence — enabling organisations to maximise revenue and protect margin.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 px-4">

            <div className="flex flex-col gap-4 sm:flex-row">
  <Link
    href="/request-a-demo"
    className="
      w-full
      sm:w-auto
      bg-[#007D6F]
      hover:bg-[#006358]
      text-white
      font-bold
      px-8
      py-3.5
      rounded-md
      shadow-[0px_4px_14px_0px_rgba(0,157,140,0.35)]
      transition-all
      flex
      items-center
      justify-center
      gap-2
      group
    "
  >
    Request Revenue Demo

    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </Link>


  <Link
    href="/contact-sales"
    className="
      w-full
      sm:w-auto
      border
      border-[#007D6F]
      text-[#007D6F]
      dark:text-[#009D8C]
      dark:border-[#009D8C]
      hover:bg-[#007D6F]/5
      font-medium
      px-8
      py-3.5
      rounded-md
      transition-all
      flex
      items-center
      justify-center
    "
  >
    Speak to an Expert
  </Link>
</div>

          </div>
        </div>
        <div className="absolute top-[-60px] right-0 lg:right-[100px] size-[480px] bg-radial from-[#009D8C]/10 to-transparent blur-2xl pointer-events-none" />
      </section>

      {/* SECTION 2: SILENT FAILURE POINTS */}
      <section className="bg-slate-100 dark:bg-gray-800/50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Where Billable Revenue Disappears</h2>
            <p className="text-slate-500 dark:text-gray-400 mt-4 text-base leading-relaxed">
              Most professional services organisations lose 15–30% of potential revenue across three silent failure points — none of which traditional time-tracking tools are designed to address.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {failurePoints.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-slate-200/60 dark:border-gray-700 relative overflow-hidden flex flex-col justify-between group hover:shadow-md transition-all">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 to-orange-500" />
                <div>
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-sm leading-6 mb-6">{item.description}</p>
                </div>
                <div className="bg-red-50/70 dark:bg-red-950/20 border border-red-500/20 rounded-xl p-4 mt-2">
                  <p className="text-red-600 dark:text-red-400 text-xs font-semibold leading-5">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: REVENUE LIFECYCLE CAPABILITY MATRIX */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">From Time-Tracking to Revenue Intelligence</h2>
          <p className="text-slate-500 dark:text-gray-400 mt-3 text-base">
            Traditional tools record time. ZoikoTime governs the full revenue lifecycle — from session verification through revenue recognition to client profitability analysis.
          </p>
        </div>

        <div className="overflow-x-auto border border-slate-200 dark:border-gray-700 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="bg-slate-100 dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
                <th className="p-4 text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wide w-1/4">Capability Area</th>
                <th className="p-4 text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wide w-3/8">Traditional Systems</th>
                <th className="p-4 text-xs font-bold text-[#007D6F] dark:text-[#009D8C] uppercase tracking-wide w-3/8 bg-emerald-50/60 dark:bg-emerald-950/20">ZoikoTime</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-gray-700 text-sm">
              {comparisons.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-gray-800/40 transition-colors">
                  <td className="p-4 font-bold text-slate-900 dark:text-white">{row.area}</td>
                  <td className="p-4 text-slate-500 dark:text-gray-400">{row.legacy}</td>
                  <td className="p-4 text-[#007D6F] dark:text-[#009D8C] font-semibold bg-[#007D6F]/[0.02] dark:bg-[#009D8C]/[0.02] border-l border-emerald-100 dark:border-emerald-900">{row.zoiko}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 4: EIGHT-LAYER REVENUE ENGINE */}
      <section className="bg-slate-100 dark:bg-gray-800/50 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">The Eight-Layer Revenue Engine</h2>
            <p className="text-slate-500 dark:text-gray-400 mt-3 text-base">
              ZoikoTime's revenue system covers every layer of the billable lifecycle — from verified activity capture through to client profitability analysis and write-off recovery.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 overflow-hidden divide-y divide-slate-200 dark:divide-gray-700">
            {engineLayers.map((layer, idx) => (
              <div key={idx} className="p-6 sm:p-8 flex flex-col md:flex-row gap-4 md:gap-8 hover:bg-slate-50/40 dark:hover:bg-gray-800/60 transition-colors">
                <div className="text-[#007D6F] dark:text-[#009D8C] text-3xl font-extrabold tracking-tight min-w-[50px]">{layer.num}</div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{layer.name}</h3>
                  <p className="text-slate-500 dark:text-gray-400 text-xs sm:text-sm leading-6 mb-4">{layer.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {layer.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={`text-xs font-bold px-3 py-1 rounded-full border ${layer.alert && (tag.includes('ASC') || tag.includes('IFRS')) ? 'bg-amber-100 border-amber-200 text-amber-800 dark:bg-amber-950/40 dark:border-amber-900 dark:text-amber-300' : 'bg-emerald-50 border-emerald-600/10 text-teal-700 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-400'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-emerald-50/80 dark:bg-emerald-950/20 p-4 border-t border-emerald-600/10 dark:border-emerald-900/50 text-center">
              <p className="text-[#007D6F] dark:text-[#009D8C] text-xs font-bold">
                ZoikoTime is a full revenue system — not a time-tracking add-on. Every layer is enforced systematically, not reliant on manual input.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CONTROLLED FLOW DIAGRAM */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-[#007D6F] dark:text-[#009D8C]">Billable to Recognised Flow</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">From Session to Collected Revenue Controlled</h2>
          <p className="text-slate-500 dark:text-gray-400 mt-3 text-base max-w-xl mx-auto">
            The full lifecycle of a billable work unit — verified, classified, recognised, invoiced, and evidenced at every stage.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-slate-200 dark:border-gray-700 shadow-sm p-6 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100 dark:divide-gray-700">
            {flowSteps.map((step, idx) => (
              <div key={idx} className="pt-4 md:pt-0 md:px-2 flex flex-col items-center">
                <div className="text-2xl mb-2">{step.icon}</div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">{step.label}</div>
                <div className="text-[11px] text-slate-400 dark:text-gray-500 leading-tight">{step.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-4 border-t border-slate-100 dark:border-gray-700 text-center text-xs font-bold text-teal-700 dark:text-teal-400">
            Every step is verified, evidenced, and traceable — eliminating the gaps where revenue disappears.
          </div>
        </div>
      </section>

      {/* SECTION 6: METRICS DASHBOARD VIEW */}
      <section className="bg-slate-100 dark:bg-gray-800/50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Full Visibility Into Revenue Integrity and Performance</h2>
            <p className="text-slate-500 dark:text-gray-400 mt-3 text-base">
              Board-level revenue intelligence — recognised vs billed, realisation rate, profitability by engagement, and write-off risk — in a single operational dashboard.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 overflow-hidden font-mono">
              <div className="bg-slate-950 px-5 py-4 flex justify-between items-center text-white text-xs">
                <span className="font-sans font-bold">Revenue Intelligence Dashboard — Live</span>
                <div className="flex items-center gap-1.5 text-teal-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-sans font-bold tracking-wider">Live</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 dark:divide-gray-700 text-left">
                <div className="p-6">
                  <div className="text-2xl font-bold text-[#007D6F] dark:text-[#009D8C]">$2.41M</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400 font-sans font-medium mt-1">Revenue Recognised (MTD)</div>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold text-[#007D6F] dark:text-[#009D8C]">$2.18M</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400 font-sans font-medium mt-1">Revenue Billed (MTD)</div>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold text-amber-600 dark:text-amber-500">91.2%</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400 font-sans font-medium mt-1">Realisation Rate (target: 94%)</div>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-bold text-[#007D6F] dark:text-[#009D8C]">94.6%</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400 font-sans font-medium mt-1">Billing Accuracy Rate</div>
                </div>
                <div className="p-6 border-b-0">
                  <div className="text-2xl font-bold text-red-500">$46K</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400 font-sans font-medium mt-1">Write-Off Risk Identified</div>
                </div>
                <div className="p-6 border-b-0">
                  <div className="text-2xl font-bold text-[#007D6F] dark:text-[#009D8C]">38.4%</div>
                  <div className="text-[11px] text-slate-500 dark:text-gray-400 font-sans font-medium mt-1">Avg Gross Margin (engagements)</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Revenue Leakage Identified</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  Verified sessions where work was performed but not yet captured in active billing records — actionable before month-end close.
                </p>
                <div className="text-2xl font-bold text-[#007D6F] dark:text-[#009D8C] tracking-tight font-mono">£28,400</div>
                <div className="text-xs text-slate-400 dark:text-gray-500 mt-1">Recoverable this billing cycle · 12 sessions across 4 engagements</div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-gray-700">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Rate Integrity Alerts</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  Sessions where the applied rate does not match the contracted rate — detected before invoice generation, preventing billing disputes.
                </p>
                <div className="text-2xl font-bold text-amber-600 dark:text-amber-500 tracking-tight font-mono">7 sessions</div>
                <div className="text-xs text-slate-400 dark:text-gray-500 mt-1">Rate mismatch detected · Average variance: £42/hr · Review recommended</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE-BACKED INVOICING */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight leading-tight dark:text-white">
            Evidence-Backed Invoicing That Eliminates Disputes
          </h2>
          <p className="mt-4 text-slate-500 text-base md:text-lg leading-relaxed dark:text-gray-400">
            Every invoice backed by verified session evidence — reducing client billing disputes from a routine cost of business to a near-zero occurrence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 pt-10 shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500"></div>
            <div>
              <div className="text-3xl mb-6 select-none" aria-hidden="true">📊</div>
              <h3 className="text-slate-900 text-lg font-bold mb-3 dark:text-white">
                Verified Revenue Breakdown
              </h3>
              <p className="text-slate-500 text-sm leading-6 dark:text-gray-400">
                Clients receive a structured breakdown of every billed session — session identity, duration, activity confirmation, and applied rate — creating invoice transparency that eliminates ambiguity before disputes arise.
              </p>
            </div>
          </div>

          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 pt-10 shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500"></div>
            <div>
              <div className="text-3xl mb-6 select-none" aria-hidden="true">✅</div>
              <h3 className="text-slate-900 text-lg font-bold mb-3 dark:text-white">
                Value Delivered Evidence
              </h3>
              <p className="text-slate-500 text-sm leading-6 dark:text-gray-400">
                Verified proof that work was performed as described — activity signals, output confirmation, and session continuity data supporting every line item on every invoice your clients receive.
              </p>
            </div>
          </div>

          <div className="relative bg-white dark:bg-gray-800 rounded-xl p-8 pt-10 shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500"></div>
            <div>
              <div className="text-3xl mb-6 select-none" aria-hidden="true">📂</div>
              <h3 className="text-slate-900 text-lg font-bold mb-3 dark:text-white">
                Dispute Resolution Ready
              </h3>
              <p className="text-slate-500 text-sm leading-6 dark:text-gray-400">
                When a billing dispute arises, ZoikoTime provides the complete evidence package — session record, chain of custody, rate validation, and AI reasoning — structured for immediate client resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: WHAT LEGACY BILLING TOOLS CANNOT DO */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">What Legacy Billing Tools Cannot Do</h2>
        </div>

        <div className="overflow-x-auto border border-slate-200 dark:border-gray-700 rounded-2xl shadow-sm">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-100 dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
                <th className="p-4 text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wide w-1/2">Capability</th>
                <th className="p-4 text-xs font-bold text-slate-400 dark:text-gray-500 uppercase tracking-wide w-1/4">Legacy Time-Tracking & Billing Tools</th>
                <th className="p-4 text-xs font-bold text-[#007D6F] dark:text-[#009D8C] uppercase tracking-wide w-1/4 bg-emerald-50/60 dark:bg-emerald-950/20">ZoikoTime Revenue Intelligence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-gray-700 text-sm">
              {legacyComparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/40 dark:hover:bg-gray-800/40">
                  <td className="p-4 font-medium text-slate-900 dark:text-white">{row.title}</td>
                  <td className={`p-4 font-medium ${row.specialLegacyColor ? 'text-red-500 dark:text-red-400' : 'text-red-600/80 dark:text-red-400/80'}`}>{row.legacy}</td>
                  <td className="p-4 text-teal-600 dark:text-emerald-400 font-bold bg-[#007D6F]/[0.03] dark:bg-[#009D8C]/[0.03] border-l border-emerald-100 dark:border-emerald-900">{row.zoiko}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* LEADERSHIP IMPACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight leading-tight dark:text-white">
            Impact Across the Leadership Team
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 flex flex-col">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-wide mb-3 block dark:text-emerald-400">
              CFO / Finance
            </span>
            <h3 className="text-slate-900 text-lg font-bold mb-6 min-h-[56px] leading-7 dark:text-white">
              Revenue Assurance & Margin Optimisation
            </h3>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Eliminate unrecognised revenue — capture 100% of verified billable work</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Protect margin — rate integrity enforcement prevents systematic underpricing</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Board-ready revenue intelligence — recognised vs billed, realisation rate, profitability</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Write-off reduction — proactive identification before revenue is lost</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 flex flex-col">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-wide mb-3 block dark:text-emerald-400">
              COO / Operations
            </span>
            <h3 className="text-slate-900 text-lg font-bold mb-6 min-h-[56px] leading-7 dark:text-white">
              Operational Efficiency & Visibility
            </h3>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Real-time utilisation visibility across all billable consultants and teams</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Automated billing validation — eliminate manual reconciliation bottlenecks</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Engagement-level performance intelligence — identify underperforming accounts early</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Dispute resolution in hours, not weeks — eliminating the commercial disruption of billing challenges</p>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-[0px_1px_4px_0px_rgba(13,21,38,0.06)] border border-slate-200 dark:border-gray-700 flex flex-col">
            <span className="text-teal-600 text-xs font-bold uppercase tracking-wide mb-3 block dark:text-emerald-400">
              Revenue Leaders / Partners
            </span>
            <h3 className="text-slate-900 text-lg font-bold mb-6 min-h-[56px] leading-7 dark:text-white">
              Performance Optimisation & Client Trust
            </h3>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Client profitability analysis per engagement — enabling commercial decisions grounded in verified data</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Billing dispute elimination — invoice with complete confidence and supporting evidence</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Accurate utilisation and realisation tracking — real performance data, not self-reported estimates</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-600 text-xs font-bold leading-5 select-none dark:text-emerald-400" aria-hidden="true">✓</span>
                <p className="text-slate-500 text-xs leading-5 dark:text-gray-400">Client transparency layer — evidence-backed invoices that strengthen client relationships</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8: HERO ACTION SECTION FOR BOTTOM CLOSURE */}
      <section className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden border-t-4 border-[#007D6F]">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#009D8C] tracking-tight">
            If Revenue Cannot Be Proven, It <br className="hidden sm:inline"/> Cannot Be Defended.
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            ZoikoTime turns every billable session into verified, evidence-backed, recognised revenue — protected from disputes, aligned with recognition standards, and visible to the finance team in real time.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">

            <div className="flex flex-col gap-4 sm:flex-row">
  <Link
    href="/request-a-demo"
    className="
      w-full
      sm:w-auto
      bg-[#007D6F]
      hover:bg-[#006358]
      text-white
      font-semibold
      px-6
      py-3
      rounded-md
      shadow-lg
      transition-all
      flex
      items-center
      justify-center
    "
  >
    Request Revenue Demo
  </Link>


  <Link
    href="/contact-sales"
    className="
      w-full
      sm:w-auto
      border
      border-white
      text-white
      hover:bg-white/10
      font-medium
      px-6
      py-3
      rounded-md
      transition-all
      flex
      items-center
      justify-center
    "
  >
    Speak to an Expert
  </Link>
</div>

          </div>
        </div>
      </section>

    </div>
  );
}