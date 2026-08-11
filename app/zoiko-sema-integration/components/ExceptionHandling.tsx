import type { ReactNode } from "react";
import SemaStatusPill, { type SemaTone } from "./SemaStatusPill";

const exceptionTypes: { label: string; tone: SemaTone }[] = [
  { label: "Authorization expired", tone: "red" },
  { label: "Permission denied", tone: "red" },
  { label: "Destination missing", tone: "amber" },
  { label: "Mapping conflict", tone: "amber" },
  { label: "Excluded category", tone: "red" },
  { label: "Policy mismatch", tone: "blue" },
  { label: "Retention conflict", tone: "blue" },
  { label: "Source unavailable", tone: "red" },
  { label: "Destination unavailable", tone: "red" },
  { label: "Duplicate", tone: "amber" },
  { label: "Out of order", tone: "amber" },
  { label: "Unsupported version", tone: "blue" },
  { label: "Review overdue", tone: "amber" },
  { label: "Acceptance expired", tone: "blue" },
  { label: "Notice outdated", tone: "amber" },
];

const queue: {
  exception: string;
  mapping: string;
  attempts: string;
  owner: string;
  impact: string;
  state: { label: string; tone: SemaTone };
}[] = [
  {
    exception: "Authorization expired",
    mapping: "Service Desk",
    attempts: "3",
    owner: "IT & security",
    impact: "None — nothing exchanged",
    state: { label: "Open", tone: "red" },
  },
  {
    exception: "Mapping conflict",
    mapping: "Project Atlas",
    attempts: "—",
    owner: "Integration admin",
    impact: "None — not active",
    state: { label: "Awaiting correction", tone: "amber" },
  },
  {
    exception: "Retention conflict",
    mapping: "Field Ops North",
    attempts: "1",
    owner: "Privacy",
    impact: "Notice update required",
    state: { label: "Quarantined", tone: "blue" },
  },
];

const headers = [
  { label: "Exception", width: "w-[170px]" },
  { label: "Affected mapping", width: "w-[190px]" },
  { label: "Attempts", width: "w-[110px]" },
  { label: "Owner", width: "w-[170px]" },
  { label: "Participant impact", width: "w-[230px]" },
  { label: "State", width: "w-[190px]" },
];

const handling: { title: string; body: ReactNode }[] = [
  {
    title: "Quarantine",
    body: "Prevents uncertain context from reaching downstream workflows while preserving source, reason, owner, review, and expiry. Nothing is discarded, and nothing proceeds.",
  },
  {
    title: "Reconciliation",
    body: (
      <>
        Compares source, bridge record, destination status, version, review
        outcome, downstream effect, and corrective action.{" "}
        <span className="font-bold text-sky-950 dark:text-white">
          Conflicts are never silently overwritten.
        </span>
      </>
    ),
  },
  {
    title: "Closure",
    body: "Requires resolved cause, retry or reconciliation result, affected items reviewed, participant communication where required, complete evidence, linked support reference, prevention logged, and owner sign-off.",
  },
];

export default function ExceptionHandling() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Exceptions, Retry, Quarantine &amp; Reconciliation
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Fifteen Exception Types, None of Them Silent
          </h2>

          <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Uncertain context is contained rather than passed along. Quarantine
            exists so that a failure cannot become a workforce record by default.
          </p>

        </div>

        {/* Exception Types */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {exceptionTypes.map((type) => (
            <SemaStatusPill
              key={type.label}
              label={type.label}
              tone={type.tone}
            />
          ))}
        </div>

        {/* Exception Queue */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/40">
                  {headers.map((header) => (
                    <th
                      key={header.label}
                      className={`${header.width} border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {queue.map((row) => (
                  <tr
                    key={row.exception}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                  >

                    <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.exception}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.mapping}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.attempts}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.owner}
                    </td>

                    <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.impact}
                    </td>

                    <td className="px-4 py-3.5 align-top">
                      <SemaStatusPill
                        label={row.state.label}
                        tone={row.state.tone}
                      />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <p className="px-4 pb-4 pt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            Exception queue, synthetic. Diagnostics are sensitive-data-safe; no
            message content, credential, or worker record appears in an error
            detail.
          </p>

        </div>

        {/* Handling */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {handling.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {item.body}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
