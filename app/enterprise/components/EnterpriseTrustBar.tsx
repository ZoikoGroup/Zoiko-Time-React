"use client";

import {
  Triangle,
  Circle,
  Sparkles,
  UserRound,
  Check,
} from "lucide-react";

const trustItems = [
  {
    label: "POLICY GOVERNED",
    icon: Triangle,
  },
  {
    label: "HUMAN REVIEWED",
    icon: Circle,
  },
  {
    label: "DETERMINISTIC",
    icon: Sparkles,
  },
  {
    label: "NON-INVASIVE",
    icon: UserRound,
  },
  {
    label: "EVIDENCE BACKED",
    icon: Check,
  },
];

export default function EnterpriseTrustBar() {
  return (
    <section className="w-full bg-sky-950 py-8 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:px-6">

        {/* Heading */}
        <div className="flex w-full justify-center">
          <p className="text-center text-sm font-bold uppercase leading-5 tracking-wider text-white/95">
            Trusted by enterprises that value truth and trust
          </p>
        </div>

        {/* Trust Items */}
        <div className="grid w-full grid-cols-2 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="flex items-center justify-center gap-2 text-white"
              >
                <Icon
                  size={20}
                  strokeWidth={1.7}
                  className="shrink-0 text-white"
                />

                <span className="text-xs font-bold leading-4 text-white">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}