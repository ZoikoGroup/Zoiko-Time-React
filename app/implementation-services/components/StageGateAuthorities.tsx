import React from 'react';
import Link from 'next/link';

interface DomainCard {
  title: string;
  description: string;
  isApprovalCard?: boolean;
}

const domainCards: DomainCard[] = [
  {
    title: 'Security',
    description:
      'Architecture, identity, access, integrations, secrets, logging, incident, continuity, open risk, owner, decision, evidence.',
  },
  {
    title: 'Privacy',
    description:
      'Purpose, data categories, minimization, roles, access, transfers, retention, support access, notices, rights, corrections.',
  },
  {
    title: 'Legal & labor',
    description:
      'Applicable review, consultation or representation needs, terms, jurisdiction boundaries, unresolved questions, accountable owner.',
  },
  {
    title: 'Procurement',
    description:
      'Current service description, order or SOW, DPA, support terms, approved assurance resources, review dates.',
  },
  {
    title: 'Accessibility',
    description:
      'WCAG 2.2 AA for product and page — plus accessible project artifacts, meetings, forms, tables, test evidence, and support.',
  },
  {
    title: 'AI & Kairos',
    description:
      'Approved boundary, human authority, data access, logging, and stated limitations. No automated consequential decisions.',
  },
  {
    title: 'Worker communication',
    description:
      'Purpose, the anti-surveillance invariant, data flow, notice, consultation, visibility, correction, escalation, language, accessibility.',
  },
  {
    title: 'Approval',
    description:
      'Named authority, scope, result, conditions, expiry or review, evidence — and a defined route when approval is withheld.',
    isApprovalCard: true,
  },
];

export default function StageGateAuthorities() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-900 py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Context & Principles */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Section Header */}
          <div className="flex flex-col gap-3">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Security, Privacy, Legal, Accessibility &amp; Worker Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
              These Functions Are Stage-Gate Authorities, Not Trust Badges
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Each domain below owns a gate. If its approval is withheld, the engagement records that fact and routes it — it does not proceed quietly.
            </p>
          </div>

          {/* Key Invariant Highlight Box */}
          <div className="p-5 sm:p-6 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/50 flex items-start gap-3.5">
            <div className="w-6 h-6 rounded-full bg-emerald-500/15 dark:bg-emerald-400/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-xs shrink-0 mt-0.5">
              ✓
            </div>
            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-relaxed">
              No screenshots, keystroke content, URL history, application names, or clipboard data — under any tier or configuration. Implementation is not an exception to this.
            </p>
          </div>

          {/* Action / Principle Badges */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link href="#" className="px-5 py-3.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-sm text-slate-900 dark:text-white font-bold text-sm">
              Anti-Surveillance Principles
            </Link>
            <Link href="/human-in-command" className="px-5 py-3.5 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700/80 shadow-sm text-slate-900 dark:text-white font-bold text-sm">
              Human-in-Command Controls
            </Link>
          </div>

          {/* Compliance Disclaimer Footer */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-700/80 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            <strong className="font-bold text-slate-700 dark:text-slate-300">
              No universal compliance claim.{' '}
            </strong>
            Implementation may support configuration, documentation, review, and evidence. It does not make your organization compliant with every law, agreement, consultation requirement, accessibility obligation, security standard, or industry rule.
          </div>
        </div>

        {/* Right Column: Gate Domains Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {domainCards.map((card, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border transition-all duration-200 flex flex-col gap-2 ${
                card.isApprovalCard
                  ? 'bg-slate-100 dark:bg-slate-800/80 border-slate-300 dark:border-slate-600 shadow-sm'
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md'
              }`}
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}