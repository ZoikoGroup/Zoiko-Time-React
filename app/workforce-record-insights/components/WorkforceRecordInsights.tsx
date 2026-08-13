import React from 'react';

export default function WorkforceRecordInsights() {
  const allowedLanguage = [
    "Record pattern · source coverage · policy context · data-quality state · review need · human next action",
    "“Needs review because required source context is incomplete.”",
    "“Comparison unavailable because policy versions differ.”",
    "“Own-record insight with explanation and correction path.”",
    "“Aggregated value with privacy threshold satisfied.”"
  ];

  const forbiddenLanguage = [
    "Productivity score · employee risk · low performer · suspicious worker · behavior profile · activity surveillance",
    "“Worker failed.” · “Worker is noncompliant.” · “Likely misconduct.”",
    "“Performance declined.”",
    "Secret score, or a hidden manager-only label.",
    "Small-group or identifiable exposure without approved purpose."
  ];

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Header Section */}
        <div className="max-w-3xl flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
            What is Workforce Record Insights?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg font-normal font-sans leading-relaxed">
            Workforce Record Insights is a governed way to understand patterns in approved workforce records. Each insight shows its metric definition, source scope, time window, policy and jurisdiction context, data freshness, completeness, limitations, and review state. It supports accountable human review — it does not rank workers, infer behavior, or make employment decisions.
          </p>
        </div>

        {/* Comparison Table / Box */}
        <div className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Language We Use */}
          <div className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800">
            <div className="px-5 py-3.5 bg-emerald-50/60 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/40">
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide font-sans">
                Language we use
              </span>
            </div>
            {allowedLanguage.map((text, idx) => (
              <div key={idx} className="px-5 py-3.5 text-xs sm:text-sm font-sans text-emerald-800 dark:text-emerald-300/90 leading-relaxed">
                {text}
              </div>
            ))}
          </div>

          {/* Right Column: Language We Never Use */}
          <div className="flex-1 flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
            <div className="px-5 py-3.5 bg-rose-50/60 dark:bg-rose-950/30 border-b border-rose-100 dark:border-rose-900/40">
              <span className="text-rose-700 dark:text-rose-400 text-xs font-bold uppercase tracking-wide font-sans">
                Language we never use
              </span>
            </div>
            {forbiddenLanguage.map((text, idx) => (
              <div key={idx} className="px-5 py-3.5 text-xs sm:text-sm font-sans text-rose-800 dark:text-rose-300/90 leading-relaxed">
                {text}
              </div>
            ))}
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
          <a href="/how-zoikotime-works">
          <button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-base rounded-lg shadow-sm transition-all duration-200">
            Learn how it works
          </button></a>
          <a href="/trust-center">
          <button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 font-bold text-base rounded-lg shadow-sm transition-all duration-200">
            Trust Center
          </button></a>
        </div>

      </div>
    </section>
  );
}