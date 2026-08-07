const cards = [
  {
    title: "Rules propose, people decide",
    body: "A deterministic result is the starting point for review, never the final word — consequential decisions stay with authorized people.",
  },
  {
    title: "Reviewer sees the full trace",
    body: "Reviewers see the same facts, context, and rules the system used, so a decision rests on the same evidence.",
  },
  {
    title: "Override is logged, not silent",
    body: "Where a reviewer's decision differs from the classification, the override, actor, and rationale are all preserved.",
  },
  {
    title: "No autonomous action",
    body: "A classification result never triggers pay changes, discipline, or any other automated consequence on its own.",
  },
];

export default function HumanReview() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Human Review
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Classification informs review — it never replaces it
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600"
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>
              </div>

              <p className="mt-3 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
