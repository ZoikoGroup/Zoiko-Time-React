import React from "react";

interface Stakeholder {
  role: string;
  quote: string;
  desc: string;
}

const stakeholdersData: Stakeholder[] = [
  {
    role: "Executive Sponsor",
    quote: "“How is implementation governed and accepted?”",
    desc: "Lifecycle, ownership, risks, decisions, acceptance, and continuity."
  },
  {
    role: "Program / Transformation Lead",
    quote: "“How do we scope and control change?”",
    desc: "Scope, responsibilities, dependencies, change/issue control, and handover."
  },
  {
    role: "IT / Architecture",
    quote: "“How are identity, integrations, data, and testing handled?”",
    desc: "Technical boundaries, validation, and evidence."
  },
  {
    role: "HR / Workforce Operations",
    quote: "“How are policy, roles, and change handled?”",
    desc: "Governance and worker-facing dependencies."
  },
  {
    role: "Security / Privacy / Legal",
    quote: "“Where are review gates and evidence boundaries?”",
    desc: "Implementation governance plus existing Trust authorities."
  },
  {
    role: "Procurement",
    quote: "“What is included and how is scope qualified?”",
    desc: "Service-status vocabulary, assumptions/exclusions, and approved qualification."
  }
];

export default function StakeholderMatrix() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs text-[#10A28D] font-bold uppercase tracking-widest text-teal-650 dark:text-teal-400">
          By Role
        </span>
        <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
          What each stakeholder needs to see
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stakeholdersData.map((person, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[140px]"
          >
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-850 dark:text-white">
                {person.role}
              </h3>
              <p className="text-[11px] italic text-slate-450 dark:text-slate-400">
                {person.quote}
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-normal pt-1">
                {person.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
