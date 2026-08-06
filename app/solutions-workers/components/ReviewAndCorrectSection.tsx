import React from 'react';

export default function ReviewAndCorrectSection() {
  const workflowSteps = [
    {
      stage: "Needs input",
      youSee: "Plain reason and action",
      authorizedReviewerSees: "Configured issue and assignment",
      auditRecord: "Flag source, rule/version, timestamp",
    },
    {
      stage: "Submitted",
      youSee: "Your context and submitted values",
      authorizedReviewerSees: "Context, evidence, allowed actions",
      auditRecord: "Actor, timestamp, prior/new value",
    },
    {
      stage: "Pending review",
      youSee: "Current status and support route",
      authorizedReviewerSees: "Queue, SLA, escalation",
      auditRecord: "Assignment and state changes",
    },
    {
      stage: "Resolved / corrected",
      youSee: "Outcome, approved value, explanation",
      authorizedReviewerSees: "Final action, downstream readiness",
      auditRecord: "Decision actor, reason, version",
    },
    {
      stage: "Reopened",
      youSee: "Why it reopened and next action",
      authorizedReviewerSees: "New or conflicting information",
      auditRecord: "Complete version chain",
    },
  ];

  return (
    <section className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Category Tag */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Review &amp; Correct
        </span>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-6">
          Mistakes and missing context should be easy to resolve
        </h2>

        {/* Info Banner Box */}
        <div className="w-full max-w-4xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/50 rounded-2xl p-6 md:p-7 mb-10 text-center">
          <p className="text-slate-800 dark:text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
            You can review your own record, explain missing context, and request a correction through a visible workflow where enabled. The record keeps its status and history so the resolution stays inspectable.
          </p>
        </div>

        {/* Workflow Table Container */}
        <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[700px]">
              {/* Table Header */}
              <thead>
                <tr className="bg-slate-800 text-white font-semibold text-xs">
                  <th className="py-3.5 px-5 w-1/5">Stage</th>
                  <th className="py-3.5 px-5 w-1/4">You see</th>
                  <th className="py-3.5 px-5 w-1/3">Authorized reviewer sees</th>
                  <th className="py-3.5 px-5 w-1/4">Audit record</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                {workflowSteps.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={idx % 2 === 1 ? 'bg-gray-50 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-800'}
                  >
                    <td className="py-4 px-5 font-bold text-slate-800 dark:text-white align-top">
                      {row.stage}
                    </td>
                    <td className="py-4 px-5 text-gray-700 dark:text-gray-300 align-top leading-snug">
                      {row.youSee}
                    </td>
                    <td className="py-4 px-5 text-gray-700 dark:text-gray-300 align-top leading-snug">
                      {row.authorizedReviewerSees}
                    </td>
                    <td className="py-4 px-5 text-gray-700 dark:text-gray-300 align-top leading-snug">
                      {row.auditRecord}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="flex items-start justify-center gap-2 max-w-3xl text-center text-xs text-gray-500 dark:text-gray-400 leading-relaxed px-4">
          <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p>
            Example label: &quot;Unverified Exit — Pending Review,&quot; never &quot;Time Theft&quot; or &quot;Suspicious Exit.&quot; A correction creates a reviewable request — never a silent overwrite.
          </p>
        </div>

      </div>
    </section>
  );
}