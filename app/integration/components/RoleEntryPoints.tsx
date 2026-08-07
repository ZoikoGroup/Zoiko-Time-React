import React from "react";

const roles = [
  "Sema workspace admin",
  "ZoikoTime admin",
  "Integration admin",
  "Security / privacy / legal",
  "Manager / reviewer",
  "Worker / participant",
  "Executive viewer",
];

export default function RoleEntryPoints() {
  return (
    <section className="bg-white px-4 py-12 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Role-Based Entry Points
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Seven Roles, Four Separate Authorities
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Workspace ownership, administrative role, reviewer authority, and
            workforce decision authority are separate things. Effective access
            determines the actual action.
          </p>
        </div>

        {/* Role Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {roles.map((role, index) => (
            <button
              key={role}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition
                ${
                  index === 0
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Sema workspace administrator
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            Select approved workspaces, confirm owners, propose context scope,
            review privacy and policy requirements, initiate tests, and see
            connection status according to permission.
          </p>

          <p className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
            <span className="font-semibold">Boundary —</span> Proposing a
            mapping is not approving one. Activation requires ZoikoTime-side
            authority.
          </p>
        </div>
      </div>
    </section>
  );
}
