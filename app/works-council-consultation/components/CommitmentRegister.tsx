import StatusPill, { type Tone } from "./StatusPill";

type Commitment = {
  commitment: string;
  type: string;
  owner: string;
  due: string;
  evidence: string;
  status: string;
  tone: Tone;
  unmet?: boolean;
};

const commitments: Commitment[] = [
  {
    commitment: "Screenshot capture remains unavailable in all tiers",
    type: "Collection limit",
    owner: "Product",
    due: "Ongoing",
    evidence: "Product invariant",
    status: "Verified",
    tone: "green",
  },
  {
    commitment: "Worker correction route enabled before pilot",
    type: "Configuration",
    owner: "Implementation",
    due: "01 Sep 2026",
    evidence: "Config baseline",
    status: "Implemented",
    tone: "green",
  },
  {
    commitment: "Manager training completed for all reviewers",
    type: "Training",
    owner: "Customer HR",
    due: "15 Sep 2026",
    evidence: "Attendance record",
    status: "Partially met",
    tone: "violet",
  },
  {
    commitment: "Quarterly report to the representative body",
    type: "Reporting",
    owner: "Customer process",
    due: "Quarterly",
    evidence: "Report reference",
    status: "Accepted by customer process",
    tone: "blue",
  },
  {
    commitment: "Retention shortened for exception records",
    type: "Retention",
    owner: "Privacy",
    due: "01 Oct 2026",
    evidence: "Pending",
    status: "Not met",
    tone: "red",
    unmet: true,
  },
];

const requiredFields = [
  "Jurisdiction, entity, site, and workforce scope",
  "Representative body and proposal version",
  "Date, owner, and authority source",
  "Evidence reference",
  "Limitations, conditions, expiry, review date, change triggers",
];

export default function CommitmentRegister() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Commitments &amp; Conditions
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            A Promise With an Owner, a Date, and Evidence
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Negotiated assurances become governed objects. ZoikoTime records
            them and enforces technical gates where configured — it does not
            decide their legal enforceability.
          </p>

        </div>

        {/* Commitment Register */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">

          <div className="overflow-x-auto">

            <table className="w-full min-w-[900px] border-collapse text-left">

              <thead>
                <tr className="bg-slate-50 dark:bg-slate-900">
                  {[
                    { label: "Commitment", width: "w-[28%]" },
                    { label: "Type", width: "w-[12%]" },
                    { label: "Owner", width: "w-[13%]" },
                    { label: "Due", width: "w-[11%]" },
                    { label: "Evidence", width: "w-[14%]" },
                    { label: "Status", width: "w-[22%]" },
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
                {commitments.map((row) => (
                  <tr
                    key={row.commitment}
                    className={`border-b border-stone-200 dark:border-slate-800 ${
                      row.unmet ? "bg-red-50/50 dark:bg-red-950/10" : ""
                    }`}
                  >

                    <td className="px-5 py-4 align-middle text-sm font-semibold leading-5 text-sky-950 dark:text-white">
                      {row.commitment}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.type}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.owner}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.due}
                    </td>

                    <td className="px-5 py-4 align-middle text-sm font-normal leading-5 text-zinc-700 dark:text-slate-300">
                      {row.evidence}
                    </td>

                    <td className="px-5 py-4 align-middle">
                      <StatusPill label={row.status} tone={row.tone} />
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>

          </div>

          <p className="px-5 py-4 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
            Illustrative commitment register. Types include configuration,
            collection limit, access, retention, notification, training,
            support, incident, reporting, accessibility, pilot, and review.
          </p>

        </div>

        <p className="mt-5 text-xs font-normal leading-5 text-zinc-500 dark:text-slate-400">
          Statuses: Draft · Proposed · Under review · Accepted by customer
          process · Implemented · Verified · Partially met · Not met · Waived by
          authorized customer process · Superseded · Withdrawn · Expired. There
          is no hidden waiver and no unilateral bypass.
        </p>

        {/* Customer-Recorded Outcome */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Customer-Recorded Outcome
            </p>

            <h3 className="mt-3.5 text-2xl font-bold leading-tight text-sky-950 dark:text-white">
              Your process records it. We label its limits.
            </h3>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              An accountable customer or advisor process records the outcome
              using its own approved vocabulary and authority source. ZoikoTime
              records the source, scope, date, and limitation — and certifies
              nothing.
            </p>

            <div className="mt-6 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                No ZoikoTime approved badge
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-900 dark:text-red-200/80">
                There is no generic certification mark, and there never will be.
                Acknowledgment, agreement, consent, and approval remain distinct
                terms with distinct meanings.
              </p>

            </div>

          </div>

          {/* Right */}
          <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
              Required fields on any recorded outcome
            </h3>

            <ul className="mt-4 flex flex-col gap-2.5">
              {requiredFields.map((item) => (
                <li key={item} className="flex gap-2.5">

                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden="true"
                  />

                  <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                    {item}
                  </span>

                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
              Statuses: Draft · Recorded · Under review · Superseded · Withdrawn
              · Reassessment required. Public product pages never expose
              customer-specific outcomes.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
