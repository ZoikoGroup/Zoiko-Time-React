import Link from "next/link";

type Card = {
  title: string;
  body: string;
  state: "Current" | "Evidence-gated";
  action?: { label: string; href: string };
  note?: string;
};

const groups: { heading: string; cards: Card[] }[] = [
  {
    heading: "Trust — what the platform does",
    cards: [
      {
        title: "Security",
        body: "Identity, access, encryption, secure development, logging, incident readiness.",
        state: "Current",
        action: { label: "Open", href: "/security-overview" },
      },
      {
        title: "Privacy",
        body: "Data categories, purposes, access, retention, processors, transfers, rights.",
        state: "Current",
        action: { label: "Open", href: "/privacy-controls" },
      },
      {
        title: "Platform Reliability",
        body: "No reliability claim is published without maintained measures, method, and history.",
        state: "Evidence-gated",
        note: "Available when SLO definitions, measurement method, and ownership are complete.",
      },
      {
        title: "System Status",
        body: "Live incidents, maintenance, components, and history from the authoritative source.",
        state: "Current",
        action: { label: "Open", href: "/status" },
      },
    ],
  },
  {
    heading: "Governance — how decisions are bounded",
    cards: [
      {
        title: "Human-in-Command Controls",
        body: "Where review authority sits, and what a flag is and is not.",
        state: "Current",
        action: { label: "Open", href: "/responsible-ai" },
      },
      {
        title: "Ethical Design Principles",
        body: "Held until owned principles and enforcement evidence are complete.",
        state: "Evidence-gated",
        note: "Principles without enforcement evidence would be decoration.",
      },
      {
        title: "AI Governance",
        body: "Approved ML scope, prohibited uses, and the Kairos boundary.",
        state: "Current",
        action: { label: "Open", href: "/ai-governance" },
      },
      {
        title: "Administrative Controls",
        body: "Held until the control inventory and documentation are complete.",
        state: "Evidence-gated",
        note: "Request via controlled evidence route below.",
      },
    ],
  },
  {
    heading: "Assurance — what can be evidenced to a third party",
    cards: [
      {
        title: "Compliance & Assurance",
        body: "Certifications, mappings, obligations, and controls stay separated — never presented as one thing.",
        state: "Evidence-gated",
        action: { label: "Request access", href: "#request-security-review" },
      },
      {
        title: "Works-Council & Consultation",
        body: "Worker communications and consultation materials require legal review before publication.",
        state: "Evidence-gated",
        action: {
          label: "Request access",
          href: "/works-council-consultation",
        },
      },
      {
        title: "Accessibility",
        body: "Tested scope, methods, known limitations, owner, and correction route.",
        state: "Current",
        action: { label: "Open", href: "/accessibility" },
      },
      {
        title: "Data Location & Residency",
        body: "Assessed region by region. There is no blanket global-residency claim.",
        state: "Evidence-gated",
        action: { label: "Request access", href: "#request-security-review" },
      },
    ],
  },
];

function StateBadge({ state }: { state: Card["state"] }) {
  const isCurrent = state === "Current";

  return (
    <span
      className={`shrink-0 rounded-full border px-2 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide [font-family:var(--font-inter)] ${
        isCurrent
          ? "border-[#E8E8E8] bg-[#FAFAFA] text-emerald-700 dark:border-slate-700 dark:bg-slate-800 dark:text-emerald-400"
          : "border-orange-200 bg-[#F2F2F2] text-amber-700 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-300"
      }`}
    >
      {state}
    </span>
  );
}

export default function ThreeGroups() {
  return (
    <section
      id="trust-model"
      className="w-full scroll-mt-24 overflow-hidden bg-white dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Trust, Governance &amp; Assurance
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Three Groups, and an Honest Release State on Every Card
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Controls, policies, and assurance artifacts are not interchangeable,
            so they are not grouped together. A destination appears as Current
            only when it is approved and production-ready — a prepared wireframe
            does not make a page current.
          </p>

        </div>

        {/* Groups */}
        {groups.map((group) => (
          <div key={group.heading} className="mt-10">

            <h3 className="text-lg font-bold leading-6 text-sky-950 dark:text-white">
              {group.heading}
            </h3>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {group.cards.map((card) => {
                const gated = card.state === "Evidence-gated";

                return (
                  <article
                    key={card.title}
                    className={`flex flex-col rounded-2xl border border-[#EDEDED] p-5 dark:border-slate-800 ${
                      gated
                        ? "bg-[#FCFCFC] dark:bg-slate-900/60"
                        : "bg-white dark:bg-slate-900"
                    }`}
                  >

                    <div className="flex items-start justify-between gap-3">

                      <h4
                        className={`text-base font-bold leading-5 ${
                          gated
                            ? "text-[#666666] dark:text-slate-300"
                            : "text-sky-950 dark:text-white"
                        }`}
                      >
                        {card.title}
                      </h4>

                      <StateBadge state={card.state} />

                    </div>

                    <p className="mt-2 flex-1 text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {card.body}
                    </p>

                    {card.note && (
                      <p className="mt-3.5 text-xs font-normal leading-5 text-[#828282] dark:text-slate-400">
                        {card.note}
                      </p>
                    )}

                    {card.action && (
                      <Link
                        href={card.action.href}
                        className="group mt-3 inline-flex items-center gap-1.5 self-start text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
                      >

                        <span>{card.action.label}</span>

                        <span
                          className="transition group-hover:translate-x-0.5"
                          aria-hidden="true"
                        >
                          →
                        </span>

                      </Link>
                    )}

                  </article>
                );
              })}

            </div>

          </div>
        ))}

        {/* Canonical Overview Callout */}
        <div className="mt-10 flex gap-3 rounded-2xl border border-[#E8E8E8] bg-[#FAFAFA] px-5 py-4 dark:border-slate-800 dark:bg-slate-900">

          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="mt-0.5 shrink-0 text-emerald-800 dark:text-emerald-400"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="7.5"
              stroke="currentColor"
              strokeWidth="1.58"
            />
            <path
              d="M10 6.66V6.83M10 9.16V13.33"
              stroke="currentColor"
              strokeWidth="1.58"
              strokeLinecap="round"
            />
          </svg>

          <p className="text-base font-semibold leading-6 text-sky-950 dark:text-white">
            The Trust Center is the canonical overview of these three groups —
            not a fourth pillar competing with them.
          </p>

        </div>

      </div>
    </section>
  );
}
