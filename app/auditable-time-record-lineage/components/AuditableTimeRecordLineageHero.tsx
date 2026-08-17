export default function AuditableTimeRecordLineageHero() {
  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <span className="inline-block rounded-full bg-gray-200 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:bg-gray-800 dark:text-emerald-400">
            Time Record Lineage
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Inspect the lineage behind a{" "}
            <span className="text-emerald-500">time record</span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
            Time record lineage shows the governed relationships among an original
            source event, any derived classification, the policy version used, later
            corrections, human approvals, exports, and downstream acknowledgments. It
            helps explain how a record reached its current state.
          </p>
          <p className="max-w-xl text-base leading-7 text-gray-600 dark:text-gray-300">
            <span className="font-bold text-slate-900 dark:text-white">
              Lineage does not by itself prove
            </span>{" "}
            that every source, policy interpretation, decision, or downstream system is
            correct or legally conclusive.
          </p>
        </div>
        <img
          className="h-auto w-full rounded-[20px] "
          src="/lineage/div.mock (1).png"
          alt="Lineage graph preview"
        />
      </div>
    </section>
  );
}
