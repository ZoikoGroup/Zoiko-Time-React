const components = [
  {
    component: "Source facts",
    content: "Captured event, timestamp, source, and worker/site context",
  },
  {
    component: "Context",
    content: "Schedule, grace window, timezone, and applicable exceptions",
  },
  {
    component: "Rules applied",
    content: "Named rule, policy version, and precedence path",
  },
  {
    component: "Result",
    content: "The classification outcome, stated in plain language",
  },
  {
    component: "Review state",
    content: "Whether the result requires human review before use",
  },
];

export default function ClassificationAnatomy() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Classification Anatomy
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            What&rsquo;s inside every classification result
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-[1040px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-slate-800">
                  <th className="w-[22%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Component
                  </th>
                  <th className="w-[78%] px-4 py-3.5 text-xs font-semibold leading-5 text-white">
                    Content
                  </th>
                </tr>
              </thead>

              <tbody>
                {components.map(({ component, content }, index) => (
                  <tr
                    key={component}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      index % 2 === 1 ? "bg-[#F6F9F9] dark:bg-slate-900/40" : ""
                    }`}
                  >
                    <td className="px-4 py-3 text-xs font-bold leading-5 text-slate-800 dark:text-white">
                      {component}
                    </td>
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300">
                      {content}
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
