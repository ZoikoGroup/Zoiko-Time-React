"use client";

type ExceptionItem = {
  type: string;
  action: string;
};

const exceptionItems: ExceptionItem[] = [
  {
    type: "Authorization expired · permission denied",
    action:
      "Restore permission or re-authorize. Access is never broadened to complete an exchange.",
  },
  {
    type: "Workspace or destination missing",
    action:
      "Correct mapping, or pause the affected mapping.",
  },
  {
    type: "Mapping conflict · duplicate · out-of-order",
    action:
      "Reconcile against source, bridge record, and destination status.",
  },
  {
    type:
      "Excluded category · policy or jurisdiction mismatch",
    action:
      "Request review or exclude with recorded reason.",
  },
  {
    type: "Retention conflict",
    action:
      "Route to authorized review. No automatic legal determination.",
  },
  {
    type: "Source or destination unavailable",
    action:
      "Retry safely, or quarantine pending review.",
  },
  {
    type: "Unsupported version",
    action:
      "Block and route to update path.",
  },
  {
    type:
      "Review overdue · test or acceptance expired · notice outdated",
    action:
      "Escalate to owner. Expired evidence is not reused.",
  },
];

export default function ExceptionsTable() {
  return (
    <section className="bg-white py-16 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}

                <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">
            Exceptions, Retry, Quarantine &amp; Reconciliation
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Fifteen Exception Types,
            <br className="hidden sm:block" />
            None of Them Silent
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Quarantine prevents uncertain context from reaching downstream
            workflows while preserving source, reason, owner, review,
            and expiry.
          </p>
        </div>

        {/* Exceptions Table */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
                      {/* Desktop Table */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                  <th className="w-[40%] px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300">
                    Exception Type
                  </th>

                  <th className="w-[60%] px-6 py-4 text-left text-xs font-bold uppercase tracking-[0.18em] text-slate-700 dark:text-slate-300">
                    Typical Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {exceptionItems.map((item, index) => (
                  <tr
                    key={item.type}
                    className={`${
                      index !== exceptionItems.length - 1
                        ? "border-b border-slate-200 dark:border-slate-700"
                        : ""
                    } hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors`}
                  >
                    <td className="px-6 py-5 align-top">
                      <p className="text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                        {item.type}
                      </p>
                    </td>

                    <td className="px-6 py-5 align-top">
                      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                        {item.action}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
                    {/* Mobile & Tablet Layout */}
          <div className="space-y-4 p-4 lg:hidden">
            {exceptionItems.map((item) => (
              <div
                key={`${item.type}-mobile`}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Exception Type
                    </p>

                    <h3 className="mt-2 text-base font-semibold leading-6 text-slate-900 dark:text-white">
                      {item.type}
                    </h3>
                  </div>

                  <div className="border-t border-slate-200 pt-4 dark:border-slate-700">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      Typical Action
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reconciliation Note */}
                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              ✓
            </div>

            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                Reconciliation
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                Reconciliation compares source, bridge record, destination
                status, version, review outcome, downstream effect, and
                corrective action. Conflicts are never silently overwritten.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-center text-xs leading-6 text-slate-500 dark:text-slate-400 md:text-sm">
            Closure requires the cause resolved, retry or reconciliation
            result, affected items reviewed, worker or participant
            communication where required, complete evidence, linked support or
            incident, logged prevention change, and an owner sign-off.
          </p>
        </div>
      </div>
    </section>
  );
}