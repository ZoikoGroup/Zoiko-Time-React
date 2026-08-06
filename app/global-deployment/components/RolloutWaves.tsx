import Image from "next/image";

const waveCards = [
  {
    title: "Wave record",
    items: [
      "Name, purpose, owner, status, version",
      "Entities, locations, groups, roles",
      "Policies, integrations, outputs",
      "Data and support profiles",
    ],
  },
  {
    title: "Entry criteria",
    items: [
      "Availability, identity, policy",
      "Time and locale test results",
      "Integrations, notices, consultation",
      "Training dependency, support, evidence",
    ],
  },
  {
    title: "Cutover",
    items: [
      "Date, time, and zone",
      "Sequence, dependencies, any freeze",
      "Responsible roles and communication",
      "Monitoring during the window",
    ],
  },
  {
    title: "Rollback",
    items: [
      "Trigger and authority",
      "Steps, data and integration handling",
      "Communication plan",
      "Recovery validation",
    ],
  },
];

export default function RolloutWaves() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
              Rollout Waves, Pilot &amp; Cutover
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Approved Waves, Explicit Exclusions, Real Rollback
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Every wave names what is in scope and what is deliberately out of
              it. Entry criteria are checked, not assumed, and rollback is
              designed before activation rather than after an incident.
            </p>

            {/* Wave Cards */}
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {waveCards.map((card) => (
                <div
                  key={card.title}
                  className="flex flex-col rounded-2xl border border-emerald-100 bg-emerald-50/40 px-6 pb-6 pt-7 dark:border-slate-800 dark:bg-slate-900"
                >

                  <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                    {card.title}
                  </h3>

                  <ul className="mt-3.5 flex flex-col gap-2">

                    {card.items.map((item) => (
                      <li key={item} className="flex gap-3">

                        <span
                          className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                          aria-hidden="true"
                        />

                        <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                          {item}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}
          <div>
            <Image
              src="/global-deployment/Rollout%20Waves%20Pilot-Cutover.png"
              alt="Team reviewing a rollout wave plan with exclusions and a rollback plan"
              width={534}
              height={439}
              className="h-auto w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
