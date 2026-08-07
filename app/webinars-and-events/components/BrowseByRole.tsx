"use client";

const roles = [
  "HR & Payroll Leaders",
  "Managers",
  "Workers",
  "IT Teams",
  "Developers",
  "Partners",
  "Analysts",
  "Media",
  "Community Learners",
];

export default function BrowseByRole() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
              Browse by Role
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Sessions curated for how you use
            <br className="hidden sm:block" />
            ZoikoTime.
          </h2>
        </div>

        {/* Role Pills */}
        <div className="mt-12 flex flex-wrap gap-4">
          {roles.map((role, index) => (
            <button
              key={role}
              className={`rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? "border-slate-900 bg-slate-900 text-white hover:bg-slate-800 dark:border-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  : "border-slate-200 bg-white text-slate-700 hover:border-teal-500 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal-500 dark:hover:text-teal-400"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}