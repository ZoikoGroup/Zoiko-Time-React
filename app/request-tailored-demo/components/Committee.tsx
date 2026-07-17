const committee = [
  {
    category: "Operations",
    title: "Operational clarity",
    description: "Real-time visibility across teams and locations.",
  },
  {
    category: "HR & People",
    title: "Fair, consistent rules",
    description: "Transparent policies and evidence.",
  },
  {
    category: "Finance & Payroll",
    title: "Defensible inputs",
    description: "Validated time and billing evidence.",
  },
  {
    category: "Legal & Compliance",
    title: "Accountability",
    description: "Governed records and audit trails.",
  },
  {
    category: "IT & Security",
    title: "Secure access",
    description: "RBAC and clean integrations.",
  },
  {
    category: "Service Delivery",
    title: "Billable assurance",
    description: "Evidence-backed delivery confidence.",
  },
];

export default function Committee() {
  return (
    <section className="bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-[74px]">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Buying Committee
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Who should attend
          </h2>
        </div>

        {/* Committee Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {committee.map((item) => (
            <div
              key={item.category}
              className="min-h-[144px] rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                {item.category}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-7 text-slate-800 dark:text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}