"use client";

import { useState } from "react";
import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const tabs = [
  "A. Ledger Overview",
  "B. Selected Record Timeline",
  "C. Version Compare & Correction",
  "D. Governed Evidence Package",
];

const stats = [
  { value: "1,204", label: "Records with material events this week" },
  { value: "18", label: "Open review items" },
  { value: "96%", label: "Evidence available (this org, this period)" },
  { value: "3", label: "Reconciliation items needing review" },
];

export default function ProductUi() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Product UI"
          title="See the product, not a mockup of a promise."
          description="Synthetic organizations, IDs, and evidence throughout — no real names, photos, or confidential content."
          descriptionClassName="max-w-[610px]"
        />

        {/* Tabs */}
        <div className="mt-12 flex flex-wrap gap-3">
          {tabs.map((tab, index) => {
            const isActive = index === active;

            return (
              <button
                key={tab}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(index)}
                className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition ${
                  isActive
                    ? "border-sky-950 bg-sky-950 text-white dark:border-teal-600 dark:bg-teal-600"
                    : "border-gray-200 bg-zinc-100 text-slate-600 hover:border-teal-600 hover:text-teal-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[10px] border border-gray-200 px-4 py-4 dark:border-slate-800"
            >
              <p
                className={`${poppins.className} text-lg font-bold text-sky-950 dark:text-white`}
              >
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search shell */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-3 dark:border-slate-800">
          <Image
            src="/evidence-ledger/icon-search.svg"
            alt=""
            width={14}
            height={14}
            aria-hidden="true"
          />

          <span className="text-xs text-slate-500">
            Search records, events, or package IDs…
          </span>
        </div>

        <p className="mt-5 text-xs leading-5 text-slate-500">
          Overview shell: left navigation (Records, Events, Evidence, Review
          &amp; Corrections, Exports, Reconciliation) with scope and date
          controls at top. Counts and results are server-authorized per viewer.
        </p>
      </div>
    </section>
  );
}
