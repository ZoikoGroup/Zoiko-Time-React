import React from 'react';

const policySources = [
  {
    title: 'Jurisdiction packs',
    description: 'Pre-built rule sets your team reviews and enables per location.',
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    ),
  },
  {
    title: 'Agreement terms',
    description: 'Collective bargaining or company policy terms layered on top.',
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: 'Manual configuration',
    description: 'Custom rules your admin team enters directly, with a named owner.',
    iconPath: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
    ),
  },
];

const policySourceMapData = [
  {
    title: 'CA — Meal Break Pack',
    details: [
      { label: 'Source', value: 'Jurisdiction pack v6', valueColor: 'text-slate-600 dark:text-slate-400' },
      { label: 'Owner', value: 'L. Bianchi (Compliance)', valueColor: 'text-slate-600 dark:text-slate-400' },
      { label: 'Status', value: 'Published', valueColor: 'text-teal-700 dark:text-teal-400 font-medium' },
    ],
  },
  {
    title: 'Warehouse Union — Local 220',
    details: [
      { label: 'Source', value: 'Agreement terms', valueColor: 'text-slate-600 dark:text-slate-400' },
      { label: 'Owner', value: 'HR Partnerships', valueColor: 'text-slate-600 dark:text-slate-400' },
    ],
  },
];

export default function SourcePolicyContextSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        
        {/* Left Column: Headlines, Source Types & Legal Disclaimer */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Header */}
          <header className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
              <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
                Source &amp; Policy Context
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Every rule traces back to a source.
            </h2>
            <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Policy configuration in ZoikoTime is never a black box — each rule shows where it came from and who set it.
            </p>
          </header>

          {/* List of Policy Sources */}
          <div className="flex flex-col divide-y divide-slate-200 dark:divide-slate-800">
            {policySources.map((item, idx) => (
              <div key={idx} className="py-5 first:pt-0 last:pb-0 flex items-start gap-4">
                <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 text-slate-800 dark:text-slate-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.iconPath}
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer Callout Banner */}
          <div className="p-5 bg-amber-50/80 dark:bg-amber-950/30 rounded-2xl border border-amber-200/80 dark:border-amber-900/50 flex flex-col gap-2">
            <h4 className="text-sm font-bold text-amber-950 dark:text-amber-200">
              This isn&apos;t legal advice.
            </h4>
            <p className="text-xs sm:text-sm text-amber-900/90 dark:text-amber-300/90 leading-relaxed">
              Jurisdiction packs are a starting point for your team and counsel to review — ZoikoTime doesn&apos;t determine what the law requires for your business.
            </p>
          </div>

        </div>

        {/* Right Column: Policy Source Map Preview Card */}
        <div className="lg:col-span-5 w-full bg-slate-100/80 dark:bg-slate-900/60 p-5 sm:p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col gap-5">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            Policy Source Map
          </h3>

          <div className="flex flex-col gap-4">
            {policySourceMapData.map((card, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-3"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  {card.title}
                </span>

                <div className="flex flex-col divide-y divide-slate-100 dark:divide-slate-800 text-xs">
                  {card.details.map((row, rIdx) => (
                    <div key={rIdx} className="py-2.5 first:pt-0 last:pb-0 flex items-center justify-between gap-2">
                      <span className="text-slate-500 dark:text-slate-400 font-normal">
                        {row.label}
                      </span>
                      <span className={row.valueColor}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}