import React from 'react';

interface GuideCard {
  title: string;
  description: string;
  category: string;
  targetRole: string;
  readTime: string;
  imageSrc: string;
  href: string;
}

const featuredGuides: GuideCard[] = [
  {
    title: 'The 10-point payroll close readiness checklist',
    description:
      'What "approved" actually means, and how to catch incomplete records before cutoff.',
    category: 'Payroll',
    targetRole: 'For Payroll',
    readTime: '12 min read',
    imageSrc: '/guides/An analyst.png',
    href: '#payroll-checklist',
  },
  {
    title: 'What auditors actually ask for — and where to find it',
    description:
      'A walkthrough of the Evidence Ledger fields auditors request most often.',
    category: 'Compliance',
    targetRole: 'For Compliance',
    readTime: '9 min read',
    imageSrc: '/guides/A compliance.png',
    href: '#auditor-requests',
  },
  {
    title: 'Configuring time tracking for a global, distributed team',
    description:
      'Timezones, daylight saving, and policy scope — set up once, correctly.',
    category: 'Operations',
    targetRole: 'For IT & Admins',
    readTime: '14 min read',
    imageSrc: '/guides/A distributed team.png',
    href: '#global-team-config',
  },
];

export default function FeaturedGuidesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-800 dark:text-white">
              Featured guides
            </h2>
            <p className="text-sm sm:text-base text-gray-500 dark:text-slate-400">
              Curated by our editorial team this month.
            </p>
          </div>
          <a
            href="#all-guides"
            className="text-sm font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors inline-flex items-center gap-1 shrink-0"
          >
            Browse all guides →
          </a>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGuides.map((guide, idx) => (
            <article
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] overflow-hidden flex flex-col justify-between group transition-all hover:shadow-md"
            >
              <div>
                {/* Image Header with Badge Overlay */}
                <div className="relative w-full h-40 bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={guide.imageSrc}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Category Pill Badge */}
                  <div className="absolute top-3 left-3 bg-slate-800/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-xs">
                    {guide.category}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-5 flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-slate-800 dark:text-white leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    <a href={guide.href}>{guide.title}</a>
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                    {guide.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mx-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <span className="font-semibold text-teal-700 dark:text-teal-400">
                  {guide.targetRole}
                </span>
                <span className="text-gray-500 dark:text-slate-400">
                  {guide.readTime}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}