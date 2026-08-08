const stages = [
  {
    number: "01",
    title: "Create case",
    body: "A signal, request, or exception opens a case with a neutral title.",
    actor: "System",
  },
  {
    number: "02",
    title: "Preserve source",
    body: "Original records are preserved unchanged before anything is assembled.",
    actor: "System",
  },
  {
    number: "03",
    title: "Assign authority",
    body: "Routed to a reviewer eligible for this decision class, scope, entity, and jurisdiction.",
    actor: "System, by policy",
  },
  {
    number: "04",
    title: "Present evidence",
    body: "Source, timestamps, actor, policy version, quality, limitations, and conflicts.",
    actor: "System",
  },
  {
    number: "05",
    title: "Check conflicts",
    body: "Separation of duties, recusal grounds, and delegation validity are verified.",
    actor: "System, disclosed to reviewer",
  },
  {
    number: "06",
    title: "Review",
    body: "The reviewer inspects evidence, may disagree with it, and may request more.",
    actor: "Authorized human",
  },
  {
    number: "07",
    title: "Decide, defer, or escalate",
    body: "Approve, correct, return, request information, defer, abstain, escalate — with a reason linked to evidence.",
    actor: "Human only · no automation",
    humanOnly: true,
  },
  {
    number: "08",
    title: "Notify",
    body: "The affected person receives plain-language status, outcome, effective date, and options.",
    actor: "System, human-authored reason",
  },
  {
    number: "09",
    title: "Correct or challenge",
    body: "Correction requests and challenges enter a governed path with the original preserved.",
    actor: "Affected person",
  },
  {
    number: "10",
    title: "Appeal",
    body: "Independent reviewer where policy requires. Original and appeal records stay linked.",
    actor: "Independent authority",
  },
  {
    number: "11",
    title: "Close or supersede",
    body: "Closure is attributable. Supersession preserves prior state and history.",
    actor: "Authorized human",
  },
];

export default function ReviewLifecycle() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Governed Review Lifecycle
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Eleven Stages, One of Which Cannot Be Automated
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            The human-only step is marked. Everything before it prepares
            evidence; everything after it depends on the decision being
            attributable.
          </p>

        </div>

        {/* Lifecycle */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          {stages.map((stage) => (
            <div
              key={stage.number}
              className={`flex flex-col border-b border-stone-100 last:border-b-0 sm:flex-row sm:items-center dark:border-slate-800 ${
                stage.humanOnly ? "bg-[#F5FEF7] dark:bg-emerald-950/20" : ""
              }`}
            >

              {/* Number */}
              <div className="flex shrink-0 items-center justify-center px-4 py-3 sm:w-14 sm:self-stretch sm:border-r sm:border-stone-100 sm:py-7 dark:sm:border-slate-800">
                <span
                  className={`text-xs font-extrabold leading-5 ${
                    stage.humanOnly
                      ? "text-emerald-800 dark:text-emerald-400"
                      : "text-zinc-500 dark:text-slate-400"
                  }`}
                >
                  {stage.number}
                </span>
              </div>

              {/* Detail */}
              <div className="flex flex-1 flex-col gap-0.5 px-4 pb-3.5 sm:py-3.5">

                <h3 className="text-sm font-bold leading-6 text-sky-950 dark:text-white">
                  {stage.title}
                </h3>

                <p className="text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                  {stage.body}
                </p>

              </div>

              {/* Actor */}
              <div className="flex px-4 pb-4 sm:w-48 sm:shrink-0 sm:self-stretch sm:items-center sm:border-l sm:border-stone-100 sm:py-4 dark:sm:border-slate-800">
                <span
                  className={`text-xs leading-5 ${
                    stage.humanOnly
                      ? "font-bold text-emerald-800 dark:text-emerald-400"
                      : "font-normal text-zinc-500 dark:text-slate-400"
                  }`}
                >
                  {stage.actor}
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Closure Callout */}
        <div className="mx-auto mt-6 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 py-3 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            No silent closure, no bulk finalization
          </p>

          <p className="mt-1 text-xs font-normal leading-5 text-red-800 dark:text-red-200/80">
            A case never closes automatically on a timer. One-click bulk
            finalization is unavailable for protected decision classes unless
            separately approved with equivalent review evidence for each case —
            which largely defeats the point of bulk action, and is meant to.
          </p>

        </div>

      </div>
    </section>
  );
}
