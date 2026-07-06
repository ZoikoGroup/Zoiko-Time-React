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
    <section className="bg-[#0D1526] px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-[1.3px] text-[#00C6A9] mb-3">
            ENGINEERING AND GOVERNANCE
          </span>
          <h2 className="text-3xl md:text-[28px] font-bold text-white mb-5">
            Built With Engineering Discipline, Governance, and Responsible AI
          </h2>
          <p className="text-[#FFFFFF8C] max-w-126 mx-auto">
            Zoiko Tech's product philosophy is based on the belief that software
            used for serious business decisions must be secure, explainable,
            scalable, governed, and practical for real-world teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="bg-[#FFFFFF0D] border border-[#FFFFFF14] rounded-[14px] p-5"
            >
              <img src={src} alt="image" className="mb-3" />
              <h3 className="font-semibold text-[15px] text-white mb-2">{title}</h3>
              <p className="text-[13px] text-[#FFFFFF8C] max-w-72">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
