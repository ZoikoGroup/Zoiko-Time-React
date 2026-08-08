"use client";

const accessibilityOptions = [
  {
    title: "Captions",
    description:
      "Closed captions ship with every video by default — never an optional add-on requested after the fact.",
  },
  {
    title: "Transcripts",
    description:
      "A full text transcript is available on every tutorial page and downloadable for offline reading or translation tools.",
  },
  {
    title: "Keyboard navigation",
    description:
      "Chapters, playback, and the verification checklist are all operable without a pointer device.",
  },
  {
    title: "Reduced motion",
    description:
      "No auto-playing video or audio on page load — playback always starts from a deliberate action.",
  },
  {
    title: "Readable at any zoom",
    description:
      "Layout and controls remain usable at 200% browser zoom without loss of content or function.",
  },
  {
    title: "Screen reader support",
    description:
      "Chapter lists, verification items, and metadata panels use semantic markup with accessible labels.",
  },
];

export default function AccessOptions() {
  return (
    <section className="w-full bg-white py-14 dark:bg-slate-950 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-teal-600 dark:text-teal-400">
            Accessibility Options
          </div>

          <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-slate-800 dark:text-white">
            Every tutorial, every way you need it
          </h2>
        </div>

        {/* Options */}
        <div className="mx-auto mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {accessibilityOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_6px_18px_rgba(14,31,61,0.05),0_1px_3px_rgba(14,31,61,0.06)] dark:border-slate-700 dark:bg-slate-900 dark:shadow-none"
            >
              <div className="flex items-start gap-3">
                {/* Teal Marker */}
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-teal-600 dark:bg-teal-400" />

                {/* Content */}
                <div>
                  <h3 className="text-base font-semibold leading-6 text-slate-800 dark:text-white">
                    {option.title}
                  </h3>

                  <p className="mt-3 text-sm leading-5 text-gray-500 dark:text-slate-400">
                    {option.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}