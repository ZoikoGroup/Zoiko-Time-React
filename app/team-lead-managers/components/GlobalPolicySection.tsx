import React from 'react';

interface PolicyRow {
  dimension: string;
  profile: string;
  effectiveDate: string;
  owner: string;
  status: 'Approved' | 'Assigned' | 'Pending review';
  affectedRecords: string;
}

const policyData: PolicyRow[] = [
  {
    dimension: 'Organization / entity',
    profile: 'Group baseline v6',
    effectiveDate: '01 Jan 2026',
    owner: 'Global operations',
    status: 'Approved',
    affectedRecords: 'All',
  },
  {
    dimension: 'Region / location',
    profile: 'EMEA rest & break v4',
    effectiveDate: '01 Jul 2026',
    owner: 'Regional manager',
    status: 'Approved',
    affectedRecords: '4,120',
  },
  {
    dimension: 'Team',
    profile: 'Field North review roles v3',
    effectiveDate: '01 Aug 2026',
    owner: 'Team lead',
    status: 'Assigned',
    affectedRecords: '320',
  },
  {
    dimension: 'Worker type',
    profile: 'Contractor required fields v2',
    effectiveDate: '15 Jul 2026',
    owner: 'Vendor operations',
    status: 'Pending review',
    affectedRecords: '612',
  },
  {
    dimension: 'Project / customer',
    profile: 'Attribution required v5',
    effectiveDate: '01 Jun 2026',
    owner: 'PMO',
    status: 'Approved',
    affectedRecords: '2,340',
  },
  {
    dimension: 'Approval cut-off',
    profile: 'Two-line review, Wed 18:00',
    effectiveDate: '01 Apr 2026',
    owner: 'Shared services',
    status: 'Approved',
    affectedRecords: 'All',
  },
];

const renderStatusBadge = (status: PolicyRow['status']) => {
  switch (status) {
    case 'Approved':
      return (
        <span className="px-2.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full text-xs font-bold inline-block">
          Approved
        </span>
      );
    case 'Assigned':
      return (
        <span className="px-2.5 py-0.5 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800 rounded-full text-xs font-bold inline-block">
          Assigned
        </span>
      );
    case 'Pending review':
      return (
        <span className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800 rounded-full text-xs font-bold inline-block">
          Pending review
        </span>
      );
  }
};

export default function GlobalPolicySection() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <div className="max-w-[800px] text-center flex flex-col items-center gap-4">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Global Policy &amp; Operating Complexity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
            Apply Consistent Controls Across Teams,<br className="hidden sm:inline" />
            Regions, and Worker Types
          </h2>
          <p className="max-w-[644px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            ZoikoTime can apply configured, effective-dated time and review policies by organization, location, team, schedule, project, pay group, or worker type where supported &mdash; so two managers in two regions apply the same rule the same way. Local legal interpretation and payroll calculation remain outside this page&apos;s promise.
          </p>
        </div>

        {/* Policy Matrix Table Card */}
        <div className="w-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                  <th className="py-3.5 px-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Dimension</th>
                  <th className="py-3.5 px-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Policy profile</th>
                  <th className="py-3.5 px-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Effective date</th>
                  <th className="py-3.5 px-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Owner</th>
                  <th className="py-3.5 px-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Approval</th>
                  <th className="py-3.5 px-4 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Affected records</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700/60">
                {policyData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-700/30 transition-colors">
                    <td className="py-3.5 px-4 text-sm font-semibold text-slate-900 dark:text-white whitespace-nowrap">{row.dimension}</td>
                    <td className="py-3.5 px-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">{row.profile}</td>
                    <td className="py-3.5 px-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">{row.effectiveDate}</td>
                    <td className="py-3.5 px-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">{row.owner}</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">{renderStatusBadge(row.status)}</td>
                    <td className="py-3.5 px-4 text-sm text-slate-600 dark:text-slate-300 whitespace-nowrap">{row.affectedRecords}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Table Footer Caption */}
          <div className="p-4 bg-slate-50/50 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700 text-xs text-slate-500 dark:text-slate-400">
            Illustrative policy matrix. Every row carries an owner, an effective date, and a change history.
          </div>
        </div>

        {/* 3 Scope / Claim Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
          
          <div className="p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
              What this page claims
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Supports configurable global operating structures where available, by group and location.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
              What it does not claim
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              No &ldquo;globally compliant,&rdquo; no &ldquo;works in every country,&rdquo; no local-law advice.
            </p>
          </div>

          <div className="p-6 bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
              Gated until operational
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              Data residency commitments and works-council resources appear only once contractually live and approved.
            </p>
          </div>

        </div>

        {/* Action Button Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 w-full sm:w-auto">
          <button className="w-full sm:w-auto px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-base rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Enterprise Overview
          </button>
          <button className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
            Administration &amp; Policy Controls
          </button>
          <button className="w-full sm:w-auto px-6 py-3.5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold text-base rounded-lg border border-slate-200 dark:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
}