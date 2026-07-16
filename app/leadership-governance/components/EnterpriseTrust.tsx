const cards = [
  {
    src: "/leadership-governance/build.png",
    title: "Enterprise Readiness",
    desc: "ZoikoTime is designed to support serious organizational deployment across administrators, departments, worker categories, jurisdictions, and governance requirements.",
  },
  {
    src: "/leadership-governance/scale.png",
    title: "Implementation Discipline",
    desc: "Successful rollout depends on configuration, policy setup, permission design, user education, worker communication, and ongoing adoption monitoring — not just product access.",
  },
  {
    src: "/leadership-governance/lock.png",
    title: "Security Review Support",
    desc: "Enterprise customers may require documentation, security addenda, access control details, data handling explanations, and governance resources to support procurement and IT review.",
  },
  {
    src: "/leadership-governance/books.png",
    title: "Documentation and Guides",
    desc: "Product documentation, admin guides, worker guides, FAQs, help center content, and implementation resources support responsible adoption across every role in the organization.",
  },
];

export default function EnterpriseTrust() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            Enterprise Trust
          </span>

          <h2 className="mb-6 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            Governance That Supports Enterprise Confidence
          </h2>

          <p className="mx-auto max-w-5xl text-[#5A6E87] dark:text-gray-300 leading-7">
            Enterprise buyers need more than feature lists. They need confidence
            that ZoikoTime can support implementation planning, security review,
            access control, documentation, workforce transparency, reporting
            needs, and long-term operating requirements.
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