import React from 'react';

interface GuideItem {
  title: string;
  category: string;
  dateText: string;
  href: string;
}

const guides: GuideItem[] = [
  {
    title: 'Configuring grace windows without breaking existing records',
    category: 'For IT & Admins · Deterministic Time Classification',
    dateText: 'Updated Aug 3, 2026',
    href: '#configuring-grace-windows',
  },
  {
    title: 'What "Needs Context" means, and how to resolve it fast',
    category: 'For Workers · Managers',
    dateText: 'Published Jul 29, 2026',
    href: '#needs-context-meaning',
  },
  {
    title: 'Setting up break policies across multiple jurisdictions',
    category: 'For HR & People · Break & Rest Compliance',
    dateText: 'Updated Jul 22, 2026',
    href: '#break-policies-jurisdictions',
  },
  {
    title: 'A field guide to shift exception types',
    category: 'For Operations · Shift Integrity Controls',
    dateText: 'Published Jul 14, 2026',
    href: '#shift-exception-types',
  },
];

export default function RecentGuidesSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center gap-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Recent Guides
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Newly published and recently updated
          </h2>
        </header>

        {/* Guides Container Card */}
        <div className="w-full max-w-[900px] bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] overflow-hidden">
          <ul className="divide-y divide-slate-200 dark:divide-slate-800">
            {guides.map((guide, idx) => (
              <li key={idx}>
                <a
                  href={guide.href}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 p-5 sm:px-6 transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-800/50"
                >
                  {/* Left Column: Title & Subtitle */}
                  <div className="flex flex-col gap-1 min-w-0">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-white leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors truncate sm:whitespace-normal">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-slate-400">
                      {guide.category}
                    </p>
                  </div>

                  {/* Right Column: Date Info */}
                  <div className="text-xs text-gray-500 dark:text-slate-400 shrink-0 sm:text-right">
                    {guide.dateText}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}