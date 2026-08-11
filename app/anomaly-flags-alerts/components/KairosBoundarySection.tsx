import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  actionText: string;
  actionHref?: string;
}

const features: FeatureCardProps[] = [
  {
    title: 'Kairos boundary',
    description:
      "Kairos may retrieve and explain a flag's definition, trigger facts, scope, source quality, limitations, and review path within the requester's existing permission — and must state when information is insufficient. It cannot resolve a case, change a status, alter a definition, suppress an alert, or decide anything.",
    actionText: 'Kairos Assistant',
    actionHref: '/kairos-assistant',
  },
  {
    title: 'Optional Zoiko Sema context',
    description:
      'Zoiko Sema is an independent product. Any connection is optional, explicitly mapped, permissioned, and reviewable. Communication presence is never treated as proof of work, and connected context never creates a flag on its own.',
    actionText: 'Zoiko Sema Integration',
    actionHref: '/zoiko-sema-integration',
  },
];

export default function KairosBoundarySection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {features.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between gap-6"
            >
              <div className="space-y-2.5">
                <h3 className="text-base sm:text-lg font-bold   text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base font-normal   leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>

              {/* Action Link */}
              <a
                href={card.actionHref || '#'}
                className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold   text-sm transition-colors group w-fit"
              >
                <span>{card.actionText}</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Highlighted Policy & AI Disclaimer Banner */}
        <div className="p-4 sm:p-5 bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start sm:items-center gap-3.5">
          {/* Shield/Check Icon */}
          <div className="shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5 sm:mt-0">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>
          </div>

          <p className="text-sm sm:text-base font-semibold   leading-relaxed text-slate-800 dark:text-slate-200">
            Deterministic Time Classification behind a flag remains policy-bound, versioned, and reviewable — and is never branded as AI. There is no confidence percentage and no risk score anywhere in this product.
          </p>
        </div>

      </div>
    </section>
  );
}