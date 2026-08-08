import Link from "next/link";

export default function DesignAndIncidents() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-16">

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Privacy by design */}
          <article className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Privacy by design &amp; change control
            </h3>

            <p className="mt-3 text-sm font-normal leading-7 text-zinc-700 dark:text-slate-300">
              New or materially changed data use is reviewed before release:
              purpose, necessity, categories, roles, retention, worker impact,
              notice requirements, and evidence. A material change can require
              notice, reconsultation, or a blocked release under your governance
              rule.
            </p>

            <p className="mt-4 text-sm font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Unsafe, stale, or factually unsupported privacy wording may be
              corrected or removed immediately, followed by a retrospective
              change record. We do not silently rewrite prior statements.
            </p>

          </article>

          {/* Privacy incidents */}
          <article className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Privacy incidents &amp; operational transparency
            </h3>

            <p className="mt-3 text-sm font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Privacy incidents follow a governed response with assessment,
              containment, notification criteria, and correction. Current
              service state — including operational incidents — is published on{" "}
              <Link
                href="/system-status"
                className="font-bold text-[#097F4B] transition hover:text-emerald-800 dark:text-emerald-400"
              >
                System Status
              </Link>
              , which is the authoritative source.
            </p>

            <div className="mt-5 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Not promised
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
                Breach-notification obligations and timing depend on
                jurisdiction, contract, and assessed impact. No universal
                notification commitment is published here.
              </p>

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}
