import React from "react";

interface Stage {
  number: number;
  title: string;
  desc: string;
  badges: string[];
}

const stagesData: Stage[] = [
  {
    number: 1,
    title: "Qualify intent & constraints",
    desc: "Understand audience, outcomes, scope inputs, dependencies, and authority boundaries.",
    badges: ["Audience", "Outcomes", "Dependencies", "Authority"]
  },
  {
    number: 2,
    title: "Define scope & outcomes",
    desc: "Baseline, assumptions, exclusions, deliverables, responsibilities, and acceptance criteria.",
    badges: ["Baseline", "Exclusions", "Acceptance"]
  },
  {
    number: 3,
    title: "Assign decision rights",
    desc: "Who owns what — customer, ZoikoTime, third-party — and how approvals escalate.",
    badges: ["Ownership", "Approval", "Escalation"]
  },
  {
    number: 4,
    title: "Design & configure",
    desc: "Requirement-to-configuration traceability and explicit policy decisions.",
    badges: ["Traceability", "Policy"]
  },
  {
    number: 5,
    title: "Coordinate dependencies",
    desc: "Identity, integrations, data/migration, privacy/security, environments, and third parties.",
    badges: ["Identity", "Integrations", "Data", "Environments"]
  },
  {
    number: 6,
    title: "Validate readiness",
    desc: "Testing, defects, evidence, approvals, rollback, and go/no-go conditions.",
    badges: ["Testing", "Evidence", "Go/No-go"]
  },
  {
    number: 7,
    title: "Control change & risk",
    desc: "Versioned changes, issues, decisions, owners, and unresolved items.",
    badges: ["Versioned", "Issues", "Owners"]
  },
  {
    number: 8,
    title: "Launch & hand over",
    desc: "Operational acceptance, runbooks, access, owners, and support transition.",
    badges: ["Acceptance", "Runbooks", "Handover"]
  },
  {
    number: 9,
    title: "Stabilize & continue",
    desc: "Customer Success, support, training dependencies, and future governance.",
    badges: ["Success", "Support", "Governance"]
  }
];

export default function GovernedStages() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 font-sans">
      {/* Title */}
      <div className="text-center space-y-3 mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-teal-650 dark:text-teal-400">
          Public Implementation Model
        </span>
        <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
          Nine governed stages
        </h2>
        <p className="text-slate-550 dark:text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed">
          The lifecycle is public so you can evaluate how implementation is governed — before any
          commercial step.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stagesData.map((stage) => (
          <div
            key={stage.number}
            className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-5 md:p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[190px]"
          >
            <div className="space-y-3.5">
              {/* Number Badge */}
              <div className="h-8 w-8 bg-gradient-to-br from-teal-600 to-teal-700 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {stage.number}
              </div>
              <h3 className="text-base font-bold text-slate-850 dark:text-white leading-snug">
                {stage.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {stage.desc}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 pt-4">
              {stage.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400 rounded-md px-1.5 py-0.5 text-[9px] font-bold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Warning Alert Note Box */}
      <div className="mt-8 bg-emerald-50 rounded-xl p-5 border border-emerald-100 dark:bg-emerald-950/10 dark:border-emerald-900/30 text-center leading-relaxed max-w-4xl mx-auto">
        <p className="text-xs text-slate-800 dark:text-slate-300">
          The model avoids “zero-risk,” automatic acceptance, hidden scope changes, and guaranteed adoption or success. Acceptance is explicit and human-approved at each gate.
        </p>
      </div>
    </div>
  );
}
