import React from "react";

export default function DesktopMobileApps() {
  const cards = [
    {
      title: "Visible work",
      description:
        "Workers can understand current record state, next actions, corrections, review, and collection boundaries according to approved configuration.",
    },
    {
      title: "Governed continuity",
      description:
        "Records move across supported surfaces through versions, permissions, synchronization, reconciliation, and Evidence Ledger history.",
    },
    {
      title: "Qualified availability",
      description:
        "Unsupported or gated platforms and capabilities are absent — never presented as disabled or “coming soon.”",
    },
    {
      title: "Human authority",
      description:
        "Applications support reviewable records and authorized actions; they do not decide misconduct, discipline, payroll, or legal outcomes.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-600">
            What are ZoikoTime desktop & mobile apps?
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-800 dark:text-white sm:text-4xl">
            Supported worker and administrator
            <br className="hidden sm:block" />
            experiences
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 dark:text-gray-400">
            ZoikoTime provides supported application experiences for workers and
            authorized administrators to view, create, review, correct, approve,
            and manage governed workforce records. Exact desktop, mobile,
            browser, OS, device, offline, notification, permission, plan,
            region, and role support must be confirmed in current availability
            documentation.
          </p>

        </div>


        {/* Anti Surveillance Card */}
        <div
          className="
          mx-auto
          mt-14
          flex
          max-w-4xl
          gap-5
          rounded-2xl
          bg-slate-800
          p-6
          shadow-[0_10px_30px_rgba(14,31,61,0.10)]
          "
        >

          <div
            className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-white/10
            "
          >
            <div className="h-5 w-5 rounded border-2 border-teal-600" />
          </div>


          <div>

            <p className="text-xs font-bold uppercase tracking-wider text-teal-600">
              Anti-surveillance invariant
            </p>


            <p className="mt-2 text-sm font-medium leading-6 text-white sm:text-base">
              No screenshots, keystroke content, URL history,
              application-name monitoring, or clipboard collection under any
              tier or configuration.
            </p>

          </div>

        </div>



        {/* Feature Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {cards.map((card) => (
            <div
              key={card.title}
              className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-[0_6px_18px_rgba(14,31,61,0.05)]
              dark:border-slate-800
              dark:bg-slate-900
              "
            >

              <div className="flex items-center gap-3">

                <span className="h-2 w-2 rounded-sm bg-teal-600" />

                <h3 className="text-base font-semibold text-slate-800 dark:text-white">
                  {card.title}
                </h3>

              </div>


              <p className="mt-5 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {card.description}
              </p>


            </div>
          ))}

        </div>


      </div>
    </section>
  );
}