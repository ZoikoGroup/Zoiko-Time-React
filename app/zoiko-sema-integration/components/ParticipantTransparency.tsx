import Link from "next/link";
import type { ReactNode } from "react";

const rights = [
  {
    title: "Notice",
    body: "Approved notices where the integration affects a worker-facing record or workflow, issued before first exchange.",
  },
  {
    title: "Source visibility",
    body: "Which workspace, which category, which purpose, and which policy version applied.",
  },
  {
    title: "Correction",
    body: "A defined route with human review, and escalation where a correction is declined.",
  },
  {
    title: "Support",
    body: "A named route for questions about the integration itself, not only about a record.",
  },
];

const boundedReview: ReactNode[] = [
  <>
    <span className="font-bold text-sky-950 dark:text-white">Reviewers</span> see
    assigned context within their scope, with limitations attached.
  </>,
  <>
    <span className="font-bold text-sky-950 dark:text-white">Managers</span> see
    queue state, not behavioral profiles of their team.
  </>,
  <>
    <span className="font-bold text-sky-950 dark:text-white">Leadership</span>{" "}
    sees organization-level context, aggregated where individual detail is
    unnecessary.
  </>,
  <>
    <span className="font-bold text-sky-950 dark:text-white">Nobody</span> gets a
    ranking, a productivity score, or an activity feed. Those do not exist in this
    product.
  </>,
];

const preserved = [
  "Configuration versions and who approved them",
  "Mapping changes with reason and effective date",
  "Transfer and exchange records within retention",
  "Review outcomes and reviewer identity",
  "Exception, quarantine, and reconciliation history",
  "Notice issuance and correction records",
];

export default function ParticipantTransparency() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Worker &amp; Participant Transparency
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            The People in the Context Can See It
          </h2>

        </div>

        {/* Rights */}
        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {rights.map((right) => (
            <article
              key={right.title}
              className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/10"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {right.title}
              </h3>

              <p className="mt-2.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {right.body}
              </p>

            </article>
          ))}

        </div>

        {/* Review Experience & Audit */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Bounded Review */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Manager, Reviewer &amp; Leadership Experience
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              Bounded review, not a monitoring console
            </h3>

            <ul className="mt-5 flex flex-col gap-2.5">
              {boundedReview.map((item, index) => (
                <li key={index} className="flex gap-2.5">

                  <span
                    className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

          </div>

          {/* Audit Evidence */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Audit Evidence &amp; Governed Exports
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              What is preserved
            </h3>

            <div className="mt-5 rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

              <ul className="flex flex-col gap-2.5">
                {preserved.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Exports are governed, scoped, and audited. Audit evidence supports
                review — it is not an audit opinion, and it does not establish legal
                admissibility.
              </p>

            </div>

            <div className="mt-5">
              <Link
                href="/evidence-ledger"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Evidence Ledger <span aria-hidden="true">→</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
