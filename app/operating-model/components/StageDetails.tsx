"use client";

import React from "react";
import { 
  User, 
  Shield, 
  Check, 
  RefreshCw, 
  Eye,
  ShieldAlert,
  Database,
  Lock
} from "lucide-react";

interface Stage {
  number: string;
  badge: string;
  title: string;
  desc: string;
  actors: string;
  inputs: string;
  boundaryLabel: string;
  boundaryText: string;
  treatmentLabel: string;
  treatmentText: string;
  states: { name: string; color: string }[];
  cardTitle: string;
  cardSubtitle: string;
  cardStatus: string;
  cardUrl: string;
  cardFields: { label: string; value: string }[];
  cardFooter: string;
  cardAction?: string;
  isControlCenter?: boolean;
  isExceptionResolver?: boolean;
  isAssuranceLedger?: boolean;
  isOptimizationConsole?: boolean;
  historicalIntegrity?: string;
}

interface StageDetailsProps {
  activeStage: Stage;
}

export default function StageDetails({ activeStage }: StageDetailsProps) {
  const getPillColorClasses = (colorName: string) => {
    switch (colorName) {
      case "emerald":
        return "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400";
      case "orange":
        return "bg-orange-50 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400";
      case "indigo":
        return "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400";
      case "red":
        return "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400";
      case "blue":
        return "bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400";
      case "yellow":
      case "amber":
        return "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-slate-800 dark:text-slate-300";
    }
  };

  return (
    <section className="py-16 px-6 lg:px-24 bg-slate-50 dark:bg-slate-900/30 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Stage details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            {activeStage.number === "01" ? (
              <>
                <span className="px-3 py-1 bg-emerald-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-xs font-bold rounded-md uppercase tracking-wider">
                  {activeStage.badge}
                </span>
                <span className="text-slate-400 dark:text-slate-500 font-mono text-sm">/</span>
                <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wider uppercase">
                  Operating Core
                </span>
              </>
            ) : (
              <>
                <span className="px-3 py-1 bg-emerald-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 text-xs font-bold rounded-md uppercase tracking-wider">
                  {activeStage.badge.split("/")[0].trim()}
                </span>
                {activeStage.badge.includes("/") && (
                  <>
                    <span className="text-slate-400 dark:text-slate-500 font-mono text-sm">/</span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-semibold tracking-wider uppercase">
                      {activeStage.badge.split("/")[1].trim()}
                    </span>
                  </>
                )}
              </>
            )}
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white leading-tight">
            {activeStage.title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            {activeStage.desc}
          </p>

          {/* Grid details (Actors, Inputs, boundaries, worker treatment) */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-200 dark:border-slate-800/80">
            
            {/* Primary Actors */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <User className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Primary Actors
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {activeStage.actors}
              </p>
            </div>

            {/* Core Inputs */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Database className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Core Inputs
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {activeStage.inputs}
              </p>
            </div>

            {/* Boundary / Authority */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {activeStage.boundaryLabel}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {activeStage.boundaryText}
              </p>
            </div>

            {/* Worker Treatment / Source Evidence */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Eye className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  {activeStage.treatmentLabel}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {activeStage.treatmentText}
              </p>
            </div>

          </div>

          {/* Historical Integrity (if present) */}
          {activeStage.historicalIntegrity && (
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-1.5">
              <h4 className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider">
                Historical Integrity
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {activeStage.historicalIntegrity}
              </p>
            </div>
          )}

          {/* Model Configuration / Review / Analysis States */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 space-y-3">
            <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              {activeStage.number === "05" 
                ? "Available Review States" 
                : activeStage.number === "06" 
                  ? "Available Downstream States" 
                  : activeStage.number === "07"
                    ? "Analysis States"
                    : "Model Configuration States"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeStage.states.map((st) => (
                <span 
                  key={st.name}
                  className={`px-2.5 py-1 text-xs font-bold rounded ${getPillColorClasses(st.color)}`}
                >
                  {st.name}
                </span>
              ))}
            </div>
          </div>

          {/* Worker Treatment & Privacy alert */}
          <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/10 border border-emerald-100/50 dark:border-emerald-900/20 rounded-xl flex items-start gap-3">
            <div className="space-y-1">
              <h5 className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                Worker Treatment & Privacy
              </h5>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal">
                {activeStage.cardFooter}
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Visual Mockup Card */}
        <div className="lg:col-span-5">
          <div className="w-full bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col">
            
            {/* Card Browser Bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 select-none">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 bg-rose-400 rounded-full" />
                <div className="w-3 h-3 bg-amber-400 rounded-full" />
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate max-w-[200px] font-mono">
                {activeStage.cardUrl}
              </div>
              <div className="w-8" />
            </div>

            {/* Card Main Body */}
            <div className="p-6 space-y-4">
              
              {/* Title line (hidden for custom cards) */}
              {!activeStage.isExceptionResolver && !activeStage.isAssuranceLedger && !activeStage.isOptimizationConsole && (
                <>
                  <div className="flex justify-between items-start gap-4">
                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                        {activeStage.cardTitle}
                      </h3>
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {activeStage.cardSubtitle}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-[10px] font-extrabold rounded select-none">
                      {activeStage.cardStatus}
                    </span>
                  </div>

                  <div className="h-px bg-slate-100 dark:bg-slate-800/80 w-full" />
                </>
              )}

              {/* Grid chart for Stage 04: Control Center */}
              {activeStage.isControlCenter && (
                <div className="p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl space-y-3">
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Coverage by Local Time (Symmetric)
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {["08:00", "10:00", "12:00", "14:00", "16:00", "18:00"].map((timeSlot) => (
                      <div key={timeSlot} className="bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-1 shadow-sm">
                        <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500">
                          {timeSlot}
                        </span>
                        <div className="w-full h-1.5 bg-teal-500 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Form fields layout / custom cards */}
              {activeStage.isExceptionResolver ? (
                <div className="space-y-3">
                  {activeStage.cardFields.map((fld) => {
                    if (fld.label === "Worker Response") {
                      return (
                        <div key={fld.label} className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100/50 dark:border-emerald-900/30 rounded-xl space-y-1">
                          <div className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                            Worker Response
                          </div>
                          <div className="text-xs font-semibold text-emerald-800 dark:text-emerald-300">
                            {fld.value}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={fld.label} className="space-y-1">
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          {fld.label}
                        </div>
                        <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100/50 dark:border-slate-800/40">
                          {fld.value}
                        </div>
                      </div>
                    );
                  })}

                  {/* Action Panel for Exception Resolver */}
                  <div className="space-y-1 pt-2">
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Action Panel
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer text-center">
                        Approve
                      </button>
                      <button className="flex-1 px-3 py-2 bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer text-center">
                        Reject
                      </button>
                      <button className="flex-1 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer text-center">
                        Request Info
                      </button>
                    </div>
                  </div>
                </div>
              ) : activeStage.isAssuranceLedger ? (
                <div className="space-y-3">
                  {activeStage.cardFields.map((fld) => {
                    if (fld.label === "Reconciliation Destination") {
                      return (
                        <div key={fld.label} className="space-y-1">
                          <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                            {fld.label}
                          </div>
                          <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100/50 dark:border-slate-800/40 flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                            <span>{fld.value}</span>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={fld.label} className="space-y-1">
                        <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                          {fld.label}
                        </div>
                        <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100/50 dark:border-slate-800/40">
                          {fld.value}
                        </div>
                      </div>
                    );
                  })}

                  {/* Reconciliation Steps */}
                  <div className="space-y-1.5 pt-2">
                    <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Reconciliation Steps
                    </div>
                    <div className="space-y-2">
                      {[
                        { label: "1. Dispatch State", val: "SENT", col: "blue" },
                        { label: "2. Target Acknowledgment", val: "RECEIVED", col: "blue" },
                        { label: "3. Integrity Verification", val: "RECONCILED", col: "emerald" }
                      ].map((step) => (
                        <div key={step.label} className="flex justify-between items-center text-xs text-slate-700 dark:text-slate-300 py-1">
                          <span className="font-semibold text-slate-500 dark:text-slate-400">{step.label}</span>
                          <span className={`px-2 py-0.5 text-[9px] font-extrabold rounded ${
                            step.col === "emerald" 
                              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/45 dark:text-emerald-400 border border-emerald-100/30" 
                              : "bg-blue-50 text-blue-600 dark:bg-blue-950/45 dark:text-blue-400 border border-blue-100/30"
                          }`}>
                            {step.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons for Downstream Dispatch */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer text-center">
                      Retry Dispatch
                    </button>
                    <button className="flex-1 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer text-center font-mono">
                      Manual Adjustment
                    </button>
                  </div>
                </div>
              ) : activeStage.isOptimizationConsole ? (
                <div className="space-y-4">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100/50 dark:border-slate-800/40 space-y-1">
                      <span className="text-[9px] font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider block">
                        Coverage Gap Rate
                      </span>
                      <span className="text-xl font-extrabold text-slate-900 dark:text-white block">
                        4.2%
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 block">
                        ↓ 0.8% Trend
                      </span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100/50 dark:border-slate-800/40 space-y-1">
                      <span className="text-[9px] font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider block">
                        Schedule Changes
                      </span>
                      <span className="text-xl font-extrabold text-slate-900 dark:text-white block">
                        12 /mo
                      </span>
                      <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 block font-semibold">
                        Stable Level
                      </span>
                    </div>
                  </div>

                  {/* Exception Cause Mix */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider block">
                      Exception Cause Mix
                    </span>
                    <div className="space-y-2">
                      {[
                        { name: "Policy unclear", val: "38%", col: "bg-blue-500" },
                        { name: "Source delay", val: "27%", col: "bg-emerald-500" },
                        { name: "Schedule conflict", val: "22%", col: "bg-amber-500" },
                        { name: "Other", val: "13%", col: "bg-slate-500" }
                      ].map((item) => (
                        <div key={item.name} className="flex justify-between items-center text-xs text-slate-700 dark:text-slate-350 py-0.5">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.col}`} />
                            <span className="font-semibold text-slate-700 dark:text-slate-300">{item.name}</span>
                          </div>
                          <span className="font-extrabold text-slate-800 dark:text-slate-200">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Verified Source Health */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[10px] font-bold text-slate-405 dark:text-slate-500 uppercase tracking-wider block">
                      Verified Source Health
                    </span>
                    <div className="space-y-3">
                      {[
                        { name: "Calendar Integration", val: 98 },
                        { name: "Active Directory Access", val: 94 }
                      ].map((source) => (
                        <div key={source.name} className="space-y-1.5">
                          <div className="flex justify-between text-xs font-semibold text-slate-550 dark:text-slate-400">
                            <span>{source.name}</span>
                            <span className="font-extrabold text-slate-800 dark:text-slate-200">{source.val}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-teal-500 rounded-full animate-pulse" style={{ width: `${source.val}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Privacy Suppression Banner */}
                  <div className="bg-amber-50/70 dark:bg-amber-950/15 border border-amber-100/50 dark:border-amber-900/35 text-amber-800 dark:text-amber-300 rounded-xl p-3 text-xs flex items-center gap-2 mt-2 shadow-sm select-none">
                    <Lock className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400 shrink-0" />
                    <span className="font-semibold text-[10px] leading-tight">Privacy suppression enforced. Groups &lt; 5 members hidden.</span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {activeStage.cardFields.map((fld) => (
                    <div key={fld.label} className="space-y-1">
                      <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                        {fld.label}
                      </div>
                      <div className="px-3 py-2 bg-slate-50 dark:bg-slate-800/40 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200 border border-slate-100/50 dark:border-slate-800/40">
                        {fld.value}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Action button if present (hidden for custom cards) */}
              {!activeStage.isExceptionResolver && !activeStage.isAssuranceLedger && !activeStage.isOptimizationConsole && activeStage.cardAction && (
                <button className="w-full mt-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm">
                  {activeStage.number === "03" ? <RefreshCw className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
                  {activeStage.cardAction}
                </button>
              )}

              {/* Verification line */}
              <div className="pt-2 flex items-center gap-2 text-[10px] font-semibold text-teal-600 dark:text-teal-400">
                <div className="w-4 h-4 rounded-full bg-teal-500/10 flex items-center justify-center shrink-0">
                  <Shield className="w-2.5 h-2.5" />
                </div>
                <span>Verified by platform checks. Trace hash created.</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
