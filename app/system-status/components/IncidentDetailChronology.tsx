import React from 'react';

interface ChronologyUpdate {
  time: string;
  statusTag: string;
  statusType: 'critical' | 'info' | 'warning';
  correctionTag?: string;
  content: string;
  correctionText?: string;
}

interface Milestone {
  time: string;
  label: string;
}

const updates: ChronologyUpdate[] = [
  {
    time: '07 Aug 09:20 UTC',
    statusTag: 'Mitigating',
    statusType: 'critical',
    content:
      'Export processing capacity has been increased and the queue is draining. Some exports submitted between 06:18 and 08:40 UTC may still fail and require resubmission. Next update by 11:00 UTC.',
  },
  {
    time: '07 Aug 08:05 UTC',
    statusTag: 'Identified',
    statusType: 'info',
    correctionTag: 'Corrected 08:22',
    content:
      'A fault in the export processing path has been identified. Mitigation is in progress.',
    correctionText:
      'Correction (08:22 UTC): the original update stated all regions were affected. The confirmed scope is the EU region only. The prior wording is preserved above this correction rather than replaced.',
  },
  {
    time: '07 Aug 06:52 UTC',
    statusTag: 'Investigating',
    statusType: 'warning',
    content:
      'We are investigating reports of delayed and failing report exports. Viewing reports in-product appears unaffected. Scope is not yet confirmed.',
  },
];

const milestones: Milestone[] = [
  { time: '06:18 UTC', label: 'Impact started' },
  { time: '06:31 UTC', label: 'Detected by operating team' },
  { time: '06:52 UTC', label: 'First public update' },
  { time: '08:05 UTC', label: 'Identified' },
  { time: '08:40 UTC', label: 'Mitigation applied' },
  { time: 'Pending', label: 'Monitoring · recovery verification · resolution · closure' },
];

const reviewStates = ['Not required', 'Pending', 'Restricted', 'Published', 'Unavailable'];

export default function IncidentDetailChronology() {
  return (
    <section id="chronology" className="w-full bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans transition-colors">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
        
        {/* LEFT COLUMN: Incident Detail & Chronology */}
        <div className="flex flex-col gap-6">
          {/* Column Header */}
          <header className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Incident Detail &amp; Chronology
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              INC-2026-0814 — an attributable linear record
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
              Newest first by default, with an accessible oldest-first option. Prior updates are never silently edited — corrections are versioned and marked.
            </p>
          </header>

          {/* Timeline Stream */}
          <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 pl-6 flex flex-col gap-8 py-2">
            {updates.map((update, idx) => (
              <div key={idx} className="relative flex flex-col gap-2">
                {/* Timeline Node Bullet */}
                <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 shrink-0" />

                {/* Update Timestamp & Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                    {update.time}
                  </span>
                  
                  {/* Primary Status Tag */}
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      update.statusType === 'critical'
                        ? 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-400 border border-rose-200 dark:border-rose-900'
                        : update.statusType === 'warning'
                        ? 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-900'
                        : 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-400 border border-sky-200 dark:border-sky-900'
                    }`}
                  >
                    {update.statusTag}
                  </span>

                  {/* Correction Badge */}
                  {update.correctionTag && (
                    <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-300 dark:border-amber-800 rounded-full">
                      {update.correctionTag}
                    </span>
                  )}
                </div>

                {/* Primary Text */}
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {update.content}
                </p>

                {/* Correction Box (if applicable) */}
                {update.correctionText && (
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    <strong className="font-bold text-slate-800 dark:text-slate-200">
                      Correction (08:22 UTC):
                    </strong>{' '}
                    {update.correctionText.replace('Correction (08:22 UTC): ', '')}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Milestones Sub-Section */}
          <div className="flex flex-col gap-3 pt-4">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Milestones
            </span>
            <div className="divide-y divide-slate-100 dark:divide-slate-800/80 border-y border-slate-100 dark:border-slate-800/80">
              {milestones.map((ms, idx) => (
                <div key={idx} className="py-2.5 flex items-start gap-4 text-xs">
                  <span className="w-24 font-bold text-slate-500 dark:text-slate-400 shrink-0">
                    {ms.time}
                  </span>
                  <span className="text-slate-700 dark:text-slate-300 flex-1">
                    {ms.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Resolution & Verification */}
        <div className="flex flex-col gap-6">
          {/* Column Header */}
          <header className="flex flex-col gap-2">
            <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              Resolution &amp; Verification
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
              Why an incident can be called resolved
            </h2>
          </header>

          {/* What a resolution states Box */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              What a resolution states
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 shrink-0 mt-2" />
                <span>Resolution time and verification scope</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 shrink-0 mt-2" />
                <span>Approved health indicators and reconciliation categories, at a safe level</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 shrink-0 mt-2" />
                <span>Known residual effects, backlogs, or actions you may need to take</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-sm bg-emerald-500 shrink-0 mt-2" />
                <span>Post-incident review state</span>
              </li>
            </ul>
          </div>

          {/* Post-Incident Review States Box */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Post-incident review states
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              {reviewStates.map((state, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    state === 'Published'
                      ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900'
                      : state === 'Pending'
                      ? 'bg-sky-50 text-sky-700 dark:bg-sky-950/60 dark:text-sky-400 border-sky-200 dark:border-sky-900'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {state}
                </span>
              ))}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              “Pending” does not imply a public report will necessarily be published.
            </p>
          </div>

          {/* Two Claims We Will Not Make Callout */}
          <div className="p-5 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/80 flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wide text-rose-700 dark:text-rose-400">
              Two claims we will not make
            </span>
            <p className="text-xs text-rose-800 dark:text-rose-300 leading-relaxed">
              No universal “no data was lost” statement without verified reconciliation and approved evidence. And public resolution never means all customer-specific remediation is complete — account-specific reconciliation routes to{' '}
              <a
                href="/contact"
                className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Enterprise Support
              </a>
              .
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
