const responsibilities = [
  {
    area: "Infrastructure Security",
    zoiko:
      "Secure cloud environment, network isolation, geographic redundancy, physical security controls",
    customer:
      "Secure endpoint access from employee and contractor devices connecting to ZoikoTime",
  },
  {
    area: "Application Security",
    zoiko:
      "Platform security controls, vulnerability management, security testing, dependency monitoring",
    customer:
      "Proper configuration of application settings, use in accordance with security guidelines",
  },
  {
    area: "Access Control",
    zoiko:
      "RBAC framework, session validation, MFA enforcement, access logging and audit trails",
    customer:
      "User role assignment, access review cycles, off-boarding workflows for departing users",
  },
  {
    area: "Data Protection",
    zoiko:
      "Encryption at rest and in transit, SHA-256 integrity, immutable evidence records, retention controls",
    customer:
      "Data classification decisions, lawful basis configuration, jurisdictional residency selection",
  },
  {
    area: "Monitoring & Detection",
    zoiko:
      "System-level monitoring, anomaly detection, alert generation, incident response framework",
    customer:
      "Internal process monitoring, escalation contacts, security incident communication protocols",
  },
];

export default function SharedResponsibility() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-teal-600">
            Shared Responsibility
          </p>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Shared Responsibility Model
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-slate-300 md:text-lg">
            Enterprise security requires clarity about who is responsible for
            what. The ZoikoTime shared responsibility model defines the
            boundary between platform and customer obligations — essential
            for enterprise due diligence.
          </p>
        </div>

        {/* Table */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_1px_4px_rgba(13,21,38,0.04),0_4px_16px_rgba(13,21,38,0.08)] dark:border-slate-700 dark:bg-slate-900">

          {/* Desktop Header */}
          <div className="hidden md:grid md:grid-cols-[220px_1fr_1fr]">
            <div className="border-b border-slate-200 bg-slate-100 px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 dark:border-slate-700 dark:bg-slate-800">
              Security Area
            </div>

            <div className="border-b border-slate-200 bg-emerald-50 px-6 py-4 text-xs font-bold uppercase tracking-wider text-teal-600 dark:border-slate-700 dark:bg-teal-500/10">
              ZoikoTime Responsibility
            </div>

            <div className="border-b border-slate-200 bg-indigo-50 px-6 py-4 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:border-slate-700 dark:bg-indigo-500/10">
              Customer Responsibility
            </div>
          </div>

          {/* Rows */}
          <div>

                        {responsibilities.map((item, index) => (
              <div
                key={item.area}
                className={`border-slate-200 dark:border-slate-700 ${
                  index !== responsibilities.length - 1
                    ? "border-b"
                    : ""
                }`}
              >
                {/* Desktop Layout */}
                <div className="hidden md:grid md:grid-cols-[220px_1fr_1fr]">
                  {/* Security Area */}
                  <div className="flex items-center border-r border-slate-200 bg-white px-6 py-6 dark:border-slate-700 dark:bg-slate-900">
                    <h3 className="text-sm font-bold leading-6 text-slate-900 dark:text-white">
                      {item.area}
                    </h3>
                  </div>

                  {/* ZoikoTime Responsibility */}
                  <div className="border-r border-slate-200 bg-teal-600/5 px-6 py-6 dark:border-slate-700 dark:bg-teal-500/10">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.zoiko}
                    </p>
                  </div>

                  {/* Customer Responsibility */}
                  <div className="bg-indigo-500/5 px-6 py-6 dark:bg-indigo-500/10">
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.customer}
                    </p>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="space-y-4 p-5 md:hidden">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {item.area}
                  </h3>

                  <div className="rounded-xl bg-teal-600/5 p-4 dark:bg-teal-500/10">
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-teal-600">
                      ZoikoTime Responsibility
                    </h4>

                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.zoiko}
                    </p>
                  </div>

                  <div className="rounded-xl bg-indigo-500/5 p-4 dark:bg-indigo-500/10">
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
                      Customer Responsibility
                    </h4>

                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.customer}
                    </p>
                  </div>
                </div>
              </div>
            ))}

                      </div>
        </div>
      </div>
    </section>
  );
}