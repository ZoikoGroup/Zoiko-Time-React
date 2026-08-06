const stats = [
  {
    label: "Payroll-ready",
    value: "91%",
    delta: "▲ vs last period",
    tone: "text-[#0E8A4F]",
  },
  {
    label: "Open exceptions",
    value: "37",
    delta: "▼ aging >48h: 5",
    tone: "text-[#B9770A]",
  },
  {
    label: "Post-approval changes",
    value: "7",
    delta: "reapproval tracked",
    tone: "text-[#B9770A]",
  },
  {
    label: "Export validation",
    value: "Pass",
    delta: "reconciled",
    tone: "text-[#0E8A4F]",
  },
];

const tones = {
  teal: "bg-[#E8F6F2] text-[#0B8675]",
  amber: "bg-[#FFF3D6] text-[#8A6500]",
  red: "bg-[#FCEEEC] text-[#B23A2B]",
} as const;

const records = [
  {
    record: "Aug 5 · 09:00–17:30",
    classification: "Regular · policy v4",
    status: "Approved",
    tone: "teal" as const,
    version: "v3",
  },
  {
    record: "Aug 4 · missing exit",
    classification: "Needs input",
    status: "Correction pending",
    tone: "amber" as const,
    version: "v2",
  },
  {
    record: "Aug 3 · overtime",
    classification: "OT · policy v4",
    status: "Approved",
    tone: "teal" as const,
    version: "v1",
  },
  {
    record: "Aug 2 · break rule",
    classification: "Jurisdiction review",
    status: "Blocked from export",
    tone: "red" as const,
    version: "v1",
  },
];

const columns = "md:grid-cols-[28.4%_27.7%_30.1%_13.8%]";

export default function ReadinessView() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            See It
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            One readiness view before every payroll run
          </h2>

          <p className="max-w-[660px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Deterministic classification, human review, complete change history
            — and a clear picture of what&apos;s ready to pay.
          </p>

        </div>

        {/* Readiness Mock */}
        <div
          className="mx-auto mt-12 w-full max-w-[920px] overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_26px_54px_0px_rgba(14,31,61,0.16)] dark:border-slate-800 dark:bg-slate-950"
          aria-hidden="true"
        >

          {/* Title Bar */}
          <div className="flex items-center gap-2 bg-[#0E1F3D] px-[18px] py-3">
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <p className="pl-2.5 text-xs font-medium leading-5 text-white/90">
              ZoikoTime · Payroll readiness · Aug 1–15
            </p>
          </div>

          <div className="px-[23px] pb-4 pt-[22px]">

            {/* Readiness Counters */}
            <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-[#E4E9EE] bg-[#F6F9F9] p-[15px] dark:border-slate-800 dark:bg-slate-900"
                >
                  <p className="text-xs font-normal uppercase leading-4 tracking-wide text-[#6B7785] dark:text-slate-400">
                    {stat.label}
                  </p>
                  <p className="mt-1.5 text-xl font-bold leading-9 text-[#0E1F3D] dark:text-white">
                    {stat.value}
                  </p>
                  <p
                    className={`mt-1 text-xs font-semibold leading-4 ${stat.tone}`}
                  >
                    {stat.delta}
                  </p>
                </div>
              ))}
            </div>

            {/* Record Table */}
            <div className="mt-3">

              {/* Column Headings */}
              <div
                className={`hidden border-b border-[#E4E9EE] md:grid ${columns} dark:border-slate-800`}
              >
                {["Record", "Classification", "Status", "Version"].map(
                  (heading) => (
                    <p
                      key={heading}
                      className="px-2.5 py-2 text-xs font-semibold uppercase leading-4 tracking-tight text-[#6B7785] dark:text-slate-400"
                    >
                      {heading}
                    </p>
                  ),
                )}
              </div>

              {/* Rows */}
              {records.map((row) => (
                <div
                  key={row.record}
                  className={`grid grid-cols-1 gap-1.5 border-b border-[#E4E9EE] py-3 md:items-center md:gap-0 md:py-0 ${columns} dark:border-slate-800`}
                >

                  <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-2.5 md:py-3 dark:text-slate-200">
                    {row.record}
                  </p>

                  <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-2.5 md:py-3 dark:text-slate-200">
                    {row.classification}
                  </p>

                  <div className="md:px-2.5">
                    <span
                      className={`inline-flex rounded-[20px] px-[9px] py-[3px] text-xs font-bold leading-4 ${tones[row.tone]}`}
                    >
                      {row.status}
                    </span>
                  </div>

                  <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-2.5 md:py-3 dark:text-slate-200">
                    {row.version}
                  </p>

                </div>
              ))}

            </div>

            <p className="mt-3 text-xs font-normal leading-4 text-[#6B7785] dark:text-slate-400">
              Deterministic classification · human review · complete change
              history · no worker surveillance. Synthetic data.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
