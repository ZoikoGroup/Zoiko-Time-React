import React from "react";

interface DecisionRow {
  activity: string;
  customer: string;
  zoikoTime: string;
  thirdParty: string;
  approval: string;
}

const decisionData: DecisionRow[] = [
  {
    activity: "Scope & acceptance criteria",
    customer: "Approves",
    zoikoTime: "Proposes",
    thirdParty: "—",
    approval: "Customer sign-off"
  },
  {
    activity: "Policy configuration decisions",
    customer: "Owns",
    zoikoTime: "Configures",
    thirdParty: "—",
    approval: "Customer"
  },
  {
    activity: "Identity / SSO",
    customer: "Provides IdP",
    zoikoTime: "Integrates",
    thirdParty: "IdP vendor",
    approval: "Joint"
  },
  {
    activity: "Integrations",
    customer: "System owners",
    zoikoTime: "Builds / maps",
    thirdParty: "Vendor APIs",
    approval: "Change board"
  },
  {
    activity: "Data & migration",
    customer: "Data owner",
    zoikoTime: "Executes (qualified)",
    thirdParty: "Source vendor",
    approval: "Customer"
  },
  {
    activity: "Validation & go/no-go",
    customer: "Approves",
    zoikoTime: "Provides evidence",
    thirdParty: "—",
    approval: "Go/No-go gate"
  },
  {
    activity: "Launch acceptance",
    customer: "Accepts",
    zoikoTime: "Delivers",
    thirdParty: "—",
    approval: "Customer"
  },
  {
    activity: "Support transition",
    customer: "Receives",
    zoikoTime: "Hands over",
    thirdParty: "—",
    approval: "Customer Success"
  }
];

export default function DecisionRightsTable() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 font-sans">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <span className="text-xs text-[#C9EAE2] font-bold uppercase tracking-widest ">
          Responsibilities &amp; Decision Rights
        </span>
        <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
          Who owns what
        </h2>
        <p className="text-slate-550 dark:text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
          Decision rights are explicit across customer, ZoikoTime, third parties, and approval gates.
        </p>
      </div>

      {/* Decision Table */}
      <div className="border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] overflow-x-auto bg-white dark:bg-slate-900 dark:border-slate-800">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-850  text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              <th className="px-5 py-3">Activity</th>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">ZoikoTime</th>
              <th className="px-5 py-3">Third-party</th>
              <th className="px-5 py-3">Approval / Escalation</th>
            </tr>
          </thead>
          <tbody className="divide-y  text-xs">
            {decisionData.map((row, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-850/10">
                <td className="px-5 py-4 font-semibold text-slate-800 dark:text-white">
                  {row.activity}
                </td>
                <td className="px-5 py-4">
                  {row.customer === "—" ? (
                    <span className="text-slate-400 dark:text-slate-600">—</span>
                  ) : (
                    <span className="inline-flex items-center rounded bg-indigo-50 px-2.5 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-950/20 dark:text-blue-400">
                      {row.customer}
                    </span>
                  )}
                </td>
                <td className="px-5 py-4">
                  {row.zoikoTime === "—" ? (
                    <span className="text-slate-400 dark:text-slate-600">—</span>
                  ) : (
                    <span className="inline-flex items-center rounded bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-teal-700 dark:bg-emerald-950/20 dark:text-teal-400">
                      {row.zoikoTime}
                    </span>
                  )}
                </td>
                <td className="px-5 py-4">
                  {row.thirdParty === "—" ? (
                    <span className="text-slate-400 dark:text-slate-600">—</span>
                  ) : (
                    <span className="inline-flex items-center rounded bg-violet-50 px-2.5 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-violet-950/20 dark:text-indigo-400">
                      {row.thirdParty}
                    </span>
                  )}
                </td>
                <td className="px-5 py-4">
                  {row.approval === "—" ? (
                    <span className="text-slate-400 dark:text-slate-600">—</span>
                  ) : (
                    <span className="inline-flex items-center rounded bg-orange-50 px-2.5 py-0.5 text-[10px] font-bold text-yellow-750 dark:bg-orange-950/20 dark:text-yellow-400">
                      {row.approval}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
