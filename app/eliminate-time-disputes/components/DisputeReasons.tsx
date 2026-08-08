"use client";

const disputeReasons = [
  {
    issue:
      "Records without context — nobody can see the source or the rule applied.",
    solution:
      "Every record shows source, provenance, and the exact policy version that applied.",
  },
  {
    issue: "Silent edits erode trust and can’t be defended later.",
    solution:
      "Corrections are versioned with actor, reason, and before/after — never overwritten.",
  },
  {
    issue: "Workers have no fair way to explain or contest a record.",
    solution:
      "Two-way participation: workers add notes and request corrections with a reason.",
  },
  {
    issue: "Decisions feel arbitrary and leave no trail.",
    solution:
      "Accountable human decisions, with the policy explanation and evidence preserved.",
  },
];

export default function DisputeReasons() {
  return (
    <section className="w-full bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Eyebrow */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Why Disputes Happen
        </div>

        {/* Heading */}
        <div className="w-full max-w-[820px] pb-0.5 text-center">
          <h2 className="text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Most disputes are avoidable — if records are
            <br className="hidden sm:block" /> clear
          </h2>
        </div>

        {/* Description */}
        <div className="w-full max-w-[680px] pt-0.5 text-center">
          <p className="text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Each common cause has a transparent, evidence-backed answer.
          </p>
        </div>

        {/* Dispute rows */}
        <div className="w-full max-w-[1000px] pt-8">
          <div className="flex flex-col gap-3">
            {disputeReasons.map((item) => (
              <div
                key={item.issue}
                className="flex flex-col items-stretch gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 sm:flex-row sm:items-center sm:justify-center"
              >
                {/* Problem */}
                <div className="flex w-full items-start gap-2.5 sm:w-[455px]">
                  <div className="flex size-4 shrink-0 items-center justify-center pt-0.5">
                    <div className="size-2 rounded-full border-[1.6px] border-orange-700 dark:border-orange-400" />
                  </div>

                  <p className="pr-1.5 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                    {item.issue}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden w-4 shrink-0 sm:flex">
                  <span className="text-base font-bold leading-6 text-teal-600 dark:text-teal-400">
                    →
                  </span>
                </div>

                {/* Solution */}
                <div className="flex w-full items-start gap-2.5 sm:w-[455px]">
                  <div className="relative flex h-4 w-3.5 shrink-0 items-center justify-center">
                    <div className="h-1.5 w-2 rounded-sm border-[1.35px] border-teal-600 dark:border-teal-400" />
                  </div>

                  <p className="text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}