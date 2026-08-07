import StatusPill, { type Tone } from "./StatusPill";

const changes: {
  claim: string;
  previous: string;
  next: string;
  tone: Tone;
  reason: string;
  effective: string;
  owner: string;
}[] = [
  {
    claim: "TC-0001 anti-surveillance invariant",
    previous: "Current v2",
    next: "Current v3",
    tone: "green",
    reason: "Wording clarified",
    effective: "12 Jul 2026",
    owner: "Trust & Governance",
  },
  {
    claim: "TC-0034 vendor & processor governance",
    previous: "Current v4",
    next: "Under review",
    tone: "blue",
    reason: "Scope reconfirmation",
    effective: "28 Jun 2026",
    owner: "Privacy & Security",
  },
  {
    claim: "TC-0019 legacy uptime statement",
    previous: "Current v1",
    next: "Withdrawn",
    tone: "red",
    reason: "Unsupported measure",
    effective: "02 Jun 2026",
    owner: "Trust & Governance",
  },
  {
    claim: "TC-0012 data category map",
    previous: "Current v5",
    next: "Superseded by v6",
    tone: "neutral",
    reason: "Category added",
    effective: "28 Jun 2026",
    owner: "Privacy",
  },
];

export default function TrustHistory() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Changes, Corrections &amp; Withdrawals
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Trust History, Visible
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            We do not silently rewrite prior public claims. We also do not
            preserve unsafe, legally restricted, or materially false content in
            public history merely for completeness.
          </p>

        </div>

        {/* Change Log */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[880px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Claim / artifact", width: "w-[28%]" },
                    { label: "Previous", width: "w-[12%]" },
                    { label: "New", width: "w-[16%]" },
                    { label: "Reason category", width: "w-[17%]" },
                    { label: "Effective", width: "w-[12%]" },
                    { label: "Owner", width: "w-[15%]" },
                  ].map((heading) => (
                    <th
                      key={heading.label}
                      className={`border-b border-stone-200 px-5 py-4 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white ${heading.width}`}
                    >
                      {heading.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {changes.map((row) => (
                  <tr
                    key={row.claim}
                    className="border-b border-stone-200 last:border-b-0 dark:border-slate-800"
                  >

                    <td className="px-5 py-4 align-middle text-sm font-semibold leading-5 text-sky-950 dark:text-white">
                      {row.claim}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.previous}
                    </td>

                    <td className="px-5 py-4 align-middle">
                      <StatusPill label={row.next} tone={row.tone} />
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.reason}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.effective}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.owner}
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <p className="border-t border-stone-200 px-5 py-4 text-xs font-normal leading-5 text-zinc-500 dark:border-slate-800 dark:text-slate-400">
            Illustrative change log. Emergency removal may precede retrospective
            publication of the change record.
          </p>

        </div>

        <p className="mt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          A correction record shows what changed and whether prior conclusions or
          contracts are affected. Superseded items route to the current version;
          withdrawn items state that they are no longer current, and why, at a
          safe level.
        </p>

      </div>
    </section>
  );
}
