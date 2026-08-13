import React from "react";

interface VocabularyRow {
  state: string;
  meaning: string;
  badgeStyle: string;
}

const vocabData: VocabularyRow[] = [
  {
    state: "Included in approved scope",
    meaning: "Included only in a signed or approved engagement.",
    badgeStyle: "bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400"
  },
  {
    state: "Customer-owned",
    meaning: "The customer retains delivery responsibility.",
    badgeStyle: "bg-indigo-50 text-blue-700 dark:bg-blue-950/20 dark:text-blue-400"
  },
  {
    state: "Third-party owned",
    meaning: "An external party owns delivery or approval.",
    badgeStyle: "bg-violet-50 text-indigo-700 dark:bg-violet-950/20 dark:text-indigo-400"
  },
  {
    state: "Optional service",
    meaning: "A verified add-on that may be available.",
    badgeStyle: "bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400"
  },
  {
    state: "Qualification required",
    meaning: "Depends on scope, region, architecture, data, contract, or capacity.",
    badgeStyle: "bg-orange-50 text-yellow-750 dark:bg-orange-950/20 dark:text-yellow-400"
  },
  {
    state: "Out of scope",
    meaning: "Excluded from the baseline.",
    badgeStyle: "bg-zinc-100 text-gray-500 dark:bg-slate-800 dark:text-slate-405"
  },
  {
    state: "Not verified",
    meaning: "Current authority does not support the statement.",
    badgeStyle: "bg-rose-50 text-red-700 dark:bg-rose-950/20 dark:text-red-400"
  }
];

export default function ScopeVocabularyTable() {
  return (
    <div className="bg-slate-50 py-16 dark:bg-slate-900/40  font-sans">
      <div className="mx-auto max-w-4xl px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Service Scope Vocabulary
          </span>
          <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
            Governed status — not marketing language
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Every scope statement uses one of these governed states. Scope is never inferred from
            what you read or where you are.
          </p>
        </div>

        {/* Lookup Table */}
        <div className="bg-white rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] overflow-hidden dark:bg-slate-900 ">
          {/* Table Header */}
          <div className="bg-slate-50/70 dark:bg-slate-850 px-5 py-3.5 flex text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <div className="w-1/3">State</div>
            <div className="w-2/3">What it means</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y ">
            {vocabData.map((row, idx) => (
              <div key={idx} className="px-5 py-4 flex flex-col md:flex-row md:items-center text-xs text-slate-705 dark:text-slate-350 hover:bg-slate-50/30 dark:hover:bg-slate-850/10 gap-3 md:gap-0">
                <div className="w-full md:w-1/3">
                  <span className={`inline-flex items-center rounded px-2.5 py-1 text-[10px] font-bold ${row.badgeStyle}`}>
                    {row.state}
                  </span>
                </div>
                <div className="w-full md:w-2/3 font-medium">{row.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
