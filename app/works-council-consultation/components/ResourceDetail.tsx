type Field = {
  label: string;
  value: string;
  note?: string;
  strong?: boolean;
};

type Cell = {
  heading: string;
  fields?: Field[];
  body?: string;
};

const cells: Cell[] = [
  {
    heading: "Coverage",
    fields: [
      { label: "Product / version", value: "ZoikoTime core · 2026.7" },
      { label: "Use cases", value: "Time capture, review, approval" },
      { label: "Config assumptions", value: "Standard policy model" },
    ],
  },
  {
    heading: "Exclusions",
    fields: [
      {
        label: "Not covered",
        value: "Customer integrations",
        note: "Vary by deployment",
      },
      {
        label: "Not covered",
        value: "Residency commitments",
        note: "Contractual, not product",
      },
    ],
  },
  {
    heading: "Governance",
    fields: [
      { label: "Owner", value: "Privacy" },
      { label: "Reviewer", value: "Trust & Governance" },
      { label: "Effective", value: "28 Jun 2026" },
      { label: "Next review", value: "28 Dec 2026" },
    ],
  },
  {
    heading: "Evidence & history",
    fields: [
      { label: "Source claims", value: "Linked, 14 references" },
      { label: "Supersedes", value: "v5 · preserved" },
      { label: "Corrections", value: "2 recorded" },
    ],
  },
  {
    heading: "Formats",
    fields: [
      { label: "Available", value: "Accessible HTML, tagged PDF" },
      { label: "Languages", value: "Approved translations only" },
    ],
  },
  {
    heading: "Access",
    fields: [
      { label: "Level", value: "Public", strong: true },
      { label: "Account required", value: "No" },
    ],
  },
  {
    heading: "Limitations",
    body: "Describes product behavior as configured by default. It does not describe your deployment, and it is not a legal opinion about your obligations.",
  },
  {
    heading: "What it never contains",
    body: "No legal advice, customer facts, participant identities, or representative-body membership. Translated wording is not authoritative unless reviewed for that use.",
  },
];

export default function ResourceDetail() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Resource Detail
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Inspect Scope and Limitations Before Reusing Anything
          </h2>

        </div>

        {/* Record Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          {/* Card Header */}
          <div className="flex flex-col gap-3 border-b border-stone-200 px-6 py-5 sm:flex-row sm:items-start sm:justify-between dark:border-slate-800">

            <div className="flex flex-col gap-1.5">

              <p className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                RES-0142 · version 6 · Data category &amp; collection map
              </p>

              <p className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Intended audience: representative bodies, advisors, privacy
                reviewers
              </p>

            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold leading-5 text-emerald-600 dark:text-emerald-400">

              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="shrink-0"
                aria-hidden="true"
              >
                <path
                  d="M2.5 6.2L4.8 8.5L9.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              Current

            </span>

          </div>

          {/* Detail Grid — 1px gaps render the cell dividers */}
          <div className="grid grid-cols-1 gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-slate-800">

            {cells.map((cell) => (
              <div
                key={cell.heading}
                className="flex flex-col bg-white px-5 py-6 dark:bg-slate-900"
              >

                <h3 className="text-xs font-bold uppercase leading-5 tracking-wide text-emerald-600 dark:text-emerald-400">
                  {cell.heading}
                </h3>

                {cell.fields && (
                  <dl className="mt-4 flex flex-col gap-3.5">

                    {cell.fields.map((field) => (
                      <div
                        key={`${field.label}-${field.value}`}
                        className="flex flex-col gap-0.5"
                      >

                        <dt className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                          {field.label}
                        </dt>

                        <dd
                          className={`text-sm leading-6 text-sky-950 dark:text-white ${
                            field.strong ? "font-bold" : "font-normal"
                          }`}
                        >
                          {field.value}
                        </dd>

                        {field.note && (
                          <p className="text-xs font-normal italic leading-5 text-zinc-400 dark:text-slate-500">
                            {field.note}
                          </p>
                        )}

                      </div>
                    ))}

                  </dl>
                )}

                {cell.body && (
                  <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {cell.body}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
