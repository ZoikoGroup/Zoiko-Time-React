"use client";

type ResourceCardProps = {
  badge: string;
  badgeStrong?: boolean;
  title: string;
  description: string;
  metaLabel: string;
  metaValue: string;
  secondLabel?: string;
  secondValue?: string;
  note: string;
};

const learnCards: ResourceCardProps[] = [
  {
    badge: "Guide",
    title: "Outcome-led guides",
    description:
      "Decision frameworks and workflow education with goal, role, depth, and source links.",
    metaLabel: "Owner",
    metaValue: "Content governance",
    secondLabel: "Reviewed",
    secondValue: "Per resource",
    note: "Does not replace Product Documentation, and is not legal advice.",
  },
  {
    badge: "Video tutorial",
    title: "Task demonstrations",
    description:
      "Version-aware task walkthroughs with captions, transcript, duration, and prerequisites.",
    metaLabel: "Owner",
    metaValue: "Learning",
    secondLabel: "Verified",
    secondValue: "Per resource",
    note: "Supplemental learning. Documentation remains the authority, and product data shown is synthetic.",
  },
  {
    badge: "Webinars & events",
    title: "Governed live and on-demand sessions",
    description:
      "Date, time, timezone, status, format, speaker, and accessibility provision.",
    metaLabel: "Owner",
    metaValue: "Learning",
    secondLabel: "Status",
    secondValue: "Per registry",
    note: "No fictitious event, speaker, capacity, or certificate claim. Sessions appear only when current.",
  },
];

const useCards: ResourceCardProps[] = [
  {
    badge: "Highest authority",
    badgeStrong: true,
    title: "Product Documentation",
    description:
      "Exact concepts, tasks, fields, states, permissions, limitations, and recovery.",
    metaLabel: "Governs",
    metaValue: "Current product behaviour",
    secondLabel: "Owner",
    secondValue: "Product docs",
    note: "The authority for behaviour. Other resources defer to it, including this page.",
  },
  {
    badge: "Support authority",
    title: "Help Center",
    description:
      "Troubleshooting, known states, recovery, and safe escalation.",
    metaLabel: "Governs",
    metaValue: "Troubleshooting",
    secondLabel: "Owner",
    secondValue: "Support",
    note: "Support intent is never diverted to a sales route.",
  },
  {
    badge: "Onboarding",
    title: "Getting Started",
    description:
      "Role-based first actions and how to verify you reached first value.",
    metaLabel: "Governs",
    metaValue: "Onboarding sequence",
    secondLabel: "Owner",
    secondValue: "Onboarding",
    note: "Defers to Documentation on product behaviour.",
  },
];

const buildCards: ResourceCardProps[] = [
  {
    badge: "Development",
    title: "Development Documentation",
    description:
      "Technical architecture, patterns, and security, testing, and production guidance.",
    metaLabel: "Discloses",
    metaValue: "Version, owner, review date, prerequisites",
    note: "No invented endpoints, SDKs, environments, or limits.",
  },
  {
    badge: "Release authority",
    badgeStrong: true,
    title: "Release Notes",
    description:
      "The authoritative chronological record of verified shipped changes.",
    metaLabel: "Discloses",
    metaValue: "Date, version, state, applicability, action",
    note: "No roadmap, and no marketing benefit inflation.",
  },
  {
    badge: "Integration directory",
    title: "Verified integrations",
    description:
      "Provider, connection state, capability scope, and support lifecycle where verified.",
    metaLabel: "Discloses",
    metaValue: "Provider identity and rights, region and plan where verified",
    note: "No invented integration, provider, or logo.",
  },
];

function ResourceCard({
  badge,
  badgeStrong,
  title,
  description,
  metaLabel,
  metaValue,
  secondLabel,
  secondValue,
  note,
}: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/[0.03]">
      {/* Main content */}
      <div className="px-6 pb-4 pt-5">
        <span
          className={`inline-flex rounded-sm border px-1.5 py-[3px] text-[9px] font-extrabold uppercase leading-4 tracking-wide ${
            badgeStrong
              ? "border-gray-200 bg-gray-100 text-emerald-500 dark:border-white/10 dark:bg-white/10 dark:text-emerald-400"
              : "border-gray-200 bg-gray-50 text-gray-500 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
          }`}
        >
          {badge}
        </span>

        <h3 className="mt-2.5 text-base font-bold leading-5 text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-1.5 text-xs font-normal leading-5 text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>

      {/* Metadata */}
      <div className="px-6 py-2.5">
        <div
          className={`grid gap-x-4 gap-y-2 ${
            secondLabel ? "grid-cols-2" : "grid-cols-[auto_1fr]"
          }`}
        >
          <div>
            <p className="text-xs font-semibold leading-5 text-gray-500 dark:text-gray-400">
              {metaLabel}
            </p>
            <p className="text-xs font-semibold leading-5 text-slate-700 dark:text-gray-200">
              {metaValue}
            </p>
          </div>

          {secondLabel && (
            <div>
              <p className="text-xs font-semibold leading-5 text-gray-500 dark:text-gray-400">
                {secondLabel}
              </p>
              <p className="text-xs font-semibold leading-5 text-slate-700 dark:text-gray-200">
                {secondValue}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Note */}
      <div className="mt-auto border-t border-orange-200 bg-orange-50 px-6 py-2.5 dark:border-orange-400/20 dark:bg-orange-400/[0.06]">
        <p className="text-xs font-normal leading-5 text-orange-700 dark:text-orange-300">
          {note}
        </p>
      </div>
    </article>
  );
}

function FamilyGroup({
  title,
  cards,
}: {
  title: string;
  cards: ResourceCardProps[];
}) {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold leading-6 text-slate-900 dark:text-white">
        {title}
      </h3>

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <ResourceCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
}

export default function ResourceFamilies() {
  return (
    <section className="w-full bg-gray-50 py-14 sm:py-16 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-4 px-5 sm:px-7">
        
        {/* Header */}
        <div className="flex w-full max-w-[800px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-10 text-slate-900 sm:text-4xl dark:text-white">
            Three resource families
          </h2>

          <p className="w-full max-w-[643px] text-sm leading-6 text-gray-600 sm:text-base sm:leading-7 dark:text-gray-300">
            Learn, Use, and Build &amp; Stay Updated. Each destination states
            what it governs — and what it defers to.
          </p>
        </div>

        {/* Learn */}
        <FamilyGroup title="Learn" cards={learnCards} />

        {/* Excluded categories */}
        <div className="w-full">
          <p className="text-xs font-bold leading-5 text-gray-500 dark:text-gray-400">
            Customer Stories and Blog &amp; Insights are absent from this
            family.{" "}
            <span className="font-normal">
              Approved customer evidence and a separate editorial publishing
              route are not currently registry-approved, and an empty category
              or a coming-soon card would be content-roadmap theatre.
            </span>
          </p>
        </div>

        {/* Use ZoikoTime */}
        <FamilyGroup title="Use ZoikoTime" cards={useCards} />

        {/* Build & Stay Updated */}
        <FamilyGroup title="Build & Stay Updated" cards={buildCards} />
      </div>
    </section>
  );
}