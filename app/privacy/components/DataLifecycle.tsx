const stages = [
  {
    stage: "Stage 01",
    title: "Collect",
    body: "Category, subject, source, necessity, validation.",
    question: "Is this necessary for the stated purpose?",
  },
  {
    stage: "Stage 02",
    title: "Use",
    body: "Purpose, policy, context, rule version.",
    question: "Is any secondary use prohibited here?",
  },
  {
    stage: "Stage 03",
    title: "Share",
    body: "Recipient, role, authority, scope, transfer, contract.",
    question: "Who receives it, and under what authority?",
  },
  {
    stage: "Stage 04",
    title: "Store",
    body: "Environment, location class, tenant separation, protection.",
    question: "Where does it live, and how is it bounded?",
  },
  {
    stage: "Stage 05",
    title: "Retain",
    body: "Schedule, trigger, owner, legal hold, review.",
    question: "What ends this, and who owns that decision?",
  },
  {
    stage: "Stage 06",
    title: "Delete or preserve",
    body: "Deletion, anonymization, archive, export, hold, evidence.",
    question: "What actually happened, and what proves it?",
  },
];

export default function DataLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Workforce-Data Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Stages, Each With a Governing Question
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            This diagram is not a claim that every category follows the same
            schedule or basis — different categories diverge at almost every
            stage.
          </p>

        </div>

        {/* Stages */}
        <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-6">

          {stages.map((stage) => (
            <article
              key={stage.stage}
              className="flex flex-col rounded-xl border border-stone-200 px-3.5 pb-4 pt-3.5 dark:border-slate-800 dark:bg-slate-900"
            >

              <p className="text-[10px] font-extrabold leading-4 tracking-wide text-emerald-800 dark:text-emerald-400">
                {stage.stage}
              </p>

              <h3 className="mt-1.5 text-base font-bold leading-5 text-sky-950 dark:text-white">
                {stage.title}
              </h3>

              <p className="mt-1.5 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {stage.body}
              </p>

              <p className="mt-3 border-t border-dashed border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                {stage.question}
              </p>

            </article>
          ))}

        </div>

        {/* Deletion Callout */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 pb-3 pt-2.5 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Deletion is not instantaneous or universal
          </p>

          <p className="mt-1 text-xs font-normal leading-5 text-red-800 dark:text-red-200/80">
            Deletion, anonymization, archive expiry, backup expiry, and legal
            hold are distinct outcomes with distinct timelines. Legal holds and
            security records are not silently removed by an ordinary user
            deletion, and no page on this site claims data is &quot;deleted
            everywhere immediately.&quot;
          </p>

        </div>

      </div>
    </section>
  );
}
