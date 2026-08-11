import type { ReactNode } from "react";

const processing: { category: string; persists: ReactNode }[] = [
  {
    category: "Core application operations",
    persists: "Yes — to primary storage",
  },
  {
    category: "Deterministic time classification",
    persists: (
      <>
        Yes — as a reviewable record.{" "}
        <span className="font-bold text-sky-950 dark:text-white">Not AI.</span>
      </>
    ),
  },
  {
    category: "Analytics & reporting",
    persists: "Yes — governed outputs",
  },
  {
    category: "Security operations",
    persists: "Yes — logs, minimized",
  },
  {
    category: "Reliability operations",
    persists: "Yes — telemetry, service-scoped",
  },
  {
    category: "Support operations",
    persists: "Case records only",
  },
  {
    category: "AI-assisted functions (Kairos)",
    persists:
      "No new record created. Kairos decides nothing and cannot create a residency commitment.",
  },
];

const accessModel = [
  "Access type, purpose, eligible role, region, and approval stated per category",
  "Least privilege, session control, logging, and review apply throughout",
  "Customer support, security response, reliability operations, and implementation services are distinct access types",
  "Break-glass access has a named authority, a reason, a time limit, and an audit record",
];

const transferRecord = [
  "Origin and destination",
  "Data category and purpose",
  "Recipient or provider category",
  "Frequency",
  "Whether it is a normal or exceptional path",
  "Status, and the approved transfer-mechanism field",
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-col gap-2.5">
      {items.map((item) => (
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
  );
}

export default function ProcessingAndTransfers() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-10">

          {/* Processing & Support Access */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Processing &amp; Support Access
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Where Services and People Act on Data
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Remote access and data movement are not the same event, and this
              page does not treat them as one.
            </p>

            {/* Processing Table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200 dark:border-slate-800">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[420px] border-collapse text-left">

                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900">

                      <th className="w-[45%] border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                        Processing category
                      </th>

                      <th className="border-b border-stone-200 px-4 pb-3.5 pt-3 text-xs font-bold uppercase leading-5 tracking-wide text-sky-950 dark:border-slate-800 dark:text-white">
                        Results persist?
                      </th>

                    </tr>
                  </thead>

                  <tbody className="bg-white dark:bg-slate-950">
                    {processing.map((row) => (
                      <tr
                        key={row.category}
                        className="border-b border-stone-100 last:border-b-0 dark:border-slate-800/60"
                      >

                        <td className="px-4 py-3.5 align-top text-sm font-semibold leading-6 text-sky-950 dark:text-white">
                          {row.category}
                        </td>

                        <td className="px-4 py-3.5 align-top text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                          {row.persists}
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>
              </div>
            </div>

            {/* Access Model */}
            <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Access model
              </h3>

              <Bullets items={accessModel} />

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                No individual employee location is published, and no
                support-access location promise is made without staffing and
                operational evidence.
              </p>

            </div>

          </div>

          {/* Transfers & Mechanisms */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
              Transfers &amp; Mechanisms
            </p>

            <h2 className="mt-4 text-2xl font-bold leading-tight text-sky-950 dark:text-white sm:text-3xl">
              The path and the basis are separate
            </h2>

            {/* Transfer Record */}
            <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Every transfer record states
              </h3>

              <Bullets items={transferRecord} />

            </div>

            {/* What We Do Not Do */}
            <div className="mt-5 rounded-xl border border-[#F7DBE6] bg-[#FEF4F4] px-5 pb-5 pt-4 dark:border-red-900/40 dark:bg-red-950/20">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-red-700 dark:text-red-400">
                What we do not do
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-red-700 dark:text-red-200/80">
                ZoikoTime does not determine whether a transfer mechanism is
                legally applicable to your situation, and does not guarantee its
                sufficiency. Mechanism status and legal wording are
                authority-gated, and restricted legal documents use controlled
                or contractual access.
              </p>

            </div>

            {/* Where Platform Control Ends */}
            <div className="mt-5 rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                Where platform control ends
              </h3>

              <p className="mt-3 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Exports, email delivery, downloads, APIs, webhooks, and SFTP are
                separate channels with separate handoff points. Customer
                responsibility begins at the defined delivery or access
                boundary.
              </p>

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

                <span className="font-bold text-sky-950 dark:text-white">
                  Revocation does not erase already-exported copies.
                </span>{" "}
                Turning off a connector stops future delivery; it does not reach
                into a destination we never controlled. Not all integrations
                support the same region or transfer model.

              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
