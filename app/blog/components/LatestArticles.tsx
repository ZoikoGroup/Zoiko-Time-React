"use client";

import Image from "next/image";
import { useState } from "react";

const articles = [
  {
    category: "Workforce Assurance",
    title:
      "Time Tracking vs. Workforce Assurance: What Enterprise Buyers Need to Know",
    description:
      "The difference between recording hours and building defensible workforce intelligence — and why it matters for payroll, billing, and compliance teams.",
    image: "/LatestArticles/workforce.png",
    read: "6 min read",
  },
  {
    category: "Professional Services",
    title:
      "How Professional Services Firms Can Improve Billable Time Confidence",
    description:
      "A practical guide to reducing write-offs, improving utilization visibility, and building stronger client billing evidence.",
    image: "/LatestArticles/services.png",
    read: "7 min read",
  },
  {
    category: "Responsible AI",
    title:
      "Responsible AI Principles for Workforce Intelligence Platforms",
    description:
      "How AI should support—not replace—accountable human decision-making in workforce oversight.",
    image: "/LatestArticles/ai.png",
    read: "5 min read",
  },
  {
    category: "HR Teams",
    title:
      "What HR Teams Should Know Before Deploying Workforce Analytics",
    description:
      "Key governance, transparency, and worker-rights considerations for HR leaders evaluating workforce intelligence tools.",
    image: "/LatestArticles/hr.png",
    read: "8 min read",
  },
  {
    category: "Worker Transparency",
    title:
      "A Practical Guide to Screenshots, Redaction, and Worker Transparency",
    description:
      "How to configure screenshot controls responsibly, communicate them clearly, and maintain worker trust.",
    image: "/LatestArticles/transparency.png",
    read: "6 min read",
  },
  {
    category: "Audit Evidence",
    title:
      "Why Audit-Ready Workforce Evidence Matters for Distributed Teams",
    description:
      "Building workforce records that support payroll review, billing disputes, HR investigations, and compliance needs.",
    image: "/LatestArticles/audit.png",
    read: "7 min read",
  },
];

export default function LatestArticles() {
  const [showAll, setShowAll] = useState(false);

  const visibleArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <section className="w-full bg-white px-4 py-16 dark:bg-slate-950 sm:px-6 sm:py-20 md:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <div className="mb-5 flex items-center gap-3">
            <div className="h-px w-5 bg-teal-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 sm:text-xs">
              Latest Articles
            </span>

            <div className="h-px w-5 bg-teal-600" />
          </div>

          <h2 className="max-w-3xl text-center text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl dark:text-white">
            Fresh Insights for Workforce Leaders
          </h2>

          <p className="mt-5 max-w-2xl text-center text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-7 dark:text-slate-400">
            Explore the latest thinking on workforce assurance, time
            integrity, governance, and responsible visibility.
          </p>
        </div>

        {/* Articles */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {visibleArticles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-teal-500/40"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden sm:h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-wider text-teal-600 sm:text-xs">
                  {article.category}
                </p>

                <h3 className="mt-3 text-base font-semibold leading-6 text-slate-900 sm:text-lg dark:text-white">
                  {article.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {article.description}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2 text-[11px] text-slate-400 sm:mt-6 sm:text-xs dark:text-slate-500">
                  <span>ZoikoTime Editorial</span>
                  <span>•</span>
                  <span>{article.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && (
          <div className="mt-12 flex justify-center sm:mt-16">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-teal-600 hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-teal-500 dark:hover:text-teal-400 sm:px-8"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}