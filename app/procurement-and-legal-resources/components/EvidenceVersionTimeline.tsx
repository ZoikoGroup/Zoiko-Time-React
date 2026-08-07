"use client";

export default function EvidenceVersionTimeline() {
  const timeline = [
    {
      date: "Aug 1, 2026",
      title: "Data Processing Addendum updated to v4.1",
      description:
        "Clarified sub-processor notification timelines; no change to processing scope.",
    },
    {
      date: "Jul 22, 2026",
      title: "Sub-processor list revised",
      description:
        "Added one new infrastructure sub-processor; customer notification sent per DPA terms.",
    },
    {
      date: "Jul 14, 2026",
      title: "Security Controls Summary re-reviewed",
      description:
        "Annual review completed; no material changes to controls.",
    },
    {
      date: "May 18, 2026",
      title: "Accessibility Conformance Statement published",
      description:
        "First public statement following completed WCAG 2.2 AA testing cycle.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-12 px-6">
        {/* Header */}
        <div className="max-w-[820px] text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600">
            Evidence Currency &amp; Version Timeline
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">
            Nothing goes stale without a record
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative w-full max-w-[860px] pl-10">
          {/* Vertical Line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-300 dark:bg-slate-700" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-[34px] top-1 h-5 w-5 rounded-full border-[3px] border-emerald-100 bg-green-400 dark:border-slate-900" />

                <p className="text-xs font-semibold text-gray-500">
                  {item.date}
                </p>

                <h3 className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}