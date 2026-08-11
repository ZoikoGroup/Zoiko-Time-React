import Link from "next/link";
import PracticeCard, { type PracticeCardProps } from "./PracticeCard";

const cards: PracticeCardProps[] = [
  {
    title: "Failover & emergency paths",
    status: { label: "Partially published", tone: "violet" },
    objective:
      "disclose that alternate locations exist, under what authority they activate, and what happens afterwards.",
    rows: [
      {
        label: "Documented",
        value:
          "Normal and alternate region or provider categories, trigger classes, approval authority, customer notice, state, affected data categories",
      },
      {
        label: "Governed",
        value:
          "Return-to-primary, reconciliation requirements, and cleanup or retirement of the alternate path",
      },
      {
        label: "Authoritative elsewhere",
        value: (
          <>
            Recovery <em>methods</em> route to{" "}
            <Link
              href="/platform-reliability"
              className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
            >
              Platform Reliability
            </Link>
            ; live events route to{" "}
            <Link
              href="/system-status"
              className="font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
            >
              System Status
            </Link>
          </>
        ),
      },
    ],
    limitation: (
      <>
        exact security-sensitive topology is never published. But there is{" "}
        <span className="font-bold">no hidden emergency exception</span> to a
        published commitment — if an exceptional path can move data, it is
        disclosed here at a safe level.
      </>
    ),
  },
  {
    title: "Migration & region change",
    status: { label: "Current", tone: "green" },
    objective:
      "make movement between locations a governed, reversible, evidenced event.",
    rows: [
      {
        label: "Lifecycle",
        value:
          "Request, assessment, approval, preparation, execution, cutover, verification, retirement of the source location",
      },
      {
        label: "Customer role",
        value:
          "Approve scope, timing, and business checks. Platform provides method, validation, rollback, and evidence.",
      },
      {
        label: "Preserved",
        value:
          "Migration history, including the prior location and the date it was retired",
      },
    ],
    limitation:
      "migration is not instantaneous, and backups created before a migration retain their original location until their own expiry. That interval is disclosed rather than glossed over.",
  },
];

export default function ExceptionalPaths() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[820px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Failover, Disaster Recovery &amp; Migration
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Exceptional Paths Are Published, Not Hidden
          </h2>

          <p className="mt-4 max-w-[700px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A commitment with an undisclosed emergency exception is not a
            commitment. Alternate locations are documented at a safe level before
            they are ever used.
          </p>

        </div>

        {/* Path Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {cards.map((card) => (
            <PracticeCard key={card.title} {...card} />
          ))}
        </div>

      </div>
    </section>
  );
}
