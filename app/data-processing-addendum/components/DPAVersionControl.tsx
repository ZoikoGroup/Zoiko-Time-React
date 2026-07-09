import React from "react";

const versions = [
  {
    version: "v4.1",
    date: "01 Jan 2026",
    changes:
      "Updated breach notification timeline to 24-hour target. Added UK IDTA as standard annexe. Sub-processor list updated — two new additions with 30-day advance notice issued.",
    resign: "Yes — material changes",
    current: true,
  },
  {
    version: "v4.0",
    date: "01 Sep 2025",
    changes:
      "Major update reflecting EU SCCs 2021 adoption. Restructured security annexe to align with ISO 27001:2022. Enhanced data subject rights support section.",
    resign: "Yes — major revision",
  },
  {
    version: "v3.2",
    date: "01 Mar 2025",
    changes:
      "Updated sub-processor list. Minor clarifications to retention schedule and deletion certificate process.",
    resign: "No — minor clarifications",
  },
];

export default function DPAVersionControl() {
  return (
    <section className="bg-slate-100 dark:bg-slate-950 py-12 px-6">

      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-slate-900 dark:text-white mb-8">
          DPA Version Control
        </h2>


        {/* Table */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">


          {/* Header */}
          <div className="grid grid-cols-[120px_130px_1fr_160px] bg-slate-100 dark:bg-slate-800 text-xs font-bold uppercase tracking-wide text-slate-400">

            <div className="p-4">Version</div>
            <div className="p-4">Effective Date</div>
            <div className="p-4">Key Changes</div>
            <div className="p-4">
              Re-Signature Required
            </div>

          </div>


          {/* Rows */}
          {versions.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[120px_130px_1fr_160px] border-t border-slate-200 dark:border-slate-800 text-xs"
            >

              {/* Version */}
              <div className="p-4">
                <p className="font-bold text-teal-600 font-mono">
                  {item.version}
                </p>

                {item.current && (
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 text-teal-700 dark:text-teal-400 text-xs font-bold">
                    Current
                  </span>
                )}
              </div>


              {/* Date */}
              <div className="p-4 text-slate-700 dark:text-slate-300">
                {item.date}
              </div>


              {/* Changes */}
              <div className="p-4 text-slate-700 dark:text-slate-300 leading-5">
                {item.changes}
              </div>


              {/* Resign */}
              <div className="p-4 text-slate-700 dark:text-slate-300 leading-5">
                {item.resign}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}