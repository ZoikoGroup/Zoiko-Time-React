import Link from "next/link";

export default function SurveillanceBoundary() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[880px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="flex flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Transparent, policy-governed capture
          </p>

          <p className="mt-4 max-w-[860px] text-base font-bold leading-7 text-white sm:text-lg">
            Screenshots and application/website activity are captured only where enabled by customer policy, subject to automated redaction and required advance worker notice. Keystroke content and clipboard contents are never collected.
          </p>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-slate-300">
            Time entries, schedules, approvals, presence context, and evidence
            records describe <em>work</em> against configured policy. Where a
            customer enables desktop activity capture or screenshots, that data
            is disclosed to workers in advance, masked by automated redaction
            rules, and governed by customer-defined retention settings.
          </p>

          <p className="mt-4 text-xs font-normal leading-5 text-slate-400">
            Commitment owner: Trust &amp; Governance · Status: Current · Last
            reviewed 12 Jul 2026 · Next review 12 Jan 2027
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:justify-center">

            <Link
              href="/trust-center"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3.5 text-base font-bold text-white transition hover:bg-emerald-600"
            >
              Trust Center
            </Link>

            <Link
              href="#data-categories"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.28] px-6 py-3.5 text-base font-bold text-white transition hover:border-white/60"
            >
              <span>See what is collected</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
