import React from 'react';

export default function Distributed() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-sans antialiased transition-colors duration-200">
    
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-teal-50 to-white dark:from-slate-950 dark:to-slate-900 pt-12 pb-24 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-4">
            Distributed Workforces
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            A Command Centre for Your <br />
            <span className="text-teal-600 dark:text-teal-400">Global Workforce</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            ZoikoTime provides real-time control, visibility, and policy enforcement
            across distributed teams — ensuring every workforce action is aligned,
            compliant, and accountable, regardless of location.
          </p>

          {/* Core Pillars */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 mb-12 max-w-3xl mx-auto">
            <div className="w-full sm:w-auto flex items-center gap-2 bg-white dark:bg-slate-800 px-5 py-2.5 rounded-full shadow-xs border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full shrink-0" />
              Eliminate operational drift across teams
            </div>
            <div className="w-full sm:w-auto flex items-center gap-2 bg-white dark:bg-slate-800 px-5 py-2.5 rounded-full shadow-xs border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full shrink-0" />
              Maintain control across jurisdictions
            </div>
            <div className="w-full sm:w-auto flex items-center gap-2 bg-white dark:bg-slate-800 px-5 py-2.5 rounded-full shadow-xs border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full shrink-0" />
              Align distributed work with enterprise objectives
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto sm:max-w-none">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transition-all">
              {/* Figma-like Play Icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Request Demo
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 border border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 transition-all">
              Explore Command Centre
            </button>
          </div>
        </div>
      </section>

      {/* The Risk Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">
              The Risk
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              When Work Spreads, Risk Multiplies
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Distributed work creates flexibility — but without control, it creates
              fragmentation that compounds across every team, region, and time zone.
            </p>
          </div>

          {/* Explicitly structured to force a 2-card look on larger screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {/* Risk Card 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-xs group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="w-11 h-11 bg-emerald-50 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-xl mb-6">
                🌊
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Operational Drift</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Teams across regions gradually diverge from established standards — creating inconsistency in delivery quality, policy adherence, and performance expectations that erodes organisational alignment over time.
              </p>
            </div>

            {/* Risk Card 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-xs group">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="w-11 h-11 bg-emerald-50 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-xl mb-6">
                🌍
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Jurisdictional Complexity</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Different countries apply different labour laws, data protection rules, and employment standards — making consistent policy enforcement across a global workforce operationally and legally challenging without the right infrastructure.
              </p>
            </div>

            {/* Risk Card 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden shadow-xs group md:col-span-2 lg:col-span-2">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="w-11 h-11 bg-emerald-50 dark:bg-teal-900/30 rounded-lg flex items-center justify-center text-xl mb-6">
                ⏱️
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Asynchronous Misalignment</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Work happening across time zones without coordinated oversight creates gaps in visibility — decisions made and actions taken without central awareness, degrading governance quality at scale.
              </p>
            </div>
          </div>

          {/* Summary Box */}
          <div className="max-w-2xl mx-auto bg-indigo-50/60 dark:bg-slate-800/60 border border-indigo-500/10 dark:border-indigo-400/20 rounded-xl p-6 text-center text-slate-900 dark:text-slate-200 font-semibold text-base sm:text-lg">
            Distributed work creates flexibility — but <span className="text-teal-600 dark:text-teal-400 font-extrabold">without control, it creates fragmentation</span> that compounds with every team you add.
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">
              The System
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              The Distributed Workforce Control System
            </h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Five integrated layers that give your organisation centralised command over distributed teams — with local execution, global consistency, and real-time intervention capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Layer 1 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[384px]">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950 border border-teal-600/20 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-mono font-bold mb-4">
                  1
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Identity & Verification Layer</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Confirmed Worker Identity</h3>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Confirms who is working across every region and work environment</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Risk-based re-verification triggered by role, location, and policy profile</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Immutable session records linked to verified identities globally</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                Every distributed work session is anchored to a verified individual — no gaps, no ambiguity.
              </div>
            </div>

            {/* Layer 2 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[384px]">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950 border border-teal-600/20 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-mono font-bold mb-4">
                  2
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">Context & Jurisdiction Layer</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Location-Aware Policy Application</h3>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Determines where work is happening — country, region, and work environment</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Automatically applies the correct policy framework for each jurisdiction</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Handles multi-jurisdiction workers with overlapping rule sets simultaneously</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                The right rules applied automatically — wherever your workforce operates.
              </div>
            </div>

            {/* Layer 3 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[384px]">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950 border border-teal-600/20 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-mono font-bold mb-4">
                  3
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">🧠 Alignment Engine</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Continuous Consistency Detection</h3>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Monitors team operations against organisational standards in real time</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Detects policy drift before it becomes entrenched misalignment</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Surfaces inconsistency patterns across teams, regions, and time zones</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                Drift is detected the moment it begins — not discovered weeks later in a review.
              </div>
            </div>

            {/* Layer 4 - Differentiator */}
            <div className="relative bg-linear-to-br from-emerald-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-teal-600/30 dark:border-teal-500/40 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[384px]">
              <div className="absolute top-0 right-6 bg-teal-600 dark:bg-teal-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-b-md tracking-wider">
                Differentiator
              </div>
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950 border border-teal-600/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-mono font-bold mb-4">
                  4
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">🌍 Global Command Layer</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Centralised Control Interface</h3>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Single command interface providing real-time oversight across all global operations</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Intervention capability — issue corrections, trigger reviews, enforce policy centrally</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Drill-down visibility from global summary to individual worker session level</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                Not a reporting dashboard — an active command and control interface for your global workforce.
              </div>
            </div>

            {/* Layer 5 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 flex flex-col justify-between min-h-[384px]">
              <div>
                <div className="w-8 h-8 bg-emerald-50 dark:bg-teal-950 border border-teal-600/20 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-xs font-mono font-bold mb-4">
                  5
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">⚙️ Control & Enforcement Layer</span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Active Rule Enforcement</h3>
                <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Applies policy rules at the point of activity — not retrospectively</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Triggers automated correction and review workflows for violations</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full mt-1.5 shrink-0"/> Prevents policy breaches from occurring rather than simply recording them</li>
                </ul>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                Control, not observation. The fundamental difference that matters.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drift Detection Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Drift Detection</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Detect and Correct Drift in <br />Real Time</h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Operational drift is silent — teams diverge incrementally, and by the time it is visible, the misalignment is significant. ZoikoTime detects drift at the earliest signal and triggers correction before it compounds.
              </p>
            </div>

            {/* Step 1 */}
            <div className="flex gap-4 pb-6 border-b border-slate-200 dark:border-slate-750">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-lg shrink-0">🔍</div>
              <div>
                <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-wide block">STEP 01</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Deviation Detected</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Team A's activity patterns diverge from policy baseline — anomaly flagged at the individual session level before it becomes a team-wide pattern.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 pb-6 border-b border-slate-200 dark:border-slate-750">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-950/40 rounded-lg flex items-center justify-center text-lg shrink-0">⚠️</div>
              <div>
                <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-wide block">STEP 02</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Inconsistency Flagged</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">The Alignment Engine surfaces the drift with context — affected teams, severity score, policy reference, and historical trend — enabling informed response.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-emerald-50 dark:bg-slate-800 rounded-lg flex items-center justify-center text-lg shrink-0">✅</div>
              <div>
                <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-wide block">STEP 03</span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">Correction Applied</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">A targeted correction is issued from the central command layer — re-aligning the affected team to policy standards with a full audit record of the intervention.</p>
              </div>
            </div>
          </div>

          {/* Interactive Interface Image Placeholder Container */}
          <div className="lg:col-span-6 bg-slate-300 dark:bg-slate-800 rounded-2xl min-h-[400px] sm:min-h-[500px] overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
            <img src="/distributed-workforce/3d-scanner.png" alt="Drift Dashboard Interface" className="w-full h-full object-cover opacity-90" />
          </div>
        </div>
      </section>

      {/* Cross-Border Intelligence */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Cross-Border Intelligence</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Built for Global Workforce Complexity</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Real-world global operations are messy — workers move, teams span time zones, and rules overlap. ZoikoTime handles the complexity so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Intel Card 1 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-4">✈️</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Employee Moves Between Countries</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">When a worker crosses a border — temporarily or permanently — ZoikoTime automatically shifts the applicable policy framework to reflect the new jurisdiction, without manual intervention or configuration changes.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                Policy shifts automatically. No manual re-configuration required.
              </div>
            </div>

            {/* Intel Card 2 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-4">🌐</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Teams Across Time Zones</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Distributed teams operating in different time zones are tracked against unified performance metrics, normalised for local context — enabling fair, consistent comparisons without penalising geographic spread.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                Unified performance tracking that accounts for every time zone.
              </div>
            </div>

            {/* Intel Card 3 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex flex-col justify-between shadow-xs md:col-span-2 lg:col-span-1">
              <div>
                <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-4">⚖️</div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Hybrid Jurisdiction Work</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">Workers operating across multiple jurisdictions simultaneously — remote work in one country, client presence in another — have the correct rule sets applied in parallel, with no policy conflicts and full compliance coverage.</p>
              </div>
              <div className="bg-emerald-50 dark:bg-teal-950/40 border-l-2 border-teal-600 dark:border-teal-400 p-3 rounded-r text-xs font-semibold text-teal-700 dark:text-teal-300">
                Multiple rules applied concurrently — zero policy conflicts at the boundary.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Command & Response Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Command & Response</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Act on Global Events Instantly</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              ZoikoTime collapses the distance between a distributed event and a central decision — from activity detection to command execution in a single, governed flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step cards */}
            {[
              { num: "01", label: "DETECT", icon: "📡", title: "Activity Detected", desc: "A distributed event — session anomaly, policy breach, or compliance flag — is captured in real time across any region." },
              { num: "02", label: "CONTEXTUALISE", icon: "🗺️", title: "Context Applied", desc: "Jurisdiction, policy framework, worker profile, and risk classification are attached to the event automatically." },
              { num: "03", label: "IDENTIFY", icon: "🔎", title: "Issue Identified", desc: "The Alignment Engine classifies the issue, assesses severity, and surfaces it in the global command interface with full context." },
              { num: "04", label: "COMMAND", icon: "⚡", title: "Command Issued", desc: "A central command is issued — correction, escalation, policy enforcement, or case creation — from a single interface with full authority.", special: true },
              { num: "05", label: "EXECUTE", icon: "✅", title: "Action Executed", desc: "The command is distributed and executed in the relevant region — with an immutable record of the decision, authority, and outcome." },
            ].map((step, idx) => (
              <div key={idx} className={`bg-white dark:bg-slate-800 rounded-xl p-5 border shadow-2xs relative ${step.special ? 'border-indigo-500/30 dark:border-indigo-500/50 bg-linear-to-br from-emerald-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900/80' : 'border-slate-200 dark:border-slate-700'} ${idx === 4 ? 'md:col-span-2' : ''}`}>
                <div className="w-9 h-9 bg-emerald-50 dark:bg-slate-900 rounded-lg flex items-center justify-center text-md mb-4">{step.icon}</div>
                <span className="text-[9px] font-mono font-bold text-teal-600 dark:text-teal-400 block mb-1">{step.num} — {step.label}</span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Alignment */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Performance Alignment</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Ensure Consistent Performance Everywhere</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Distributed workforces require standardised performance intelligence — metrics that compare fairly across regions, time zones, and work environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-6">📐</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Standardised Metrics</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">A single set of performance metrics applied consistently across every region, team, and worker type — ensuring that performance conversations are based on comparable, verified data regardless of location.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-6">📊</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Cross-Team Comparisons</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Compare delivery performance, policy compliance, and workforce health across regional teams from a single view — surfacing the best-performing teams and identifying where support or intervention is needed.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 shadow-xs md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-6">⚖️</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Performance Normalisation</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Performance data is normalised for jurisdictional context, time zone variation, and local operational conditions — ensuring fair, defensible assessments that hold up to HR and legal scrutiny in any region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Environments Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Work Environments</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">One System Across All Work Environments</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Whether your workforce is fully remote, hybrid, or globally distributed — ZoikoTime provides the same level of control, visibility, and governance across every work model.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Env 1 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden text-center shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="text-4xl mb-4">🏠</div>
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-1">Remote</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Full Control</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Complete visibility and policy enforcement for fully remote workforces — session assurance, identity verification, and governance applied regardless of physical location or device context.</p>
            </div>

            {/* Env 2 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden text-center shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="text-4xl mb-4">🏢</div>
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-1">Hybrid</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Unified Oversight</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">A single governance system that applies consistently across in-office and remote work days — no policy gaps, no inconsistent treatment, and no administrative overhead managing two separate frameworks.</p>
            </div>

            {/* Env 3 */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 relative overflow-hidden text-center shadow-xs md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div className="text-4xl mb-4">🌍</div>
              <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block mb-1">Global</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Cross-Border Alignment</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Centralised command across every country and region — with jurisdiction-specific policy application, cross-border intelligence, and real-time intervention capability from a single global interface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk & Compliance */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Risk & Compliance</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Control Risk Across Distributed Operations</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Distributed operations multiply compliance complexity. ZoikoTime provides the infrastructure to manage it — actively, not reactively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 relative overflow-hidden">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-4">🛡️</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Policy Enforcement</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Policies are enforced at the point of activity — applied in real time across every region, not reviewed after the fact. Every enforcement action is recorded with full context and traceability for audit purposes.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 relative overflow-hidden">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-4">📡</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Anomaly Detection</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Behavioural and operational anomalies are detected continuously across the global workforce — from unusual access patterns to cross-border compliance signals — with risk-weighted prioritisation of alerts.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 relative overflow-hidden md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-emerald-50 dark:bg-teal-950/40 rounded-xl flex items-center justify-center text-xl mb-4">📋</div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">Compliance Monitoring</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Continuous monitoring of compliance status across all jurisdictions — with real-time dashboards, exportable compliance reports, and automated escalation when thresholds are breached in any region.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Human in Command */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Human-in-Command</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Central Control With Local Execution</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              ZoikoTime automates global monitoring and enforcement at scale while ensuring humans retain command over every consequential decision and intervention.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700 grid grid-cols-1 md:grid-cols-3">
            <div className="p-6 sm:p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-slate-900 border-2 border-teal-600/25 rounded-full flex items-center justify-center text-3xl mx-auto">🤖</div>
              <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-wide block">STEP 01</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">System Detects</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Automated monitoring continuously processes activity data across all regions — detecting drift, violations, and anomalies without manual oversight or delayed reporting cycles.</p>
            </div>
            <div className="p-6 sm:p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-slate-900 border-2 border-teal-600/25 rounded-full flex items-center justify-center text-3xl mx-auto">⚙️</div>
              <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-wide block">STEP 02</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">System Acts</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Defined policy responses are executed automatically — corrections issued, escalations triggered, cases created — ensuring that the majority of events are resolved without requiring human initiation.</p>
            </div>
            <div className="p-6 sm:p-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-50 dark:bg-slate-900 border-2 border-teal-600/25 rounded-full flex items-center justify-center text-3xl mx-auto">👤</div>
              <span className="text-[10px] font-mono font-bold text-teal-600 dark:text-teal-400 tracking-wide block">STEP 03</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Human Overrides When Needed</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Complex decisions, edge cases, and high-stakes interventions are routed to the right human with full context and evidence — ensuring that human judgement governs every outcome that warrants it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Impact Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Enterprise Impact</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">What This Means for Your Organisation</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Measurable outcomes for the executives accountable for global operations, workforce alignment, financial performance, and cross-border risk.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card COO */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div>
                <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block text-center mb-2">COO</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white text-center mb-4">Global Operational Control</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">Operate a distributed workforce at any scale with centralised command, real-time visibility, and active enforcement — without proportional increases in management overhead.</p>
              </div>
            </div>

            {/* Card CHRO */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div>
                <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block text-center mb-2">CHRO</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white text-center mb-4">Workforce Alignment</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">Ensure consistent performance standards, policy application, and governance quality across every region — supporting fair, defensible HR decisions at a global level.</p>
              </div>
            </div>

            {/* Card CFO */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div>
                <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block text-center mb-2">CFO</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white text-center mb-4">Cost Visibility & Control</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">Real-time workforce cost data by region, team, and work type — enabling accurate budgeting, cost attribution, and financial control across complex distributed operations.</p>
              </div>
            </div>

            {/* Card CRO */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 relative overflow-hidden flex flex-col justify-between shadow-xs">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
              <div>
                <span className="text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider block text-center mb-2">CRO</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white text-center mb-4">Reduced Cross-Border Risk</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">Proactive jurisdiction compliance, continuous anomaly detection, and governed incident management reduce regulatory, legal, and operational risk exposure across every country of operation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid Section */}
      <section className="bg-slate-50 dark:bg-slate-900/50 py-20 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-2">Why ZoikoTime</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Visibility Tools Cannot Compete</h2>
            <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400">
              Legacy workforce tools provide dashboards. ZoikoTime provides command. The distinction is the difference between observing problems and preventing them.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-700 text-sm font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">
                    <th className="p-5">Capability</th>
                    <th className="p-5 text-center text-slate-500 dark:text-slate-400">Legacy Tools</th>
                    <th className="p-5 bg-emerald-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400">
                      <div className="flex items-center justify-between gap-2">
                        <span>ZoikoTime®</span>
                        <span className="bg-emerald-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">Global Command</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm text-slate-700 dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700">
                  {[
                    "Global command interface with real-time intervention capability",
                    "Operational drift detection with automated correction workflows",
                    "Cross-border intelligence with automatic jurisdiction switching",
                    "Real-time enforcement — policy applied at the point of activity",
                    "Centralised decision-to-execution flow with immutable audit trail",
                    "Performance normalisation across time zones and jurisdictions"
                  ].map((feat, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/50 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-800'}>
                      <td className="p-5 font-medium">{feat}</td>
                      <td className="p-5 text-center text-slate-300 dark:text-slate-600 text-lg font-bold">✗</td>
                      <td className="p-5 text-center text-teal-600 dark:text-teal-400 text-lg font-bold bg-teal-600/5 dark:bg-teal-500/5">✓</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-linear-to-b from-teal-50 to-emerald-50 dark:from-slate-950 dark:to-slate-900 py-24 text-center overflow-hidden border-t border-teal-100 dark:border-slate-800">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-bold tracking-wider uppercase block mb-4">Get Started</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
            If You Cannot Control Distributed <br />Work, You <span className="text-teal-600 dark:text-teal-400">Cannot Scale It</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            ZoikoTime gives your organisation the command infrastructure, cross-border intelligence, and enforcement capability needed to operate a global distributed workforce — with confidence, consistency, and control.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
            <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-semibold rounded-lg shadow-md transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              Request Demo
            </button>
            <button className="w-full py-3.5 border border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-50 dark:hover:bg-slate-800 transition-all">
              Explore Command Centre
            </button>
          </div>
          <button className="mt-4 px-6 py-2.5 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-sm rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all">
            Run Global Scenario
          </button>
        </div>
      </section>
    </div>
  );
}