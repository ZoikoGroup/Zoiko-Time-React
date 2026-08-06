import Image from "next/image";

const covered = [
  "Imported records require scope, format, mapping, validation, correction, reconciliation, cutover, rollback, ownership, privacy, and evidence",
  "Historical time, locale, DST, policy, identity, and entity context must remain interpretable",
  "Migration is recorded as required, not required, under review, blocked, or separately scoped",
  "A wave can be blocked until migration evidence and acceptance are complete",
];

const neverClaimed = [
  "A released migration service, supported formats, volumes, timelines, pricing, or staffing",
  "Data cleansing guarantees or named legacy systems",
  "Automatic reconstruction of missing historical context or legal applicability",
  "A “migrate now” action before the dedicated offer is approved",
  "That activation validates migrated records",
];

export default function DataMigrationBoundary() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Data Migration Boundary
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Deployment Can Identify Migration Dependencies. It Cannot Deliver
            Them.
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Migration readiness may block a wave. That is different from
            offering a migration service, and this page does not offer one.
          </p>

        </div>

        {/* Boundary Panels */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* What Deployment Covers */}
          <div className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-center gap-2">

              <Image
                src="/global-deployment/tick-mark.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 shrink-0"
              />

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                What deployment covers
              </h3>

            </div>

            <ul className="mt-3.5 flex flex-col gap-2.5">

              {covered.map((item) => (
                <li key={item} className="flex gap-2">

                  <Image
                    src="/global-deployment/tick-icon.png"
                    alt=""
                    width={10}
                    height={10}
                    className="mt-[7px] h-2.5 w-2.5 shrink-0 object-contain"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* What This Page Never Claims */}
          <div className="flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-9 pt-6 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-center gap-2">

              <Image
                src="/global-deployment/cross-mark.svg"
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 shrink-0"
              />

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                What this page never claims
              </h3>

            </div>

            <ul className="mt-3.5 flex flex-col gap-2.5">

              {neverClaimed.map((item) => (
                <li key={item} className="flex gap-2">

                  <Image
                    src="/global-deployment/cross-icon.png"
                    alt=""
                    width={10}
                    height={10}
                    className="mt-[7px] h-2.5 w-2.5 shrink-0 object-contain"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Sequence Boundary Callout */}
        <div className="mt-6 rounded-xl border border-l-[3px] border-sky-800 bg-white px-5 py-4 dark:bg-slate-900">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-800 dark:text-sky-400">
            Sequence boundary
          </p>

          <p className="mt-1.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
            Implementation Services and Data Migration remain separately gated
            and are absent as released offers until their own scope, capacity,
            entitlement, legal, documentation, support, and QA gates pass.
          </p>

        </div>

      </div>
    </section>
  );
}
