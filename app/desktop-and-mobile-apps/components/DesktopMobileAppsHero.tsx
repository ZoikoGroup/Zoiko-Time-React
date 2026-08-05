import Link from "next/link";

export default function DesktopMobileAppsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[760px] -translate-x-1/2 rounded-full bg-teal-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 pb-28 pt-16">

        {/* Label */}
        <div className="flex justify-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-400">
            Desktop &amp; Mobile Apps
          </span>
        </div>


        {/* Heading */}
        <h1 className="mx-auto mt-5 max-w-4xl text-center text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl lg:text-[56px] lg:leading-[64px]">

          Review and manage workforce
          <br />

          records across{" "}

          <span className="text-teal-600 dark:text-teal-400">
            supported apps
          </span>

        </h1>


        {/* Description */}
        <p className="mx-auto mt-8 max-w-5xl text-center text-[17px] leading-8 text-slate-600 dark:text-slate-300">

          ZoikoTime gives workers, reviewers, and authorized administrators
          application experiences for visible record sessions, review,
          correction, approval, evidence, and administration — with platform
          support confirmed through current documentation.

        </p>


        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

          <Link
            href="/start-free"
            className="rounded-xl bg-teal-600 px-9 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/30 transition hover:bg-teal-700"
          >
            Start Free
          </Link>


          <Link
            href="/request-enterprise-demo"
            className="rounded-xl border border-slate-300 bg-white px-9 py-3.5 text-base font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            Request Enterprise Demo
          </Link>

        </div>


        {/* Trial Text */}
        <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">

          30-day trial · Human authority remains controlling · Platform and
          feature support vary by approved environment, role, plan, version,
          and region

        </p>



        {/* Device Preview Wrapper */}
        <div className="relative mt-16 flex justify-center lg:mt-24">


          {/* Desktop Monitor */}
          <div className="relative w-full max-w-[1180px] rounded-[28px] bg-slate-900 p-3 shadow-[0_30px_70px_rgba(14,31,61,0.30)]">


            {/* Camera */}
            <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-700" />


            {/* Screen */}
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-slate-900">


              {/* Window Header */}
              <div className="flex h-11 items-center gap-2 bg-slate-900 px-5">

                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/30" />


                <span className="ml-4 text-xs font-medium text-white/90">
                  ZoikoTime • Administrator Console
                </span>

              </div>



              {/* Dashboard Area */}
              <div className="flex min-h-[520px]">


                {/* Sidebar */}
                <aside className="hidden w-[195px] border-r border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900 lg:block">


                  <div className="px-6 pt-7">

                    <h3 className="text-sm font-extrabold tracking-wide">

                      <span className="text-slate-900 dark:text-white">
                        ZOIKO
                      </span>

                      <span className="text-teal-600">
                        TIME
                      </span>

                    </h3>

                  </div>


                  <nav className="mt-6 space-y-2 px-3">


                    <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm dark:bg-slate-800">

                      <span className="h-2 w-2 rounded-full bg-teal-600" />

                      <span className="text-sm font-medium text-slate-900 dark:text-white">
                        Overview
                      </span>

                    </div>


                    {[
                      "Application access",
                      "Roles & permissions",
                      "Policies",
                      "Availability",
                      "Releases",
                      "Audit",
                    ].map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-slate-500 dark:text-slate-400"
                      >

                        <span className="h-2 w-2 rounded-full bg-slate-300" />

                        {item}

                      </div>

                    ))}


                  </nav>


                </aside>



                {/* Main Dashboard Content */}
                <div className="flex-1 px-5 py-7 sm:px-8">


                  <div className="flex items-center justify-between">

                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                      Application availability
                    </h2>


                    <div className="flex h-8 items-center gap-2 rounded-full bg-emerald-50 px-4 dark:bg-emerald-900/20">

                      <span className="h-2 w-2 rounded-full bg-emerald-500" />

                      <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                        Healthy
                      </span>

                    </div>


                  </div>


                  {/* Table Wrapper Starts in Part 2 */}

                                    {/* Table */}
                  <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">

                    <div className="min-w-[800px]">


                      {/* Table Header */}
                      <div className="grid grid-cols-[220px_220px_140px_220px] bg-slate-50 dark:bg-slate-800">


                        <div className="border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-700">
                          Experience
                        </div>


                        <div className="border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-700">
                          Platform
                        </div>


                        <div className="border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-700">
                          Role
                        </div>


                        <div className="border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:border-slate-700">
                          Status
                        </div>


                      </div>



                      {/* Rows */}

                      {[
                        {
                          experience: "Worker mobile",
                          platform: "Mobile family",
                          role: "Worker",
                          status: "Supported",
                          color:
                            "bg-emerald-100 text-teal-700 dark:bg-emerald-900/20 dark:text-teal-300",
                        },

                        {
                          experience: "Worker desktop",
                          platform: "Desktop / Web",
                          role: "Worker",
                          status: "Supported",
                          color:
                            "bg-emerald-100 text-teal-700 dark:bg-emerald-900/20 dark:text-teal-300",
                        },

                        {
                          experience: "Reviewer",
                          platform: "Desktop / Web",
                          role: "Manager",
                          status: "Limited",
                          color:
                            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300",
                        },

                        {
                          experience: "Admin console",
                          platform: "Desktop / Web",
                          role: "Admin",
                          status: "Supported",
                          color:
                            "bg-emerald-100 text-teal-700 dark:bg-emerald-900/20 dark:text-teal-300",
                        },

                        {
                          experience: "Offline capture",
                          platform: "—",
                          role: "—",
                          status: "Not published",
                          color:
                            "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300",
                        },
                      ].map((row, index) => (

                        <div
                          key={row.experience}
                          className={`grid grid-cols-[220px_220px_140px_220px] ${
                            index !== 4
                              ? "border-b border-slate-200 dark:border-slate-700"
                              : ""
                          }`}
                        >

                          <div className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">
                            {row.experience}
                          </div>


                          <div
                            className={`px-6 py-4 text-sm ${
                              row.platform === "—"
                                ? "text-slate-400"
                                : "text-slate-800 dark:text-slate-200"
                            }`}
                          >
                            {row.platform}
                          </div>


                          <div
                            className={`px-6 py-4 text-sm ${
                              row.role === "—"
                                ? "text-slate-400"
                                : "text-slate-800 dark:text-slate-200"
                            }`}
                          >
                            {row.role}
                          </div>


                          <div className="flex items-center px-6 py-4">

                            <span
                              className={`rounded-full px-4 py-1 text-xs font-semibold ${row.color}`}
                            >
                              {row.status}
                            </span>

                          </div>


                        </div>

                      ))}


                    </div>

                  </div>


                </div>


              </div>


              {/* Desktop Monitor Stand Shadow */}
              <div className="mx-auto mt-8 h-4 w-[92%] rounded-b-2xl bg-slate-300 shadow-xl dark:bg-slate-700" />


            </div>

                      {/* Mobile Mockup */}
          <div className="absolute -right-16 bottom-[-40px] z-20 hidden lg:block">


            <div className="relative w-[255px] rounded-[42px] bg-slate-900 p-[10px] shadow-[0_30px_60px_rgba(14,31,61,0.30)]">


              {/* Phone Notch */}
              <div className="absolute left-1/2 top-2 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-slate-900" />


              {/* Phone Screen */}
              <div className="overflow-hidden rounded-[32px] bg-slate-50 dark:bg-slate-900">


                {/* Header */}
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-5 pb-6 pt-5">

                  <p className="text-[10px] text-white/80">
                    Northwind Ops • Tue, Aug 5
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Home
                  </h3>

                </div>



                {/* Status */}
                <div className="px-4 pt-4">

                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 dark:bg-emerald-900/20">

                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                      Recording time state · active
                    </span>

                  </div>

                </div>



                {/* Current Record */}
                <div className="px-4 pt-4">

                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">

                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Current Record
                    </p>


                    <h4 className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                      Shift · Started 09:00 · v3
                    </h4>


                  </div>

                </div>



                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 px-4 pt-4">


                  {[
                    {
                      value: "6h 12m",
                      label: "Recorded",
                    },
                    {
                      value: (
                        <>
                          On
                          <br />
                          Break
                        </>
                      ),
                      label: "Status",
                    },
                    {
                      value: "1",
                      label: "To review",
                    },
                  ].map((item) => (

                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-200 bg-white p-3 text-center dark:border-slate-700 dark:bg-slate-800"
                    >

                      <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                        {item.value}
                      </h5>


                      <p className="mt-1 text-[10px] text-slate-500">
                        {item.label}
                      </p>


                    </div>

                  ))}


                </div>



                {/* Buttons */}
                <div className="px-4 pt-5">

                  <button className="w-full rounded-xl bg-teal-600 py-3 text-sm font-semibold text-white transition hover:bg-teal-700">
                    Review &amp; Complete Timesheet
                  </button>

                </div>



                <div className="px-4 pt-3">

                  <button className="w-full rounded-xl border border-slate-300 bg-white py-3 text-sm font-semibold text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                    Request a Correction
                  </button>

                </div>



                {/* Privacy */}
                <div className="px-4 pt-4">

                  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">

                    <p className="text-[10px] uppercase tracking-wider text-slate-500">
                      Privacy &amp; Sync
                    </p>


                    <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-300">
                      Last synced 09:31 · 0 pending · What's in use
                    </p>

                  </div>

                </div>



                {/* Bottom Navigation */}
                <div className="mt-5 flex items-center justify-between border-t border-slate-200 bg-white px-5 py-4 dark:border-slate-700 dark:bg-slate-900">


                  {[
                    "Home",
                    "Records",
                    "Actions",
                    "History",
                    "More",
                  ].map((item, index) => (

                    <div
                      key={item}
                      className="flex flex-col items-center gap-1"
                    >

                      <div
                        className={`h-4 w-4 rounded ${
                          index === 0
                            ? "bg-emerald-100"
                            : "bg-slate-200 dark:bg-slate-700"
                        }`}
                      />

                      <span
                        className={`text-[10px] ${
                          index === 0
                            ? "font-semibold text-teal-600"
                            : "text-slate-500"
                        }`}
                      >
                        {item}
                      </span>

                    </div>

                  ))}


                </div>


              </div>



              {/* Phone Buttons */}
              <div className="absolute -left-[2px] top-28 h-14 w-[3px] rounded-l bg-slate-800" />

              <div className="absolute right-0 top-24 h-10 w-[3px] rounded-r bg-slate-800" />

              <div className="absolute right-0 top-40 h-8 w-[3px] rounded-r bg-slate-800" />


            </div>


          </div>



        </div>



        {/* Desktop Stand */}
        <div className="absolute -bottom-6 left-1/2 h-4 w-[96%] -translate-x-1/2 rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 shadow-[0_14px_22px_rgba(14,31,61,0.18)] dark:from-slate-700 dark:to-slate-800">


          <div className="mx-auto h-2 w-24 rounded-b-lg bg-slate-400 dark:bg-slate-600" />


        </div>


</div>
      </div>


    </section>
  );
}

    