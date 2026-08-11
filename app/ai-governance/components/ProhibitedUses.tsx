const groups = [
  {
    title: "Inference prohibitions",
    items: [
      "Emotion, mood, personality, intent, loyalty, or honesty inference",
      "Productivity worth or protected-trait inference from workforce behavior",
      "Covert ranking, hidden risk scores, or worker comparison without legitimate purpose and approved authority",
      "Face recognition, voiceprint identification, or biometric categorization — no current claim exists, and none is implied",
    ],
  },
  {
    title: "Authority prohibitions",
    items: [
      "Automated payroll, discipline, termination, promotion, hiring, legal, compliance, or misconduct conclusions",
      "Autonomous access escalation, permission grant, evidence alteration, record deletion, incident closure, or policy override",
      "Training or provider reuse of customer or worker data outside approved contractual, privacy, and technical boundaries",
      "Fabricated sources, unsupported legal advice, guaranteed compliance conclusions, or claims of human-judgment equivalence",
      "Dark patterns that pressure users to accept AI, conceal a human alternative, or make correction and appeal harder",
    ],
  },
];

export default function ProhibitedUses() {
  return (
    <section className="w-full overflow-hidden bg-[#060B1F]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-400">
            Prohibited &amp; Unavailable Uses
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Nine Things ZoikoTime Will Not Build
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-white">
            These are not gaps awaiting a roadmap. They cannot be weakened by
            plan, configuration, or a hidden enterprise add-on, and changing any of
            them would require product, privacy, security, legal, ethical-design,
            and worker-trust review.
          </p>

          <p className="mt-6 max-w-[820px] text-base font-bold leading-6 text-white">
            No screenshots, keystroke content, URL history, application-name
            monitoring, or clipboard collection under any tier or configuration.
          </p>

        </div>

        {/* Prohibition Groups */}
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {groups.map((group) => (
            <article
              key={group.title}
              className="flex flex-col rounded-2xl border border-white/[0.12] bg-white/[0.043] px-6 pb-6 pt-10 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)]"
            >

              <h3 className="text-base font-bold leading-6 text-white">
                {group.title}
              </h3>

              <ul className="mt-3 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-white">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

            </article>
          ))}

        </div>

        <p className="mt-6 text-center text-xs font-normal leading-5 text-white">
          An unavailable request identifies its limitation and routes to a
          deterministic or human alternative. It is never presented as a coming
          feature.
        </p>

      </div>
    </section>
  );
}
