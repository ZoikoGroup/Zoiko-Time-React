import Link from "next/link";

const columns = [
  {
    badge: "Independent product",
    title: "Zoiko Sema",
    summary: "Governed communication.",
    items: [
      "Meetings and messaging",
      "Channels and spaces",
      "Decisions and actions",
      "Workspace administration",
      "Approved AI-generated outputs",
    ],
  },
  {
    badge: "Optional bridge",
    title: "Governed bridge",
    summary: "Explicitly configured.",
    items: [
      "Workspace mapping",
      "Role permissions & context scope",
      "Privacy modes, policy, jurisdiction",
      "Review before sync",
      "Health, exceptions, audit",
    ],
    bridge: true,
  },
  {
    badge: "Independent product",
    title: "ZoikoTime",
    summary: "Workforce Truth Infrastructure.",
    items: [
      "Reviewable workforce records",
      "Deterministic policy application",
      "Human review",
      "Evidence Ledger history",
      "Controlled downstream workflows",
    ],
  },
];

export default function ProductRelationship() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[840px] flex-col items-center text-center">

          <h2 className="text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            How do Zoiko Sema and ZoikoTime work together?
          </h2>

          <p className="mt-5 max-w-[720px] text-lg font-normal leading-8 text-sky-900 dark:text-slate-300">
            Zoiko Sema and ZoikoTime are independent products that organizations
            may connect through an optional, customer-configured integration.
            Authorized administrators map approved Sema workspaces to ZoikoTime
            organizational scopes, define permitted context categories, roles,
            privacy modes, policy and jurisdiction treatment, test the connection,
            and approve activation. Communication context remains governed and
            reviewable — it does not automatically become time worked, payroll
            truth, performance evidence, discipline, legal status, or compliance.
          </p>

        </div>

        {/* Relationship Columns */}
        <div className="mt-9 flex flex-col items-stretch gap-5 lg:flex-row lg:items-center lg:justify-center">

          {columns.map((column, index) => (
            <div
              key={column.title}
              className="flex flex-col items-stretch gap-5 lg:flex-row lg:items-center"
            >

              {index > 0 && (
                <span
                  className="self-center text-xl font-bold leading-9 text-emerald-500 lg:px-3"
                  aria-hidden="true"
                >
                  →
                </span>
              )}

              <article
                className={
                  column.bridge
                    ? "flex w-full flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 lg:w-80 dark:border-emerald-900/40 dark:bg-emerald-950/10"
                    : "flex w-full flex-col rounded-2xl border border-stone-200 bg-white p-6 lg:w-80 dark:border-slate-800 dark:bg-slate-900"
                }
              >

                <span
                  className={
                    column.bridge
                      ? "inline-flex self-start rounded-full border border-emerald-100 bg-white px-2.5 py-[5px] text-[10px] font-extrabold uppercase leading-4 tracking-wide text-emerald-800 dark:border-emerald-900/40 dark:bg-slate-900 dark:text-emerald-300"
                      : "inline-flex self-start rounded-full border border-stone-200 bg-slate-50 px-2.5 py-[5px] text-[10px] font-extrabold uppercase leading-4 tracking-wide text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  }
                >
                  {column.badge}
                </span>

                <h3 className="mt-3 text-base font-bold leading-6 text-sky-950 dark:text-white">
                  {column.title}
                </h3>

                <p className="mt-2.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  {column.summary}
                </p>

                <ul className="mt-2.5 flex flex-col gap-1.5">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-2.5">

                      <span
                        className="mt-2 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                        aria-hidden="true"
                      />

                      <span className="text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                        {item}
                      </span>

                    </li>
                  ))}
                </ul>

              </article>

            </div>
          ))}

        </div>

        {/* Independence Rule */}
        <div className="mx-auto mt-8 max-w-[900px] rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 py-3 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Independence rule
          </p>

          <p className="mt-0.5 text-xs font-normal leading-5 text-red-700 dark:text-red-200/80">
            Zoiko Sema remains a complete communication platform without
            ZoikoTime. ZoikoTime remains complete Workforce Truth Infrastructure
            without Zoiko Sema. Neither is a feature hidden inside the other, and
            the connection between them is optional and separately qualified.
          </p>

        </div>

        {/* Routes */}
        <div className="mt-6 flex flex-col justify-center gap-3.5 sm:flex-row">

          <Link
            href="/explore-zoikotime"
            className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            Explore ZoikoTime
          </Link>

          <Link
            href="/trust-center"
            className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            Visit Trust Center
          </Link>

        </div>

      </div>
    </section>
  );
}
