'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Shield,
  Globe,
  GitPullRequest,
  Clock,
  History,
  CheckCircle2,
  AlertTriangle,
  FileEdit,
} from 'lucide-react';

interface PolicyRow {
  policy: string;
  scope: string;
  jurisdiction: string;
  version: string;
  status: 'Active' | 'Jurisdiction review' | 'Draft' | 'Pending approval';
}

const policyData: PolicyRow[] = [
  {
    policy: 'Meal & rest',
    scope: 'US-East · Hourly',
    jurisdiction: 'US-East',
    version: 'v4',
    status: 'Active',
  },
  {
    policy: 'Overtime',
    scope: 'UK Ops · Monthly',
    jurisdiction: 'UK',
    version: 'v2',
    status: 'Active',
  },
  {
    policy: 'Break rules',
    scope: 'APAC · Contractor',
    jurisdiction: 'APAC',
    version: 'v1',
    status: 'Jurisdiction review',
  },
  {
    policy: 'Attendance',
    scope: 'Global',
    jurisdiction: 'Multi',
    version: 'v3',
    status: 'Draft',
  },
  {
    policy: 'Retention',
    scope: 'Organization-wide',
    jurisdiction: '—',
    version: 'v2',
    status: 'Pending approval',
  },
];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('Policies');

  const navItems = [
    { name: 'Workspace', icon: Globe },
    { name: 'Policies', icon: FileText },
    { name: 'Roles & permissions', icon: Shield },
    { name: 'Jurisdictions', icon: Globe },
    { name: 'Change control', icon: GitPullRequest },
    { name: 'Retention & legal hold', icon: Clock },
    { name: 'Audit log', icon: History },
  ];

  const getStatusBadge = (status: PolicyRow['status']) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-teal-700 dark:bg-emerald-950/60 dark:text-emerald-400">
            <CheckCircle2 className="h-3 w-3" />
            Active
          </span>
        );
      case 'Jurisdiction review':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">
            <AlertTriangle className="h-3 w-3" />
            Jurisdiction review
          </span>
        );
      case 'Draft':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-400">
            <FileEdit className="h-3 w-3" />
            Draft
          </span>
        );
      case 'Pending approval':
        return (
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-bold text-amber-700 dark:bg-amber-950/60 dark:text-amber-400">
            <Clock className="h-3 w-3" />
            Pending approval
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-16 pb-20 dark:from-gray-950 dark:to-gray-900 font-['Poppins',sans-serif]">
      {/* Background Glow Overlay */}
      <div
        className="pointer-events-none absolute left-1/2 -top-40 h-[384px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(13,148,136,0.12)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Text Section */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Workforce Truth Infrastructure
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:text-5xl sm:leading-[1.15] dark:text-white">
            Configure policy, permissions, and change control — with{' '}
            <span className="text-teal-600 dark:text-teal-400">full accountability</span>
          </h1>

          <p className="mt-5 text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Administration &amp; Policy Controls is where organizations set the deterministic rules,
            roles, jurisdictions, retention, and approvals that govern every workforce record —
            with human authority and a complete audit trail.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/demo"
              className="flex h-11 w-full sm:w-auto items-center justify-center rounded-[10px] bg-teal-600 px-6 text-base font-semibold text-white shadow-[0px_6px_16px_0px_rgba(16,162,141,0.28)] transition-all hover:bg-teal-500 active:scale-[0.98]"
            >
              Request Enterprise Demo
            </Link>

            <Link
              href="/signup"
              className="flex h-11 w-full sm:w-auto items-center justify-center rounded-[10px] bg-white px-6 text-base font-semibold text-slate-800 outline outline-1 outline-offset-[-1px] outline-gray-300 transition-all hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:outline-gray-700 dark:hover:bg-gray-700 active:scale-[0.98]"
            >
              Start Free
            </Link>
          </div>

          <p className="mt-4 text-xs font-normal text-gray-500 dark:text-gray-400">
            30-day trial. Human authority remains controlling. Shared responsibility applies. ·{' '}
            <a href="#how-it-works" className="font-semibold text-teal-700 dark:text-teal-400 hover:underline">
              See how it works
            </a>
          </p>
        </div>

        {/* Dashboard Preview Window */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-white shadow-[0px_30px_60px_0px_rgba(14,31,61,0.18)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
          {/* Top Bar */}
          <div className="flex h-11 items-center gap-2 bg-slate-800 px-4 text-white dark:bg-gray-800">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
            </div>
            <span className="ml-3 text-xs font-medium text-white/90">
              ZoikoTime · Administration &amp; Policy Controls
            </span>
          </div>

          {/* App Body Layout */}
          <div className="flex flex-col md:flex-row min-h-[400px]">
            {/* App Sidebar */}
            <aside className="w-full md:w-56 bg-gray-50 p-3 border-r border-slate-200 dark:border-gray-800 dark:bg-gray-900/50 shrink-0">
              <div className="mb-4 px-3 py-2 text-xs font-extrabold tracking-wider text-slate-800 dark:text-white">
                ZOIKO<span className="text-teal-600 dark:text-teal-400">TIME</span>
              </div>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveTab(item.name)}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-xs font-medium transition-all ${
                        isActive
                          ? 'bg-white text-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:bg-gray-800 dark:text-white'
                          : 'text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50'
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-gray-400'}`} />
                      <span className="truncate">{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Main Content Dashboard Area */}
            <main className="flex-1 p-4 sm:p-6 overflow-x-auto">
              {/* Dashboard Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  Policies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 dark:bg-amber-950/50 dark:text-amber-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                    2 pending approval
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-teal-700 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    Segregation of duties on
                  </span>
                </div>
              </div>

              {/* Policy Table */}
              <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-gray-800">
                      <th scope="col" className="pb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                        Policy
                      </th>
                      <th scope="col" className="pb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                        Scope
                      </th>
                      <th scope="col" className="pb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                        Jurisdiction
                      </th>
                      <th scope="col" className="pb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400">
                        Version
                      </th>
                      <th scope="col" className="pb-2 text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 text-right">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-gray-800">
                    {policyData.map((row) => (
                      <tr key={row.policy} className="hover:bg-slate-50/50 dark:hover:bg-gray-800/30">
                        <td className="py-3 text-xs font-medium text-slate-800 dark:text-gray-200">
                          {row.policy}
                        </td>
                        <td className="py-3 text-xs text-slate-600 dark:text-gray-300">
                          {row.scope}
                        </td>
                        <td className="py-3 text-xs text-slate-600 dark:text-gray-300">
                          {row.jurisdiction}
                        </td>
                        <td className="py-3 text-xs text-slate-600 dark:text-gray-300">
                          {row.version}
                        </td>
                        <td className="py-3 text-xs text-right">
                          {getStatusBadge(row.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Dashboard Footer Note */}
              <p className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400 leading-normal">
                Deterministic, policy-bound, jurisdiction-aware — every change carries author, reason, version, and an audit event. No worker monitoring.
              </p>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}