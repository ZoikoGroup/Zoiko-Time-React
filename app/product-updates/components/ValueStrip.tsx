import type { ReactNode } from "react";
import { CheckCircleIcon, SquareIcon, LinesIcon, ClockIcon } from "./Icons";

const values: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: <CheckCircleIcon size={14} className="text-teal-300" />,
    title: "Verified availability",
    body: "Exact state, scope, and last verification",
  },
  {
    icon: <SquareIcon size={14} className="text-teal-300" />,
    title: "Audience impact",
    body: "Role-specific implications, not one-size-fits-all",
  },
  {
    icon: <LinesIcon size={14} className="text-teal-300" />,
    title: "Current guidance",
    body: "Linked to authoritative documentation",
  },
  {
    icon: <ClockIcon size={14} className="text-teal-300" />,
    title: "Release-linked facts",
    body: "Exact records live in Release Notes",
  },
  {
    icon: <CheckCircleIcon size={14} className="text-teal-300" />,
    title: "Visible revisions",
    body: "Corrections are never silently overwritten",
  },
];

export default function ValueStrip() {
  return (
    <section className="w-full overflow-hidden bg-slate-800">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-5 lg:px-12">

        {values.map((value, index) => (
          <div
            key={value.title}
            className={`flex gap-3 px-4 py-6 ${
              index > 0 ? "border-t border-white/10 lg:border-l lg:border-t-0" : ""
            }`}
          >

            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
              {value.icon}
            </span>

            <div className="flex flex-col">

              <p className="text-xs font-semibold leading-5 text-white">
                {value.title}
              </p>

              <p className="mt-0.5 text-xs font-normal leading-4 text-slate-400">
                {value.body}
              </p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
