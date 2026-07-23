import Image from "next/image";

const cards = [
  {
    src: "/enterprise-readiness/lock.png",
    title: "Security Review",
    desc: "Support for access control explanations, data handling information, authentication practices, administrative separation, and security documentation for IT and InfoSec reviewers.",
  },
  {
    src: "/enterprise-readiness/weigh.png",
    title: "Legal Review",
    desc: "Support for subscription terms, data retention practices, legal hold workflows, workforce data usage explanations, DPA provisions, and legal review documentation.",
  },
  {
    src: "/enterprise-readiness/box.png",
    title: "Procurement Review",
    desc: "Support for pricing discussions, contract review, stakeholder evaluation, commercial documentation, budget planning, and vendor assessment processes.",
  },
  {
    src: "/enterprise-readiness/people.png",
    title: "HR and Worker Policy Review",
    desc: "Support for worker-facing policy alignment, transparency expectations, screenshot settings where relevant, worker guides, and responsible deployment documentation.",
  },
  {
    src: "/enterprise-readiness/rack.png",
    title: "Finance Review",
    desc: "Support for timesheet integrity, payroll confidence, client billing evidence, utilization reporting, cost review, and project-level workforce analytics.",
  },
  {
    src: "/enterprise-readiness/monitor.png",
    title: "IT Review",
    desc: "Support for implementation planning, user access setup, account structure, integrations, administrative roles, device requirements, and technical configuration guidance.",
  },
];

export default function Security() {
  return (
    <section className="bg-white px-6 py-14 transition-colors duration-300 dark:bg-slate-900 md:px-12 lg:px-20 xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[1.3px] text-[#00C6A9]">
            Security and Procurement
          </span>

          <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            Designed to Support Enterprise Buyer Review
          </h2>

          <p className="mx-auto max-w-4xl text-sm leading-7 text-slate-600 dark:text-white/60 md:text-base">
            Enterprise buyers often need structured information before adopting a
            workforce intelligence platform. ZoikoTime is designed to support
            review processes involving security, procurement, HR, legal,
            finance, operations, and compliance stakeholders.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ src, title, desc }) => (
            <div
              key={title}
              className="rounded-[14px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00C6A9]/40 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-[#00C6A9]/30 dark:hover:bg-white/10"
            >
              <Image
                src={src}
                alt={title}
                width={48}
                height={48}
                className="mb-4"
              />

              <h3 className="mb-2 text-[15px] font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-6 text-slate-600 dark:text-white/60">
                {desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#"
            className="text-sm font-semibold text-[#00C6A9] transition-colors hover:text-teal-600 dark:hover:text-teal-300"
          >
            Review Security Addendum →
          </a>
        </div>
      </div>
    </section>
  );
}