import Image from "next/image";

const audiences = [
  { audience: "Administrators", enrolled: "48", readiness: 95 },
  { audience: "Managers", enrolled: "206", readiness: 84 },
  { audience: "Workers", enrolled: "1,510", readiness: 72 },
  { audience: "Payroll", enrolled: "22", readiness: 78 },
];

const points = [
  "Role- and team-based enrollment",
  "Progress & readiness dashboards",
  "Nudges & reminders, never monitoring",
];

export default function MeetLearners() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Audience &amp; Readiness
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Meet every learner where they are
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
            Assign by role and readiness, track progress, and nudge the learners
            who need it.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Readiness table */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-[0px_20px_40px_-24px_rgba(10,22,40,0.35)] dark:bg-slate-900">
            <div className="flex items-center justify-between gap-3 bg-slate-900 px-5 py-4">
              <p className="text-sm font-semibold leading-5 text-white">
                Audience readiness
              </p>
              <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold leading-4 text-teal-400">
                86% active
              </span>
            </div>

            <div className="px-5 pb-5 pt-1">
              <table className="w-full table-fixed border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="w-[42%] py-3 text-left text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-400">
                      Audience
                    </th>
                    <th className="w-[22%] py-3 text-left text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-400">
                      Enrolled
                    </th>
                    <th className="w-[36%] py-3 text-left text-[10px] font-semibold uppercase leading-4 tracking-wider text-gray-400">
                      Readiness
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {audiences.map(({ audience, enrolled, readiness }) => (
                    <tr
                      key={audience}
                      className="border-b border-slate-200 dark:border-slate-700"
                    >
                      <td className="py-3.5 text-sm font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {audience}
                      </td>
                      <td className="py-3.5 text-sm font-normal leading-5 text-slate-800 dark:text-slate-200">
                        {enrolled}
                      </td>
                      <td className="py-3.5">
                        <div
                          className="h-1 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"
                          role="img"
                          aria-label={`${readiness}% ready`}
                        >
                          <div
                            className="h-full rounded-full bg-teal-600"
                            style={{ width: `${readiness}%` }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="mt-4 text-xs font-normal leading-5 text-gray-400">
                Readiness reflects completion and practice — not activity
                tracking.
              </p>
            </div>
          </div>

          {/* Supporting points */}
          <div>
            <h3 className="text-2xl font-bold leading-8 text-slate-800 dark:text-white">
              Readiness you can see
            </h3>

            <p className="mt-4 text-base font-normal leading-7 text-gray-500 dark:text-slate-400">
              Segment audiences by role, team, and prior experience, then track
              completion and readiness across the organization — with gentle,
              respectful nudges instead of surveillance.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <Image
                    src="/training-adoption/tick-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className="h-4 w-4 shrink-0"
                  />
                  <span className="text-sm font-normal leading-6 text-slate-800 dark:text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
