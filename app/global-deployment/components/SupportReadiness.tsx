import Link from "next/link";

const supportCards = [
  {
    title: "Local ownership",
    description:
      "Your named contacts for administration, identity, policy, legal and privacy, integrations, finance and payroll, worker communication, and continuity.",
  },
  {
    title: "Incident route",
    description:
      "Detection source, severity, owner, escalation, status communication, customer action, evidence, closure review.",
  },
  {
    title: "Regional handoff",
    description:
      "Only where current and supported. Context, ownership, access, acknowledgement, and evidence are preserved across the handoff.",
  },
  {
    title: "System status",
    description:
      "Operational incidents route to the authoritative status surface. Marketing pages never duplicate live state.",
  },
  {
    title: "Existing customers",
    description:
      "Account-aware support and status, with no new lead form in the way.",
  },
];

const forbiddenLanguage = [
  "24/7, follow-the-sun, or global support",
  "Local, dedicated, or premium coverage",
  "Guaranteed response without current terms",
];

export default function SupportReadiness() {
  return (
    <section id="operating-readiness" className="scroll-mt-24 w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Support Coverage &amp; Incident Routing
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Support Readiness Is a Deployment Control, Not a Slogan
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A support profile is a contractual boundary with channels, a
            coverage window, a time zone, a language, an entitlement, severity
            definitions, response authority, exclusions, an owner, and a review
            date.
          </p>

        </div>

        {/* Support Cards */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {supportCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {card.title}
              </h3>

              <p className="mt-2 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {card.description}
              </p>

            </div>
          ))}

          {/* Language We Do Not Use */}
          <div className="flex flex-col rounded-2xl border border-stone-200 bg-slate-50 px-6 pb-6 pt-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900">

            <div className="flex items-center gap-2">

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-red-600"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="5.75"
                  stroke="currentColor"
                  strokeWidth="1.65"
                />
                <path
                  d="M6.25 6.25L9.75 9.75M9.75 6.25L6.25 9.75"
                  stroke="currentColor"
                  strokeWidth="1.65"
                />
              </svg>

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Language we do not use
              </h3>

            </div>

            <ul className="mt-2 flex flex-col gap-1">

              {forbiddenLanguage.map((item) => (
                <li key={item} className="flex gap-2">

                  <span
                    className="text-sm font-bold leading-7 text-red-600"
                    aria-hidden="true"
                  >
                    ×
                  </span>

                  <span className="text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* Section CTAs */}
        <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">

          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-6 py-3.5 text-base font-bold leading-6 text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            Enterprise Support
          </Link>

          <Link
            href="/system-status"
            className="inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-6 py-3.5 text-base font-bold leading-6 text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
          >
            System Status
          </Link>

        </div>

      </div>
    </section>
  );
}
