import React from "react";

export default function RoleVisibilityAndModuleOwnership() {
  const roles = [
    {
      role: "Worker",
      desc: "Own permitted facts, policy version label, plain-language explanation, result and review state, support route.",
    },
    {
      role: "Reviewer",
      desc: "Source facts, rule trace, worker input, conflicts, prior history, policy version, permitted actions, deadline and escalation.",
    },
    {
      role: "Policy owner",
      desc: "Policy metadata, version, applicability, and the remediation route — but editing and publishing happen in the administration workflow.",
    },
    {
      role: "Nobody, via this viewer",
      desc: "Restricted policy text, legal advice, internal security rules, other workers, confidential approver notes, hidden organizational topology.",
      dark: true,
    },
  ];

  const ownsList = [
    "Historical policy and version",
    "Applicability and assignment",
    "The deterministic rule trace",
    "Exception and precedence context",
    "The result and the human boundary",
  ];

  const skipList = [
    "Inspect Lineage — the provenance and relationship chain",
    "Review History — the chronological record of events",
    "View Bundle — the purpose-bound manifest and export workflow",
    "Worker Experience — the worker journey as a whole",
    "Administration & Policy Controls — authoring and publication",
  ];

  return (
    <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24 font-sans">
      <div className="mx-auto max-w-7.5xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Role Visibility */}
          <div className="flex flex-col gap-6">
            <div className="mb-4">
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                Role visibility
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Detailed views are customized depending on the user credentials and regulatory
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {roles.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 ${
                      item.dark
                        ? "bg-slate-900 text-slate-205 border-slate-950 dark:bg-slate-950 dark:border-slate-800"
                        : "bg-white border-gray-200 dark:bg-slate-900 dark:border-slate-800 text-gray-600 dark:text-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <h4 className={`text-sm font-bold ${item.dark ? "text-white" : "text-slate-850 dark:text-slate-200"}`}>
                        {item.role}
                      </h4>
                    </div>
                    <p className={`text-xs leading-relaxed ${item.dark ? "text-slate-400" : "text-gray-500 dark:text-gray-400"}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Module Ownership */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                What this module owns
              </h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Evidence surfaces overlap easily and then contradict each other. The boundaries
                are explicit.
              </p>
            </div>

            <div className="space-y-4">
              {/* Card 1: What it owns */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-850 dark:bg-slate-900">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                  Policy Evidence owns
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {ownsList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: What it doesn't duplicate */}
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-850 dark:bg-slate-900">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">
                  And deliberately does not duplicate
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {skipList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      <span className="text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-gray-100 pt-3 dark:border-slate-800 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Lineage</span> answers{" "}
                  <em>where did this record come from</em>. <span className="font-semibold text-slate-700 dark:text-slate-300">Policy evidence</span> answers{" "}
                  <em>which rules ran and why</em>. Both are needed, and neither is a substitute for the other.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
