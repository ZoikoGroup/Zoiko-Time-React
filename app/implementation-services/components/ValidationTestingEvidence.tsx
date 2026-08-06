import React from 'react';

interface TestDomainRow {
  domain: string;
  purpose: string;
  evidence: string;
}

const tableData: TestDomainRow[] = [
  {
    domain: 'Configuration',
    purpose:
      'Verify approved policy, scope, inheritance, effective date, exceptions, and explanations.',
    evidence: 'Versioned result and approver',
  },
  {
    domain: 'Identity & access',
    purpose:
      'Verify authentication, role scope, lifecycle, privilege, recovery, denial, and revocation.',
    evidence: 'Access test and evidence',
  },
  {
    domain: 'Integration',
    purpose:
      'Verify authorization, schema, mapping, duplicates, ordering, retry, reconciliation, correction.',
    evidence: 'Test run, safe evidence, defect record',
  },
  {
    domain: 'Time & locale',
    purpose:
      'Verify time zone, DST, calendar, cutover, classification, correction, and export.',
    evidence: 'Scenario matrix and result',
  },
  {
    domain: 'Privacy & security',
    purpose:
      'Verify minimization, access, retention, support access, logging, incident, and safe failure.',
    evidence: 'Review and test evidence',
  },
  {
    domain: 'Accessibility',
    purpose:
      'Verify keyboard, screen reader, zoom and reflow, contrast, forms, tables, status, errors, artifacts.',
    evidence: 'Accessibility report and remediation',
  },
  {
    domain: 'Worker journey',
    purpose:
      'Verify notice, view, explanation, correction, pending review, outcome, escalation, language.',
    evidence: 'Synthetic journey evidence',
  },
  {
    domain: 'Operational',
    purpose:
      'Verify monitoring, alert, support, incident, status, runbook, rollback, continuity, handover.',
    evidence: 'Operational readiness record',
  },
  {
    domain: 'Commercial & terms',
    purpose:
      'Verify deliverables, acceptance authority, support transition, entitlement, and current terms.',
    evidence: 'Approved commercial references',
  },
];

export default function ValidationTestingEvidence() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-10">
        
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto text-center flex flex-col gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Validation, Testing &amp; Evidence
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Validation Covers More Than Connectivity
          </h2>
          <p className="max-w-[644px] mx-auto text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Nine test domains, each producing evidence that a named person can review. Worker journeys and accessibility are tested, not assumed.
          </p>
        </div>

        {/* Test Domains Table */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[768px] border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-slate-200 text-xs font-bold uppercase tracking-wider">
                  <th className="py-3.5 px-6 w-[20%]">Test domain</th>
                  <th className="py-3.5 px-6 w-[55%]">Purpose</th>
                  <th className="py-3.5 px-6 w-[25%]">Evidence</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60 text-sm">
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors"
                  >
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-white align-top">
                      {row.domain}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                      {row.purpose}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-300 leading-relaxed align-top">
                      {row.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Evidence Safety Footer Note */}
        <div className="max-w-[700px] pt-4 border-t border-slate-200 dark:border-slate-700/80 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          <strong className="font-bold text-slate-700 dark:text-slate-300">
            Evidence safety.{' '}
          </strong>
          Evidence minimizes personal and sensitive data. Screenshots, logs, exports, recordings, and attachments each require a purpose, access control, redaction, retention, and secure handling. Worker data is never copied into marketing or generic project tools.
        </div>

      </div>
    </section>
  );
}