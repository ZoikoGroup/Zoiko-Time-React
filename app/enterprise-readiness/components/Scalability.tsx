const cards = [
  {
    src: "/enterprise-readiness/scale.png",
    title: "Team and Department Scaling",
    desc: "Support deployment across departments, project teams, worker groups, managers, admins, and entities as organizational needs grow and evolve over time.",
  },
  {
    src: "/enterprise-readiness/chain.png",
    title: "Integration Readiness",
    desc: "Support integration discussions involving payroll, HR, project management, finance, communications, and identity systems as the deployment matures and requires broader connectivity.",
  },
  {
    src: "/enterprise-readiness/books.png",
    title: "Documentation and Enablement",
    desc: "Product documentation, admin guides, worker guides, implementation resources, FAQs, and help center content support responsible adoption across every role.",
  },
  {
    src: "/enterprise-readiness/sos.png",
    title: "Support and Escalation",
    desc: "Support for customer questions, configuration needs, issue resolution, implementation guidance, and escalation routes appropriate to the customer's plan and deployment scope.",
  },
  {
    src: "/enterprise-readiness/globe.png",
    title: "Multi-Region Operating Awareness",
    desc: "Support for customer conversations around distributed teams, jurisdictional needs, worker transparency requirements, and configuration choices that vary by location.",
  },
  {
    src: "/enterprise-readiness/map.png",
    title: "Long-Term Product Roadmap",
    desc: "ZoikoTime is part of Zoiko Tech's broader strategy for governed workforce intelligence, responsible AI, and enterprise software — not a short-term product experiment.",
  },
];

export default function Scalability() {
  return (
    <section className="bg-white dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            Scalability and Support
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            Built to Grow With Your Organization
          </h2>

          <p className="mx-auto max-w-5xl leading-7 text-[#5A6E87] dark:text-gray-300">
            ZoikoTime is designed to support organizations as they expand from
            initial deployment to broader workforce governance across teams,
            departments, business units, and operational use cases.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-[#E4EBF4] dark:border-gray-700 bg-white dark:bg-gray-800 p-6 transition-all duration-300 hover:shadow-lg hover:border-teal-500/40"
            >
              <img
                src={src}
                alt={title}
                className="mb-4 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-[15px] font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-7 text-[#5A6E87] dark:text-gray-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}