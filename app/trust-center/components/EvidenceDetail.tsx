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
  quote?: string;
};

const cells: Cell[] = [
  {
    heading: "Approved wording",
    quote:
      "“No screenshots, keystroke content, URL history, application-name monitoring, or clipboard collection under any tier or configuration.”",
  },
  {
    heading: "Scope",
    fields: [
      { label: "Product", value: "ZoikoTime platform, all modules" },
      { label: "Plan / environment", value: "All plans, all environments" },
      { label: "Region", value: "All" },
    ],
  },
  {
    heading: "Excluded scope",
    fields: [
      {
        label: "Not covered",
        value: "Customer-operated third-party tools",
        note: "Outside ZoikoTime control",
      },
      {
        label: "Not covered",
        value: "Your legal obligations",
        note: "Separate assessment",
      },
    ],
  },
  {
    heading: "Governance",
    fields: [
      { label: "Owner", value: "Trust & Governance" },
      { label: "Reviewer", value: "Privacy, Legal" },
      { label: "Effective", value: "12 Jul 2026" },
      { label: "Next review", value: "12 Jan 2027" },
    ],
  },
  {
    heading: "Evidence type",
    fields: [
      { label: "Type", value: "Product invariant" },
      { label: "Source", value: "Engineering attestation + product spec" },
      { label: "Access", value: "Public", strong: true },
    ],
  },
  {
    heading: "Limitations & gaps",
    body: "Describes what is not collected. It is not a privacy compliance conclusion, and it does not address obligations arising from how you configure or use the product.",
  },
  {
    heading: "History",
    fields: [
      { label: "Supersedes", value: "v2 · wording clarified" },
      { label: "Corrections", value: "0" },
      { label: "Withdrawals", value: "None" },
    ],
  },
  {
    heading: "Related claims",
    body: "TC-0004 human authority · TC-0007 classification is not AI · TC-0012 data category map.",
  },
];

export default function EvidenceDetail() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Evidence Detail
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Inspect the Scope Behind a Claim Before Opening It
          </h2>

        </div>

        {/* Claim Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          {/* Header */}
          <div className="flex flex-col gap-3 border-b border-stone-200 px-6 py-5 sm:flex-row sm:items-start sm:justify-between dark:border-slate-800">

            <div className="flex flex-col gap-1.5">

              <p className="text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
                Claim TC-0001 · version 3
              </p>

              <p className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Anti-surveillance invariant
              </p>

            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold leading-5 text-emerald-700 dark:text-emerald-400">

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

              Current · Public

            </span>

          </div>

          {/* Detail Grid — 1px gaps render the cell dividers */}
          <div className="grid grid-cols-1 gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-slate-800">

            {cells.map((cell) => (
              <div
                key={cell.heading}
                className="flex flex-col bg-white px-5 py-6 dark:bg-slate-900"
              >

                <h3 className="text-xs font-bold uppercase leading-5 tracking-wide text-emerald-700 dark:text-emerald-400">
                  {cell.heading}
                </h3>

                {cell.quote && (
                  <p className="mt-4 text-sm font-bold leading-6 text-sky-950 dark:text-white">
                    {cell.quote}
                  </p>
                )}

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

          {/* Footer */}
          <p className="border-t border-stone-200 bg-slate-50 px-6 py-4 text-sm font-normal leading-6 text-zinc-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
            A detail view never presents a future-dated or expired artifact as
            current, and never exposes restricted filenames, customer
            identifiers, or internal control detail.
          </p>

        </div>

      </div>
    </section>
  );
}
