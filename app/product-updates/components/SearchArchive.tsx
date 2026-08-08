import { Eyebrow, FilterPill } from "./Pills";
import { SearchIcon } from "./Icons";

const filters = [
  { label: "Product Area: Any", active: true },
  { label: "Audience: Any", active: false },
  { label: "Availability: Any", active: false },
  { label: "Action: Any", active: false },
  { label: "Date: Any", active: false },
];

const years = ["2026", "2025", "2024", "View full archive →"];

export default function SearchArchive() {
  return (
    <section
      id="search-archive"
      className="w-full scroll-mt-24 overflow-hidden bg-gray-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Search & Archive" />

        <h2 className="mt-6 max-w-[520px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          Find a specific update, current or historical.
        </h2>

        {/* Search Panel */}
        <div className="mt-10 rounded-3xl border border-slate-200 p-6 sm:p-8 dark:border-slate-800">

          <div className="relative">

            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-500">
              <SearchIcon size={16} />
            </span>

            <input
              type="search"
              aria-label="Search product updates"
              placeholder="Search product updates..."
              className="h-14 w-full rounded-full border border-slate-200 bg-white pl-12 pr-5 text-sm text-slate-800 outline-none transition placeholder:text-gray-500 focus:border-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
            />

          </div>

          {/* Filters */}
          <div className="mt-6 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <FilterPill
                key={filter.label}
                label={filter.label}
                active={filter.active}
              />
            ))}
          </div>

          {/* Years */}
          <div className="mt-4 flex flex-wrap gap-3">
            {years.map((year) => (
              <span
                key={year}
                className="inline-flex whitespace-nowrap rounded-full border border-slate-200 px-4 py-2 text-xs font-medium leading-5 text-gray-500 dark:border-slate-700 dark:text-slate-400"
              >
                {year}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
