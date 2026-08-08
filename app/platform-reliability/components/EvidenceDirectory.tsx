const filters = [
  "Dimension",
  "Service / component",
  "Environment",
  "Region",
  "Evidence type",
  "Status",
  "Access level",
  "Owner",
  "Last reviewed",
];

type Entry = {
  title: string;
  access: "Public" | "Controlled";
  summary: string;
  owner: string;
  reviewed: string;
  status: string;
  footnote: string;
};

const entries: Entry[] = [
  {
    title: "Service scope & journey register",
    access: "Public",
    summary:
      "Components, journeys, environments, and dependency classes with owners.",
    owner: "Platform",
    reviewed: "28 Jun 2026",
    status: "Current",
    footnote: "Limitation: excludes customer-specific configuration.",
  },
  {
    title: "Indicator definitions",
    access: "Public",
    summary:
      "Full nineteen-field definitions, including exclusions and missing-data policy.",
    owner: "Platform operations",
    reviewed: "28 Jun 2026",
    status: "Measuring",
    footnote:
      "Definitions are public; values are not published while quality is under review.",
  },
  {
    title: "Change safety controls",
    access: "Public",
    summary:
      "Validation, rollout, observation, rollback, and emergency-change practice.",
    owner: "Engineering",
    reviewed: "15 Jun 2026",
    status: "Current",
    footnote:
      "Limitation: no zero-downtime or auto-reversibility claim.",
  },
  {
    title: "Recovery test results",
    access: "Controlled",
    summary:
      "Scope, sample, environment, result, gaps, corrective actions, and next test.",
    owner: "Platform",
    reviewed: "—",
    status: "Under review",
    footnote: "Under review. No RTO or RPO published for any scope.",
  },
  {
    title: "Integrity & reconciliation controls",
    access: "Controlled",
    summary:
      "Lineage, duplicate detection, reconciliation, and correction pathways.",
    owner: "Platform",
    reviewed: "01 Jul 2026",
    status: "Current",
    footnote:
      "Access: governed request. Known failure modes included.",
  },
  {
    title: "Availability results",
    access: "Controlled",
    summary:
      "Measured availability by service, window, and eligible population.",
    owner: "Platform operations",
    reviewed: "—",
    status: "Unavailable",
    footnote:
      "No current evidence supports publication. This does not imply future availability.",
  },
];

const accessStyles: Record<Entry["access"], string> = {
  Public:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  Controlled:
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function EvidenceDirectory() {
  return (
    <section
      id="evidence-directory"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Reliability Evidence Directory
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Definitions, Methods, Controls, Tests, and Limitations
          </h2>

        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-2">
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
          Withdrawn and superseded evidence is removed from current results and
          structured data, with a safe correction record retained. Search terms
          are never captured in analytics.
        </p>

      </div>
    </section>
  );
}
