import React from 'react';

interface BoundaryCard {
  title: string;
  description: string;
  actionText: string;
  href?: string;
}

const boundaryCards: BoundaryCard[] = [
  {
    title: 'Deterministic classification',
    description:
      'Policy-bound, jurisdiction-aware, and reviewable. It prepares records for review. It is not AI, and it does not approve anything.',
    actionText: 'Classification',
    href: '#classification',
  },
  {
    title: 'Kairos Assistant',
    description:
      'May retrieve, summarize, and explain permitted records with sources and limitations. It decides nothing and cannot approve, return, or reopen.',
    actionText: 'Kairos Assistant',
    href: '#kairos-assistant',
  },
  {
    title: 'Zoiko Sema',
    description:
      'Any connected context is optional, mapped, permissioned, and reviewable — and both products keep independent identity. Communication context never becomes an approval.',
    actionText: 'Zoiko Sema Integration',
    href: '#zoiko-sema',
  },
];

export default function DecisionBoundariesSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="max-w-[760px] text-center flex flex-col gap-2">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Three Boundaries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            What Prepares a Decision, and What Makes One
          </h2>
        </header>

        {/* 3-Card Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {boundaryCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-6 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Content */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Action Link / Button */}
              <div>
                <a
                  href={card.href || '#'}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
                >
                  <span>{card.actionText}</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}