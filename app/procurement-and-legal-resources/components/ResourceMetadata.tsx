"use client";

const resources = [
  {
    document: "Data Processing Addendum",
    access: "Public",
    version: "v4.1",
    reviewed: "Aug 1, 2026",
  },
  {
    document: "Security Controls Summary",
    access: "Controlled",
    version: "v3.2",
    reviewed: "Jul 14, 2026",
  },
  {
    document: "Sub-processor List",
    access: "Controlled",
    version: "v2.4",
    reviewed: "Jul 22, 2026",
  },
  {
    document: "Penetration Test Summary",
    access: "Customer-specific",
    version: "v1.0 (current cycle)",
    reviewed: "Jun 30, 2026",
  },
  {
    document: "Accessibility Conformance Statement",
    access: "Public",
    version: "v1.1",
    reviewed: "May 18, 2026",
  },
];

export default function ResourceMetadata() {
  return (
    <section className="bg-slate-50 px-6 py-16 dark:bg-slate-950 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">
            Resource Details &amp; Metadata
          </p>

          <h2 className="mx-auto mt-3 max-w-[820px] text-3xl font-bold leading-tight text-slate-800 dark:text-white lg:text-4xl">
            Every document carries the same evidence fields
          </h2>
        </div>

        {/* Table */}
        <div className="mt-10 w-full max-w-[1040px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0px_6px_18px_rgba(14,31,61,0.05),0px_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-800 dark:bg-slate-900">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-slate-800 text-left">
                  <th className="px-5 py-4 text-xs font-semibold text-white">
                    Document
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold text-white">
                    Access class
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold text-white">
                    Version
                  </th>
                  <th className="px-5 py-4 text-xs font-semibold text-white">
                    Last reviewed
                  </th>
                </tr>
              </thead>

              <tbody>
                {resources.map((item, index) => (
                  <tr
                    key={item.document}
                    className={`border-t border-slate-200 dark:border-slate-700 ${
                      index % 2 === 1
                        ? "bg-slate-50 dark:bg-slate-800/40"
                        : ""
                    }`}
                  >
                    <td className="px-5 py-4 text-xs font-bold text-slate-800 dark:text-white">
                      {item.document}
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-600 dark:text-slate-300">
                      {item.access}
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-600 dark:text-slate-300">
                      {item.version}
                    </td>

                    <td className="px-5 py-4 text-xs text-slate-600 dark:text-slate-300">
                      {item.reviewed}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 max-w-[840px] text-center">
          <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
            Version and review-date fields shown here are illustrative
            examples from the governed registry.
          </p>
        </div>
      </div>
    </section>
  );
}