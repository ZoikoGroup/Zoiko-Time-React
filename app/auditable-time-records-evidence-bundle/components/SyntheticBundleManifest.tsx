import React from 'react';
import StateChip from './StateChip';

interface MetaField {
  label: string;
  value: string;
}

const metaFields: MetaField[] = [
  { label: 'Purpose', value: 'Internal review support' },
  { label: 'Generator role', value: 'Payroll reviewer' },
  { label: 'Organization scope', value: 'Field Services · North' },
  { label: 'Date range', value: '28 Jul – 03 Aug 2026' },
  { label: 'Records in scope', value: '1 record, versions pinned' },
  { label: 'Evidence categories', value: '6 requested' },
  { label: 'Included', value: '4 of 9 items' },
  { label: 'Redaction summary', value: '1 item, free-text category' },
  { label: 'Recipient', value: 'Named internal reviewer' },
];

const lifecycleStates = [
  'Draft',
  'Validated',
  'Generating',
  'Partial',
  'Failed',
  'Ready',
  'Expired',
  'Revoked',
];

const activeLifecycleState = 'Partial';

interface EvidenceItem {
  title: string;
  reference: string;
  state: string;
  reason: React.ReactNode;
  /** Amber row tint for items that are absent, redacted, or in conflict. */
  flagged?: boolean;
}

const evidenceItems: EvidenceItem[] = [
  {
    title: 'Record version 3',
    reference: 'TR-77841 · v3 · pinned at as-of time',
    state: 'Included',
    reason:
      'Authorized and packaged at the pinned version. Version 1 and 2 are referenced but not packaged.',
  },
  {
    title: 'Policy snapshot',
    reference: 'FN-WT v3 · effective 01–09 Aug',
    state: 'Included',
    reason: 'The version that actually applied. Current v4 is not substituted.',
  },
  {
    title: 'Approval decision',
    reference: 'DEC-2288 · conditional approval',
    state: 'Included',
    reason: 'Decision, authority scope, reason, condition and effective time.',
  },
  {
    title: 'Correction request',
    reference: 'COR-0912 · worker free-text context',
    state: 'Redacted',
    flagged: true,
    reason: (
      <>
        Free-text worker statement removed for this purpose. Redaction{' '}
        <span className="font-bold">category</span> is stated; the value is not revealed.
      </>
    ),
  },
  {
    title: 'Reviewer notes',
    reference: 'Internal deliberation',
    state: 'Excluded by purpose',
    reason:
      'Not permitted for internal review support. The purpose rule is named without exposing protected logic.',
  },
  {
    title: 'Related worker records',
    reference: 'Other workers, same shift',
    state: 'Excluded by permission',
    reason: (
      <>
        Requester not authorized.{' '}
        <span className="font-bold">No hidden identifier, count or title is disclosed</span> —
        including the number of such records.
      </>
    ),
  },
  {
    title: 'Policy history 28–31 Jul',
    reference: 'FN-WT v2 window',
    state: 'Missing',
    flagged: true,
    reason: 'Expected reference absent — not retained. The gap is stated; no content is inferred.',
  },
  {
    title: 'Downstream reconciliation status',
    reference: 'Target holds version 1',
    state: 'Conflicting',
    flagged: true,
    reason:
      'The record is approved at v3 while the target holds v1. Both are shown; the conflict is not resolved inside the package.',
  },
  {
    title: 'Notice delivery receipts',
    reference: 'Notification service',
    state: 'Failed during packaging',
    reason: (
      <>
        The item could not be added, so the bundle is <span className="font-bold">partial</span>{' '}
        rather than ready. The failure is recorded in the final manifest.
      </>
    ),
  },
];

