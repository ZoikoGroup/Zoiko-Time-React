export default function StakeholderPack() {
  const stakeholders = [
    {
      stakeholder: "CFO / Finance",
      question: "Is the investment justified?",
      gets: "ROI business case and value assumptions",
    },
    {
      stakeholder: "CISO / Security",
      question: "Is it secure?",
      gets: "Security posture overview and access model",
    },
    {
      stakeholder: "Legal",
      question: "Is it defensible and compliant?",
      gets: "Privacy safeguards and legal review materials",
    },
    {
      stakeholder: "Procurement",
      question: "Can we contract efficiently?",
      gets: "Procurement Q&A and commercial essentials",
    },
    {
      stakeholder: "IT",
      question: "Does it fit our stack?",
      gets: "Technical architecture and integration model",
    },
    {
      stakeholder: "Executive Sponsor",
      question: "Does it move the organization forward?",
      gets: "Summary narrative and rollout readiness",
    },
  ];

  return (
    <section className="bg-white px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-600">
            Buying Committee
          </p>

          <h2 className="mt-2 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            How each stakeholder uses the pack
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="mt-12 hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 md:block">
          <div className="grid grid-cols-[1fr_1.9fr_2fr] bg-slate-800 text-xs font-semibold text-white">
            <div className="px-[18px] py-4">Stakeholder</div>
            <div className="px-[18px] py-4">Decision question</div>
            <div className="px-[18px] py-4">What they get</div>
          </div>

          {stakeholders.map((item, index) => (
            <div
              key={item.stakeholder}
              className={`grid grid-cols-[1fr_1.9fr_2fr] border-t border-slate-200 dark:border-slate-700 ${
                index % 2 === 1
                  ? "bg-gray-50 dark:bg-slate-800/60"
                  : "bg-white dark:bg-slate-900"
              }`}
            >
              <div className="px-[18px] py-3 text-sm font-bold text-slate-800 dark:text-white">
                {item.stakeholder}
              </div>

              <div className="px-[18px] py-3 text-sm text-gray-700 dark:text-slate-300">
                {item.question}
              </div>

              <div className="px-[18px] py-3 text-sm text-gray-700 dark:text-slate-300">
                {item.gets}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {stakeholders.map((item, index) => (
            <div
              key={item.stakeholder}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_6px_18px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                  {item.stakeholder}
                </h3>

                <span className="text-xs font-semibold text-teal-600">
                  0{index + 1}
                </span>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                  Decision question
                </p>

                <p className="mt-1 text-sm text-gray-700 dark:text-slate-300">
                  {item.question}
                </p>
              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-slate-500">
                  What they get
                </p>

                <p className="mt-1 text-sm text-gray-700 dark:text-slate-300">
                  {item.gets}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}