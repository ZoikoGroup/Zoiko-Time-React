import React from "react";

const walkthrough = [
  {
    icon: "👤",
    title: "Identity Verified",
    description:
      "Biometric and authentication signals confirmed — identity matches registered profile with high confidence.",
    score: 98,
  },
  {
    icon: "🖥️",
    title: "Session Integrity Confirmed",
    description:
      "Session activity patterns consistent with individual baseline — no anomalies detected in timing or behaviour.",
    score: 95,
  },
  {
    icon: "💻",
    title: "Device Trust Verified",
    description:
      "Device fingerprint matches registered profile — no mid-session device changes or substitution indicators.",
    score: 97,
  },
  {
    icon: "📍",
    title: "Location Consistent",
    description:
      "Geographic location consistent with policy expectations and prior session history — no VPN or proxy signals.",
    score: 94,
  },
];

export default function LiveDemo() {
  return (
    <section className="w-full bg-white py-16 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            Live Walkthrough
          </p>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl dark:text-white">
            See the System Think in Real Time
          </h2>

          <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg dark:text-slate-300">
            Toggle between a valid and flagged session to see exactly how
            ZoikoTime processes signals, assigns confidence, and reaches a
            decision.
          </p>
        </div>

        {/* Walkthrough */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
          {walkthrough.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-b border-slate-200 p-6 last:border-b-0 md:flex-row md:items-center dark:border-slate-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-lg dark:bg-teal-900/30">
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </div>

              <div className="self-start rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-teal-600 dark:bg-teal-900/30">
                {item.score}
              </div>
            </div>
          ))}

          {/* Final Decision */}
          <div className="flex flex-col gap-4 bg-emerald-50 p-6 md:flex-row md:items-center dark:bg-teal-900/20">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-lg dark:bg-teal-800">
              ✅
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Decision: Session Accepted as Valid
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Composite confidence score: 96. All layers within policy
                threshold. Session approved for payroll and billing.
              </p>
            </div>

            <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-teal-700 dark:bg-teal-800 dark:text-teal-100">
              96 ✓
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}