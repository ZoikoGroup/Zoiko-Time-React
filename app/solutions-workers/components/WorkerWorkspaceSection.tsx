import React from 'react';

export default function WorkerWorkspaceSection() {
  const sidebarItems = [
    { label: "Today", active: true },
    { label: "Timesheet" },
    { label: "Corrections" },
    { label: "Review history" },
    { label: "Privacy & data" },
    { label: "Help" }
  ];

  const tableData = [
    {
      event: "09:00 – 12:30 shift",
      project: "Client Onboarding",
      status: "Approved",
      badgeStyle: "bg-emerald-50 dark:bg-emerald-950/60 text-teal-700 dark:text-teal-300"
    },
    {
      event: "13:15 – present",
      project: "Missing project code",
      status: "Needs input",
      badgeStyle: "bg-orange-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300"
    },
    {
      event: "Aug 4 correction",
      project: "Break duration",
      status: "Pending review",
      badgeStyle: "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300"
    }
  ];

  return (
    <section className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Worker Workspace
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-4">
          Everything you need to understand your own record
        </h2>

        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed mb-12">
          Production-faithful, with synthetic data shown here. You see only your own authorized record — never another worker&apos;s, and never a leaderboard, activity score, or app/website usage.
        </p>

        {/* Desktop & Mobile UI Previews Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center">
          
          {/* 1. Desktop Dashboard UI Preview */}
          <div className="lg:col-span-7 xl:col-span-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden flex flex-col">
            {/* Top Browser Header Bar */}
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-white/25 rounded-full" />
              <span className="w-2.5 h-2.5 bg-white/25 rounded-full" />
              <span className="w-2.5 h-2.5 bg-white/25 rounded-full" />
              <span className="ml-2 text-xs font-medium text-white/90">
                ZoikoTime · My Record
              </span>
            </div>

            {/* Main App Container (Sidebar + Content) */}
            <div className="flex flex-col md:flex-row flex-1">
              {/* Sidebar */}
              <div className="w-full md:w-48 bg-gray-50 dark:bg-slate-800/50 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700/60 p-4 flex flex-col gap-1">
                <div className="text-xs font-extrabold text-slate-800 dark:text-white mb-4 tracking-tight">
                  ZOIKO<span className="text-teal-600 dark:text-teal-400">TIME</span>
                </div>

                <nav className="flex flex-row md:flex-col gap-1 overflow-x-auto pb-2 md:pb-0">
                  {sidebarItems.map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                        item.active
                          ? 'bg-white dark:bg-slate-700 text-slate-800 dark:text-white shadow-sm'
                          : 'text-gray-500 dark:text-gray-400 hover:text-slate-800 dark:hover:text-slate-200'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-sm ${item.active ? 'bg-teal-600 dark:bg-teal-400' : 'bg-gray-300 dark:bg-slate-600'}`} />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Workspace Area */}
              <div className="flex-1 p-5 md:p-6 overflow-x-auto">
                {/* Date & Alert Banner */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                    Today · Aug 5, 2026
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded-full text-xs font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700 dark:bg-amber-400" />
                    Needs input
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="bg-gray-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-3 text-center">
                    <div className="text-base font-bold text-slate-800 dark:text-white">6h 12m</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Recorded</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-3 text-center">
                    <div className="text-base font-bold text-slate-800 dark:text-white">On break</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Current state</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 rounded-xl p-3 text-center">
                    <div className="text-base font-bold text-slate-800 dark:text-white">1</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Needs your input</div>
                  </div>
                </div>

                {/* Data Table */}
                <div className="overflow-x-auto mb-6">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700 text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-tight">
                        <th className="pb-2.5 px-2">Event</th>
                        <th className="pb-2.5 px-2">Project</th>
                        <th className="pb-2.5 px-2">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                      {tableData.map((row, idx) => (
                        <tr key={idx}>
                          <td className="py-3 px-2 font-normal whitespace-nowrap">{row.event}</td>
                          <td className="py-3 px-2 font-normal whitespace-nowrap">{row.project}</td>
                          <td className="py-3 px-2 whitespace-nowrap">
                            <span className={`inline-block px-3 py-1 rounded-full font-bold ${row.badgeStyle}`}>
                              {row.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Footer Disclaimer */}
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-normal">
                  No screenshots, app names, URLs, keystrokes, or activity scores appear anywhere in this view.
                </p>
              </div>
            </div>
          </div>

          {/* 2. Mobile App Mockup Preview */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center">
            <div className="w-full max-w-[280px] sm:max-w-[320px] bg-slate-800 p-3 sm:p-4 rounded-[36px] shadow-2xl border border-slate-700 relative">
              {/* Phone Notch */}
              <div className="w-28 h-4 bg-slate-800 rounded-b-xl mx-auto absolute top-0 left-1/2 -translate-x-1/2 z-20" />

              {/* Mobile Screen Wrapper */}
              <div className="bg-gray-50 dark:bg-slate-900 rounded-[28px] overflow-hidden flex flex-col pt-3 relative border border-slate-700/50">
                
                {/* App Bar Header */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-4 text-white">
                  <div className="text-[11px] opacity-90">My Record · Tue, Aug 5</div>
                  <div className="text-base font-semibold">Home</div>
                </div>

                {/* Content Body */}
                <div className="p-3 flex flex-col gap-3">
                  {/* Live Status Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-950/60 rounded-full border border-emerald-100 dark:border-emerald-900/50 w-fit">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                    </span>
                    <span className="text-xs font-semibold text-teal-700 dark:text-teal-300">
                      Recording · active
                    </span>
                  </div>

                  {/* Card 1: Shift Info */}
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
                    <div className="text-[9.5px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-normal">
                      Current shift
                    </div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-white mt-0.5">
                      Started 09:00 · v3
                    </div>
                  </div>

                  {/* Card 2: Needs Input */}
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
                    <div className="text-[9.5px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-normal">
                      Needs input
                    </div>
                    <div className="text-xs font-semibold text-amber-700 dark:text-amber-400 mt-0.5">
                      Missing project code
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <button className="w-full py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors">
                    Add context
                  </button>

                  <button className="w-full py-2 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 border border-gray-300 dark:border-slate-700 rounded-lg text-xs font-semibold transition-colors">
                    Request a correction
                  </button>

                  {/* Sync Status Card */}
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700/60 shadow-sm">
                    <div className="text-[9.5px] uppercase tracking-wide text-gray-500 dark:text-gray-400 font-normal">
                      Privacy & sync
                    </div>
                    <div className="text-xs font-medium text-gray-500 dark:text-gray-300 mt-0.5">
                      Last synced 09:31 · 0 pending
                    </div>
                  </div>
                </div>

                {/* Mobile Bottom Navigation Bar */}
                <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700/60 p-2 grid grid-cols-4 gap-1 text-center mt-2">
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="w-3.5 h-3.5 rounded bg-emerald-50 dark:bg-emerald-950 text-teal-600" />
                    <span className="text-[9px] font-semibold text-teal-700 dark:text-teal-400">Home</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="w-3.5 h-3.5 rounded bg-gray-100 dark:bg-slate-700" />
                    <span className="text-[9px] font-normal text-gray-500 dark:text-gray-400">Records</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="w-3.5 h-3.5 rounded bg-gray-100 dark:bg-slate-700" />
                    <span className="text-[9px] font-normal text-gray-500 dark:text-gray-400">Actions</span>
                  </div>
                  <div className="flex flex-col items-center gap-0.5">
                    <span className="w-3.5 h-3.5 rounded bg-gray-100 dark:bg-slate-700" />
                    <span className="text-[9px] font-normal text-gray-500 dark:text-gray-400">History</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}