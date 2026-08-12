import React from 'react';
import Link from 'next/link';

const pillars = [
  {
    title: "Security",
    description: "Access, scoping, and operational controls behind the insight layer.",
  },
  {
    title: "Privacy",
    description: "Purpose limitation, minimization, retention, and worker rights.",
  },
  {
    title: "Roles & access",
    description: "Who may define metrics, view scopes, annotate, and share.",
  },
  {
    title: "Source health",
    description: "Freshness and availability, shown honestly during failure.",
  },
  {
    title: "Administrative controls",
    description: "Definition ownership, thresholds, and change governance.",
  },
  {
    title: "Human-in-Command",
    description: "Where consequential authority sits and stays.",
  },
  {
    title: "Procurement",
    description: "Controlled evidence and current commercial terms.",
  },
  {
    title: "Implementation",
    description: "Readiness review, pilot, rollout, and adoption governance.",
  },
];

const customerLinks = [
  "Open Insights",
  "Documentation",
  "Service Status",
  "Product Updates",
  "Help Center",
  "Enterprise Support",
];

const customerLinkHrefs: Record<string, string> = {
  "Open Insights": "/workforce-record-insights",
  Documentation: "/product-documentation",
  "Service Status": "/trust-center",
  "Product Updates": "/blog",
  "Help Center": "/help-center",
  "Enterprise Support": "/contact-sales",
};

export default function EnterpriseReadinessSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        {/* Section Header */}
        <div className="max-w-3xl text-center flex flex-col gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
            Enterprise Readiness &amp; Evaluation
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-tight">
            What a Governed Insight Programme Depends On
          </h2>
        </div>

        {/* 8-Pillar Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans">
                {pillar.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lower Content Grid: Readiness Review & Customer Hub */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-4">
          {/* Left Side: Evaluate with a readiness review */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider font-sans">
                Evaluate with a readiness review
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-slate-900 dark:text-slate-50 leading-snug">
                Records first, metrics second
              </h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-normal leading-relaxed font-sans">
              A controlled readiness review covers records, definitions, roles, worker rights, context, thresholds, permissions, review workflows, and implementation governance - in that order. Buying an insight layer before the records are governed produces confident numbers about nothing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Link
                href="/request-enterprise-demo"
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold font-sans text-sm sm:text-base rounded-xl transition-colors shadow-sm"
              >
                Get a demo
              </Link>
              <Link
                href="/contact-sales"
                className="px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold font-sans text-sm sm:text-base rounded-xl border border-slate-200 dark:border-slate-800 transition-colors shadow-sm"
              >
                Talk to sales
              </Link>
            </div>
          </div>

          {/* Right Side: Customer Hub Card */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold font-sans border-b border-slate-100 dark:border-slate-800 pb-3">
              Already a customer?
            </h3>

            {/* Links List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {customerLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={customerLinkHrefs[link]}
                  className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold font-sans text-sm transition-colors group py-1"
                >
                  <span>{link}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              ))}
            </div>

            {/* Empty State Callout */}
            <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2 text-center">
              <span className="text-slate-800 dark:text-slate-200 text-sm font-bold font-sans">
                Customer evidence
              </span>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
                No customer names, logos, counts, quotes, benchmarks, or outcome metrics appear on this page. None has been verified and approved for this destination. This is an intentional empty state.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
