import React from 'react';
import Link from 'next/link';
import AccessBadge, { type AccessClass } from './AccessBadge';

const filters = [
  'Security',
  'Privacy',
  'Governance',
  'AI',
  'Accessibility',
  'Reliability',
  'Procurement',
  'Status',
  'Access level',
  'Owner',
  'Last reviewed',
];

type NoteTone = 'caution' | 'muted';

type EvidenceRecord = {
  title: string;
  access: AccessClass;
  kicker: string;
  rows: { label: string; value: string }[];
  note: { label: string; body: React.ReactNode; tone: NoteTone };
  action: { label: string; href?: string };
  /** Withdrawn records are visually de-emphasised and carry no positive claim. */
  retired?: boolean;
};

const records: EvidenceRecord[] = [
  {
    title: 'Security control-domain summary',
    access: 'Public',
    kicker: 'Control summary · Security',
    rows: [
      { label: 'Scope', value: 'Core platform, production environment' },
      { label: 'Status', value: 'Current' },
      { label: 'Owner', value: 'Security & Trust Governance' },
      { label: 'Effective', value: '01 Jun 2026' },
      { label: 'Last reviewed', value: '01 Jul 2026' },
      { label: 'Next review', value: '01 Jan 2027' },
    ],
    note: {
      label: 'Does not prove',
      tone: 'caution',
      body: 'Describes approved control domains and their status. It is not a certification, a penetration-test result, or evidence about your configuration.',
    },
    action: { label: 'Open summary', href: '/security-overview' },
  },
  {
    title: 'Data-flow overview',
    access: 'Public summary',
    kicker: 'Architecture summary · Security',
    rows: [
      { label: 'Scope', value: 'Platform data categories and movement' },
      { label: 'Status', value: 'Current' },
      { label: 'Owner', value: 'Platform architecture' },
      { label: 'Effective', value: '12 May 2026' },
      { label: 'Last reviewed', value: '12 May 2026' },
      { label: 'Next review', value: '—' },
    ],
    note: {
      label: 'Restricted detail not published',
      tone: 'caution',
      body: 'Topology, addresses, credentials, and tenant-level configuration are excluded by policy. A public-safe summary only.',
    },
    action: { label: 'Open summary', href: '/security' },
  },
  {
    title: 'Anti-surveillance data boundary',
    access: 'Public',
    kicker: 'Policy / principle · Privacy',
    rows: [
      { label: 'Scope', value: 'All tiers and configurations' },
      { label: 'Status', value: 'Current' },
      { label: 'Owner', value: 'Product governance' },
      { label: 'Effective', value: '01 Jan 2026' },
      { label: 'Last reviewed', value: '22 Jun 2026' },
      { label: 'Next review', value: '22 Dec 2026' },
    ],
    note: {
      label: 'Does not prove',
      tone: 'caution',
      body: 'States a binding product boundary. It is not a legal compliance conclusion for your jurisdiction.',
    },
    action: { label: 'Open summary', href: '/privacy-controls' },
  },
  {
    title: 'Security testing approach',
    access: 'Public summary',
    kicker: 'Assurance artifact · Security',
    rows: [
      { label: 'Scope', value: 'Approach and cadence only' },
      { label: 'Status', value: 'Under review' },
      { label: 'Owner', value: 'Security' },
      { label: 'Effective', value: '—' },
      { label: 'Last reviewed', value: '01 Jul 2026' },
      { label: 'Next review', value: '—' },
    ],
    note: {
      label: 'Under review — do not treat as current',
      tone: 'caution',
      body: 'Currency and scope are being re-evaluated. No exploitable detail is published, and no current test result is implied.',
    },
    action: { label: 'Review ongoing' },
  },
  {
    title: 'Independent assurance artifact',
    access: 'Controlled access',
    kicker: 'Assurance artifact · Security',
    rows: [
      { label: 'Scope', value: 'Stated in the artifact' },
      { label: 'Status', value: 'Controlled' },
      { label: 'Owner', value: 'Security & Trust Governance' },
      { label: 'Effective', value: 'Per artifact' },
      { label: 'Last reviewed', value: '01 Jul 2026' },
      { label: 'Next review', value: '—' },
    ],
    note: {
      label: 'Why this is not public',
      tone: 'caution',
      body: 'Contains detail that is not approved for public disclosure. No preview of restricted content is shown, and no issuer name or logo appears without current verified evidence.',
    },
    action: { label: 'Request controlled access', href: '/request-privacy-review' },
  },
  {
    title: 'Accessibility conformance summary',
    access: 'Public',
    kicker: 'Accessibility artifact · Accessibility',
    rows: [
      { label: 'Scope', value: 'Tested journeys, per platform' },
      { label: 'Status', value: 'Current' },
      { label: 'Owner', value: 'Accessibility' },
      { label: 'Effective', value: '22 Jun 2026' },
      { label: 'Last reviewed', value: '22 Jun 2026' },
      { label: 'Next review', value: '22 Dec 2026' },
    ],
    note: {
      label: 'Does not prove',
      tone: 'caution',
      body: 'Conformance is stated per journey and platform, with known limitations published. It is not a platform-wide claim.',
    },
    action: { label: 'Open on Accessibility', href: '/accessibility' },
  },
  {
    title: 'Questionnaire response library',
    access: 'Customer-specific',
    kicker: 'Contractual resource · Procurement',
    rows: [
      { label: 'Scope', value: 'Per engagement' },
      { label: 'Status', value: 'Not public' },
      { label: 'Owner', value: 'Procurement & Legal' },
      { label: 'Effective', value: '—' },
      { label: 'Last reviewed', value: '—' },
      { label: 'Next review', value: '—' },
    ],
    note: {
      label: 'Why this is not public',
      tone: 'caution',
      body: 'Questionnaire responses are engagement-specific and are never published as a searchable answer set. Routed through the approved procurement pathway.',
    },
    action: { label: 'Procurement & Legal', href: '/procurement-and-legal-resources' },
  },
  {
    title: 'Legacy “enterprise-grade security” claim',
    access: 'Withdrawn',
    kicker: 'Correction notice · Security',
    retired: true,
    rows: [
      { label: 'Withdrawn', value: '02 Jun 2026' },
      { label: 'Reason', value: 'Unsupported — no defined scope or evidence' },
      { label: 'Owner', value: 'Trust & Governance' },
      { label: 'Replacement', value: 'Security control-domain summary' },
    ],
    note: {
      label: 'Excluded from current results',
      tone: 'muted',
      body: 'The positive claim has been removed from evidence listings, search, and structured data. This neutral withdrawal notice remains for transparency.',
    },
    action: { label: 'Open replacement', href: '/security-overview' },
  },
  {
    title: 'Operational status & incident history',
    access: 'Public',
    kicker: 'Operational record · Reliability',
    rows: [
      { label: 'Scope', value: 'Current operational state' },
      { label: 'Status', value: 'Current — live' },
      { label: 'Owner', value: 'Platform operations' },
      { label: 'Effective', value: 'Continuous' },
      { label: 'Last reviewed', value: 'Live' },
      { label: 'Next review', value: '—' },
    ],
    note: {
      label: 'Different kind of truth',
      tone: 'caution',
      body: (
        <>
          System Status is authoritative for live operational state. It is{' '}
          <span className="font-bold">not</span> a substitute for security evidence, and
          security evidence never overrides it.
        </>
      ),
    },
    action: { label: 'Open System Status', href: '/system-status' },
  },
];

