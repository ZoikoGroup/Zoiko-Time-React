import SectionHeading from "./SectionHeading";

function VersionColumn({
  label,
  current,
  rows,
}: {
  label: string;
  current: boolean;
  rows: { field: string; value: string; struck?: boolean; changed?: boolean }[];
}) {
  return (
    <div
      className={`flex flex-col ${
        current ? "border-t md:border-l md:border-t-0" : "border-t md:border-t-0"
      } border-gray-200 dark:border-gray-700`}
    >
      <div
        className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wide ${
          current
            ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
            : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
        }`}
      >
        {label}
      </div>
      <div className="flex flex-col bg-white dark:bg-gray-800">
        {rows.map((r) => (
          <div
            key={r.field}
            className="flex items-center gap-2.5 border-b border-gray-100 px-4 py-2.5 last:border-b-0 dark:border-gray-700"
          >
            <span className="w-28 shrink-0 text-xs font-semibold text-gray-500 dark:text-gray-400">
              {r.field}
            </span>
            <span
              className={`text-xs ${
                r.struck
                  ? "font-bold text-red-500 line-through"
                  : r.changed
                    ? "font-bold text-emerald-600 dark:text-emerald-400"
                    : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CompareVersions() {
  return (
    <section className="bg-gray-50 px-4 py-16 dark:bg-gray-900 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4">
        <SectionHeading
          title="Compare versions without overwriting anything"
          description={
            <>
              The prior version is not a deleted draft. It remains a first-class
              object with its own attribution, and the comparison shows exactly which
              fields moved.
            </>
          }
        />

        <div className="grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 md:grid-cols-2">
          <VersionColumn
            label="Version 2 - prior, preserved"
            current={false}
            rows={[
              { field: "Duration", value: "6h 45m" },
              { field: "Project ref", value: "- not provided", struck: true },
              { field: "Rule version", value: "CLS-v12" },
              { field: "Status", value: "Needs input" },
              { field: "Created by", value: "System, at derivation" },
              { field: "Effective", value: "04 Aug 19:04 - 06 Aug 08:14" },
            ]}
          />
          <VersionColumn
            label="Version 3 - current"
            current
            rows={[
              { field: "Duration", value: "6h 45m" },
              { field: "Project ref", value: "PRJ-Northgate-02", changed: true },
              { field: "Rule version", value: "CLS-v12" },
              { field: "Status", value: "Approved" },
              { field: "Created by", value: "Worker correction, reviewer approved" },
              { field: "Effective", value: "07 Aug 09:30 - current" },
            ]}
          />
        </div>

        <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
          One field changed. Duration did not - which matters, because a correction
          that adds missing context is a different thing from a correction that
          changes hours, and the comparison makes that visible rather than requiring
          trust.
        </p>
      </div>
    </section>
  );
}
