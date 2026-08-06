const levels = {
  full: "bg-[#10A28D]",
  scoped: "bg-[#E0A800]",
  none: "bg-[#D2DAE2]",
} as const;

type Level = keyof typeof levels;

const abilities = ["Configure", "Approve", "Export", "View records", "View audit"];

const matrix: { role: string; grants: Level[] }[] = [
  {
    role: "Administrator",
    grants: ["full", "none", "scoped", "scoped", "scoped"],
  },
  {
    role: "Policy owner",
    grants: ["full", "none", "none", "scoped", "scoped"],
  },
  {
    role: "Approver",
    grants: ["none", "full", "none", "full", "scoped"],
  },
  {
    role: "Reviewer / manager",
    grants: ["none", "scoped", "none", "full", "none"],
  },
  {
    role: "Auditor",
    grants: ["none", "none", "scoped", "full", "full"],
  },
  {
    role: "Worker",
    grants: ["none", "none", "none", "scoped", "none"],
  },
];

const legend: { level: Level; label: string }[] = [
  { level: "full", label: "Full" },
  { level: "scoped", label: "Scoped / conditional" },
  { level: "none", label: "None" },
];

const rolePoints = [
  "Scoped by org, team & worker type",
  "No one approves their own change",
  "Conditional and read-only roles",
];

const elevationPoints = [
  "Approval by a different role",
  "Required reason on every request",
  "Automatic expiry & revocation",
];

const request = [
  { label: "Requester", value: "S. Chen · Administrator" },
  { label: "Access", value: "Payroll export · write" },
  { label: "Duration", value: "Time-bound · 4 hours" },
  { label: "Reason", value: "Period close correction" },
  { label: "Approver", value: "J. Rivera (different role)" },
  { label: "On expiry", value: "Auto-revoke · audit event" },
];

function Tick() {
  return (
    <svg
      viewBox="0 0 14 14"
      className="mt-[3px] h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="#10A28D"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.9 7.6 5.25 9.95 11.1 4.1" />
    </svg>
  );
}

function PointList({ points }: { points: string[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-2.5">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2.5">
          <Tick />
          <span className="text-xs font-medium leading-5 text-[#0E1F3D] dark:text-slate-200">
            {point}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function GovernedAccess() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="flex w-full flex-col items-center gap-3">

          <p className="text-center text-xs font-semibold uppercase leading-5 tracking-widest text-[#10A28D]">
            Governed Access
          </p>

          <h2 className="text-center text-3xl font-bold leading-[1.11] text-[#0E1F3D] lg:whitespace-nowrap dark:text-white sm:text-4xl">
            Least privilege, enforced — not assumed
          </h2>

          <p className="max-w-[660px] text-center text-base font-normal leading-7 text-[#6B7785] dark:text-slate-400">
            Roles, approvals, and elevation designed so sensitive access is
            scoped, time-appropriate, and separated by duty.
          </p>

        </div>

        <div className="mx-auto mt-12 flex w-full max-w-[1180px] flex-col gap-14">

          {/* Role Matrix */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            <div>

              <div className="overflow-hidden rounded-2xl border border-[#E4E9EE] bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-950">

                {/* Column Headings */}
                <div className="grid grid-cols-[1.7fr_repeat(5,1fr)] bg-[#0E1F3D]">
                  <p className="px-3 py-3 text-[10px] font-semibold leading-4 text-white">
                    Role
                  </p>
                  {abilities.map((ability) => (
                    <p
                      key={ability}
                      className="px-1.5 py-3 text-center text-[10px] font-semibold leading-4 text-white"
                    >
                      {ability}
                    </p>
                  ))}
                </div>

                {/* Rows */}
                {matrix.map((row, index) => (
                  <div
                    key={row.role}
                    className={`grid grid-cols-[1.7fr_repeat(5,1fr)] items-center border-t border-[#E4E9EE] ${
                      index % 2 === 1
                        ? "bg-[#F6F9F9] dark:bg-slate-900"
                        : "bg-white dark:bg-slate-950"
                    } dark:border-slate-800`}
                  >

                    <p className="px-3 py-3 text-[11px] font-semibold leading-4 text-[#0E1F3D] dark:text-white">
                      {row.role}
                    </p>

                    {row.grants.map((grant, column) => (
                      <span
                        key={abilities[column]}
                        className="flex items-center justify-center px-1.5 py-3"
                      >
                        <span
                          className={`h-2.5 w-2.5 rounded-full ${levels[grant]}`}
                        />
                      </span>
                    ))}

                  </div>
                ))}

              </div>

              {/* Legend */}
              <div className="mt-3.5 flex flex-wrap items-center justify-center gap-5">
                {legend.map((item) => (
                  <span key={item.label} className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full ${levels[item.level]}`}
                    />
                    <span className="text-[11px] font-normal leading-4 text-[#6B7785] dark:text-slate-400">
                      {item.label}
                    </span>
                  </span>
                ))}
              </div>

            </div>

            <div>

              <h3 className="text-xl font-bold leading-7 text-[#0E1F3D] dark:text-white">
                Role-based access &amp; segregation of duties
              </h3>

              <p className="mt-3 max-w-[520px] text-sm font-normal leading-6 text-[#6B7785] dark:text-slate-400">
                Assign least-privilege roles scoped by organization, team, and
                worker type. Segregation of duties keeps configuration,
                approval, and export in different hands.
              </p>

              <PointList points={rolePoints} />

            </div>

          </div>

          {/* Elevation */}
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

            <div className="lg:order-1">

              <h3 className="text-xl font-bold leading-7 text-[#0E1F3D] dark:text-white">
                Just-in-time, time-bound elevation
              </h3>

              <p className="mt-3 max-w-[520px] text-sm font-normal leading-6 text-[#6B7785] dark:text-slate-400">
                Request elevated access only when it&apos;s needed. Elevation
                requires approval and a reason, is limited to a window, and
                auto-revokes with an audit event.
              </p>

              <PointList points={elevationPoints} />

            </div>

            {/* Request Card */}
            <div
              className="rounded-2xl border border-[#E4E9EE] bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05),0px_1px_3px_0px_rgba(14,31,61,0.06)] lg:order-2 dark:border-slate-800 dark:bg-slate-950"
              aria-hidden="true"
            >

              <div className="flex flex-wrap items-center justify-between gap-3">

                <p className="text-sm font-semibold leading-6 text-[#0E1F3D] dark:text-white">
                  Elevated access request
                </p>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF3D6] px-2.5 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E0A800]" />
                  <span className="text-[10px] font-semibold leading-4 text-[#8A6500]">
                    Pending approval
                  </span>
                </span>

              </div>

              <div className="mt-3">
                {request.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-baseline justify-between gap-4 py-2"
                  >
                    <span className="text-[11px] font-normal leading-5 text-[#6B7785] dark:text-slate-400">
                      {row.label}
                    </span>
                    <span className="text-right text-[11px] font-semibold leading-5 text-[#0E1F3D] dark:text-white">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <span className="flex flex-1 items-center justify-center rounded-lg bg-[#10A28D] px-5 py-2.5 text-xs font-semibold leading-5 text-white">
                  Approve
                </span>
                <span className="flex flex-1 items-center justify-center rounded-lg border border-[#D2DAE2] bg-white px-5 py-2.5 text-xs font-semibold leading-5 text-[#0E1F3D] dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                  Deny
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
