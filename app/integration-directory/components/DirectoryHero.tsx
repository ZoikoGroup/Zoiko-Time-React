const categories = [
  "All",
  "Payroll",
  "HRIS",
  "Identity & SSO",
  "Accounting & ERP",
  "Scheduling",
  "Messaging",
  "Data",
  "Files & API",
];

export default function DirectoryHero() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 pb-10 pt-14 sm:px-8 lg:px-12 lg:pt-20">

        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">

          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Integration Directory
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl lg:text-5xl">
            Connect ZoikoTime — with{" "}
            <span className="text-teal-600 dark:text-teal-400">governance</span>{" "}
            intact.
          </h1>

          <p className="mt-5 max-w-[640px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Browse the ways ZoikoTime connects to payroll, HR, identity, ERP,
            and more — every connection mapped, tested, activated, and
            reconciled.
          </p>

          {/* Search */}
          <div className="relative mt-8 w-full max-w-[600px]">

            <span
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
              aria-hidden="true"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M7.33268 12.0013C9.91001 12.0013 11.9993 9.91196 11.9993 7.33464C11.9993 4.75731 9.91001 2.66797 7.33268 2.66797C4.75535 2.66797 2.66602 4.75731 2.66602 7.33464C2.66602 9.91196 4.75535 12.0013 7.33268 12.0013Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M13.9995 13.9995L11.1328 11.1328"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
            </span>

            <label htmlFor="integration-search" className="sr-only">
              Search integrations, categories, or standards
            </label>

            <input
              id="integration-search"
              type="search"
              placeholder="Search integrations, categories, or standards..."
              className="h-14 w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-5 text-sm text-slate-800 outline-none transition placeholder:text-gray-400 focus:border-teal-600 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            />

          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`inline-flex whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium leading-5 ${
                  index === 0
                    ? "bg-teal-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
