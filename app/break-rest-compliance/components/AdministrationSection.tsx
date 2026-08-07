'use client'
import React, { useState } from 'react';

const navItems = [
  'Jurisdiction Packs',
  'Agreement Terms',
  'Manual Rules',
  'Version History',
  'Publish Queue',
];

interface PolicyPack {
  title: string;
  meta: string;
  status: 'Live' | 'Scheduled' | 'Draft' | 'Archived';
  statusBg: string;
  statusTextColor: string;
}

const policyPacks: PolicyPack[] = [
  {
    title: 'CA — Meal Break Pack v6',
    meta: 'Effective Aug 1, 2026',
    status: 'Live',
    statusBg: 'bg-emerald-50 dark:bg-emerald-950/50',
    statusTextColor: 'text-teal-700 dark:text-teal-400',
  },
  {
    title: 'NY — Rest Period Pack v3',
    meta: 'Effective Sep 1, 2026',
    status: 'Scheduled',
    statusBg: 'bg-indigo-50 dark:bg-indigo-950/60',
    statusTextColor: 'text-blue-950 dark:text-blue-200',
  },
  {
    title: 'Warehouse Union Local 220',
    meta: 'Edited by HR Partnerships',
    status: 'Draft',
    statusBg: 'bg-slate-100 dark:bg-slate-800',
    statusTextColor: 'text-slate-600 dark:text-slate-400',
  },
  {
    title: 'TX — Meal Break Pack v2',
    meta: 'Superseded Jun 14, 2026',
    status: 'Archived',
    statusBg: 'bg-slate-100 dark:bg-slate-800',
    statusTextColor: 'text-slate-500 dark:text-slate-400',
  },
];

export default function AdministrationSection() {
  const [activeTab, setActiveTab] = useState('Jurisdiction Packs');

  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8 sm:gap-10">
        
        {/* Header */}
        <header className="flex flex-col gap-3 max-w-[640px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
            <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
              Administration
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Policy configuration, versioned like code.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Admins publish policy changes with an effective date, and every prior version stays available for audit.
          </p>
        </header>

        {/* Administration Console Container */}
        <div className="w-full bg-slate-100/80 dark:bg-slate-900/60 p-4 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-6">
          
          {/* Sidebar / Tabs (Desktop Vertical, Mobile Horizontal Scroll) */}
          <aside className="w-full md:w-64 shrink-0 flex md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 md:pr-6">
            {navItems.map((item) => {
              const isActive = activeTab === item;
              return (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-left whitespace-nowrap ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs border border-slate-200 dark:border-slate-800'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </aside>

          {/* Main List Panel */}
          <main className="flex-1 flex flex-col gap-3">
            {policyPacks.map((pack, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-4 transition-all hover:border-slate-300 dark:hover:border-slate-700"
              >
                <div className="flex flex-col gap-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-100 truncate">
                    {pack.title}
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {pack.meta}
                  </span>
                </div>

                <div className="shrink-0">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${pack.statusBg} ${pack.statusTextColor}`}
                  >
                    {pack.status}
                  </span>
                </div>
              </div>
            ))}
          </main>

        </div>

      </div>
    </section>
  );
}