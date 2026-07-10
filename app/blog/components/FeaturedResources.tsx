import React from "react";
import Image from "next/image";

const resources = [
  {
    image: "/FeaturedResources/assurance.png",
    badge: "Executives · Procurement · HR",
    title: "Buyer's Guide to Workforce Assurance Platforms",
    description:
      "Everything procurement and executive teams need to evaluate workforce intelligence software.",
    link: "Read Guide →",
  },
  {
    image: "/FeaturedResources/checklist.png",
    badge: "IT · Security · Legal",
    title: "Enterprise Readiness Checklist",
    description:
      "A structured checklist for evaluating workforce intelligence platforms against enterprise deployment requirements.",
    link: "View Checklist →",
  },
  {
    image: "/FeaturedResources/governance.png",
    badge: "HR · Legal · Compliance",
    title: "Responsible AI and Workforce Analytics Governance Guide",
    description:
      "How to deploy AI-assisted workforce tools with transparency, governance, and human oversight.",
    link: "Read Guide →",
  },
  {
    image: "/FeaturedResources/distribute.png",
    badge: "Admins · Operations",
    title: "Implementation Planning Guide for Distributed Teams",
    description:
      "Step-by-step setup, configuration, and rollout guidance for distributed and hybrid workforces.",
    link: "View Guide →",
  },
];

export default function FeaturedResources() {
  return (
    <section className="bg-white py-20 transition-colors dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
            Featured Resources
          </p>

          <h2 className="mt-5 text-3xl font-semibold text-slate-900 md:text-4xl dark:text-white">
            Essential Guides for Workforce Leaders
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            High-value resources for evaluating, deploying, and governing
            ZoikoTime.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {resources.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Image */}
              <div className="relative h-14 w-14">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Badge */}
              <p className="mt-6 text-[11px] font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                {item.badge}
              </p>

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold leading-7 text-slate-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {item.description}
              </p>

              {/* Link */}
              <button className="mt-8 text-sm font-semibold text-teal-600 transition hover:text-teal-700 dark:hover:text-teal-400">
                {item.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}