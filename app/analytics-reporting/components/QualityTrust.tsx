import Image from "next/image";

const trustItems = [
  {
    title: "Freshness",
    description:
      "Last successful source acknowledgement, calculation time, expected cadence, stale threshold.",
  },
  {
    title: "Completeness",
    description:
      "Included versus expected basis, exclusions, unresolved gaps, denominator treatment.",
  },
  {
    title: "Provenance",
    description:
      "Source object, source system, integration and mapping version, policy version, transformation chain.",
  },
  {
    title: "Reconciliation",
    description:
      "Matched, unmatched, duplicate, conflicting, quarantined, or pending, each with an owner.",
  },
  {
    title: "Corrections",
    description:
      "Effective time, impacted metrics and reports, recalculation status, downstream acknowledgement.",
  },
  {
    title: "Late-arriving data",
    description:
      "Pending or updated status remains visible while the previous report snapshot stays reproducible.",
  },
];

export default function QualityTrust() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
              Quality, Provenance, Freshness &amp; Corrections
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              Trust Conditions, Shown
              <br />
              Beside the Result
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
              Quality severity is based on reporting impact, never on worker
              blame. Unavailable data is excluded or blocked with an
              explanation—it is never silently imputed.
            </p>

            <div className="mt-10 space-y-6">
              {trustItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-sm bg-emerald-500" />

                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xl dark:border-slate-800">
            <Image
              src="/analytics-reporting/quality-trust.png"
              alt="Quality, Provenance, Freshness and Corrections"
              width={534}
              height={571}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}