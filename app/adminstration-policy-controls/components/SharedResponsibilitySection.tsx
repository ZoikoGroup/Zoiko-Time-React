'use client';

import React from 'react';
import { Info } from 'lucide-react';

interface ResponsibilityRow {
  party: string;
  responsibility: string;
}

const responsibilityData: ResponsibilityRow[] = [
  {
    party: 'Organization',
    responsibility:
      'Define lawful, appropriate policy, jurisdiction scope, roles, permissions, retention, and downstream use.',
  },
  {
    party: 'ZoikoTime',
    responsibility:
      'Apply configured deterministic logic, enforce approved access and change control, preserve records/evidence, and expose states.',
  },
];

export default function SharedResponsibilitySection() {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Shared Responsibility
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl dark:text-white">
            Clear ownership across configuration and
            <br className="hidden sm:inline" /> processing
          </h2>
        </div>

        {/* Matrix Table Container */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-slate-800 text-white dark:bg-gray-800">
                  <th
                    scope="col"
                    className="w-1/5 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white dark:text-gray-200"
                  >
                    Party
                  </th>
                  <th
                    scope="col"
                    className="w-4/5 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white dark:text-gray-200"
                  >
                    Responsibility
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200 dark:divide-gray-800">
                {responsibilityData.map((item, index) => (
                  <tr
                    key={item.party}
                    className={
                      index % 2 === 1
                        ? 'bg-gray-50/80 dark:bg-gray-800/40'
                        : 'bg-white dark:bg-gray-900'
                    }
                  >
                    <td className="py-4 px-6 text-xs font-bold text-slate-800 dark:text-gray-100 align-top whitespace-nowrap">
                      {item.party}
                    </td>
                    <td className="py-4 px-6 text-xs font-normal leading-relaxed text-gray-700 dark:text-gray-300 align-top">
                      {item.responsibility}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Non-transferable Boundary Callout */}
        <div className="mt-8 flex items-start gap-3 px-2 sm:px-4">
          <Info className="h-5 w-5 shrink-0 text-gray-700 dark:text-gray-300 mt-0.5" />
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            <strong className="font-bold">Non-transferable boundary.</strong> ZoikoTime
            does not replace your employment decisions, legal advice, tax analysis, or
            compliance review, and does not guarantee payroll accuracy, legal compliance,
            or correct outcomes in every configuration or jurisdiction.
          </p>
        </div>
      </div>
    </section>
  );
}