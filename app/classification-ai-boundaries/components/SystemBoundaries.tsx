import React from "react";
import Link from "next/link";

export default function SystemBoundaries() {
  const lanes = [
    {
      lane: "Lane 1",
      title: "Deterministic Classification",
      status: "Current",
      statusStyle: "bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400",
      may: "Apply approved policy-bound rules, expose rule trace, show limitations.",
      mustNot: "AI/ML inference, probabilistic judgment, hidden model behavior.",
      evidence: "Rule trace, policy version, inputs, output.",
      href: "/deterministic-time-classification",
      link: "Explore Deterministic Time Classification ->",
    },
    {
      lane: "Lane 2",
      title: "Approved AI Assistance",
      status: "Under Review",
      statusStyle: "bg-amber-100 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400",
      may: "Surface anomaly/signal-quality info to support review.",
      mustNot: "Consequential decision, worker ranking, punitive score.",
      evidence: "Signal type, purpose, version/status, limitations.",
      href: "/ai-governance",
      link: "Review AI Governance ->",
    },
    {
      lane: "Lane 3",
      title: "Kairos",
      status: "Current",
      statusStyle: "bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400",
      may: "Retrieve, summarize, explain authorized governed data.",
      mustNot: "Classify, approve, decide payroll/discipline/legal.",
      evidence: "Sources, freshness, scope, limitations.",
      href: "/kairos-assistant",
      link: "Meet Kairos ->",
    },
  ];

  return (
    <div className="bg-slate-50 py-16 dark:bg-slate-900/60 b font-sans">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-md text-[10px] font-bold uppercase tracking-wider dark:bg-teal-950/10 dark:text-teal-400 dark:border-teal-900/30">
            Control Architecture
          </span>
          <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
            Three-Lane System Boundaries
          </h2>
        </div>

        {/* 3-Column Lanes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {lanes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[380px]"
            >
              <div className="space-y-5">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-2 py-0.5 bg-teal-50 text-teal-700 border border-teal-100 rounded text-[9px] font-bold uppercase dark:bg-teal-950/10 dark:text-teal-400 dark:border-teal-900/30">
                    {item.lane}
                  </span>
                  <span className={`rounded-md px-2.5 py-0.5 text-[10px] font-bold ${item.statusStyle}`}>
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-850 dark:text-white leading-snug">
                  {item.title}
                </h3>

                {/* Info block */}
                <div className="space-y-3.5 pt-2">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-650 dark:text-teal-400 block">
                      May
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.may}
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-650 dark:text-red-400 block">
                      Must Not
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.mustNot}
                    </p>
                  </div>

                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-white block">
                      Evidence
                    </span>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      {item.evidence}
                    </p>
                  </div>
                </div>
              </div>

              {/* Link block */}
              <Link
                href={item.href}
                className="pt-6 border-t border-gray-100 dark:border-slate-800/80 mt-6 text-teal-700 dark:text-teal-400 text-xs font-semibold hover:underline select-none"
              >
                {item.link}
              </Link>
            </div>
          ))}
        </div>

        {/* Override Footer warning card */}
        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-100 dark:bg-emerald-950/10 dark:border-emerald-900/30 flex flex-col md:flex-row items-center justify-start gap-4 max-w-4xl mx-auto">
          <span className="bg-[#10A28D] text-white rounded px-2.5 py-1 text-[10px] font-bold uppercase shrink-0">
            Human Decision Required
          </span>
          <p className="text-xs text-slate-800 dark:text-slate-350 leading-relaxed">
            Review, correct, approve, reject, escalate and decide within role authority. Consequential authority remains human and role-bound.
          </p>
        </div>
      </div>
    </div>
  );
}
