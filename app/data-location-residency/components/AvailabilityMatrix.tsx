import StatusPill, { type Tone } from "./StatusPill";

const states: { label: string; tone: Tone }[] = [
  { label: "Current — generally available", tone: "green" },
  { label: "Current — limited availability", tone: "violet" },
  { label: "Customer-specific", tone: "blue" },
  { label: "Under review", tone: "blue" },
  { label: "Planned", tone: "amber" },
  { label: "Unavailable", tone: "red" },
  { label: "Not applicable", tone: "neutral" },
  { label: "Superseded", tone: "neutral" },
  { label: "Withdrawn", tone: "red" },
];

const filters = [
  "Product / module",
  "Data category",
  "Environment",
  "Customer type",
  "Region / country",
  "Location activity",
  "Provider",
  "Status",
  "Evidence level",
];

const rows: {
  region: string;
  provider: string;
  scope: string;
  activity: string;
  reviewed: string;
  availability: { label: string; tone: Tone };
}[] = [
  {
    region: "EU",
    provider: "Contracted cloud",
    scope: "Core platform",
    activity: "Primary storage",
    reviewed: "28 Jun 2026",
    availability: { label: "Generally available", tone: "green" },
  },
  {
    region: "EU",
    provider: "Contracted cloud",
    scope: "Core platform",
    activity: "Backup & recovery",
    reviewed: "28 Jun 2026",
    availability: { label: "Limited — eligibility applies", tone: "violet" },
  },
  {
    region: "US",
    provider: "Contracted cloud",
    scope: "Core platform",
    activity: "Primary storage",
    reviewed: "28 Jun 2026",
    availability: { label: "Generally available", tone: "green" },
  },
  {
    region: "APAC",
    provider: "Contracted cloud",
    scope: "Core platform",
    activity: "Primary storage",
    reviewed: "20 Jun 2026",
    availability: { label: "Under review", tone: "blue" },
  },
  {
    region: "UK",
    provider: "Contracted cloud",
    scope: "Core platform",
    activity: "Primary storage",
    reviewed: "—",
    availability: { label: "Planned — not operational", tone: "amber" },
  },
  {
    region: "Any",
    provider: "Any",
    scope: "Core platform",
    activity: "Exclusive in-country handling",
    reviewed: "—",
    availability: { label: "Unavailable", tone: "red" },
  },
  {
    region: "EU",
    provider: "Support operations",
    scope: "Support access",
    activity: "Access location",
    reviewed: "01 Jul 2026",
    availability: { label: "Customer-specific", tone: "blue" },
  },
];

const headers = [
  { label: "Public region", width: "w-[144px]" },
  { label: "Provider category", width: "w-[192px]" },
  { label: "Product scope", width: "w-[160px]" },
  { label: "Activity", width: "w-[256px]" },
  { label: "Reviewed", width: "w-[128px]" },
  { label: "Availability", width: "w-[224px]" },
];

export default function AvailabilityMatrix() {
  return (
    <section
      id="availability-matrix"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Region &amp; Provider Availability
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Nine Availability States, Styled Honestly
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Planned and Unavailable never use current styling. Selecting a
            filter narrows evidence — it does not confirm availability, legal
            suitability, or a contractual commitment.
          </p>

        </div>

        {/* State Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {states.map((state) => (
            <StatusPill
              key={state.label}
              label={state.label}
              tone={state.tone}
            />
          ))}
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

        {/* Availability Table */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950/40">
                  {headers.map((header) => (
                    <th
                      key={header.label}
                      className={`${header.width} border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white`}
                    >
                      {header.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={`${row.region}-${row.activity}-${index}`}
                    className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                  >

                    <td className="px-4 pb-4 pt-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.region}
                    </td>

                    <td className="px-4 pb-4 pt-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.provider}
                    </td>

                    <td className="px-4 pb-4 pt-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.scope}
                    </td>

                    <td className="px-4 pb-4 pt-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.activity}
                    </td>

                    <td className="px-4 pb-4 pt-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.reviewed}
                    </td>

                    <td className="px-4 py-3.5 align-top">
                      <StatusPill
                        label={row.availability.label}
                        tone={row.availability.tone}
                      />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          <p className="px-4 py-3.5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            Illustrative public taxonomy. Region names are generic; no private
            region identifier, provider account, or customer deployment appears
            here.
          </p>

        </div>

        {/* Supporting Notes */}
        <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-2">

          <div className="rounded-[10px] border border-[#F7DBE6] bg-[#FEF4F4] px-3.5 pb-5 pt-2.5 dark:border-red-900/40 dark:bg-red-950/20">

            <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
              Why &quot;exclusive in-country handling&quot; reads Unavailable
            </p>

            <p className="mt-0.5 text-xs font-normal leading-5 text-red-700 dark:text-red-200/80">
              Because no current approved capability guarantees that every copy,
              every processing operation, every access session, every log, and
              every exceptional path stays within one country for any product
              scope. Marking it Unavailable is more useful than omitting the
              row.
            </p>

          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              What a provider name does not mean
            </h3>

            <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              A provider appearing against one service does not mean all
              services or all data categories use that provider. And a region
              name does not imply residency for all categories or all copies.
              Provider and subprocessor relationships link to current approved
              evidence rather than to a logo.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
