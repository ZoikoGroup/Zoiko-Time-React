import SectionIntro from "./SectionIntro";

const products = [
  {
    title: "Reports & Dashboards",
    description:
      "Governed presentation and distribution over approved records and definitions.",
    current: true,
  },
  {
    title: "Workforce Record Insights",
    description: "Owns metric definitions and comparability rules.",
  },
  {
    title: "Evidence Ledger",
    description: "Owns attributable record and evidence history.",
  },
  {
    title: "Deterministic Classification",
    description: "Exposes source, context, rule, result, and review.",
  },
  {
    title: "Kairos",
    description:
      "Retrieves, summarizes, and explains governed content. Decides nothing.",
  },
  {
    title: "Zoiko Sema",
    description: "Optional, permissioned additional context.",
  },
  {
    title: "Anomaly Flags & Alerts",
    description: "A separate destination — currently paused pending approval.",
    paused: true,
  },
];

export default function ConnectedContext() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Connected Context"
          title="Reports & Dashboards doesn't stand alone — or overreach."
          description="Each connected product keeps a distinct boundary. Reports & Dashboards is the presentation and distribution layer, not the source of truth for any of these."
          descriptionClassName="max-w-[600px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <div
              key={product.title}
              className={`rounded-2xl p-5 ${
                product.current
                  ? "border border-teal-600 bg-emerald-50 dark:bg-emerald-900/20"
                  : "border border-gray-200 dark:border-slate-800"
              } ${product.paused ? "opacity-60" : ""}`}
            >
              <h3 className="text-xs font-bold text-sky-950 dark:text-white">
                {product.title}
              </h3>

              <p className="mt-4 text-xs leading-4 text-slate-600 dark:text-slate-400">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
