import React from 'react';

interface StateRibbonItem {
  name: string;
  dotColor: string;
  textColor: string;
  bgColor: string;
  borderColor?: string;
}

const ribbonStates: StateRibbonItem[] = [
  {
    name: 'Scheduled',
    dotColor: 'bg-teal-600 dark:bg-teal-400',
    textColor: 'text-teal-700 dark:text-teal-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/50',
  },
  {
    name: 'Taken',
    dotColor: 'bg-teal-600 dark:bg-teal-400',
    textColor: 'text-teal-700 dark:text-teal-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-950/50',
  },
  {
    name: 'Under Review',
    dotColor: 'bg-blue-900 dark:bg-blue-300',
    textColor: 'text-blue-950 dark:text-blue-200',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/60',
    borderColor: 'border-slate-300 dark:border-indigo-800',
  },
  {
    name: 'Confirmed',
    dotColor: 'bg-slate-500 dark:bg-slate-400',
    textColor: 'text-slate-600 dark:text-slate-300',
    bgColor: 'bg-white dark:bg-slate-900',
    borderColor: 'border-slate-200 dark:border-slate-800',
  },
  {
    name: 'Exception',
    dotColor: 'bg-amber-600 dark:bg-amber-400',
    textColor: 'text-amber-700 dark:text-amber-400',
    bgColor: 'bg-amber-100/70 dark:bg-amber-950/50',
  },
  {
    name: 'Resolved',
    dotColor: 'bg-slate-500 dark:bg-slate-400',
    textColor: 'text-slate-600 dark:text-slate-300',
    bgColor: 'bg-white dark:bg-slate-900',
    borderColor: 'border-slate-200 dark:border-slate-800',
  },
];

interface StateDetailCard {
  badgeText: string;
  badgeBg: string;
  badgeTextColor: string;
  description: string;
}

const stateCards: StateDetailCard[] = [
  {
    badgeText: 'Scheduled',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60',
    badgeTextColor: 'text-blue-950 dark:text-blue-200',
    description: 'The policy engine has assigned a break or rest window to this shift.',
  },
  {
    badgeText: 'Taken',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60',
    badgeTextColor: 'text-blue-950 dark:text-blue-200',
    description: 'Activity was recorded against the scheduled window.',
  },
  {
    badgeText: 'Under Review',
    badgeBg: 'bg-indigo-50 dark:bg-indigo-950/60',
    badgeTextColor: 'text-blue-950 dark:text-blue-200',
    description: "The record didn't match the policy cleanly and is waiting on a reviewer.",
  },
  {
    badgeText: 'Confirmed',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/50',
    badgeTextColor: 'text-teal-700 dark:text-teal-400',
    description: 'A reviewer verified the record matches policy — no further action needed.',
  },
  {
    badgeText: 'Exception',
    badgeBg: 'bg-amber-100/70 dark:bg-amber-950/50',
    badgeTextColor: 'text-amber-700 dark:text-amber-400',
    description: 'The record is flagged as short, missed, or late, pending resolution.',
  },
  {
    badgeText: 'Resolved',
    badgeBg: 'bg-emerald-50 dark:bg-emerald-950/50',
    badgeTextColor: 'text-teal-700 dark:text-teal-400',
    description: 'The exception has a documented outcome and is closed with evidence attached.',
  },
];

export default function StateModelSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <header className="flex flex-col gap-3 max-w-[630px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
            <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
              State Model
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Every break record moves through the same states.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            This ribbon is the backbone of the product — it&apos;s how workers, reviewers, and auditors all read the same record the same way.
          </p>
        </header>

        {/* State Model Container */}
        <div className="w-full bg-slate-100/80 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col gap-8 shadow-sm">
          
          {/* Horizontal Status Ribbon */}
          <div className="w-full overflow-x-auto pb-2 scrollbar-none">
            <div className="inline-flex items-center gap-3 min-w-max">
              {ribbonStates.map((state, idx) => {
                const isLast = idx === ribbonStates.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <div
                      className={`px-4 py-2 rounded-full border ${
                        state.borderColor || 'border-transparent'
                      } ${state.bgColor} flex items-center gap-2 shadow-xs`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${state.dotColor}`} />
                      <span className={`text-xs font-semibold ${state.textColor}`}>
                        {state.name}
                      </span>
                    </div>

                    {!isLast && (
                      <span aria-hidden="true" className="w-5 h-px bg-slate-200 dark:bg-slate-700 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* 6 State Detail Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stateCards.map((card, idx) => (
              <div
                key={idx}
                className="p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-3 justify-start"
              >
                <div className="self-start">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${card.badgeBg} ${card.badgeTextColor}`}
                  >
                    {card.badgeText}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}