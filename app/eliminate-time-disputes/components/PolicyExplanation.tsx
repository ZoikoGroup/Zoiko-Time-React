"use client";

const ruleLines = [
  "IF clock_out IS NULL",
  "AND elapsed > 12h",
  "THEN close_at = schedule_end",
  '  & flag = "review"',
  "  & policy_version = 4",
];

export default function PolicyExplanation() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-center gap-3">
        {/* Label */}
        <div className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
          Policy Explanation
        </div>

        {/* Heading */}
        <h2 className="w-full max-w-[820px] text-center text-3xl font-bold leading-10 text-slate-800 dark:text-white sm:text-4xl">
          Explainable rules, in plain language
        </h2>

        {/* Description */}
        <p className="w-full max-w-[680px] pb-5 text-center text-base font-normal leading-7 text-gray-500 dark:text-slate-400 sm:pb-8">
          No black box: every classification shows the plain-language reason
          and the
          <br className="hidden sm:block" /> exact versioned rule.
        </p>

        {/* Explanation Card */}
        <div className="w-full max-w-[900px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900">
          {/* Card Header */}
          <div className="border-b border-emerald-100 bg-emerald-50 px-5 py-4 dark:border-emerald-900/50 dark:bg-emerald-950/30">
            <div className="text-sm font-bold leading-6 text-teal-700 dark:text-teal-400">
              Policy explanation · Auto clock-out (v4)
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 gap-8 px-5 py-5 md:grid-cols-2 md:gap-5">
            {/* Plain Language */}
            <div className="flex flex-col gap-1.5 md:pb-14">
              <div className="text-xs font-bold uppercase leading-5 tracking-wide text-gray-500 dark:text-slate-400">
                In plain language
              </div>

              <p className="text-base font-medium leading-6 text-slate-800 dark:text-slate-200">
                If no clock-out is recorded after 12 hours, the shift is
                <br className="hidden sm:block" />
                closed at the scheduled end and flagged for review —
                <br className="hidden sm:block" />
                so the worker isn’t over- or under-credited.
              </p>
            </div>

            {/* Rule */}
            <div className="flex flex-col gap-2">
              <div className="text-xs font-bold uppercase leading-5 tracking-wide text-gray-500 dark:text-slate-400">
                The rule that applied
              </div>

              <div className="rounded-[10px] border border-slate-200 bg-gray-50 p-3 dark:border-slate-700 dark:bg-slate-800">
                <pre className="whitespace-pre-wrap font-mono text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                  {ruleLines.join("\n")}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}