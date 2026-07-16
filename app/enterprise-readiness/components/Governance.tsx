const cards = [
  {
    src: "/enterprise-readiness/guy.png",
    title: "Role-Based Access",
    desc: "Defined access by role, responsibility, team, department, or administrative authority. Different users see and do different things based on their organizational position.",
  },
  {
    src: "/enterprise-readiness/operation.png",
    title: "Administrative Controls",
    desc: "Support authorized users in managing company settings, teams, workers, policies, permissions, billing configurations, and workspace governance from a central admin view.",
  },
  {
    src: "/enterprise-readiness/approvel.png",
    title: "Approval Workflows",
    desc: "Support structured review of time records, exceptions, attendance issues, timesheets, project time, and manager escalations through governed approval chains.",
  },
  {
    src: "/enterprise-readiness/chart.png",
    title: "Reporting Permissions",
    desc: "Control access to workforce reports, analytics, exports, evidence packages, and sensitive operational data by role, department, and authorization level.",
  },
  {
    src: "/enterprise-readiness/camera.png",
    title: "Screenshot Governance",
    desc: "Where screenshots are enabled, govern capture settings, access permissions, redaction controls, retention, and worker transparency to support privacy-aware deployment.",
  },
  {
    src: "/enterprise-readiness/ylock.png",
    title: "Retention and Legal Hold",
    desc: "Support retention controls, preservation workflows, legal hold processes, and traceable historical records for governance, dispute, and compliance requirements.",
  },
];

export default function Governance() {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            Governance and Access
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            Control Who Sees What, and Who Can Do What
          </h2>

          <p className="mx-auto max-w-4xl leading-7 text-[#5A6E87] dark:text-gray-300">
            ZoikoTime&apos;s enterprise value depends on giving organizations
            the ability to control who can access workforce data, configure
            settings, review records, approve exceptions, export reports, and
            manage sensitive workflows.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm border border-transparent dark:border-gray-700 transition-all duration-300 hover:shadow-md"
            >
              <img
                src={src}
                alt={title}
                className="mb-4 h-14 w-14 object-contain"
              />

              <h3 className="mb-2 text-[15px] font-semibold text-[#0D1526] dark:text-white">
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