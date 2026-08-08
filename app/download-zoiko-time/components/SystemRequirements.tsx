const systemRequirements = [
  {
    platform: "macOS",
    os: "macOS 13 or later",
    memory: "4 GB RAM",
    storage: "400 MB free",
  },
  {
    platform: "Windows",
    os: "Windows 10 (64-bit) or later",
    memory: "4 GB RAM",
    storage: "450 MB free",
  },
  {
    platform: "iOS",
    os: "iOS 16 or later",
    memory: "—",
    storage: "150 MB free",
  },
  {
    platform: "Android",
    os: "Android 10 or later",
    memory: "—",
    storage: "140 MB free",
  },
  {
    platform: "Web",
    os: "Current Chrome, Edge, Safari, or Firefox",
    memory: "—",
    storage: "—",
  },
];

export default function SystemRequirements() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Header */}
        <div className="mb-10 flex w-full max-w-[600px] flex-col items-start gap-3.5 pt-1">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              System Requirements
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            What each platform needs to run ZoikoTime.
          </h2>
        </div>

        {/* Table */}
        <div className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-slate-800/70">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Platform
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    OS Version
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Memory
                  </th>

                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase leading-4 tracking-tight text-slate-800 dark:text-slate-200">
                    Storage
                  </th>
                </tr>
              </thead>

              <tbody>
                {systemRequirements.map((item) => (
                  <tr
                    key={item.platform}
                    className="border-t border-gray-100 dark:border-slate-800"
                  >
                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-700 dark:text-slate-300 sm:text-sm">
                      {item.platform}
                    </td>

                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400 sm:text-sm">
                      {item.os}
                    </td>

                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400 sm:text-sm">
                      {item.memory}
                    </td>

                    <td className="px-4 py-3 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400 sm:text-sm">
                      {item.storage}
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