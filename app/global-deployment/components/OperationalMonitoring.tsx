const monitors = [
  {
    monitor: "Configuration",
    signals:
      "Unexpected version, missing owner, expired exception, unreviewed change",
    action:
      "Accountable attention with owner, due state, evidence, neutral language",
  },
  {
    monitor: "Time / locale",
    signals: "DST mismatch, ambiguous time, calendar conflict, format failure",
    action: "Block or review — never a guessed resolution",
  },
  {
    monitor: "Identity / access",
    signals:
      "Provisioning mismatch, expired privilege, denied action, overdue review",
    action: "Least-privilege recovery, no broader fallback",
  },
  {
    monitor: "Integrations",
    signals:
      "Failure, duplicate, ordering, mapping, acknowledgement, correction pending",
    action: "Retry safely, reconcile, preserve evidence",
  },
  {
    monitor: "Support / incidents",
    signals:
      "Routing gap, unacknowledged case, owner mismatch, overdue update",
    action: "Escalate by approved support profile",
  },
  {
    monitor: "Evidence / documents",
    signals:
      "Stale artifact, missing review, withdrawn link, incomplete approval, export failure",
    action: "Withdraw the claim and route accountable review",
  },
];

const neverCollected = [
  "Screenshots",
  "Keystroke content",
  "URL history",
  "Application-name monitoring",
  "Clipboard collection",
  "Hidden productivity scores",
];

const humanAuthority = [
  "Flags and anomalies are evidence for review, not findings",
  "Time classification is deterministic, policy-bound, and explainable",
  "Kairos may retrieve, summarize, and explain approved governed data — Kairos decides nothing",
  "Authorized people make every consequential decision",
];

export default function OperationalMonitoring() {
  return (
    <section className="w-full overflow-hidden bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Operational Monitoring &amp; Reconciliation
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            We Monitor the System, Never the Person
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-slate-400">
            Monitoring covers service, record, integration, support, and
            evidence quality. It never covers covert behavior or individual
            productivity — and no configuration changes that.
          </p>

        </div>

        {/* Monitoring Table */}
        <div className="mt-10 overflow-x-auto">

          <table className="w-full min-w-[860px] border-collapse text-left">

            <thead>
              <tr>

                <th className="w-40 border-b border-white/[0.12] px-3 pb-2 text-xs font-bold uppercase leading-5 tracking-wide text-slate-400">
                  Monitor
                </th>

                <th className="w-[45%] border-b border-white/[0.12] px-3 pb-2 text-xs font-bold uppercase leading-5 tracking-wide text-slate-400">
                  Approved signals
                </th>

                <th className="border-b border-white/[0.12] px-3 pb-2 text-xs font-bold uppercase leading-5 tracking-wide text-slate-400">
                  Action model
                </th>

              </tr>
            </thead>

            <tbody>
              {monitors.map((row) => (
                <tr key={row.monitor} className="border-b border-white/[0.07]">

                  <td className="px-3 py-4 align-top text-xs font-semibold leading-5 text-white">
                    {row.monitor}
                  </td>

                  <td className="px-3 py-4 align-top text-xs font-normal leading-5 text-slate-300">
                    {row.signals}
                  </td>

                  <td className="px-3 py-4 align-top text-xs font-normal leading-5 text-slate-300">
                    {row.action}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>

        {/* Boundary Panels */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* Never Collected */}
          <div className="flex flex-col rounded-2xl border border-white/[0.14] bg-white/[0.04] p-6">

            <div className="flex items-center gap-2">

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-red-400"
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

              <h3 className="text-base font-bold leading-6 text-white">
                Never collected or represented
              </h3>

            </div>

            <ul className="mt-3.5 flex flex-col gap-2.5">

              {neverCollected.map((item) => (
                <li key={item} className="flex gap-2">

                  <span
                    className="text-sm font-bold leading-6 text-red-400"
                    aria-hidden="true"
                  >
                    ×
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

          {/* Human Authority */}
          <div className="flex flex-col rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6">

            <div className="flex items-center gap-2">

              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-emerald-400"
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
                  d="M5.7 8.1L7.3 9.7L10.3 6.5"
                  stroke="currentColor"
                  strokeWidth="1.65"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3 className="text-base font-bold leading-6 text-white">
                Human authority holds
              </h3>

            </div>

            <ul className="mt-3.5 flex flex-col gap-2.5">

              {humanAuthority.map((item) => (
                <li key={item} className="flex gap-2">

                  <span
                    className="text-xs font-bold leading-6 text-emerald-400"
                    aria-hidden="true"
                  >
                    ✓
                  </span>

                  <span className="text-sm font-normal leading-6 text-slate-300">
                    {item}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}
