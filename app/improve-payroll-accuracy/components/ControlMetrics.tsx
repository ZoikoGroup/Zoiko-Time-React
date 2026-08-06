const metrics = [
  {
    title: "Payroll-ready rate",
    description: "Approved records meeting export requirements by cutoff.",
  },
  {
    title: "Exception age",
    description: "Time from exception created to resolved, in aging buckets.",
  },
  {
    title: "Post-approval change rate",
    description:
      "Approved records changed after approval, with reason and reapproval.",
  },
  {
    title: "Export validation success",
    description:
      "Exports passing mapping, delivery, and reconciliation checks.",
  },
];

export default function ControlMetrics() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Measure It
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Track accuracy with control metrics — not activity scores
          </h2>

          <p className="max-w-[680px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Metrics a payroll champion can put in a business case, with no
            worker ranking or invented ROI.
          </p>

        </div>

        {/* Metric Cards */}
        <div className="mx-auto mt-11 grid w-full max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="flex flex-col rounded-2xl border border-[#E4E9EE] bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <h3 className="text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                {metric.title}
              </h3>

              <p className="mt-2.5 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                {metric.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
