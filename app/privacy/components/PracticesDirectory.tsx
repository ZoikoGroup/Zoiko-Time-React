import StatusPill, { type Tone } from "./StatusPill";

const practiceStatuses: { label: string; tone: Tone }[] = [
  { label: "Current", tone: "green" },
  { label: "Under review", tone: "blue" },
  { label: "Superseded", tone: "neutral" },
  { label: "Withdrawn", tone: "red" },
  { label: "Customer-specific", tone: "blue" },
  { label: "Evidence-gated", tone: "neutral" },
];

const filters = [
  "Topic",
  "Data category",
  "Source",
  "Purpose",
  "Role",
  "Access level",
  "Recipient type",
  "Retention class",
  "Region",
  "Status",
  "Last reviewed",
];

type Entry = {
  title: string;
  access: "Public" | "Customer-specific" | "Controlled" | "Contractual";
  summary: string;
  owner: string;
  reviewed: string;
  status: string;
  footnote: string;
};

const entries: Entry[] = [
  {
    title: "Collection limits statement",
    access: "Public",
    summary: "What is never collected, in every tier and configuration.",
    owner: "Trust & Governance",
    reviewed: "12 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: describes non-collection. Not a compliance conclusion.",
  },
  {
    title: "Data category & purpose map",
    access: "Public",
    summary:
      "Categories, illustrative contents, approved purposes, and what each must never imply.",
    owner: "Privacy",
    reviewed: "28 Jun 2026",
    status: "Current",
    footnote:
      "Limitation: contents are illustrative, not an exhaustive field list.",
  },
  {
    title: "Worker visibility & correction",
    access: "Public",
    summary:
      "What a worker can see, ask, and escalate — and the limits of each.",
    owner: "Product governance",
    reviewed: "04 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: available routes depend on your configuration and jurisdiction.",
  },
  {
    title: "Retention schedule summary",
    access: "Customer-specific",
    summary:
      "Schedules by record type, trigger, and owner for your configuration.",
    owner: "Privacy",
    reviewed: "—",
    status: "Customer-specific",
    footnote:
      "No public universal claim exists. Request through Privacy Review.",
  },
  {
    title: "DPA & processing terms",
    access: "Controlled",
    summary: "Current contractual processing terms and their scope.",
    owner: "Legal",
    reviewed: "—",
    status: "Customer-specific",
    footnote:
      "Terms depend on your agreement. Routed through controlled review.",
  },
  {
    title: "Regional data location",
    access: "Contractual",
    summary:
      "Processing and backup location classes assessed region by region.",
    owner: "Privacy",
    reviewed: "—",
    status: "Evidence-gated",
    footnote:
      "The Data Location & Residency destination is not released, so it is not linked.",
  },
];

const accessStyles: Record<Entry["access"], string> = {
  Public:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  "Customer-specific":
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  Controlled:
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  Contractual:
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function PracticesDirectory() {
  return (
    <section
      id="practices-directory"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Privacy-Practices Directory
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Six Practice Statuses, Applied Honestly
          </h2>

          {/* Statuses */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {practiceStatuses.map((status) => (
              <StatusPill
                key={status.label}
                label={status.label}
                tone={status.tone}
              />
            ))}
          </div>

        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold leading-5 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Entries */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {entries.map((entry) => (
            <article
              key={entry.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <div className="flex items-start justify-between gap-3">

                <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                  {entry.title}
                </h3>

                <span
                  className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide ${accessStyles[entry.access]}`}
                >
                  {entry.access}
                </span>

              </div>

              <p className="mt-2 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {entry.summary}
              </p>

              <dl className="mt-3.5 grid flex-1 grid-cols-[72px_1fr] content-start gap-x-3 gap-y-1">
                {[
                  { label: "Owner", value: entry.owner },
                  { label: "Reviewed", value: entry.reviewed },
                  { label: "Status", value: entry.status },
                ].map((row) => (
                  <div key={row.label} className="contents">

                    <dt className="text-xs font-semibold leading-5 text-zinc-500 dark:text-slate-400">
                      {row.label}
                    </dt>

                    <dd className="text-xs font-normal leading-5 text-sky-900 dark:text-slate-200">
                      {row.value}
                    </dd>

                  </div>
                ))}
              </dl>

              <p className="mt-4 border-t border-dashed border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                {entry.footnote}
              </p>

            </article>
          ))}

        </div>

        <p className="mt-8 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Withdrawn and superseded practices are excluded from default results
          and link to their current replacement. The search index excludes
          restricted and customer-specific content, and search terms are never
          captured in analytics.
        </p>

      </div>
    </section>
  );
}
