import Image from "next/image";

const causes = [
  {
    icon: "/improve-payroll-accuracy/Incomplete-records.png",
    title: "Incomplete records",
    description:
      "Missing starts, stops, breaks, or context force manual fixes late in the cycle.",
  },
  {
    icon: "/improve-payroll-accuracy/Late-approvals.png",
    title: "Late approvals",
    description:
      "Payroll can't tell approved records from records still waiting on a decision.",
  },
  {
    icon: "/improve-payroll-accuracy/Untracked-corrections.png",
    title: "Untracked corrections",
    description:
      "Edits without a reason, version, or reapproval path erode trust and auditability.",
  },
];

export default function WhyAccuracySlips() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Why Accuracy Slips
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] dark:text-white sm:text-4xl">
            Most payroll errors begin upstream
          </h2>

        </div>

        {/* Cause Cards */}
        <div className="mx-auto mt-9 grid w-full max-w-[1180px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {causes.map((cause) => (
            <div
              key={cause.title}
              className="flex flex-col rounded-2xl border border-[#E4E9EE] bg-white p-6 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950"
            >

              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F5F2] dark:bg-slate-900">
                <Image
                  src={cause.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="h-5 w-5 object-contain"
                />
              </span>

              <h3 className="mt-5 text-sm font-bold leading-6 text-[#0E1F3D] dark:text-white">
                {cause.title}
              </h3>

              <p className="mt-1.5 text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                {cause.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
