import type { ReactNode } from "react";
import StatusPill, { type Tone } from "./StatusPill";

export type PracticeCardProps = {
  title: string;
  status: { label: string; tone: Tone };
  objective: string;
  rows: { label: string; value: ReactNode }[];
  limitation: ReactNode;
};

export default function PracticeCard({
  title,
  status,
  objective,
  rows,
  limitation,
}: PracticeCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

      {/* Header */}
      <div className="flex flex-col gap-3 px-6 pb-4 pt-6 sm:flex-row sm:items-start sm:justify-between">

        <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
          {title}
        </h3>

        <StatusPill label={status.label} tone={status.tone} />

      </div>

      {/* Objective */}
      <div className="mx-6 rounded-xl border border-stone-200 bg-slate-50/60 px-4 py-3 dark:border-slate-800 dark:bg-slate-950/40">

        <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
          <span className="font-bold text-sky-950 dark:text-white">
            Objective:
          </span>{" "}
          {objective}
        </p>

      </div>

      {/* Rows */}
      <dl className="mt-5 flex flex-1 flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-1 gap-1 border-b border-stone-100 px-6 py-3.5 last:border-b-0 sm:grid-cols-[150px_1fr] sm:gap-4 dark:border-slate-800"
          >

            <dt className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              {row.label}
            </dt>

            <dd className="text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
              {row.value}
            </dd>

          </div>
        ))}
      </dl>

      {/* Limitation */}
      <div className="border-t border-dashed border-amber-200 bg-amber-50/50 px-6 py-4 dark:border-amber-900/40 dark:bg-amber-950/10">

        <p className="text-xs font-normal leading-5 text-amber-900 dark:text-amber-200/80">
          {limitation}
        </p>

      </div>

    </article>
  );
}
