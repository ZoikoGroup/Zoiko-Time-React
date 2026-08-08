import StatusPill, { type Tone } from "./StatusPill";

const fields = [
  { label: "Plain meaning", value: "Share of eligible export jobs that completed successfully within the defined window." },
  { label: "Service scope", value: "Reporting & exports · production" },
  { label: "Event population", value: "Export jobs submitted by authorized users" },
  { label: "Numerator", value: "Jobs reaching completed state" },
  { label: "Denominator", value: "Eligible jobs submitted in window" },
  { label: "Unit", value: "Percentage" },
  { label: "Time window", value: "Rolling 28 days" },
  { label: "Timezone", value: "UTC" },
  { label: "Data source", value: "Job execution records" },
  { label: "Collection interval", value: "5 minutes" },
  { label: "Exclusions", value: "Jobs cancelled by the requester; jobs blocked by customer configuration" },
  { label: "Missing-data policy", value: "Gap marked; window flagged as partial rather than interpolated" },
  { label: "Quality checks", value: "Source completeness, clock consistency, duplicate detection" },
  { label: "Owner", value: "Platform operations" },
  { label: "Evidence status", value: "Measuring" },
  { label: "Last reviewed", value: "28 Jun 2026" },
  { label: "Next review", value: "28 Sep 2026" },
  { label: "Objective", value: "None published — no approved target for this scope" },
  { label: "Current value", value: "Not published" },
  { label: "Comparability", value: "Definition v2; v1 results are not directly comparable" },
];

const claimStates: { label: string; tone: Tone }[] = [
  { label: "Definition draft", tone: "neutral" },
  { label: "Instrumented", tone: "amber" },
  { label: "Measuring", tone: "blue" },
  { label: "Current", tone: "green" },
  { label: "Under review", tone: "blue" },
  { label: "Superseded", tone: "neutral" },
  { label: "Withdrawn", tone: "red" },
  { label: "Unavailable", tone: "neutral" },
];

export default function MeasurementModel() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Measurement &amp; Evidence Model
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Nineteen Fields Before a Number Is Publishable
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            No metric exists without a denominator and an exclusion policy. The
            example below is a real indicator definition in a pre-publication
            state — which is why it carries no value.
          </p>

        </div>

        {/* Indicator Card */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">

          {/* Header */}
          <div className="flex flex-col gap-3 border-b border-stone-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-900">

            <p className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              IND-0004 · Export job completion rate
            </p>

            <StatusPill label="Measuring — quality under review" tone="blue" />

          </div>

          {/* Field Grid — 1px gaps render the cell dividers */}
          <div className="grid grid-cols-1 gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-4 dark:bg-slate-800">

            {fields.map((field) => (
              <div
                key={field.label}
                className="flex flex-col gap-1 bg-white px-5 py-3.5 dark:bg-slate-900"
              >

                <p className="text-[10px] font-bold uppercase leading-4 tracking-wide text-zinc-500 dark:text-slate-400">
                  {field.label}
                </p>

                <p className="text-xs font-normal leading-5 text-sky-900 dark:text-slate-200">
                  {field.value}
                </p>

              </div>
            ))}

          </div>

          {/* Footer */}
          <div className="border-t border-stone-200 bg-amber-50/50 px-5 py-4 dark:border-slate-800 dark:bg-amber-950/10">

            <p className="text-sm font-normal leading-6 text-amber-900 dark:text-amber-200/80">

              <span className="font-bold">Why no value is shown:</span> the
              indicator is instrumented and collecting, but data quality is
              still under review. Publishing a figure now would imply a maturity
              the evidence does not support. When it reaches Current, the value
              will appear here with its window, exclusions, and owner attached.

            </p>

          </div>

        </div>

        {/* Claim States */}
        <p className="mt-10 text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
          Eight reliability claim states
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {claimStates.map((state) => (
            <StatusPill key={state.label} label={state.label} tone={state.tone} />
          ))}
        </div>

        {/* Threshold Callout */}
        <div className="mt-6 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

          <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
            Internal thresholds are not public commitments
          </p>

          <p className="mt-1.5 text-sm font-normal leading-6 text-red-800 dark:text-red-200/80">
            An alert condition exists to wake someone up. It is not an SLA, an
            objective, or a promise, and it is never converted into one by
            appearing on a marketing page. Objectives, error budgets,
            percentiles, and contractual commitments appear only where currently
            approved for the stated scope.
          </p>

        </div>

      </div>
    </section>
  );
}
