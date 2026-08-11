import Link from "next/link";

const guarantees = [
  {
    lead: "Explicit paths",
    rest: "correction, approval, escalation, and appeal.",
  },
  {
    lead: "Human decisions",
    rest: "consequential payroll, discipline, employment, or legal outcomes are made by authorized people, outside automatic classification.",
  },
  {
    lead: "Never automated",
    rest: "guilt, misconduct, payroll outcome, or disciplinary conclusion.",
  },
];

export default function FlagAuthority() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — Human Authority */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Human Authority &amp; Review Rights
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              A Flag Is Evidence for Review, Not a Decision
            </h2>

            <p className="mt-4 max-w-[560px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Neutral pending-review states, visible source inputs, the policy or
              rule version, and the reason for a flag — all available to the
              worker and the authorized reviewer according to role and policy.
            </p>

            {/* Canonical Example */}
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

              <span className="inline-flex rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-extrabold uppercase leading-4 tracking-wide text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                Canonical example
              </span>

              <p className="mt-3 text-base font-bold leading-6 text-sky-950 dark:text-white">
                &ldquo;Unverified Exit — Pending Review&rdquo;
              </p>

              <p className="mt-2 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                The state describes the record. It does not describe the person,
                and it never appears as a finding.
              </p>

            </div>

            {/* Guarantees */}
            <ul className="mt-6 flex flex-col gap-2.5">
              {guarantees.map((item) => (
                <li key={item.lead} className="flex gap-2.5">

                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />

                  <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    <span className="font-bold text-sky-950 dark:text-white">
                      {item.lead}
                    </span>{" "}
                    — {item.rest}
                  </p>

                </li>
              ))}
            </ul>

            <Link
              href="/human-in-command"
              className="mt-7 inline-flex items-center justify-center gap-2 self-start rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
            >
              <span>Human-in-Command Controls</span>
              <span aria-hidden="true">→</span>
            </Link>

          </div>

          {/* Right — Mechanisms Kept Apart */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Deterministic Classification &amp; AI Governance
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Two different mechanisms, kept apart
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

                <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  Deterministic Time Classification
                </h4>

                <p className="mt-2 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  Policy-bound inputs, versioned rules, jurisdiction and context,
                  reviewable outputs.{" "}
                  <span className="font-bold text-sky-950 dark:text-white">
                    Not labelled AI
                  </span>{" "}
                  — because calling a rule engine &ldquo;AI&rdquo; invites trust
                  it has not earned.
                </p>

              </div>

              <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

                <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  Approved machine learning
                </h4>

                <p className="mt-2 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  May flag anomalies or signal-quality concerns for human review.
                  It does not determine time categories, compliance, misconduct,
                  payroll, or employment outcomes.
                </p>

              </div>

              <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">

                <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  Kairos
                </h4>

                <p className="mt-2 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  Retrieves, summarizes, and explains governed data. Decides
                  nothing.
                </p>

              </div>

              <div className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

                <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  Not published
                </h4>

                <p className="mt-2 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  No unapproved model-performance metric, bias claim, or
                  autonomous-action language.
                </p>

              </div>

            </div>

            <div className="mt-6 flex flex-col gap-3.5 sm:flex-row">

              <Link
                href="/ai-governance"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                AI Governance
              </Link>

              <Link
                href="/deterministic-time-classification"
                className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-6 py-3.5 text-base font-bold text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Deterministic Classification
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
