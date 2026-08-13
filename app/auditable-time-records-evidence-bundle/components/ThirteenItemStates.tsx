import React from 'react';
import StateChip from './StateChip';

interface ItemState {
  state: string;
  definition: string;
  displayRule: React.ReactNode;
  emphasised?: boolean;
}

const itemStates: ItemState[] = [
  {
    state: 'Included',
    definition: 'Authorized item packaged at its pinned version.',
    displayRule: 'Show the version and the reason it was used.',
  },
  {
    state: 'Excluded by user',
    definition: 'Authorized item deliberately not selected.',
    displayRule: 'Show the selection decision where safe.',
  },
  {
    state: 'Excluded by purpose',
    definition: 'Not needed or permitted for the selected purpose.',
    displayRule: 'Explain the purpose rule without exposing protected logic.',
  },
  {
    state: 'Excluded by permission',
    definition: 'Viewer or requester not authorized.',
    emphasised: true,
    displayRule: (
      <span className="font-bold text-slate-900 dark:text-white">
        Do not leak a hidden identifier, count, or title.
      </span>
    ),
  },
  {
    state: 'Unavailable',
    definition: 'A known item cannot currently be retrieved or packaged.',
    displayRule: 'Show a safe reason, plus retry or support where applicable.',
  },
  {
    state: 'Missing',
    definition: 'An expected evidence reference is absent.',
    displayRule: (
      <>
        State the gap.{' '}
        <span className="font-bold text-slate-900 dark:text-white">Do not infer content.</span>
      </>
    ),
  },
  {
    state: 'Stale',
    definition: 'Evidence or source status requires review for current use.',
    displayRule: 'Preserve the historical version and show the warning.',
  },
  {
    state: 'Superseded',
    definition: 'A later version exists.',
    displayRule: 'Show the exact version packaged and its relationship to current.',
  },
  {
    state: 'Restricted',
    definition: 'Existence or detail limited by policy or role.',
    displayRule: 'Use a controlled generic description.',
  },
  {
    state: 'Redacted',
    definition: 'Some permitted content removed or masked.',
    displayRule: 'State the redaction category without revealing the value.',
  },
  {
    state: 'Conflicting',
    definition: 'Evidence objects disagree, or authority is unresolved.',
    displayRule: 'Keep both and the limitation visible where permission allows.',
  },
  {
    state: 'Unknown',
    definition: 'The system cannot establish the item state.',
    displayRule: (
      <span className="font-bold text-slate-900 dark:text-white">
        Never map to available or complete.
      </span>
    ),
  },
  {
    state: 'Failed during packaging',
    definition: 'A selected item could not be added.',
    displayRule:
      'The final manifest marks the failure; the bundle becomes partial or failed per policy.',
  },
];

export default function ThirteenItemStates() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Header Section */}
        <div className="max-w-3xl text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
            Thirteen item states
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A bundle item is not simply in or out. The reason it is out determines what may safely be
            said about it.
          </p>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-xs font-bold uppercase tracking-wide text-slate-900 dark:text-slate-200">
                <th scope="col" className="w-40 lg:w-44 px-4 pt-3 pb-3.5">
                  State
                </th>
                <th scope="col" className="w-64 lg:w-96 px-4 pt-3 pb-3.5">
                  Definition
                </th>
                <th scope="col" className="px-4 pt-3 pb-3.5">
                  Display rule
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
              {itemStates.map((item) => (
                <tr
                  key={item.state}
                  className={
                    item.emphasised
                      ? 'bg-rose-50/40 dark:bg-rose-950/20'
                      : 'hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors'
                  }
                >
                  <td className="px-4 pt-4 pb-3.5 align-top">
                    <StateChip state={item.state} />
                  </td>
                  <td className="px-4 py-3.5 align-top text-slate-600 dark:text-slate-300 leading-6">
                    {item.definition}
                  </td>
                  <td className="px-4 py-3.5 align-top text-slate-600 dark:text-slate-300 leading-6">
                    {item.displayRule}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="grid md:hidden grid-cols-1 gap-4 w-full">
          {itemStates.map((item) => (
            <div
              key={item.state}
              className={`p-5 rounded-2xl border space-y-3 ${
                item.emphasised
                  ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/60'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <StateChip state={item.state} />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.definition}
              </p>
              <div className="space-y-1">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Display rule
                </span>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.displayRule}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
