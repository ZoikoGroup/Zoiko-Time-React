import React from "react";

const layers = [
  {
    id: "1",
    tag: "Event Capture Layer",
    title: "Comprehensive Activity Recording",
    note:
      "Nothing is missed. Every event enters the evidence pipeline from the moment it occurs.",
    items: [
      "Captures every workforce action — sessions, decisions, anomalies, and transitions.",
      "Records precise timing, device context, and environmental signals.",
      "Policy-triggered capture ensures only relevant events are recorded.",
    ],
    featured: false,
  },
  {
    id: "2",
    tag: "Context Enrichment Layer",
    title: "Full Contextual Attribution",
    note:
      "Context is captured at the moment of truth, not reconstructed later.",
    items: [
      "Attaches verified identity, jurisdiction, and policy context.",
      "Links timestamp, location, and work environment.",
      "Associates the active policy framework with every event.",
    ],
    featured: false,
  },
  {
    id: "3",
    tag: "🧠 Evidence Construction Engine",
    title: "Evidence Creation — Not Logging",
    note:
      "This is evidence creation—not simple data storage. The fundamental distinction.",
    badges: [
      "SHA-256 Signature",
      "Integrity Verified",
      "Evidence Sealed",
    ],
    items: [
      "Transforms raw events into structured evidence objects.",
      "Embeds identity, origin, context, and policy into every record.",
      "Built to forensic standards from the point of creation.",
    ],
    featured: true,
  },
  {
    id: "4",
    tag: "Integrity & Hashing Layer",
    title: "Tamper-Evident Records",
    note:
      "Immutable by design. Any modification is permanently detectable.",
    items: [
      "Cryptographic hash generated when evidence is created.",
      "Any modification is instantly detectable.",
      "Integrity verification occurs whenever records are retrieved.",
    ],
    featured: false,
  },
  {
    id: "5",
    tag: "Chain of Custody Engine",
    title: "Complete Record Lifecycle Tracking",
    note:
      "Every hand this record passes through is permanently documented.",
    items: [
      "Tracks every access and transfer.",
      "Every custody event is timestamped and verified.",
      "Exportable custody reports for legal and regulatory review.",
    ],
    featured: false,
  },
  {
    id: "6",
    tag: "📂 Retrieval & Presentation Layer",
    title: "Audit-Ready Evidence Output",
    note:
      "Evidence delivered in the structure required—not raw data.",
    items: [
      "Structured evidence for legal and audit review.",
      "Exports include evidence, custody, and integrity verification.",
      "Role-based access controls for viewing and exporting.",
    ],
    featured: false,
  },
];

export default function EvidenceLayer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50 via-white to-white py-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-teal-600">
            The Infrastructure
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            The Evidence Infrastructure Layer
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Six integrated layers that transform raw workforce activity into
            structured, tamper-evident, court-ready evidence automatically at
            the moment of every event.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {layers.map((layer) => (
            <div
              key={layer.id}
              className={`relative rounded-2xl border p-8 shadow-sm transition-all ${
                layer.featured
                  ? "border-teal-200 bg-gradient-to-br from-emerald-50 to-slate-50 dark:border-teal-700 dark:from-slate-900 dark:to-slate-800"
                  : "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"
              }`}
            >
              {layer.featured && (
                <div className="absolute right-6 top-0 rounded-b-lg bg-teal-600 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white">
                  Evidence Creation
                </div>
              )}

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-200 bg-emerald-50 text-sm font-bold text-teal-600 dark:border-teal-700 dark:bg-slate-800">
                {layer.id}
              </div>

              <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-400">
                {layer.tag}
              </p>

              <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
                {layer.title}
              </h3>

              <div className="mt-8 space-y-5">
                {layer.items.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-sm bg-teal-600" />
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {layer.featured && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {layer.badges?.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-teal-200 bg-emerald-50 px-4 py-2 text-xs font-semibold text-teal-700 dark:border-teal-700 dark:bg-slate-800 dark:text-teal-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 rounded-r-md border-l-4 border-teal-600 bg-emerald-50 p-4 dark:bg-slate-800">
                <p className="text-sm font-medium text-teal-700 dark:text-teal-300">
                  {layer.note}
                </p>
              </div>

                          </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-teal-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[320px] rounded-full bg-emerald-400/5 blur-3xl" />
    </section>
  );
}