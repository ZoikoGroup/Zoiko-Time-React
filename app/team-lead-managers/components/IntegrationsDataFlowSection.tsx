import Link from "next/link";
import React from 'react';

interface Step {
  number: string;
  badge: string;
  title: string;
  description: string;
}

interface DetailCard {
  title: string;
  items: string[];
}

const flowSteps: Step[] = [
  {
    number: '01',
    badge: 'Sources',
    title: 'Systems of record',
    description: 'Identity, schedule, project, and policy context from your existing platforms.',
  },
  {
    number: '02',
    badge: 'Context',
    title: 'Identity & policy layer',
    description: 'Workers, teams, worker types, effective-dated policy versions.',
  },
  {
    number: '03',
    badge: 'ZoikoTime',
    title: 'Capture → review → approval',
    description: 'Classification, exception routing, manager review, versioned approval.',
  },
  {
    number: '04',
    badge: 'Outputs',
    title: 'Authorized destinations',
    description: 'Payroll, billing, ERP, project, and reporting systems with evidence history.',
  },
];

const detailCards: DetailCard[] = [
  {
    title: 'Inbound identity',
    items: [
      'Stable identifier and status',
      'Team, organization, manager',
      'Worker type and effective date',
      'Named source of truth',
    ],
  },
  {
    title: 'Schedule / policy context',
    items: [
      'Schedule or expectation',
      'Location or group',
      'Policy version and precedence',
      'Owner',
    ],
  },
  {
    title: 'Project context',
    items: [
      'Project, task, customer, cost code',
      'Active dates',
      'Required fields',
      'Authorization',
    ],
  },
  {
    title: 'Approved record output',
    items: [
      'Record and worker ID, period',
      'Start, end, duration, break states',
      'Project fields',
      'Approval state, version, timestamps',
    ],
  },
  {
    title: 'Evidence output',
    items: [
      'Change history and actor',
      'Reason and policy version',
      'Review status and references',
      'Access control',
    ],
  },
  {
    title: 'Operational telemetry',
    items: [
      'Run ID and validation result',
      'Counts, failures, retries',
      'Reconciliation state',
      'Alerting and logs',
    ],
  },
];

export default function IntegrationsDataFlowSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-12">
        
        {/* Section Header */}
        <div className="max-w-[820px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Integrations &amp; Team Data Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Send Approved Team Records to Payroll,<br className="hidden sm:inline" />
            Billing, and Project Systems
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            ZoikoTime can receive configured identity, schedule, project, or policy context and provide approved time, attendance, project, and evidence records through supported APIs, files, or connectors. Your organization retains ownership of mappings, permissions, and downstream processing.
          </p>
        </div>

        {/* 4-Step Pipeline Flow */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {flowSteps.map((step, index) => (
            <div
              key={step.number}
              className="relative p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2">
                <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                  {step.number} &middot; {step.badge}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Directional Arrow (Visible on desktop between steps) */}
              {index < flowSteps.length - 1 && (
                <div
                  className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-emerald-500 font-bold text-lg z-10"
                  aria-hidden="true"
                >
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detail Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-xs bg-emerald-400 shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Action Call to Action */}
        <div className="flex justify-center pt-2 w-full sm:w-auto">
          <Link href="/enterprise-integrations" className="w-full sm:w-auto px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Explore Integrations
          </Link>
        </div>

      </div>
    </section>
  );
}
