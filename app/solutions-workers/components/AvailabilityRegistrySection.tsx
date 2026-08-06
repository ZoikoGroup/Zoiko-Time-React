import React from 'react';

export default function AvailabilityRegistrySection() {
  // Data array containing all registry rows
  const registryData = [
    {
      experience: "Worker mobile",
      platformFamily: "Mobile family",
      role: "Worker",
      featureScope: "Records, corrections, notifications",
      status: "Supported",
      statusType: "supported",
    },
    {
      experience: "Worker desktop",
      platformFamily: "Desktop / web",
      role: "Worker",
      featureScope: "Full review & correction",
      status: "Supported",
      statusType: "supported",
    },
    {
      experience: "Offline capture",
      platformFamily: "Mobile family",
      role: "Worker",
      featureScope: "Limited, publication-gated",
      status: "Supported w/ limitations",
      statusType: "warning",
    },
    {
      experience: "Reviewer mobile",
      platformFamily: "Mobile family",
      role: "Manager",
      featureScope: "Context-first review",
      status: "Plan dependent",
      statusType: "info",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Category Header Tag */}
        <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest text-center mb-3">
          Verify Before You Commit
        </span>

        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-slate-800 dark:text-white max-w-3xl leading-snug sm:leading-tight mb-4">
          Availability &amp; compatibility registry
        </h2>

        {/* Subtitle Description */}
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed mb-10">
          Support is driven by a governed registry — unsupported or gated platforms are simply absent, never shown as disabled or coming soon.
        </p>

        {/* Card & Table Container */}
        <div className="w-full max-w-5xl bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700/60 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[750px]">
              
              {/* Table Header */}
              <thead>
                <tr className="bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider">
                  <th className="py-4 px-6">Experience</th>
                  <th className="py-4 px-6">Platform family</th>
                  <th className="py-4 px-6">Role</th>
                  <th className="py-4 px-6">Feature scope</th>
                  <th className="py-4 px-6">Status</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200 dark:divide-slate-700/60 text-slate-800 dark:text-slate-200">
                {registryData.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={idx % 2 === 1 ? 'bg-gray-50/70 dark:bg-slate-800/50' : 'bg-white dark:bg-slate-800'}
                  >
                    <td className="py-4 px-6 font-bold text-slate-800 dark:text-white align-middle">
                      {row.experience}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300 align-middle">
                      {row.platformFamily}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300 align-middle">
                      {row.role}
                    </td>
                    <td className="py-4 px-6 text-gray-700 dark:text-gray-300 align-middle">
                      {row.featureScope}
                    </td>
                    <td className="py-4 px-6 align-middle">
                      {/* Status Badges Rendered directly without scope errors */}
                      {row.statusType === 'supported' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-teal-700 dark:text-teal-400 border border-emerald-200 dark:border-emerald-800/50">
                          {row.status}
                        </span>
                      )}
                      {row.statusType === 'warning' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/60 text-amber-800 dark:text-amber-400 border border-orange-200 dark:border-orange-800/50">
                          {row.status}
                        </span>
                      )}
                      {row.statusType === 'info' && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-blue-700 dark:text-blue-400 border border-indigo-200 dark:border-indigo-800/50">
                          {row.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footnote */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center max-w-2xl leading-relaxed">
          Generic platform families are shown until exact OS, browser, store, and installer requirements are verified.
        </p>

      </div>
    </section>
  );
}