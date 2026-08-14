import React from "react";

export default function SeeTheProof() {
  return (
    <div className="bg-slate-950 py-20 text-white font-sans relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-teal-650/0 via-teal-600 via-15% to-teal-600/0" />
      <div className="absolute -bottom-20 -left-20 w-96 h-72 bg-radial from-teal-600/5 to-teal-600/0 to-70% pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-72 bg-radial from-indigo-500/5 to-indigo-500/0 to-70% pointer-events-none" />

      <div className="mx-auto max-w-7.5xl px-6 space-y-12 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center px-2 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-md text-[10px] font-bold uppercase tracking-wider">
            Audit Readiness
          </span>
          <h2 className="text-3xl font-bold text-white leading-tight">
            See the proof
          </h2>
        </div>

        {/* Mockups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Review Queue */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-white flex flex-col justify-between min-h-[190px]">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-850 dark:text-white">
                Review Queue
              </h3>
              
              <div className="space-y-2.5">
                <div className="pb-1.5 border-b border-gray-150 dark:border-slate-800 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-450">
                  <span>Record</span>
                  <span>Status</span>
                </div>
                
                <div className="flex justify-between items-center text-xs font-medium">
                  <span>ID: #9902 (Textiles)</span>
                  <span className="bg-amber-100 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400 rounded-full px-2.5 py-0.5 font-semibold text-[10px]">
                    Needs Review
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs font-medium">
                  <span>ID: #9901 (Stoneware)</span>
                  <span className="bg-emerald-50 text-teal-705 dark:bg-emerald-950/20 dark:text-teal-400 rounded-full px-2.5 py-0.5 font-semibold text-[10px]">
                    Approved
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Classification Trace */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-white flex flex-col justify-between min-h-[190px]">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-850 dark:text-white">
                Classification Trace
              </h3>
              
              <div className="space-y-2.5">
                <div className="pb-1.5 border-b border-gray-150 dark:border-slate-800 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-450">
                  <span>Rule Action</span>
                  <span>Result</span>
                </div>
                
                <div className="flex justify-between items-center text-xs font-medium">
                  <span>Overtime_V2_CA</span>
                  <span className="text-teal-700 dark:text-teal-400 font-semibold text-[11px]">
                    Calculated - 2.5h
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs font-medium">
                  <span>Core_Standard_Day</span>
                  <span className="text-teal-700 dark:text-teal-400 font-semibold text-[11px]">
                    Matched - 8.0h
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Human Decision Record */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 md:p-6 dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-white flex flex-col justify-between min-h-[190px]">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-850 dark:text-white">
                Human Decision Record
              </h3>
              
              <div className="space-y-2.5">
                <div className="pb-1.5 border-b border-gray-150 dark:border-slate-800 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-slate-450">
                  <span>Authorized Person</span>
                  <span>Log Action</span>
                </div>
                
                <div className="flex justify-between items-center text-xs font-medium">
                  <span>M. Torres (Admin)</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Signed off
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs font-medium">
                  <span>E. Okonkwo (Manager)</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    Amended Log
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
