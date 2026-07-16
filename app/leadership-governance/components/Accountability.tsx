const cards = [
  {
    src: "/leadership-governance/clock.png",
    title: "Strategic Stewardship",
    desc: "ZoikoTime's leadership is responsible for the platform's long-term direction, enterprise positioning, responsible AI commitment, security expectations, and governance culture — not just product feature decisions.",
  },
  {
    src: "/leadership-governance/box.png",
    title: "Product Accountability",
    desc: "Product decisions should consider usability, workforce transparency, security, auditability, legal alignment, worker rights, customer trust, and the implications of workforce data processing at every stage.",
  },
  {
    src: "/leadership-governance/scale.png",
    title: "Governance Culture",
    desc: "ZoikoTime's development philosophy emphasizes permissions, review workflows, policy controls, documentation discipline, and governance-led engineering as core platform values — not optional additions.",
  },
  {
    src: "/leadership-governance/hands.png",
    title: "Customer Trust Discipline",
    desc: "Enterprise customers need confidence that ZoikoTime is built for durable use, responsible deployment, long-term product commitment, and serious organizational accountability over time.",
  },
];

export default function Accountability() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            Leadership
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[34px]">
            Leadership as Accountability Infrastructure
          </h2>

          <p className="mx-auto max-w-4xl text-[#5A6E87] dark:text-gray-300 leading-7">
            ZoikoTime is developed by Zoiko Tech Inc., a technology company
            under Zoiko Group Inc. Leadership at ZoikoTime should be understood
            as more than strategy. It is the accountability layer behind
            product direction, governance standards, security expectations,
            customer trust, and responsible platform evolution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 rounded-xl bg-white dark:bg-gray-800 p-6 shadow-sm transition-colors duration-300"
            >
              <img
                src={src}
                alt={title}
                className="h-14 w-14 flex-shrink-0 object-contain"
              />

              <div>
                <h3 className="mb-2 text-lg font-semibold text-[#0D1526] dark:text-white">
                  {title}
                </h3>

                <p className="text-sm leading-6 text-[#5A6E87] dark:text-gray-300">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}