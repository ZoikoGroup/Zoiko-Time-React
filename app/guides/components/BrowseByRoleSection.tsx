import React from 'react';
import Link from 'next/link';

interface RoleCard {
  title: string;
  description: string;
  guideCountText: string;
  href: string;
}

const roleCards: RoleCard[] = [
  {
    title: 'HR & People',
    description: 'Onboarding, worker communication, and consultation resources.',
    guideCountText: '— guides →',
    href: "/hr-people-teams",
  },
  {
    title: 'Payroll & Finance',
    description: 'Close readiness, exports, and reconciliation workflows.',
    guideCountText: '— guides →',
    href: "/finance-and-payroll-teams",
  },
  {
    title: 'Managers',
    description: 'Review queues, exception handling, and team-level reporting.',
    guideCountText: '— guides →',
    href: "/team-lead-managers",
  },
  {
    title: 'Workers',
    description: 'Recording time, understanding status, and requesting corrections.',
    guideCountText: '— guides →',
    href: "/solutions-workers",
  },
  {
    title: 'IT & Admins',
    description: 'Configuration, integrations, security, and access control.',
    guideCountText: '— guides →',
    href: "/admin-guide",
  },
  {
    title: 'Compliance & Audit',
    description: 'Evidence structure, retention, and jurisdiction-scoped policy.',
    guideCountText: '— guides →',
    href: "/compliance-assurance",
  },
];

export default function BrowseByRoleSection() {
  return (
    <section 
      id="browse-by-role" 
    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center gap-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Browse by Role
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Guides written for the work you actually do
          </h2>
        </header>

        {/* 6 Card Grid Container (3 columns x 2 rows on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {roleCards.map((role, idx) => (
            <a
              key={idx}
              href={role.href}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] flex flex-col justify-between transition-all hover:-translate-y-0.5 hover:shadow-md group"
            >
              <div className="flex flex-col gap-2">
                {/* Role Title */}
                <h3 className="text-base font-semibold text-slate-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {role.title}
                </h3>
                
                {/* Role Description */}
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                  {role.description}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 inline-flex items-center gap-1 mt-6 group-hover:translate-x-1 transition-transform">
                {role.guideCountText}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}