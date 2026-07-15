import Image from "next/image";
import React from "react";

const verificationLayers = [
  {
    icon: "👤",
    title: "Identity Layer",
    description:
      "Ensures the right individual is present via authentication signals, biometric indicators, and behavioural patterns.",
  },
  {
    icon: "🖥️",
    title: "Session Layer",
    description:
      "Monitors session continuity, activity patterns, and temporal consistency throughout the working period.",
  },
  {
    icon: "💻",
    title: "Device Layer",
    description:
      "Validates device fingerprint, trust status, and consistency across sessions — detecting substitution or compromise.",
  },
  {
    icon: "📍",
    title: "Location Layer",
    description:
      "Verifies geographical consistency against expected patterns, policy requirements, and prior session history.",
  },
];

export default function VerificationEngine() {
  return (
    <section className="w-full bg-slate-100 py-16 lg:py-24 dark:bg-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 lg:flex-row lg:items-center">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600">
            The Verification Engine
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl dark:text-white">
            Four Layers. One
            <br className="hidden sm:block" />
            Confidence Score.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300">
            Each verification layer captures a distinct signal. All
            signals are synthesised by the Confidence Engine into a
            single decision-grade score — the core of workforce truth.
          </p>

          <div className="mt-10 space-y-6">
            {verificationLayers.map((layer, index) => (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-xl dark:bg-teal-900/30">
                    {layer.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {layer.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl border-2 border-teal-600/20 bg-white shadow-[0_10px_30px_rgba(0,157,140,0.12)] dark:border-teal-500/30 dark:bg-slate-800">
            <Image
              src="/VerificationEngine/image.png"
              alt="Verification Engine"
              width={556}
              height={834}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}