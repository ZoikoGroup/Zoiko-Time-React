"use client";

type Resource = {
  name: string;
  summary: string;
  type: string;
  audience: string;
  date: string;
  status: string;
  statusType?: "current" | "superseded" | "removed";
};

const filters = [
  "Resource type",
  "Audience",
  "Product area",
  "Authority",
  "Applicability",
  "Status",
  "Owner",
  "Last reviewed",
];

const resources: Resource[] = [
  {
    name: "Product Documentation",
    summary: "Behaviour, fields, states, permissions",
    type: "Documentation · governs behaviour",
    audience: "All roles",
    date: "Reviewed 04 Jul 2026",
    status: "Current",
  },
  {
    name: "Help Center",
    summary: "Troubleshooting and escalation",
    type: "Support · governs troubleshooting",
    audience: "Customers",
    date: "Reviewed 11 Jul 2026",
    status: "Current",
  },
  {
    name: "Getting Started",
    summary: "Role-based onboarding",
    type: "Onboarding",
    audience: "New users, admins",
    date: "Reviewed 28 Jun 2026",
    status: "Current",
  },
  {
    name: "Release Notes",
    summary: "Verified shipped changes",
    type: "Release · governs change",
    audience: "Customers, admins, developers",
    date: "Published continuously",
    status: "Current",
  },
  {
    name: "Development Documentation",
    summary: "Architecture and patterns",
    type: "Developer guidance",
    audience: "Developers, IT",
    date: "Reviewed 20 Jun 2026",
    status: "Current",
  },
  {
    name: "Trust Center",
    summary: "Governance evidence entry point",
    type: "Evidence · governs assurance",
    audience: "Security, privacy, legal",
    date: "Reviewed 01 Jul 2026",
    status: "Current",
  },
  {
    name: "Integration Directory",
    summary: "Verified providers only",
    type: "Integration discovery",
    audience: "IT, admins",
    date: "Verified 28 Jun 2026",
    status: "Current",
  },
  {
    name: "Reviewer correction guide",
    summary: "Superseded by Documentation section",
    type: "Guide",
    audience: "Reviewers",
    date: "Superseded 04 Jul 2026",
    status: "Superseded — redirected",
    statusType: "superseded",
  },
  {
    name: "Legacy integration setup article",
    summary: "Review overdue, risk assessed",
    type: "Guide",
    audience: "IT",
    date: "Reviewed 14 Nov 2025",
    status: "Removed from discovery",
    statusType: "removed",
  },
];

const collections = [
  {
    title: "First 30 days as an administrator",
    description:
      "Onboarding, configuration, identity, and verification — mixed authorities, each labelled.",
  },
  {
    title: "Preparing for a works-council conversation",
    description:
      "Worker rights, human authority, anti-surveillance doctrine, and accessibility evidence.",
  },
  {
    title: "Reviewer essentials",
    description:
      "Queue behaviour, decisions, separation of duties, and correction handling.",
  },
  {
    title: "Evaluating for procurement",
    description:
      "Trust evidence, enterprise readiness, support model, and commercial terms.",
  },
];

const freshnessStates = [
  {
    title: "Recently verified",
    description: "reviewed on a date, with no implied product change",
  },
  {
    title: "Recently changed",
    description: "what type of content changed, linked to the release record",
  },
  {
    title: "Correction",
    description: "the note, date, affected section, replacement, and owner",
  },
  {
    title: "Superseded",
    description: "redirected to the current resource where safe",
  },
  {
    title: "Stale / review overdue",
    description: "marked or removed according to risk",
  },
  {
    title: "Withdrawn",
    description: "removed from content and public indexing",
  },
  {
    title: "Changed product label",
    description: "old term resolves in search, is not shown as canonical",
  },
  {
    title: "Index lag",
    description: "the directory stays authoritative; search may lag",
  },
];

function StatusBadge({
  status,
  statusType = "current",
}: {
  status: string;
  statusType?: Resource["statusType"];
}) {
  const styles = {
    current:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
    superseded:
      "bg-gray-100 text-gray-600 dark:bg-white/10 dark:text-gray-300",
    removed:
      "bg-red-50 text-red-600 dark:bg-red-400/10 dark:text-red-400",
  };

  return (
    <span
      className={`inline-flex w-fit rounded-full px-2.5 py-1 text-xs font-bold leading-5 ${
        styles[statusType]
      }`}
    >
      {status}
    </span>
  );
}

