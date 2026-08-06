import React from 'react';

interface StageCard {
  number: string;
  title: string;
  purpose: string;
  exitGate: string;
}

const stages: StageCard[] = [
  {
    number: 'Stage 01',
    title: 'Qualify & confirm availability',
    purpose:
      'Verify service status, fit, scope category, commercial pathway, geography, dependencies, and responsible contacts.',
    exitGate:
      'Offer and qualification path confirmed. An inquiry creates no promise.',
  },
  {
    number: 'Stage 02',
    title: 'Establish governance',
    purpose:
      'Name sponsor, implementation owner, workstream owners, approvers, consultation roles, escalation, and decision rights.',
    exitGate: 'Required ownership and authority accepted.',
  },
  {
    number: 'Stage 03',
    title: 'Assess readiness',
    purpose:
      'Review organization, policy, identity, data, integrations, jurisdictions, accessibility, support, communications, and procurement.',
    exitGate: 'Gaps owned, accepted, or explicitly blocking.',
  },
  {
    number: 'Stage 04',
    title: 'Define scope & plan',
    purpose:
      'Baseline outcomes, in-scope objects, exclusions, waves, deliverables, dependencies, assumptions, acceptance, and change control.',
    exitGate: 'Scope baseline approved.',
  },
  {
    number: 'Stage 05',
    title: 'Configure & connect',
    purpose:
      'Apply supported policy, identity, integration, privacy, regional, and product configuration within approved scope.',
    exitGate: 'Configuration evidence and open issues recorded.',
  },
  {
    number: 'Stage 06',
    title: 'Validate & accept',
    purpose:
      'Run technical, policy, accessibility, security, privacy, operational, worker-rights, and business scenarios.',
    exitGate: 'Criteria met, or exceptions explicitly approved.',
  },
  {
    number: 'Stage 07',
    title: 'Launch & observe',
    purpose:
      'Execute approved cutover, communications, access, monitoring, reconciliation, and rollback readiness.',
    exitGate: 'Launch authority recorded. Blockers are not bypassed.',
  },
  {
    number: 'Stage 08',
    title: 'Stabilize & handover',
    purpose:
      'Resolve agreed issues and transfer runbooks, evidence, ownership, support, and limitations.',
    exitGate: 'Operational handover accepted.',
  },
  {
    number: 'Stage 09',
    title: 'Close, change, or expand',
    purpose:
      'Close and preserve records, route support, initiate controlled change, or qualify another wave.',
    exitGate: 'Closure or approved continuation recorded.',
  },
];

export default function GovernedLifecycle() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-24 px-6 lg:px-20 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="max-w-[780px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Governed Implementation Lifecycle
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Nine Stages, Each With an Exit Gate
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            A stage cannot advance because time has passed. It advances when its gate is satisfied — or it stays visible as blocked, with a named owner.
          </p>
        </div>

        {/* 9 Stages Grid Layout (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col justify-between gap-6 transition-all duration-200 hover:border-slate-300 dark:hover:border-slate-600"
            >
              <div className="flex flex-col gap-3">
                {/* Stage Number Badge */}
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-extrabold uppercase tracking-wide">
                  {stage.number}
                </span>

                {/* Stage Title */}
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {stage.title}
                </h3>

                {/* Purpose Section */}
                <div className="flex flex-col gap-1 pt-1">
                  <span className="text-slate-400 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                    Purpose
                  </span>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {stage.purpose}
                  </p>
                </div>
              </div>

              {/* Exit Gate Section */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-col gap-1">
                <span className="text-slate-400 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                  Exit Gate
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                  {stage.exitGate}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}