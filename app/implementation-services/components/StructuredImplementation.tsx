import React from 'react';

interface PrincipleItem {
  title: string;
  description: string;
  proof: string;
}

const principles: PrincipleItem[] = [
  {
    title: 'Align authority',
    description:
      'Workforce policy, access, data, and launch decisions need named owners and accountable approval.',
    proof: 'Proof — role matrix, decision log, stage gate.',
  },
  {
    title: 'Protect record integrity',
    description:
      'Mappings, rules, time, jurisdictions, corrections, and outputs must remain explainable through change.',
    proof: 'Proof — validation, reconciliation, correction propagation.',
  },
  {
    title: 'Respect workers',
    description:
      'Notices, consultation, visibility, correction, accessibility, and human review are designed into the deployment, not added afterwards.',
    proof: 'Proof — communication plan and rights routes.',
  },
  {
    title: 'Control dependencies',
    description:
      'Identity, integrations, data, policy, security, support, and local readiness rarely progress at the same pace.',
    proof: 'Proof — dependency map, blocked state, escalation.',
  },
  {
    title: 'Define completion',
    description:
      'A launch is credible when criteria, unresolved items, evidence, and operational ownership are explicit.',
    proof: 'Proof — acceptance record, limitations, handover.',
  },
  {
    title: 'Support long-term operation',
    description:
      'Administration, support, change, evidence, and review continue long after launch day.',
    proof: 'Proof — runbooks, transition, review cadence.',
  },
];

export default function StructuredImplementation() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-6 lg:px-20 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-9">
        
        {/* Header Section */}
        <div className="max-w-[820px] text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Why Structured Implementation Matters
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Implement with evidence, ownership, and a clear definition of done
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Enterprise implementation is not a single configuration task. It is a governed sequence of decisions, dependencies, tests, communications, approvals, and handovers that must preserve policy authority, worker trust, access control, record integrity, and operational continuity.
          </p>
        </div>

        {/* List of Principles */}
        <div className="w-full flex flex-col gap-3.5">
          {principles.map((item, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col sm:flex-row items-start gap-3 sm:gap-6 transition-colors hover:border-slate-300 dark:hover:border-slate-600"
            >
              {/* Left Title Column */}
              <div className="w-full sm:w-56 flex-shrink-0">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Right Content Column */}
              <div className="flex-1 flex flex-col gap-1.5">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
                <span className="text-xs text-slate-400 dark:text-slate-400 font-medium">
                  {item.proof}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}