const steps = [
  {
    title: "Capture",
    description:
      "Collect complete time, attendance, and break records with policy context.",
  },
  {
    title: "Classify & review",
    description:
      "Apply deterministic rules; route exceptions to human review with neutral states.",
  },
  {
    title: "Approve",
    description:
      "Approve before cutoff; corrections keep a full, reapproved trail.",
  },
  {
    title: "Export",
    description:
      "Validate against your mapping and deliver to payroll, reconciled.",
  },
];

export default function AccuracyPath() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            The Path
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Four steps to more accurate payroll inputs
          </h2>

        </div>

        {/* Step Cards */}
        <div className="mx-auto mt-9 grid w-full max-w-[1040px] grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-center gap-3 rounded-2xl border border-[#E4E9EE] bg-white p-4 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <span className="flex h-16 w-[18px] shrink-0 items-center justify-center rounded-full bg-[#10A28D] text-[11px] font-bold leading-none text-white">
                {index + 1}
              </span>

              <h3 className="w-[68px] shrink-0 text-sm font-bold leading-5 text-[#0E1F3D] dark:text-white">
                {step.title}
              </h3>

              <p className="min-w-0 flex-1 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
