"use client";

import React from "react";

export default function MobileAppHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#071321] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[35%] top-[-220px] h-[620px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(20,184,166,0.14)_0%,rgba(20,184,166,0.05)_38%,transparent_72%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-[114px]">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-[650px]">
            {/* Label */}
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
              ZoikoTime Mobile App
            </p>

            {/* Heading */}
            <h1 className="max-w-[650px] text-[42px] font-bold leading-[1.12] tracking-[-1.5px] text-slate-100 sm:text-5xl lg:text-[54px]">
              Workforce assurance,
              <br />
              wherever{" "}
              <span className="text-teal-400">
                approved work
                <br />
                happens
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[590px] text-[16px] leading-7 text-slate-400">
              The ZoikoTime Mobile App gives Workers, Managers, and authorized
              teams a clear mobile experience for time records, Worker Status,
              breaks, Early Finish Requests, approvals, exceptions, and
              audit-ready activity.
            </p>

            {/* Notice */}
            <div className="mt-7 max-w-[600px] border-l-[3px] border-teal-500/40 bg-slate-800/40 px-4 py-3">
              <p className="text-sm leading-6 text-slate-400">
                No screenshots, keystroke content, personal browsing data,
                private messages, or personal device monitoring — just governed
                workforce records.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="h-12 rounded-[10px] bg-teal-500 px-7 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(20,184,166,0.18)] transition hover:bg-teal-400">
                Request Tailored Demo
              </button>

              <button className="h-12 rounded-[10px] border border-slate-600 bg-transparent px-7 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-800">
                Request Mobile App Pilot Access
              </button>
            </div>

            {/* Bottom Text */}
            <p className="mt-6 max-w-[650px] text-xs leading-5 text-slate-500">
              No screenshots. No keystroke content. No private mobile activity.
              Just governed records, transparent statuses, and audit-ready
              accountability.{" "}
              <span className="font-semibold text-teal-400">
                · Already have access? Log In
              </span>
            </p>
          </div>

          {/* RIGHT MOBILE MOCKUP */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[620px] w-[300px] rounded-[42px] bg-[#0d1d35] p-[12px] shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
              {/* Phone Screen */}
              <div className="relative h-full w-full overflow-hidden rounded-[34px] bg-[#f4f7f8]">
                {/* App Header */}
                <div className="h-[92px] bg-[#12a995] px-5 pt-5">
                  <p className="text-[12px] text-white/70">
                    Tuesday · 09:42
                  </p>

                  <h2 className="mt-1 text-[18px] font-semibold text-white">
                    Worker Home
                  </h2>
                </div>

                {/* App Body */}
                <div className="space-y-3 px-4 py-4">
                  {/* Working Status */}
                  <div className="flex h-9 w-[100px] items-center gap-2 rounded-full bg-[#e4f6f2] px-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />

                    <span className="text-[12px] font-semibold text-[#079b87]">
                      Working
                    </span>
                  </div>

                  {/* Assigned Shift */}
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Assigned Shift
                    </p>

                    <p className="mt-1 text-[15px] font-semibold text-[#14233e]">
                      09:00 – 17:30 · UTC
                    </p>
                  </div>

                  {/* Short Break */}
                  <button className="h-12 w-full rounded-xl border border-slate-300 bg-white text-[13px] font-semibold text-[#14233e]">
                    Take Short Break
                  </button>

                  {/* Lunch Break */}
                  <div className="flex h-[68px] items-center justify-center rounded-xl bg-[#e9eef1] px-4 text-center text-[13px] font-semibold leading-5 text-slate-400">
                    Lunch Break — not in today&apos;s
                    <br />
                    schedule
                  </div>

                  {/* Early Finish */}
                  <button className="h-12 w-full rounded-xl bg-[#12a995] text-[13px] font-semibold text-white">
                    Request Early Finish
                  </button>

                  {/* Timeline */}
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-4 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      Timeline
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-slate-500">
                      <span className="font-semibold text-[#14233e]">
                        09:00
                      </span>{" "}
                      Shift started ·{" "}
                      <span className="font-semibold text-[#14233e]">
                        10:30
                      </span>{" "}
                      Short break ·{" "}
                      <span className="font-semibold text-[#14233e]">
                        now
                      </span>{" "}
                      Working
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone Notch */}
              <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-[#0d1d35]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}