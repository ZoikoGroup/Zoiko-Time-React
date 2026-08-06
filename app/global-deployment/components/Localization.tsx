const facets = [
  {
    title: "Language",
    description:
      "Approved packs only, each with owner, version, review date, fallback, and quality evidence.",
  },
  {
    title: "Dates, numbers, time",
    description:
      "Locale-aware display with unambiguous operational and export formats. Governed values never change.",
  },
  {
    title: "Calendars and week conventions",
    description:
      "Display convention stays distinct from policy and period boundaries.",
  },
  {
    title: "Terminology",
    description:
      "A controlled glossary for workers, roles, states, rights, evidence, and actions.",
  },
  {
    title: "Legal and worker copy",
    description:
      "Authoritative localized notices and contractual text stay separate from interface translation.",
  },
  {
    title: "Accessibility per locale",
    description:
      "Labels, focus, text expansion, reflow, input methods, captions, contrast, and errors are verified.",
  },
  {
    title: "Fallback",
    description:
      "Languages never mix unpredictably. The current fallback is visible and can be changed with approval.",
  },
  {
    title: "Support boundary",
    description:
      "A translated interface does not imply support coverage in that language. Those are separate registries.",
    accent: true,
  },
];

export default function Localization() {
  return (
    <section className="w-full overflow-hidden bg-slate-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[780px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-600 dark:text-emerald-400">
            Localization, Language &amp; Locale
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            Localization Is Product, Content, Accessibility, and Support Work
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            Machine translation alone is not localization. Language packs
            release only with an owner, a version, a review date, a fallback,
            and quality evidence.
          </p>

        </div>

        {/* Facet Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {facets.map((facet) => (
            <div
              key={facet.title}
              className={`flex flex-col rounded-2xl border px-6 pb-6 pt-8 dark:border-slate-800 dark:bg-slate-900 ${
                facet.accent
                  ? "border-emerald-100 bg-emerald-50/40"
                  : "border-stone-200 bg-white shadow-[0px_1px_2px_0px_rgba(11,18,32,0.04)]"
              }`}
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {facet.title}
              </h3>

              <p className="mt-2 text-base font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {facet.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
