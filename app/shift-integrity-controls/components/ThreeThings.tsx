const pillars = [
  {
    title: "Policy",
    body: "Effective-dated rules define what a valid shift looks like — grace windows, rounding, and required context — versioned and owned by your organization.",
  },
  {
    title: "Record",
    body: "Every shift event, evaluation, flag, correction, and approval is preserved with actor, timestamp, and rationale.",
  },
  {
    title: "Responsibility",
    body: "Workers add context. Reviewers decide. ZoikoTime evaluates against policy — it never makes the consequential call.",
  },
];

export default function ThreeThings() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Policy, Record &amp; Responsibility Overview
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Three things every shift record depends on
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pillars.map(({ title, body }) => (
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