export default function SyntheticBundleManifest() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Synthetic bundle manifest
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The manifest is the package contract. Nine items, and only four of them made it in —
            because a manifest that hides what it could not include is worse than no manifest at all.
          </p>
        </div>

        {/* Manifest Card */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">

          {/* Bundle Context Bar */}
          <div className="px-4 sm:px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Bundle BDL-0417 · package version 1
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 leading-5">
                Purpose: internal review support · as-of 09 Aug 2026 11:00 CEST · Europe/Berlin ·
                synthetic example
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/40 text-xs font-bold text-violet-700 dark:text-violet-300 shrink-0">
              Partial — generated with declared gaps
            </span>
          </div>

          {/* Lifecycle State Row */}
          <div className="px-4 sm:px-5 py-2 bg-slate-50/50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex flex-wrap gap-1">
            {lifecycleStates.map((state) => {
              const isActive = state === activeLifecycleState;

              return (
                <span
                  key={state}
                  aria-current={isActive ? 'true' : undefined}
                  className={`px-2 py-1 rounded-full border text-[10px] font-bold ${
                    isActive
                      ? 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400'
                      : 'bg-white dark:bg-slate-800/60 border-neutral-200 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {state}
                </span>
              );
            })}
          </div>

          {/* Manifest Metadata Grid */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-b border-slate-200 dark:border-slate-800">
            {metaFields.map((field) => (
              <div
                key={field.label}
                className="px-4 sm:px-5 py-2.5 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(n+7)]:border-b-0"
              >
                <dt className="text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400 leading-4">
                  {field.label}
                </dt>
                <dd className="text-xs font-semibold text-slate-700 dark:text-slate-200 leading-5">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Evidence Item Table */}
          <div className="hidden md:block">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 dark:bg-slate-800/40 border-b border-slate-100 dark:border-slate-800/60 text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  <th scope="col" className="px-4 sm:px-5 py-2.5 w-72">
                    Evidence item · pinned version
                  </th>
                  <th scope="col" className="px-4 py-2.5 w-40">
                    State
                  </th>
                  <th scope="col" className="px-4 sm:px-5 py-2.5">
                    Reason
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                {evidenceItems.map((item) => (
                  <tr
                    key={item.title}
                    className={item.flagged ? 'bg-amber-50/40 dark:bg-amber-950/10' : undefined}
                  >
                    <td className="px-4 sm:px-5 py-2.5 align-top">
                      <span className="block text-xs font-bold text-slate-900 dark:text-white leading-5">
                        {item.title}
                      </span>
                      <span className="block text-xs text-slate-500 dark:text-slate-400 leading-5">
                        {item.reference}
                      </span>
                    </td>
                    <td className="px-4 py-2.5 align-top">
                      <StateChip state={item.state} />
                    </td>
                    <td className="px-4 sm:px-5 py-2.5 align-top text-xs text-slate-600 dark:text-slate-300 leading-5">
                      {item.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Evidence Items — Mobile */}
          <div className="md:hidden divide-y divide-slate-100 dark:divide-slate-800/60">
            {evidenceItems.map((item) => (
              <div
                key={item.title}
                className={`px-4 py-3 space-y-1.5 ${
                  item.flagged ? 'bg-amber-50/40 dark:bg-amber-950/10' : ''
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-slate-900 dark:text-white leading-5">
                      {item.title}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400 leading-5">
                      {item.reference}
                    </span>
                  </div>
                  <StateChip state={item.state} />
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-5">{item.reason}</p>
              </div>
            ))}
          </div>

          {/* Limitations Panel */}
          <div className="px-4 sm:px-5 pt-3 pb-3.5 bg-amber-50/50 dark:bg-amber-950/20 border-t border-amber-200 dark:border-amber-900/60 space-y-1">
            <span className="block text-[9px] font-bold uppercase tracking-wide text-amber-700 dark:text-amber-400">
              Limitations panel
            </span>
            <p className="text-xs text-amber-800 dark:text-amber-300 leading-5">
              Five of nine requested items are absent, redacted or in conflict, and each is named
              above. One item failed during packaging, which is why this bundle is Partial and not
              Ready. No integrity feature is supported for this package, so no checksum, signature or
              verification claim appears. Downstream state has not been verified. Evidence
              completeness for this purpose is <span className="font-bold">partial</span>.
            </p>
          </div>

          {/* Access Panel */}
          <div className="px-4 sm:px-5 pt-3 pb-3.5 bg-emerald-50/40 dark:bg-emerald-950/20 border-t border-emerald-100 dark:border-emerald-900/60 space-y-1">
            <span className="block text-[9px] font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
              Access panel
            </span>
            <p className="text-xs text-emerald-900/90 dark:text-emerald-200/90 leading-5">
              Who may access: the named internal reviewer, plus the generator. Access basis:
              purpose-bound authorization, checked server-side on every request. Delivery state: not
              requested. Access state: available. No expiry duration, download limit, or secure-link
              behaviour is stated, because none is a confirmed capability for this package.
            </p>
          </div>

          {/* Manifest Footer */}
          <div className="px-4 sm:px-5 py-2.5 bg-slate-50 dark:bg-slate-800/50 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
            <span>Manifest is the package contract · every absent item is represented at safe detail</span>
            <span>Synthetic example · illustrative state copy</span>
          </div>

        </div>
      </div>
    </section>
  );
}
