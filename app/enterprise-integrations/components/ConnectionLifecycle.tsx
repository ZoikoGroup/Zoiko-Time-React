const stages = [
  {
    title: "Scope",
    body: "Systems, objects, direction, owner, purpose & authority.",
    output: "Request + responsibility record",
  },
  {
    title: "Authorize",
    body: "Which identity & least-privilege scope may connect.",
    output: "Grant · reviewer · expiry",
  },
  {
    title: "Map",
    body: "Fields, identifiers, units, time zones, states & versions.",
    output: "Versioned mapping contract",
  },
  {
    title: "Validate",
    body: "Complete, permitted, jurisdiction- & policy-appropriate.",
    output: "Validation result · exceptions",
  },
  {
    title: "Test",
    body: "Synthetic runs: failure, duplicate, delay, correction.",
    output: "Cases · expected/actual",
  },
  {
    title: "Approve",
    body: "Confirm scope, mapping, controls, support & rollback.",
    output: "Activation approval · SoD",
  },
  {
    title: "Activate",
    body: "Controlled release with preflight & safe rollback.",
    output: "Audit event · no silent launch",
  },
  {
    title: "Operate & reconcile",
    body: "Sent, received, acknowledged, retried, quarantined.",
    output: "Events · reconciliation cases",
  },
  {
    title: "Change / retire",
    body: "Version, roll back, revoke, export, decommission.",
    output: "Change approval · evidence",
  },
];

export default function ConnectionLifecycle() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            The Lifecycle
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            A nine-stage governed connection lifecycle
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Every connection moves through the same accountable path — each
            stage produces a required record or control.
          </p>
        </div>

        {/* Five across, then four centred beneath */}
        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-10">
          {stages.map(({ title, body, output }, index) => (
            <li
              key={title}
              className={`rounded-xl border border-slate-200 bg-white p-5 shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800 lg:col-span-2 ${
                index === 5 ? "lg:col-start-2" : ""
              }`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#10A28D] to-[#3FB97A] text-sm font-bold leading-6 text-white">
                {index + 1}
              </span>

              <h3 className="mt-3 text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                {title}
              </h3>

              <p className="mt-1.5 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {body}
              </p>

              <p className="mt-3 text-[11px] font-semibold leading-4 text-[#0B8675] dark:text-teal-400">
                {output}
              </p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-[900px] rounded-xl border border-emerald-100 bg-[#EAF6F3] px-5 py-4 text-center dark:border-slate-700 dark:bg-slate-800">
          <p className="text-sm font-normal leading-6 text-slate-800 dark:text-slate-300">
            This reduces ambiguity, strengthens handoffs, and improves evidence.
            It does <span className="font-bold text-[#0B8675]">not</span> promise
            error elimination, legal compliance, payroll correctness, or
            universal interoperability.
          </p>
        </div>
      </div>
    </section>
  );
}
