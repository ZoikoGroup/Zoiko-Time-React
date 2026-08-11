import React from 'react';
import Link from 'next/link';

interface RoleUseCase {
  role: string;
  description: string;
}

const roleUseCases: RoleUseCase[] = [
  {
    role: 'Reviewers & managers',
    description: 'An assigned queue with evidence before action controls.',
  },
  {
    role: 'Finance & payroll',
    description:
      'Approved versions released with acknowledgment and reconciliation.',
  },
  {
    role: 'HR & people teams',
    description: 'Correction rights and neutral language as product behavior.',
  },
  {
    role: 'IT & identity',
    description: 'Roles, scopes, delegation, and separation of duties.',
  },
  {
    role: 'Privacy & legal',
    description:
      'Minimum-necessary fields, retention qualification, evidence limits.',
  },
  {
    role: 'Audit',
    description: 'Versions, actors, reasons, decisions, and handoff history.',
  },
  {
    role: 'Procurement',
    description: 'Controlled evidence and current commercial terms.',
  },
  {
    role: 'Enterprise overview',
    description: 'Administration, deployment, and support pathways.',
  },
];

const customerLinks = [
  { label: 'Open Timesheets', href: '#' },
  { label: 'Documentation', href: '/product-documentation' },
  { label: 'Service Status', href: '/system-status' },
  { label: 'Release Notes', href: '/release-notes' },
  { label: 'Help Center', href: '/help-center' },
  { label: 'Contact Support', href: '/contact' },
];

export default function EnterpriseAndCTASection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-12 lg:gap-16 items-center">
        
        {/* Top Header & Role Use Cases Grid */}
        <div className="w-full flex flex-col items-center gap-10">
          <header className="max-w-[760px] text-center flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Enterprise Readiness &amp; Role-Based Use Cases
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Who this serves, and where it connects
            </h2>
          </header>

          {/* 8-Card Responsive Use Case Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {roleUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {useCase.role}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Split CTA Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
          
          {/* Left Column: Get Started */}
          <div className="flex flex-col gap-4">
            <header className="flex flex-col gap-1">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                Ready to look closer?
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                Start with one period
              </h3>
            </header>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Start Free lets you assemble a period, raise a correction, route an approval, and follow the version history end to end.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/start-free"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-emerald-400 focus:outline-none"
              >
                Start Free
              </Link>
              <Link
                href="/request-enterprise-demo"
                className="px-6 py-3.5 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 font-bold text-base rounded-xl shadow-sm transition-all focus:ring-2 focus:ring-slate-300 focus:outline-none"
              >
                Request Enterprise Demo
              </Link>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-1 leading-normal">
              Honest expectation: approval topology, integrations, and jurisdiction handling depend on verified configuration and current availability.
            </p>
          </div>

          {/* Right Column: Existing Customers */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Already a customer?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Task-first routes, none requiring a marketing form.
              </p>
            </div>

            {/* Quick Links List */}
            <nav aria-label="Customer Links">
              <ul className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800">
                {customerLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="py-2.5 flex items-center justify-between text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
                    >
                      <span>{link.label}</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>

      </div>
    </section>
  );
}