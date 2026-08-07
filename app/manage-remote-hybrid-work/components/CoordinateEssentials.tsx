"use client";

import Image from "next/image";

const cards = [
  {
    image: "/manage-remote-hybrid-work/schedules.png",
    title: "Plan work patterns",
    description:
      "Plan on-site, remote, and hybrid patterns by person, team, and zone — approved and versioned, never silently changed.",
  },
  {
    image: "/manage-remote-hybrid-work/availability.png",
    title: "Coordinate coverage",
    description:
      "Build coverage from declared availability and approved schedules, and see gaps across time zones — not live location tracking.",
  },
  {
    image: "/manage-remote-hybrid-work/privacy.png",
    title: "Respect privacy",
    description:
      "Show workers exactly what is and isn't collected, with a hard boundary against monitoring and productivity scoring.",
  },
];

export default function CoordinateEssentials() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 dark:text-teal-400">
            What It Does
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Coordinate the essentials
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_6px_18px_rgba(14,31,61,0.05)] transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Screenshot Image */}
              <Image
                src={card.image}
                alt={card.title}
                width={384}
                height={220}
                className="w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
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