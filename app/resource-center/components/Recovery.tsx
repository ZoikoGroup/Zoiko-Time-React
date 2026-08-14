"use client";

type DetailItem = {
  label: string;
  value: React.ReactNode;
};

type RecoveryCardProps = {
  title: string;
  badge?: string;
  introLabel: string;
  intro: string;
  items: DetailItem[];
  note: React.ReactNode;
};

const missingContentItems: DetailItem[] = [
  {
    label: "No results",
    value: (
      <>
        “No current resources matched those terms,” with an explanation that
        gated content is not exposed — plus clear filters, approved synonyms,
        and browse-by-task.
      </>
    ),
  },
  {
    label: "Search unavailable",
    value: (
      <>
        “Search is temporarily unavailable. Browse current resources below.”
        The directory and quick paths stay usable.
      </>
    ),
  },
  {
    label: "Restricted-only match",
    value: (
      <>
        No title or snippet leak. A generic controlled-access summary only
        where policy allows.
      </>
    ),
  },
  {
    label: "Outdated match",
    value: (
      <>
        The current replacement is preferred, with the old term mapped to the
        current label.
      </>
    ),
  },
  {
    label: "Offline",
    value: (
      <>
        Non-sensitive filter state preserved, connectivity shown, and{" "}
        <strong className="font-bold">
          never a false claim that a submission succeeded.
        </strong>
      </>
    ),
  },
];

const reportItems: DetailItem[] = [
  {
    label: "What to report",
    value: "Content that is stale, missing, contradictory, or inaccessible.",
  },
  {
    label: "Where from",
    value: "Result metadata, a resource detail, or this section.",
  },
  {
    label: "What you get",
    value: (
      <>
        A reference and a status. No response time is promised, because none
        is approved for this route.
      </>
    ),
  },
  {
    label: "Do not include",
    value: (
      <>
        Personal, worker, credential, account, security, legal-case, health,
        or payment information.
      </>
    ),
  },
];

function RecoveryCard({
  title,
  badge = "Current",
  introLabel,
  intro,
  items,
  note,
}: RecoveryCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-white/10 dark:bg-white/[0.03]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-3 dark:border-white/10">
        <h2 className="text-base font-bold leading-5 text-slate-900 dark:text-white">
          {title}
        </h2>

        <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold leading-5 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
          {badge}
        </span>
      </div>

      {/* Rule / objective */}
      <div className="py-3">
        <div className="rounded-[10px] border border-gray-200 bg-white px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.02]">
          <p className="text-xs leading-5 text-gray-600 dark:text-gray-300">
            <strong className="font-bold">{introLabel}:</strong>{" "}
            {intro}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col">
        {items.map((item) => (
          <div key={item.label} className="pb-4 last:pb-0">
            <p className="text-xs font-semibold leading-5 text-gray-500 dark:text-gray-400">
              {item.label}
            </p>

            <p className="text-xs leading-5 text-slate-700 dark:text-gray-300">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Limitation */}
      <div className="mt-auto -mx-5 -mb-5 mt-5 border-t border-gray-200 bg-gray-50 px-5 py-3 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="text-xs leading-5 text-orange-700 dark:text-orange-300">
          {note}
        </p>
      </div>
    </article>
  );
}

export default function Recovery() {
  return (
    <section className="w-full bg-gray-50 py-14 sm:py-16 lg:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-5 px-5 sm:px-7 lg:grid-cols-2">
        {/* If you cannot find it */}
        <RecoveryCard
          title="If you cannot find it"
          introLabel="The rule"
          intro="sales is never the default recovery."
          items={missingContentItems}
          note={
            <>
              <strong className="font-bold">Limitations:</strong>{" "}
              a route failure gives resources-aware recovery rather than a
              generic 404, and a withdrawn resource is never served from
              cache.
            </>
          }
        />

        {/* Report content */}
        <RecoveryCard
          title="Report stale, missing, or inaccessible content"
          introLabel="Objective"
          intro="let a reader fix the library rather than work around it."
          items={reportItems}
          note={
            <>
              <strong className="font-bold">
                Not a vulnerability channel.
              </strong>{" "}
              Security issues go to the{" "}
              <a
                href="/responsible-disclosure"
                className="font-bold text-emerald-600 underline underline-offset-2 dark:text-emerald-400"
              >
                responsible disclosure route
              </a>
              . Generic content feedback is not a substitute for it, and
              routing a vulnerability through a marketing form would be unsafe.
            </>
          }
        />
      </div>
    </section>
  );
}