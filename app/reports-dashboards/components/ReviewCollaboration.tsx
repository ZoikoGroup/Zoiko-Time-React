import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const actions = [
  "Publish, request changes, or approve delivery",
  "Pause, withdraw, escalate, or close with a reason",
  "Corrections route to the source record, never the aggregate",
];

export default function ReviewCollaboration() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Review & Accountable Collaboration"
          title="Annotated, assigned, and decided by named people."
          description="Corrections route back to source-record workflows — nobody edits an aggregate number directly."
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Content */}
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

              <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                For Reviewers
              </span>
            </div>

            <h3
              className={`${poppins.className} mt-4 text-2xl font-bold text-sky-950 dark:text-white`}
            >
              Every annotation is attributable.
            </h3>

            <p className="mt-4 max-w-[545px] text-sm leading-6 text-slate-600 dark:text-slate-400">
              Annotations carry author, role, time, the exact report or dashboard
              version, the object referenced, a reason, supporting evidence,
              visibility, and status. Assignments carry a named owner, due date,
              dependencies, delegation, and escalation path.
            </p>

            <ul className="mt-7 space-y-3">
              {actions.map((action) => (
                <li key={action} className="flex items-start gap-3">
                  <Image
                    src="/reports-dashboards/check-mark.svg"
                    alt=""
                    width={11}
                    height={11}
                    aria-hidden="true"
                    className="mt-1.5 shrink-0"
                  />

                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {action}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <Image
            src="/reports-dashboards/review-collaboration.png"
            alt="A team reviewing a report together around a table"
            width={562}
            height={340}
            className="h-auto w-full rounded-[20px] shadow-[0px_8px_24px_0px_rgba(15,34,71,0.06)]"
          />

        </div>
      </div>
    </section>
  );
}
