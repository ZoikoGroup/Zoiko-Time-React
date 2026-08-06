import React from 'react';

// Data structures for clear code organization
interface MetricCard {
  label: string;
  count: number;
}

interface WorkstreamRow {
  workstream: string;
  owner: string;
  stage: string;
  nextDecision: string;
  status: 'Ready' | 'Needs decision' | 'Blocked' | 'Needs owner' | 'At risk' | 'Accepted w/ conditions';
}

const metrics: MetricCard[] = [
  { label: 'Ready', count: 9 },
  { label: 'Needs owner', count: 2 },
  { label: 'Needs decision', count: 4 },
  { label: 'Blocked', count: 1 },
  { label: 'Accepted w/ conditions', count: 3 },
  { label: 'At risk', count: 2 },
];

const workstreamData: WorkstreamRow[] = [
  {
    workstream: 'Governance & program',
    owner: 'Exec sponsor',
    stage: '02',
    nextDecision: 'Approve decision rights',
    status: 'Ready',
  },
  {
    workstream: 'Organization & policy',
    owner: 'A. Weber',
    stage: '05',
    nextDecision: 'Confirm exception expiry',
    status: 'Ready',
  },
  {
    workstream: 'Identity & access',
    owner: 'IT lead',
    stage: '05',
    nextDecision: 'Role scope sign-off',
    status: 'Needs decision',
  },
  {
    workstream: 'Enterprise integrations',
    owner: 'Payroll systems',
    stage: '05',
    nextDecision: 'Mapping authority',
    status: 'Blocked',
  },
  {
    workstream: 'Worker communication',
    owner: 'Unassigned',
    stage: '03',
    nextDecision: 'Assign owner',
    status: 'Needs owner',
  },
  {
    workstream: 'Analytics & reporting',
    owner: 'Ops analyst',
    stage: '04',
    nextDecision: 'Report acceptance',
    status: 'At risk',
  },
];

const featurePoints = [
  'Stage gates with state, owner, required decision, evidence completeness',
  'Decision queue with impact, authority, options, and escalation',
  'RAID register — risks, assumptions, issues, dependencies',
  'Acceptance, launch, and handover panels with evidence references',
  'Attributable activity — changes, approvals, exports, access, retention state',
];

const filterBadges = [
  'Ready',
  'Needs owner',
  'Needs decision',
  'Blocked',
  'Accepted with conditions',
];

export default function DeliveryCenter() {
  // Utility function to color status tags in the table
  const getStatusBadgeStyle = (status: WorkstreamRow['status']) => {
    switch (status) {
      case 'Ready':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Needs decision':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/20';
      case 'Blocked':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Needs owner':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
      case 'At risk':
        return 'bg-blue-400/10 text-blue-300 border-blue-400/20';
      default:
        return 'bg-slate-700 text-slate-300 border-slate-600';
    }
  };

  return (
    <section className="w-full bg-slate-950 text-white py-16 lg:py-20 px-6 sm:px-12 lg:px-20 font-sans">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-start">
        
        {/* Left Column: Overview & Features */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Implementation Delivery Center
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              One Workspace for Gates,<br className="hidden sm:inline" /> Decisions, Risk, and<br className="hidden sm:inline" /> Acceptance
            </h2>
            <p className="text-slate-300 text-base leading-relaxed max-w-[640px] pt-1">
              Delivery runs in a governed workspace, not a shared inbox. Readiness is reported as counts by domain — there is no single opaque delivery score.
            </p>
          </div>

          {/* Checklist Feature List */}
          <ul className="flex flex-col gap-3.5 py-2">
            {featurePoints.map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 size-4 rounded border border-emerald-400 flex items-center justify-center">
                  <svg
                    className="size-2.5 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-base font-semibold leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {filterBadges.map((badge, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 rounded-lg border border-emerald-500/30"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-3">
            <button className="px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-base rounded-lg transition-colors shadow-sm">
              Request Enterprise Demo
            </button>
          </div>
        </div>

        {/* Right Column: Readiness Dashboard & Synthetic Table */}
        <div className="flex flex-col gap-6 w-full">
          {/* Section Subheader */}
          <div className="flex flex-col gap-1">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Readiness by domain — counts, not a score
            </span>
          </div>

          {/* Domain Readiness Metric Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3 bg-white/5 rounded-xl border border-white/10 flex flex-col gap-1"
              >
                <span className="text-slate-400 text-xs font-semibold tracking-wide">
                  {m.label}
                </span>
                <span className="text-white text-xl font-extrabold leading-tight">
                  {m.count}
                </span>
              </div>
            ))}
          </div>

          {/* Synthetic Workstream Board Table */}
          <div className="mt-2 bg-white/5 rounded-2xl border border-white/10 p-4 sm:p-5 overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <th className="pb-3 pr-2">Workstream</th>
                  <th className="pb-3 px-2">Customer owner</th>
                  <th className="pb-3 px-2 text-center">Stage</th>
                  <th className="pb-3 px-2">Next decision</th>
                  <th className="pb-3 pl-2 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-xs">
                {workstreamData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 pr-2 font-semibold text-white">
                      {row.workstream}
                    </td>
                    <td className="py-3.5 px-2 text-slate-300">
                      {row.owner}
                    </td>
                    <td className="py-3.5 px-2 text-center text-slate-300 font-mono">
                      {row.stage}
                    </td>
                    <td className="py-3.5 px-2 text-slate-300">
                      {row.nextDecision}
                    </td>
                    <td className="py-3.5 pl-2 text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[11px] font-bold border ${getStatusBadgeStyle(
                          row.status
                        )}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="mt-4 text-[11px] text-slate-400 leading-relaxed italic">
              Workstream board, synthetic. Fictitious organizations, people, dates, and values — no implied customers, staffing, capacity, or fixed timelines.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}