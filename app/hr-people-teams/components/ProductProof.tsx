import Link from "next/link";

const tabs = [
  "Workforce Overview",
  "Review Queue",
  "Record Detail",
  "Audit History",
];

const stats = [
  { value: "1,284", label: "Complete records" },
  { value: "37", label: "Pending review" },
  { value: "12", label: "Missing approval" },
  { value: "9", label: "Policy exception" },
];

const queue = [
  {
    record: "Unverified Exit — 8842-A",
    age: "4h",
    reviewer: "M. Alders",
    comment: "Added",
  },
  {
    record: "Missing Break Log — 7710-C",
    age: "1d",
    reviewer: "R. Osei",
    comment: "—",
  },
  {
    record: "Schedule Mismatch — 6529-B",
    age: "2d",
    reviewer: "M. Alders",
    comment: "Added",
  },
];

const timeline = [
  {
    event: "Time event captured via desktop clock-in",
    detail: "09:02 · Deterministic classification: On Schedule",
  },
  {
    event: "Policy exception flagged — early exit, no logged break",
    detail: "17:41 · Evidence: schedule variance, no camera or app data",
  },
  {
    event: "Worker added context; correction requested",
    detail: "Next day, 08:15",
  },
];

const auditTrail = [
  {
    event: "Change: status set to Approved by M. Alders (HR)",
    detail: "Reason: correction reviewed and accepted",
  },
  {
    event: "Before: Pending Review → After: Approved",
    detail: "Append-only audit event",
  },
];

const panelClass =
  "rounded-2xl border border-slate-200 bg-white shadow-[0px_8px_20px_-12px_rgba(10,22,40,0.18)] dark:border-slate-800 dark:bg-slate-900";

export default function ProductProof() {
  return (
    <section className="w-full overflow-hidden bg-[#F0FBF6] dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[680px] flex-col items-center text-center">

          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600"
              aria-hidden="true"
            />
            <p className="text-xs font-bold uppercase leading-5 tracking-widest text-emerald-700 dark:text-emerald-400">
              Product Proof
            </p>
          </div>

          <h2 className="mt-3.5 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            See the Workforce Record Before You Rely on It
          </h2>

          <p className="mt-3.5 text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            HR can review attendance, exceptions, break states, corrections,
            approvals, and export readiness without monitoring private worker
            activity.
          </p>

        </div>

        {/* Product Panel */}
        <div className="mt-11 flex flex-col gap-4 rounded-[20px] border border-green-100 bg-[#F0FBF6] p-5 sm:p-9 dark:border-slate-800 dark:bg-slate-950">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <span
                key={tab}
                className={`rounded-full border px-4 py-2 text-sm font-semibold leading-5 ${
                  index === 0
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-gray-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>

          {/* Stat Tiles */}
          <div className={`${panelClass} px-6 pb-6 pt-8`}>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center gap-1 rounded-[10px] bg-zinc-100 px-4 py-4 dark:bg-slate-800"
                >
                  <span className="text-2xl font-extrabold leading-10 text-slate-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="text-center text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Queue Table */}
          <div className={`${panelClass} overflow-x-auto px-6 pb-6 pt-8`}>
            <table className="w-full min-w-[720px] border-collapse text-left">

              <thead>
                <tr>
                  {["Record", "Age", "Reviewer", "Worker comment", "Status"].map(
                    (heading) => (
                      <th
                        key={heading}
                        className="border-b border-slate-200 px-3 py-2.5 text-xs font-bold uppercase leading-5 tracking-wide text-slate-400 dark:border-slate-700"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>

              <tbody>
                {queue.map((row) => (
                  <tr key={row.record}>

                    <td className="w-2/5 border-b border-slate-200 px-3 py-3 text-sm font-normal leading-5 text-slate-900 dark:border-slate-700 dark:text-white">
                      {row.record}
                    </td>

                    <td className="w-20 border-b border-slate-200 px-3 py-3 text-sm font-normal leading-5 text-slate-900 dark:border-slate-700 dark:text-white">
                      {row.age}
                    </td>

                    <td className="w-36 border-b border-slate-200 px-3 py-3 text-sm font-normal leading-5 text-slate-900 dark:border-slate-700 dark:text-white">
                      {row.reviewer}
                    </td>

                    <td className="border-b border-slate-200 px-3 py-3 text-sm font-normal leading-5 text-slate-900 dark:border-slate-700 dark:text-white">
                      {row.comment}
                    </td>

                    <td className="border-b border-slate-200 px-3 py-3 dark:border-slate-700">
                      <span className="inline-flex whitespace-nowrap rounded-full bg-yellow-50 px-2.5 py-0.5 text-xs font-bold leading-5 text-yellow-700">
                        Pending Review
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

          {/* Record Timeline */}
          <div className={`${panelClass} p-6`}>
            {timeline.map((item, index) => (
              <div
                key={item.event}
                className={`flex items-start gap-4 py-3.5 ${
                  index === 0 ? "" : "border-t border-slate-200 dark:border-slate-700"
                }`}
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-emerald-600"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-normal leading-5 text-slate-900 dark:text-white">
                    {item.event}
                  </span>
                  <span className="text-xs font-normal leading-5 text-slate-400">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Audit History */}
          <div className={`${panelClass} p-6`}>
            {auditTrail.map((item, index) => (
              <div
                key={item.event}
                className={`flex items-start gap-4 py-3.5 ${
                  index === 0 ? "pt-0" : "border-t border-slate-200 dark:border-slate-700"
                }`}
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-slate-400"
                  aria-hidden="true"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-normal leading-5 text-slate-900 dark:text-white">
                    {item.event}
                  </span>
                  <span className="text-xs font-normal leading-5 text-slate-400">
                    {item.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="flex flex-col items-center gap-3.5 pt-1.5">

            <p className="text-center text-sm font-normal leading-5 text-gray-500 dark:text-slate-400">
              Every panel above reflects the actual review workflow HR uses — no
              productivity scores, no behavior inference.
            </p>

            <Link
              href="/request-enterprise-demo"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-center text-base font-semibold leading-6 text-white transition hover:bg-slate-800"
            >
              Request Enterprise Demo — see this with your policies
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
