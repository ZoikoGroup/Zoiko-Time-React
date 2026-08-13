import React from 'react';
import AccessBadge, { type AccessClass } from './AccessBadge';

const accessClasses: { access: AccessClass; meaning: string }[] = [
  { access: 'Public', meaning: 'full approved resource available' },
  { access: 'Public summary', meaning: 'restricted detail not published' },
  { access: 'Controlled access', meaning: 'governed review or entitlement required' },
  { access: 'Customer-specific', meaning: 'routed through an approved pathway' },
];

type StatusTone = 'green' | 'blue' | 'neutral' | 'red' | 'amber';

const statusStyles: Record<StatusTone, string> = {
  green: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
  blue: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
  neutral: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300',
  red: 'bg-red-50 text-red-600 dark:bg-red-950/40 dark:text-red-300',
  amber: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
};

type StatusRow = {
  status: string;
  tone: StatusTone;
  meaning: string;
  behaviour: React.ReactNode;
  /** Highlighted because defaulting this one to positive is the failure mode. */
  emphasis?: boolean;
};

const statuses: StatusRow[] = [
  {
    status: 'Current',
    tone: 'green',
    meaning: 'Approved evidence is current for the displayed scope.',
    behaviour: 'Show scope, owner, relevant dates, and limitations.',
  },
  {
    status: 'Under review',
    tone: 'blue',
    meaning: 'Currency or scope is being re-evaluated.',
    behaviour: (
      <>
        <span className="font-bold text-sky-950 dark:text-white">
          Do not present as current.
        </span>{' '}
        Explain that review is ongoing.
      </>
    ),
  },
  {
    status: 'Superseded',
    tone: 'neutral',
    meaning: 'A newer approved version replaces this one.',
    behaviour: 'Show the replacement; remove from default current results.',
  },
  {
    status: 'Withdrawn',
    tone: 'red',
    meaning: 'The artifact or claim is no longer public or current.',
    behaviour:
      'Remove the positive claim; show a neutral withdrawal notice where approved.',
  },
  {
    status: 'Expired',
    tone: 'neutral',
    meaning: 'The validity or effective period has ended.',
    behaviour: 'Never usable as current assurance.',
  },
  {
    status: 'Unavailable / cannot verify',
    tone: 'amber',
    meaning: 'The current state cannot be verified.',
    emphasis: true,
    behaviour: (
      <>
        Say so, or suppress the claim.{' '}
        <span className="font-bold text-sky-950 dark:text-white">
          Never default to a positive status.
        </span>
      </>
    ),
  },
];

export default function AccessClassesAndStates() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-200">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Section heading */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center">

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-3xl md:text-4xl">
            Four access classes, ten evidence states
          </h2>

          <p className="text-sm leading-7 text-zinc-700 dark:text-slate-300 sm:text-base">
            Access level and status are different axes. A record can be Public and Under
            Review at the same time, and neither implies the other.
          </p>

        </div>

        {/* Access classes */}
        <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">

            <span className="text-[10px] font-extrabold uppercase leading-5 tracking-wider text-zinc-500 dark:text-slate-400 sm:pt-1">
              Access
            </span>

            <div className="flex flex-wrap gap-2">
              {accessClasses.map((item) => (
                <span
                  key={item.access}
                  className="inline-flex max-w-full items-center gap-1.5 rounded-md"
                >
                  <AccessBadge
                    access={item.access}
                    className="!whitespace-normal !text-left"
                  />
                  <span className="text-[11px] font-normal leading-4 text-zinc-600 dark:text-slate-400">
                    — {item.meaning}
                  </span>
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Status table */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">

              <thead>
                <tr className="border-b border-stone-200 dark:border-slate-800">
                  {['Status', 'Meaning', 'Required public behaviour'].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="px-4 py-3.5 text-[10px] font-extrabold uppercase leading-5 tracking-wider text-zinc-500 dark:text-slate-400"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {statuses.map((row) => (
                  <tr
                    key={row.status}
                    className={`border-b border-stone-200 last:border-0 dark:border-slate-800 ${
                      row.emphasis ? 'bg-rose-50/50 dark:bg-rose-950/20' : ''
                    }`}
                  >

                    <td className="px-4 py-4 align-top">
                      <span
                        className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-bold leading-5 ${statusStyles[row.tone]}`}
                      >
                        {row.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.meaning}
                    </td>

                    <td className="px-4 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.behaviour}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

        {/* Semantics law */}
        <div className="mx-auto mt-6 max-w-[900px] space-y-1.5 rounded-xl border border-rose-200 bg-rose-50 p-4 dark:border-rose-900/60 dark:bg-rose-950/30 sm:p-5">

          <span className="block text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
            Semantics law
          </span>

          <p className="text-xs leading-relaxed text-rose-800 dark:text-rose-200 sm:text-sm">
            A public evidence record proves only what its stated type, scope, period, method
            or authority, status, and limitations support.{' '}
            <span className="font-bold">
              “Current” does not mean globally secure, compliant with every law, suitable for
              every deployment, or effective in every customer configuration.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}
