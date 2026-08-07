const programs = [
  {
    audience: "Admins",
    title: "Administrator onboarding",
    body: "Configuration, policy setup, roles & permissions, evidence, and governance.",
  },
  {
    audience: "Managers",
    title: "Manager approvals",
    body: "Review queues, approvals before cutoff, corrections, and exceptions.",
  },
  {
    audience: "Workers",
    title: "Worker essentials",
    body: "Recording time, breaks, corrections, and understanding applicable policy.",
  },
  {
    audience: "Payroll",
    title: "Payroll close & export",
    body: "Readiness, reconciliation, validated exports, and period controls.",
  },
  {
    audience: "HR · Legal",
    title: "Policy & governance",
    body: "Policy lifecycle, change control, worker correction, and evidence.",
  },
  {
    audience: "IT · Security",
    title: "Identity & integrations",
    body: "SSO, provisioning, access reviews, and governed connections.",
  },
];

export default function LearningPrograms() {
  return (
    <section className="w-full bg-gray-50 py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Learning Programs
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Curated paths for every role
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Each program combines guided courses, live or on-demand sessions,
            practice, and assessment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ audience, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800"
            >
              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-teal-600 dark:text-teal-400">
                {audience}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {title}
              </h3>

              <p className="mt-1 text-sm font-normal leading-6 text-gray-500 dark:text-slate-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
