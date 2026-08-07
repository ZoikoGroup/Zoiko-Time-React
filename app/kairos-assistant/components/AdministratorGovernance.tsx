import React from 'react';

interface RegisterRow {
  category: string;
  owner: string;
  purposes: string;
  status: 'Eligible' | 'Stale' | 'Excluded';
}

const sourceRegister: RegisterRow[] = [
  {
    category: 'Timesheet register',
    owner: 'Workforce ops',
    purposes: 'Approval work, own-record',
    status: 'Eligible',
  },
  {
    category: 'Policy library',
    owner: 'Policy owner',
    purposes: 'Policy explanation',
    status: 'Eligible',
  },
  {
    category: 'Attendance feed',
    owner: 'Data admin',
    purposes: 'Record-quality review',
    status: 'Stale',
  },
  {
    category: 'Case & investigation files',
    owner: 'Legal',
    purposes: '—',
    status: 'Excluded',
  },
  {
    category: 'Compensation detail',
    owner: 'Finance',
    purposes: '—',
    status: 'Excluded',
  },
];

const governanceFeatures = [
  'Eligible source categories, with owner, version, and availability',
  'Roles, purposes, and permitted question classes',
  'Exclusions — sensitive, restricted, legally held, and privileged categories',
  'Privacy thresholds, retention, review requirements, and logging',
];

export default function AdministratorGovernance() {
  return (
    <section className="w-full bg-slate-900 text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 font-sans transition-colors">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Governance Info & Feature Checklist */}
        <div className="flex flex-col gap-6 sm:gap-8">
          
          <header className="flex flex-col gap-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Administrator Governance Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Administrators Decide What Kairos Can Reach
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Eligible sources, roles, purposes, exclusions, retention, review requirements, and logging are all configured — and none of them defaults to open.
            </p>
          </header>

          {/* Checklist Feature Items */}
          <ul className="flex flex-col gap-3.5 list-none pl-0">
            {governanceFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-emerald-950 border border-emerald-500/50 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm sm:text-base font-semibold text-slate-200 leading-snug">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

        </div>

        {/* Right Column: Source Eligibility Register Table */}
        <div className="flex flex-col gap-3 w-full bg-slate-950/60 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[480px]">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                  <th className="pb-3 px-2">Source category</th>
                  <th className="pb-3 px-2">Owner</th>
                  <th className="pb-3 px-2">Purposes</th>
                  <th className="pb-3 px-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {sourceRegister.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-2 font-semibold text-white">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-2 text-slate-300">
                      {row.owner}
                    </td>
                    <td className="py-3.5 px-2 text-slate-300">
                      {row.purposes}
                    </td>
                    <td className="py-3.5 px-2 text-right">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border ${
                          row.status === 'Eligible'
                            ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800'
                            : row.status === 'Stale'
                            ? 'bg-amber-950/80 text-amber-400 border-amber-800'
                            : 'bg-rose-950/80 text-rose-400 border-rose-800'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-2">
            <p className="text-xs text-slate-400 leading-relaxed">
              Source eligibility register, synthetic. An excluded category is excluded server-side. It does not appear in an answer, in a citation, or in an error message that would reveal its existence in a sensitive way.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}