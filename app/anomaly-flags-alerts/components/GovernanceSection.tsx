import React from 'react';

const evidenceCards = [
  {
    title: "Trust Center",
    description: "Entry point for assurance evidence.",
  },
  {
    title: "Security",
    description: "Access, scoping, logging, incident readiness.",
  },
  {
    title: "Privacy",
    description: "Purpose, minimization, retention, worker rights.",
  },
  {
    title: "Human-in-Command",
    description: "Where consequential authority sits and stays.",
  },
  {
    title: "Administrative Controls",
    description: "Definition ownership, routing, and change governance.",
  },
  {
    title: "Accessibility",
    description: "Tested scope, methods, known limitations.",
  },
  {
    title: "System Status",
    description: "Authoritative operational state and delivery health.",
  },
  {
    title: "Procurement",
    description: "Controlled evidence and commercial terms.",
  },
];

const readinessQuestions = [
  "Who owns each anomaly definition, and who reviews it?",
  "Which reviewers have coverage, and what happens when they do not?",
  "How will workers be told that own-record flags exist?",
  "What is your escalation route when a correction is declined?",
  "Which source owners are accountable for feed health?",
  "What resolution reasons will your organization actually use?",
];

const customerLinks = [
  "Open Flag Inbox",
  "Documentation",
  "Service Status",
  "Product Updates",
  "Help Center",
  "Enterprise Support",
];

export default function EvidenceAndReadinessSection() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 sm:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 sm:gap-16">
        
        {/* Section Header */}
        <div className="max-w-3xl text-center flex flex-col gap-3">
          <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider  ">
            Trust, Enterprise Readiness &amp; Procurement
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold   text-slate-900 dark:text-slate-50 leading-tight">
            Where the Evidence Lives
          </h2>
        </div>

        {/* 8-Card Evidence Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {evidenceCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
            >
              <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold  ">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm   leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Lower Content Grid: Readiness Questions & Customer Hub */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-4">
          
          {/* Left Side: Enterprise Readiness Questions */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider  ">
                Enterprise readiness questions
              </span>
              <h3 className="text-xl sm:text-2xl font-bold   text-slate-900 dark:text-slate-50 leading-snug">
                Worth answering before you configure a single definition
              </h3>
            </div>

            {/* Questions Checklist */}
            <ul className="flex flex-col gap-3">
              {readinessQuestions.map((question, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 mt-2.5" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm sm:text-base   leading-relaxed">
                    {question}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-slate-500 dark:text-slate-400 text-xs   leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-800">
              Availability, packaging, regions, channels, connectors, retention, and service levels come from the current approved registry. This page does not state them.
            </p>
          </div>

          {/* Right Side: Customer Links & Empty State Banner */}
          <div className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
            <h3 className="text-slate-900 dark:text-slate-100 text-base font-bold   border-b border-slate-100 dark:border-slate-800 pb-3">
              Already a customer?
            </h3>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {customerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-bold   text-sm transition-colors group py-1"
                >
                  <span>{link}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>

            {/* Customer Evidence Callout */}
            <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-950/60 rounded-xl border border-slate-200/80 dark:border-slate-800 flex flex-col gap-2 text-center">
              <span className="text-slate-800 dark:text-slate-200 text-sm font-bold  ">
                Customer evidence
              </span>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm   leading-relaxed">
                No customer names, logos, detection rates, benchmarks, or outcome metrics appear on this page. None has been verified for this destination — and an &ldquo;anomalies caught&rdquo; statistic would be exactly the wrong claim to make.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}