function ResourceTable() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[1050px] border-collapse">
          <thead>
            <tr className="bg-gray-50 dark:bg-white/[0.04]">
              {[
                "Resource",
                "Type & authority",
                "Audience",
                "Date",
                "Status",
              ].map((heading) => (
                <th
                  key={heading}
                  className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-900 dark:border-white/10 dark:text-white"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {resources.map((resource) => (
              <tr
                key={resource.name}
                className="transition-colors hover:bg-gray-50 dark:hover:bg-white/[0.02]"
              >
                <td className="border-b border-gray-100 px-4 py-3.5 dark:border-white/10">
                  <div className="text-sm font-black leading-6 text-slate-900 dark:text-white">
                    {resource.name}
                  </div>
                  <div className="text-xs font-semibold leading-5 text-gray-500 dark:text-gray-400">
                    {resource.summary}
                  </div>
                </td>

                <td className="border-b border-gray-100 px-4 py-3.5 text-sm leading-6 text-gray-600 dark:border-white/10 dark:text-gray-300">
                  {resource.type}
                </td>

                <td className="border-b border-gray-100 px-4 py-3.5 text-sm leading-6 text-gray-600 dark:border-white/10 dark:text-gray-300">
                  {resource.audience}
                </td>

                <td className="border-b border-gray-100 px-4 py-3.5 text-sm leading-6 text-gray-600 dark:border-white/10 dark:text-gray-300">
                  {resource.date}
                </td>

                <td className="border-b border-gray-100 px-4 py-3.5 dark:border-white/10">
                  <StatusBadge
                    status={resource.status}
                    statusType={resource.statusType}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / Tablet */}
      <div className="grid gap-3 p-3 lg:hidden">
        {resources.map((resource) => (
          <article
            key={resource.name}
            className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-sm font-black leading-6 text-slate-900 dark:text-white">
                  {resource.name}
                </h3>

                <p className="text-xs font-semibold leading-5 text-gray-500 dark:text-gray-400">
                  {resource.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 border-t border-gray-200 pt-3 dark:border-white/10 sm:grid-cols-2">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Type & authority
                  </span>
                  <p className="mt-0.5 text-sm leading-5 text-gray-700 dark:text-gray-300">
                    {resource.type}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Audience
                  </span>
                  <p className="mt-0.5 text-sm leading-5 text-gray-700 dark:text-gray-300">
                    {resource.audience}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Date
                  </span>
                  <p className="mt-0.5 text-sm leading-5 text-gray-700 dark:text-gray-300">
                    {resource.date}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Status
                  </span>
                  <div className="mt-1">
                    <StatusBadge
                      status={resource.status}
                      statusType={resource.statusType}
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function CollectionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-6 py-7 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-white/10 dark:bg-white/[0.03]">
      <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-base leading-6 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default function Directory() {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-4 px-5 sm:px-7">

        {/* Header */}
        <div className="flex w-full max-w-[820px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 text-slate-900 sm:text-4xl dark:text-white">
            Current resource directory
          </h2>

          <p className="max-w-[643px] text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 dark:text-gray-300">
            Registry-driven. A record appears here only when its route,
            content, index, accessibility, claim, rights, and QA states are
            all publishable — so this list is a consequence of governance,
            not an editorial choice.
          </p>
        </div>

        {/* Filters */}
        <div className="flex w-full flex-wrap gap-2 pt-2">
          {filters.map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold leading-5 text-slate-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Directory */}
        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.02]">
          <ResourceTable />

          <div className="border-t border-gray-100 px-4 py-3.5 text-xs leading-5 text-gray-500 dark:border-white/10 dark:text-gray-400">
            Illustrative of the registry contract. Superseded and withdrawn
            records are excluded from current listings, schema, sitemap, and
            counts.
          </div>
        </div>

        {/* Important directory rule */}
        <div className="w-full text-xs leading-5 text-gray-500 dark:text-gray-400">
          The last row is the important one: stale guidance is{" "}
          <strong className="font-bold text-gray-600 dark:text-gray-300">
            removed from authoritative discovery
          </strong>{" "}
          rather than kept to avoid an empty section. A retired product label
          still resolves as a search synonym, but it is never presented as the
          current canonical name.
        </div>

        {/* Collections + Freshness */}
        <div className="grid w-full grid-cols-1 gap-10 pt-6 lg:grid-cols-2 lg:gap-14">

          {/* Curated collections */}
          <div className="flex flex-col gap-3.5">
            <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white">
              Curated collections
            </h2>

            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
              Grouped around approved goals without creating a second
              authority. A collection is a route, not a rewrite.
            </p>

            <div className="grid gap-4 pt-1">
              {collections.map((collection) => (
                <CollectionCard
                  key={collection.title}
                  title={collection.title}
                  description={collection.description}
                />
              ))}
            </div>
          </div>

          {/* Recently changed */}
          <div className="flex flex-col gap-3.5">
            <h2 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white">
              Recently changed and corrected
            </h2>

            <p className="text-base leading-7 text-gray-600 dark:text-gray-300">
              Nine freshness states, each with a distinct public treatment.
            </p>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
              <div className="flex flex-col gap-4">
                {freshnessStates.map((state) => (
                  <div
                    key={state.title}
                    className="relative pl-4"
                  >
                    <span className="absolute left-0 top-[9px] size-1.5 rounded-sm bg-emerald-400" />

                    <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                      <strong className="font-bold text-gray-700 dark:text-gray-200">
                        {state.title}
                      </strong>{" "}
                      — {state.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-gray-200 pt-5 text-sm leading-6 text-gray-600 dark:border-white/10 dark:text-gray-300">
                A “reviewed” date and an “updated” date answer different
                questions. Both are shown when both matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}