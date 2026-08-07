export default function ConnectionModel() {
  const steps = [
    {
      step: "Step 01",
      title: "Map approved workspaces",
      label1: "What happens",
      text1:
        "Authorized administrators select which Sema workspaces may connect and map them to approved ZoikoTime teams, departments, projects, or organizational units.",
      label2: "Every mapping carries",
      text2:
        "Purpose, owner, scope, effective date, and status.",
    },
    {
      step: "Step 02",
      title: "Apply governance",
      label1: "What happens",
      text1:
        "Roles, permissions, privacy modes, context categories, policy versions, jurisdiction treatment, retention, notices, exclusions, review requirements, and audit controls determine what is available and to whom.",
      label2: "Control",
      text2:
        "Configuration is explicit — nothing is enabled by default.",
    },
    {
      step: "Step 03",
      title: "Review operational context",
      label1: "What happens",
      text1:
        "Authorized users review connection health, source context, policy alignment, exceptions, human-reviewed actions or decisions, and approved organization-level reporting.",
      label2: "Boundary",
      text2:
        "Review does not create automatic time, payroll, performance, disciplinary, legal, or compliance outcomes.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1180px] px-6">
        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
            The Connection Model
          </span>

          <h2 className="mt-4 font-figtree text-4xl font-bold text-slate-900 dark:text-white">
            Map → Govern → Review
          </h2>

          <p className="mx-auto mt-5 max-w-[640px] text-base leading-7 text-slate-600 dark:text-slate-300">
            Three steps, each with an owner and a control. No step completes
            because someone scrolled past it.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                {item.step}
              </span>

              <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                {item.title}
              </h3>

              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {item.label1}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text1}
                </p>
              </div>

              <div className="mt-8">
                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {item.label2}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.text2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}