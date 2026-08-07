"use client";

const driftItems = [
  {
    category: "Rates",
    title: "Rate version mismatch",
    description:
      "Historical time gets calculated with the wrong or current rate. Fixed with effective-dated rate versions and controlled revaluation.",
  },
  {
    category: "Currency",
    title: "Currency or FX gap",
    description:
      "Project, contract, and reporting values can't be compared. Fixed with currency roles, FX source, rate date, version, and missing-rate state.",
  },
  {
    category: "Time",
    title: "Unapproved time in actuals",
    description:
      "Draft or disputed time overstates cost. Fixed by separating submitted, approved, corrected, and reconciled time, with provisional clearly labeled.",
  },
  {
    category: "Scope",
    title: "Variance without context",
    description:
      "Overspend may be an approved scope change or timing. Fixed by showing budget version, scope/change order, phase, and forecast before escalation.",
  },
  {
    category: "Allocation",
    title: "Allocation overwrite",
    description:
      "Moving hours erases the original approval. Fixed with append-only allocation adjustments preserving before/after history and authority.",
  },
  {
    category: "Systems",
    title: "Blurred system boundary",
    description:
      "ERP or PSA stays authoritative. Fixed by showing system of record per object, mapping, freshness, and reconciliation.",
  },
];

export default function CostDrifts() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-emerald-400">
            Why Cost Drifts
          </span>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Where project cost quietly goes wrong
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Each driver is met with a governed control — visible,
            versioned, and human-owned.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {driftItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-emerald-400">
                {item.category}
              </span>

              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
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