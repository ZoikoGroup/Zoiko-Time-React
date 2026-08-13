import React from 'react';

/**
 * Item-state tones shared by the manifest and the thirteen-item-states table,
 * so a state can never be styled as "included" in one place and "missing" in the other.
 */
export type StateTone = 'included' | 'excluded' | 'caution' | 'failed';

const toneStyles: Record<StateTone, string> = {
  included:
    'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-100 dark:border-emerald-900 text-[#2e8b57] dark:text-green-400',
  excluded:
    'bg-neutral-100 dark:bg-slate-800 border-neutral-200 dark:border-slate-700 text-slate-600 dark:text-slate-300',
  caution:
    'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-700 dark:text-amber-400',
  failed:
    'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-400',
};

export const stateTones: Record<string, StateTone> = {
  Included: 'included',
  'Excluded by user': 'excluded',
  'Excluded by purpose': 'excluded',
  'Excluded by permission': 'excluded',
  Restricted: 'excluded',
  Unavailable: 'caution',
  Missing: 'caution',
  Stale: 'caution',
  Superseded: 'caution',
  Redacted: 'caution',
  Conflicting: 'caution',
  Unknown: 'caution',
  'Failed during packaging': 'failed',
};

export default function StateChip({ state }: { state: string }) {
  const tone = stateTones[state] ?? 'excluded';

  return (
    <span
      className={`inline-flex items-center px-1.5 py-[3px] rounded-md border text-[9px] font-extrabold tracking-tight whitespace-nowrap ${toneStyles[tone]}`}
    >
      {state}
    </span>
  );
}
