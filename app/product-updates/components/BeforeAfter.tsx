import { Eyebrow } from "./Pills";
import { CheckCircleIcon } from "./Icons";

export default function BeforeAfter() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Before and After" />

        <h2 className="mt-6 text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          See exactly what changed.
        </h2>

        {/* Comparison */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">

          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Before */}
            <div className="border-b border-slate-200 bg-gray-50 p-8 lg:border-b-0 lg:border-r dark:border-slate-800 dark:bg-slate-900">

              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                Before · v6.2
              </p>

              <h3 className="mt-4 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                One flat exception queue
              </h3>

              <p className="mt-4 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                Reviewers with scope across multiple locations saw every
                exception in a single list, sorted only by time — location
                context required opening each record.
              </p>

            </div>

            {/* After */}
            <div className="bg-white p-8 dark:bg-slate-950">

              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-teal-700 dark:text-teal-400">
                After · v6.4
              </p>

              <h3 className="mt-4 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                Grouped by location
              </h3>

              <p className="mt-4 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                The same queue now groups exceptions by location automatically,
                with a count badge per site. Sort by time is still available
                within each group.
              </p>

            </div>

          </div>

          {/* Unchanged */}
          <div className="flex gap-3 bg-slate-800 px-8 py-5">

            <CheckCircleIcon size={14} className="mt-0.5 shrink-0 text-teal-300" />

            <p className="text-xs font-normal leading-5 text-white">
              What didn&apos;t change: reviewer permissions, resolution
              workflow, and the audit trail format.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
