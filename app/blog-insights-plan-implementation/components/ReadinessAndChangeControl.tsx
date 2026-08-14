import React from "react";
import { Check } from "lucide-react";

export default function ReadinessAndChangeControl() {
  return (
    <div className="mx-auto max-w-7.5xl px-6 py-16 font-sans">
      {/* Title */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-650 dark:text-teal-400">
          Validation, Change &amp; Risk
        </span>
        <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
          Readiness is proven, changes are controlled
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Left Card: Validate Readiness */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              Validate readiness
            </h3>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-teal-400 mt-0.5">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span>Testing, defects, and preserved evidence</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-teal-400 mt-0.5">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span>Approvals and rollback plan</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-teal-400 mt-0.5">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span>Explicit go / no-go conditions</span>
              </div>
            </div>
          </div>

          {/* Badges footer */}
          <div className="flex gap-2 pt-6">
            <span className="bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400 rounded-md px-2 py-0.5 text-[10px] font-bold">
              Go
            </span>
            <span className="bg-orange-50 text-yellow-750 dark:bg-orange-950/20 dark:text-yellow-400 rounded-md px-2 py-0.5 text-[10px] font-bold">
              Hold
            </span>
            <span className="bg-rose-50 text-red-700 dark:bg-rose-950/20 dark:text-red-400 rounded-md px-2 py-0.5 text-[10px] font-bold">
              No-go
            </span>
          </div>
        </div>

        {/* Right Card: Control Change & Risk */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[220px]">
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 dark:text-white">
              Control change &amp; risk
            </h3>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-teal-400 mt-0.5">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span>Versioned changes with named owners</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-teal-400 mt-0.5">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span>Issues and decisions tracked</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400">
                <div className="h-4 w-4 bg-emerald-50 rounded-full flex items-center justify-center text-teal-700 dark:bg-emerald-950/30 dark:text-teal-400 mt-0.5">
                  <Check className="h-2.5 w-2.5" />
                </div>
                <span>Unresolved items visible, never hidden</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
