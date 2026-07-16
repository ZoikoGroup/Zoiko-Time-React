const cards = [
  {
    role: "HR DIRECTOR",
    title: "Better Workforce Visibility",
    desc: "Real-time confidence scores across every session — enabling informed decisions instead of gut feel, and defensible records instead of assumptions.",
  },
  {
    role: "CFO",
    title: "Reduced Payroll Leakage",
    desc: "Every verified session directly prevents unwarranted payroll approval — quantifiable financial recovery that shows in the accounts within weeks of deployment.",
  },
  {
    role: "GENERAL COUNSEL",
    title: "Stronger Legal Defensibility",
    desc: "Tamper-evident evidence records that hold up in employment tribunals, regulatory proceedings, and legal disputes — built by the people who write the architecture.",
  },
  {
    role: "COO",
    title: "Improved Operational Efficiency",
    desc: "Automated governance reduces the manual overhead of workforce oversight — freeing operations teams to focus on performance rather than administration.",
  },
];

export default function YourWork() {
  return (
    <section className="bg-white px-6 py-12 md:px-10 lg:px-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
            Your Work in the Real World
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] md:text-[34px] dark:text-white">
            Where ZoikoTime&apos;s Work Shows Up
          </h2>

          <p className="max-w-3xl text-sm leading-7 text-[#5A6E87] md:text-base dark:text-slate-400">
            Your contribution isn&apos;t abstracted behind a layer of corporate
            structure—it shows up directly in outcomes that matter to
            people&apos;s financial lives and organizational compliance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ role, title, desc }) => (
            <div
              key={title}
              className="flex h-full flex-col rounded-xl border-t-4 border-[#009D8C] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 dark:border-[#00C6A9]"
            >
              <span className="mb-4 text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
                {role}
              </span>

              <h3 className="mb-4 text-xl font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

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