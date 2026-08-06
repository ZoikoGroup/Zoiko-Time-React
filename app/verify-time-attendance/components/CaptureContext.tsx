import Image from "next/image";

const inputs = [
  {
    input: "Time events",
    purpose: "Start, stop, pause, resume, approved manual entries",
    boundary:
      "Source depends on enabled desktop, mobile, web, or integration",
  },
  {
    input: "Schedules",
    purpose: "Compare expected vs. captured periods",
    boundary: "Not a scheduling claim; label source and last sync",
  },
  {
    input: "Breaks",
    purpose: "Record meal and rest states distinctly where configured",
    boundary: "No inferred legal sufficiency without approved policy mapping",
  },
  {
    input: "Projects / cost codes",
    purpose: "Attribute approved time to permitted context",
    boundary: "No app content capture, no productivity judgment",
  },
  {
    input: "Identity / access signals",
    purpose: "Authentication, device trust, session integrity",
    boundary: "No biometric or location implication unless disclosed",
  },
  {
    input: "Worker / reviewer context",
    purpose: "Comments, correction requests, rationale, approvals",
    boundary: "Role and visibility controlled",
  },
  {
    input: "Integration metadata",
    purpose: "Import/export status, source IDs, error/retry history",
    boundary: "Direction and ownership documented per connector",
  },
];

const columns = "md:grid-cols-[20%_37%_43%]";

export default function CaptureContext() {
  return (
    <section id="capture-context" className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Capture &amp; Context
          </p>

          <h2 className="text-center text-3xl font-bold leading-tight text-[#0E1F3D] dark:text-white sm:text-4xl">
            What can contribute to a time record — and what never does
          </h2>

        </div>

        {/* Input Table */}
        <div className="mx-auto mt-9 w-full max-w-[1040px] overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950">

          {/* Column Headings */}
          <div className={`hidden bg-[#0E1F3D] md:grid ${columns}`}>
            {["Input / context", "Purpose", "Boundary"].map((heading) => (
              <p
                key={heading}
                className="px-5 py-3.5 text-xs font-semibold leading-5 text-white"
              >
                {heading}
              </p>
            ))}
          </div>

          {/* Rows */}
          {inputs.map((row, index) => (
            <div
              key={row.input}
              className={`grid grid-cols-1 gap-1.5 border-b border-[#E4E9EE] px-5 py-4 last:border-b-0 md:gap-0 md:px-0 md:py-0 ${columns} ${
                index % 2 === 1
                  ? "bg-[#F6F9F9] dark:bg-slate-900"
                  : "bg-white dark:bg-slate-950"
              } dark:border-slate-800`}
            >

              <p className="text-xs font-bold leading-5 text-[#0E1F3D] md:px-5 md:py-4 dark:text-white">
                {row.input}
              </p>

              <p className="text-xs font-normal leading-5 text-[#6B7785] md:px-5 md:py-4 dark:text-slate-400">
                {row.purpose}
              </p>

              <p className="text-xs font-normal leading-5 text-[#6B7785] md:px-5 md:py-4 dark:text-slate-400">
                {row.boundary}
              </p>

            </div>
          ))}

        </div>

        {/* Negative Capability Set */}
        <div className="mx-auto mt-11 flex w-full max-w-[880px] items-start gap-4 rounded-2xl bg-[#0E1F3D] px-6 py-6 sm:px-7">

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#10A28D]/15">
            <Image
              src="/verify-time-attendance/lock.svg"
              alt=""
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
          </span>

          <div className="min-w-0">

            <p className="text-xs font-bold uppercase leading-4 tracking-wider text-[#10A28D]">
              Negative capability set
            </p>

            <p className="mt-1.5 text-base font-medium leading-6 text-white">
              Under any tier and any configuration, ZoikoTime does not collect
              screenshots, keystroke content, URL history, application names, or
              clipboard data. It does not create an individual productivity
              score. These are product invariants, not optional settings.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
