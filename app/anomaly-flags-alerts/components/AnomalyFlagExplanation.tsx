import React from 'react';
import Link from 'next/link';

export default function AnomalyFlagExplanation() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">
        
        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold   tracking-tight text-slate-900 dark:text-white leading-tight">
            What is an anomaly flag in ZoikoTime?
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-normal   leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            ZoikoTime creates an anomaly flag when approved record facts meet a versioned condition. A governed alert may then notify authorized reviewers according to scope, timing, routing, and escalation rules. Reviewers inspect source facts, policy context, quality, limitations, and worker input before resolving the case. ZoikoTime does not treat a flag as guilt, performance, misconduct, legal noncompliance, or an automatic payroll or disciplinary decision.
          </p>
        </div>

        {/* 3-Card Feature Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          
          {/* Card 1 */}
          <div className="p-6 sm:p-8 pt-8 sm:pt-10 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col gap-2 transition-all">
            <h3 className="text-base sm:text-lg font-bold   text-slate-900 dark:text-white">
              A flag is a review signal
            </h3>
            <p className="text-sm font-normal   leading-relaxed text-slate-600 dark:text-slate-300">
              Not a conclusion about a person. It says a configured condition was met, and points to who should look at it.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 sm:p-8 pt-8 sm:pt-10 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col gap-2 transition-all">
            <h3 className="text-base sm:text-lg font-bold   text-slate-900 dark:text-white">
              An alert routes attention
            </h3>
            <p className="text-sm font-normal   leading-relaxed text-slate-600 dark:text-slate-300">
              It does not make a decision. Routing, timing, and escalation determine who is notified — nothing more.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 sm:p-8 pt-8 sm:pt-10 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 flex flex-col gap-2 transition-all">
            <h3 className="text-base sm:text-lg font-bold   text-slate-900 dark:text-white">
              Missing data is a data state
            </h3>
            <p className="text-sm font-normal   leading-relaxed text-slate-600 dark:text-slate-300">
              Incomplete or conflicting sources produce a neutral data-quality condition, never an adverse inference about anyone.
            </p>
          </div>

        </div>

        {/* Warning Callout Banner */}
        <div className="w-full max-w-[900px] p-4 sm:p-5 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900/50 space-y-1.5 text-left">
          <span className="block text-xs font-bold   uppercase tracking-wider text-rose-700 dark:text-rose-400">
            Binding product invariant
          </span>
          <p className="text-xs sm:text-sm font-normal   leading-relaxed text-rose-800 dark:text-rose-300">
            No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration. This is governed review infrastructure for record conditions — not a monitoring or fraud-detection product, and it must not be deployed as one.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
          <Link
            href="/human-in-command"
            className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold   text-base rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-center cursor-pointer"
          >
            Human-in-Command Controls
          </Link>
          <Link
            href="/trust-center"
            className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold   text-base rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all text-center cursor-pointer"
          >
            Trust Center
          </Link>
        </div>

      </div>
    </section>
  );
}