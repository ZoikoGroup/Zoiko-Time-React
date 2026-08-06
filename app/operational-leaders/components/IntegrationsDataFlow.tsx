import React from 'react';
import { ArrowRight, Info } from 'lucide-react';

interface FlowStep {
  stepNumber: string;
  stepName: string;
  title: string;
  description: string;
}

interface CategoryCard {
  title: string;
  items: string[];
}

const flowSteps: FlowStep[] = [
  {
    stepNumber: '01',
    stepName: 'Sources',
    title: 'Systems of record',
    description:
      'Identity, schedule, project, and policy context from your existing platforms.',
  },
  {
    stepNumber: '02',
    stepName: 'Context',
    title: 'Identity & policy layer',
    description:
      'Workers, groups, worker types, effective-dated policy versions.',
  },
  {
    stepNumber: '03',
    stepName: 'ZoikoTime',
    title: 'Capture → review → approval',
    description:
      'Classification, exception routing, human review, versioned approval.',
  },
  {
    stepNumber: '04',
    stepName: 'Outputs',
    title: 'Authorized destinations',
    description:
      'Payroll, billing, ERP, project, and data platforms with evidence history.',
  },
];

const categories: CategoryCard[] = [
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

export default function IntegrationsDataFlow() {
  return (
    <section className="w-full bg-slate-50 py-16 px-6 lg:px-20 font-sans">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header Section */}
        <div className="max-w-[820px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 text-xs font-bold uppercase tracking-wider">
            Integrations &amp; Operational Data Flow
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Connect Approved Workforce Records to the Systems That Run Your Business
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 text-base leading-relaxed">
            ZoikoTime can receive configured identity, schedule, project, or policy context and provide approved time, attendance, project, and evidence records through supported APIs, files, or connectors. Your organization retains ownership of mappings, permissions, and downstream processing.
          </p>
        </div>

        {/* 4-Step Process Flow */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {flowSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-2 group"
            >
              <div className="text-emerald-600 text-xs font-extrabold uppercase tracking-wide">
                {step.stepNumber} · {step.stepName}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.description}
              </p>

              {/* Step Flow Arrow Indicator (hidden on last item and small screens) */}
              {idx < flowSteps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400 z-10 bg-white rounded-full p-0.5" />
              )}
            </div>
          ))}
        </div>

        {/* Grid of Data Category Detail Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col gap-3.5"
            >
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {cat.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Phase 1 Notice Banner */}
        <div className="w-full bg-slate-100/80 border border-slate-200/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-slate-800 text-sm font-semibold leading-relaxed">
            Generic category cards are the Phase 1 default. Vendor logos and “native,” “real-time,” or “two-way” language appear only with permission and production evidence.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-2">
          <button
            type="button"
            className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-bold text-base rounded-lg transition-colors shadow-sm"
          >
            Explore Integrations
          </button>
        </div>

      </div>
    </section>
  );
}