import React, { useState } from "react";
import { ArrowRight, ChevronRight, RefreshCw } from "lucide-react";

export default function FlowDiagramSection() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    "Define",
    "Assign",
    "Capture",
    "Validate",
    "Review",
    "Approve",
    "Reconcile",
    "Improve",
  ];

  const feedbackLoops = [
    "Policy change returns to Define",
    "Schedule change triggers revalidation",
    "Needs-information returns to worker",
    "Target rejection returns to remediation",
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 border-y border-gray-200 dark:border-slate-800 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-10 sm:gap-12 text-center">
        
        {/* Header */}
        <div className="max-w-2xl flex flex-col items-center gap-2">
          <span className="text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide">
            FLOW DIAGRAM &amp; FEEDBACK LOOPS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Stage-to-stage sequential transitions
          </h2>
        </div>

        {/* Sequential Stages Flow Bar */}
        <div className="w-full overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center justify-center min-w-max mx-auto gap-2 sm:gap-3">
            {stages.map((stage, idx) => {
              const isActive = activeStage === idx;
              return (
                <React.Fragment key={stage}>
                  <button
                    onClick={() => setActiveStage(idx)}
                    className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 shadow-sm"
                        : "bg-gray-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {stage}
                  </button>

                  {idx < stages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 dark:text-slate-600 shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Feedback Loops Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl pt-2">
          {feedbackLoops.map((loop, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-md border border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/40 flex items-center gap-2 text-slate-600 dark:text-slate-300 text-xs font-normal"
            >
              <ArrowRight className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{loop}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}