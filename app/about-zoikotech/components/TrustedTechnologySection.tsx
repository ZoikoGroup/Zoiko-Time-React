const features = [
  {
    title: "🏗 Enterprise Platform Builder",
    desc: "Zoiko Tech develops software intended to support real business operations, customer experiences, and organizational workflows across multiple industries and jurisdictions.",
  },
  {
    title: "🤖 AI and Automation Company",
    desc: "Zoiko Tech applies AI to improve productivity, decision support, workflow automation, user guidance, and operational intelligence across its software platforms.",
  },
  {
    title: "🛡 Governance-First Technology Organization",
    desc: "Zoiko Tech emphasizes responsible AI, auditability, human oversight, access controls, permissioned workflows, and governance-led product development.",
  },
];

export default function TrustedTechnologySection() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
        {/* Left Content */}
        <div>
          <span className="mb-4 inline-block text-xs font-semibold tracking-[1px] text-[#009D8C] dark:text-teal-400">
            WHO ZOIKO TECH IS
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#2A3D55] dark:text-white md:text-[34px]">
            Building Trusted Technology for Modern Organizations
          </h2>

          <p className="mb-4 max-w-xl text-[#5A6E87] dark:text-gray-300 leading-7">
            Zoiko Tech Inc. is the technology arm of Zoiko Group Inc., focused
            on building AI-powered software platforms, enterprise systems,
            digital infrastructure, and governed technology products for
            businesses, institutions, and consumers.
          </p>

          <p className="mb-6 max-w-xl text-[#5A6E87] dark:text-gray-300 leading-7">
            Zoiko Tech develops platforms across workforce intelligence,
            business operations, communications, telecom infrastructure,
            compliance, cybersecurity, payments, AI, media, and digital
            ecosystems. Its work is shaped by a commitment to security,
            usability, governance, scalability, and responsible innovation.
          </p>

          <a
            href="#"
            className="font-medium text-[#009D8C] transition hover:underline dark:text-teal-400"
          >
            Visit ZoikoTech.com for the broader company portfolio ↗
          </a>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6">
          {features.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-xl bg-white dark:bg-gray-800 border border-transparent dark:border-gray-700 p-6 shadow-sm transition-colors duration-300"
            >
              <h3 className="mb-2 text-base font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-6 text-[#5A6E87] dark:text-gray-300">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}