const noteStyles: Record<NoteTone, { wrap: string; label: string; body: string }> = {
  caution: {
    wrap: 'border-t border-amber-200 bg-amber-50/40 dark:border-amber-900/50 dark:bg-amber-950/20',
    label: 'text-amber-800 dark:text-amber-400',
    body: 'text-amber-900/80 dark:text-amber-200/80',
  },
  muted: {
    wrap: 'border-t border-stone-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60',
    label: 'text-zinc-500 dark:text-slate-400',
    body: 'text-zinc-600 dark:text-slate-400',
  },
};

export default function PublicEvidenceDirectory() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-200">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Section heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center">

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-3xl md:text-4xl">
            Public evidence directory
          </h2>

          <p className="max-w-[645px] text-sm leading-7 text-zinc-700 dark:text-slate-300 sm:text-base">
            Every record answers the same five questions before it asks anything of you:{' '}
            <span className="font-bold text-sky-950 dark:text-white">
              what is this, what does it cover, how current is it, who owns it, and what
              does it not prove?
            </span>
          </p>

        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold leading-5 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Records */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {records.map((record) => {
            const tone = noteStyles[record.note.tone];

            return (
              <article
                key={record.title}
                className={`flex flex-col overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800 ${
                  record.retired
                    ? 'bg-slate-50/80 dark:bg-slate-900/50'
                    : 'bg-white dark:bg-slate-900'
                }`}
              >

                {/* Card header */}
                <div className="flex flex-col gap-1.5 border-b border-stone-200 px-4 py-3.5 dark:border-slate-800">

                  <div className="flex flex-wrap items-start justify-between gap-2">

                    <h3
                      className={`text-base font-bold leading-5 ${
                        record.retired
                          ? 'text-zinc-500 dark:text-slate-400'
                          : 'text-sky-950 dark:text-white'
                      }`}
                    >
                      {record.title}
                    </h3>

                    <AccessBadge access={record.access} />

                  </div>

                  <p className="text-[9px] font-extrabold uppercase leading-4 tracking-wide text-zinc-500 dark:text-slate-400">
                    {record.kicker}
                  </p>

                </div>

                {/* Metadata */}
                <dl className="grid flex-1 grid-cols-[92px_1fr] content-start gap-x-3 gap-y-1 px-4 py-5 sm:grid-cols-[104px_1fr]">
                  {record.rows.map((row) => (
                    <div key={row.label} className="contents">

                      <dt className="text-xs font-semibold leading-5 text-zinc-500 dark:text-slate-400">
                        {row.label}
                      </dt>

                      <dd className="text-xs font-normal leading-5 text-sky-900 dark:text-slate-200">
                        {row.value}
                      </dd>

                    </div>
                  ))}
                </dl>

                {/* Limitation note */}
                <div className={`flex flex-col gap-1 px-4 py-2.5 ${tone.wrap}`}>

                  <span
                    className={`text-[8px] font-bold uppercase leading-3 tracking-wide ${tone.label}`}
                  >
                    {record.note.label}
                  </span>

                  <p className={`text-xs font-normal leading-5 ${tone.body}`}>
                    {record.note.body}
                  </p>

                </div>

                {/* Action */}
                <div className="border-t border-stone-200 px-4 py-2.5 dark:border-slate-800">
                  {record.action.href ? (
                    <Link
                      href={record.action.href}
                      className={`group inline-flex items-center gap-1.5 text-xs font-bold leading-5 transition ${
                        record.access === 'Public' || record.access === 'Public summary'
                          ? 'text-emerald-700 hover:text-emerald-800 dark:text-emerald-400'
                          : 'text-amber-700 hover:text-amber-800 dark:text-amber-400'
                      }`}
                    >
                      <span>{record.action.label}</span>
                      <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ) : (
                    <span className="text-xs font-bold leading-5 text-amber-700 dark:text-amber-400">
                      {record.action.label}
                    </span>
                  )}
                </div>

              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Default results prioritize current public items. Superseded and withdrawn records
          are excluded from current listings and from structured data. Search covers
          approved public metadata only — search terms are never captured in analytics or
          routed to sales.
        </p>

      </div>
    </section>
  );
}
