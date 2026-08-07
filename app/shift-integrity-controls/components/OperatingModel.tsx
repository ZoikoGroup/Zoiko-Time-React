import { Fragment } from "react";
import Image from "next/image";

const stages = [
  {
    icon: "/shift-integrity-controls/Configure.svg",
    title: "Configure",
    body: "Policy owner sets rules, thresholds, and effective dates",
  },
  {
    icon: "/shift-integrity-controls/Evaluate.svg",
    title: "Evaluate",
    body: "Deterministic rules assess captured events against policy",
  },
  {
    icon: "/shift-integrity-controls/Record.svg",
    title: "Record",
    body: "Shift event and evaluation preserved with source and time",
  },
  {
    icon: "/shift-integrity-controls/Review.svg",
    title: "Review",
    body: "Worker adds context; reviewer assesses and decides",
  },
  {
    icon: "/shift-integrity-controls/Resolve.svg",
    title: "Resolve",
    body: "Decision, rationale, and any correction are logged",
  },
  {
    icon: "/shift-integrity-controls/Preserve.svg",
    title: "Preserve",
    body: "Full version history retained per approved retention policy",
  },
];

export default function OperatingModel() {
  return (
    <section className="w-full bg-white py-16 dark:bg-slate-950 lg:py-20">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase leading-5 tracking-widest text-teal-600 dark:text-teal-400">
            Operating Model
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-800 dark:text-white sm:text-3xl">
            Configure → Evaluate → Record → Review → Resolve → Preserve
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-center lg:gap-0">
          {stages.map(({ icon, title, body }, index) => (
            <Fragment key={title}>
              <li className="flex flex-col items-center rounded-xl border border-slate-200 bg-white px-4 py-5 text-center shadow-[0px_6px_18px_0px_rgba(14,31,61,0.05)] dark:border-slate-700 dark:bg-slate-900 lg:aspect-square lg:flex-1 lg:justify-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 dark:bg-slate-800">
                  <Image
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className="h-4 w-4"
                  />
                </span>

                <h3 className="mt-3 text-sm font-semibold leading-5 text-slate-800 dark:text-white">
                  {title}
                </h3>

                <p className="mt-2 text-xs font-normal leading-4 text-gray-500 dark:text-slate-400">
                  {body}
                </p>
              </li>

              {index < stages.length - 1 && (
                <li
                  className="hidden shrink-0 px-2 text-lg font-normal leading-7 text-teal-600 lg:block"
                  aria-hidden="true"
                >
                  →
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
