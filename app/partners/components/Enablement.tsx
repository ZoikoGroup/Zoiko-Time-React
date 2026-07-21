import {
  FileText,
  TrendingUp,
  ShieldCheck,
  Blocks,
  BadgeCheck,
} from "lucide-react";

const cards = [
  {
    title: "Product Education",
    desc: "Guidance on capabilities, positioning, customer use cases, governance philosophy, pricing structure, and enterprise value.",
    icon: FileText,
  },
  {
    title: "Sales & Referral Support",
    desc: "Materials to identify qualified opportunities, explain value, and route prospects into the right sales process.",
    icon: TrendingUp,
  },
  {
    title: "Implementation Resources",
    desc: "Configuration, rollout planning, admin enablement, worker communication, and adoption support where applicable.",
    icon: ShieldCheck,
  },
  {
    title: "Technical & Integration",
    desc: "Structured conversations for technology partners exploring integration requirements, data flows, and feasibility.",
    icon: Blocks,
  },
  {
    title: "Governance & Trust Materials",
    desc: "Access to Enterprise Readiness, Responsible AI, Security Addendum, Implementation Guide, and documentation.",
    icon: BadgeCheck,
  },
];

export default function Enablement() {
  return (
    <section className="bg-[#F6F9F9] dark:bg-slate-950 px-4 sm:px-6 lg:px-10 xl:px-20 py-12 md:py-16 transition-colors duration-300">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-[1.3px] text-[#009D8C] mb-3">
            Partner Enablement
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0D1526] dark:text-white mb-4">
            How Qualified Partners Are Supported
          </h2>

          <p className="max-w-2xl mx-auto text-[#5A6E87] dark:text-slate-400 text-base leading-relaxed">
            ZoikoTime provides enablement resources to help qualified partners
            educate customers, support implementations, and deliver trusted
            workforce intelligence solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl bg-white dark:bg-slate-900 border border-transparent dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 p-6"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F6F2] dark:bg-[#009D8C]/15">
                <Icon className="h-5 w-5 text-[#009D8C]" />
              </div>

              <h3 className="mb-3 text-lg font-semibold text-[#0D1526] dark:text-white">
                {title}
              </h3>

              <p className="text-sm leading-6 text-[#5A6E87] dark:text-slate-400">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}