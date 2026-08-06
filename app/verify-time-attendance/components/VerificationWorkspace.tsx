const filters = ["Site: All", "Policy: US Hourly v4", "Status: All"];

const stats = [
  { value: "142", label: "Verified" },
  { value: "9", label: "Needs Context" },
  { value: "14", label: "Pending Review" },
  { value: "118", label: "Approved" },
];

const tones = {
  amber: "bg-[#FFF3D6] text-[#8A6500]",
  blue: "bg-[#E7F0FF] text-[#2E5BC0]",
  teal: "bg-[#E8F6F2] text-[#0B8675]",
  red: "bg-[#FCEEEC] text-[#B23A2B]",
} as const;

const dots = {
  amber: "bg-[#8A6500]",
  blue: "bg-[#2E5BC0]",
  teal: "bg-[#0B8675]",
  red: "bg-[#B23A2B]",
} as const;

const records = [
  {
    id: "Record #4821",
    site: "Site: Northwind Ops",
    period: "Aug 4",
    status: "Needs Context",
    tone: "amber" as const,
    owner: "Worker · add missing code",
  },
  {
    id: "Record #4822",
    site: "Site: Meridian+",
    period: "Aug 4",
    status: "Pending Review",
    tone: "blue" as const,
    owner: "Reviewer · due today",
  },
  {
    id: "Record #4823",
    site: "Site: Northwind Ops",
    period: "Aug 3",
    status: "Approved",
    tone: "teal" as const,
    owner: "Ready for export",
  },
  {
    id: "Record #4824",
    site: "Site: Astera",
    period: "Aug 3",
    status: "Export Failed",
    tone: "red" as const,
    owner: "Integration owner · retry",
  },
];

const details = [
  { label: "Captured event", value: "Exit 17:42 · no matching entry" },
  { label: "Schedule context", value: "Shift ends 17:30 · policy v4" },
  { label: "Classification", value: "Unverified Exit — Pending Review" },
  { label: "Worker context", value: "Not yet submitted" },
  { label: "Reviewer", value: "Unassigned" },
];

const columns = "md:grid-cols-[1.47fr_0.77fr_1.72fr_2.04fr]";

export default function VerificationWorkspace() {
  return (
    <section id="verification-workspace" className="w-full scroll-mt-24 overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Verification Workspace
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Status, ownership, and history — in one place
          </h2>

          <p className="max-w-[700px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Production-faithful proof with synthetic data. Filters, bulk
            actions, and history stay role-bound and auditable.
          </p>

        </div>

        {/* Workspace Mock */}
        <div
          className="mx-auto mt-12 w-full max-w-[1080px] overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_10px_30px_0px_rgba(14,31,61,0.10)] dark:border-slate-800 dark:bg-slate-950"
          aria-hidden="true"
        >

          {/* Title Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0E1F3D] px-[22px] py-3.5">

            <p className="text-sm font-semibold leading-5 text-white">
              Verification Workspace · Pay period Jul 28 – Aug 10
            </p>

            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <span
                  key={filter}
                  className="rounded-[20px] bg-white/10 px-3 py-1.5 text-xs font-normal leading-5 text-white/90"
                >
                  {filter}
                </span>
              ))}
            </div>

          </div>

          {/* Counters */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-[#E4E9EE] px-5 py-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 dark:border-slate-800"
              >
                <p className="text-xl font-bold leading-9 text-[#0E1F3D] dark:text-white">
                  {stat.value}
                </p>
                <p className="text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Column Headings */}
          <div
            className={`hidden border-y border-[#E4E9EE] bg-[#F6F9F9] md:grid ${columns} dark:border-slate-800 dark:bg-slate-900`}
          >
            {["Worker / record", "Period", "Status", "Owner / next action"].map(
              (heading) => (
                <p
                  key={heading}
                  className="px-5 py-3 text-xs font-semibold uppercase leading-4 tracking-tight text-[#6B7785] dark:text-slate-400"
                >
                  {heading}
                </p>
              ),
            )}
          </div>

          {/* Record Rows */}
          {records.map((record) => (
            <div
              key={record.id}
              className={`grid grid-cols-1 gap-1.5 border-b border-[#E4E9EE] px-5 py-4 md:items-center md:gap-0 md:px-0 md:py-0 ${columns} dark:border-slate-800`}
            >

              <div className="md:px-5 md:py-3">
                <p className="text-xs font-normal leading-5 text-[#0E1F3D] dark:text-slate-200">
                  {record.id}
                </p>
                <p className="text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                  {record.site}
                </p>
              </div>

              <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-5 dark:text-slate-200">
                {record.period}
              </p>

              <div className="md:px-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-[20px] px-3.5 py-1.5 ${tones[record.tone]}`}
                >
                  <span
                    className={`h-1.5 w-1.5 shrink-0 rounded-[3px] ${dots[record.tone]}`}
                  />
                  <span className="text-xs font-bold leading-5">
                    {record.status}
                  </span>
                </span>
              </div>

              <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-5 dark:text-slate-200">
                {record.owner}
              </p>

            </div>
          ))}

          {/* Selected Record */}
          <div className="bg-[#F6F9F9] px-[22px] py-5 dark:bg-slate-900">

            <p className="text-xs font-bold uppercase leading-5 tracking-wide text-[#0E1F3D] dark:text-white">
              Selected record · #4821
            </p>

            <div className="mt-2">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#D2DAE2] py-2 dark:border-slate-700"
                >
                  <span className="text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                    {detail.label}
                  </span>
                  <span className="text-right text-xs font-semibold leading-5 text-[#0E1F3D] dark:text-white">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
