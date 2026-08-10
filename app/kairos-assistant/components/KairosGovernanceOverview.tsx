import React from 'react';
import Link from 'next/link';

const permittedRoles = [
  'Help a person find information already available in their authorized scope',
  'Help them understand what a record or policy says',
  'Help them compare governed periods or groups, subject to privacy thresholds',
  'Help them review, by routing to the authoritative object',
];

const prohibitedAuthorities = [
  'Autonomous record change, policy change, approval, or rejection',
  'Payroll outcome or wage calculation',
  'Discipline, misconduct finding, or employment-status determination',
  'Legal conclusion or compliance certification',
  'Worker ranking of any kind',
];

export default function KairosGovernanceOverview() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10 lg:gap-12">
        
        {/* Header Section */}
        <header className="max-w-[820px] text-center flex flex-col items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            What is Kairos Assistant?
          </h2>
          <p className="max-w-[720px] text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Kairos Assistant is the governed question-and-explanation surface for authorized ZoikoTime organization data. A user asks within a permitted scope and receives a source-linked summary or explanation based on available current records. Kairos shows the records, policies, dates, freshness, completeness, and limitations that shaped the response, and can route unresolved or consequential matters to an authorized reviewer. It does not classify time, approve records, change policy, calculate payroll, rank people, or determine performance, discipline, legal status, or compliance.
          </p>
        </header>

        {/* Sub-heading */}
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Kairos explains. Authorized people decide.
          </h3>
        </div>

        {/* Governance Comparison Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Permitted Role Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Permitted role
              </h4>
            </div>

            <ul className="flex flex-col gap-3.5 pl-0 list-none">
              {permittedRoles.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-base shrink-0 select-none mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Prohibited Authority Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-md bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-rose-600 dark:text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Prohibited authority
              </h4>
            </div>

            <ul className="flex flex-col gap-3.5 pl-0 list-none">
              {prohibitedAuthorities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold text-base shrink-0 select-none mt-0.5">
                    ✕
                  </span>
                  <span className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 w-full sm:w-auto">
          <Link
            href="/how-zoikotime-works"
            className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-base rounded-lg border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer text-center"
          >
            See How ZoikoTime Works
          </Link>
          <Link
            href="/responsible-ai"
            className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-base rounded-lg border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer text-center"
          >
            Review AI Governance
          </Link>
        </div>

      </div>
    </section>
  );
}