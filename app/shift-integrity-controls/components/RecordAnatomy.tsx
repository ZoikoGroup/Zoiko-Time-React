const fields = [
  {
    field: "Captured events",
    description:
      "Clock-in/out, break, and time source, each with its own timestamp",
  },
  {
    field: "Policy applied",
    description:
      "Rule set, version, and effective date used for the evaluation",
  },
  {
    field: "Evaluation outcome",
    description:
      "Deterministic state and the specific conditions that produced it",
  },
  {
    field: "Worker context",
    description: "Comments, attached context, and correction requests",
  },
  {
    field: "Reviewer decision",
    description: "Actor, decision, rationale, and timestamp",
  },
  {
    field: "Version history",
    description: "Before/after values for every authorized change",
  },
];

export default function RecordAnatomy() {
  return (
    <section className="w-full bg-[#F6F9F9] py-16 dark:bg-slate-900 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Recorded Shift Record Anatomy
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            What&rsquo;s inside every record
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[1040px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-800">
                  <th className="w-[30%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Field
                  </th>
                  <th className="w-[70%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody>
                {fields.map(({ field, description }, index) => (
                  <tr
                    key={field}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      index % 2 === 1 ? "bg-gray-50 dark:bg-slate-900/40" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-xs font-bold leading-5 text-slate-800 dark:text-white">
                      {field}
                    </td>
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {description}
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
