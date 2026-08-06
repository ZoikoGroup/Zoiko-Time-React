import React from 'react';
import { ClipboardCheck, UserCheck, Network, ShieldCheck, Globe, SquareSquare } from 'lucide-react';

export default function ValueStrip() {
  const features = [
    {
      title: "Operational readiness",
      description: "Know which required records are complete before cut-off.",
      icon: SquareSquare,
    },
    {
      title: "Visible ownership",
      description: "Every exception has a neutral state, an owner, and a history.",
      icon: UserCheck,
    },
    {
      title: "Distributed coordination",
      description: "Remote, hybrid, field, and contractor work without monitoring screens.",
      icon: Globe,
    },
    {
      title: "Privacy by design",
      description: "No screenshots. No keystroke content. No application tracking.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-11 px-6 lg:px-32 transition-colors duration-200">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <div key={idx} className="flex items-start gap-3.5">
              {/* Icon Container */}
              <div className="w-9 h-9 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}