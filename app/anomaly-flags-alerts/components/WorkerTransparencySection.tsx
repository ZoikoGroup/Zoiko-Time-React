import React from 'react';

interface TransparencyFeature {
  title: string;
  description: string;
  highlighted?: boolean;
}

const features: TransparencyFeature[] = [
  {
    title: 'See',
    description:
      'Applicable own-record flags with plain-language explanation, definition version, scope, and current review state.',
  },
  {
    title: 'Understand',
    description:
      'Which records and policy context produced the condition, and the stated limitations of the signal.',
  },
  {
    title: 'Correct',
    description:
      'Request a correction or provide context with a reason. The request status is non-adverse throughout.',
  },
  {
    title: 'Escalate',
    description:
      'A documented route where a correction is declined, plus privacy and support contacts.',
    highlighted: true,
  },
];

export default function WorkerTransparencySection() {
  return (
    <section className="w-full bg-slate-900 text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">
        
        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <span className="text-emerald-400 text-xs font-bold   uppercase tracking-wider">
            Worker Transparency &amp; My Flagged Records
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold   tracking-tight text-white leading-tight">
            The Person in the Record Is Not the Last to Know
          </h2>
          <p className="text-sm sm:text-base font-normal   leading-relaxed text-slate-300 max-w-2xl mx-auto">
            Anomaly products usually keep flags on the manager side of a wall. This one gives the worker an authenticated view of applicable own-record flags, with correction and escalation.
          </p>
        </div>

        {/* 4-Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:pt-8 sm:pb-8 rounded-2xl border shadow-sm flex flex-col gap-2 transition-colors ${
                item.highlighted
                  ? 'bg-emerald-500/10 border-emerald-500/30'
                  : 'bg-white/5 border-white/10'
              }`}
            >
              <h3 className="text-lg font-bold   text-white">
                {item.title}
              </h3>
              <p className="text-sm   text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Safeguard Warning Callout Box */}
        <div className="w-full max-w-[900px] p-4 sm:p-5 bg-rose-950/40 rounded-xl border border-rose-900/50 space-y-1.5 text-left">
          <span className="block text-xs font-bold   uppercase tracking-wider text-rose-400">
            Never derived from a flag
          </span>
          <p className="text-xs sm:text-sm font-normal   leading-relaxed text-rose-200">
            A worker&apos;s flag history is never aggregated into a score, a ranking, a risk profile, or a performance signal. Having flags associated with your records means records needed review — nothing about you. Suppression never removes a worker&apos;s right to see and challenge an applicable own-record flag.
          </p>
        </div>

      </div>
    </section>
  );
}