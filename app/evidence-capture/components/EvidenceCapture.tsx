import React from "react";
import Link from "next/link";

const highlights = [
  "Establish a single source of truth",
  "Eliminate disputes with verifiable evidence",
  "Provide court-defensible records",
];

const lifecycle = [
  {
    icon: "📡",
    title: "Event Captured",
    subtitle: "Raw signal",
  },
  {
    icon: "🔍",
    title: "Context Enriched",
    subtitle: "Identity + Policy",
  },
  {
    icon: "🧱",
    title: "Evidence Object Created",
    subtitle: "Structured record",
  },
  {
    icon: "🔏",
    title: "Integrity Hashed",
    subtitle: "Tamper-evident",
  },
  {
    icon: "📂",
    title: "Custody Chain Active",
    subtitle: "Access tracked",
  },
  {
    icon: "⚖️",
    title: "Audit-Ready Output",
    subtitle: "Court-defensible",
  },
];

export default function EvidenceCapture() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 py-20 lg:py-28">
      {/* Top Gradient */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-teal-500/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            Evidence Capture
          </p>

          <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
            A System of Record for
            <br />
            <span className="text-teal-600">
              Workforce Truth
            </span>
          </h2>

          <p className="mt-8 text-base md:text-lg leading-8 text-slate-600 dark:text-slate-300">
            ZoikoTime captures, constructs, and preserves forensic-grade
            evidence for every workforce action—ensuring every decision can be
            verified, audited, and legally defended.
          </p>
        </div>

        {/* Highlight Pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {highlights.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-5 py-3 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>

              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
          <Link
  href="/request-a-demo"
  className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-8 py-3 text-white font-semibold shadow-lg shadow-teal-600/30 transition hover:bg-teal-700"
>
  Request Audit Demo
</Link>

          <Link
  href="/evidence-capture#evidence-layer"
  className="inline-flex items-center justify-center rounded-lg border border-teal-600 px-8 py-3 font-semibold text-teal-600 dark:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition"
>
  View Evidence Model
</Link>
        </div>

        {/* Evidence Card */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xl">

          {/* Card Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-8 py-5">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Evidence Lifecycle — Real-Time Record
            </h3>

            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 dark:border-teal-700 bg-emerald-50 dark:bg-emerald-900/20 px-4 py-2 text-xs font-semibold text-teal-700 dark:text-teal-300">
              <span className="h-2 w-2 rounded-full bg-teal-600"></span>
              Integrity Verified
            </span>
          </div>

          {/* Timeline */}

                    <div className="px-8 py-10">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
              {lifecycle.map((item, index) => (
                <div
                  key={item.title}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Connector Line */}
                  {index !== lifecycle.length - 1 && (
                    <div className="hidden xl:block absolute top-7 left-[68%] w-full h-0.5 bg-gradient-to-r from-teal-300 to-teal-600"></div>
                  )}

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-teal-200 dark:border-teal-700 bg-emerald-50 dark:bg-emerald-900/20 text-2xl">
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h4 className="mt-5 text-sm font-semibold leading-5 text-slate-900 dark:text-white">
                    {item.title}
                  </h4>

                  {/* Subtitle */}
                  <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Information */}
          <div className="grid md:grid-cols-2 border-t border-slate-200 dark:border-slate-700">

                        {/* Record Integrity */}
            <div className="border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Record Integrity Hash
              </p>

              <div className="mt-5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-4">
                <p className="font-mono text-xs leading-6 break-all text-teal-700 dark:text-teal-300">
                  sha256:a3f9d2c1b8e47f6a5d2c9b3e18f70a4d6c2b9f3e14d8a5c2b7e9f4a6d3c0b8e1
                </p>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-teal-600"></span>

                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  Verified — no modifications detected
                </p>
              </div>
            </div>

            {/* Chain of Custody */}
            <div className="p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Chain of Custody Status
              </p>

              <div className="mt-5 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 p-4">
                <div className="space-y-2 font-mono text-xs leading-6 text-teal-700 dark:text-teal-300">
                  <p>Created: 2026-03-18 14:32:07 UTC</p>
                  <p>Last accessed: 2026-03-24 09:14:52 UTC</p>
                  <p>Access events: 3 — all authorised</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-teal-600"></span>

                <p className="text-sm font-semibold text-teal-700 dark:text-teal-300">
                  Chain intact — 0 integrity violations
                </p>
              </div>
            </div>

                      </div>
        </div>
      </div>
    </section>
  );
}