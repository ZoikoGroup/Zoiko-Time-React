const CONTROLS = [
  {
    title: "Discovery and Stakeholder Alignment",
    body: "Identify buyer objectives, teams, use cases, workforce categories, compliance considerations, and success criteria before configuration begins.",
  },
  {
    title: "Workspace and Governance Configuration",
    body: "Configure company profile, departments, worker groups, roles, permissions, policies, screenshots where applicable, retention settings, and administrative access.",
  },
  {
    title: "Data, Integrations, and Workflow Planning",
    body: "Review required integrations, payroll or project workflows, timesheet processes, reporting outputs, and data handling requirements before launch.",
  },
  {
    title: "Admin and Manager Enablement",
    body: "Prepare administrators and managers with training, documentation, approval workflows, exception handling guidance, and reporting access aligned to their roles.",
  },
  {
    title: "Worker Communication and Transparency",
    body: "Provide worker-facing guidance on what ZoikoTime captures, how records are reviewed, what rights workers have, and how the platform supports fair workforce oversight.",
  },
  {
    title: "Launch, Monitor, and Optimize",
    body: "Launch in phases where appropriate, monitor adoption, review exceptions, tune settings, improve reporting, and evaluate outcomes against stated deployment objectives.",
  },
];

export default function Implementation() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-16 sm:py-20 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-6xl text-center">
        <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
          Implementation
        </span>

        <h2 className="mb-3 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
          A Structured Rollout That Accounts for Your Organization
        </h2>

        <p className="mx-auto max-w-5xl leading-7 text-[#5A6E87] dark:text-gray-300">
          Successful workforce intelligence deployment requires more than
          turning on software. Organizations need a rollout plan that accounts
          for structure, policy, roles, communication, training, reporting, and
          adoption.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-[#E4EBF4] dark:border-gray-700 divide-y divide-slate-100 dark:divide-gray-700 transition-colors duration-300">
        {CONTROLS.map((item, i) => (
          <div
            key={item.title}
            className="flex gap-4 px-5 py-6 sm:px-8"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#009D8C40] bg-[#EAF9F6] dark:bg-teal-500/10 dark:border-teal-500/30 text-xs font-semibold text-teal-700 dark:text-teal-300">
              {i + 1}
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-[13px] leading-7 text-[#5A6E87] dark:text-gray-300">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="#"
          className="text-sm font-semibold text-[#009D8C] hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
        >
          View Implementation Guide →
        </a>
      </div>
    </section>
  );
}