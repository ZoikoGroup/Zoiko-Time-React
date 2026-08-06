import React from 'react';

interface CriteriaItem {
  title: string;
  description: string;
}

const criteriaList: CriteriaItem[] = [
  {
    title: 'Criterion',
    description: '— specific, observable, bounded, and traceable to scope and deliverable.',
  },
  {
    title: 'Scope and version',
    description: '— entity, team, policy, environment, integration, report, wave, locale, baseline version.',
  },
  {
    title: 'Evidence and result',
    description: '— met, not met, not applicable, accepted with conditions, blocked, or withdrawn.',
  },
  {
    title: 'Exception',
    description: '— reason, affected scope, residual risk, compensating action, owner, due state, expiry.',
  },
  {
    title: 'Authority',
    description: '— named role and delegated scope. There is no acceptance through visibility or inactivity.',
  },
  {
    title: 'Go / no-go',
    description: '— required gates, blockers, residual risks, communications, support, rollback, recorded decision.',
  },
  {
    title: 'Rollback',
    description: '— trigger, authority, steps, data and evidence handling, communications, re-entry criteria.',
  },
  {
    title: 'Handover',
    description: '— runbooks, access, configuration, integrations, evidence, worker materials, support, limitations, open items, operational acceptance.',
  },
];

export default function AcceptanceAndHandover() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Content, Bullet List & Callout */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Acceptance, Launch, Rollback &amp; Handover
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              “Complete” Is a Decision Someone Signs
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Acceptance records what was met, what was not, and what was accepted with conditions — with the residual risk and its owner written down.
            </p>
          </div>

          {/* Criteria Bullet List */}
          <div className="flex flex-col gap-3.5 py-2">
            {criteriaList.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 mt-2 shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  <strong className="font-bold text-slate-900 dark:text-white">
                    {item.title}{' '}
                  </strong>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Definition of Done Banner */}
          <div className="p-5 sm:p-6 bg-sky-50/50 dark:bg-sky-950/30 rounded-xl border-l-4 border-l-sky-600 border-y border-r border-sky-200 dark:border-sky-800/60 flex flex-col gap-1.5">
            <span className="text-sky-700 dark:text-sky-400 text-xs font-bold uppercase tracking-wider">
              Definition of done
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              A stage is done only when approved deliverables and criteria are met — or explicitly accepted with conditions by authorized people — unresolved items are visible and owned, evidence is preserved, and the next operating responsibility is clear.
            </p>
          </div>

        </div>

        {/* Right Column: Hero Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-[534px] aspect-[534/356] relative rounded-2xl overflow-hidden ">
            <img
              src="/implementation/div.mock (6).png"
              alt="Acceptance, Launch, Rollback and Handover representation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}