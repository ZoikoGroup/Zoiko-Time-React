const cards = [
  {
    src: "/about-zoikotech/people.png",
    title: "Workforce and Productivity Infrastructure",
    desc: "Platforms such as ZoikoTime focus on verified time records, workforce intelligence, activity signals, operational evidence, payroll support, and governance controls.",
  },
  {
    src: "/about-zoikotech/sms.png",
    title: "Communications and Collaboration",
    desc: "Zoiko Tech develops communication and collaboration capabilities that support messaging, team coordination, customer engagement, and digital interaction across platforms."
  },
  {
    src: "/about-zoikotech/weigh.png",
    title: "Enterprise Operations and Compliance",
    desc: "Zoiko Tech platforms support business operations, accounting, HR, compliance, tax, regulatory workflows, and governed enterprise process management."
  },
  {
    src: "/about-zoikotech/dish.png",
    title: "Telecom and Digital Infrastructure",
    desc: "Zoiko Tech builds telecom-grade infrastructure, OSS/BSS capability, digital provisioning, network management, and connectivity platform components."
  },
  {
    src: "/about-zoikotech/lock.png",
    title: "AI, Cybersecurity, and Trust Systems",
    desc: "Zoiko Tech develops AI, cybersecurity, fraud protection, monitoring, governance, responsible oversight, and trust infrastructure across its software ecosystem."
  },
  {
    src: "/about-zoikotech/card.png",
    title: "Payments and Financial Infrastructure",
    desc: "Zoiko Tech's platform ecosystem includes intelligent payments and financial infrastructure capabilities that support commerce, operational finance, and transaction management."
  },
];

export default function CapabilityEcosystemSection() {
  return (
    <section className="bg-slate-50 px-6 py-12 md:px-54">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[1.30px] text-[#009D8C] mb-3">
            ZOIKO TECH CAPABILITY AREAS
          </span>
          <h2 className="text-4xl font-semibold text-[#0D1526] mb-5">
            Platform Ecosystem That Strengthens ZoikoTime
          </h2>
          <p className="text-[#5A6E87] max-w-220 mx-auto">
            Zoiko Tech's broader platform ecosystem gives ZoikoTime a
            stronger foundation across AI, governance, compliance,
            communications, infrastructure, security, and enterprise
            operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-lg border-t-4 border-teal-500 shadow-sm p-6"
            >
              <img src={src} alt="image" className="mb-4" />
              <h3 className="font-semibold text-[#0D1526] text-[15px] max-w-70 mb-2">{title}</h3>
              <p className="text-sm text-[#5A6E87] max-w-73">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
