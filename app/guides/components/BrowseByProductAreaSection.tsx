import React from 'react';
import Link from "next/link";

interface ProductAreaCard {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  guideCountText: string;
  href: string;
}

const productAreas: ProductAreaCard[] = [
  {
    title: (
      <>
        Deterministic Time
        <br />
        Classification
      </>
    ),
    description: (
      <>
        Rule Trace, policy versioning, and
        <br />
        explainability.
      </>
    ),
    guideCountText: '— guides →',
    href: "/deterministic-time-classification",
  },
  {
    title: 'Shift Integrity Controls',
    description: (
      <>
        Exception resolution, correction
        <br />
        workflow, and schedules.
      </>
    ),
    guideCountText: '— guides →',
    href: "/shift-integrity-controls",
  },
  {
    title: 'Break & Rest Compliance',
    description: (
      <>
        Policy configuration and
        <br />
        jurisdiction-scoped setup.
      </>
    ),
    guideCountText: '— guides →',
    href: "/break-rest-compliance",
  },
  {
    title: (
      <>
        Evidence Ledger & Audit
        <br />
        Records
      </>
    ),
    description: (
      <>
        Version history, retention, and
        <br />
        controlled export.
      </>
    ),
    guideCountText: '— guides →',
    href: "/evidence-ledger",
  },
];

export default function BrowseByProductAreaSection() {
  return (
    <section className="w-full bg-gray-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1140px] mx-auto flex flex-col items-center gap-10">
        
        {/* Section Header */}
        <header className="flex flex-col items-center text-center gap-2">
          <span className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Browse by Product Area
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
            Go deep on a specific capability
          </h2>
        </header>

        {/* 4-Column Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {productAreas.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] shadow-[0px_1px_3px_0px_rgba(14,31,61,0.06)] flex flex-col justify-between items-start transition-all hover:-translate-y-0.5 hover:shadow-md group min-h-[176px]"
            >
              <div className="flex flex-col items-start w-full gap-2">
                {/* Card Title */}
                <h3 className="text-base font-semibold text-slate-800 dark:text-white leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-gray-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Indicator */}
              <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 inline-flex items-center gap-1 mt-6 group-hover:translate-x-1 transition-transform">
                {item.guideCountText}
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}