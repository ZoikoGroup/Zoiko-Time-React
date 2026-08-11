import Image from "next/image";

import SectionIntro from "./SectionIntro";
import StatePill, { type PillTone } from "./StatePill";
import { poppins } from "../fonts";

const correction = [
  { label: "Change", value: "Break duration corrected" },
  { label: "Reason", value: "Supervisor confirmed actual time" },
  { label: "Actor role", value: "Compliance Reviewer" },
  { label: "Evidence category", value: "Supervisor confirmation" },
];

const rights = [
  "Full access to your own record history",
  "The right to request a correction",
  "The right to escalate an unresolved request",
  "Never required to waive correction, privacy, appeal, grievance, legal, or contractual rights — under any tier or configuration",
];

const requestStates: { label: string; tone: PillTone }[] = [
  { label: "Submitted", tone: "gray" },
  { label: "Assigned", tone: "gray" },
  { label: "Information Requested", tone: "amber" },
  { label: "Under Review", tone: "blue" },
  { label: "Resolved", tone: "green" },
  { label: "Escalated", tone: "red" },
  { label: "Closed", tone: "gray" },
  { label: "Reopened", tone: "purple" },
];

export default function WorkerVisibility() {
  return (
    <section className="bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 lg:px-9 lg:py-20">
        <SectionIntro
          eyebrow="Worker Visibility & Correction"
          title="Your record, explained in plain language."
          description="Workers see their own history, why something changed, who acted, and how to request a correction — not a black box."
          descriptionClassName="max-w-[660px]"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Correction detail */}
          <div className="rounded-[20px] border border-gray-200 bg-white px-6 py-4 shadow-[0px_8px_24px_0px_rgba(15,34,71,0.06)] dark:border-slate-800 dark:bg-slate-950">
            {correction.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-b border-gray-100 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 dark:border-slate-800"
              >
                <span className="text-sm text-slate-500">{row.label}</span>

                <span className="text-sm font-semibold text-sky-950 dark:text-white">
                  {row.value}
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between gap-6 py-4">
              <span className="text-sm text-slate-500">Status</span>

              <StatePill label="Resolved" tone="green" />
            </div>
          </div>

          {/* Worker rights */}
          <div className="rounded-[20px] bg-gray-900 px-6 py-6">
            <div className="flex items-center gap-2.5">
              <Image
                src="/evidence-ledger/icon-worker.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
              />

              <h3
                className={`${poppins.className} text-base font-bold text-white`}
              >
                Worker rights, always
              </h3>
            </div>

            <ul className="mt-5 space-y-3">
              {rights.map((right) => (
                <li key={right} className="flex items-start gap-3">
                  <Image
                    src="/evidence-ledger/check-light.svg"
                    alt=""
                    width={14}
                    height={14}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0"
                  />

                  <span className="text-sm leading-5 text-white/80">
                    {right}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Request states */}
        <div className="mt-6 flex flex-wrap gap-2">
          {requestStates.map((state) => (
            <StatePill key={state.label} label={state.label} tone={state.tone} />
          ))}
        </div>
      </div>
    </section>
  );
}
