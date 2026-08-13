import React from 'react';

interface InterpretationPair {
  prohibited: string;
  replacement: string;
}

const interpretations: InterpretationPair[] = [
  {
    prohibited: 'Fraud detected',
    replacement: '“Configured record condition requires review.”',
  },
  {
    prohibited: 'Time theft',
    replacement: '“Recorded and expected context differ; review the source facts and applicable policy.”',
  },
  {
    prohibited: 'High-risk employee',
    replacement: '“Operational priority: review by [time].”',
  },
  {
    prohibited: 'Noncompliant worker',
    replacement: '“Applicable record or policy context is incomplete, conflicting, or awaiting review.”',
  },
  {
    prohibited: 'Poor performer',
    replacement: '“This page does not evaluate productivity or performance.”',
  },
  {
    prohibited: 'Suspicious behavior',
    replacement: '“Source-linked record condition.”',
  },
  {
    prohibited: 'Violation confirmed',
    replacement: '“Review state: unresolved / resolved with reason.”',
  },
  {
    prohibited: 'Automatically rejected',
    replacement: '“Human review required before any separate consequential action.”',
  },
  {
    prohibited: 'AI confidence 92%',
    replacement: '“Definition version, trigger conditions, source quality, and limitations.”',
  },
  {
    prohibited: 'Red alert means guilty',
    replacement: '“Colour supports operational priority only; text states meaning and status.”',
  },
];

export default function ElevenInterpretationsSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">
        
        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold   uppercase tracking-wider">
            What a Flag Is Not
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold   tracking-tight text-slate-900 dark:text-white leading-tight">
            Eleven Interpretations, and Their Required<br className="hidden sm:inline" /> Replacements
          </h2>
          <p className="text-sm sm:text-base font-normal   leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The left column is what an anomaly product usually says. The right column is what this one says instead.
          </p>
        </div>

        {/* Desktop View: Side-by-Side Comparison Box */}
        <div className="hidden md:grid grid-cols-2 w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden divide-x divide-slate-200 dark:divide-slate-800">
          
          {/* Prohibited Column */}
          <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
            <div className="p-4 bg-red-50/50 dark:bg-red-950/20 border-b border-red-100 dark:border-red-900/30">
              <span className="text-xs font-bold   uppercase tracking-wider text-rose-700 dark:text-rose-400">
                Prohibited interpretation
              </span>
            </div>
            {interpretations.map((item, idx) => (
              <div key={idx} className="p-3.5 px-4 min-h-[52px] flex items-center">
                <span className="text-xs font-normal   line-through text-rose-600 dark:text-rose-400/80">
                  {item.prohibited}
                </span>
              </div>
            ))}
          </div>

          {/* Replacement Column */}
          <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800/60">
            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/30">
              <span className="text-xs font-bold   uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Required replacement language
              </span>
            </div>
            {interpretations.map((item, idx) => (
              <div key={idx} className="p-3.5 px-4 min-h-[52px] flex items-center">
                <span className="text-xs font-normal   text-emerald-700 dark:text-emerald-300 leading-relaxed">
                  {item.replacement}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile View: Comparison Cards */}
        <div className="grid md:hidden grid-cols-1 gap-4 w-full">
          {interpretations.map((item, idx) => (
            <div 
              key={idx} 
              className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2 shadow-sm"
            >
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold   uppercase tracking-wider text-rose-600 dark:text-rose-400">
                  Prohibited
                </span>
                <p className="text-xs   line-through text-rose-600 dark:text-rose-400">
                  {item.prohibited}
                </p>
              </div>
              <div className="space-y-0.5 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold   uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Required Replacement
                </span>
                <p className="text-xs   text-emerald-700 dark:text-emerald-300 leading-relaxed font-medium">
                  {item.replacement}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Copy Lock Callout Box */}
        <div className="w-full max-w-[900px] p-4 sm:p-5 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900/50 space-y-1 text-left">
          <span className="block text-xs font-bold   uppercase tracking-wider text-rose-700 dark:text-rose-400">
            Copy lock
          </span>
          <p className="text-xs sm:text-sm font-normal   leading-relaxed text-rose-800 dark:text-rose-300">
            The words “offender,” “suspect,” “caught,” “cheating,” “fraudulent,” “dishonest,” “noncompliant employee,” and “high-risk worker” never appear in this product&apos;s interface, notifications, documentation, or sales material — except, as above, as an example of language being replaced.
          </p>
        </div>

      </div>
    </section>
  );
}