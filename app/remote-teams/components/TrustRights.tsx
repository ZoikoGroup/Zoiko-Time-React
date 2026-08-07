"use client";

import Image from "next/image";

const features = [
  {
    title: "Worker transparency",
    description:
      "See own schedule, availability, handoffs, time, sources, requests, decisions, and privacy information.",
  },
  {
    title: "Human authority",
    description:
      "System checks identify review needs; authorized people make consequential decisions.",
  },
  {
    title: "Append-only history",
    description:
      "Working-window, policy, handoff, time, exception, notice, and decision versions are preserved.",
  },
  {
    title: "Source limitations visible",
    description:
      "Offline, stale calendar, or workflow data never becomes an automatic absence or performance conclusion.",
  },
  {
    title: "Purpose-based access",
    description:
      "Handoffs, schedules, time, exceptions, exports, and analytics are limited by role and purpose.",
  },
  {
    title: "Accessible participation",
    description:
      "Mobile, keyboard, screen reader, timezone, offline recovery, language, and correction access, by default.",
  },
];

export default function TrustRights() {
  return (
    <section className="bg-gradient-to-br from-sky-900 to-slate-900 px-6 py-16 dark:from-slate-950 dark:to-slate-900 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1300px] flex-col gap-10">
        {/* Header */}
        <div className="max-w-[700px]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-sm bg-emerald-300" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-emerald-300">
              Trust, Security &amp; Worker Rights
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white lg:text-5xl">
            Remote Work Without Digital
            <br className="hidden sm:block" />
            Surveillance
          </h2>

          <p className="mt-5 text-base leading-7 text-white/60">
            No screenshots, webcam observation, keyboard or mouse events,
            application usage, browsing history, or continuous location
            monitoring — ever, under any tier.
          </p>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/remote-teams/image.png"
            alt="Remote work without surveillance"
            width={1236}
            height={420}
            className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[420px]"
            priority
          />

          <div className="absolute bottom-6 left-6 max-w-xs rounded-xl bg-slate-900/90 px-4 py-3.5 backdrop-blur">
            <p className="text-xs leading-5 text-white">
              "Clear local workdays. Structured handoffs.
              <br />
              Approved records. Visible boundaries.
              <br />
              Human decisions. Privacy-respecting
              <br />
              coordination."
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
            >
              <h3 className="text-sm font-bold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}