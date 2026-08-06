import Link from "next/link";

const criteria = [
  {
    title: "Notice and explanation",
    description:
      "Accessible information about data categories, purposes, sources, rules, time and locale context, retention, access, corrections, and escalation.",
  },
  {
    title: "Record visibility",
    description:
      "Supported records, states, effective context, approvals, corrections, and outcomes — subject to approved access.",
  },
  {
    title: "Correction",
    description:
      "Issue, reason and evidence where appropriate, a neutral pending state, human review, outcome, and downstream propagation.",
  },
  {
    title: "Human review",
    description:
      "Consequential decisions stay with authorized people. Anomalies are not misconduct findings.",
  },
  {
    title: "Consultation and representation",
    description:
      "Required materials, ownership, status, evidence, and unresolved obligations are recorded where applicable.",
  },
  {
    title: "No retaliation inference",
    description:
      "Risk is never inferred or scored from a worker's use of correction, support, accessibility, or representation.",
    accent: true,
  },
];

export default function WorkerVisibility() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[470px_1fr] lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
              Worker Visibility, Correction &amp; Consultation
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              A Deployment Is Not Ready If Workers Cannot Understand or Correct
              the Record
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Local context changes what a record means. Notice, visibility,
              correction, and human review are readiness criteria on this page,
              not a trust-page afterthought.
            </p>

            {/* Section CTAs */}
            <div className="mt-7 flex flex-col items-start gap-3.5">

              <Link
                href="/anti-surveillance-principles"
                className="inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-6 py-3.5 text-base font-bold leading-6 text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Anti-Surveillance Principles
              </Link>

              <Link
                href="/human-controls"
                className="inline-flex items-center justify-center rounded-lg border border-stone-200 bg-white px-6 py-3.5 text-base font-bold leading-6 text-sky-950 transition hover:border-sky-950 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
              >
                Human-in-Command Controls
              </Link>

            </div>

          </div>

          {/* Criteria Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {criteria.map((item) => (
              <div
                key={item.title}
                className={`flex flex-col rounded-2xl border px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900 ${
                  item.accent
                    ? "border-emerald-100 bg-emerald-50/40"
                    : "border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)]"
                }`}
              >

                <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
