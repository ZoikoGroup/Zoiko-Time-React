import React from 'react';

/**
 * The four access classes plus the two lifecycle labels that replace an access
 * class once a record leaves current listings. Kept in one place so a record can
 * never be styled "Public" in the directory and "Controlled" in the state table.
 */
export type AccessClass =
  | 'Public'
  | 'Public summary'
  | 'Controlled access'
  | 'Customer-specific'
  | 'Withdrawn';

const accessStyles: Record<AccessClass, string> = {
  Public:
    'border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300',
  'Public summary':
    'border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300',
  'Controlled access':
    'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300',
  'Customer-specific':
    'border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300',
  Withdrawn:
    'border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300',
};

export default function AccessBadge({
  access,
  className = '',
}: {
  access: AccessClass;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 whitespace-nowrap rounded-md border px-2 py-1 text-[10px] font-bold leading-4 ${accessStyles[access]} ${className}`}
    >
      {access}
    </span>
  );
}
