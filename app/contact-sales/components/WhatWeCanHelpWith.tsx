import Image from "next/image";

const helpCards = [
  {
    icon: "/WhatWeCanHelpWith/evaluate.png",
    title: "Evaluate ZoikoTime for Your Organization",
    description:
      "Understand how ZoikoTime differs from basic time tracking and whether it fits your workforce model, industry, and governance requirements.",
  },
  {
    icon: "/WhatWeCanHelpWith/pricing.png",
    title: "Discuss Pricing and Plan Fit",
    description:
      "Get clear guidance on plan options, user-based pricing, annual billing, enterprise agreements, and the right tier for your team size.",
  },
  {
    icon: "/WhatWeCanHelpWith/plan.png",
    title: "Plan a Product Demo",
    description:
      "Schedule a tailored demonstration of ZoikoTime's key workflows, governance controls, reporting features, and evidence capabilities.",
  },
  {
    icon: "/WhatWeCanHelpWith/security.png",
    title: "Review Security and Procurement Needs",
    description:
      "Work through security review documentation, DPA requirements, procurement questionnaires, and IT evaluation materials.",
  },
  {
    icon: "/WhatWeCanHelpWith/implementation.png",
    title: "Prepare for Implementation",
    description:
      "Get support for phased rollout planning, configuration sequencing, stakeholder alignment, worker communication, and launch readiness.",
  },
  {
    icon: "/WhatWeCanHelpWith/replace.png",
    title: "Replace Another Platform",
    description:
      "Understand how ZoikoTime supports migration from existing time tracking or workforce management tools, including data and workflow transition.",
  },
];

export default function WhatWeCanHelpWith() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-20 px-5 transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
            What We Can Help With
          </h2>

          <p className="mt-5 max-w-4xl mx-auto text-base text-slate-500 dark:text-slate-400 font-['Plus_Jakarta_Sans']">
            ZoikoTime Sales can guide your organization toward the right
            product path, deployment model, and governance approach.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {helpCards.map((card, index) => (
            <div
              key={index}
              className="relative h-[225px] overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              {/* Top Gradient */}
              <div className="absolute top-0 left-0 h-[3px] w-full bg-gradient-to-r from-teal-600 to-teal-500" />

              <div className="flex h-full flex-col p-6">
                {/* Icon */}
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={32}
                  height={32}
                  className="object-contain"
                />

                {/* Title */}
                <h3 className="mt-8 text-base font-semibold leading-6 text-slate-900 dark:text-white font-['Plus_Jakarta_Sans']">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400 font-['Plus_Jakarta_Sans']">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}