import React from 'react';

type PillTone = 'neutral' | 'blue' | 'amber' | 'green' | 'violet';

interface CorrectionState {
  label: string;
  tone: PillTone;
}

const pillStyles: Record<PillTone, string> = {
  neutral: 'bg-neutral-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300',
  blue: 'bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-300',
  amber: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400',
  green: 'bg-emerald-50 dark:bg-emerald-950/40 text-[#2e8b57] dark:text-green-400',
  violet: 'bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-300',
};

const correctionStates: CorrectionState[] = [
  { label: 'None', tone: 'neutral' },
  { label: 'Draft', tone: 'blue' },
  { label: 'Submitted', tone: 'blue' },
  { label: 'Withdrawn', tone: 'neutral' },
  { label: 'Information requested', tone: 'amber' },
  { label: 'Accepted', tone: 'green' },
  { label: 'Partially accepted', tone: 'violet' },
  { label: 'No change approved', tone: 'violet' },
  { label: 'Superseded', tone: 'neutral' },
  { label: 'Reopened', tone: 'blue' },
];

const flowShows: React.ReactNode[] = [
  'Which field is affected, and its current value',
  'The proposed value or context being added',
  <>
    <span className="font-bold text-slate-800 dark:text-slate-200">A sharing preview</span> — who will
    see this and what they will see
  </>,
  'The option to save a draft rather than submit',
  'Confirmation of what happens next, and who decides',
];

export default function CorrectionFlowAndStates() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* Requesting A Correction */}
        <div className="flex flex-col gap-3.5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Requesting a correction
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7 max-w-xl">
            Before submitting, a worker sees exactly what will be shared and with whom. Nothing is
            sent quietly, and a draft can be saved without submitting.
          </p>

          {/* The Flow Shows */}
          <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">The flow shows</h3>
            <ul className="space-y-2">
              {flowShows.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] h-[5px] w-[5px] rounded-sm bg-green-400 shrink-0"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Never Asked Of A Worker */}
          <div className="px-3.5 pt-4 pb-3 bg-rose-50 dark:bg-rose-950/30 rounded-[10px] border border-rose-200 dark:border-rose-900/60 space-y-1">
            <span className="block text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
              Never asked of a worker
            </span>
            <p className="text-xs text-rose-700 dark:text-rose-300 leading-5">
              “Prove that you worked.” No correction flow demands justification of a person&apos;s
              honesty, and none frames a request as a dispute or a complaint. A request is a request.
            </p>
          </div>
        </div>

        {/* Ten Correction States */}
        <div className="flex flex-col gap-3.5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Ten correction states
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-7">
            Including two that a worker deserves to see named plainly.
          </p>

          {/* State Pills */}
          <div className="flex flex-wrap gap-2">
            {correctionStates.map((state) => (
              <span
                key={state.label}
                className={`px-2.5 py-1 rounded-full text-xs font-bold ${pillStyles[state.tone]}`}
              >
                {state.label}
              </span>
            ))}
          </div>

          {/* Neutral Outcome Explainer */}
          <div className="p-5 sm:p-6 bg-emerald-50/40 dark:bg-emerald-950/20 rounded-2xl border border-emerald-100 dark:border-emerald-900/60 space-y-2.5">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              “No change approved” and “Partially accepted”
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-6">
              Both are real outcomes, and both are stated neutrally with the reviewer&apos;s reason.
              Neither is “your claim was rejected” or “excuse denied” — a reviewer deciding the record
              was already correct is a legitimate result, and it does not imply the worker was wrong to
              ask.
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-6">
              Every outcome shows the authorized role that decided, the reason, any conditions, the
              resulting version, and the escalation route if the worker disagrees.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
