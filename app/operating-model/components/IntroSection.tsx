"use client";

import { Shield } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-16 px-6 lg:px-24 bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          Distributed Work Operating Model
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
          From approved expectations to reviewable outcomes.
        </h2>
        <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          Follow how work patterns, schedules, context, time records, availability, exceptions, approvals and source evidence move through one governed distributed-work lifecycle.
        </p>

        <div className="inline-flex items-center gap-3 p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl max-w-3xl text-left mt-4 shadow-sm">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-emerald-300 leading-normal">
            A schedule is not proof of work. A context signal is not proof of productivity. Consequential exceptions remain human-reviewed.
          </p>
        </div>
      </div>
    </section>
  );
}
