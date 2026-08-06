const tones = {
  teal: "bg-[#E8F6F2] text-[#0B8675]",
  red: "bg-[#FCEEEC] text-[#B23A2B]",
  amber: "bg-[#FFF3D6] text-[#8A6500]",
} as const;

const grants = [
  {
    user: "A. Okafor",
    scope: "Reviewer · NE",
    lastUsed: "2d ago",
    decision: "Certify",
    tone: "teal" as const,
  },
  {
    user: "M. Diaz",
    scope: "Approver · Payroll",
    lastUsed: "Today",
    decision: "Certify",
    tone: "teal" as const,
  },
  {
    user: "K. Patel",
    scope: "Admin · Full",
    lastUsed: "41d ago",
    decision: "Revoke",
    tone: "red" as const,
  },
  {
    user: "T. Bauer",
    scope: "Worker · contractor",
    lastUsed: "3d ago",
    decision: "Reduce scope",
    tone: "amber" as const,
  },
];

const columns = "md:grid-cols-[18.8%_34.7%_18.9%_27.6%]";

export default function AccessReviews() {
  return (
    <section className="w-full overflow-hidden bg-[#F6F9F9] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Stay Current
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Prove access is right — on a schedule
          </h2>

          <p className="max-w-[650px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Recurring certification keeps entitlements defensible, and every
            decision is human-made and logged.
          </p>

        </div>

        {/* Certification Mock */}
        <div
          className="mx-auto mt-12 w-full max-w-[1132px] overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_26px_54px_0px_rgba(14,31,61,0.16)] dark:border-slate-800 dark:bg-slate-950"
          aria-hidden="true"
        >

          {/* Title Bar */}
          <div className="flex items-center gap-2 bg-[#0E1F3D] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <span className="h-2.5 w-2.5 rounded-md bg-white/25" />
            <p className="pl-2.5 text-xs font-medium leading-5 text-white/90">
              Access review · Q3 certification
            </p>
          </div>

          <div className="px-[21px] pb-5 pt-5">

            {/* Panel Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">

              <p className="text-base font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                Certify access · Payroll scope
              </p>

              <span className="inline-flex items-center gap-2.5 rounded-[20px] bg-[#E7F0FF] px-2 py-1">
                <span className="h-1.5 w-1.5 shrink-0 rounded-[3px] bg-[#2E5BC0]" />
                <span className="text-[10px] font-bold leading-4 text-[#2E5BC0]">
                  12 reviewers · 340 grants
                </span>
              </span>

            </div>

            {/* Grant Table */}
            <div className="mt-4">

              {/* Column Headings */}
              <div
                className={`hidden border-b border-[#E4E9EE] md:grid ${columns} dark:border-slate-800`}
              >
                {["User", "Role · scope", "Last used", "Decision"].map(
                  (heading) => (
                    <p
                      key={heading}
                      className="px-[9px] py-2 text-[10px] font-semibold uppercase leading-4 tracking-tight text-[#6B7785] dark:text-slate-400"
                    >
                      {heading}
                    </p>
                  ),
                )}
              </div>

              {/* Rows */}
              {grants.map((row) => (
                <div
                  key={row.user}
                  className={`grid grid-cols-1 gap-1.5 border-b border-[#E4E9EE] py-3 md:items-center md:gap-0 md:py-0 ${columns} dark:border-slate-800`}
                >

                  <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-[9px] md:py-2.5 dark:text-slate-200">
                    {row.user}
                  </p>

                  <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-[9px] md:py-2.5 dark:text-slate-200">
                    {row.scope}
                  </p>

                  <p className="text-xs font-normal leading-5 text-[#0E1F3D] md:px-[9px] md:py-2.5 dark:text-slate-200">
                    {row.lastUsed}
                  </p>

                  <div className="md:px-[9px]">
                    <span
                      className={`inline-flex rounded-[20px] px-2 py-[3px] text-[10px] font-bold leading-4 ${tones[row.tone]}`}
                    >
                      {row.decision}
                    </span>
                  </div>

                </div>
              ))}

            </div>

            <p className="mt-3 text-xs font-normal leading-4 text-[#6B7785] dark:text-slate-400">
              Recertification is human-controlled; every decision is reasoned
              and logged.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
