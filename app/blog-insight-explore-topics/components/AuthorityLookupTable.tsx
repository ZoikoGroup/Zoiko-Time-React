import React from "react";

interface AuthorityRow {
  question: string;
  page: string;
}

interface AuthorityLookupTableProps {
  authorityData: AuthorityRow[];
}

export default function AuthorityLookupTable({ authorityData }: AuthorityLookupTableProps) {
  return (
    <div className="bg-slate-50 py-16 dark:bg-slate-900/40  font-sans">
      <div className="mx-auto max-w-4xl px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Where To Find Authority
          </span>
          <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
            Insights teach — these pages are <br />the source of truth
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            The Blog is educational. For anything current or definitive, <br />go straight to the authoritative page.
          </p>
        </div>

        {/* Lookup Table */}
        <div className="bg-white  rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] overflow-hidden dark:bg-slate-900 ">
          {/* Table Header */}
          <div className="bg-slate-50/70  dark:bg-slate-850  px-5 py-3.5 flex text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            <div className="w-1/2">Your Question</div>
            <div className="w-1/2">Go To</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y  ">
            {authorityData.map((row, idx) => (
              <div key={idx} className="px-5 py-4.5 flex items-center text-xs text-slate-705 dark:text-slate-350 hover:bg-slate-50/30 dark:hover:bg-slate-850/10">
                <div className="w-1/2 font-medium">{row.question}</div>
                <div className="w-1/2 text-teal-700 dark:text-teal-400 font-semibold cursor-pointer hover:underline flex items-center gap-1 select-none">
                  <span>{row.page}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explanation Banner */}
        <div className="bg-emerald-50 rounded-xl p-5  dark:bg-emerald-950/10  text-center leading-relaxed">
          <p className="text-xs text-slate-750 dark:text-slate-300">
            {"Topic exploration is a learning interaction — not a conversion step. It never creates a lead, infers a buying stage, or personalizes results. "}
            <br className="hidden md:block" />
            {"Ranking is simply "}
            <span className="text-teal-705 dark:text-teal-400 font-bold">your selected topic + current editorial order</span>
            {" — not views, dwell time, or your history."}
          </p>
        </div>
      </div>
    </div>
  );
}
