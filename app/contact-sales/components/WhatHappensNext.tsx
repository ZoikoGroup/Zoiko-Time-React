import { Fragment } from "react";
import { ArrowRight, CalendarCheck, ClipboardList, Users } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardList,
    title: "1. We review your request",
    text: "We'll understand your needs and goals.",
  },
  {
    icon: Users,
    title: "2. We connect you with the right team",
    text: "A ZoikoTime specialist will reach out, usually within 1 business day.",
  },
  {
    icon: CalendarCheck,
    title: "3. You choose your next step",
    text: "Explore a demo, discuss pricing, or plan your rollout.",
  },
];

export default function WhatHappensNext() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 lg:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-[34px]">
          What happens next?
        </h2>

        <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:flex lg:items-start">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <Fragment key={title}>
              {i > 0 && (
                <li aria-hidden="true" className="hidden shrink-0 pt-4 lg:block">
                  <ArrowRight className="size-6 text-[#16803c]" />
                </li>
              )}
              <li className="flex flex-1 items-start gap-4 sm:flex-col lg:flex-row">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#e8f3ee] text-[#16803c]">
                  <Icon className="size-6" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-[17px] font-bold leading-snug text-slate-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
