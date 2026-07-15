import React from "react";

const failureCases = [
  {
    icon: "🕵️",
    title: "VPN Masking Detected",
    steps: [
      "Location signal inconsistency detected — claimed location does not match network origin.",
      "VPN routing pattern identified — location cannot be verified against policy.",
      "Confidence score drops below threshold — session flagged for review.",
    ],
  },
  {
    icon: "💻",
    title: "Device Switching Mid-Session",
    steps: [
      "Device fingerprint change detected mid-session — new device not matching registered profile.",
      "Device trust status revoked — mismatch triggers risk signal elevation.",
      "Session continuity broken — escalation workflow initiated automatically.",
    ],
  },
  {
    icon: "👻",
    title: "Idle Session with Activity",
    steps: [
      "Activity signals detected during an idle session — behaviour inconsistent with genuine user presence.",
      "AI engine identifies pattern as anomalous — classified as potential automation or proxy.",
      "Session flagged, confidence score reassessed, review workflow triggered.",
    ],
  },
];

export default function FailureCases() {
  return (
    <section className="w-full bg-slate-100 py-16 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            Failure Scenarios
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            What Happens When Something Is Not Right
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Regulator-grade realism — how ZoikoTime responds to the
            manipulation patterns and edge cases that standard systems miss
            entirely.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {failureCases.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
            >
              {/* Top Gradient */}
              <div className="h-1 bg-gradient-to-r from-red-500 to-orange-500" />

              <div className="p-8">
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-xl dark:bg-red-900/20">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                {/* Steps */}
                <div className="mt-6 space-y-5">
                  {item.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 font-bold text-red-500">→</span>
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 dark:border-red-800 dark:bg-red-900/20">
                    🚨 Alert generated
                  </span>

                  <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 dark:border-red-800 dark:bg-red-900/20">
                    📂 Evidence logged
                  </span>

                  <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-800 dark:border-red-800 dark:bg-red-900/20">
                    ⚑ Action triggered
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}