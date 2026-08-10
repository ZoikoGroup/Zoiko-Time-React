import Link from "next/link";

const actions = [
  {
    action: "Inspect",
    body: "inputs, sources, freshness, scope, model or rule version, and stated limitations.",
  },
  {
    action: "Question",
    body: "request more evidence, or mark the output insufficient.",
  },
  {
    action: "Correct",
    body: "amend the record through the governed correction path, with the original preserved.",
  },
  {
    action: "Reject",
    body: "dismiss a flag or decline a draft, with a reason recorded.",
  },
  {
    action: "Escalate",
    body: "route to an independent reviewer where policy requires.",
  },
  {
    action: "Report",
    body: "raise a concern about the AI-assisted output itself, not just the record.",
  },
];

const outcomeClasses = [
  "Payroll-impacting approval",
  "Disciplinary or misconduct conclusion",
  "Employment eligibility or termination",
  "Legal or regulatory conclusion",
  "Accommodation or protected-context outcome",
  "Appeal or grievance outcome",
];

export default function HumanControlsAndRights() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Available Actions */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Human Controls &amp; Worker Rights
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              What a Person Can Do With an AI-Assisted Output
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              A right that exists only in policy is not a control. Each of these is
              an action available in the interface.
            </p>

            <ul className="mt-5 flex flex-col gap-2.5">
              {actions.map((item) => (
                <li key={item.action} className="flex gap-2.5">

                  <span
                    className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

                    <span className="font-bold text-sky-950 dark:text-white">
                      {item.action}
                    </span>{" "}
                    — {item.body}

                  </span>

                </li>
              ))}
            </ul>

            {/* No Coercive Framing */}
            <div className="mt-6 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                No coercive framing
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                No language pressures a reviewer to accept a system output, and no
                interface makes accepting faster than examining. A human
                alternative is never concealed.
              </p>

            </div>

          </div>

          {/* Rights & Outcome Classes */}
          <div className="flex flex-col gap-5">

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/40 p-6 dark:border-emerald-900/40 dark:bg-emerald-950/10">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Worker-facing transparency
              </h3>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Where an AI-assisted output affects a worker&apos;s record, that
                person can see the relevant inputs, purpose, source, limitations,
                and status within role and policy scope — and can use correction,
                challenge, escalation, and appeal routes with full decision
                history.
              </p>

              <Link
                href="/human-in-command"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold leading-6 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400"
              >
                Human-in-Command Controls <span aria-hidden="true">→</span>
              </Link>

            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Human-only outcome classes
              </h3>

              <ul className="mt-4 flex flex-col gap-2.5">
                {outcomeClasses.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Each requires reviewer eligibility, separation of duties, evidence
                access, a reason, notification, a challenge route, and preserved
                history. Neutral pending-review states apply throughout.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
