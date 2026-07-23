const cards = [
  {
    src: "/enterprise-readiness/upper.png",
    title: "Workforce Analytics",
    desc: "Visibility into time, activity, attendance, utilization, productivity patterns, workload signals, and operational performance across teams, departments, and projects.",
  },
  {
    src: "/enterprise-readiness/card.png",
    title: "Payroll and Timesheet Integrity",
    desc: "Help teams review time records, approvals, corrections, exceptions, and supporting activity before payroll processing and timesheet finalization.",
  },
  {
    src: "/enterprise-readiness/report.png",
    title: "Client Billing Support",
    desc: "Support professional services and project-based teams with records that help validate billable time, project allocation, and client-facing evidence packages.",
  },
  {
    src: "/enterprise-readiness/data.png",
    title: "Audit-Ready Evidence",
    desc: "Traceable records, approval history, edits, exports, exceptions, timestamps, and review context that support audit preparation, disputes, and governance reviews.",
  },
  {
    src: "/enterprise-readiness/ylock.png",
    title: "Legal Hold Support",
    desc: "Record preservation workflows where organizations need to retain relevant workforce records for legal, regulatory, dispute, or compliance purposes.",
  },
  {
    src: "/enterprise-readiness/shirt.png",
    title: "Executive Reporting",
    desc: "Leadership visibility into workforce patterns, productivity, utilization, exceptions, risks, and operational performance at the team, department, and enterprise level.",
  },
];

export default function Reporting() {
  return (
    <section className="bg-white px-6 py-12 transition-colors duration-300 dark:bg-slate-900 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[1.3px] text-[#00C6A9]">
            Reporting and Evidence
          </span>

          <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white md:text-[30px]">
            Records That Can Be Reviewed, Explained, and Governed
          </h2>

          <p className="mx-auto max-w-5xl leading-7 text-slate-600 dark:text-white/60">
            Enterprise customers need workforce records that can be reviewed,
            explained, exported, and governed. ZoikoTime is designed to support
            reporting and evidence workflows for payroll, billing, audits, and
            compliance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-[14px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00C6A9]/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-[#00C6A9]/30 dark:hover:bg-white/10"
            >
              <img
                src={src}
                alt={title}
                className="mb-4 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-[15px] font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-7 text-slate-600 dark:text-white/60">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}