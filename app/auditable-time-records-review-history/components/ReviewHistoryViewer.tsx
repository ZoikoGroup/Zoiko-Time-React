import React from 'react';

type Tone = 'neutral' | 'green' | 'amber' | 'rose';

type Marker = 'source' | 'plain' | 'notice' | 'worker' | 'decision' | 'late' | 'reopened';

interface EventField {
  label: string;
  value: React.ReactNode;
}

interface TimelineEvent {
  title: string;
  time: React.ReactNode;
  marker: Marker;
  fields: EventField[];
  chip: { label: string; tone: Tone };
  /** Green relationship line — what this event supersedes, causes, or reopens. */
  link?: string;
  /** Callout that names the separation this event would otherwise be read as collapsing. */
  note?: { text: string; tone: Exclude<Tone, 'neutral' | 'green'> };
}

const chipStyles: Record<Tone, string> = {
  neutral:
    'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300',
  green:
    'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-400',
  amber:
    'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400',
  rose:
    'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400',
};

const noteStyles: Record<'amber' | 'rose', string> = {
  amber:
    'bg-amber-50/60 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/70 text-amber-800 dark:text-amber-300',
  rose:
    'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/70 text-rose-800 dark:text-rose-300',
};

const markerStyles: Record<Marker, string> = {
  source: 'bg-neutral-50 dark:bg-slate-800 border-blue-300 dark:border-blue-800',
  plain: 'bg-white dark:bg-slate-900 border-neutral-200 dark:border-slate-700',
  notice: 'bg-white dark:bg-slate-900 border-blue-400 dark:border-blue-600',
  worker: 'bg-white dark:bg-slate-900 border-green-400 dark:border-green-500',
  decision: 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-700 dark:border-emerald-400',
  late: 'bg-white dark:bg-slate-900 border-orange-300 dark:border-orange-500 border-dashed',
  reopened: 'bg-white dark:bg-slate-900 border-green-400 dark:border-green-500',
};

