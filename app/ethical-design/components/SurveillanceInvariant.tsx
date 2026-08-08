import Link from "next/link";

export default function SurveillanceInvariant() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[880px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="flex flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Binding product invariant
          </p>

          <h2 className="mt-4 text-2xl font-bold leading-9 text-white sm:text-3xl">
            No design goal overrides the anti-surveillance invariant.
          </h2>

          <p className="mt-4 max-w-[816px] text-base font-bold leading-7 text-white sm:text-lg">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or configuration.
          </p>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-slate-300">
            Productivity, optimization, security, and analytics are all
            legitimate design goals. None of them creates a hidden exception to
            this. A feature that would require any of the prohibited collection
            is not redesigned around the invariant — it is not built.
          </p>

          <p className="mt-4 text-xs font-normal leading-5 text-slate-400">
            Claim owner: Trust &amp; Governance · Status: Current · Last
            reviewed 12 Jul 2026 · Next review 12 Jan 2027
          </p>

          <p className="mt-1 max-w-[860px] text-xs font-normal leading-5 text-slate-400">
            This invariant does not remove your privacy, labor, or consultation
            obligations. It describes what is never collected — nothing more.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

            <Link
              href="/privacy"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              Privacy &amp; collection limits
            </Link>

            <Link
              href="#principles"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.28] px-6 py-3.5 text-base font-bold text-white transition hover:border-white/60"
            >
              <span>Explore the principles</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
