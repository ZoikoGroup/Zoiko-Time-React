const cards = [
  {
    src: "/leadership-governance/time.png",
    title: "Time and Activity Records",
    desc: "Time entries, activity signals, idle patterns, app usage, URL usage, and screenshots where enabled should be governed with clear purposes, access controls, retention rules, and worker transparency.",
  },
  {
    src: "/leadership-governance/camera.png",
    title: "Screenshots and Redaction Controls",
    desc: "Where screenshots are enabled, organizations should use privacy-aware settings, redaction controls, purpose-limited access, worker notices, and governance documentation appropriate to their jurisdiction.",
  },
  {
    src: "/leadership-governance/rack.png",
    title: "Payroll and Billing Sensitivity",
    desc: "Records that support payroll, timesheets, client billing, utilization, and project costing affect real financial outcomes and should be governed with appropriate human review, access controls, and audit trails.",
  },
  {
    src: "/leadership-governance/eye.png",
    title: "Worker Access and Transparency",
    desc: "Workers should be able to understand relevant records, policies, guides, and workflows that affect them through appropriate visibility, notice, and access rights aligned to organizational and legal requirements.",
  },
];

export default function Stewardship() {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            Data Stewardship
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            Workforce Data Requires Care, Context, and Control
          </h2>

          <p className="mx-auto max-w-5xl leading-7 text-[#5A6E87] dark:text-gray-300">
            Workforce data can be commercially valuable and personally
            sensitive. ZoikoTime&apos;s governance approach is designed to help
            organizations manage workforce intelligence responsibly, with clear
            access rules, review processes, transparency, retention controls,
            and auditability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm transition-colors duration-300"
            >
              <img
                src={src}
                alt={title}
                className="mb-5 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-lg font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-7 text-[#5A6E87] dark:text-gray-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}