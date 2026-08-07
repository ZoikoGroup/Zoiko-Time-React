import Image from "next/image";

const components = [
  {
    component: "Break types",
    content: "Meal and rest are separate customer-facing categories",
    gate: "Production state mapping confirmed",
  },
  {
    component: "Capture",
    content: "Start/end, duration, source, edits, sync status",
    gate: "Supported devices and offline behavior tested",
  },
  {
    component: "Completeness",
    content:
      "Missing, short, overlapping, or conflicting context flagged neutrally",
    gate: "Policy/rule version and jurisdiction scope approved",
  },
  {
    component: "Review",
    content: "Authorized person reviews context and records rationale",
    gate: "Role permissions and audit events tested",
  },
  {
    component: "Downstream use",
    content: "Approved break records may support payroll or compliance",
    gate: "Integration direction documented",
  },
];

const columns = "md:grid-cols-[15%_47.4%_37.6%]";

export default function BreakRestRecords() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[740px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Break &amp; Rest Records
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] dark:text-white sm:text-4xl">
            Meal and rest periods, treated as distinct states
          </h2>

        </div>

        {/* Component Table */}
        <div className="mx-auto mt-9 w-full max-w-[1040px] overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950">

          {/* Column Headings */}
          <div className={`hidden bg-[#0E1F3D] md:grid ${columns}`}>
            {["Component", "Content", "Evidence gate"].map((heading) => (
              <p
                key={heading}
                className="px-4 py-3.5 text-xs font-semibold leading-5 text-white"
              >
                {heading}
              </p>
            ))}
          </div>

          {/* Rows */}
          {components.map((row, index) => (
            <div
              key={row.component}
              className={`grid grid-cols-1 gap-1.5 border-t border-[#E4E9EE] px-4 py-4 md:items-start md:gap-0 md:px-0 md:py-0 ${columns} ${
                index % 2 === 1
                  ? "bg-[#F6F9F9] dark:bg-slate-900"
                  : "bg-white dark:bg-slate-950"
              } dark:border-slate-800`}
            >

              <p className="text-sm font-bold leading-5 text-[#0E1F3D] md:px-4 md:py-3.5 dark:text-white">
                {row.component}
              </p>

              <p className="text-sm font-normal leading-5 text-[#3C4858] md:px-4 md:py-3.5 dark:text-slate-300">
                {row.content}
              </p>

              <p className="text-sm font-normal leading-5 text-[#3C4858] md:px-4 md:py-3.5 dark:text-slate-300">
                {row.gate}
              </p>

            </div>
          ))}

        </div>

        {/* Legal Scope Note */}
        <div className="mx-auto mt-8 flex max-w-[880px] items-start justify-center gap-2">

          <Image
            src="/verify-time-attendance/info.svg"
            alt=""
            width={14}
            height={14}
            className="mt-1 h-3.5 w-3.5 shrink-0"
          />

          <p className="text-center text-xs font-normal leading-5 text-[#6B7785] dark:text-slate-400">
            ZoikoTime configures and evidences policy workflows; it does not
            provide legal advice or guarantee compliance in any jurisdiction.
          </p>

        </div>

      </div>
    </section>
  );
}
