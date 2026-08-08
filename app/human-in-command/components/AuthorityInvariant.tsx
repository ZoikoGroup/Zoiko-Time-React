import Link from "next/link";

export default function AuthorityInvariant() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[880px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="flex flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Authority invariant
          </p>

          <h2 className="mt-3.5 text-2xl font-bold leading-9 text-white sm:text-3xl">
            A flag is evidence for review, not a decision.
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-slate-300">
            Classifications, anomalies, exception states, scores,
            recommendations, and summaries cannot become automatic payroll,
            disciplinary, employment, or legal conclusions. There is no plan,
            tier, contract, or administrative setting that changes this — it is
            not a configurable behaviour.
          </p>

          <p className="mt-4 max-w-[860px] text-xs font-normal leading-5 text-slate-400">
            Automation may calculate, classify, route, summarize or flag within
            an approved boundary. It may not convert those outputs into a
            consequential outcome without an authorized, attributable human
            decision.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

            <Link
              href="#decision-classes"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              See the decision classes
            </Link>

            <Link
              href="#mechanisms"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.28] px-6 py-3.5 text-base font-bold text-white transition hover:border-white/60"
            >
              <span>Classification &amp; AI boundaries</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
