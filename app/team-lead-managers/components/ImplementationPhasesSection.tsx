import React from 'react';

interface PhaseCard {
  phase: string;
  title: string;
  description: string;
  exitGate: string;
}

interface SupportCard {
  title: string;
  description: string;
}

const phasesData: PhaseCard[] = [
  {
    phase: 'Phase 01',
    title: 'Discover',
    description:
      'Define teams, schedules, policies, worker groups, review roles, risks, and success measures.',
    exitGate: 'Signed solution and governance design.',
  },
  {
    phase: 'Phase 02',
    title: 'Configure & integrate',
    description:
      'Build identity, policy, project, review, and output controls with mappings and permissions.',
    exitGate: 'Technical and security acceptance.',
  },
  {
    phase: 'Phase 03',
    title: 'Validate & launch',
    description:
      'Prove records and workflows with one or two teams, using parallel comparison and rollback.',
    exitGate: 'Business owner and governance approval.',
  },
  {
    phase: 'Phase 04',
    title: 'Operate & expand',
    description:
      'Stabilize, measure, improve, and extend to more teams, regions, worker types, and projects.',
    exitGate: 'Renewal and expansion on evidenced value.',
  },
];

const supportCardsData: SupportCard[] = [
  {
    title: 'Monthly readiness review',
    description:
      'Completeness, exception aging, approval turnaround, attribution, and adoption.',
  },
  {
    title: 'Manager enablement',
    description:
      'In-product guidance, review training, and a documented support route for your team.',
  },
  {
    title: 'Change governance',
    description:
      'Policy and integration changes carry version history and pre-release testing.',
  },
];

export default function ImplementationPhasesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="max-w-[740px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Implementation, Adoption &amp; Retention
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Four Phases, Each With an Exit Gate
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Timing depends on scope, worker groups, policy complexity, integrations, consultation, and rollout model. Enterprise buyers receive a phased plan, not a date.
          </p>
        </div>

        {/* 4-Phase Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phasesData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 flex flex-col justify-between gap-6 overflow-hidden pl-7"
            >
              {/* Left Accent Border Highlight */}
              <div
                className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-2">
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wider">
                  {item.phase}
                </span>
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Exit Gate Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex flex-col gap-1">
                <span className="text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wide">
                  Exit gate
                </span>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {item.exitGate}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support & Governance Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {supportCardsData.map((card, index) => (
            <div
              key={index}
              className="bg-slate-100/70 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 flex flex-col gap-2 shadow-xs"
            >
              <h3 className="text-slate-900 dark:text-white text-base font-bold leading-snug">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}