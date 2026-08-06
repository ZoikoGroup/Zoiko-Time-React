'use client'
import React, { useState } from 'react';

interface MetricCard {
  id: string;
  label: string;
  value: string;
  subtext?: string;
}

interface WorkerRecord {
  id: string;
  worker: string;
  issue: string;
  group: string;
  owner: string;
  status: string;
  statusType: 'pending' | 'needsInput' | 'ready' | 'escalated' | 'approved';
  age: string;
  nextAction: string;
}

const metrics: MetricCard[] = [
  { id: '1', label: 'Timesheets complete', value: '14', subtext: 'of 16' },
  { id: '2', label: 'Attendance exceptions', value: '5' },
  { id: '3', label: 'Approvals due', value: '6' },
  { id: '4', label: 'Missing worker context', value: '2' },
  { id: '5', label: 'Allocation complete', value: '91', subtext: '%' },
  { id: '6', label: 'Payroll readiness', value: 'Cut-off Wed' },
];

const tableData: WorkerRecord[] = [
  {
    id: '1',
    worker: 'D. Okafor',
    issue: 'Unverified exit',
    group: 'North',
    owner: 'You',
    status: 'Pending review',
    statusType: 'pending',
    age: '2d',
    nextAction: 'Request context',
  },
  {
    id: '2',
    worker: 'M. Halvorsen',
    issue: 'Missing project code',
    group: 'North',
    owner: 'You',
    status: 'Needs input',
    statusType: 'needsInput',
    age: '1d',
    nextAction: 'Ask worker',
  },
  {
    id: '3',
    worker: 'S. Iqbal',
    issue: 'Schedule variance',
    group: 'Service desk',
    owner: 'You',
    status: 'Ready to approve',
    statusType: 'ready',
    age: '—',
    nextAction: 'Approve or return',
  },
  {
    id: '4',
    worker: 'K. Duarte',
    issue: 'Break outside policy',
    group: 'Service desk',
    owner: 'Payroll',
    status: 'Escalated',
    statusType: 'escalated',
    age: '3d',
    nextAction: 'Second-line review',
  },
  {
    id: '5',
    worker: 'A. Ferreira',
    issue: 'Amendment after approval',
    group: 'Projects',
    owner: 'You',
    status: 'Reapproved v2',
    statusType: 'approved',
    age: '—',
    nextAction: 'Release to payroll',
  },
];

const filterTags = [
  'Operating period',
  'Organization',
  'Region',
  'Team',
  'Project',
  'Worker type',
  'Owner',
  'State',
];

const viewTabs = [
  'Department summary',
  'Manager queue',
  'Project view',
  'Attendance view',
  'Worker record',
];

export default function TeamManagementWorkspace() {
  const [activeTab, setActiveTab] = useState('Manager queue');

  const getStatusBadgeStyle = (type: WorkerRecord['statusType']) => {
    switch (type) {
      case 'pending':
        return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
      case 'needsInput':
        return 'bg-sky-500/10 text-sky-400 border border-sky-500/20';
      case 'ready':
        return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
      case 'escalated':
        return 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20';
      case 'approved':
        return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
      default:
        return 'bg-slate-700 text-slate-300';
    }
  };

  return (
    <section className="w-full bg-slate-950 text-white py-16 sm:py-20 px-4 sm:px-8 lg:px-16 font-sans">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Content Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Team Management Workspace
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
              See What Is Complete,<br className="hidden sm:inline" />
              What Needs Context, and<br className="hidden sm:inline" />
              What You Can Approve
            </h2>
            <p className="text-slate-400 text-base leading-relaxed pt-1">
              The Team Management Workspace brings team time, attendance, exceptions, worker context, approvals, project allocation, and downstream readiness into one clear view. It does not rank workers, monitor digital behavior, or infer individual productivity.
            </p>
          </div>

          {/* Bullet Checklist */}
          <ul className="flex flex-col gap-3">
            {[
              'Timesheets complete and approvals due',
              'Attendance exceptions with a named owner and age',
              'Missing worker context, requested once',
              'Project allocation completeness and payroll readiness',
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-400 flex items-center justify-center text-emerald-400">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-slate-200 text-base font-semibold leading-snug">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* View Mode Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {viewTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    isActive
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-emerald-500/10 text-emerald-400/80 border border-emerald-500/20 hover:bg-emerald-500/15'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white text-base font-bold rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Request Enterprise Demo
            </button>
            <button className="px-6 py-3.5 border border-white/25 hover:bg-white/5 text-white text-base font-bold rounded-lg transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/50 group">
              <span>See approval controls</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right Dashboard Interactive View */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          
          {/* Top Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {filterTags.map((filter, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-white/[0.06] border border-white/10 rounded-full text-xs font-semibold text-slate-300"
              >
                {filter}
              </span>
            ))}
          </div>

          {/* Key Metrics Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {metrics.map((card) => (
              <div
                key={card.id}
                className="p-3.5 bg-white/[0.04] border border-white/10 rounded-xl flex flex-col justify-between gap-1"
              >
                <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wide leading-tight">
                  {card.label}
                </span>
                <div className="flex items-baseline gap-1 pt-1">
                  <span className="text-2xl font-extrabold text-white">
                    {card.value}
                  </span>
                  {card.subtext && (
                    <span className="text-xs font-semibold text-slate-400">
                      {card.subtext}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Table View */}
          <div className="w-full bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 font-bold uppercase tracking-wider">
                    <th className="px-3 py-3">Worker</th>
                    <th className="px-3 py-3">Issue</th>
                    <th className="px-3 py-3">Group</th>
                    <th className="px-3 py-3">Owner</th>
                    <th className="px-3 py-3">Status</th>
                    <th className="px-3 py-3">Age</th>
                    <th className="px-3 py-3">Next Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.07] text-slate-300">
                  {tableData.map((row) => (
                    <tr key={row.id} className="hover:bg-white/[0.03] transition-colors">
                      <td className="px-3 py-3 font-semibold text-white whitespace-nowrap">
                        {row.worker}
                      </td>
                      <td className="px-3 py-3 text-slate-300 whitespace-nowrap">
                        {row.issue}
                      </td>
                      <td className="px-3 py-3 text-slate-400 whitespace-nowrap">
                        {row.group}
                      </td>
                      <td className="px-3 py-3 text-slate-400 whitespace-nowrap">
                        {row.owner}
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[11px] font-bold inline-block ${getStatusBadgeStyle(
                            row.statusType
                          )}`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-slate-400 whitespace-nowrap">
                        {row.age}
                      </td>
                      <td className="px-3 py-3 text-slate-300 font-medium whitespace-nowrap">
                        {row.nextAction}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer Caption */}
            <div className="px-4 py-2.5 border-t border-white/5 bg-white/[0.01]">
              <p className="text-[11px] text-slate-500">
                Illustrative synthetic data. Status is stated in text as well as color.
              </p>
            </div>
          </div>

          {/* Ethos Footer Note */}
          <p className="text-xs text-slate-500 leading-relaxed pt-1">
            No worker leaderboard, utilization rank, activity score, or &ldquo;top performer&rdquo; visual appears anywhere in the product.
          </p>

        </div>

      </div>
    </section>
  );
}