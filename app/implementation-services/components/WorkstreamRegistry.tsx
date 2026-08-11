import React from 'react';

interface RegistryRow {
  workstream: string;
  coordination: string;
  boundary: {
    type: 'text' | 'link' | 'link-with-text';
    text?: string;
    linkText?: string;
    href?: string;
    suffixText?: string;
  };
}

const registryData: RegistryRow[] = [
  {
    workstream: 'Governance & program',
    coordination:
      'Sponsor, owners, decision rights, scope, gates, risks, changes, evidence, acceptance.',
    boundary: {
      type: 'text',
      text: 'Staffing, cadence, and deliverables depend on agreed terms.',
    },
  },
  {
    workstream: 'Organization & policy',
    coordination:
      'Entity and team scope, policy source, inheritance, exceptions, effective dates, correction, approvals.',
    boundary: {
      type: 'link',
      linkText: 'Administration & Policy Controls',
      href: '/adminstration-policy-controls',
    },
  },
  {
    workstream: 'Identity & access',
    coordination:
      'Identity source, lifecycle, roles, least privilege, review, recovery, evidence.',
    boundary: {
      type: 'link',
      linkText: 'Identity & Access Management',
      href: '/identity-access-management',
    },
  },
  {
    workstream: 'Enterprise integrations',
    coordination:
      'Connection readiness, mapping, testing, failure, reconciliation, correction propagation.',
    boundary: {
      type: 'link',
      linkText: 'Enterprise Integrations',
      href: '/enterprise-integrations',
    },
  },
  {
    workstream: 'Analytics & reporting',
    coordination:
      'Metric readiness, permissions, privacy, validation, report acceptance.',
    boundary: {
      type: 'link',
      linkText: 'Analytics & Reporting',
      href: '/analytics-reporting',
    },
  },
  {
    workstream: 'Global deployment',
    coordination:
      'Entity, jurisdiction, locale, region, data and support, rollout, and cutover readiness.',
    boundary: {
      type: 'link-with-text',
      linkText: 'Global Deployment',
      href: '/global-deployment',
      suffixText: ' No unverified region claims.',
    },
  },
  {
    workstream: 'Data migration',
    coordination: 'Dependency status and boundary only.',
    boundary: {
      type: 'text',
      text: 'A separate approval-gated service scope. Not included by implication.',
    },
  },
  {
    workstream: 'Training & adoption',
    coordination:
      'Role-based enablement dependency and handoff, only when agreed.',
    boundary: {
      type: 'text',
      text: 'Independently gated.',
    },
  },
  {
    workstream: 'Customer success',
    coordination:
      'Post-handover ownership and review dependency, only where current entitlement exists.',
    boundary: {
      type: 'text',
      text: 'Independently gated.',
    },
  },
  {
    workstream: 'Enterprise support',
    coordination:
      'Support transition, case routing, known issues, current entitlement.',
    boundary: {
      type: 'link-with-text',
      linkText: 'Enterprise Support',
      href: '#enterprise-support',
      suffixText: ' defines current obligations.',
    },
  },
  {
    workstream: 'Procurement & legal',
    coordination:
      'Current terms, artifacts, approvals, restricted access, review dates.',
    boundary: {
      type: 'link',
      linkText: 'Procurement & Legal Resources',
      href: '/procurement-and-legal-resources',
    },
  },
];

export default function WorkstreamRegistry() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Header Section */}
        <div className="max-w-[800px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Scope &amp; Workstream Registry
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            What Implementation May Coordinate —<br className="hidden sm:inline" /> and Who Stays Authoritative
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Implementation coordinates work across these workstreams within approved scope. Each one has an authoritative owner elsewhere in the platform, and coordination never overrides it.
          </p>
        </div>

        {/* Table Container */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-6 w-1/5">Workstream</th>
                  <th className="py-3.5 px-6 w-1/2">May be coordinated within approved scope</th>
                  <th className="py-3.5 px-6 w-3/10">Boundary / authority</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-sm text-slate-600 dark:text-slate-300">
                {registryData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    {/* Workstream Column */}
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white align-top">
                      {row.workstream}
                    </td>

                    {/* Coordination Column */}
                    <td className="py-4 px-6 leading-relaxed align-top">
                      {row.coordination}
                    </td>

                    {/* Boundary / Authority Column */}
                    <td className="py-4 px-6 leading-relaxed align-top">
                      {row.boundary.type === 'text' && (
                        <span>{row.boundary.text}</span>
                      )}

                      {row.boundary.type === 'link' && (
                        <a
                          href={row.boundary.href}
                          className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold hover:underline group"
                        >
                          <span>{row.boundary.linkText}</span>
                          <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </a>
                      )}

                      {row.boundary.type === 'link-with-text' && (
                        <div className="flex flex-wrap items-center gap-x-1">
                          <a
                            href={row.boundary.href}
                            className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold hover:underline group"
                          >
                            <span>{row.boundary.linkText}</span>
                            <span className="transition-transform group-hover:translate-x-0.5">→</span>
                          </a>
                          <span>{row.boundary.suffixText}</span>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}