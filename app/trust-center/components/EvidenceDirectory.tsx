import Link from "next/link";

const filters = [
  "Topic",
  "Evidence type",
  "Product scope",
  "Audience",
  "Status",
  "Access level",
  "Owner",
  "Effective date",
  "Last reviewed",
];

type Entry = {
  title: string;
  access: "Public" | "Controlled" | "Contractual";
  summary: string;
  claimId: string;
  owner: string;
  reviewed: string;
  status: string;
  footnote: string;
};

const entries: Entry[] = [
  {
    title: "Anti-surveillance invariant",
    access: "Public",
    summary:
      "The exact collection prohibition, applying to every tier and configuration.",
    claimId: "TC-0001",
    owner: "Trust & Governance",
    reviewed: "12 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: describes non-collection only. Not a compliance conclusion.",
  },
  {
    title: "Human authority over decisions",
    access: "Public",
    summary:
      "Which decisions require an authorized person, and what a flag is not.",
    claimId: "TC-0004",
    owner: "Product governance",
    reviewed: "04 Jul 2026",
    status: "Current",
    footnote:
      "Limitation: applies to product behavior, not your internal process design.",
  },
  {
    title: "Deterministic classification is not AI",
    access: "Public",
    summary:
      "Rule-based, versioned, jurisdiction-aware, reviewable — and not branded as AI.",
    claimId: "TC-0007",
    owner: "AI governance",
    reviewed: "20 Jun 2026",
    status: "Current",
    footnote:
      "Limitation: approved ML may still flag anomalies for human review.",
  },
  {
    title: "Data category & retention map",
    access: "Public",
    summary:
      "Categories, purposes, access roles, retention, processors, and transfers.",
    claimId: "TC-0012",
    owner: "Privacy",
    reviewed: "28 Jun 2026",
    status: "Current",
    footnote:
      "Limitation: residency commitments apply only where contractually operational.",
  },
  {
    title: "Security control summaries",
    access: "Controlled",
    summary:
      "Control detail at review-appropriate depth for security and procurement teams.",
    claimId: "TC-0021",
    owner: "Security",
    reviewed: "01 Jul 2026",
    status: "Current",
    footnote:
      "Access: governed request. Full test results are never public.",
  },
  {
    title: "Accessibility conformance",
    access: "Public",
    summary:
      "Tested scope, method, known limitations, and remediation status.",
    claimId: "TC-0030",
    owner: "Accessibility",
    reviewed: "22 Jun 2026",
    status: "Current",
    footnote:
      "Limitation: stated per surface. No blanket conformance claim.",
  },
  {
    title: "Vendor & processor governance",
    access: "Controlled",
    summary: "Subprocessor governance and oversight approach.",
    claimId: "TC-0034",
    owner: "Privacy & Security",
    reviewed: "28 Jun 2026",
    status: "Under review",
    footnote:
      "Under review: wording and scope being reconfirmed. Prior version superseded.",
  },
  {
    title: "Regional data location",
    access: "Contractual",
    summary:
      "Assessed region by region against current contractual position.",
    claimId: "TC-0041",
    owner: "Privacy",
    reviewed: "—",
    status: "Evidence-gated",
    footnote:
      "No blanket global-residency claim exists or will be published.",
  },
];

const accessStyles: Record<Entry["access"], string> = {
  Public:
    "border-emerald-100 bg-emerald-50 text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300",
  Controlled:
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
  Contractual:
    "border-stone-200 bg-slate-100 text-zinc-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300",
};

export default function EvidenceDirectory() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Evidence Directory
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Search by Question, Not by Jargon
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Sorted by current public commitments and operational facts — never by
            marketing popularity. Withdrawn, unsafe, customer-specific, and
            unauthorized controlled content is excluded from the index.
          </p>

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
              key={entry.claimId}
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
                  { label: "Claim ID", value: entry.claimId },
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

              <p className="mt-4 border-t border-stone-200 pt-3 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400">
                {entry.footnote}
              </p>

            </article>
          ))}

          {/* No result route */}
          <article className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-start justify-between gap-3">

              <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                No result?
              </h3>

              <span className="shrink-0 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-950/40 dark:text-emerald-300">
                Route
              </span>

            </div>

            <p className="mt-2 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
              If a claim is not here, it is because it is not currently evidenced
              — not because it is hidden.
            </p>

            <Link
              href="#request-security-review"
              className="group mt-4 inline-flex items-center gap-1.5 self-start border-t border-stone-200 pt-3 text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:border-slate-800 dark:text-emerald-400"
            >

              <span>Request Security Review</span>

              <span
                className="transition group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                →
              </span>

            </Link>

          </article>

        </div>

        <p className="mt-8 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Search terms are never captured as free-text analytics.
          Controlled-artifact titles and metadata are withheld where even their
          existence is restricted.
        </p>

      </div>
    </section>
  );
}
