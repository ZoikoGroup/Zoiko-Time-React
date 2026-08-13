import React from 'react';

type FailureState = {
  title: string;
  body: React.ReactNode;
  never: React.ReactNode;
};

const failureStates: FailureState[] = [
  {
    title: 'Evidence service unavailable',
    body: '“Public evidence is temporarily unavailable. Security information and related Trust pages remain available.” With retry, plus Security, Status, and Help routes.',
    never: 'Never a blank directory or default-green cards.',
  },
  {
    title: 'A specific item is unavailable',
    body: 'Explain that the item is unavailable or moved, and show the current replacement where one is approved.',
    never: 'Never a bare 404, and never an unrelated substitute document.',
  },
  {
    title: 'Review due',
    body: 'Show the review-due or under-review status and the current limitation.',
    never: 'Never a “Current” badge held indefinitely.',
  },
  {
    title: 'Superseded or withdrawn',
    body: 'Show the replacement and preserve history where governance permits; remove withdrawn claims from positive listings.',
    never: 'Never let a stale claim persist in cache or schema.',
  },
  {
    title: 'Controlled request service down',
    body: 'Public evidence stays usable; the request route shows as unavailable with existing support and procurement fallbacks.',
    never: (
      <span className="font-bold">
        Never email confidential files as an insecure workaround.
      </span>
    ),
  },
  {
    title: 'No JavaScript',
    body: 'Trust content, evidence metadata, links, and public files are server-rendered and remain usable.',
    never: 'Public evidence is never hidden behind a client-only application.',
  },
];

export default function WhenEvidenceCannotBeShown() {
  return (
    <section className="w-full bg-slate-50 dark:bg-slate-950 px-4 py-14 sm:px-6 lg:px-8 lg:py-20 transition-colors duration-200">
      <div className="mx-auto w-full max-w-[1180px]">

        {/* Section heading */}
        <div className="mx-auto flex max-w-[720px] flex-col items-center gap-4 text-center">

          <h2 className="text-2xl font-bold leading-tight tracking-tight text-sky-950 dark:text-white sm:text-3xl md:text-4xl">
            When evidence cannot be shown
          </h2>

          <p className="text-sm leading-7 text-zinc-700 dark:text-slate-300 sm:text-base">
            The governing rule: never a blank directory, never a default-green card, and{' '}
            <span className="font-bold text-sky-950 dark:text-white">
              never a fallback to a sales form.
            </span>
          </p>

        </div>

        {/* Failure-state cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {failureStates.map((state) => (
            <article
              key={state.title}
              className="flex flex-col gap-2 rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <h3 className="text-sm font-bold leading-5 text-sky-950 dark:text-white">
                {state.title}
              </h3>

              <p className="text-xs font-normal leading-5 text-zinc-700 dark:text-slate-300">
                {state.body}
              </p>

              <p className="mt-auto pt-3 text-xs font-normal leading-5 text-zinc-600 dark:text-slate-400">
                {state.never}
              </p>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
