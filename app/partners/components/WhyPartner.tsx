const cards = [
  {
    title: "Expanding market need",
    desc: "Distributed teams, contractor-heavy workforces, hybrid work, payroll scrutiny, and client-billing pressure are increasing demand for trusted workforce intelligence.",
  },
  {
    title: "Clear customer value",
    desc: "ZoikoTime helps organizations review time records, manage exceptions, improve visibility, support payroll confidence, and strengthen reporting.",
  },
  {
    title: "Enterprise-relevant category",
    desc: "A platform that spans HR, payroll, finance, legal, operations, compliance, productivity, and executive reporting.",
  },
  {
    title: "Partner-led deployment",
    desc: "Customers may need support with configuration, rollout planning, policy alignment, worker communication, training, reporting, and adoption.",
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-[#F6F9F9] px-6 py-12 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-20 xl:px-32 2xl:px-54">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
            Why Partner
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[34px]">
            Why partner with ZoikoTime
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#5A6E87] dark:text-slate-400 md:text-base">
            ZoikoTime sits at the intersection of HR, payroll, finance, legal,
            operations, compliance, productivity, and executive reporting —
            creating real opportunities for qualified partners.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#10A28D]" />

                <h3 className="text-lg font-semibold text-[#0D1526] dark:text-white">
                  {title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-[#5A6E87] dark:text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}