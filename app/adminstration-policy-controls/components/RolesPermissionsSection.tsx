'use client';

import React from 'react';

interface RolePermission {
  role: string;
  permitted: string;
}

const rolesData: RolePermission[] = [
  {
    role: 'Administrator',
    permitted:
      'Manage workspace, roles, permissions, integrations, retention settings, and audit access — within configured authority.',
  },
  {
    role: 'Policy owner',
    permitted:
      'Author and version policies, define scope and jurisdiction, and submit changes for approval.',
  },
  {
    role: 'Approver',
    permitted:
      'Approve or reject policy and configuration changes with a required reason; cannot approve their own change.',
  },
  {
    role: 'Manager / reviewer',
    permitted:
      'Review records and exceptions within team scope; no policy configuration authority.',
  },
  {
    role: 'Auditor',
    permitted:
      'Read-only access to policy history, change events, and audit logs within permitted scope.',
  },
  {
    role: 'Worker',
    permitted:
      'See the policy that applies to them and the transparency notices provided by the organization.',
  },
];

export default function RolesPermissionsSection() {
  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 dark:bg-gray-950 font-['Poppins',sans-serif]">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Roles &amp; Permissions
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 sm:text-4xl dark:text-white">
            Who can do what — by design
          </h2>
          <p className="mt-4 text-base font-normal leading-relaxed text-gray-500 dark:text-gray-400">
            Least-privilege, role-based access so sensitive configuration, approval, and
            <br className="hidden sm:inline" /> export stay with the right people.
          </p>
        </div>

        {/* Roles Table Container */}
        <div className="overflow-hidden rounded-2xl bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] outline outline-1 outline-offset-[-1px] outline-slate-200 dark:border dark:border-gray-800 dark:bg-gray-900 dark:outline-none">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              {/* Table Header */}
              <thead>
                <tr className="bg-slate-800 text-white dark:bg-gray-800">
                  <th
                    scope="col"
                    className="w-1/4 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white dark:text-gray-200"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="w-3/4 py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-white dark:text-gray-200"
                  >
                    Typically permitted
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-slate-200 dark:divide-gray-800">
                {rolesData.map((item, index) => (
                  <tr
                    key={item.role}
                    className={
                      index % 2 === 1
                        ? 'bg-gray-50/80 dark:bg-gray-800/40'
                        : 'bg-white dark:bg-gray-900'
                    }
                  >
                    <td className="py-4 px-6 text-xs font-bold text-slate-800 dark:text-gray-100 align-top whitespace-nowrap">
                      {item.role}
                    </td>
                    <td className="py-4 px-6 text-xs font-normal leading-relaxed text-gray-700 dark:text-gray-300 align-top">
                      {item.permitted}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}