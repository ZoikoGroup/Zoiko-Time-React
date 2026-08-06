import type { ReactNode } from 'react';

interface ControlCard {
  title: string;
  description: string;
  linkLabel: string;
  linkHref?: string;
  icon: ReactNode;
}

const controlsData: ControlCard[] = [
  {
    title: 'Know the source',
    description:
      'Identify accountable owners, systems of record, object meanings, authority, restrictions, and conflicts before any extraction.',
    linkLabel: 'Source registry',
    linkHref: '#source-registry',
    icon: (
      <svg
        className="h-5 w-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    title: 'Map deterministically',
    description:
      'Version every mapping and transformation. Unknown values stay visible instead of being guessed.',
    linkLabel: 'Mapping controls',
    linkHref: '#mapping-controls',
    icon: (
      <svg
        className="h-5 w-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: 'Rehearse before cutover',
    description:
      'Run representative rehearsals with privacy-safe evidence and reviewable exit criteria.',
    linkLabel: 'Rehearsal model',
    linkHref: '#rehearsal-model',
    icon: (
      <svg
        className="h-5 w-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Reconcile the result',
    description:
      'Compare counts, relationships, time, policy context, approvals, corrections, and evidence, not just file delivery.',
    linkLabel: 'Reconciliation ledger',
    linkHref: '#reconciliation-ledger',
    icon: (
      <svg
        className="h-5 w-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Preserve continuity',
    description:
      'Carry forward attribution, open corrections, access boundaries, and operational ownership through handover.',
    linkLabel: 'Evidence continuity',
    linkHref: '#evidence-continuity',
    icon: (
      <svg
        className="h-5 w-5 text-emerald-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
];

export default function DataMigrationAfterHeroSection() {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 font-sans transition-colors duration-200 dark:bg-slate-900 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-10">
        <div className="flex max-w-[740px] flex-col items-center gap-4 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            How Governed Migration Works
          </span>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            Five Controls Between Your Old System
            <br className="hidden sm:inline" /> and a Trusted Record
          </h2>
          <p className="max-w-[644px] text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Each card describes a control we apply, not a deliverable we include.
            Inclusions live in approved commercial documents.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {controlsData.map((card) => (
            <div
              key={card.title}
              className="flex flex-col justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-100/70 p-6 transition-shadow hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/70"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-xs dark:border-slate-700 dark:bg-slate-800">
                  {card.icon}
                </div>

                <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {card.description}
                </p>
              </div>

              <a
                href={card.linkHref || '#'}
                className="group inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-emerald-600 hover:underline dark:text-emerald-400"
              >
                <span>{card.linkLabel}</span>
                <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          ))}

          <div className="flex flex-col justify-start gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-700/80 dark:bg-slate-800">
            
            <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
              What we will not say
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Not seamless. Not one click. Not any system, all history, zero
              downtime, or guaranteed accuracy. Migration is assessed, not
              universally promised.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
