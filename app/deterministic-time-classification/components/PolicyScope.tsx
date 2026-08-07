const scopes = [
  {
    title: "Effective-dated policy",
    body: "Every rule has a start and end date — a classification always reflects the policy version in force at the time of the event.",
  },
  {
    title: "Scoped by organization",
    body: "Rules apply at the org, site, or team level as configured — never assumed globally across your organization.",
  },
  {
    title: "Jurisdiction-gated",
    body: "Jurisdiction-specific rule content is applied only where that jurisdiction has been configured and approved — never inferred.",
  },
];

export default function PolicyScope() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Policy &amp; Jurisdiction
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Rules apply only within their configured scope
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-6 md:grid-cols-3">
          {scopes.map(({ title, body }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
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
