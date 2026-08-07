"use client";

const mappingFields = [
  "Sema workspace, destination type and ID",
  "Purpose, effective date, review date",
  "Owner, reviewer, policy profile",
  "Context scope, status, version",
];

const relationshipTypes = [
  "One-to-one, one-to-many, many-to-one",
  "Inherited or manual exception",
  "Only when supported and documented",
];

const conflictChecks = [
  "Destination already mapped",
  "Overlapping scope, ownership mismatch",
  "Effective-date or jurisdiction conflict",
  "Policy incompatibility, archived object, duplicate",
];

export default function OrgMap() {
  return (
    <section className="bg-white px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            ZoikoTime Organizational Mapping
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            An Administrative Relationship,
            <br className="hidden sm:block" />
            Not an Employment One
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 dark:text-slate-300">
            A mapping connects a workspace to an approved ZoikoTime team,
            department, unit, project, or entity scope. Only supported object
            types are published.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Mapping Fields */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
              Mapping Fields
            </h3>

            <ul className="space-y-3">
              {mappingFields.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Relationship Types */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
              Relationship Types
            </h3>

            <ul className="space-y-3">
              {relationshipTypes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Conflict Checks */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-5 text-lg font-bold text-slate-900 dark:text-white">
              Conflict Checks
            </h3>

            <ul className="space-y-3">
              {conflictChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
          <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
            ✓
          </div>

          <p className="text-base font-semibold leading-7 text-slate-900 dark:text-white">
            Organizational mapping does not establish employment status,
            payroll group, manager authority, or legal entity. Those are
            governed separately in ZoikoTime, and a mapping never creates them
            by implication.
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Preview shows which approved context categories and workflows would be
          affected. It never previews participant-level content. Changing a
          destination requires impact analysis, testing, approval, effective
          date, notice review, rollback, and audit.
        </p>
      </div>
    </section>
  );
}