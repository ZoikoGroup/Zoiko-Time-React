const integrityItems = [
  {
    title: "Cohort",
    description:
      "Membership rule, entry and exit, minimum group, time basis, permitted purpose.",
  },
  {
    title: "Period comparison",
    description:
      "Aligned calendars, time zones, workdays, policy versions, comparable populations.",
  },
  {
    title: "Organization comparison",
    description:
      "Consistent metric, scope, and privacy threshold. Leaderboard design is avoided deliberately.",
  },
  {
    title: "Target / threshold",
    description:
      "Labeled contractual, policy, operational, or illustrative. Never presented as a legal standard.",
  },
  {
    title: "Narrative",
    description:
      "States the observed pattern and its limitations. No causal, disciplinary, medical, legal, or performance conclusions.",
  },
];

const chartData = [
  { week: "W26", value: 88.2, note: "Baseline · policy v3, metric v2" },
  { week: "W27", value: 89.4, note: "Comparable to W26" },
  { week: "W28", value: 90.1, note: "Comparable to W26" },
  { week: "W29", value: 91.4, note: "Break — policy v4 effective" },
  { week: "W30", value: 92.5, note: "Comparable to W29" },
  { week: "W31", value: 93.6, note: "Comparable to W29" },
  { week: "W32", value: 95.1, note: "Break — metric definition v3" },
  { week: "W33", value: 96.4, note: "Comparable to W32" },
];

export default function SeriesBreakSection() {
  return (
    <section className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 gap-14 px-6 lg:grid-cols-2">

        {/* LEFT COLUMN */}
        <div className="flex flex-col">

          <span className="text-xs font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
            Trends, Cohorts & Comparison Integrity
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            A Series Break Is Not a
            <br className="hidden md:block" />
            Footnote
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Policy changes, reorganizations, source changes, metric versions,
            outages, period closes, and recalculations are marked directly on
            the series itself because a reader who misses them can easily draw
            the wrong conclusion.
          </p>

          <div className="mt-10 space-y-6">

                        {integrityItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-sm bg-emerald-400" />

                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gated Until Approved */}
          <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5 dark:border-red-900/40 dark:bg-red-950/20">
            <span className="block text-xs font-bold uppercase tracking-[0.18em] text-red-700 dark:text-red-400">
              Gated Until Approved
            </span>

            <p className="mt-3 text-sm leading-7 text-red-700 dark:text-red-300">
              Benchmarks require a documented cohort, lawful basis,
              methodology, freshness, minimum sample, owner, and approval.
              Forecasts require methodology, uncertainty, intended use,
              monitoring, and a human-review boundary. Neither appears by
              default.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-8">

          {/* Analytics Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Record Completeness — MT-014, Weekly
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Synthetic. Two comparability breaks marked.
            </p>

            {/* Chart */}
            <div className="mt-8 h-64 rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-950">
              <svg
                viewBox="0 0 700 260"
                className="h-full w-full"
                preserveAspectRatio="none"
              >
                {/* Grid Lines */}
                {[40, 90, 140, 190, 240].map((y) => (
                  <line
                    key={y}
                    x1="40"
                    y1={y}
                    x2="670"
                    y2={y}
                    stroke="#E2E8F0"
                    strokeWidth="1"
                  />
                ))}

                {/* Policy Break */}
                <line
                  x1="250"
                  y1="20"
                  x2="250"
                  y2="240"
                  stroke="#EA580C"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />

                {/* Metric Break */}
                <line
                  x1="520"
                  y1="20"
                  x2="520"
                  y2="240"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />
                                {/* Data Line */}
                <polyline
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="
                    55,180
                    125,168
                    195,158
                    265,145
                    335,130
                    405,116
                    475,96
                    545,78
                  "
                />

                {/* Data Points */}
                {[
                  [55, 180],
                  [125, 168],
                  [195, 158],
                  [265, 145],
                  [335, 130],
                  [405, 116],
                  [475, 96],
                  [545, 78],
                ].map(([x, y], index) => (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#22C55E"
                  />
                ))}

                {/* Policy Label */}
                <text
                  x="255"
                  y="16"
                  fontSize="11"
                  fill="#EA580C"
                >
                  Policy v4
                </text>

                {/* Metric Label */}
                <text
                  x="525"
                  y="16"
                  fontSize="11"
                  fill="#2563EB"
                >
                  Metric v3
                </text>

                {/* X-axis Labels */}
                {chartData.map((item, index) => (
                  <text
                    key={item.week}
                    x={55 + index * 70}
                    y="255"
                    textAnchor="middle"
                    fontSize="11"
                    fill="#64748B"
                  >
                    {item.week}
                  </text>
                ))}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm">

              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded bg-emerald-500"></span>
                <span className="text-slate-600 dark:text-slate-300">
                  Record completeness
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-4 border-l-2 border-orange-600"></span>
                <span className="text-slate-600 dark:text-slate-300">
                  Policy version change
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-4 border-l-2 border-blue-600"></span>
                <span className="text-slate-600 dark:text-slate-300">
                  Metric definition change
                </span>
              </div>

            </div>

            <p className="mt-6 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Values either side of a comparability break are not directly
              comparable. The series is intentionally shown with marked breaks
              so changes in policy or metric definitions are visible instead of
              being hidden in documentation.
            </p>

          </div>

          {/* Accessible Data Table */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">

                        <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-800">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Accessible data table — generated with every chart, not on request.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800">
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Week
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Completeness
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                      Comparability
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {chartData.map((row, index) => (
                    <tr
                      key={row.week}
                      className={`border-t border-slate-200 dark:border-slate-800 ${
                        index % 2 === 0
                          ? "bg-white dark:bg-slate-900"
                          : "bg-slate-50/60 dark:bg-slate-800/40"
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">
                        {row.week}
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                        {row.value.toFixed(1)}%
                      </td>

                      <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-300">
                        {row.note}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}