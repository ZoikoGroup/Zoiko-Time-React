"use client";

import React from "react";
import { Check } from "lucide-react";

export default function ReviewDeliverables() {
  const items = [
    {
      title: "Written follow-up summary",
      description: "of findings and recommendations.",
    },
    {
      title: "Recommended deployment route",
      description: "for your governance model.",
    },
    {
      title: "Documentation checklist",
      description: "for procurement and legal.",
    },
    {
      title: "Integration considerations",
      description: "for your existing stack.",
    },
    {
      title: "Quote or pilot next step",
      description: "where appropriate.",
    },
    {
      title: "Buyer enablement assets",
      description: "mapped to each stakeholder.",
    },
  ];

  return (
    <section className="bg-white py-16 transition-colors duration-300 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            After The Review
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            What you receive
          </h2>
        </div>

        {/* List */}
        <div className="grid gap-x-16 gap-y-8 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                <Check className="h-4 w-4 text-teal-600" />
              </div>

              <p className="text-base leading-7">
                <span className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </span>{" "}
                <span className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}