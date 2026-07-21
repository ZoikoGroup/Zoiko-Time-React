const cards = [
  {
    src: "/about-zoikotech/ylock.png",
    title: "Security by Design",
    desc: "Platforms should be built with strong access control, secure workflows, data protection, and responsible security practices embedded from the earliest design stages.",
  },
  {
    src: "/about-zoikotech/gov.png",
    title: "Governance by Design",
    desc: "Enterprise systems should include audit logs, role-based permissions, approval workflows, policy controls, and governance infrastructure as core platform capabilities.",
  },
  {
    src: "/about-zoikotech/ai.png",
    title: "Responsible AI",
    desc: "AI should assist users, summarize patterns, surface risk, and improve workflows while keeping sensitive decisions subject to appropriate human review and oversight.",
  },
  {
    src: "/about-zoikotech/scale.png",
    title: "Scalable Architecture",
    desc: "Products should support growth across teams, customers, jurisdictions, integrations, workflows, and operational complexity without compromising governance or performance.",
  },
  {
    src: "/about-zoikotech/chain.png",
    title: "Product Interoperability",
    desc: "Zoiko Tech platforms should be designed to connect across workforce data, communications, billing, compliance, security, and operational leadership as a coherent ecosystem.",
  },
  {
    src: "/about-zoikotech/user.png",
    title: "Accessible User Experience",
    desc: "Powerful systems should remain usable, understandable, accessible, and clearly structured for the full range of authorized users across roles and technical backgrounds.",
  },
];

export default function EngineeringGovernanceSection() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-[#0D1526] px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold tracking-[1.3px] text-[#00C6A9] dark:text-[#00C6A9]">
            ENGINEERING AND GOVERNANCE
          </span>

          <h2 className="mb-5 text-3xl font-bold text-[#0D1526] dark:text-white md:text-[32px]">
            Built With Engineering Discipline, Governance, and Responsible AI
          </h2>

          <p className="mx-auto max-w-2xl text-[#5A6E87] dark:text-[#FFFFFF8C] leading-7">
            Zoiko Tech's product philosophy is based on the belief that software
            used for serious business decisions must be secure, explainable,
            scalable, governed, and practical for real-world teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#E4EBF4] bg-white p-6 transition-colors duration-300 dark:border-[#FFFFFF14] dark:bg-[#FFFFFF0D]"
            >
              <img
                src={src}
                alt={title}
                className="mb-5 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-lg font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-6 text-[#5A6E87] dark:text-[#FFFFFF8C]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}