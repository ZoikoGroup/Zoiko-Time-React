import Image from "next/image";

const reviewerSees = [
  "Source reference and workspace",
  "Context category and purpose",
  "Privacy mode and policy version",
  "Stated limitations of the context",
  "What accepting it will and will not affect",
];

export default function ReviewAndHealth() {
  return (
    <section
      id="review-and-health"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Review Before Sync */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Review Before Sync &amp; Human Authority
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Context Is an Input, Not a Conclusion
            </h2>

            {/* Never Determines */}
            <div className="mt-6 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                The integration never determines
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                Time worked · attendance · breaks · payroll outcomes · performance ·
                misconduct · discipline · employment status · legal status ·
                compliance. It may route context for review. Authorized humans
                decide, under ZoikoTime policy, with correction and escalation
                available.
              </p>

            </div>

            {/* What a Reviewer Sees */}
            <div className="mt-5 rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                What a reviewer sees
              </h3>

              <ul className="mt-4 flex flex-col gap-2.5">
                {reviewerSees.map((item) => (
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

            </div>

            <p className="mt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
              Any ZoikoTime classification downstream remains deterministic,
              policy-bound, jurisdiction-aware, reviewable — and is never branded as
              AI.
            </p>

          </div>

          {/* Connection Health */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Connection Health &amp; Change History
            </p>

            <h3 className="mt-4 text-2xl font-bold leading-7 text-sky-950 dark:text-white">
              Status, freshness, versions, owners
            </h3>

            <Image
              src="/zoiko-sema-integration/connection-health.png"
              alt="A connection health dashboard showing source status, freshness indicators, a failed exchange, and downstream destinations"
              width={640}
              height={460}
              className="mt-6 h-auto w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}
