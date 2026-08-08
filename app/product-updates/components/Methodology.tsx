import type { ReactNode } from "react";
import { Eyebrow } from "./Pills";
import { CheckCircleIcon, SquareIcon, ClockIcon, CloseIcon } from "./Icons";

const methods: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <CheckCircleIcon size={16} className="text-teal-600" />,
    title: "Source-verified",
    body: "Every claim links to a release record, capability source, or current documentation.",
  },
  {
    icon: <SquareIcon size={16} className="text-blue-600" />,
    title: "Availability-checked",
    body: "State, scope, and last verification are confirmed before publishing.",
  },
  {
    icon: <ClockIcon size={16} className="text-yellow-700" />,
    title: "Never silently changed",
    body: "Corrections, availability changes, and withdrawals stay visible in revision history.",
  },
];

const neverPublished = [
  "Roadmap intent or target dates",
  "Unverified or stale screenshots",
  "Invented customers, metrics, or versions",
  'Availability rounded up from "announced" to "available"',
];

export default function Methodology() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Methodology & Corrections" />

        <h2 className="mt-6 max-w-[520px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          How an update gets verified, published, and corrected.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">

          {methods.map((method) => (
            <article
              key={method.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 dark:bg-slate-950">
                {method.icon}
              </span>

              <h3 className="mt-5 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {method.title}
              </h3>

              <p className="mt-2 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {method.body}
              </p>

            </article>
          ))}

        </div>

        {/* Never Published */}
        <div className="mt-8 rounded-3xl bg-slate-800 p-8 sm:p-10">

          <h3 className="text-base font-semibold leading-6 text-white">
            What we never publish here
          </h3>

          <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
            {neverPublished.map((item) => (
              <li key={item} className="flex gap-3">

                <CloseIcon size={14} className="mt-0.5 shrink-0 text-teal-300" />

                <span className="text-xs font-normal leading-5 text-slate-300">
                  {item}
                </span>

              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}
