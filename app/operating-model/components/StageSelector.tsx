"use client";

import { Check } from "lucide-react";

interface StageTab {
  number: string;
  shortName: string;
  subtitle: string;
}

interface StageSelectorProps {
  activeStageIndex: number;
  onStageSelect: (idx: number) => void;
  stages: StageTab[];
}

export default function StageSelector({ activeStageIndex, onStageSelect, stages }: StageSelectorProps) {
  return (
    <section className="bg-slate-900 dark:bg-slate-950 px-4 py-8 lg:px-12 relative border-b border-slate-800">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="text-center pb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
            Select a stage to explore the operating context
          </span>
        </div>

        {/* Grid list of stages */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {stages.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            const isCompleted = idx < activeStageIndex;
            return (
              <button
                key={stage.number}
                onClick={() => onStageSelect(idx)}
                className={`group p-4 rounded-xl border transition-all text-left flex flex-col justify-between gap-3 cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 border-teal-500 shadow-[0_0_20px_rgba(20,184,166,0.15)] ring-1 ring-teal-500"
                    : "bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    isActive 
                      ? "bg-teal-500 text-white" 
                      : "bg-slate-800 text-slate-400 group-hover:text-slate-200"
                  }`}>
                    {stage.number}
                  </span>
                  {isActive ? (
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  ) : isCompleted ? (
                    <Check className="w-3.5 h-3.5 text-teal-500" />
                  ) : null}
                </div>
                <div>
                  <h3 className={`text-xs font-bold leading-tight ${
                    isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                  }`}>
                    {stage.shortName}
                  </h3>
                  <p className={`text-[9px] mt-0.5 font-medium ${
                    isActive ? "text-teal-400" : "text-slate-500"
                  }`}>
                    {stage.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
