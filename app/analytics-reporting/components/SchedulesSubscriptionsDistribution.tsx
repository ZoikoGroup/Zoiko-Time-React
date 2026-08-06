const scheduleCards = [
  {
    title: "Schedule",
    description:
      "Cadence, time zone, business calendar, start and end, missed-run behavior, owner.",
  },
  {
    title: "Audience",
    description:
      "Named roles, groups, or controlled destinations — revalidated before each run.",
  },
  {
    title: "Delivery",
    description:
      "In-product first where possible. Email, link, file, or API only when current and approved.",
  },
  {
    title: "Scope snapshot",
    description:
      "The exact metric versions, filters, privacy treatment, and report version used.",
  },
  {
    title: "Change impact",
    description:
      "The owner is notified when a definition, permission, policy, source, or population change affects output.",
  },
  {
    title: "Evidence",
    description:
      "Run, data snapshot, recipients, status, failure, retry, and acknowledgement where supported.",
  },
];

export default function SchedulesSubscriptionsDistribution() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[470px_1fr] lg:items-start">

        {/* Left Content */}
        <div className="space-y-8">

          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
              Schedules, Subscriptions &amp; Distribution
            </span>

            <h2 className="text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
              Recurring Delivery Is the
              <br className="hidden md:block" />
              Easiest Place to Leak Data
            </h2>

            <p className="max-w-md text-base leading-7 text-slate-600 dark:text-slate-300">
              Recipient eligibility is revalidated before every run.
              A schedule whose owner has left, or whose report has been
              retired, is disabled rather than left quietly sending.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="flex gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-emerald-600 text-emerald-600">
              ✓
            </div>

            <p className="font-semibold leading-7 text-slate-900 dark:text-white">
              A failed run is never sent partially or stale.
              It is queued, labeled, retried, or held for review.
            </p>

          </div>

          <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
            Unsubscribe and stop controls are clear and authorized.
            No dark patterns, and no hidden recurring delivery.
          </p>

        </div>

        {/* Right Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                      {scheduleCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
              </div>
    </section>
  );
}