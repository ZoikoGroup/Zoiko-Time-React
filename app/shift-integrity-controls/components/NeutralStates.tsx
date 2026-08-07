import { Info } from "lucide-react";

const states = [
  {
    state: "Captured",
    tone: "bg-gray-50 text-gray-500 border border-gray-300",
    meaning: "Shift event received; evaluation pending",
    owner: "System",
  },
  {
    state: "Verified",
    tone: "bg-emerald-50 text-teal-700",
    meaning: "Evaluated against policy with no unresolved conflict",
    owner: "System",
  },
  {
    state: "Needs Context",
    tone: "bg-orange-100 text-yellow-700",
    meaning: "A required detail is missing or conflicting",
    owner: "Worker",
  },
  {
    state: "Pending Review",
    tone: "bg-indigo-50 text-blue-700",
    meaning: "Context provided; awaiting reviewer decision",
    owner: "Reviewer",
  },
  {
    state: "Corrected",
    tone: "bg-indigo-50 text-blue-700",
    meaning: "Authorized change recorded with full history",
    owner: "Reviewer",
  },
  {
    state: "Approved",
    tone: "bg-emerald-50 text-teal-700",
    meaning: "Required controls complete; ready for downstream use",
    owner: "Approver",
  },
];

export default function NeutralStates() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Neutral State Model
          </p>
          <h2 className="mx-auto mt-3 max-w-[740px] text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Every state describes the record — never the worker
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[1040px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-800">
                  <th className="w-[24%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    State
                  </th>
                  <th className="w-[62%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Meaning
                  </th>
                  <th className="w-[14%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Owner
                  </th>
                </tr>
              </thead>

              <tbody>
                {states.map(({ state, tone, meaning, owner }, index) => (
                  <tr
                    key={state}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      index % 2 === 1 ? "bg-gray-50 dark:bg-slate-900/40" : ""
                    }`}
                  >
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-[20px] px-3 py-1.5 text-xs font-bold leading-5 ${tone}`}
                      >
                        {state}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {meaning}
                    </td>
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {owner}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 flex items-start justify-center gap-2 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
          <Info
            className="mt-0.5 h-3.5 w-3.5 shrink-0"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <span>
            Canonical example: &ldquo;Late Clock-In — Pending Review.&rdquo;
            Never &ldquo;no-show,&rdquo; &ldquo;tardy,&rdquo; or any label
            implying fault before review.
          </span>
        </p>
      </div>
    </section>
  );
}
