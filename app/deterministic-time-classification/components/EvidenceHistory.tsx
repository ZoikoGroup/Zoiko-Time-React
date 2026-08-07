const entries = [
  {
    date: "Aug 5, 2026",
    title: "Policy v4.2 published",
    body: "Grace-Window-Tolerance updated from 3 minutes to 5 minutes, with rationale and approver recorded.",
  },
  {
    date: "Aug 3, 2026",
    title: "Rule precedence clarified",
    body: "Site overrides now documented ahead of org defaults, with every affected record listed in the impact preview.",
  },
  {
    date: "Jul 29, 2026",
    title: "Duplicate-Event-Dedupe added",
    body: "New rule introduced with an explicit effective date; earlier records remain classified under the prior version.",
  },
];

export default function EvidenceHistory() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Evidence &amp; History
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Nothing about a classification is a mystery later
          </h2>
        </div>

        <ol className="mx-auto mt-10 max-w-[820px]">
          {entries.map(({ date, title, body }, index) => (
            <li key={title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span
                  className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-teal-600"
                  aria-hidden="true"
                />
                {index < entries.length - 1 && (
                  <span
                    className="w-0.5 flex-1 bg-emerald-100 dark:bg-slate-700"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="pb-8">
                <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                  {date}
                </p>
                <h3 className="mt-1.5 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
