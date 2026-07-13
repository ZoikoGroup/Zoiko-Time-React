import React from 'react';

export default function PricingTiers() {
   
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-white font-sans antialiased selection:bg-teal-500 selection:text-white py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400 block">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Simple Structure. Enterprise Flexibility.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Four tiers — each unlocking a deeper layer of workforce assurance capability. Pay only for active workforce units.
          </p>
        </div>

        {/* Pricing Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Essential / Visibility Starter */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-400 to-emerald-500" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="size-2.5 bg-emerald-500 rounded-full shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Essential
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Visibility Starter
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed min-h-[80px]">
                  For organisations establishing a baseline of workforce visibility and verified session tracking.
                </p>
              </div>

              <div>
                <div className="flex items-baseline font-mono text-slate-900 dark:text-white">
                  <span className="text-xl font-bold">£</span>
                  <span className="text-4xl font-extrabold tracking-tight">8</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm font-medium ml-1">/user</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  per month · billed annually
                </p>
              </div>

              <hr className="border-slate-100 dark:border-slate-800" />

              <ul className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300 min-h-[260px]">
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Session tracking and verification</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Basic activity reporting</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Standard evidence records</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Email support</span>
                </li>
                <li className="flex items-start gap-2.5 opacity-40">
                  <span>✓</span>
                  <span>Anomaly detection</span>
                </li>
                <li className="flex items-start gap-2.5 opacity-40">
                  <span>✓</span>
                  <span>Policy engine</span>
                </li>
                <li className="flex items-start gap-2.5 opacity-40">
                  <span>✓</span>
                  <span>Multi-jurisdiction support</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-700 dark:text-slate-200 font-bold py-3 px-4 text-sm rounded-md border border-slate-200 dark:border-slate-800 transition-colors text-center">
              Start Free Trial
            </button>
          </div>

          {/* Card 2: Professional / Intelligence Layer (MOST POPULAR) */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-md">
      
      {/* Top Gradient Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-600 to-teal-500" />
      
      {/* Figma Absolute Positioned "Most Popular" Badge */}
      <div className="absolute top-[-6px] left-1/2 transform -translate-x-1/2 z-10 bg-teal-600 text-white  font-bold text-[11px] leading-5 tracking-wide px-5 py-0.5 rounded-full whitespace-nowrap shadow-md">
        Most Popular
      </div>

      <div className="space-y-6">
        {/* Tier Subtitle Category */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-teal-600 rounded-full shrink-0" />
          <span className="text-slate-500 dark:text-slate-400 text-xs font-bold  uppercase tracking-wide">
            Professional
          </span>
        </div>
        
        {/* Tier Name & Description */}
        <div>
          <h3 className="text-slate-900 dark:text-white text-xl font-extrabold leading-9 tracking-tight">
            Intelligence Layer
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-5 mt-2">
            For organisations requiring performance intelligence, anomaly detection, and enhanced workforce assurance.
          </p>
        </div>

        {/* Pricing Figures */}
        <div>
          <div className="flex items-baseline text-slate-900 dark:text-white ">
            <span className="text-xl font-bold mr-0.5">£</span>
            <span className="text-4xl font-extrabold tracking-tight">18</span>
            <span className="text-slate-500 dark:text-slate-400 text-lg font-medium ml-1">/user</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-normal  leading-5 mt-1">
            per month · billed annually
          </p>
        </div>

        <hr className="border-slate-100 dark:border-slate-800" />

        {/* Features List */}
        <ul className="space-y-3.5 text-slate-700 dark:text-slate-300 text-xs  leading-5">
          <li className="flex items-start gap-2.5">
            <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
            <span className="font-semibold">Everything in Essential</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
            <span>Performance intelligence engine</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
            <span>Anomaly detection + alerts</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
            <span>Enhanced evidence records</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
            <span>Priority support</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
            <span>Confidence scoring per session</span>
          </li>
          <li className="flex items-start gap-2.5 opacity-40">
            <span className="text-slate-400">✓</span>
            <span>Policy engine</span>
          </li>
        </ul>
      </div>

      {/* Action Button */}
      <button className="w-full bg-teal-600 hover:bg-teal-700 text-white  font-bold text-sm py-3 px-4 rounded-md shadow-[0px_4px_12px_0px_rgba(0,157,140,0.25)] transition-all text-center">
        Start Free Trial
      </button>
    </div>

          {/* Card 3: Enterprise / Assurance Layer */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-indigo-500 to-violet-500" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="size-2.5 bg-indigo-500 rounded-full shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Enterprise
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Assurance Layer
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed min-h-[80px]">
                  For enterprises requiring full workforce assurance, policy governance, and multi-jurisdiction compliance.
                </p>
              </div>

              <div>
                <div className="flex items-baseline font-mono text-teal-600 dark:text-teal-400">
                  <span className="text-2xl font-bold tracking-tight">Custom</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-tight">
                  based on workforce size and configuration
                </p>
              </div>

              <hr className="border-slate-100 dark:border-slate-800" />

              <ul className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300 min-h-[260px]">
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span className="font-semibold">Everything in Professional</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Full policy engine + enforcement</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Evidence capture + chain of custody</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Multi-jurisdiction compliance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Audit-ready export and HR enablement</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Dedicated account team</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>SLA-backed uptime</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-4 text-sm rounded-md shadow-[0px_4px_12px_0px_rgba(92,92,235,0.25)] transition-all text-center">
              Request Pricing
            </button>
          </div>

          {/* Card 4: Sovereign / Infrastructure Layer */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between relative overflow-hidden transition-all hover:shadow-md">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-700 dark:to-slate-600" />
            
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="size-2.5 bg-slate-900 dark:bg-slate-400 rounded-full shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Sovereign
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Infrastructure Layer
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed min-h-[80px]">
                  For organisations requiring dedicated infrastructure, custom compliance frameworks, and premium SLA guarantees.
                </p>
              </div>

              <div>
                <div className="flex items-baseline font-mono text-slate-900 dark:text-white">
                  <span className="text-2xl font-bold tracking-tight">Premium</span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 leading-tight">
                  dedicated environment · custom commercial terms
                </p>
              </div>

              <hr className="border-slate-100 dark:border-slate-800" />

              <ul className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300 min-h-[260px]">
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span className="font-semibold">Everything in Enterprise</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Dedicated environment (single-tenant)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Custom compliance configuration</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>SLA-backed uptime guarantees</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Executive success programme</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>On-premise or private cloud option</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">✓</span>
                  <span>Custom API and integration depth</span>
                </li>
              </ul>
            </div>

            <button className="w-full mt-8 bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold py-3 px-4 text-sm rounded-md transition-colors text-center">
              Contact Sales
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}