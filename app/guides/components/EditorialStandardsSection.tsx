import React from 'react';

interface StandardItem {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const standards: StandardItem[] = [
  {
    title: 'Owned & reviewed',
    description: (
      <>
        Every guide has a named owner and passes editorial and product review before publishing.
      </>
    ),
  },
  {
    title: 'Source-linked',
    description: (
      <>
        Claims about product behavior link back to the canonical documentation they describe.
      </>
    ),
  },
  {
    title: 'Version-controlled',
    description: (
      <>
        Guides carry a publish date and last-reviewed date — nothing goes stale silently.
      </>
    ),
  },
  {
    title: (
      <>
        Never duplicated
        <br />
        documentation
      </>
    ),
    description: (
      <>
        Guides teach outcomes and context; they defer to official docs for exact steps and configuration.
      </>
    ),
  },
  {
    title: 'Accessible by design',
    description: (
      <>
        Every guide meets WCAG 2.2 AA — structure, alt text, and readable contrast throughout.
      </>
    ),
  },
  {
    title: 'No unsupported claims',
    description: (
      <>
        No fabricated statistics, invented case studies, or legal advice — ever.
      </>
    ),
  },
];

export default function EditorialStandardsSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1040px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center gap-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Editorial Standards
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Governed content, not marketing dressed up as
            <br className="hidden sm:inline" />
            {' '}education
          </h2>
        </header>

        {/* 6 Cards Grid (3 Columns x 2 Rows on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {standards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] flex flex-col gap-3 transition-all hover:-translate-y-0.5 hover:shadow-md group"
            >
              {/* Title Header with Teal Accent Bullet */}
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-teal-600 dark:bg-teal-400 mt-2 shrink-0" />
                <h3 className="text-base font-semibold text-slate-800 dark:text-white leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Card Description */}
              <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed pl-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}