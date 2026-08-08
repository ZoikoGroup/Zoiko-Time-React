import type { ReactNode } from "react";
import { Eyebrow } from "./Pills";
import { CheckCircleIcon, SquareIcon, ClockIcon, LinesIcon } from "./Icons";

const areas: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <CheckCircleIcon size={16} className="text-teal-600" />,
    title: "Break & Rest",
    body: "Policy, state model, exceptions",
  },
  {
    icon: <SquareIcon size={16} className="text-blue-600" />,
    title: "Shift Integrity",
    body: "Control center, exceptions, audit",
  },
  {
    icon: <ClockIcon size={16} className="text-yellow-700" />,
    title: "Time Classification",
    body: "Rules, sources, review states",
  },
  {
    icon: <LinesIcon size={16} className="text-blue-950" />,
    title: "Reporting & Evidence",
    body: "Exports, retention, access",
  },
];

export default function ProductAreas() {
  return (
    <section className="w-full overflow-hidden bg-gray-50 dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">

        <Eyebrow label="Browse by Product Area" />

        <h2 className="mt-6 max-w-[580px] text-3xl font-semibold leading-tight text-slate-800 dark:text-white sm:text-4xl">
          Find updates by where you work in ZoikoTime.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {areas.map((area) => (
            <article
              key={area.title}
              className="flex flex-col rounded-2xl border border-slate-200 bg-gray-50 p-5 dark:border-slate-800 dark:bg-slate-900"
            >

              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-950">
                {area.icon}
              </span>

              <h3 className="mt-6 text-sm font-semibold leading-6 text-slate-800 dark:text-white">
                {area.title}
              </h3>

              <p className="mt-1.5 text-xs font-normal leading-5 text-gray-500 dark:text-slate-400">
                {area.body}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
