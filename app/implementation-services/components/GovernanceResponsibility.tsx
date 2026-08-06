import React from 'react';

interface TableRow {
  area: string;
  yourOrganization: string;
  zoikoTime: string;
  mustNeverBeImplied: string;
}

interface RoleCard {
  title: string;
  responsibility: string;
  limitation: string;
}

const tableData: TableRow[] = [
  {
    area: 'Governance',
    yourOrganization:
      'Name sponsor, implementation owner, policy owners, approvers, local owners, escalation, consultation responsibility.',
    zoikoTime:
      'Provide the approved delivery model, decision records, gates, templates, and evidence within scope.',
    mustNeverBeImplied:
      'That ZoikoTime assumes employer, legal, or fiduciary authority.',
  },
  {
    area: 'Policy',
    yourOrganization:
      'Choose and approve applicable policy, scope, jurisdiction, effective dates, and exceptions.',
    zoikoTime:
      'Configure supported settings, document mappings, expose tests, preserve evidence.',
    mustNeverBeImplied: 'Automatic legal compliance or policy advice.',
  },
  {
    area: 'Identity',
    yourOrganization:
      'Maintain authoritative identities, lifecycle events, role assignments, and reviews.',
    zoikoTime:
      'Implement supported controls, validate mappings, preserve access evidence.',
    mustNeverBeImplied: 'Universal provider or protocol support.',
  },
  {
    area: 'Data & integrations',
    yourOrganization:
      'Provide authorized sources, accurate data, owners, tests, and approvals.',
    zoikoTime:
      'Configure documented connections and mappings; validate, reconcile, and surface failures.',
    mustNeverBeImplied: 'Guessing missing values or broadening access.',
  },
  {
    area: 'Worker communication',
    yourOrganization:
      'Deliver notices, consultation, training, local escalation, and representation as required.',
    zoikoTime:
      'Provide current product, data-flow, and rights materials within agreed scope.',
    mustNeverBeImplied: 'That ZoikoTime replaces employer duties.',
  },
  {
    area: 'Validation',
    yourOrganization:
      'Provide scenarios, reviewers, acceptance authority, and timely decisions.',
    zoikoTime:
      'Provide test evidence, defect tracking, remediation, and acceptance support.',
    mustNeverBeImplied: 'That passing tests guarantee every future outcome.',
  },
  {
    area: 'Launch',
    yourOrganization:
      'Approve readiness, cutover, communications, local support, and unresolved risks.',
    zoikoTime:
      'Execute agreed technical and service tasks, monitor, reconcile, support stabilization.',
    mustNeverBeImplied: 'That launch may bypass accountable approval.',
  },
  {
    area: 'Operations',
    yourOrganization:
      'Own ongoing administration, policy, review, corrections, and change requests.',
    zoikoTime:
      'Deliver handover, documentation, the current support route, and agreed follow-up.',
    mustNeverBeImplied:
      'That implementation creates an indefinite managed service.',
  },
];

const roleCards: RoleCard[] = [
  {
    title: 'Executive sponsor',
    responsibility:
      'Outcome, priority, risk acceptance, major scope and launch decisions.',
    limitation: 'Not daily delivery ownership.',
  },
  {
    title: 'Customer implementation owner',
    responsibility:
      'Plan, owners, decisions, dependencies, communications, acceptance, handover.',
    limitation:
      'Not authority over policy, legal, or security without delegation.',
  },
  {
    title: 'Policy / workforce owner',
    responsibility:
      'Policy source, jurisdiction, effective dates, exceptions, worker rights, correction, approval.',
    limitation: 'ZoikoTime never writes or approves employment policy.',
  },
  {
    title: 'IT / identity / integration owner',
    responsibility:
      'Environments, identity, access, systems, credentials, tests, operations.',
    limitation: 'Not unrestricted access to worker or policy data.',
  },
  {
    title: 'Security / privacy / legal reviewer',
    responsibility:
      'Review and approve, or escalate within organizational authority.',
    limitation: 'Not universal compliance certification.',
  },
  {
    title: 'Worker / consultation representative',
    responsibility:
      'Review communications, data flow, rights, accessibility, and consultation where applicable.',
    limitation: 'Product or sales teams never replace representation duties.',
  },
  {
    title: 'ZoikoTime engagement owner',
    responsibility:
      'Coordinate agreed delivery, status, gates, evidence, risks, and escalation when assigned.',
    limitation:
      'No guaranteed named resource before contract and capacity confirmation.',
  },
  {
    title: 'Acceptance authority',
    responsibility:
      'Accept criteria, exceptions, residual risk, handover, and closure within delegated authority.',
    limitation: 'Silence is never acceptance.',
  },
  {
    title: 'Auditor / evidence reviewer',
    responsibility:
      'Read-only review of approvals, changes, tests, acceptance, and evidence where permitted.',
    limitation: 'Visibility never grants edit or approval rights.',
  },
];

export default function GovernanceResponsibility() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Governance &amp; Shared Responsibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Ownership Is Visible Before Work Begins
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Implementation support never means obligations transfer silently to ZoikoTime. The third column exists because unstated assumptions are where implementations fail.
          </p>
        </div>

        {/* Matrix Table */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px] border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-6 w-[15%]">Area</th>
                  <th className="py-3.5 px-6 w-[35%]">Your organization</th>
                  <th className="py-3.5 px-6 w-[28%]">ZoikoTime / authorized delivery team</th>
                  <th className="py-3.5 px-6 w-[22%]">Must never be implied</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-sm text-slate-600 dark:text-slate-300">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white align-top">
                      {row.area}
                    </td>
                    <td className="py-4 px-6 leading-relaxed align-top">
                      {row.yourOrganization}
                    </td>
                    <td className="py-4 px-6 leading-relaxed align-top">
                      {row.zoikoTime}
                    </td>
                    <td className="py-4 px-6 leading-relaxed align-top">
                      {row.mustNeverBeImplied}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Role Patterns Section */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Role patterns
            </h3>
            <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              These describe decision and permission needs. They do not promise a dedicated ZoikoTime team, a staffing model, or included specialist hours.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleCards.map((card, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {card.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {card.responsibility}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {card.limitation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}