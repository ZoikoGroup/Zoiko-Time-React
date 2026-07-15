import React from "react";

const features = [
  {
    icon: "💰",
    title: "Payroll Defensibility",
    description:
      "Only verified sessions at policy confidence thresholds qualify—payroll is backed by evidence, not assumption.",
  },
  {
    icon: "🏛️",
    title: "Audit Support",
    description:
      "Every evidence record includes identity validation, session integrity, confidence score, and AI reasoning—audit-ready by design.",
  },
  {
    icon: "⚖️",
    title: "Legal Dispute Resolution",
    description:
      "Tamper-evident records with chain of custody provide court-admissible evidence for any employment or billing dispute.",
  },
];

const rows = [
  {
    label: "Record ID",
    value: "SES-2026-08841",
    mono: true,
  },
  {
    label: "Identity Validation",
    value:
      "✓ Confirmed — biometric + behavioural signals aligned",
    success: true,
  },
  {
    label: "Session Integrity",
    value:
      "✓ Continuous monitoring — no anomalies detected",
    success: true,
  },
  {
    label: "Confidence Score",
    value: "96 / 100 — Accepted as Valid",
    success: true,
  },
  {
    label: "AI Reasoning",
    value:
      "All four verification layers within policy threshold. No manipulation indicators detected. Identity certainty: high.",
  },
  {
    label: "Policy Applied",
    value:
      "Enterprise Session Policy v3.2 — UK jurisdiction — Remote-first profile",
  },
  {
    label: "Timestamp",
    value:
      "2026-03-18 09:02:14 – 17:34:51 UTC",
    mono: true,
  },
];

export default function EvidenceEngine() {
  return (
    <section className="w-full bg-slate-100 dark:bg-slate-950 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left */}

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-6">
              Evidence Engine
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Verification Becomes
              <br />
              Defensible Evidence
            </h2>

            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-8 max-w-xl">
              Every session—valid, flagged, or rejected—automatically
              generates a structured evidence record that directly supports
              payroll, audit, and legal processes.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-2xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Card */}

          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-lg">

            {/* Header */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-slate-100 dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-white">
                Session Evidence Record
              </h3>

              <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-4 py-2 text-xs font-semibold text-teal-700 dark:text-teal-300">
                🔏 Integrity Sealed
              </span>
            </div>

            {/* Rows */}

            <div>

              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid md:grid-cols-[170px_1fr] gap-2 border-b border-slate-200 dark:border-slate-700 px-6 py-5"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {row.label}
                  </p>

                  <div>
                    {row.mono ? (
                      <span className="inline-block rounded bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 font-mono text-xs text-teal-700 dark:text-teal-300 break-all">
                        {row.value}
                      </span>
                    ) : (
                      <p
                        className={`text-sm leading-7 ${
                          row.success
                            ? "text-teal-600 dark:text-teal-400 font-semibold"
                            : "text-slate-700 dark:text-slate-300"
                        }`}
                      >
                        {row.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}