const profiles = [
  {
    title: "Jurisdiction profile",
    description:
      "Approved inputs, owner, source, version, effective date, review cadence, and stated limitations.",
  },
  {
    title: "Applicability review",
    description:
      "Authorized reviewers decide whether a profile applies to an entity, location, group, or work pattern.",
  },
  {
    title: "Policy mapping",
    description:
      "Time, attendance, break and rest, approval, correction, retention, evidence, and communication policies.",
  },
  {
    title: "Local exceptions",
    description:
      "Reason category, scope, owner, reviewer and approver, effective and expiry dates, impact, evidence.",
  },
  {
    title: "Conflict handling",
    description:
      "Neutral conflict state, activation blocked where required. The platform never selects a “more compliant” value on its own.",
  },
  {
    title: "Change control",
    description:
      "Version, compare, approve, schedule, communicate, roll back, and preserve historical applicability.",
  },
];

export default function JurisdictionConfiguration() {
  return (
    <section id="configuration-model" className="scroll-mt-24 w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[760px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Jurisdiction &amp; Legal Configuration
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Jurisdiction-Aware Configuration, With Limits Stated
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A governed workflow — not a compliance engine. Every profile has an
            owner, a source, a version, an effective date, a review cadence, and
            written limitations.
          </p>

        </div>

        {/* Profile Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white px-6 pb-6 pt-8 shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)] dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {profile.title}
              </h3>

              <p className="mt-1.5 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {profile.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
