import Link from "next/link";
import PracticeCard, { type PracticeCardProps } from "./PracticeCard";

const copies = [
  {
    title: "Primary store",
    body: "The principal persistent store for a defined data category and environment.",
    note: "Deletion schedule applies directly.",
  },
  {
    title: "Replicas",
    body: "Additional copies for availability, performance, integrity, or recovery.",
    note: "Location and consistency model stated separately.",
  },
  {
    title: "Search & index copies",
    body: "Derived structures supporting retrieval.",
    note: "Rebuilt rather than restored; may lag.",
  },
  {
    title: "Caches & temporary data",
    body: "Short-lived copies supporting performance.",
    note: "Distinct expiry, not covered by retention schedules.",
  },
  {
    title: "Backups & archives",
    body: "Retained for recovery, continuity, legal hold, or approved archival purpose.",
    note: "Deletion and access timing differ from primary.",
  },
];

const cards: PracticeCardProps[] = [
  {
    title: "Backups, archives & legal holds",
    status: { label: "Partially published", tone: "violet" },
    objective:
      "make recovery copies inspectable without implying they behave like the primary store.",
    rows: [
      {
        label: "Stated per backup set",
        value:
          "Protected object, environment, region or provider category, retention, encryption, access roles, restore path",
      },
      {
        label: "Legal hold",
        value:
          "Suspends ordinary expiry. A held copy survives a deletion request, and that is disclosed rather than hidden.",
      },
      {
        label: "Timing",
        value:
          "Backup expiry runs on its own schedule — deletion from primary storage does not delete a backup instantly",
      },
    ],
    limitation: (
      <>
        restore evidence and recovery testing route to{" "}
        <Link
          href="/platform-reliability"
          className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
        >
          Platform Reliability
        </Link>
        , where that evidence is currently under review. Backup existence is not
        restore proof, and no RPO or RTO is published here.
      </>
    ),
  },
  {
    title: "Retention, deletion & location retirement",
    status: { label: "Current", tone: "green" },
    objective:
      "govern the end of the lifecycle, including what happens when a whole location is retired.",
    rows: [
      {
        label: "Distinct outcomes",
        value:
          "Deletion, anonymization, archive expiry, backup expiry, legal hold",
      },
      {
        label: "Location retirement",
        value:
          "Migration plan, verification, evidence, and a preserved record of the retired location",
      },
      {
        label: "Verification",
        value:
          "Scoped — we state what was verified rather than claiming universal erasure",
      },
    ],
    limitation: (
      <>
        no &quot;deleted everywhere immediately&quot; claim. Provider backup and
        retirement schedules may affect completion timing, and
        customer-controlled copies are outside our reach entirely.
      </>
    ),
  },
];

export default function CopyTypes() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Primary Storage, Replicas, Caches &amp; Backups
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Five Kinds of Copy, Each With Its Own Location
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Persistent and temporary copies are exposed separately, because they
            behave differently on deletion and on recovery.
          </p>

        </div>

        {/* Copy Types */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">

          {copies.map((copy) => (
            <article
              key={copy.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                {copy.title}
              </h3>

              <p className="mt-2.5 flex-1 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {copy.body}
              </p>

              <p className="mt-4 border-t border-dashed border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                {copy.note}
              </p>

            </article>
          ))}

        </div>

        {/* Lifecycle Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <PracticeCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
