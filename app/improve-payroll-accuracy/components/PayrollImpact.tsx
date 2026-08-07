const outcomes = [
  { direction: "↑", label: "Payroll-ready records by cutoff" },
  { direction: "↓", label: "Corrections & retro adjustments" },
  { direction: "↓", label: "Time spent reconciling" },
  { direction: "↑", label: "Confidence in every export" },
];

export default function PayrollImpact() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            The Impact
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Better inputs, fewer surprises at payroll close
          </h2>

          <p className="max-w-[680px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Illustrative outcomes organizations aim for when the records
            reaching payroll are complete, approved, and explainable.
          </p>

        </div>

        {/* Outcome Cards */}
        <div className="mx-auto mt-12 grid w-full max-w-[960px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="relative flex min-h-36 flex-col items-center overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white px-5 pb-7 pt-[25px] shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <span
                className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#10A28D] to-[#0E1F3D]"
                aria-hidden="true"
              />

              <span
                className="text-5xl font-bold leading-10 text-[#0B8675] dark:text-emerald-400"
                aria-hidden="true"
              >
                {outcome.direction}
              </span>

              <p className="mt-2.5 text-center text-xs font-medium leading-5 text-[#6B7785] dark:text-slate-400">
                {outcome.label}
              </p>

            </div>
          ))}

        </div>

        {/* Directional Note */}
        <div className="mx-auto mt-10 w-full max-w-[860px] rounded-xl border border-[#C9EAE2] bg-[#EAF6F3] px-6 py-[18px] dark:border-slate-800 dark:bg-slate-900">
          <p className="text-center text-sm font-normal leading-5 text-[#0E1F3D] dark:text-slate-300">
            <span className="font-bold text-[#0B8675] dark:text-emerald-400">
              Directional, not a guarantee.
            </span>{" "}
            ZoikoTime helps improve the completeness, consistency, and
            traceability of payroll inputs. It does not calculate wages, file
            taxes, or guarantee payroll accuracy or legal compliance — measure
            results in your own pilot.
          </p>
        </div>

      </div>
    </section>
  );
}
