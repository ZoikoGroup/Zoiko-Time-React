import Image from "next/image";

const rights = [
  {
    title: "Notice",
    items: [
      "Plain-language status and outcome",
      "Source and reason, within privacy boundaries",
      "Effective date and practical consequence",
      "Correction, challenge, escalation, and appeal options",
      "Representation or support route where configured",
      "Accessible delivery, with acknowledgement where required",
    ],
    footnote:
      "Acceptance is never a condition of viewing or challenging an outcome.",
  },
  {
    title: "Correction & reopening",
    items: [
      "Identify the disputed field, source, and requested change",
      "The original record stays visible in governed history",
      "A decision may be reopened, remanded, corrected, or superseded",
      "Downstream effects and reconciliation are tracked",
      "The affected person receives status and outcome",
    ],
    footnote:
      "A correction does not automatically mean the original reviewer acted improperly. Evidence changes; that is normal.",
  },
  {
    title: "Challenge & appeal",
    items: [
      "Grounds, new evidence, requested remedy, and representation where applicable",
      "Eligibility and time limits are configurable and jurisdiction-specific",
      "Appeal reviewer independence and conflict checks apply",
      "Outcomes: affirm, modify, reverse, remand, or request information",
      "Original and appeal records remain linked",
    ],
    footnote:
      "We do not promise a universal legal appeal right or deadline. An appeal is never routed back to the original decision-maker where policy requires independence.",
  },
];

export default function ReviewRights() {
  return (
    <section
      id="review-rights"
      className="w-full scroll-mt-24 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        {/* Section Heading */}
        <div className="mx-auto flex max-w-[800px] flex-col items-center text-center">

          <p className="text-xs font-bold uppercase leading-5 tracking-wider text-emerald-700 dark:text-emerald-400">
            Notice, Correction, Challenge &amp; Appeal
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-sky-950 dark:text-white sm:text-4xl">
            What the Affected Person Receives and Can Do
          </h2>

          <p className="mt-4 max-w-[645px] text-base font-normal leading-7 text-zinc-700 dark:text-slate-300">
            A remedy path that depends on knowing it exists is not a remedy.
            Notice carries the options with it.
          </p>

        </div>

        {/* Rights */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {rights.map((right) => (
            <article
              key={right.title}
              className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-base font-bold leading-6 text-sky-950 dark:text-white">
                {right.title}
              </h3>

              <ul className="mt-4 flex flex-1 flex-col gap-2.5">
                {right.items.map((item) => (
                  <li key={item} className="flex gap-2.5">

                    <span
                      className="mt-2.5 h-[5px] w-[5px] shrink-0 rounded-xs bg-emerald-400"
                      aria-hidden="true"
                    />

                    <span className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                      {item}
                    </span>

                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">
                {right.footnote}
              </p>

            </article>
          ))}

        </div>

        {/* No silent overwrite */}
        <div className="mt-6 flex gap-3 rounded-xl border border-emerald-100 bg-[#F5FEF7] p-5 dark:border-emerald-900/40 dark:bg-emerald-950/20">

          <Image
            src="/human-in-command/Frame.svg"
            alt=""
            width={20}
            height={20}
            className="mt-0.5 shrink-0"
          />

          <p className="text-sm font-normal leading-6 text-zinc-700 dark:text-slate-300">

            <span className="font-bold text-sky-950 dark:text-white">
              No silent overwrite, anywhere.
            </span>{" "}
            Corrections, reopenings, supersession, and appeal all preserve prior
            state with attributable history. What the record said before remains
            visible alongside what it says now.

          </p>

        </div>

      </div>
    </section>
  );
}
