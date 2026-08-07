const states = [
  {
    state: "Verified",
    tone: "bg-emerald-50 text-teal-700",
    meaning: "Facts evaluated against policy with no unresolved conflict",
  },
  {
    state: "Needs Context",
    tone: "bg-orange-100 text-yellow-700",
    meaning: "A required fact is missing or in conflict with policy expectation",
  },
  {
    state: "Pending Review",
    tone: "bg-indigo-50 text-blue-700",
    meaning: "Context received; awaiting an authorized reviewer's decision",
  },
  {
    state: "Corrected",
    tone: "bg-indigo-50 text-blue-700",
    meaning: "An authorized change has been made and recorded with full history",
  },
  {
    state: "Approved",
    tone: "bg-emerald-50 text-teal-700",
    meaning: "Result confirmed and ready for downstream use",
  },
];

export default function NeutralResult() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Neutral States
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            A result is a classification — not a verdict
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[1040px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-800">
                  <th className="w-[24%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    State
                  </th>
                  <th className="w-[76%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Meaning
                  </th>
                </tr>
              </thead>

              <tbody>
                {states.map(({ state, tone, meaning }, index) => (
                  <tr
                    key={state}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      index % 2 === 1 ? "bg-[#F6F9F9] dark:bg-slate-900/40" : ""
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
