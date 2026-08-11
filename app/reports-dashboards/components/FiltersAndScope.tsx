import SectionIntro from "./SectionIntro";
import StatePill, { type PillTone } from "./StatePill";

const rows = [
  { label: "Requested filter", value: "Unit: Warehouse 4 · Role: All" },
  {
    label: "Authorized scope",
    value: "Unit: Warehouse 4 · Role: Hourly workers only",
  },
  {
    label: "Applied result",
    value: "Intersected — Role narrowed to Hourly workers",
  },
];

const constraintTypes: { label: string; tone: PillTone }[] = [
  { label: "Active", tone: "green" },
  { label: "Default", tone: "gray" },
  { label: "Inherited", tone: "blue" },
  { label: "Unavailable", tone: "red" },
];

export default function FiltersAndScope() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Filters, Scope & Comparability"
          title="Filters narrow. They never expand access."
          description="Every requested filter is intersected with server-authorized scope — role, purpose, organization, policy, jurisdiction, and worker scope all apply first."
          descriptionClassName="max-w-[610px]"
        />

        <div className="mt-12 rounded-[20px] border border-gray-200 px-7 py-3 dark:border-slate-800">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-gray-100 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 dark:border-slate-800"
            >
              <span className="text-sm text-slate-500">{row.label}</span>

              <span className="text-sm text-sky-950 dark:text-white">
                {row.value}
              </span>
            </div>
          ))}

          {/* Constraint types */}
          <div className="flex flex-col gap-3 border-b border-gray-100 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 dark:border-slate-800">
            <span className="text-sm text-slate-500">Constraint types shown</span>

            <div className="flex flex-wrap gap-2">
              {constraintTypes.map((type) => (
                <StatePill key={type.label} label={type.label} tone={type.tone} />
              ))}
            </div>
          </div>

          {/* Comparability */}
          <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <span className="text-sm text-slate-500">Comparability check</span>

            <span className="text-sm text-sky-950 dark:text-white">
              Blocked: incompatible policy versions across selected units
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
