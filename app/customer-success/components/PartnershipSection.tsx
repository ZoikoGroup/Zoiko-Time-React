const CARDS = [
  {
    title: "Onboarding & enablement",
    desc: "Confirming scope, roles, and a success plan your organization owns.",
    img: "/customer-success/image (4).png",
  },
  {
    title: "Success reviews",
    desc: "Reviewing explainable signals and outcomes together, on a cadence you set.",
    img: "/customer-success/image (5).png",
  },
  {
    title: "Ongoing support",
    desc: "Turning risks into owned actions — with clear next steps and accountability.",
    img: "/customer-success/image (6).png",
  },
];

export default function PartnershipSection() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/40 py-16 sm:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            A Partnership, Not A Portal
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            Success built around your outcomes
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Illustrative imagery of the working relationship — onboarding,
            review, and ongoing support.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
            >
              <img src={card.img} alt={card.title} className="h-48 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}