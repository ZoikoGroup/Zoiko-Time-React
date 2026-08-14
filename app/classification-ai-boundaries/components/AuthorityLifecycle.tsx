import React from "react";

interface Step {
  number: number;
  name: string;
  system: string;
  human: string;
}

const stepsData: Step[] = [
  {
    number: 1,
    name: "Capture",
    system: "Saves raw signal input",
    human: "Governs privacy settings"
  },
  {
    number: 2,
    name: "Deterministic Classify",
    system: "Applies math rule tables",
    human: "Owns and signs policy v3"
  },
  {
    number: 3,
    name: "Optional Assist",
    system: "Flags signal-quality spikes",
    human: "Acks context cues"
  },
  {
    number: 4,
    name: "Neutral Review State",
    system: "Freezes state pending action",
    human: "Claims queue assignment"
  },
  {
    number: 5,
    name: "Human Review",
    system: "Presents rule audit traces",
    human: "Verifies raw vs classified"
  },
  {
    number: 6,
    name: "Authorized Decision",
    system: "Logs audit-trail evidence",
    human: "Commits & signs off record"
  },
  {
    number: 7,
    name: "Notify / Reopen",
    system: "Triggers worker receipt mail",
    human: "Accepts correction disputes"
  },
  {
    number: 8,
    name: "Downstream Handoff",
    system: "Transfers final signed ledger",
    human: "Reconciles corporate payroll"
  }
];

export default function AuthorityLifecycle() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <span className="inline-flex items-center px-2 py-1 bg-teal-50 text-[#10A28D] border border-teal-100 rounded-md text-[10px] font-bold uppercase tracking-wider dark:bg-teal-950/10 dark:text-teal-400 dark:border-teal-900/30">
          Process Pipeline
        </span>
        <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
          The Human Authority Lifecycle
        </h2>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stepsData.map((step) => (
          <div
            key={step.number}
            className="bg-slate-50 border border-gray-200 rounded-xl p-5 dark:bg-slate-900 dark:border-slate-800 space-y-3.5"
          >
            <h3 className="text-sm font-bold text-slate-850 dark:text-white leading-snug">
              {step.number}. {step.name}
            </h3>

            <div className="space-y-2">
              <div className="text-xs">
                <span className="text-teal-700 dark:text-teal-400 font-semibold block">
                  System:
                </span>
                <span className="text-slate-500 dark:text-slate-450">
                  {step.system}
                </span>
              </div>
              <div className="text-xs">
                <span className="text-slate-800 dark:text-slate-205 font-semibold block">
                  Human:
                </span>
                <span className="text-slate-500 dark:text-slate-450">
                  {step.human}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
