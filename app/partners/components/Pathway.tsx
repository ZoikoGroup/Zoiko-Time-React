import {
  Users,
  PanelsTopLeft,
  Shield,
  Blocks,
  Star,
  BadgeCheck,
} from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Referral Partners",
    desc: "For trusted advisors, consultants, agencies, and professional networks that introduce qualified organizations to ZoikoTime.",
  },
  {
    icon: PanelsTopLeft,
    title: "Channel & Reseller",
    desc: "For organizations that can responsibly represent ZoikoTime to qualified customers in defined markets, sectors, or regions.",
  },
  {
    icon: Shield,
    title: "Implementation Partners",
    desc: "For firms that help customers configure, launch, train, and scale ZoikoTime across teams and departments.",
  },
  {
    icon: Blocks,
    title: "Technology & Integration",
    desc: "For platforms that connect ZoikoTime to payroll, HRIS/HCM, finance, identity, compliance, and analytics workflows.",
  },
  {
    icon: Star,
    title: "Strategic Alliances",
    desc: "For organizations with broader commercial, regional, enterprise, or sector-specific alignment.",
  },
  {
    icon: BadgeCheck,
    title: "Ecosystem Partners",
    desc: "Payroll, HR, finance, legal, and operations ecosystem participants who extend customer value.",
  },
];

export default function Pathway() {
  return (
    <section className="bg-white px-6 py-12 transition-colors duration-300 dark:bg-slate-950 md:px-12 lg:px-20 xl:px-32 2xl:px-54">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C]">
            Partner Pathways
          </span>

          <h2 className="mb-5 text-3xl font-semibold text-[#0D1526] dark:text-white md:text-[30px]">
            Find the right partnership pathway
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-[#5A6E87] dark:text-slate-400 md:text-base">
            ZoikoTime evaluates opportunities based on strategic fit,
            customer value, partner credibility, implementation capability,
            market relevance, and responsible positioning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F6F2] dark:bg-teal-500/10">
                <Icon className="h-5 w-5 text-[#009D8C]" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-7 text-[#5A6E87] dark:text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center md:mt-20">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B8675] transition-colors hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
          >
            Explore Enterprise Readiness
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}