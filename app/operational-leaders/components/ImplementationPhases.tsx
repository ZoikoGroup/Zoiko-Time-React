import React from 'react';

interface PhaseCard {
  phaseNumber: string;
  title: string;
  description: string;
  exitGateText: string;
}

interface GovernanceCard {
  title: string;
  description: string;
}

const phases: PhaseCard[] = [
  {
    phaseNumber: 'Phase 01',
    title: 'Discover',
    description:
      'Define the operating model, systems, policies, worker groups, risks, and success measures.',
    exitGateText: 'Signed solution and governance design.',
  },
  {
    phaseNumber: 'Phase 02',
    title: 'Configure & integrate',
    description:
      'Build identity, policy, project, review, and output controls with mappings and permissions.',
    exitGateText: 'Technical and security acceptance.',
  },
  {
    phaseNumber: 'Phase 03',
    title: 'Validate & launch',
    description:
      'Prove records and workflows in a controlled population, with parallel comparison and rollback.',
    exitGateText: 'Business owner and governance approval.',
  },
  {
    phaseNumber: 'Phase 04',
    title: 'Operate & expand',
    description:
      'Stabilize, measure, improve, and extend to more teams, regions, worker types, and projects.',
    exitGateText: 'Renewal and expansion on evidenced value.',
  },
];

const governanceCards: GovernanceCard[] = [
  {
    title: 'Monthly readiness review',
    description:
      'Completeness, exception aging, approval turnaround, attribution, and adoption.',
  },
  {
    title: 'Named owners',
    description:
      'Customer success, operational, technical, and executive sponsor — on both sides.',
  },
  {
    title: 'Change governance',
    description:
      'Policy and integration changes carry version history and pre-release testing.',
  },
];

export default function ImplementationPhases() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="max-w-[740px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Implementation, Adoption &amp; Retention
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Four Phases, Each With an Exit Gate
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 text-base leading-relaxed">
            Timing depends on scope, worker groups, policy complexity, integrations, consultation, and rollout model. Enterprise buyers receive a phased plan, not a date.
          </p>
        </div>

        {/* 4-Phase Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {phases.map((phase, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col justify-between gap-6 overflow-hidden transition-all hover:border-slate-300 hover:shadow-sm"
            >
              {/* Left Green Accent Line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />

              <div className="flex flex-col gap-2">
                <span className="text-emerald-600 text-xs font-extrabold uppercase tracking-wider">
                  {phase.phaseNumber}
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {phase.description}
                </p>
              </div>

              {/* Exit Gate Section */}
              <div className="pt-4 border-t border-slate-100 flex flex-col gap-1">
                <span className="text-slate-900 text-xs font-bold uppercase tracking-wider">
                  Exit gate
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {phase.exitGateText}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {governanceCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-100/70 p-6 rounded-2xl border border-slate-200/80 flex flex-col gap-2 transition-all hover:border-slate-300"
            >
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}