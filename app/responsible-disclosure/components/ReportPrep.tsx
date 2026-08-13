const checklistItems = [
  {
    number: "01",
    title: "Affected asset",
    description: "Which system or endpoint, from the scope registry above.",
  },
  {
    number: "02",
    title: "Environment",
    description: "Production, staging, or another environment.",
  },
  {
    number: "03",
    title: "Description",
    description: "What you observed, in plain language.",
  },
  {
    number: "04",
    title: "Impact assessment",
    description: "Your read on what this could allow — evidence, not final severity.",
  },
  {
    number: "05",
    title: "Reproduction steps",
    description: "Minimal steps to reproduce, if already known.",
  },
  {
    number: "06",
    title: "Safe supporting evidence",
    description: "Screenshots or logs with sensitive data removed.",
  },
];

export default function ReportPrep() {
  return (
    <section className="w-full bg-gray-50 py-16 sm:py-20 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1056px] px-5 sm:px-8">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-teal-600" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Report Preparation Checklist
            </span>
          </div>

          <h2 className="mt-3 text-2xl font-semibold leading-10 text-slate-800 sm:text-3xl dark:text-white">
            What helps us triage faster.
          </h2>
        </div>

        {/* Checklist */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {checklistItems.map((item) => (
            <article
              key={item.number}
              className="
                min-h-[128px]
                rounded-2xl
                border
                border-slate-200
                bg-gray-50
                p-5
                transition-colors
                dark:border-slate-800
                dark:bg-slate-950
              "
            >
              {/* Number */}
              <span className="block text-xs font-bold leading-4 text-teal-700 dark:text-teal-400">
                {item.number}
              </span>

              {/* Title */}
              <h3 className="mt-3 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}