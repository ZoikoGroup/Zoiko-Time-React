import React from 'react';

interface ColumnData {
  title: string;
  icon: React.ReactNode;
  bgClass?: string;
  items: string[];
}

const columns: ColumnData[] = [
  {
    title: 'ZoikoTime',
    icon: (
      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      'Platform security and service identities',
      'Secure delivery and change control',
      'Environment and tenant separation',
      'Security monitoring and incident process',
      'Evidence, correction, and disclosure within approved scope',
      'Platform defects — these remain ours',
    ],
  },
  {
    title: 'Your organization',
    icon: (
      <svg className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    bgClass: 'bg-slate-50/50 dark:bg-slate-900/50',
    items: [
      'Identity provider configuration and user lifecycle',
      'Role assignment and access review',
      'Policy configuration and its accuracy',
      'Endpoints, devices, and networks',
      'Exports once they leave the platform',
      'Connected systems you authorize',
    ],
  },
  {
    title: 'Providers',
    icon: (
      <svg className="w-5 h-5 text-slate-500 dark:text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    bgClass: 'bg-slate-100/40 dark:bg-slate-900/30',
    items: [
      'Contracted infrastructure and services',
      'Within their defined scope only',
      'Governed by contract, not inherited assurance',
      'State and limitations visible to you',
    ],
  },
];

export default function SharedResponsibility() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-10">
        
        {/* Header */}
        <header className="max-w-[780px] text-center flex flex-col items-center gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            Shared Responsibility
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Three Columns, No Hidden Transfers
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            Shared responsibility describes where duties genuinely sit. It is not a mechanism for moving platform obligations onto you.
          </p>
        </header>

        {/* 3-Column Responsibility Box */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
          {columns.map((col, idx) => (
            <div
              key={idx}
              className={`p-6 flex flex-col gap-4 ${col.bgClass || ''}`}
            >
              {/* Column Title */}
              <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-slate-800/60">
                {col.icon}
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {col.title}
                </h3>
              </div>

              {/* Items List */}
              <ul className="flex flex-col gap-3 text-xs leading-relaxed">
                {col.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                    <span className="text-slate-600 dark:text-slate-300 font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Red Warning Callout */}
        <div className="w-full max-w-[900px] p-4 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200/80 dark:border-rose-900/60 flex flex-col gap-1 text-left">
          <span className="text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
            One thing a customer administrator can never do
          </span>
          <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
            Enable prohibited surveillance. The anti-surveillance invariant is not a default, a setting, or a permission — there is no administrative path to screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection.
          </p>
        </div>

      </div>
    </section>
  );
}