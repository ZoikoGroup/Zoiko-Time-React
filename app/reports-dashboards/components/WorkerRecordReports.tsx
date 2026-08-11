import Image from "next/image";

import SectionIntro from "./SectionIntro";
import { poppins } from "../fonts";

const rights = [
  "Drill down to source records where permitted",
  "Submit a correction and track its status",
  "See correction history, not just the current state",
  "Reach support or escalate if unresolved",
];

export default function WorkerRecordReports() {
  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Worker Transparency"
          title="My Record Reports — your own history, explained."
          description="Organization-level reporting never hides a worker's own-record pathway."
          titleClassName="max-w-[560px]"
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Image */}
          <Image
            src="/reports-dashboards/worker-transparency.png"
            alt="A worker reviewing their schedule and record on a mobile device"
            width={562}
            height={340}
            className="h-auto w-full rounded-[20px] shadow-[0px_8px_24px_0px_rgba(15,34,71,0.06)]"
          />

          {/* Content */}
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

              <span className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                For Workers
              </span>
            </div>

            <h3
              className={`${poppins.className} mt-4 text-2xl font-bold text-sky-950 dark:text-white`}
            >
              What&apos;s in your record, in plain language.
            </h3>

            <p className="mt-4 max-w-[560px] text-sm leading-6 text-slate-600 dark:text-slate-400">
              Recorded time, attendance, break/rest, shift, submission/approval,
              and release status — each with the contributing records, metric
              definitions, policy/rule versions, units, periods, and what&apos;s
              included or excluded.
            </p>

            <ul className="mt-7 space-y-3">
              {rights.map((right) => (
                <li key={right} className="flex items-start gap-3">
                  <Image
                    src="/reports-dashboards/check-mark.svg"
                    alt=""
                    width={11}
                    height={11}
                    aria-hidden="true"
                    className="mt-1.5 shrink-0"
                  />

                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {right}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
