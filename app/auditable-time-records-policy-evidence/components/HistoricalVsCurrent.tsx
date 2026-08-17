import React from "react";
import { AlertCircle, ArrowRightLeft } from "lucide-react";

export default function HistoricalVsCurrent() {
  return (
    <section className="bg-white px-6 py-16 dark:bg-gray-900 sm:px-12 lg:px-24 font-sans">
      <div className="mx-auto max-w-7.5xl">
        {/* Title block */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
            Historical version versus current
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            The version that applied stays pinned. Comparing it to the current version is
            useful; substituting the current version would be a falsification.
          </p>
        </div>

        {/* Side-by-side comparison container */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <div className="grid grid-cols-1 divide-y divide-gray-200 dark:divide-slate-800 md:grid-cols-[1fr_auto_1fr] md:divide-y-0">
            {/* Left: Pinned Policy v3 */}
            <div className="p-6">
              <div className="flex items-center gap-2 border-b border-gray-150 pb-4 dark:border-slate-850">
                <span className="h-3 w-3 rounded-full bg-emerald-500 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                  FN-WT v3 · applied to this record
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Effective</span>
                  <span className="text-slate-850 dark:text-slate-200 w-2/3">01 Aug – 09 Aug 2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Standard threshold</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold w-2/3">7h 00m</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Break minimum</span>
                  <span className="text-slate-850 dark:text-slate-200 w-2/3">30m over 6h</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Project ref</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold w-2/3">Required for site work</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Rounding</span>
                  <span className="text-slate-850 dark:text-slate-200 w-2/3">Nearest minute</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Status</span>
                  <span className="text-gray-500 dark:text-gray-400 w-2/3">
                    Superseded, still authoritative for this record
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Divider bar */}
            <div className="flex items-center justify-center bg-gray-50/80 px-4 py-3 dark:bg-slate-850 md:flex-col md:py-6 md:h-full md:border-l md:border-r md:border-gray-250 md:dark:border-slate-800">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 md:rotate-90 md:my-auto text-center shrink-0">
                Pinned · not substituted
              </span>
            </div>

            {/* Right: Current Policy v4 */}
            <div className="p-6">
              <div className="flex items-center gap-2 border-b border-gray-150 pb-4 dark:border-slate-850">
                <span className="h-3 w-3 rounded-full bg-gray-400 shrink-0" />
                <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                  FN-WT v4 · current, not applied here
                </h3>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Effective</span>
                  <span className="text-slate-855 dark:text-slate-200 w-2/3">10 Aug 2026 – open</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Standard threshold</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold w-2/3">7h 30m</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Break minimum</span>
                  <span className="text-slate-855 dark:text-slate-200 w-2/3">30m over 6h</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Project ref</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold w-2/3">Required for all work</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50 dark:border-slate-850/50">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Rounding</span>
                  <span className="text-slate-855 dark:text-slate-200 w-2/3">Nearest minute</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 w-1/3">Status</span>
                  <span className="text-emerald-600 dark:text-emerald-450 font-bold w-2/3">
                    Current
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warning Banner */}
        <div className="mt-8 flex gap-4 rounded-xl border border-red-200 bg-red-50/20 p-5 dark:border-red-950/40 dark:bg-red-950/10">
          <AlertCircle className="h-5 w-5 shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
          <div>
            <h4 className="text-sm font-bold text-red-800 dark:text-red-400 uppercase tracking-wide">
              A current policy cannot reclassify a historical record
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-red-700 dark:text-red-300">
              Two parameters changed at v4. If v4 were applied retroactively, this record&apos;s
              threshold condition and its project-reference requirement would both evaluate
              differently — which is precisely why the historical snapshot is pinned. Changing a
              policy going forward is normal governance; silently re-deciding past records under it
              is not.
            </p>
          </div>
        </div>

        {/* Comparison sub-text */}
        <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500 leading-normal">
          If the version changes while you are viewing, the historical snapshot stays pinned and the
          comparison shows a refresh notice. The evidence basis is never updated silently underneath
          you.
        </p>
      </div>
    </section>
  );
}
