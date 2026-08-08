import Image from "next/image";
import type { ReactNode } from "react";

const patterns: {
  pattern: string;
  control: string;
  exception: ReactNode;
  noException?: boolean;
}[] = [
  {
    pattern: "Self-approval",
    control:
      "The requester or affected person cannot approve their own protected consequential decision.",
    exception:
      "Only where formally approved, risk-scoped, and evidenced — never silent.",
  },
  {
    pattern: "Rule author vs decision reviewer",
    control:
      "Rule configuration and individual decision authority are separated for high-risk classes.",
    exception: "Documented exception, secondary approval, audit.",
  },
  {
    pattern: "Original reviewer vs appeal reviewer",
    control: "Appeals are assigned independently where policy requires.",
    exception:
      "If unavailable, escalate and disclose the structural limitation openly.",
  },
  {
    pattern: "Evidence preparer vs final approver",
    control: "Separated for protected or disputed cases.",
    exception: "Secondary check, or a documented small-team control.",
  },
  {
    pattern: "Administrator vs audit",
    control:
      "Administrators cannot delete or rewrite audit evidence of their own changes.",
    exception: "Break-glass with an immutable event and review.",
  },
  {
    pattern: "Automation vs human authority",
    control:
      "Non-human actors cannot hold final consequential permission.",
    exception: <span className="font-bold">No exception.</span>,
    noException: true,
  },
  {
    pattern: "Support vs customer decision",
    control:
      "Support can explain product records but does not make customer employment or payroll decisions.",
    exception: "Route to the authorized customer role.",
  },
];

export default function SeparationOfDuties() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Authority, Roles &amp; Separation of Duties
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            A Manager Title Alone Is Not Authority
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            An authorized reviewer is someone currently eligible for{" "}
            <em>this</em> decision class, scope, entity, and jurisdiction, with
            no disqualifying conflict.
          </p>

        </div>

        {/* Pattern Table */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Pattern", width: "w-[22%]" },
                    { label: "Default control", width: "w-[42%]" },
                    { label: "Exception treatment", width: "w-[36%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-5 pb-4 pt-3.5 text-xs font-bold uppercase leading-5 tracking-wide text-zinc-500 dark:border-slate-800 dark:text-slate-400 ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {patterns.map((row) => (
                  <tr
                    key={row.pattern}
                    className={`border-b border-stone-100 last:border-b-0 dark:border-slate-800 ${
                      row.noException ? "bg-[#FDFAFA] dark:bg-red-950/10" : ""
                    }`}
                  >

                    <td className="px-5 py-4 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                      {row.pattern}
                    </td>

                    <td className="px-5 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.control}
                    </td>

                    <td className="px-5 py-4 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {row.exception}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

        </div>

        {/* Recusal Callout */}
        <div className="mt-6 flex gap-3 rounded-xl border border-emerald-100 bg-[#F5FEF7] p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

          <Image
            src="/human-in-command/Frame.svg"
            alt=""
            width={20}
            height={20}
            className="mt-0.5 shrink-0"
          />

          <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

            <span className="font-bold text-sky-950 dark:text-white">
              Recusal is not a mark against anyone.
            </span>{" "}
            It creates an attributable event with a safe reason category — and
            produces no negative signal about the reviewer or the worker.
            Expired, suspended, or conflicted delegation blocks the decision and
            routes to escalation rather than proceeding.

          </p>

        </div>

      </div>
    </section>
  );
}
