import React from 'react';

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureCard[] = [
  {
    title: 'Audit exports',
    description: 'Break and rest history exports scoped by location, date range, or worker.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    ),
  },
  {
    title: 'Access controls',
    description: 'Role-based visibility — reviewers see their scope, not the whole company.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    ),
  },
  {
    title: 'Retention windows',
    description: 'Configurable retention aligned to your policy and regional requirements.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    ),
  },
  {
    title: 'Change history',
    description: 'Every policy edit and every record decision is timestamped and attributed.',
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

export default function ReportingTrustSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1116px] mx-auto flex flex-col gap-10">
        
        {/* Header */}
        <header className="flex flex-col gap-3 max-w-[620px]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-sm" />
            <span className="text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider">
              Reporting &amp; Trust
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Exportable evidence, controlled access.
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Reporting here is deliberately light — the full evidence catalog, access classes, and request workflow live on our Procurement &amp; Legal Resources page.
          </p>
        </header>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-[20px] border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-4 transition-all hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="w-9 h-9 rounded-[10px] bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                <svg
                  className="w-4 h-4 text-slate-900 dark:text-slate-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner / Callout */}
        <div className="p-6 sm:p-8 bg-slate-100/70 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-[600px] leading-relaxed">
            Need document-level evidence packs or controlled/customer-specific resources?
          </p>
          <button
            type="button"
            className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-sm font-semibold rounded-full border border-slate-200 dark:border-slate-700 shadow-xs transition-all whitespace-nowrap"
          >
            Open Evidence Center
          </button>
        </div>

      </div>
    </section>
  );
}