"use client";

import Image from "next/image";

const beliefs = [
  {
    image: "/about-us/shield.png",
    title: "Verification Should Protect — Not Punish",
    description:
      "Workforce verification exists to protect organisations from financial and legal exposure — not to surveil or penalise individuals. Every verification capability is designed with that distinction at its core.",
  },
  {
    image: "/about-us/scale.png",
    title: "Performance Data Should Enable Improvement — Not Fear",
    description:
      "Intelligence about work exists to improve delivery, planning, and fairness — not to create anxiety or enable disproportionate scrutiny of individuals. Data drives conversations, not conclusions.",
  },
  {
    image: "/about-us/search.png",
    title: "Governance Should Be Visible — Not Hidden",
    description:
      "The rules that govern workforce data, what is collected, and how it is used should be visible to the people affected by them. Opacity in governance erodes the trust that accountability is meant to build.",
  },
  {
    image: "/about-us/guy.png",
    title: "Technology Should Support Human Judgement — Not Replace It",
    description:
      "ZoikoTime surfaces intelligence and enforces policy — but every consequential decision remains with a human. No algorithm determines a disciplinary outcome, a performance rating, or an employment status.",
  },
];

export default function Philosophy() {
  return (
    <section className="w-full overflow-hidden bg-slate-100 px-5 py-20 transition-colors duration-300 dark:bg-slate-950 sm:px-8 lg:px-12 lg:py-[102px]">
      <div className="mx-auto max-w-[1040px]">
        {/* Header */}
        <div className="mx-auto max-w-[860px] text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-400">
            Our Philosophy
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-[36px] lg:leading-10">
            Accountability and Trust Are Not Opposing Forces
          </h2>

          <p className="mx-auto mt-7 max-w-[600px] text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg">
            The four beliefs that shape every design decision, product
            capability, and governance control in ZoikoTime — built into the
            system, not described in a brochure.
          </p>
        </div>

        {/* Philosophy Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-[68px]">
          {beliefs.map((belief) => (
            <div
              key={belief.title}
              className="min-h-[208px] rounded-xl border border-slate-200 bg-white p-8 shadow-[0px_1px_2px_rgba(13,21,38,0.04),0px_1px_4px_rgba(13,21,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-teal-600/20 bg-emerald-50 dark:bg-teal-950/60">
                  <Image
                    src={belief.image}
                    alt={belief.title}
                    width={26}
                    height={26}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold leading-7 text-slate-900 dark:text-white">
                    {belief.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {belief.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="relative mt-16 overflow-hidden rounded-2xl bg-white px-6 py-12 text-center dark:bg-slate-900 sm:px-10 lg:mt-[54px]">
          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-500/5" />

          <div className="relative z-10">
            <p className="text-xl font-extrabold leading-8 text-slate-900 dark:text-white sm:text-2xl">
              We are not building tools for control. We are building
            </p>

            <p className="mt-1 text-xl font-extrabold leading-8 text-teal-500 sm:text-2xl">
              infrastructure for confidence, accountability, and
              <br className="hidden sm:block" />
              trust at scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}