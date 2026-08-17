import React from "react";
import { CheckSquare, LifeBuoy, TrendingUp } from "lucide-react";

export default function LaunchHandoverSection() {
  const cards = [
    {
      icon: CheckSquare,
      title: "Operational acceptance",
      description:
        "Explicit sign-off, runbooks, access, and named owners at launch.",
    },
    {
      icon: LifeBuoy,
      title: "Support transition",
      description:
        "A clear handover to Customer Success and Enterprise Support.",
    },
    {
      icon: TrendingUp,
      title: "Stabilize & continue",
      description:
        "Training dependencies and future governance for the next wave.",
    },
  ];

  return (
    <section className="w-full bg-slate-50/60 dark:bg-slate-900/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-2">
          <p className="text-teal-600 dark:text-teal-400 text-xs font-semibold uppercase tracking-widest">
            Launch, Handover &amp; Continuity
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white">
            From acceptance to durable operation
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-start"
              >
                {/* Icon Container */}
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-teal-700 dark:text-teal-400" />
                </div>

                {/* Text Content */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-slate-800 dark:text-white leading-6">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-5">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}