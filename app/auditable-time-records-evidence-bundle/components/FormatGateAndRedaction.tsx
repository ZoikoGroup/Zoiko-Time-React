import React from 'react';

type GateStatus = 'Registry only' | 'Not claimed' | 'Required';

interface GateRow {
  capability: string;
  status: GateStatus;
}

const gateRows: GateRow[] = [
  { capability: 'File or package format', status: 'Registry only' },
  { capability: 'Machine-readable schema and version', status: 'Registry only' },
  { capability: 'Checksum or hash', status: 'Not claimed' },
  { capability: 'Digital signature or certificate', status: 'Not claimed' },
  { capability: 'Encryption, password, or secure link', status: 'Not claimed' },
  { capability: 'Watermark or classification label', status: 'Not claimed' },
  { capability: 'Compression or archive container', status: 'Not claimed' },
  { capability: 'Manifest as the package contract', status: 'Required' },
  { capability: 'Human-readable summary', status: 'Required' },
];

const statusStyles: Record<GateStatus, string> = {
  'Registry only':
    'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/60 text-rose-700 dark:text-rose-400',
  'Not claimed':
    'bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900/60 text-rose-700 dark:text-rose-400',
  Required:
    'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300',
};

const redactionStates: string[] = [
  'That content was removed or masked',
  'The category of what was redacted',
  'The purpose basis for the redaction',
];

export default function FormatGateAndRedaction() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* Capability Gate Column */}
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Format and integrity capability gate
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              This page names no file format and no integrity feature. Every one of them is gated on
              a capability registry, and a marketing page is not a registry.
            </p>
          </div>

          <ul className="rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
            {gateRows.map((row) => (
              <li
                key={row.capability}
                className="flex items-stretch justify-between gap-3 border-b border-slate-100 dark:border-slate-800/60 last:border-b-0"
              >
                <span className="px-4 py-3 text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {row.capability}
                </span>
                <span
                  className={`shrink-0 flex items-center justify-center px-4 border-l text-xs font-bold ${statusStyles[row.status]}`}
                >
                  {row.status}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            No placeholder formats and no “coming soon.” Where a checksum is technically implemented,
            verified, and approved it may be rendered — and even then it never implies tamper-proofing
            or a legal chain of custody.
          </p>
        </div>

        {/* Redaction Column */}
        <div className="flex flex-col gap-5">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Redaction and sensitive data
          </h2>

          {/* What A Redaction States */}
          <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              What a redaction states
            </h3>
            <ul className="space-y-2">
              {redactionStates.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 rounded-full bg-green-500 shrink-0"
                  />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              And never the value itself, nor enough surrounding detail to reconstruct it.
            </p>
          </div>

          {/* Watermark Callout */}
          <div className="p-4 sm:p-5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 space-y-1.5">
            <span className="block text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
              A watermark is not access control
            </span>
            <p className="text-sm text-rose-800 dark:text-rose-200 leading-relaxed">
              Where a classification label or watermark capability exists, it supplements access
              control. It never substitutes for it — a labelled document in the wrong hands is still
              in the wrong hands.
            </p>
          </div>

          {/* Worker-Safe Review */}
          <div className="p-5 sm:p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Worker-safe review</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Before a bundle is generated, the builder shows what a worker-visible package would
              contain, so a reviewer can see the package as its subject would. Free-text worker
              statements are redacted by default for purposes that do not require them.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
