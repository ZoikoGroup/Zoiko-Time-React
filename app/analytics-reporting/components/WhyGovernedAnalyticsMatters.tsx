import { FiAlertCircle } from "react-icons/fi";

const items = [
  {
    title: "A number without a definition",
    description:
      "It is not decision-ready, however precise it looks.",
    response:
      "Every metric carries a governed definition and version.",
  },
  {
    title: "A trend that hides change",
    description:
      "Scope, policy, or organization changes can invert the meaning of a line.",
    response:
      "Comparison breaks, effective dates, and comparability warnings appear on the chart itself.",
  },
  {
    title: "A dashboard that exposes too much",
    description:
      "An executive view can reveal individual detail nobody authorized.",
    response:
      "Aggregate first, protect small groups, require purpose-bound drill-down.",
  },
  {
    title: "An anomaly read as wrongdoing",
    description:
      "A statistical outlier is not a finding about a person.",
    response:
      "Neutral review states, source context, and human investigation.",
  },
  {
    title: "A correction that leaves reports stale",
    description:
      "Old numbers keep circulating after the underlying record changes.",
    response:
      "Recalculate affected analytics with lineage, status, and effective time.",
  },
  {
    title: "An export that escapes governance",
    description:
      "A spreadsheet leaves the platform and the controls stay behind.",
    response:
      "Preview scope, authorize, classify, record purpose, control delivery, and preserve evidence.",
  },
  {
    title: "A polished chart over incomplete data",
    description:
      "Visual quality implies data quality. It shouldn't.",
    response:
      "Freshness, completeness, and exclusions are displayed beside the result.",
  },
];

export default function WhyGovernedAnalyticsMatters() {
  return (
    <section className="bg-slate-50 py-16 dark:bg-slate-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-400">
            Why Governed Analytics Matters
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Seven Ways a Confident Chart Misleads
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            Each failure below has a specific design response. None of them is
            solved by a nicer visualization.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 space-y-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-col gap-6 lg:flex-row">
                {/* Left */}
                <div className="lg:w-72 lg:flex-shrink-0">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Right */}
                <div className="flex-1">
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-start gap-3 rounded-lg bg-emerald-50 p-4 dark:bg-emerald-900/20">
                    <FiAlertCircle className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />

                    <div>
                      <span className="font-semibold text-emerald-700 dark:text-emerald-300">
                        Response —
                      </span>{" "}
                      <span className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                        {item.response}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}