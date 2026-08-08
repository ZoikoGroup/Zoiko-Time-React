import { Eyebrow } from "./Pills";

const collections = [
  {
    kicker: "Product Evolution",
    title: "Break & Rest, 2026",
    body: "Every meaningful change to the Break & Rest product area this year.",
    count: "9 updates",
  },
  {
    kicker: "Role Collection",
    title: "What's New for Reviewers",
    body: "Changes to queues, notes, and the review workflow.",
    count: "6 updates",
  },
  {
    kicker: "Trust Collection",
    title: "Privacy & Worker Rights",
    body: "Updates affecting data, access, or worker-visible records.",
    count: "5 updates",
  },
  {
    kicker: "Developer Collection",
    title: "API & Webhook Changes",
    body: "Contract, event, and integration changes for developers.",
    count: "7 updates",
  },
];

export default function Collections() {
  return (
    <section className="w-full overflow-hidden bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Meaningful Change Collections" />

        <h2 className="mt-6 max-w-[580px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          Updates grouped by theme, not just date.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {collections.map((collection) => (
            <article
              key={collection.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <p className="text-xs font-semibold uppercase leading-4 tracking-wide text-gray-500 dark:text-slate-400">
                {collection.kicker}
              </p>

              <h3 className="mt-3 text-base font-semibold leading-6 text-slate-800 dark:text-white">
                {collection.title}
              </h3>

              <p className="mt-3 flex-1 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {collection.body}
              </p>

              <p className="mt-6 text-xs font-semibold leading-5 text-teal-700 dark:text-teal-400">
                {collection.count}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
