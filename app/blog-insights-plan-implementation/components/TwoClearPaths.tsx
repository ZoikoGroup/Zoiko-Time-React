import React from "react";

export default function TwoClearPaths() {
  return (
    <div className="bg-slate-50 py-16 dark:bg-slate-900/60 border-t border-b border-gray-150 dark:border-slate-800 font-sans">
      <div className="mx-auto max-w-6xl px-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs  text-[#10A28D] font-bold uppercase tracking-widest text-teal-650 dark:text-teal-400">
            Two Clear Paths
          </span>
          <h2 className="text-3xl font-bold text-slate-855 dark:text-white leading-tight">
            New evaluation — or an existing account
          </h2>
          <p className="text-slate-550 dark:text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            Existing customers are never pushed into a new prospect funnel.
          </p>
        </div>

        {/* Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* New Evaluator */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-6 dark:bg-slate-900 dark:border-slate-800 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-850 dark:text-white">
                New enterprise evaluator
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Review the public implementation proof, then take an explicit,
                approved next step only if you choose to.
              </p>
              <div className="text-slate-700 dark:text-slate-300 text-xs leading-normal pt-1">
                <span>Read the model &amp; scope → </span>
                <span className="text-teal-700 dark:text-teal-400 font-bold">review responsibilities</span>
                <span> → request a demo or specialist scoping</span>
              </div>
            </div>
            <div className="pt-5">
              <a href="/request-enterprise-demo">
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold cursor-pointer hover:underline">
                Request Enterprise Demo →
              </span></a>
            </div>
          </div>

          {/* Existing Customer (Emerald Tint) */}
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl shadow-[0px_6px_18px_0px_rgba(14,31,61,0.03)] p-6 dark:bg-emerald-950/10 dark:border-emerald-900/30 flex flex-col justify-between min-h-[220px]">
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-850 dark:text-white">
                Existing customer
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Plan another wave or change with account-aware continuation —
                through your existing support and success paths.
              </p>
              <div className="text-slate-700 dark:text-slate-300 text-xs leading-normal pt-1">
                <span>Review the model → </span>
                <span className="text-teal-700 dark:text-teal-400 font-bold">continue in your account</span>
                <span> → work with Customer Success &amp; Support</span>
              </div>
            </div>
            <div className="pt-5">
              <a href="/login">
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold cursor-pointer hover:underline">
                Continue with your account →
              </span></a>
            </div>
          </div>
        </div>

        {/* Small team note box */}
        <div className="mt-8 bg-emerald-50 rounded-xl p-5 border border-emerald-100 dark:bg-emerald-950/10 dark:border-emerald-900/30 text-center leading-relaxed max-w-4xl mx-auto">
          <p className="text-xs text-slate-800 dark:text-slate-300">
            For small or self-directed teams, <span className="text-teal-700 dark:text-teal-400 font-semibold">Getting Started</span> and <span className="text-teal-700 dark:text-teal-400 font-semibold">Product Documentation</span> may be the better path — enterprise implementation services aren’t always required.
          </p>
        </div>
      </div>
    </div>
  );
}
