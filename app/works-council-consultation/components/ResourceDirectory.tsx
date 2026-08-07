const filters = [
  "Audience",
  "Topic",
  "Product area",
  "Jurisdiction context",
  "Language",
  "Format",
  "Status",
  "Access level",
  "Last reviewed",
];

const resources = [
  {
    title: "Purpose & scope statement",
    access: "Public",
    summary:
      "What the product is for, which workforce groups are affected, and what is explicitly out of scope.",
    owner: "Product governance",
    status: "Current · v4",
    reviewed: "12 Jul 2026",
    footnote:
      "Limitation: describes product behavior, not your deployment configuration.",
  },
  {
    title: "Data category & collection map",
    access: "Public",
    summary:
      "Categories, sources, purposes, recipients, retention, and location context in one table.",
    owner: "Privacy",
    status: "Current · v6",
    reviewed: "28 Jun 2026",
    footnote:
      "Limitation: residency statements apply only where contractually operational.",
  },
  {
    title: "Collection limits & anti-surveillance",
    access: "Public",
    summary:
      "The exact invariant, what it covers, and how it is enforced across tiers and configurations.",
    owner: "Trust & Governance",
    status: "Current · v3",
    reviewed: "12 Jul 2026",
    footnote: "Limitation: none. This invariant does not vary by plan.",
  },
  {
    title: "Worker rights & correction routes",
    access: "Public",
    summary:
      "Visibility, explanation, correction, challenge, representation, and escalation as product behavior.",
    owner: "Product governance",
    status: "Current · v5",
    reviewed: "04 Jul 2026",
    footnote:
      "Limitation: availability of specific routes depends on your configuration.",
  },
  {
    title: "Human authority & AI boundaries",
    access: "Public",
    summary:
      "Deterministic classification, approved ML scope, the Kairos boundary, and where decisions sit.",
    owner: "AI governance",
    status: "Current · v4",
    reviewed: "20 Jun 2026",
    footnote:
      "Limitation: model and provider detail is not published on marketing surfaces.",
  },
  {
    title: "Administration, roles & logs",
    access: "Public",
    summary:
      "Administrative roles, policy controls, audit logging, and what administrators can and cannot see.",
    owner: "Product governance",
    status: "Current · v3",
    reviewed: "15 Jun 2026",
    footnote:
      "Limitation: describes capability, not your assigned role model.",
  },
  {
    title: "Security & incident overview",
    access: "Controlled",
    summary:
      "Security controls, incident handling, and reliability evidence at review-appropriate depth.",
    owner: "Security",
    status: "Current · v7",
    reviewed: "01 Jul 2026",
    footnote:
      "Access: governed request route. Detailed findings are never public.",
  },
  {
    title: "Rollout, training & change governance",
    access: "Public",
    summary:
      "Rollout stages, training dependencies, support routes, and what triggers renewed review.",
    owner: "Implementation",
    status: "Current · v2",
    reviewed: "08 Jul 2026",
    footnote:
      "Limitation: stages are operational guidance, not legal deadlines.",
  },
  {
    title: "Accessibility conformance",
    access: "Public",
    summary:
      "WCAG 2.2 AA position, known limitations, remediation status, and accessible format options.",
    owner: "Accessibility",
    status: "Current · v3",
    reviewed: "22 Jun 2026",
    footnote:
      "Limitation: conformance is stated per surface, not as a blanket claim.",
  },
];

const accessStyles: Record<string, string> = {
  Public:
    "border-stone-200 bg-white text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400",
  Controlled:
    "border-stone-200 bg-white text-zinc-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400",
};

export default function ResourceDirectory() {
  return (
    <section
      id="resource-directory"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Resource Directory
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Ten Topics, Each Scoped and Dated
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Sorted by current core resources and direct answers — not by
            popularity. Every card states its owner, status, review date, and
            limitations before you open it.
          </p>

        </div>

        {/* Filter Dimensions */}
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

        {/* Resource Cards */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {resources.map((resource) => (
            <article
              key={resource.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <div className="flex items-start justify-between gap-3">

                <h3 className="text-base font-bold leading-5 text-sky-950 dark:text-white">
                  {resource.title}
                </h3>

                <span
                  className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide ${accessStyles[resource.access]}`}
                >
                  {resource.access}
                </span>

              </div>

              <p className="mt-2 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {resource.summary}
              </p>

              {/* Metadata */}
              <dl className="mt-3.5 grid flex-1 grid-cols-[64px_1fr] content-start gap-x-3 gap-y-1">

                {[
                  { label: "Owner", value: resource.owner },
                  { label: "Status", value: resource.status },
                  { label: "Reviewed", value: resource.reviewed },
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
                {resource.footnote}
              </p>

            </article>
          ))}

        </div>

        <p className="mt-8 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Customer-specific packs and restricted artifact titles never appear in
          this directory. A generic template is never presented as
          jurisdiction-approved.
        </p>

      </div>
    </section>
  );
}
