import React from 'react';

interface ConditionFamily {
  title: string;
  examples: string;
  guardrail: string;
}

const conditionFamilies: ConditionFamily[] = [
  {
    title: 'Record completeness',
    examples: 'Missing required field; incomplete source context; unlinked policy version.',
    guardrail: 'Describe missing context. Do not infer worker intent.',
  },
  {
    title: 'Temporal consistency',
    examples: 'Overlap; gap; duplicate; out-of-sequence boundary; time-zone ambiguity.',
    guardrail: 'Show local and canonical time plus source quality.',
  },
  {
    title: 'Schedule alignment',
    examples: 'Recorded boundary differs from approved schedule or shift version.',
    guardrail: 'Reviewable context — not an attendance or misconduct conclusion.',
  },
  {
    title: 'Workflow state',
    examples: 'Approval overdue; correction awaiting response; release acknowledgment missing.',
    guardrail: 'Flag the workflow, not the person.',
  },
  {
    title: 'Policy context',
    examples: 'Applicable policy unavailable; conflicting versions; effective-date mismatch.',
    guardrail: 'No universal legal-compliance claim.',
  },
  {
    title: 'Source health',
    examples: 'Delayed feed; stale source; failed sync; partial import; reconciliation mismatch.',
    guardrail: 'Route to the source owner. Avoid worker blame.',
  },
  {
    title: 'Classification trace',
    examples: 'Insufficient context; conflicting precedence; result superseded.',
    guardrail: 'Link the deterministic trace. No AI or risk score.',
  },
  {
    title: 'Break & rest context',
    examples: 'Eligibility window or record requires review.',
    guardrail: 'Keep separate from any legal-compliance conclusion.',
  },
  {
    title: 'Shift integrity',
    examples: 'Unresolved overlap, reassignment, split, cancellation, extension.',
    guardrail: 'Preserve approved versions and human review.',
  },
  {
    title: 'Evidence continuity',
    examples: 'Missing evidence link; delivery receipt failed; version lineage incomplete.',
    guardrail: 'State the limitation. Never claim immutability or admissibility.',
  },
  {
    title: 'Privacy & access',
    examples: 'Result below threshold; scope request exceeds permission; recipient access expired.',
    guardrail: 'Suppress display safely and record the reason.',
  },
  {
    title: 'Notification health',
    examples: 'Alert delivery failed; route unowned; coverage expired; repeated duplicate.',
    guardrail: 'Protect fatigue control and routing integrity.',
  },
];

export default function ConditionFamiliesTable() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">
        
        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
            What May Be Flagged
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold   tracking-tight text-slate-900 dark:text-white leading-tight">
            Twelve Condition Families — All About<br className="hidden sm:inline" /> Records, None About People
          </h2>
          <p className="text-sm sm:text-base font-normal   leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Read the guardrail column. Each family exists with an explicit rule about what it must not be read as.
          </p>
        </div>

        {/* Desktop Table View (md and up) */}
        <div className="hidden md:block w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold   uppercase tracking-wide text-slate-900 dark:text-slate-200">
                <th scope="col" className="w-48 py-3.5 px-5">Condition family</th>
                <th scope="col" className="py-3.5 px-5">Permitted examples</th>
                <th scope="col" className="w-80 lg:w-96 py-3.5 px-5">Required guardrail</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm  ">
              {conditionFamilies.map((item, idx) => (
                <tr 
                  key={idx}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                >
                  <td className="py-4 px-5 font-semibold   text-slate-900 dark:text-slate-100 align-top">
                    {item.title}
                  </td>
                  <td className="py-4 px-5 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                    {item.examples}
                  </td>
                  <td className="py-4 px-5 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                    {item.guardrail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Cards (Below md screen size) */}
        <div className="grid md:hidden grid-cols-1 gap-4 w-full">
          {conditionFamilies.map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm"
            >
              <h3 className="text-base font-bold   text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">
                {item.title}
              </h3>
              
              <div className="space-y-1">
                <span className="text-xs font-bold   uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Permitted examples
                </span>
                <p className="text-sm   text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.examples}
                </p>
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-xs font-bold   uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Required guardrail
                </span>
                <p className="text-sm   text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                  {item.guardrail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}