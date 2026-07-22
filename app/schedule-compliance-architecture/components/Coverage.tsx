"use client";

import React from "react";
import {
  Menu,
  BadgeCheck,
  Lock,
  Globe,
  Check,
} from "lucide-react";

export default function Coverage() {
  const cards = [
    {
      icon: <Menu className="h-5 w-5 text-teal-500 stroke-[2.2]" />,
      title: "Workforce policy architecture",
      desc: "Jurisdiction-aware policies, breaks, overtime, and approvals.",
    },
    {
      icon: <BadgeCheck className="h-5 w-5 text-teal-500 stroke-[2.2]" />,
      title: "Evidence & audit posture",
      desc: "How records become defensible, audit-ready evidence.",
    },
    {
      icon: <Lock className="h-5 w-5 text-teal-500 stroke-[2.2]" />,
      title: "Security & identity model",
      desc: "RBAC, SSO/SAML, and security-first architecture.",
    },
    {
      icon: <Globe className="h-5 w-5 text-teal-500 stroke-[2.2]" />,
      title: "Data residency & retention",
      desc: "Residency, retention, and legal-hold requirements.",
    },
    {
      icon: <Check className="h-5 w-5 text-teal-500 stroke-[2.8]" />,
      title: "Rollout & procurement readiness",
      desc: "Training, deployment route, and procurement path.",
    },
  ];

  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#0F2D63] dark:text-white md:text-5xl">
            What the review covers
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-[0_6px_20px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ECFBF8]">
                {card.icon}
              </div>

              <h3 className="mt-6 text-[19px] font-semibold text-[#0F2247] dark:text-white">
                {card.title}
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-gray-500 dark:text-slate-400">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}