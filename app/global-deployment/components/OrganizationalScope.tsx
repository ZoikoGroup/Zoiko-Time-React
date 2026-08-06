import Image from "next/image";

const scopeCards = [
  {
    title: "Ownership",
    items: [
      "Deployment and entity owners",
      "Location and policy owners",
      "Identity, integration, support owners",
      "Privacy, legal, worker-communication owners",
    ],
  },
  {
    title: "Lifecycle states",
    items: [
      "Draft · review · approved",
      "Active · suspended",
      "Closing · archived · withdrawn",
      "Each with an effective date and evidence",
    ],
  },
  {
    title: "Boundaries",
    items: [
      "Included and excluded populations",
      "Work patterns and locations",
      "Systems, outputs, data profiles",
      "Named support contacts",
    ],
  },
  {
    title: "Impact preview",
    items: [
      "Affected policies and identities",
      "Integrations and reports",
      "Notices, approvals, workers",
      "Evidence references",
    ],
  },
];

export default function OrganizationalScope() {
  return (
    <section id="scope-model" className="scroll-mt-24 w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-14">

          {/* Left Content */}
          <div className="flex flex-col">

            <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
              Organizational Scope &amp; Entity Model
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
              Deployment Scope Is a Governed Object, Not an Inferred Org Chart
            </h2>

            <p className="mt-4 text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
              Model organization, legal entity, business unit, region, location,
              department, team, and workforce group relationships explicitly —
              then assign an owner to each one.
            </p>

            {/* Scope Cards */}
            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">

              {scopeCards.map((card) => (
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

            {/* No Inference Callout */}
            <div className="mt-5 rounded-xl border border-l-[3px] border-sky-800 bg-slate-50 px-5 pb-4 pt-6 dark:bg-slate-900">

              <p className="text-xs font-bold uppercase leading-5 tracking-wide text-sky-800 dark:text-sky-400">
                No inference
              </p>

              <p className="mt-1.5 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                Entity or address data never automatically determines law,
                policy, data location, or commercial availability. Someone
                authorized decides, and the decision is recorded.
              </p>

            </div>

          </div>

          {/* Right Image */}
          <div className="lg:pt-8">
            <Image
              src="/global-deployment/Organizational%20Scope-Entity%20Model.png"
              alt="Deployment scope modelled as a governed object with owners and evidence"
              width={534}
              height={648}
              className="h-auto w-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
