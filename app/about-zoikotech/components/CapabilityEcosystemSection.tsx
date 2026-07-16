const cards = [
  {
    src: "/about-zoikotech/people.png",
    title: "Workforce and Productivity Infrastructure",
    desc: "Platforms such as ZoikoTime focus on verified time records, workforce intelligence, activity signals, operational evidence, payroll support, and governance controls.",
  },
  {
    src: "/about-zoikotech/sms.png",
    title: "Communications and Collaboration",
    desc: "Zoiko Tech develops communication and collaboration capabilities that support messaging, team coordination, customer engagement, and digital interaction across platforms.",
  },
  {
    src: "/about-zoikotech/weigh.png",
    title: "Enterprise Operations and Compliance",
    desc: "Zoiko Tech platforms support business operations, accounting, HR, compliance, tax, regulatory workflows, and governed enterprise process management.",
  },
  {
    src: "/about-zoikotech/dish.png",
    title: "Telecom and Digital Infrastructure",
    desc: "Zoiko Tech builds telecom-grade infrastructure, OSS/BSS capability, digital provisioning, network management, and connectivity platform components.",
  },
  {
    src: "/about-zoikotech/lock.png",
    title: "AI, Cybersecurity, and Trust Systems",
    desc: "Zoiko Tech develops AI, cybersecurity, fraud protection, monitoring, governance, responsible oversight, and trust infrastructure across its software ecosystem.",
  },
  {
    src: "/about-zoikotech/card.png",
    title: "Payments and Financial Infrastructure",
    desc: "Zoiko Tech's platform ecosystem includes intelligent payments and financial infrastructure capabilities that support commerce, operational finance, and transaction management.",
  },
];

export default function CapabilityEcosystemSection() {
  return (
    <section className="bg-[#F4F7FA] dark:bg-gray-900 px-6 py-12 md:px-12 lg:px-20 xl:px-32 transition-colors duration-300">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold tracking-[1.3px] text-[#009D8C] dark:text-teal-400">
            ZOIKO TECH CAPABILITY AREAS
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            Platform Ecosystem That Strengthens ZoikoTime
          </h2>

          <p className="mx-auto max-w-4xl text-[#5A6E87] dark:text-gray-300 leading-7">
            Zoiko Tech&apos;s broader platform ecosystem gives ZoikoTime a
            stronger foundation across AI, governance, compliance,
            communications, infrastructure, security, and enterprise
            operations.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border-t-4 border-teal-500 bg-white dark:bg-gray-800 shadow-sm p-6 transition-colors duration-300"
            >
              <img
                src={src}
                alt={title}
                className="mb-5 h-14 w-14 object-contain"
              />

              <h3 className="mb-3 text-lg font-semibold text-[#0D1526] dark:text-white">
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