const events: TimelineEvent[] = [
  {
    title: 'Source received',
    time: '04 Aug · 06:58',
    marker: 'source',
    fields: [
      { label: 'Actor', value: 'Terminal connector SRC-4471 · service identity, not a decision-maker' },
      { label: 'Object', value: 'Record TR-77841 · version 1 created' },
      { label: 'Reason', value: 'Scheduled capture' },
    ],
    chip: { label: 'Recorded · not a human decision', tone: 'neutral' },
  },
  {
    title: 'Validation flagged missing context',
    time: '04 Aug · 19:04',
    marker: 'source',
    fields: [
      { label: 'Actor', value: 'System process · validation' },
      { label: 'Object', value: 'Version 1 · field: project reference' },
      { label: 'Reason', value: 'Required field absent for site work' },
      { label: 'Result', value: 'State: needs input' },
    ],
    chip: { label: 'Processing is not approval or judgment', tone: 'neutral' },
  },
  {
    title: 'Assigned for review',
    time: '05 Aug · 08:00',
    marker: 'plain',
    fields: [
      { label: 'Actor', value: 'Routing policy v4 · assigned to unit reviewer, Field Services North' },
      { label: 'Authority', value: 'Assignment only — not decision authority' },
    ],
    chip: { label: 'Review is not approval', tone: 'neutral' },
  },
  {
    title: 'Notice sent to worker',
    time: '05 Aug · 08:02',
    marker: 'notice',
    fields: [
      { label: 'Notice', value: 'Information required on your record' },
      { label: 'Generated', value: '05 Aug 08:01' },
      { label: 'Sent', value: '05 Aug 08:02' },
      { label: 'Delivered', value: '05 Aug 08:02' },
      { label: 'Acknowledged', value: 'Not acknowledged' },
    ],
    chip: { label: 'Delivered · acknowledgement not received', tone: 'amber' },
    note: {
      tone: 'amber',
      text: 'Delivery is not acknowledgement, and acknowledgement would not be agreement. These are three separate states and only two are known here.',
    },
  },
  {
    title: 'Correction requested by worker',
    time: '06 Aug · 08:14',
    marker: 'worker',
    fields: [
      { label: 'Actor', value: 'Worker · requester role — not reviewer or approver' },
      { label: 'Object', value: 'Version 1 · field: project reference' },
      {
        label: 'Reason',
        value: 'Category: missing at capture · “Reference was not available on site that morning.”',
      },
      {
        label: 'Result',
        value: (
          <>
            <span className="font-bold">No change to the governing record</span> — request
            recorded only
          </>
        ),
      },
    ],
    chip: { label: 'Request is not a correction', tone: 'neutral' },
  },
  {
    title: 'Reviewer recused, reassigned',
    time: '06 Aug · 11:20',
    marker: 'plain',
    fields: [
      { label: 'Prior owner', value: 'Unit reviewer A' },
      { label: 'New owner', value: 'Unit reviewer B' },
      {
        label: 'Reason',
        value: 'Category: separation of duties — prior owner was the record’s shift supervisor',
      },
      { label: 'Continuity', value: 'Prior activity remains attributable to reviewer A' },
    ],
    chip: { label: 'Recusal recorded · no invisible delegation', tone: 'green' },
  },
  {
    title: 'Correction accepted · version 2 created',
    time: '06 Aug · 15:42',
    marker: 'worker',
    fields: [
      { label: 'Actor', value: 'Unit reviewer B · scope: Field Services North' },
      { label: 'Before', value: 'Project reference: not provided' },
      { label: 'After', value: 'Project reference: PRJ-Northgate-02' },
      { label: 'Reason', value: 'Category: accepted worker context · evidence: worker statement' },
      { label: 'Result', value: 'Version 2 created and linked' },
    ],
    chip: { label: 'Applied · version 1 preserved', tone: 'green' },
    link: 'Supersedes version 1 · caused by correction request 06 Aug 08:14',
  },
  {
    title: 'Approved with condition · version 3 effective',
    time: '07 Aug · 09:30',
    marker: 'decision',
    fields: [
      { label: 'Actor', value: 'Unit reviewer B · authority scope: Field Services North, period records' },
      { label: 'Decision', value: 'Conditionally approved' },
      {
        label: 'Reason',
        value:
          'Category: context accepted · condition: project reference to be confirmed against the site register at period close',
      },
      { label: 'Decision time', value: '07 Aug 09:30' },
      { label: 'Effective time', value: '07 Aug 09:30 for review purposes' },
      { label: 'Separation of duties', value: 'Satisfied — approver was not the requester' },
    ],
    chip: { label: 'Authorized human decision', tone: 'green' },
    link: 'Supersedes version 2 · condition open',
  },
  {
    title: 'Released for external use',
    time: '08 Aug · 02:10',
    marker: 'plain',
    fields: [
      { label: 'Actor', value: 'Export service · scheduled run' },
      {
        label: 'Object',
        value: (
          <>
            <span className="font-bold">Version 1</span> — the package was prepared before the
            correction landed
          </>
        ),
      },
      { label: 'Result', value: 'Sent to configured payroll target' },
    ],
    chip: { label: 'Sent · acceptance separate', tone: 'amber' },
    note: {
      tone: 'amber',
      text: 'Decision is not execution. Approval at version 3 did not retroactively change what had already been prepared and sent at version 1.',
    },
  },
  {
    title: 'Receipt returned',
    time: '08 Aug · 02:14',
    marker: 'plain',
    fields: [
      { label: 'Actor', value: 'Target system · acknowledgement reference ACK-5510-1' },
      { label: 'Returned', value: 'Accepted · version 1' },
    ],
    chip: { label: 'Acceptance is not semantic correctness', tone: 'neutral' },
  },
  {
    title: 'Site register confirmation · late-arriving event',
    time: (
      <>
        Event 07 Aug · 16:05{' '}
        <span className="text-amber-700 dark:text-amber-400">· received 09 Aug 10:22</span>
      </>
    ),
    marker: 'late',
    fields: [
      { label: 'Actor', value: 'Site register connector · delayed feed' },
      { label: 'Object', value: 'Condition on the 07 Aug decision' },
      { label: 'Result', value: 'Condition satisfied — project reference confirmed' },
    ],
    chip: { label: 'Late arrival · original event time preserved', tone: 'amber' },
    note: {
      tone: 'amber',
      text: 'Inserted at its original event time with a late-arrival marker. The chronology you saw before this arrived is not silently rewritten, and source clock precision for this feed is limited to the minute.',
    },
  },
  {
    title: 'Reopened for downstream reconciliation',
    time: '09 Aug · 10:30',
    marker: 'reopened',
    fields: [
      { label: 'Actor', value: 'Payroll operations · reconciliation owner' },
      { label: 'Trigger', value: 'Failed verification — target holds version 1, current version is 3' },
      { label: 'Result', value: 'New linked review state · corrective event required' },
    ],
    chip: { label: 'Reopened · reconciliation open', tone: 'rose' },
    link: 'Reopened from the 07 Aug decision · related release 08 Aug',
    note: {
      tone: 'amber',
      text: 'Reversal is not available for a sent external package, so this proceeds as a corrective event rather than pretending a rollback occurred.',
    },
  },
];

