import Link from "next/link";
import { Eyebrow, AvailabilityPill, ActionPill, FilterPill } from "./Pills";

const filters = [
  { label: "Availability: Any", active: true },
  { label: "Audience: Any", active: false },
  { label: "Product Area: Any", active: false },
  { label: "Action: Any", active: false },
];

const updates = [
  {
    availability: "GA",
    action: "No action",
    area: "Break & Rest",
    title: "Worker Correction Requests Now Show Reviewer Notes",
    body: "Workers can see the note a reviewer attached when resolving a correction request.",
    date: "Aug 3, 2026",
  },
  {
    availability: "Limited",
    action: "Action: Review",
    area: "Shift Integrity",
    title: "New Exception Category for Split Shifts",
    body: "Available to pilot organizations; general availability has not been verified yet.",
    date: "Jul 29, 2026",
  },
  {
    availability: "Requires Setup",
    action: "Action: Configure",
    area: "Time Classification",
    title: "Jurisdiction Packs Now Support Custom Effective Dates",
    body: "Admins can schedule a policy pack to take effect on a future date they choose.",
    date: "Jul 22, 2026",
  },
  {
    availability: "Rolling Out",
    action: "Action: Communicate",
    area: "Reporting & Evidence",
    title: "Audit Exports Add a Change-History Column",
    body: "Exports now include who changed a record and when, for organizations in the rollout scope.",
    date: "Jul 18, 2026",
  },
  {
    availability: "GA",
    action: "Action: Test",
    area: "Developer Platform",
    title: "New Webhook Event for Exception Resolution",
    body: "A new event fires when a reviewer resolves an exception, with the resolution note attached.",
    date: "Jul 12, 2026",
  },
  {
    availability: "Corrected",
    action: "Action: Review",
    area: "Break & Rest",
    title: "Correction: Meal Break Pack v6 Scope Clarified",
    body: "An earlier version of this update overstated the regions covered — scope has been corrected below.",
    date: "Jul 9, 2026",
  },
];

export default function LatestUpdates() {
  return (
    <section
      id="latest-updates"
      className="w-full scroll-mt-24 overflow-hidden bg-gray-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Latest Updates" />

        <div className="mt-6 flex flex-wrap items-end justify-between gap-4">

          <h2 className="text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Recent, verified changes.
          </h2>

          <Link
            href="#search-archive"
            className="text-sm font-semibold leading-6 text-teal-700 transition hover:text-teal-800 dark:text-teal-400"
          >
            Browse full archive →
          </Link>

        </div>

        {/* Filters */}
        <div className="mt-8 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <FilterPill
              key={filter.label}
              label={filter.label}
              active={filter.active}
            />
          ))}
        </div>

        {/* Updates */}
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {updates.map((update) => (
            <article
              key={update.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <div className="flex flex-wrap gap-2">
                <AvailabilityPill label={update.availability} />
                <ActionPill label={update.action} />
              </div>

              <p className="mt-5 text-xs font-semibold uppercase leading-4 tracking-wide text-teal-700 dark:text-teal-400">
                {update.area}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-5 text-slate-800 dark:text-white">
                {update.title}
              </h3>

              <p className="mt-3 flex-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {update.body}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3">

                <Link
                  href="#featured-update"
                  className="text-xs font-semibold leading-5 text-slate-800 transition hover:text-teal-700 dark:text-white"
                >
                  Read update →
                </Link>

                <span className="text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  {update.date}
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
