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

const searchableItems = [
  {
    id: "REC-1204",
    type: "Record",
    title: "Workforce attendance record",
    description: "Material event recorded this week",
  },
  {
    id: "EVT-8842",
    type: "Event",
    title: "Attendance correction event",
    description: "Open review item",
  },
  {
    id: "PKG-2048",
    type: "Package",
    title: "Governed evidence package",
    description: "Evidence package available for export",
  },
  {
    id: "REC-1187",
    type: "Record",
    title: "Shift compliance record",
    description: "Reconciled workforce record",
  },
];

export default function ProductUi() {
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState("");

  const filteredItems = searchableItems.filter((item) => {
    const query = search.toLowerCase().trim();

    if (!query) return false;

    return (
      item.id.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query) ||
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  });

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

              <p className="mt-2 text-xs text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative mt-6">
          <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 transition focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-600/10 dark:border-slate-800 dark:bg-slate-950">
            <Image
              src="/evidence-ledger/icon-search.svg"
              alt=""
              width={14}
              height={14}
              aria-hidden="true"
            />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search records, events, or package IDs…"
              className="w-full bg-transparent text-xs text-slate-900 outline-none placeholder:text-slate-500 dark:text-white"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="shrink-0 text-xs text-slate-400 transition hover:text-slate-700 dark:hover:text-white"
                aria-label="Clear search"
              >
                Clear
              </button>
            )}
          </div>

          {/* Search Results */}
          {search.trim() && (
            <div className="absolute left-0 right-0 z-20 mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
              {filteredItems.length > 0 ? (
                <div className="max-h-[320px] overflow-y-auto">
                  {filteredItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="flex w-full items-start gap-4 border-b border-gray-100 px-4 py-4 text-left transition last:border-b-0 hover:bg-gray-50 dark:border-slate-800 dark:hover:bg-slate-800"
                      onClick={() => {
                        setSearch(item.id);
                      }}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-teal-700 dark:text-teal-400">
                            {item.type}
                          </span>

                          <span className="text-[11px] text-slate-400">
                            {item.id}
                          </span>
                        </div>

                        <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                          {item.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-6 text-center">
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    No results found
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Try a record ID, event ID, package ID, or keyword.
                  </p>
                </div>
              )}
            </div>
          )}
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