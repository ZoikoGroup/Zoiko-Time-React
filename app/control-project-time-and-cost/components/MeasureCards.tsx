"use client";

const measures = [
  {
    title: "Project effort",
    description:
      "Approved or planned time assigned to a project, phase, task, or cost code with allocation version and scope.",
  },
  {
    title: "Internal cost",
    description:
      "Effort transformed by an approved internal cost rule: rate type, version, currency, effective date, formula, and rounding.",
  },
  {
    title: "Billable value",
    description:
      "Billable quantity × approved billing rate or fee rule by contract or change order, separate from internal cost.",
  },
  {
    title: "Budget & forecast",
    description:
      "Approved planned limit and projected outcome by dimension and period, each versioned and owned.",
  },
];

export default function MeasureCards() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Separate Measures
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            One hour is not one number
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Model each measure on its own terms—with its own rules,
            permissions, and downstream target.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {measures.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 border-t-4 border-t-teal-600 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:border-t-emerald-500 dark:bg-slate-950"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}