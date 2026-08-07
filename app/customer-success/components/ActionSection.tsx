
const CARDS = [
  {
    title: "Owned actions",
    desc: "Each risk or opportunity becomes a tracked action with an owner and due date.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-teal-600 dark:text-teal-400">
        <path d="M3 10l4 4L17 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Clear escalations",
    desc: "Escalation paths are explicit, with context and accountability — never a black box.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-teal-600 dark:text-teal-400">
        <path d="M3 14l6-6 4 4 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Governed & evidenced",
    desc: "Actions and outcomes contribute to governed evidence — no admissibility claims.",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-teal-600 dark:text-teal-400">
        <path d="M10 2l7 3v5c0 5-3.5 7.5-7 8-3.5-.5-7-3-7-8V5l7-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ActionSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/40 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Action
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Risks become owned, tracked actions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            No silent drops and no automated consequences — every risk turns
            into an accountable action with an owner and a next step.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 dark:bg-teal-900/30">
                {card.icon}
              </div>
              <h3 className="mt-5 text-base font-semibold text-slate-800 dark:text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}