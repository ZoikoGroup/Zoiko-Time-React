import Image from "next/image";
import privacyAggregation from "@/public/analytics-reporting/privacy-aggregation.png";

const cards = [
  {
    title: "Masking and rounding",
    description:
      "Method and effect are disclosed. We do not create false precision to make a chart look authoritative.",
  },
  {
    title: "Drill-down",
    description:
      "Requires role, purpose, scope, and evidence. Hidden populations and counts are not leaked through empty states or error messages.",
  },
  {
    title: "Sensitive dimensions",
    description:
      "Absent or restricted unless a documented lawful purpose, authorization, and privacy or legal approval exist.",
  },
  {
    title: "Cross-filter leakage",
    description:
      "Prevents inference through repeated filtering, subtraction, export, or small cohort combinations.",
  },
  {
    title: "Export protection",
    description:
      "The same or stricter privacy rules apply to downloads, scheduled delivery, APIs, and shared links.",
  },
  {
    title: "Site analytics",
    description:
      "Public-site telemetry never captures chart values, report contents, worker IDs, filter values, or organization scope.",
    muted: true,
  },
];

export default function PrivacyAggregation() {
  return (
    <section className="bg-white dark:bg-slate-950 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-emerald-600 dark:text-emerald-400">
            Privacy, Aggregation & Small-Group Protection
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Aggregate First. Protect Small Groups Justify Every Drill-Down.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Enterprise views default to the least granular result that answers
            the stated question. Individual-level detail appears only for a
            documented purpose and an authorized role.
          </p>
        </div>

        {/* Illustration */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <Image
            src={privacyAggregation}
            alt="Privacy, Aggregation and Small-Group Protection"
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                      {cards.slice(0, 3).map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
                    {cards.slice(3).map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                card.muted
                  ? "border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              }`}
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}