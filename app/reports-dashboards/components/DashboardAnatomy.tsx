import SectionIntro from "./SectionIntro";

const anatomy = [
  {
    label: "Identity",
    value: "Owner: Compliance Reporting · Effective Jul 1, 2026",
  },
  { label: "Scope", value: "All warehouses · Aug 1–7, 2026" },
  { label: "Metric definition", value: "% shifts with compliant break coverage" },
  { label: "Sources", value: "Deterministic Classification, Policy v3.2" },
  { label: "Quality", value: "96% complete · current" },
  { label: "Filters applied", value: "Unit: All · Role: Hourly workers" },
  { label: "Visualization", value: "Line, % scale, weekly units" },
  { label: "Review / annotation", value: "1 annotation · reviewed Aug 7" },
  { label: "Distribution", value: "3 recipients · internal only" },
  { label: "Worker rights", value: "Linked to My Record Reports" },
  { label: "History", value: "v1 → v2, definition change logged" },
  { label: "Limitations", value: "Excludes unclassified shifts" },
];

export default function DashboardAnatomy() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Dashboard Anatomy"
          title="Know where every number came from."
          description="Every dashboard tile exposes the same anatomy — nothing displayed without a traceable definition."
          descriptionClassName="max-w-[560px]"
        />

        <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 dark:border-slate-800">

          {/* Tile header */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-gray-900 px-6 py-5">
            <p className="font-mono text-xs text-white/80">
              DASH-TILE-0142 · &quot;Break &amp; Rest Coverage&quot; · v2
            </p>

            <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
              Status: Published
            </span>
          </div>

          {/* Tile fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {anatomy.map((field) => (
              <div
                key={field.label}
                className="border-b border-gray-100 px-6 py-5 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 dark:border-slate-800"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {field.label}
                </p>

                <p className="mt-2 text-sm text-sky-950 dark:text-white">
                  {field.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
