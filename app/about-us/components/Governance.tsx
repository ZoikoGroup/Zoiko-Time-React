"use client";

import Image from "next/image";

const governancePrinciples = [
  {
    image: "/about-us/guy.png",
    title: "Human-in-Command",
    description:
      "ZoikoTime surfaces risk and insight. Humans retain decision authority at every stage. There are no automated disciplinary outcomes — ever.",
  },
  {
    image: "/about-us/setting.png",
    title: "Policy-Driven Controls",
    description:
      "All assurance and intelligence functions are configurable by role, jurisdiction, risk profile, and organisational policy — not preset by the system vendor.",
  },
  {
    image: "/about-us/search.png",
    title: "Transparency and Employee Rights",
    description:
      "Employees can understand what is collected, why it is collected, and how it is used — subject to organisational policy and applicable law. Visibility is structural, not optional.",
  },
];

const privacyPrinciples = [
  {
    title: "Data Minimisation by Default",
    description:
      "Only the data required for the stated governance purpose is collected — no speculative or surplus capture.",
  },
  {
    title: "Role-Based Access Controls",
    description:
      "Every data access is gated by role — no user can see beyond the scope of their governance function.",
  },
  {
    title: "Immutable Access Logs",
    description:
      "Every record access is logged and tamper-proof — creating full accountability for anyone who views workforce data.",
  },
  {
    title: "Jurisdiction-Aware Retention",
    description:
      "Retention schedules are applied per jurisdiction — aligning data lifecycle management with local legal requirements automatically.",
  },
  {
    title: "Consent & Notification Workflows",
    description:
      "Where required by law or policy, consent and notification workflows are built into the system — not retrofitted as an afterthought.",
  },
];

export default function Governance() {
  return (
    <section className="w-full overflow-hidden bg-slate-100 px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-[100px]">
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 gap-12 lg:grid-cols-[492px_492px] lg:gap-[56px]">
        {/* LEFT CONTENT */}
        <div>
          {/* Eyebrow */}
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
            Governance by Design
          </p>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[36px] lg:leading-10">
            Governance Is Not a
            <br />
            Feature. It Is Foundational.
          </h2>

          {/* Description */}
          <p className="mt-7 max-w-[490px] text-base leading-7 text-slate-500 dark:text-slate-400">
            In ZoikoTime, governance is not a toggle or a settings panel — it
            is embedded into every layer of the system. Every capability is
            policy-driven, every decision is human-in-command, and every
            employee right is structurally protected.
          </p>

          {/* Governance Cards */}
          <div className="mt-10 space-y-6">
            {governancePrinciples.map((principle) => (
              <div
                key={principle.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-colors dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 dark:bg-teal-950/60">
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-base font-bold leading-6 text-slate-900 dark:text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_1px_4px_rgba(13,21,38,0.04),0px_4px_16px_rgba(13,21,38,0.08)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
          {/* Panel Header */}
          <div className="border-b border-slate-200 bg-slate-100 px-6 py-6 text-center dark:border-slate-800 dark:bg-slate-800/70">
            <h3 className="text-sm font-bold leading-6 text-slate-900 dark:text-white">
              Privacy-First Architecture
            </h3>

            <p className="mx-auto mt-2 max-w-[390px] text-xs leading-5 text-slate-500 dark:text-slate-400">
              Every design decision defaults to the least invasive option that
              meets the governance requirement.
            </p>
          </div>

          {/* Privacy Principles */}
          <div>
            {privacyPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className={`flex gap-4 px-6 py-6 ${
                  index !== privacyPrinciples.length - 1
                    ? "border-b border-slate-200 dark:border-slate-800"
                    : ""
                }`}
              >
                {/* Check Icon */}
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-teal-950/60">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                    ✓
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h4 className="text-sm font-bold leading-6 text-slate-900 dark:text-white">
                    {principle.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}