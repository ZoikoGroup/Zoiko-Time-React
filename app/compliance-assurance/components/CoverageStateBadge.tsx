import type { AssuranceTone } from "./AssuranceStatusPill";

const coverageToneStyles: Record<AssuranceTone, string> = {
  neutral:
    "border-stone-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  green:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  amber:
    "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/40 dark:bg-amber-950/40 dark:text-amber-300",
  blue: "border-blue-100 bg-blue-50 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300",
  violet:
    "border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-900/40 dark:bg-violet-950/40 dark:text-violet-300",
  red: "border-stone-200 bg-slate-50 text-red-600 dark:border-slate-700 dark:bg-red-950/40 dark:text-red-300",
};

export default function CoverageStateBadge({
  label,
  tone,
}: {
  label: string;
  tone: AssuranceTone;
}) {
  return (
    <span
      className={`inline-flex rounded-md border px-2 pb-1 pt-[3px] text-xs font-bold leading-5 ${coverageToneStyles[tone]}`}
    >
      {label}
    </span>
  );
}
