import Link from "next/link";

const releases = [
  {
    version: "v6.4.2",
    description:
      "Faster sync and a fix for offline correction requests.",
    date: "Aug 3, 2026",
  },
  {
    version: "v6.4.1",
    description:
      "Biometric sign-in support on supported devices.",
    date: "Jul 21, 2026",
  },
  {
    version: "v6.4.0",
    description:
      "Cross-device sync for correction requests.",
    date: "Jul 8, 2026",
  },
];

export default function UpdatesReleaseNotes() {
  return (
    <section className="w-full bg-gray-50 px-4 py-16 transition-colors dark:bg-slate-950 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Header */}
        <div className="flex w-full max-w-[600px] flex-col items-start gap-3.5 pt-1">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-teal-600 dark:bg-teal-400" />

            <span className="text-xs font-semibold uppercase leading-5 tracking-wide text-teal-700 dark:text-teal-400">
              Updates &amp; Release Notes
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-10 text-slate-800 dark:text-white sm:text-4xl">
            Stay current without thinking about it
          </h2>
        </div>

        {/* Release List */}
        <div className="mt-10 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

          {releases.map((release, index) => (
            <div
              key={release.version}
              className={`grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[100px_1fr_120px] sm:items-center sm:gap-4 ${
                index !== 0
                  ? "border-t border-gray-100 dark:border-slate-800"
                  : ""
              }`}
            >
              {/* Version */}
              <div>
                <span className="text-sm font-semibold leading-5 text-slate-800 dark:text-slate-100">
                  {release.version}
                </span>
              </div>

              {/* Description */}
              <div>
                <p className="text-xs font-normal leading-5 text-gray-700 dark:text-slate-300 sm:text-sm">
                  {release.description}
                </p>
              </div>

              {/* Date */}
              <div className="sm:text-right">
                <span className="text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                  {release.date}
                </span>
              </div>
            </div>
          ))}

          {/* Bottom Links */}
          <div className="flex flex-col gap-3 border-t border-slate-200 bg-gray-50 px-5 py-4 dark:border-slate-800 dark:bg-slate-800/50 sm:flex-row sm:items-center sm:gap-8">

            {/* Release Notes */}
            <Link
              href="/release-notes"
              className="text-left text-xs font-semibold leading-5 text-teal-700 transition-colors hover:text-teal-800 hover:underline dark:text-teal-400 dark:hover:text-teal-300"
            >
              View full Release Notes →
            </Link>

            {/* Product Page */}
            <Link
              href="/product"
              className="text-left text-xs font-semibold leading-5 text-teal-700 transition-colors hover:text-teal-800 hover:underline dark:text-teal-400 dark:hover:text-teal-300"
            >
              See what's new in Product Updates →
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}