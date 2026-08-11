import React from 'react';
import Link from 'next/link';

interface AppAvailabilityRow {
  experience: string;
  platform: string;
  role: string;
  status: 'Supported' | 'Limited' | 'Not published';
}

const availabilityData: AppAvailabilityRow[] = [
  {
    experience: 'Worker mobile',
    platform: 'Mobile family',
    role: 'Worker',
    status: 'Supported',
  },
  {
    experience: 'Worker desktop',
    platform: 'Desktop / web',
    role: 'Worker',
    status: 'Supported',
  },
  {
    experience: 'Reviewer',
    platform: 'Desktop / web',
    role: 'Manager',
    status: 'Limited',
  },
  {
    experience: 'Admin console',
    platform: 'Desktop / web',
    role: 'Admin',
    status: 'Supported',
  },
  {
    experience: 'Offline capture',
    platform: '—',
    role: '—',
    status: 'Not published',
  },
];

export default function AppPreviewHeroSection() {
  const getStatusBadge = (status: AppAvailabilityRow['status']) => {
    switch (status) {
      case 'Supported':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Supported
          </span>
        );
      case 'Limited':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/80 dark:text-amber-400">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Limited
          </span>
        );
      case 'Not published':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 dark:bg-rose-950/80 dark:text-rose-400">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            Not published
          </span>
        );
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden transition-colors duration-200">
      
      {/* Background Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-radial from-teal-500/15 to-transparent blur-2xl pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10 relative z-10">
        
        {/* Header Content */}
        <div className="max-w-[760px] text-center flex flex-col items-center gap-4">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Desktop &amp; Mobile Apps
          </span>
          
          <h1 className="text-3xl sm:text-5xl font-bold text-slate-800 dark:text-white leading-tight">
            Review and manage workforce records across{' '}
            <span className="text-teal-600 dark:text-teal-400">supported apps</span>
          </h1>

          <p className="max-w-[700px] text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            ZoikoTime gives workers, reviewers, and authorized administrators application experiences for visible record sessions, review, correction, approval, evidence, and administration — with platform support confirmed through current documentation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link href="/start-free" className="w-full sm:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-base rounded-xl shadow-md shadow-teal-600/20 transition-colors">
              Start Free
            </Link>
            <Link href="/request-enterprise-demo" className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-semibold text-base rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Request Enterprise Demo
            </Link>
          </div>

          {/* Disclaimer / Fine Print */}
          <p className="text-slate-500 dark:text-slate-400 text-xs leading-normal pt-1">
            30-day trial &middot; Human authority remains controlling &middot; Platform and feature support vary by approved environment, role, plan, version, and region
          </p>
        </div>

        {/* Mockups Container (Desktop + Mobile) */}
        <div className="w-full max-w-[1100px] flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 pt-6">
          
          {/* Laptop Mockup Wrapper */}
          <div className="w-full lg:max-w-[780px] bg-slate-900 rounded-t-2xl p-3 pb-0 shadow-2xl border border-slate-800">
            {/* Laptop Window Frame */}
            <div className="bg-white dark:bg-slate-900 rounded-t-lg overflow-hidden border border-slate-800">
              
              {/* Window Header */}
              <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span className="ml-2 text-xs font-medium text-slate-300">
                  ZoikoTime &middot; Administrator Console
                </span>
              </div>

              {/* Admin Layout Body */}
              <div className="flex min-h-[320px]">
                
                {/* Sidebar */}
                <aside className="w-44 bg-slate-50 dark:bg-slate-800/50 border-r border-slate-200 dark:border-slate-700 p-3 flex flex-col gap-1.5 text-xs">
                  <div className="px-2 py-1 font-extrabold text-slate-800 dark:text-white tracking-tight">
                    ZOIKO<span className="text-teal-600">TIME</span>
                  </div>
                  
                  <nav className="flex flex-col gap-1 mt-2">
                    <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-700 font-semibold text-slate-800 dark:text-white shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-sm bg-teal-600" />
                      Overview
                    </button>
                    {['Application access', 'Roles & permissions', 'Policies', 'Availability', 'Releases', 'Audit'].map((item) => (
                      <button key={item} className="flex items-center gap-2 px-2.5 py-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-sm bg-slate-300 dark:bg-slate-600" />
                        {item}
                      </button>
                    ))}
                  </nav>
                </aside>

                {/* Console Main Content */}
                <main className="flex-1 p-5 overflow-x-auto">
                  <div className="flex items-center justify-between pb-4">
                    <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                      Application availability
                    </h3>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                      Healthy
                    </span>
                  </div>

                  {/* Availability Table */}
                  <table className="w-full text-left text-xs min-w-[400px]">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 font-semibold uppercase">
                        <th className="py-2">Experience</th>
                        <th className="py-2">Platform</th>
                        <th className="py-2">Role</th>
                        <th className="py-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {availabilityData.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                          <td className="py-2.5 text-slate-800 dark:text-slate-200 font-medium">
                            {row.experience}
                          </td>
                          <td className="py-2.5 text-slate-600 dark:text-slate-400">
                            {row.platform}
                          </td>
                          <td className="py-2.5 text-slate-600 dark:text-slate-400">
                            {row.role}
                          </td>
                          <td className="py-2.5">{getStatusBadge(row.status)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </main>

              </div>
            </div>

            {/* Laptop Base Stand */}
            <div className="h-3 bg-slate-700 rounded-b-lg border-t border-slate-600 flex justify-center">
              <div className="w-20 h-1 bg-slate-500 rounded-b-md" />
            </div>
          </div>

          {/* Mobile Phone Mockup */}
          <div className="w-64 bg-slate-900 p-2.5 rounded-[36px] shadow-2xl border border-slate-800 shrink-0">
            <div className="relative bg-slate-50 dark:bg-slate-900 rounded-[28px] overflow-hidden border border-slate-800 text-xs">
              
              {/* Phone Header */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white p-3 pt-4">
                <span className="text-[10px] opacity-80 block">Northwind Ops &middot; Tue, Aug 5</span>
                <span className="text-sm font-semibold">Home</span>
              </div>

              {/* Status Banner */}
              <div className="p-3 space-y-3">
                <div className="bg-emerald-50 dark:bg-emerald-950/60 p-2 rounded-xl flex items-center gap-2 text-teal-700 dark:text-emerald-400 font-semibold text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Recording time state &middot; active
                </div>

                {/* Shift Card */}
                <div className="bg-white dark:bg-slate-800 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
                  <span className="text-[9px] uppercase text-slate-400 font-semibold block">
                    Current record
                  </span>
                  <span className="font-semibold text-slate-800 dark:text-white">
                    Shift &middot; started 09:00 &middot; v3
                  </span>
                </div>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-800 dark:text-white block">6h 12m</span>
                    <span className="text-[9px] text-slate-400">Recorded</span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-800 dark:text-white block leading-tight">On break</span>
                    <span className="text-[9px] text-slate-400">Status</span>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-2 rounded-lg border border-slate-200 dark:border-slate-700">
                    <span className="font-bold text-slate-800 dark:text-white block">1</span>
                    <span className="text-[9px] text-slate-400">To review</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-1.5 pt-1">
                  <button className="w-full py-2 bg-teal-600 text-white font-semibold rounded-lg text-xs hover:bg-teal-700 transition-colors">
                    Review &amp; complete timesheet
                  </button>
                  <button className="w-full py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white font-semibold rounded-lg text-xs hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                    Request a correction
                  </button>
                </div>

                {/* Sync Note */}
                <div className="bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-[9.5px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-400 uppercase text-[8px] block">
                    Privacy &amp; sync
                  </span>
                  Last synced 09:31 &middot; 0 pending
                </div>
              </div>

              {/* Bottom Mobile Nav */}
              <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 px-2 py-2 flex justify-around text-[9px] text-slate-400">
                <span className="text-teal-600 font-bold">Home</span>
                <span>Records</span>
                <span>Actions</span>
                <span>History</span>
                <span>More</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}