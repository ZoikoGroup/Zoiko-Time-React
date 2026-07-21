import Image from "next/image";

const cards = [
  {
    title: "Data ownership",
    description:
      "Your workforce records belong to your organization.",
    link: "Privacy Notice / DPA",
    icon: "/start-free/data.png",
  },
  {
    title: "DPA available",
    description:
      "Data Processing Addendum for eligible customers and deployment types.",
    link: "Trust Center",
    icon: "/start-free/dpa.png",
  },
  {
    title: "Export guarantee",
    description:
      "Export core workforce records subject to plan and retention rules.",
    link: "Data export guide",
    icon: "/start-free/export.png",
  },
  {
    title: "Worker transparency",
    description:
      "ZoikoTime supports clear worker notices and policy-based monitoring disclosure.",
    link: "Transparency Center",
    icon: "/start-free/transparency.png",
  },
];

export default function SecurityGovernance() {
  return (
    <section className="border-y border-zinc-200 bg-emerald-50 py-16 dark:border-slate-700 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-teal-800 dark:text-teal-400">
          Security & Governance
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Icon */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-slate-700">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={24}
                  height={24}
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {card.description}
              </p>

              {/* Link */}
              <button className="text-sm font-semibold text-teal-700 transition hover:text-teal-900 dark:text-teal-400 dark:hover:text-teal-300">
                {card.link} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}