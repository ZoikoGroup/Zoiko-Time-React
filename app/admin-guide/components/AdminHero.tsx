import React from "react";

export default function AdminHero() {
  const features = [
    "Role-based access",
    "Worker transparency",
    "Audit-ready records",
    "Responsible configuration",
    "Governance-conscious",
  ];

  const checklist = [
    "Confirm Workspace Profile",
    "Create Departments",
    "Add Workers",
    "Assign Roles and Permissions",
    "Configure Time and Activity Settings",
    "Configure Screenshots (if applicable)",
    "Prepare Reports and Exports",
    "Prepare Worker Communication",
  ];

  return (
    <section className="relative overflow-hidden bg-emerald-50 dark:bg-black transition-colors">

      {/* Gradient Top Line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600" />

      {/* Background Effects */}
      <div className="absolute right-[-60px] top-[-80px] h-[480px] w-[480px] rounded-full bg-teal-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-[-60px] h-72 w-96 rounded-full bg-indigo-500/5 blur-3xl" />


      <div className="mx-auto max-w-[1052px] px-6 pb-16 pt-28 lg:px-0">

        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* LEFT CONTENT */}

          <div>


            <div className="mb-6 flex h-6 w-28 items-center justify-center rounded-full border border-teal-500/20 bg-teal-500/10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                Admin Guide
              </span>
            </div>


            <h1 className="text-4xl font-semibold leading-[1.05] text-neutral-800 dark:text-white lg:text-5xl">
              Configure and Govern
              <br />
              ZoikoTime With
              <br />
              Confidence
            </h1>


            <p className="mt-8 text-base leading-7 text-neutral-800/60 dark:text-white/60">
              A structured guide for workspace owners and administrators
              managing setup, departments, workers, permissions, time and
              activity settings, reporting, evidence controls, and
              responsible governance.
            </p>


            <p className="mt-8 text-base leading-6 text-neutral-800/40 dark:text-white/40">
              Use this guide to understand the core administrative model —
              from creating your workspace and departments to configuring
              time settings, managing reports, supporting workers, and
              governing records responsibly.
            </p>


            <div className="mt-10 flex flex-wrap gap-5">

              <button className="h-12 w-40 rounded-lg bg-teal-600 font-semibold text-white shadow-lg shadow-teal-600/30">
                Contact Sales
              </button>


              <button className="h-12 w-48 rounded-lg border border-teal-600 text-sm font-medium text-teal-600 dark:text-teal-400">
                Get a Demo
              </button>

            </div>


            <p className="mt-8 text-xs text-neutral-800/30 dark:text-white/30">
              Built for permission-based administration, worker transparency,
              accountable review, and audit-ready records.
            </p>


          </div>



          {/* CHECKLIST CARD */}

          <div className="rounded-2xl border border-neutral-800/10 bg-neutral-800/5 p-6 dark:border-white/10 dark:bg-white/5">


            <h3 className="mb-5 text-xs font-bold uppercase tracking-wide text-neutral-800/40 dark:text-white/40">
              ADMIN QUICK START CHECKLIST
            </h3>


            {checklist.map((item,index)=>(

              <div
                key={item}
                className={`mb-2 flex items-center rounded-md border p-3 ${
                  index < 2
                  ?
                  "border-teal-500/20 bg-teal-600/10"
                  :
                  "border-neutral-800/5 bg-neutral-800/5 dark:border-white/10 dark:bg-white/5"
                }`}
              >

                <span
                  className={`mr-3 flex h-4 w-4 items-center justify-center rounded text-[9px] font-bold ${
                    index < 2
                    ?
                    "bg-teal-600 text-white"
                    :
                    "border border-neutral-400 text-neutral-500"
                  }`}
                >
                  {index < 2 ? "✓" : index+1}
                </span>


                <span className={`text-xs ${
                  index < 2
                  ?
                  "text-neutral-800 dark:text-white"
                  :
                  "text-neutral-600 dark:text-white/60"
                }`}>
                  {item}
                </span>


              </div>

            ))}


          </div>

        </div>



        {/* FEATURES */}

        <div className="mt-8 grid gap-4 border-t border-neutral-800/10 bg-neutral-800/5 px-6 py-6 text-xs font-semibold text-neutral-800/60 sm:grid-cols-2 lg:grid-cols-5 dark:border-white/10 dark:bg-white/5 dark:text-white/60">

          {
            features.map(item=>(
              <div key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500"/>
                {item}
              </div>
            ))
          }

        </div>


      </div>

    </section>
  );
}