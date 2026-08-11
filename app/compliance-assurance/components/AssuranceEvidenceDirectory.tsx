const filters = [
  "Record type",
  "Framework context",
  "Product scope",
  "Environment",
  "Region",
  "Status",
  "Access level",
  "Owner",
  "Last reviewed",
];

type Access = "PUBLIC" | "CONTROLLED";

const accessStyles: Record<Access, string> = {
  PUBLIC:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  CONTROLLED:
    "border-stone-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

const entries: {
  title: string;
  access: Access;
  summary: string;
  owner: string;
  reviewed: string;
  status: string;
  footnote: string;
}[] = [
  {
    title: "Assurance taxonomy definitions",
    access: "PUBLIC",
    summary:
      "The twelve record types, their meanings, and their boundaries.",
    owner: "Trust & Governance",
    reviewed: "12 Jul 2026",
    status: "Current",
    footnote: "Limitation: definitional only. Not a legal framework guide.",
  },
  {
    title: "Coverage state definitions",
    access: "PUBLIC",
    summary:
      "Eight mapping coverage states and required display rules for each.",
    owner: "Trust & Governance",
    reviewed: "12 Jul 2026",
    status: "Current",
    footnote: "Limitation: a mapping is not regulator approval.",
  },
  {
    title: "Shared responsibility matrix",
    access: "PUBLIC",
    summary: "Ownership by control objective and deployment context.",
    owner: "Product governance",
    reviewed: "04 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: your configured model may differ; confirm in review.",
  },
  {
    title: "Control mapping packages",
    access: "CONTROLLED",
    summary:
      "Requirement-to-control relationships with basis, coverage state, and gaps.",
    owner: "Security & Governance",
    reviewed: "01 Jul 2026",
    status: "Current",
    footnote: "Access: governed request. Includes unmapped requirements.",
  },
  {
    title: "Independent assessment",
    access: "CONTROLLED",
    summary:
      "Scope, period, method, sampling limitations, findings, and exclusions.",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Under review",
    footnote: "Under review — do not rely on it as settled.",
  },
  {
    title: "Certification register",
    access: "CONTROLLED",
    summary:
      "Any current certificates with issuer, version, subject, scope, dates, and exclusions.",
    owner: "Trust & Governance",
    reviewed: "—",
    status: "Unavailable",
    footnote:
      "No current public certification claim exists. This carries no future-state implication.",
  },
];

export default function AssuranceEvidenceDirectory() {
  return (
    <section
      id="assurance-evidence-directory"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Assurance Evidence Directory
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Public Records, Honestly Stated
          </h2>

        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
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
          Withdrawn, expired, and superseded artifacts are excluded from default
          results and from structured data. Controlled, customer-specific, and
          restricted evidence is never indexed, and search terms are never captured
          in analytics.
        </p>

      </div>
    </section>
  );
}
