import StatusPill, { type Tone } from "./StatusPill";

const questionStatuses: { label: string; tone: Tone }[] = [
  { label: "Received", tone: "blue" },
  { label: "Clarification needed", tone: "amber" },
  { label: "Under review", tone: "blue" },
  { label: "Answered", tone: "green" },
  { label: "Partially answered", tone: "violet" },
  { label: "Evidence pending", tone: "amber" },
  { label: "Withdrawn", tone: "neutral" },
  { label: "Superseded", tone: "neutral" },
];

export default function AttributableDialogue() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — Questions */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Questions &amp; Evidence Requests
            </p>

            <h2 className="mt-3.5 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Attributable Dialogue, Protected Participants
            </h2>

            <p className="mt-4 max-w-[560px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Each question carries an ID, topic, submitter role, date, scope,
              and — where the customer owns one — a requested response date.
              Responses identify owner, source, scope, limitation, version, and
              follow-up.
            </p>

            <p className="mt-6 text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Question statuses
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {questionStatuses.map((status) => (
                <StatusPill
                  key={status.label}
                  label={status.label}
                  tone={status.tone}
                />
              ))}
            </div>

            {/* Never Applied */}
            <div className="mt-6 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                Never applied to a question or its author
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-900 dark:text-red-200/80">
                No automated sentiment, hostility, union-risk, or legal-risk
                scoring. Participant identity is never exposed publicly, and
                related questions can be linked without erasing distinct
                concerns.
              </p>

            </div>

          </div>

          {/* Right — Sessions & Minutes */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Sessions &amp; Minutes
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Recording that dialogue occurred
            </h3>

            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h4 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                What a session record holds
              </h4>

              <ul className="mt-4 flex flex-col gap-2.5">

                <li className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    Session ID, purpose, date, time, and time zone
                  </span>
                </li>

                <li className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    Channel or location, accessible format, language support
                  </span>
                </li>

                <li className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    Participant <em>roles</em> — names optional and
                    access-controlled
                  </span>
                </li>

                <li className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    Agenda, materials, questions, responses, actions
                  </span>
                </li>

                <li className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    Commitments, conditions, and open issues
                  </span>
                </li>

                <li className="flex gap-2.5">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    Minutes states: draft · reviewed · corrected ·
                    customer-approved
                  </span>
                </li>

              </ul>

            </div>

            {/* Attendance Callout */}
            <div className="mt-5 flex gap-3 rounded-xl border border-emerald-100 bg-emerald-50/40 p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

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

              <p className="text-sm font-bold leading-6 text-sky-950 dark:text-white">
                Attendance does not equal agreement or consent. Corrections and
                objections to minutes remain visible rather than being edited
                away.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