export default function ReviewHistoryViewer() {
  return (
    <section className="w-full bg-white dark:bg-slate-900 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Review History Viewer
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            One synthetic record, twelve material events in chronological order. Each keeps its
            actor, authority, reason, effect, and relationship — and one arrives late without
            rewriting the chronology above it.
          </p>
        </div>

        {/* Viewer Card */}
        <div className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">

          {/* Record Context Bar */}
          <div className="px-4 sm:px-5 py-3.5 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Record TR-77841 · current version 3
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 leading-5">
                Field Services North · period 28 Jul – 03 Aug 2026 · times shown in Europe/Berlin ·
                all values synthetic
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-700/60 text-xs font-bold text-sky-800 dark:text-sky-300 shrink-0">
              Correction pending downstream
            </span>
          </div>

          {/* Current-Use Banner */}
          <div className="px-4 sm:px-5 pt-2.5 pb-3 bg-emerald-50/60 dark:bg-emerald-950/20 border-b border-emerald-100 dark:border-emerald-900/60 space-y-1">
            <span className="block text-[10px] font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-400">
              Current use — purpose-specific
            </span>
            <p className="text-xs leading-5 text-emerald-900/90 dark:text-emerald-200/90">
              Version 3 is current for review and approved. Version 1 was released externally on 08
              Aug and the target still holds it. So this record is simultaneously “approved at v3”
              and “externally released at v1” — those are different statements about the same
              record, and neither cancels the other.
            </p>
          </div>

          {/* Chronological Event List */}
          <ol className="px-4 sm:px-5 py-5">
            {events.map((event, idx) => {
              const isLast = idx === events.length - 1;

              return (
                <li key={event.title} className="relative pl-8 sm:pl-9">
                  {/* Connector Rail */}
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[9px] top-7 bottom-0 w-px bg-neutral-200 dark:bg-slate-800"
                    />
                  )}

                  {/* Event Marker */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-3 h-5 w-5 rounded-full border-2 ${markerStyles[event.marker]}`}
                  />

                  <div
                    className={`py-3 space-y-1.5 ${
                      isLast ? '' : 'border-b border-slate-100 dark:border-slate-800/60'
                    }`}
                  >
                    {/* Title & Time */}
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                      <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {event.title}
                      </h3>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {event.time}
                      </span>
                    </div>

                    {/* Attribution Fields */}
                    <dl className="grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-4">
                      {event.fields.map((field) => (
                        <React.Fragment key={field.label}>
                          <dt className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-5">
                            {field.label}
                          </dt>
                          <dd className="text-xs text-slate-700 dark:text-slate-300 leading-5 sm:mb-0 mb-1">
                            {field.value}
                          </dd>
                        </React.Fragment>
                      ))}
                    </dl>

                    {/* State Chip */}
                    <div
                      className={`inline-flex items-center px-2 py-0.5 rounded-md border text-[10px] font-bold ${chipStyles[event.chip.tone]}`}
                    >
                      {event.chip.label}
                    </div>

                    {/* Relationship Line */}
                    {event.link && (
                      <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 leading-5">
                        {event.link}
                      </p>
                    )}

                    {/* Separation Callout */}
                    {event.note && (
                      <div
                        className={`px-2.5 py-2 rounded-lg border text-xs leading-5 ${noteStyles[event.note.tone]}`}
                      >
                        {event.note.text}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Viewer Footer */}
          <div className="px-4 sm:px-5 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
            <span>Ordered list is the primary representation · every state carries text plus an icon</span>
            <span>Synthetic record</span>
          </div>

        </div>
      </div>
    </section>
  );
}
