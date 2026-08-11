import Image from "next/image";
import Link from "next/link";

import { poppins } from "../fonts";

const recordMeta = [
  { label: "Source status", value: "Verified" },
  { label: "Policy / version", value: "Break & Rest v3.2" },
  { label: "Current use", value: "Payroll reference" },
];

const timeline = [
  {
    icon: "node-circle.svg",
    tone: "bg-emerald-50",
    title: "Source event captured",
    time: "Aug 4, 2026 · 07:02 PDT",
  },
  {
    icon: "node-square.svg",
    tone: "bg-emerald-50",
    title: "Classified against policy v3.2",
    time: "Aug 4, 2026 · 07:02 PDT",
  },
  {
    icon: "node-plus.svg",
    tone: "bg-emerald-50",
    title: "Correction submitted by worker",
    time: "Aug 5, 2026 · 09:14 PDT",
  },
  {
    icon: "node-check.svg",
    tone: "bg-emerald-50",
    title: "Approved by reviewer",
    time: "Aug 6, 2026 · 14:40 PDT",
  },
  {
    icon: "node-pending.svg",
    tone: "bg-gray-100",
    title: "Release & receipt pending",
    time: "Awaiting downstream acknowledgment",
  },
];

const guarantees = [
  { icon: "hero-check.svg", label: "Attributable history, not a raw activity feed" },
  { icon: "hero-lock.svg", label: "Human review stays human" },
  { icon: "hero-chart.svg", label: "Version continuity, never silent overwrite" },
  { icon: "hero-message.svg", label: "Governed export, not a log dump" },
];

export default function EvidenceHero() {
  return (
    <section className="bg-gradient-to-b from-[#060E1A] via-[#0A1A2C] to-[#0C2138] pb-16">
      <div className="mx-auto w-full max-w-[1240px] px-6 pb-16 pt-16 lg:px-9 lg:pb-20 lg:pt-24">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Left content */}
          <div>
            <div className="flex items-center gap-3.5">
              <span className="h-1.5 w-1.5 rounded-[3px] bg-teal-600" />

              <span className="text-xs font-bold uppercase tracking-wide text-emerald-400">
                Evidence Ledger
              </span>
            </div>

            <h1
              className={`${poppins.className} mt-5 max-w-[540px] text-3xl font-bold leading-tight text-white sm:text-4xl`}
            >
              Keep every workforce-record change connected to its evidence.
            </h1>

            <p className="mt-7 max-w-[500px] text-base leading-7 text-white/70">
              One record, every material change — source event, deterministic
              classification, worker correction, authorized review, approval,
              release, acknowledgment, and reconciliation, connected and
              attributable from end to end.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/start-free"
                className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-8 text-base font-semibold text-white transition hover:bg-teal-700"
              >
                Start Free
              </Link>

              <Link
                href="/request-enterprise-demo"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-8 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Request Enterprise Demo
              </Link>
            </div>
          </div>

          {/* Record card */}
          <div className="overflow-hidden rounded-[20px] bg-white shadow-[0px_12px_40px_0px_rgba(15,34,71,0.14)]">

            {/* Card header */}
            <div className="flex items-center justify-between gap-4 border-b border-gray-100 px-5 py-4">
              <p className="text-xs text-slate-500">
                Record{" "}
                <span className="font-mono font-bold text-sky-950">
                  REC-88214-A
                </span>
              </p>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                v4 · Approved
              </span>
            </div>

            {/* Card meta */}
            <div className="grid grid-cols-3 border-b border-gray-100 px-5 py-4">
              {recordMeta.map((meta) => (
                <div key={meta.label}>
                  <p className="text-xs text-slate-500">{meta.label}</p>

                  <p className="mt-1 text-xs font-bold text-sky-950">
                    {meta.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="px-5 py-4">
              {timeline.map((event, index) => (
                <div key={event.title} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${event.tone}`}
                    >
                      <Image
                        src={`/evidence-ledger/${event.icon}`}
                        alt=""
                        width={12}
                        height={12}
                        aria-hidden="true"
                      />
                    </span>

                    {index < timeline.length - 1 && (
                      <span className="my-1 w-px flex-1 bg-gray-100" />
                    )}
                  </div>

                  <div className="pb-4 pt-0.5">
                    <p className="text-sm font-bold text-sky-950">
                      {event.title}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Card footer */}
            <div className="flex flex-wrap gap-3 border-t border-gray-100 px-5 py-4">
              <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">
                <Image
                  src="/evidence-ledger/check-small.svg"
                  alt=""
                  width={11}
                  height={11}
                  aria-hidden="true"
                />
                2 evidence available
              </span>

              <span className="inline-flex items-center gap-1.5 rounded-md bg-orange-100 px-2.5 py-1 text-xs font-bold text-yellow-600">
                <Image
                  src="/evidence-ledger/clock-amber.svg"
                  alt=""
                  width={11}
                  height={11}
                  aria-hidden="true"
                />
                1 restricted
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Guarantee strip */}
      <div className="border-t border-white/10 bg-gray-900">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-4">
          {guarantees.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 text-xs text-white/70"
            >
              <Image
                src={`/evidence-ledger/${item.icon}`}
                alt=""
                width={13}
                height={13}
                aria-hidden="true"
              />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
