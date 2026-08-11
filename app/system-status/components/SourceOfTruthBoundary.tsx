import React from 'react';

interface DestinationCard {
  title: string;
  badge?: string;
  description: string;
  footerText?: string;
  actionUrl?: string;
}

const cards: DestinationCard[] = [
  {
    title: 'System Status',
    description:
      'This page. Current incidents, maintenance, component state, timestamps, updates, and history.',
    footerText: 'Authoritative for current operational state.',
  },
  {
    title: 'Platform Reliability',
    badge: 'Evidence-gated',
    description:
      'Definitions, indicators, measurement methods, exclusions, and recovery evidence.',
    footerText: 'Held until maintained measures and history exist.',
  },
  {
    title: 'Enterprise Support',
    description:
      'Customer-specific impact, account diagnostics, and private cases — through authenticated channels.',
    actionUrl: '/contact',
  },
  {
    title: 'Trust Center',
    description:
      'Cross-domain trust claims and the evidence directory.',
    actionUrl: '/trust-center',
  },
];

export default function SourceOfTruthBoundary() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8">
        
        {/* Section Header */}
        <header className="max-w-[760px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Source-of-Truth Boundary
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Four Destinations, Four Different Jobs
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-[644px] leading-relaxed">
            Marketing and reliability pages link here rather than restating current state. A second copy of an incident is a stale copy.
          </p>
        </header>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full pt-2">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between gap-4 transition-all hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Top Card Section */}
              <div className="flex flex-col gap-3">
                {/* Title & Badge Row */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {card.title}
                  </h3>
                  {card.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800 rounded-full shrink-0">
                      {card.badge}
                    </span>
                  )}
                </div>

                {/* Main Card Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Card Section (Footnote or Action Link) */}
              <div className="mt-auto pt-2">
                {card.actionUrl ? (
                  <a
                    href={card.actionUrl}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group"
                  >
                    <span>Open</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                ) : (
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-normal">
                    {card.footerText}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Section Disclaimer Note */}
        <footer className="w-full text-left sm:text-center pt-2">
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Incident history on this page is an operational record. It is not an SLA calculation, a service-credit determination, or a legal conclusion.
          </p>
        </footer>

      </div>
    </section>
  );
}
